async function genForm() {
  if (typeof window.genFormInterval !== "undefined") {
    // console.log('has interval');
    return;
  }
  if (window.location.pathname == 'blank') {
    return;
  }
  window.genFormInterval = setInterval(() => {
    if (window.location.pathname == 'blank') {
      clearInterval(window.genFormInterval);
      return;
    }
    // console.log('???', window.location.pathname)
    init();
  }, 1500);
}

async function getI18n() {
  const i18nConfig = await invoke('get_setting', {k: 'chat_i18n'});
  if (i18nConfig.k) {
    return i18nConfig.v;
  } else {
    return 'en';
  }
}

async function init() {
    // console.log('ui:path', window.location.pathname)
    if (!window.location.pathname.includes('/c/')) {
        return
    }
    clearInterval(window.genFormInterval);
    if (window.chatgptStacksNodeInterval) {
        clearInterval(window.chatgptStacksNodeInterval);
    }

    const publicPageData = {
      chatId: '',
      showQuestion: true,
      leftStatus: false,
    };

    // 0 none 1 select all 2 unselect all
    window.selectBoxCheckedGlobalStatus = false;
    window.chatgptStacksNodeInterval = setInterval(async () => {
        createAction();
    }, 1500);

    async function createForm(append = false) {
      const i18n = await getI18n();

      let saveFormNodeId;
      let saveFormId = "chatgpt-stacks-save-form";
      let appendFormId = "chatgpt-stacks-append-form";
      if (append) {
        saveFormNodeId = appendFormId;
      } else {
        saveFormNodeId = saveFormId;
      }

      let chatInfo = {
        chat_id: '',
        category: '',
      };
      chatInfo = await invoke('get_chat', {chatId: publicPageData.chatId});
      if (append) {
        if (!chatInfo.chat_id) {
          _showToast('未保存过当前任何对话, 请先选择对话并保存');
          return;
        }
      }

      const hasChatgptStacksFormNode = document.querySelector("#" + saveFormNodeId);
      if (hasChatgptStacksFormNode) {
        return;
      }

      let otherFormNode = null;
      if (append) {
        otherFormNode = document.querySelector("#" + saveFormId)
      } else {
        otherFormNode = document.querySelector("#" + appendFormId)
      }
      if (otherFormNode) {
        otherFormNode.remove();
      }

      const _chatgpt_relative_form = document.querySelector("form>div")
      const chatgptStacksFormNode = document.createElement('div');
      chatgptStacksFormNode.id = saveFormNodeId;
      chatgptStacksFormNode.style.position = 'absolute';
      chatgptStacksFormNode.style.width = '100%';
      chatgptStacksFormNode.style.bottom = '140px';
      chatgptStacksFormNode.style.left = '0';

      if (append) {
        chatgptStacksFormNode.innerHTML = '<div style="background-color: #fefefe; padding: 20px; border-radius: 5px; box-shadow: rgba(50, 50, 50, 0.15) 0px 0px 10px 5px; width: 40%;"> <div id="saveModalToRsTitle" style="margin-bottom:10px;">追加到已存对话</div> <div style="display:flex;justify-content: space-between;align-items: center;margin-bottom: 10px;"> <div style="font-size:12px;width:40px; ">标题</div> <input id="saveModalToRsInput" style="display: block; font-size: 12px; padding: 5px; width: 100%; box-sizing: border-box; border-radius: 3px; border: 1px solid #ccc;" type="text" placeholder="标题" /> </div> <div style="display:flex;justify-content: space-between;align-items: center;margin-bottom: 10px;"> <div style="font-size:12px;width:40px;">分类</div> <select id="saveModalToRsSelect" style="font-size:12px;display: block; padding: 5px; width: 100%; box-sizing: border-box; border-radius: 3px; border: 1px solid #ccc;"></select> </div> <div id="saveModalToRsButtons" style="display: flex; justify-content: flex-end; margin-top: 20px;"> <button id="saveModalToRsCancelBtn" style="margin-left: 10px; padding: 5px 10px; border-radius: 3px; border: none; color: #fff; background-color: #ccc; cursor: pointer;font-size:12px;">取消</button> <button id="saveModalToRsOkBtn" style="margin-left: 10px; padding: 5px 10px; border-radius: 3px; border: none; color: #fff; background-color: #1296db; cursor: pointer;font-size:12px;">确定</button> </div> </div>';
      } else {
        if ('en' == i18n) {
          chatgptStacksFormNode.innerHTML = '<div style="background-color: #fefefe; padding: 20px; border-radius: 5px; box-shadow: rgba(50, 50, 50, 0.15) 0px 0px 10px 5px; width: 40%;"> <div id="saveModalToRsTitle" style="margin-bottom:10px;">Save current conversation</div> <div style="display:flex;justify-content: space-between;align-items: center;margin-bottom: 10px;"> <div style="font-size:12px;width:40px;margin-right: 12px; ">Title</div> <input id="saveModalToRsInput" style="display: block; font-size: 12px; padding: 5px; width: 100%; box-sizing: border-box; border-radius: 3px; border: 1px solid #ccc;" type="text" /> </div> <div style="display:flex;justify-content: space-between;align-items: center;margin-bottom: 10px;"> <div style="font-size:12px;width:40px;margin-right: 12px;">Category</div> <select id="saveModalToRsSelect" style="font-size:12px;display: block; padding: 5px; width: 100%; box-sizing: border-box; border-radius: 3px; border: 1px solid #ccc;"></select> </div> <div id="saveModalToRsButtons" style="display: flex; justify-content: flex-end; margin-top: 20px;"> <button id="saveModalToRsCancelBtn" style="margin-left: 10px; padding: 5px 10px; border-radius: 3px; border: none; color: #fff; background-color: #ccc; cursor: pointer;font-size:12px;">Cancel</button> <button id="saveModalToRsOkBtn" style="margin-left: 10px; padding: 5px 10px; border-radius: 3px; border: none; color: #fff; background-color: #4caf50; cursor: pointer;font-size:12px;">Submit</button> </div> </div>';
        } else {
          chatgptStacksFormNode.innerHTML = '<div style="background-color: #fefefe; padding: 20px; border-radius: 5px; box-shadow: rgba(50, 50, 50, 0.15) 0px 0px 10px 5px; width: 40%;"> <div id="saveModalToRsTitle" style="margin-bottom:10px;">保存当前对话</div> <div style="display:flex;justify-content: space-between;align-items: center;margin-bottom: 10px;"> <div style="font-size:12px;width:40px;margin-right: 12px; ">标题</div> <input id="saveModalToRsInput" style="display: block; font-size: 12px; padding: 5px; width: 100%; box-sizing: border-box; border-radius: 3px; border: 1px solid #ccc;" type="text" /> </div> <div style="display:flex;justify-content: space-between;align-items: center;margin-bottom: 10px;"> <div style="font-size:12px;width:40px;margin-right: 12px;">分类</div> <select id="saveModalToRsSelect" style="font-size:12px;display: block; padding: 5px; width: 100%; box-sizing: border-box; border-radius: 3px; border: 1px solid #ccc;"></select> </div> <div id="saveModalToRsButtons" style="display: flex; justify-content: flex-end; margin-top: 20px;"> <button id="saveModalToRsCancelBtn" style="margin-left: 10px; padding: 5px 10px; border-radius: 3px; border: none; color: #fff; background-color: #ccc; cursor: pointer;font-size:12px;">取消</button> <button id="saveModalToRsOkBtn" style="margin-left: 10px; padding: 5px 10px; border-radius: 3px; border: none; color: #fff; background-color: #4caf50; cursor: pointer;font-size:12px;">确定</button> </div> </div>';
        }
      }
      _chatgpt_relative_form.appendChild(chatgptStacksFormNode);

      const saveInput = document.querySelector("#saveModalToRsInput");
      if ('en' == i18n) {
        saveInput.placeholder = 'Title';
      } else {
        saveInput.placeholder = '标题';
      }
      if (chatInfo.chat_id == publicPageData.chatId) {
        saveInput.value = chatInfo.name;
      } else {
        const nowTitle = getTitle();
        if (nowTitle) {
          saveInput.value = nowTitle;
        }
      }

      if (chatInfo.chat_id) {
        const saveText = document.querySelector("#saveModalToRsOkBtn");
        if (i18n == 'zh') {
          saveText.innerText = '更新';
        } else {
          saveText.innerText = 'update';
        }
      }

      if (append) {
        saveInput.setAttribute("disabled", "disabled");
        saveInput.style.cursor = 'not-allowed';
      } else {
        saveInput.focus();
        const inputLength = saveInput.value.length;
        saveInput.setSelectionRange(inputLength, inputLength);
      }

      invoke('get_category_list').then(async (res) => {
        const saveSelect = document.querySelector("#saveModalToRsSelect");
        for (let i = 0; i < res.length; i++) {
          let op = document.createElement("option");
          op.value = res[i].id;
          op.innerText = res[i].name;
          saveSelect.appendChild(op);
        }

        if (chatInfo.category) {
          saveSelect.value = chatInfo.category;
        }
        if (append) {
          saveSelect.style.cursor = 'not-allowed';
          saveSelect.disabled = true;
        }

        // console.log('category', res)
        // console.log('chatId', publicPageData.chatId)
      });

      chatgptStacksFormNode.onclick = function(e) {
        if (e.target.id == 'saveModalToRsCancelBtn') {
          chatgptStacksFormNode.remove();
        } else if (e.target.id == 'saveModalToRsOkBtn') {
          const innerHtmlData = getInnerHtml();
          // if (innerHtmlData.length < 1) {
          //   _showToast('未保存过当前任何对话, 请先选择对话并保存');
          //   return;
          // }
          // console.log('inner!', innerHtmlData)

          const saveSelect = document.querySelector("#saveModalToRsSelect");
          const saveInput = document.querySelector("#saveModalToRsInput");
          const ensureRes = {
            chatId: publicPageData.chatId,
            html: JSON.stringify({list: innerHtmlData}),
            category: saveSelect.value,
            name: saveInput.value,
            append: append,
          };
          invoke('save_html', ensureRes).then(async res => {
            if (i18n == 'zh') {
              _showToast('成功');
            } else {
              _showToast('Success');
            }
            chatgptStacksFormNode.remove();
            for (const qa of document.querySelectorAll("#selectQA")) {
              qa.remove();
            }
            const q = document.querySelector('#stack-select');
            q.innerHTML = (await setIcon('select')).svg;
          }, (err) => {
            _showToast(err);
          });
        }
      }
    }

    async function createAction() {
      const hasChatgptStacksNode = document.querySelector("#chatgpt-stacks");
        if (hasChatgptStacksNode) {
            return;
        }

        const regex = /\/c\/([a-f\d-]+)/i;
        const matchId = regex.exec(window.location.pathname);
        if (matchId) {
          publicPageData.chatId = matchId[1];
        }

        const _chatgpt_relative_input = document.querySelector("form>div")
        const chatgptStacksNode = document.createElement('div');
        chatgptStacksNode.id = 'chatgpt-stacks';
        chatgptStacksNode.style.width = '200px';
        chatgptStacksNode.style.maxWidth = '200px';
        // chatgptStacksNode.style.height = '38px';
        chatgptStacksNode.style.position = 'absolute';
        chatgptStacksNode.style.padding = '5px';
        chatgptStacksNode.style.left = '0';
        chatgptStacksNode.style.border = '1px solid rgba(0,0,0,.1)';
        chatgptStacksNode.style.borderRadius = '0.25rem';
        // chatgptStacksNode.style.boxShadow = 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 0px 10px 0px';
        chatgptStacksNode.style.display = 'flex';
        chatgptStacksNode.style.alignItems = 'center';
        chatgptStacksNode.style.justifyContent = 'space-around';
        chatgptStacksNode.style.backgroundColor = 'white';

        if (document.querySelectorAll("button[class='btn relative btn-neutral border-0 md:border']").length > 0) {
            chatgptStacksNode.style.top = '-20px';
        } else {
            chatgptStacksNode.style.top = '-60px';
        }

        // , 'copy'
        const chatgptStacksCollect = ['select', 'add', 'show', 'left'];
        chatgptStacksCollect.forEach(async (item, index) => {
          let cParent = document.createElement('div');
          cParent.style.display = 'flex';
          cParent.style.flexDirection = 'column';
          cParent.style.justifyContent = 'center';
          cParent.style.alignItems = 'center';

          let iconItem = await setIcon(item);

          let cDesc = document.createElement('div');
          cDesc.style.fontSize = '12px';
          cDesc.id = 'stack-desc-' + item;
          cDesc.innerText = iconItem.desc;

          let icon = document.createElement('div');
          icon.style.cursor = 'pointer';
          // icon.style.margin = '0 5px 0 5px';
          icon.id = 'stack-' + item;
          icon.innerHTML = iconItem.svg;

          if (item == 'select') {
            icon.onclick = async function(e) {
              const _class1 = "div[class='relative flex']";
              const _class2 = "div[class='relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center']";

              const q = document.querySelector('#stack-select');
              const selectStatus = setSelectBox(_class1, _class2);
              if (null == selectStatus) {
                const allQ = document.querySelectorAll(_class1);
                const allQLast = allQ.length - 1;
                if (allQLast >= 0) {
                  allQ[allQLast].scrollIntoView({ behavior: 'smooth' });
                }
              } else if (selectStatus) {
                q.innerHTML = (await setIcon('selectAll')).svg;
              } else {
                q.innerHTML = (await setIcon('select')).svg;
              }
            }
          } else if (item == 'add') {
            icon.onclick = function(e) {
              createForm();
            }
          } else if (item == 'append') {
            icon.onclick = function(e) {
              createForm(true);
            }
          } else if (item == 'show') {
            icon.onclick = async function() {
              const q = document.querySelector('#stack-show');
              const qDesc = document.querySelector("#stack-desc-show");
              const titles = document.querySelector("div[class='flex flex-col gap-2 pb-2 text-gray-100 text-sm']");
              titles.style.transition = 'all 0.3s';
              publicPageData.showQuestion = !publicPageData.showQuestion;
              if (publicPageData.showQuestion) {
                // titles.style.opacity = 1;
                titles.style.display = 'flex';
                q.innerHTML = (await setIcon('show')).svg;
                qDesc.innerText = (await setIcon('show')).desc;
              } else {
                // titles.style.opacity = 0;
                titles.style.display = 'none';
                q.innerHTML = (await setIcon('hide')).svg;
                qDesc.innerText = (await setIcon('hide')).desc;
              }
            }
          } else if (item == 'left') {
            icon.onclick = async () => {
              publicPageData.leftStatus = !publicPageData.leftStatus;

              const q = document.querySelector('#stack-left');
              const qDesc = document.querySelector("#stack-desc-left");

              if (publicPageData.leftStatus) {
                q.innerHTML = (await setIcon('right')).svg;
                qDesc.innerText = (await setIcon('right')).desc;
                const chatgptStacksCollect = ['select', 'add', 'show'];
                chatgptStacksCollect.forEach((item, index) => {
                  document.querySelector('#stack-' + item).style.display = 'none';
                  document.querySelector('#stack-desc-' + item).innerText = '';
                });
                chatgptStacksNode.style.width = 'auto';
              } else {
                q.innerHTML = (await setIcon('left')).svg;
                qDesc.innerText = (await setIcon('left')).desc;
                const chatgptStacksCollect = ['select', 'add', 'show'];
                chatgptStacksCollect.forEach(async (item, index) => {
                  document.querySelector('#stack-' + item).style.display = 'block';
                  document.querySelector('#stack-desc-' + item).innerText = (await setIcon(item)).desc;
                });
                chatgptStacksNode.style.width = '200px';
              }
            }
          }

          cParent.append(icon);
          cParent.append(cDesc);

          chatgptStacksNode.appendChild(cParent);
        });
        _chatgpt_relative_input.appendChild(chatgptStacksNode);
    }

    function getTextContentWithFilter(parentNode, filterClassName) {
      let textContent = '';

      if ((false !== filterClassName) && (parentNode.className === filterClassName)) {
        return textContent;
      }
  
      if (parentNode.nodeType === Node.TEXT_NODE) {
        textContent += parentNode.textContent;
      }
  
      Array.from(parentNode.childNodes).forEach(childNode => {
        textContent += getTextContentWithFilter(childNode, filterClassName);
      });
  
      return textContent;
    }

    function getAllTextContentsSeparatedBy(parentNode, separator, filterClassName) {
      let textContents = '';
    
      Array.from(parentNode.childNodes).forEach(childNode => {
        textContents += getTextContentWithFilter(childNode, filterClassName) + separator;
      });
  
      return textContents.slice(0, -separator.length);
    }

    function getInnerHtml() {
      const selectQAList = document.querySelectorAll("#selectQA")
      const insertList = [];
      for (const qa of selectQAList) {
        if (!qa.checked) {
          continue;
        }
        const ppNode = qa.parentNode.parentNode
        for (const child of ppNode.nextSibling.children) {
          if (child.className == 'flex flex-grow flex-col gap-3') {
            if (child.children.length > 0) {
              if (
                  (typeof child.children[0].firstChild !== "undefined") 
                  && 
                  (typeof child.children[0].firstChild.className !== "undefined")
                  &&
                  (child.children[0].firstChild.className.indexOf('markdown') > -1)
              ) {
                insertList.push({
                  typed: 2,
                  html: child.children[0].firstChild.innerHTML,
                  content: getAllTextContentsSeparatedBy(child.children[0].firstChild, "|", 'flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans'),
                });
              } else {
                insertList.push({
                  typed: 1,
                  html: child.innerHTML,
                  content: getAllTextContentsSeparatedBy(child, "|", false),
                });
              }
            } else if (child.children[0].className == 'markdown prose w-full break-words dark:prose-invert light') {
              insertList.push({
                typed: 2,
                html: child.children[0].innerHTML,
                content: getAllTextContentsSeparatedBy(child.children[0], "|", 'flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans'),
              });
            }
          }
        }
      }
      if (insertList.length > 0) {
        // console.log('insertList', insertList)
        return insertList;
      }
      return [];
    }

    function getTitle() {
      const queryDom = document.querySelector("a[class='flex py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer break-all pr-14 bg-gray-800 hover:bg-gray-800 group']");
      // console.log('queryDom', queryDom);
      for (const child of queryDom.children) {
        if (child.className == "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative") {
          return child.textContent;
        }
      }
    }

    function appendSelectBox(queryDomList) {
      let selectDomIsFull = true;
      queryDomList.forEach((item) => {
        let hasSelectQA = false;
        for (const child of item.children) {
          // console.log('className!', typeof child.id, child.id)
          if (child.id == 'selectQA') {
            hasSelectQA = true;
            break;
          }
        }
        if (!hasSelectQA) {
          selectDomIsFull = false;
          item.appendChild(genSelectBox());
        }
      })
      return selectDomIsFull;
    }

    function setSelectBox(_class1, _class2) {
      const queryDomList1 = document.querySelectorAll(_class1);
      const queryDomList2 = document.querySelectorAll(_class2);
      const appendRes1 = appendSelectBox(queryDomList1);
      const appendRes2 = appendSelectBox(queryDomList2);
      if (appendRes1 && appendRes2) {
        window.selectBoxCheckedGlobalStatus = !window.selectBoxCheckedGlobalStatus
        const selectQAList = document.querySelectorAll("#selectQA")
        for (const qa of selectQAList) {
          qa.checked = window.selectBoxCheckedGlobalStatus;
        }
        return window.selectBoxCheckedGlobalStatus;
      }
      return null;
    }

    function genSelectBox() {
      const selectBox = document.createElement('input');
      selectBox.type = 'checkbox';
      selectBox.id = 'selectQA';
      selectBox.style.position = 'absolute';
      selectBox.style.margin = 'auto';
      selectBox.style.left = 0;
      selectBox.style.right = 0;
      
      selectBox.style.bottom = '-25px';
      selectBox.style.width = '20px';
      selectBox.style.height = '20px';
      selectBox.checked = false;
      return selectBox;
    }

    async function setIcon(type) {
      const iconConfig = {
        select: {
          desc: '选择',
          svg: '<svg t="1680189393572" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1880" width="25" height="25"><path d="M947.203 102.395v844.797H102.395c-18.099 0-25.6-7.488-25.6-25.597v-819.2c0-18.099 7.501-25.6 25.6-25.6h819.2c18.109 0 25.608 7.501 25.608 25.6zM102.395 1024h819.2C978.149 1024 1024 978.15 1024 921.595v-819.2C1024 45.84 978.15 0 921.595 0h-819.2C45.84 0 0 45.84 0 102.395v819.2C0 978.149 45.84 1024 102.395 1024z" fill="#333333" p-id="1881"></path></svg>',
        },
        selectAll: {
          desc: '全选',
          svg: '<svg t="1680224640585" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2671" width="25" height="25"><path d="M216.801 485.336c-15.579-14.381-39.881-13.408-54.26 2.174-14.392 15.579-13.417 39.873 2.162 54.263l188.79 174.262c41.554 38.36 106.338 35.766 144.698-5.786l388.951-421.366c14.383-15.593 13.417-39.885-2.173-54.263-15.58-14.39-39.872-13.414-54.262 2.164-129.641 140.455-259.299 280.91-388.95 421.367-12.28 13.306-22.867 13.724-36.174 1.447-62.93-58.09-125.852-116.176-188.782-174.262z" fill="#333333" p-id="2672"></path><path d="M947.192 102.393v844.8H102.397c-18.1 0-25.6-7.49-25.6-25.6v-819.2c0-18.099 7.5-25.598 25.6-25.598h819.195c18.111 0 25.6 7.501 25.6 25.598zM102.397 1024h819.195c56.556 0 102.405-45.853 102.405-102.405v-819.2C1024 45.84 978.148 0 921.592 0H102.397C45.843 0 0.001 45.84 0.001 102.393v819.2C0 978.147 45.843 1024 102.397 1024z" fill="#333333" p-id="2673"></path></svg>',
        },
        add: {
          desc: '保存',
          svg: '<svg t="1680189090565" class="icon" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1460" width="25" height="25"><path d="M846.741 178.16C757.26 89.114 638.33 40.07 511.793 40.07s-245.51 49.044-335 138.089S37.974 385.722 37.974 511.75s49.307 244.523 138.82 333.6S385.213 983.44 511.76 983.44s245.499-48.99 334.947-138.088 138.82-207.605 138.82-333.633-49.234-244.48-138.789-333.558z m-98.043 367.437H545.639v203.069c0 18.692-15.153 33.846-33.845 33.846s-33.846-15.154-33.846-33.845V545.596h-203.07c-18.692 0-33.845-15.153-33.845-33.846s15.153-33.846 33.845-33.846h203.069v-203.06c0-18.691 15.153-33.845 33.845-33.845 18.694 0 33.846 15.154 33.846 33.846v203.069h203.059c18.692 0 33.845 15.154 33.845 33.845s-15.153 33.847-33.845 33.847v-0.01z" fill="#333333" p-id="1461"></path></svg>',
        },
        append: {
          desc: '追加',
          svg: '<svg t="1680189210046" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1670" width="25" height="25"><path d="M602.251 885.76H165.203a28.738 28.738 0 0 1-20.186-8.605 28.644 28.644 0 0 1-8.189-20.377V167.331c0-16.063 12.695-28.991 28.375-28.991H756.8c15.702 0 28.321 12.928 28.321 28.991v378.33c0 20.547 16.361 37.204 36.46 37.204 20.164 0 36.438-16.657 36.438-37.204v-378.33c0-57.155-45.341-103.462-101.282-103.462H165.203c-55.943 0-101.284 46.307-101.284 103.462v689.447c0 57.133 45.341 103.451 101.284 103.451H602.25c20.184 0 36.545-16.657 36.545-37.202a36.852 36.852 0 0 0-10.539-26.219 36.844 36.844 0 0 0-26.005-11.048zM261.122 340.247c29.086 0 52.66-23.573 52.66-52.66 0-29.087-23.573-52.66-52.66-52.66-29.087 0-52.66 23.573-52.66 52.66 0 29.086 23.574 52.66 52.66 52.66z m199.89 0c29.076 0 52.66-23.573 52.66-52.66 0-29.087-23.584-52.66-52.66-52.66-29.087 0-52.671 23.573-52.671 52.66 0 29.086 23.585 52.66 52.671 52.66z m199.88 0c29.087 0 52.671-23.573 52.671-52.66 0-29.087-23.584-52.66-52.671-52.66s-52.649 23.573-52.649 52.66c-0.001 29.086 23.562 52.66 52.649 52.66zM245.653 477.693h411.731c20.569 0 37.248 16.668 37.248 37.224 0 20.569-16.679 37.248-37.248 37.248H245.653c-13.3 0-25.59-7.097-32.241-18.613a37.257 37.257 0 0 1 0-37.246 37.234 37.234 0 0 1 32.241-18.613z m0 201.313h249.715c20.567 0 37.235 16.659 37.235 37.226s-16.668 37.245-37.235 37.245H245.653c-20.567 0-37.235-16.679-37.235-37.245s16.669-37.226 37.235-37.226z m679.378 89.174h-72.537v-78.126c0-20.608-13.661-37.35-33.166-37.35-19.42 0-33.103 16.742-33.103 37.35v78.061h-72.6c-20.014 0.596-35.757 17.316-35.185 37.352 0 20.61 15.702 33.975 35.185 33.975h72.622v74.704c0 20.693 13.661 37.352 33.081 37.352 19.505 0 33.166-16.659 33.166-37.352v-74.704h72.537c19.483 0 35.248-13.365 35.248-33.975 0-20.693-15.68-37.352-35.248-37.352" fill="#333333" p-id="1671"></path></svg>'
        },
        show: {
          desc: '显示',
          svg: '<svg t="1680273701843" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1796" width="25" height="25"><path d="M512 257.984C350.72 257.984 232.576 339.84 149.312 512 232.576 684.16 350.72 766.016 512 766.016c161.408 0 279.488-81.792 362.688-254.016C791.424 339.84 673.28 257.984 512 257.984z m-3.968 430.016a176 176 0 1 1 0-352 176 176 0 0 1 0 352z" fill="#FFFFFF" p-id="1797"></path><path d="M942.208 486.208c-94.784-199.68-238.08-300.16-430.208-300.16-192.192 0-335.36 100.48-430.208 300.224a60.288 60.288 0 0 0 0 51.52c94.784 199.68 238.08 300.16 430.208 300.16 192.192 0 335.36-100.48 430.208-300.224a60.288 60.288 0 0 0 0-51.52zM512 766.016c-161.28 0-279.424-81.792-362.688-254.016C232.576 339.84 350.72 257.984 512 257.984S791.424 339.84 874.688 512c-83.2 172.16-201.28 254.016-362.688 254.016z" fill="#8C8C8C" p-id="1798"></path><path d="M508.032 336a176 176 0 1 0 0 352 176 176 0 0 0 0-352z m0 288a112 112 0 1 1 0-224 112 112 0 1 1 0 224z" fill="#8C8C8C" p-id="1799"></path></svg>',
        },
        hide: {
          desc: '隐藏',
          svg: '<svg t="1680273271167" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1589" width="25" height="25"><path d="M974.727529 484.171294c-37.767529-79.691294-82.823529-144.685176-134.927058-194.921412l-54.814118 54.693647c44.694588 42.646588 83.546353 98.484706 117.157647 167.936-89.509647 185.223529-216.545882 273.227294-390.144 273.227295a416.346353 416.346353 0 0 1-143.962353-24.094118l-59.331765 59.331765c60.958118 28.129882 128.722824 42.164706 203.294118 42.164705 206.727529 0 360.990118-107.640471 462.727529-322.981647a64.752941 64.752941 0 0 0 0-55.41647z m-68.367058-344.907294l-45.839059-45.899294a8.553412 8.553412 0 0 0-12.16753 0L730.654118 210.944c-64.873412-33.129412-137.758118-49.694118-218.654118-49.694118-206.787765 0-361.050353 107.640471-462.787765 322.981647a64.873412 64.873412 0 0 0 0 55.416471c40.658824 85.594353 89.569882 154.202353 146.793412 205.884235l-113.844706 113.844706a8.613647 8.613647 0 0 0 0 12.107294l45.95953 45.899294a8.613647 8.613647 0 0 0 12.167529 0L906.360471 151.431529a8.613647 8.613647 0 0 0 0-12.167529zM121.856 511.879529C211.486118 326.656 338.522353 238.712471 512 238.712471c58.669176 0 112.037647 10.059294 160.406588 30.539294L596.811294 344.847059a189.319529 189.319529 0 0 0-256.180706 256.12047l-89.750588 89.750589c-49.633882-43.851294-92.461176-103.243294-129.024-178.838589z m265.396706 0a120.591059 120.591059 0 0 1 157.214118-114.748235L392.975059 548.743529a120.470588 120.470588 0 0 1-5.722353-36.743529z" fill="#333333" p-id="1590"></path><path d="M507.723294 632.530824c-3.734588 0-7.408941-0.180706-11.023059-0.481883l-56.801882 56.801883a189.44 189.44 0 0 0 244.555294-244.61553l-56.741647 56.801882a120.651294 120.651294 0 0 1-73.848471 122.337883c-14.637176 6.023529-30.298353 9.155765-46.140235 9.155765z" fill="#333333" p-id="1591"></path></svg>',
        },
        left: {
          desc: '收起',
          svg: '<svg t="1680283008674" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8451" width="25" height="25"><path d="M452.266667 507.733333l-29.866667 29.866667 29.866667 29.866667 115.2 115.2 29.866666-29.866667-115.2-115.2L597.333333 422.4l-29.866666-29.866667-115.2 115.2z m81.066666 388.266667c200.533333 0 362.666667-162.133333 362.666667-362.666667S733.866667 170.666667 533.333333 170.666667 170.666667 332.8 170.666667 533.333333 332.8 896 533.333333 896z m0-42.666667C358.4 853.333333 213.333333 708.266667 213.333333 533.333333S358.4 213.333333 533.333333 213.333333 853.333333 358.4 853.333333 533.333333 708.266667 853.333333 533.333333 853.333333z" fill="#333333" p-id="8452"></path></svg>',
        },
        right: {
          desc: '展开',
          svg: '<svg t="1680282988133" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8249" width="25" height="25"><path d="M614.4 507.733333l29.866667 29.866667-29.866667 29.866667-115.2 115.2-29.866667-34.133334 115.2-115.2L469.333333 422.4l29.866667-29.866667 115.2 115.2zM533.333333 896C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333z" fill="#333333" p-id="8250"></path></svg>',
        }
      };

      const i18n = await getI18n();
      if ('en' == i18n) {
        iconConfig.select.desc = 'select';
        iconConfig.selectAll.desc = 'select all';
        iconConfig.add.desc = 'add';
        iconConfig.show.desc = 'show';
        iconConfig.hide.desc = 'hide';
        iconConfig.left.desc = 'reduce';
        iconConfig.right.desc = 'expand';
      }

      return iconConfig[type];
    }

    function _showToast(msg) {
      const toast = document.createElement('div');
      toast.innerText = msg;
      toast.id = '_toast';
      toast.style.display = 'none';
      toast.style.position = 'absolute';
      toast.style.top = '50%';
      toast.style.left = '50%';
      toast.style.transition = 'all 0.3s';
      toast.style.transform = 'translate(-50%, -50%)';
      toast.style.padding = '10px';
      toast.style.backgroundColor = '#fff';
      toast.style.color = 'black';
      toast.style.borderRadius = '5px';
      toast.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.4)';
      toast.style.zIndex = 999;

      const mainDiv = document.querySelector("main[class='relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1']");
      mainDiv.appendChild(toast);

      toast.style.display = 'block';

      setTimeout(() => {
        toast.style.display = 'none';
        mainDiv.removeChild(toast);
      }, 2000);
    }
}

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  genForm();
} else {
  document.addEventListener("DOMContentLoaded", genForm);
}