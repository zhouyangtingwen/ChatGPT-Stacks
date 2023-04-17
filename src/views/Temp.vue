<template>
    <div class="react-scroll-to-bottom--css-pzkiq-1n7m0yu">
        <div v-if="qaList.length < 1" class="flex flex-col items-center text-sm dark:bg-gray-800">
            <div class="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 dark:bg-gray-800">
                <div class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
                    <div class="w-[30px] flex flex-col relative items-end">
                        <div class="relative flex">
                            <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                                <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; background-color: #888888; opacity: 1; border: 0; margin: 0px; padding: 0px; max-width: 100%;">
                                    <svg t="1678634199347" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15953" width="30" height="30"><path d="M510.965949 522.366092c98.688673 0 178.703031-80.044034 178.703031-178.703031 0-98.719372-80.014358-178.704055-178.703031-178.704055s-178.703031 79.984682-178.703031 178.704055C332.262918 442.323081 412.278299 522.366092 510.965949 522.366092z" fill="#ffffff" p-id="15954"></path><path d="M843.730799 706.247052c-52.643987-50.319036-187.654914-94.528933-341.606215-94.528933-153.950278 0-281.288454 44.209898-333.875137 94.528933-12.158924 11.634991-14.515598 27.689642-14.515598 44.443212l0 111.292736 345.225649 0 370.065384 0 0-111.292736C869.025904 733.935672 855.830371 717.821669 843.730799 706.247052z" fill="#ffffff" p-id="15955"></path></svg>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                        <div class="flex flex-grow flex-col gap-3">
                            <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">如何使用ChatGPT Stacks?</div>
                        </div>
                        <div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible">
                            <button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:invisible md:group-hover:visible">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="flex justify-between"></div>
                    </div>
                </div>
            </div>
            <n-divider />
            <div style="border-bottom-width: 0;" class="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]">
                <div class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
                    <div class="w-[30px] flex flex-col relative items-end">
                        <div class="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center" style="background-color: rgb(16, 163, 127);">
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="h-6 w-6"><path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                    <div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                        <div class="flex flex-grow flex-col gap-3">
                            <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                                <div class="markdown prose w-full break-words dark:prose-invert light"><p>要使用JavaScript将页面指定元素的HTML代码和CSS代码提取出来并合成一个新的HTML文件，您可以按照以下步骤操作：</p><ol><li>打开您想要提取代码的网页，并使用JavaScript获取指定元素的HTML和CSS代码。这可以通过使用document.querySelector()函数和element.innerHTML属性来实现。例如，以下代码可以获取具有ID为"myElement"的元素的HTML代码：</li></ol><pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><span class="">javascript</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-javascript"><span class="hljs-keyword">var</span> elementHtml = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">'#myElement'</span>).<span class="hljs-property">innerHTML</span>;
                                </code></div></div></pre><p>要获取元素的CSS代码，您可以使用以下代码：</p><pre><div class="bg-black mb-4 rounded-md"><div style="display:none" class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><span class="">javascript</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-javascript"><span class="hljs-keyword">var</span> elementCss = <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">getComputedStyle</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">'#myElement'</span>)).<span class="hljs-property">cssText</span>;
                                </code></div></div></pre><ol start="2"><li>将获取的HTML和CSS代码合并到一个新的HTML文件中。这可以通过使用JavaScript创建一个新的HTML文件并将HTML和CSS代码插入到其中来实现。例如，以下代码可以创建一个新的HTML文件并将获取的HTML和CSS代码插入到其中：</li></ol><pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><span class="">css</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-css"><span class="hljs-selector-tag">var</span> newHtml = '&lt;<span class="hljs-selector-tag">html</span>&gt;&lt;head&gt;&lt;style&gt;' + elementCss + '&lt;/style&gt;&lt;/head&gt;&lt;<span class="hljs-selector-tag">body</span>&gt;' + elementHtml + '&lt;/<span class="hljs-selector-tag">body</span>&gt;&lt;/<span class="hljs-selector-tag">html</span>&gt;';
                                
                                <span class="hljs-selector-tag">var</span> <span class="hljs-selector-tag">a</span> = document<span class="hljs-selector-class">.createElement</span>('<span class="hljs-selector-tag">a</span>');
                                <span class="hljs-selector-tag">var</span> blob = new Blob(<span class="hljs-selector-attr">[newHtml]</span>, { type: <span class="hljs-string">'text/html'</span> });
                                <span class="hljs-selector-tag">a</span><span class="hljs-selector-class">.href</span> = window<span class="hljs-selector-class">.URL</span><span class="hljs-selector-class">.createObjectURL</span>(blob);
                                <span class="hljs-selector-tag">a</span><span class="hljs-selector-class">.download</span> = 'myNewFile<span class="hljs-selector-class">.html</span>';
                                <span class="hljs-selector-tag">a</span><span class="hljs-selector-class">.click</span>();
                                </code></div></div></pre><p>此代码将创建一个包含指定元素的HTML和CSS代码的新文件，并自动下载该文件。您可以将文件名更改为您喜欢的任何名称。</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <n-divider />
        </div>

        <div v-else v-for="qaItem in qaList" class="flex flex-col items-center text-sm dark:bg-gray-800">
            <template v-if="qaItem.typed == 1">
                <div class="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 dark:bg-gray-800">
                    <div class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
                        <div class="w-[30px] flex flex-col relative items-end">
                            <div class="relative flex">
                                <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                                    <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; background-color: #888888; opacity: 1; border: 0; margin: 0px; padding: 0px; max-width: 100%;">
                                        <svg t="1678634199347" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15953" width="30" height="30"><path d="M510.965949 522.366092c98.688673 0 178.703031-80.044034 178.703031-178.703031 0-98.719372-80.014358-178.704055-178.703031-178.704055s-178.703031 79.984682-178.703031 178.704055C332.262918 442.323081 412.278299 522.366092 510.965949 522.366092z" fill="#ffffff" p-id="15954"></path><path d="M843.730799 706.247052c-52.643987-50.319036-187.654914-94.528933-341.606215-94.528933-153.950278 0-281.288454 44.209898-333.875137 94.528933-12.158924 11.634991-14.515598 27.689642-14.515598 44.443212l0 111.292736 345.225649 0 370.065384 0 0-111.292736C869.025904 733.935672 855.830371 717.821669 843.730799 706.247052z" fill="#ffffff" p-id="15955"></path></svg>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                            <div class="flex flex-grow flex-col gap-3">
                                <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap" v-html="qaItem.html_origin"></div>
                            </div>
                            <div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible">
                                <n-button circle type="error" ghost size="small" @click="delQa(qaItem)">
                                    <template #icon>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="20" height="20"><g fill="none"><path d="M16.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zM12 1.75a3.25 3.25 0 0 1 3.245 3.066L15.25 5h5.25a.75.75 0 0 1 .102 1.493L20.5 6.5h-.796l-.5 5.087c-.46-.21-.95-.37-1.46-.468l.453-4.619H5.802l1.267 12.872a1.25 1.25 0 0 0 1.117 1.122l.127.006h2.42c.286.551.65 1.056 1.076 1.5H8.313a2.75 2.75 0 0 1-2.714-2.307l-.023-.174L4.295 6.5H3.5a.75.75 0 0 1-.743-.648L2.75 5.75a.75.75 0 0 1 .648-.743L3.5 5h5.25A3.25 3.25 0 0 1 12 1.75zm1.716 12.839l-.07.057l-.057.07a.5.5 0 0 0 0 .568l.057.07l2.147 2.146l-2.147 2.146l-.057.07a.5.5 0 0 0 0 .568l.057.07l.07.057a.5.5 0 0 0 .568 0l.07-.057l2.146-2.147l2.146 2.147l.07.057a.5.5 0 0 0 .568 0l.07-.057l.057-.07a.5.5 0 0 0 0-.568l-.057-.07l-2.147-2.146l2.147-2.146l.057-.07a.5.5 0 0 0 0-.568l-.057-.07l-.07-.057a.5.5 0 0 0-.568 0l-.07.057l-2.146 2.147l-2.146-2.147l-.07-.057a.5.5 0 0 0-.492-.044l-.076.044zM12 3.25a1.75 1.75 0 0 0-1.744 1.606L10.25 5h3.5A1.75 1.75 0 0 0 12 3.25z" fill="currentColor"></path></g></svg>
                                    </template>
                                </n-button>
                            </div>
                            <div v-if="false" class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible">
                                <button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:invisible md:group-hover:visible">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex justify-between"></div>
                        </div>
                    </div>
                </div>
                <n-divider style="margin: 0;" />
            </template>
            <template v-else>
                <div style="border-bottom-width: 0;" class="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]">
                    <div class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
                        <div class="w-[30px] flex flex-col relative items-end">
                            <div class="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center" style="background-color: rgb(16, 163, 127);">
                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="h-6 w-6"><path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path></svg>
                            </div>
                        </div>
                        <div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                            <div class="flex flex-grow flex-col gap-3">
                                <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                                    <div class="markdown prose w-full break-words dark:prose-invert light" v-html="qaItem.html_origin"></div>
                                </div>
                            </div>
                            <div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible">
                                <n-button circle type="error" ghost size="small" @click="delQa(qaItem)">
                                    <template #icon>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="20" height="20"><g fill="none"><path d="M16.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zM12 1.75a3.25 3.25 0 0 1 3.245 3.066L15.25 5h5.25a.75.75 0 0 1 .102 1.493L20.5 6.5h-.796l-.5 5.087c-.46-.21-.95-.37-1.46-.468l.453-4.619H5.802l1.267 12.872a1.25 1.25 0 0 0 1.117 1.122l.127.006h2.42c.286.551.65 1.056 1.076 1.5H8.313a2.75 2.75 0 0 1-2.714-2.307l-.023-.174L4.295 6.5H3.5a.75.75 0 0 1-.743-.648L2.75 5.75a.75.75 0 0 1 .648-.743L3.5 5h5.25A3.25 3.25 0 0 1 12 1.75zm1.716 12.839l-.07.057l-.057.07a.5.5 0 0 0 0 .568l.057.07l2.147 2.146l-2.147 2.146l-.057.07a.5.5 0 0 0 0 .568l.057.07l.07.057a.5.5 0 0 0 .568 0l.07-.057l2.146-2.147l2.146 2.147l.07.057a.5.5 0 0 0 .568 0l.07-.057l.057-.07a.5.5 0 0 0 0-.568l-.057-.07l-2.147-2.146l2.147-2.146l.057-.07a.5.5 0 0 0 0-.568l-.057-.07l-.07-.057a.5.5 0 0 0-.568 0l-.07.057l-2.146 2.147l-2.146-2.147l-.07-.057a.5.5 0 0 0-.492-.044l-.076.044zM12 3.25a1.75 1.75 0 0 0-1.744 1.606L10.25 5h3.5A1.75 1.75 0 0 0 12 3.25z" fill="currentColor"></path></g></svg>
                                    </template>
                                </n-button>
                            </div>
                        </div>
                    </div>
                </div>
                <n-divider />
            </template>
        </div>
    </div>
    <n-modal
      v-model:show="showDelQa"
      type="error"
      transform-origin="center"
      preset="dialog"
      :title="t('tempDelQaTitle')"
      :content="t('tempDelQa')"
      :positive-text="t('tempDelQaPositiveText')"
      :negative-text="t('tempDelQaNegativeText')"
      @positive-click="ensureDelQa"
    />
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import { app } from "../app/app.js";
import { useMessage } from 'naive-ui';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const qaList = app.qaList;
const message = useMessage();

watch(qaList, (newVal, oldVal) => {
    nextTick(() => {
        let allCopy = document.querySelectorAll("button[class='flex ml-auto gap-2']")
        for (const copy of allCopy) {
            copy.onclick = (e) => {
                if (typeof e.target.parentNode === "undefined") {
                    message.warning(t('copyFailed'));
                    return;
                }
                const p = e.target.parentNode;
                // console.log('%O', p.nextSibling);
                // console.log('innerText', p.nextSibling.innerText);
                if (typeof p.nextSibling.innerText === "undefined") {
                    message.warning(t('copyFailed'));
                    return;
                }
                app.copy(p.nextSibling.innerText).then(() => {
                    message.success(t('copySuccess'));
                });
            };
        }
    });
});

const nowDelQaItem = ref(false);
const showDelQa = ref(false);
const delQa = (qaItem) => {
    nowDelQaItem.value = qaItem;
    showDelQa.value = true;
};

const ensureDelQa = () => {
    app.deleteQa(nowDelQaItem.value.chat_id, nowDelQaItem.value.id);
    message.success(t('tempDelSuccess'));
}
</script>

<style>
*,:after,:before {
    /* border: 0 solid var(--n-text-color); */
    box-sizing: border-box
}

::v-deep :after,:before {
    --tw-content: ""
}

::v-deep html {
    -webkit-text-size-adjust: 100%;
    font-family: Söhne,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    line-height: 1.5;
    tab-size: 4
}

::v-deep body {
    line-height: inherit;
    margin: 0
}

::v-deep hr {
    border-top-width: 1px;
    color: inherit;
    height: 0
}

abbr:where([title]) {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted currentColor;
    text-decoration: underline dotted currentColor
}

h1,h2,h3,h4,h5,h6 {
    font-size: inherit;
    font-weight: inherit
}

::v-deep a {
    color: inherit;
    text-decoration: inherit
}

b,strong {
    font-weight: bolder
}

code,kbd,pre,samp {
    font-family: Söhne Mono,Monaco,Andale Mono,Ubuntu Mono,monospace;
    font-size: 1em
}

small {
    font-size: 80%
}

sub,sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

table {
    border-collapse: collapse;
    border-color: inherit;
    text-indent: 0
}

::v-deep button,input,optgroup,select,textarea {
    color: inherit;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0
}

::v-deep button,select {
    text-transform: none
}

::v-deep [type=button],[type=reset],[type=submit],button {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none
}

:-moz-focusring {
    outline: auto
}

:-moz-ui-invalid {
    box-shadow: none
}

progress {
    vertical-align: baseline
}

::-webkit-inner-spin-button,::-webkit-outer-spin-button {
    height: auto
}

[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

summary {
    display: list-item
}

blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre {
    margin: 0
}

fieldset,legend {
    padding: 0
}

menu,ol,ul {
    list-style: none;
    margin: 0;
    padding: 0
}

textarea {
    resize: vertical
}

input::-webkit-input-placeholder,textarea::-webkit-input-placeholder {
    color: #acacbe
}

input::placeholder,textarea::placeholder {
    color: #acacbe
}

::v-deep [role=button],button {
    cursor: pointer
}

:disabled {
    cursor: default
}

audio,canvas,embed,iframe,img,object,svg,video {
    display: block;
    vertical-align: middle
}

img,video {
    height: auto;
    max-width: 100%
}

[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],select,textarea {
    --tw-shadow: 0 0 transparent;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    border-color: #8e8ea0;
    border-radius: 0;
    border-width: 1px;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: .5rem .75rem
}

[multiple]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,select:focus,textarea:focus {
    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: #2563eb;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    border-color: #2563eb;
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);
    outline: 2px solid transparent;
    outline-offset: 2px
}

input::-webkit-input-placeholder,textarea::-webkit-input-placeholder {
    color: #8e8ea0;
    opacity: 1
}

input::placeholder,textarea::placeholder {
    color: #8e8ea0;
    opacity: 1
}

::-webkit-datetime-edit-fields-wrapper {
    padding: 0
}

::-webkit-date-and-time-value {
    min-height: 1.5em
}

::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field {
    padding-bottom: 0;
    padding-top: 0
}

select {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%238e8ea0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
    background-position: right .5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact
}

[multiple] {
    background-image: none;
    background-position: 0 0;
    background-repeat: repeat;
    background-size: auto auto;
    background-size: initial;
    padding-right: .75rem;
    -webkit-print-color-adjust: inherit;
    print-color-adjust: inherit
}

[type=checkbox],[type=radio] {
    --tw-shadow: 0 0 transparent;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-origin: border-box;
    border-color: #8e8ea0;
    border-width: 1px;
    color: #2563eb;
    display: inline-block;
    flex-shrink: 0;
    height: 1rem;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    -webkit-user-select: none;
    user-select: none;
    vertical-align: middle;
    width: 1rem
}

[type=checkbox] {
    border-radius: 0
}

[type=radio] {
    border-radius: 100%
}

[type=checkbox]:focus,[type=radio]:focus {
    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
    --tw-ring-offset-width: 2px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: #2563eb;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);
    outline: 2px solid transparent;
    outline-offset: 2px
}

[type=checkbox]:checked,[type=radio]:checked {
    background-color: currentColor;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-color: transparent
}

[type=checkbox]:checked {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E")
}

[type=radio]:checked {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E")
}

[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked:focus,[type=radio]:checked:hover {
    background-color: currentColor;
    border-color: transparent
}

[type=checkbox]:indeterminate {
    background-color: currentColor;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-color: transparent
}

[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover {
    background-color: currentColor;
    border-color: transparent
}

[type=file] {
    background: transparent none repeat 0 0/auto auto padding-box border-box scroll;
    background: initial;
    border-color: inherit;
    border-radius: 0;
    border-width: 0;
    font-size: inherit;
    line-height: inherit;
    padding: 0
}

[type=file]:focus {
    outline: 1px solid ButtonText;
    outline: 1px auto -webkit-focus-ring-color
}

h1 {
    font-size: 1.875rem;
    line-height: 2.25rem
}

h1,h2,h3 {
    font-weight: 600
}

h2,h3 {
    font-size: 1.5rem;
    line-height: 2rem
}

*,:after,:before {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59,130,246,.5);
    --tw-ring-offset-shadow: 0 0 transparent;
    --tw-ring-shadow: 0 0 transparent;
    --tw-shadow: 0 0 transparent;
    --tw-shadow-colored: 0 0 transparent;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia:
}

::-webkit-backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59,130,246,.5);
    --tw-ring-offset-shadow: 0 0 transparent;
    --tw-ring-shadow: 0 0 transparent;
    --tw-shadow: 0 0 transparent;
    --tw-shadow-colored: 0 0 transparent;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia:
}

::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59,130,246,.5);
    --tw-ring-offset-shadow: 0 0 transparent;
    --tw-ring-shadow: 0 0 transparent;
    --tw-shadow: 0 0 transparent;
    --tw-shadow-colored: 0 0 transparent;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia:
}

:root {
    --color-primary: #19c37d;
    --color-secondary: #715fde;
    --color-error: #ef4146;
    --gradient-primary: linear-gradient(90deg,#a29bd4,#989fdd);
    --text-primary: #202123;
    --text-default: #353740;
    --text-secondary: #6e6e80;
    --text-disabled: #acacbe;
    --text-error: var(--color-error)
}

::-webkit-scrollbar {
    height: 1rem;
    width: .5rem
}

::-webkit-scrollbar:horizontal {
    height: .5rem;
    width: 1rem
}

::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 9999px
}

::-webkit-scrollbar-thumb {
    --tw-border-opacity: 1;
    background-color: rgba(217,217,227,.8);
    border-color: rgba(255,255,255,var(--tw-border-opacity));
    border-radius: 9999px;
    border-width: 1px
}

::-webkit-scrollbar-thumb:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(236,236,241,var(--tw-bg-opacity))
}

.dark ::-webkit-scrollbar-thumb {
    --tw-bg-opacity: 1;
    background-color: rgba(86,88,105,var(--tw-bg-opacity))
}

.dark ::-webkit-scrollbar-thumb:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(172,172,190,var(--tw-bg-opacity))
}

@media (min-width: 768px) {
    .scrollbar-trigger ::-webkit-scrollbar-thumb {
        visibility:hidden
    }

    .scrollbar-trigger:hover ::-webkit-scrollbar-thumb {
        visibility: visible
    }
}

.container {
    width: 100%
}

@media (min-width: 640px) {
    .container {
        max-width:640px
    }
}

@media (min-width: 768px) {
    .container {
        max-width:768px
    }
}

@media (min-width: 1024px) {
    .container {
        max-width:1024px
    }
}

@media (min-width: 1280px) {
    .container {
        max-width:1280px
    }
}

@media (min-width: 1536px) {
    .container {
        max-width:1536px
    }
}

.prose {
    /* color: var(--tw-prose-body); */
    max-width: 65ch
}

.prose :where([class~=lead]):not(:where([class~=not-prose] *)) {
    color: var(--tw-prose-lead);
    font-size: 1.25em;
    line-height: 1.6;
    margin-bottom: 1.2em;
    margin-top: 1.2em
}

.prose :where(a):not(:where([class~=not-prose] *)) {
    color: var(--tw-prose-links);
    font-weight: 500;
    text-decoration: underline
}

.prose :where(strong):not(:where([class~=not-prose] *)) {
    color: var(--tw-prose-bold);
    font-weight: 600
}

.prose :where(a strong):not(:where([class~=not-prose] *)) {
    color: inherit
}

.prose :where(blockquote strong):not(:where([class~=not-prose] *)) {
    color: inherit
}

.prose :where(thead th strong):not(:where([class~=not-prose] *)) {
    color: inherit
}

.prose :where(ol):not(:where([class~=not-prose] *)) {
    list-style-type: decimal;
    margin-bottom: 1.25em;
    margin-top: 1.25em;
    padding-left: 1.625em
}

.prose :where(ol[type=A]):not(:where([class~=not-prose] *)) {
    list-style-type: upper-alpha
}

.prose :where(ol[type=a]):not(:where([class~=not-prose] *)) {
    list-style-type: lower-alpha
}

.prose :where(ol[type=A s]):not(:where([class~=not-prose] *)) {
    list-style-type: upper-alpha
}

.prose :where(ol[type=a s]):not(:where([class~=not-prose] *)) {
    list-style-type: lower-alpha
}

.prose :where(ol[type=I]):not(:where([class~=not-prose] *)) {
    list-style-type: upper-roman
}

.prose :where(ol[type=i]):not(:where([class~=not-prose] *)) {
    list-style-type: lower-roman
}

.prose :where(ol[type=I s]):not(:where([class~=not-prose] *)) {
    list-style-type: upper-roman
}

.prose :where(ol[type=i s]):not(:where([class~=not-prose] *)) {
    list-style-type: lower-roman
}

.prose :where(ol[type="1"]):not(:where([class~=not-prose] *)) {
    list-style-type: decimal
}

.prose :where(ul):not(:where([class~=not-prose] *)) {
    list-style-type: disc;
    margin-bottom: 1.25em;
    margin-top: 1.25em;
    padding-left: 1.625em
}

.prose :where(ol>li):not(:where([class~=not-prose] *))::marker {
    color: var(--tw-prose-counters);
    font-weight: 400
}

.prose :where(ul>li):not(:where([class~=not-prose] *))::marker {
    color: var(--tw-prose-bullets)
}

.prose :where(hr):not(:where([class~=not-prose] *)) {
    border-color: var(--tw-prose-hr);
    border-top-width: 1px;
    margin-bottom: 3em;
    margin-top: 3em
}

.prose :where(blockquote):not(:where([class~=not-prose] *)) {
    border-left-color: var(--tw-prose-quote-borders);
    border-left-width: .25rem;
    color: var(--tw-prose-quotes);
    font-style: italic;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 1.6em;
    margin-top: 1.6em;
    padding-left: 1em;
    quotes: "\201C""\201D""\2018""\2019"
}

.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose] *)):before {
    content: open-quote
}

.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose] *)):after {
    content: close-quote
}

.prose :where(h1):not(:where([class~=not-prose] *)) {
    color: var(--tw-prose-headings);
    font-size: 2.25em;
    font-weight: 800;
    line-height: 1.1111111;
    margin-bottom: .8888889em;
    margin-top: 0
}

.prose :where(h1 strong):not(:where([class~=not-prose] *)) {
    color: inherit;
    font-weight: 900
}

.prose :where(h2):not(:where([class~=not-prose] *)) {
    color: var(--tw-prose-headings);
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.3333333;
    margin-bottom: 1em;
    margin-top: 2em
}

.prose :where(h2 strong):not(:where([class~=not-prose] *)) {
    color: inherit;
    font-weight: 800
}

.prose :where(h3):not(:where([class~=not-prose] *)) {
    color: var(--tw-prose-headings);
    font-size: 1.25em;
    font-weight: 600;
    line-height: 1.6;
    margin-bottom: .6em;
    margin-top: 1.6em
}

.prose :where(h3 strong):not(:where([class~=not-prose] *)) {
    color: inherit;
    font-weight: 700
}

.prose :where(h4):not(:where([class~=not-prose] *)) {
    color: var(--tw-prose-headings);
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: .5em;
    margin-top: 1.5em
}

.prose :where(h4 strong):not(:where([class~=not-prose] *)) {
    color: inherit;
    font-weight: 700
}

.prose :where(img):not(:where([class~=not-prose] *)) {
    margin-bottom: 2em;
    margin-top: 2em
}

.prose :where(figure>*):not(:where([class~=not-prose] *)) {
    margin-bottom: 0;
    margin-top: 0
}

.prose :where(figcaption):not(:where([class~=not-prose] *)) {
    color: var(--tw-prose-captions);
    font-size: .875em;
    line-height: 1.4285714;
    margin-top: .8571429em
}

.prose :where(code):not(:where([class~=not-prose] *)) {
    color: var(--n-text-color);
    font-size: .875em;
    font-weight: 600
}

.prose :where(code):not(:where([class~=not-prose] *)):before {
    content: "`"
}

.prose :where(code):not(:where([class~=not-prose] *)):after {
    content: "`"
}

.prose :where(a code):not(:where([class~=not-prose] *)) {
    color: inherit
}

.prose :where(h1 code):not(:where([class~=not-prose] *)) {
    color: inherit
}

.prose :where(h2 code):not(:where([class~=not-prose] *)) {
    color: inherit;
    font-size: .875em
}

.prose :where(h3 code):not(:where([class~=not-prose] *)) {
    color: inherit;
    font-size: .9em
}

.prose :where(h4 code):not(:where([class~=not-prose] *)) {
    color: inherit
}

.prose :where(blockquote code):not(:where([class~=not-prose] *)) {
    color: inherit
}

.prose :where(thead th code):not(:where([class~=not-prose] *)) {
    color: inherit
}

.prose :where(pre):not(:where([class~=not-prose] *)) {
    background-color: transparent;
    border-radius: .375rem;
    color: currentColor;
    font-size: .875em;
    font-weight: 400;
    line-height: 1.7142857;
    margin: 0;
    overflow-x: auto;
    padding: 0
}

.prose :where(pre code):not(:where([class~=not-prose] *)) {
    background-color: transparent;
    border-radius: 0;
    border-width: 0;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: 0
}

.prose :where(pre code):not(:where([class~=not-prose] *)):before {
    content: none
}

.prose :where(pre code):not(:where([class~=not-prose] *)):after {
    content: none
}

.prose :where(table):not(:where([class~=not-prose] *)) {
    font-size: .875em;
    line-height: 1.7142857;
    margin-bottom: 2em;
    margin-top: 2em;
    table-layout: auto;
    text-align: left;
    width: 100%
}

.prose :where(thead):not(:where([class~=not-prose] *)) {
    border-bottom-color: var(--n-text-color);
    border-bottom-width: 1px
}

.prose :where(thead th):not(:where([class~=not-prose] *)) {
    color: var(--n-text-color);
    font-weight: 600;
    padding-bottom: .5714286em;
    padding-left: .5714286em;
    padding-right: .5714286em;
    vertical-align: bottom
}

.prose :where(tbody tr):not(:where([class~=not-prose] *)) {
    border-bottom-color: var(--tw-prose-td-borders);
    border-bottom-width: 1px
}

.prose :where(tbody tr:last-child):not(:where([class~=not-prose] *)) {
    border-bottom-width: 0
}

.prose :where(tbody td):not(:where([class~=not-prose] *)) {
    vertical-align: baseline
}

.prose :where(tfoot):not(:where([class~=not-prose] *)) {
    border-top-color: var(--tw-prose-th-borders);
    border-top-width: 1px
}

.prose :where(tfoot td):not(:where([class~=not-prose] *)) {
    vertical-align: top
}

.prose {
    --tw-prose-body: #374151;
    --tw-prose-headings: #111827;
    --tw-prose-lead: #4b5563;
    --tw-prose-links: #111827;
    --tw-prose-bold: #111827;
    --tw-prose-counters: #6b7280;
    --tw-prose-bullets: #d1d5db;
    --tw-prose-hr: #e5e7eb;
    --tw-prose-quotes: #111827;
    --tw-prose-quote-borders: #e5e7eb;
    --tw-prose-captions: #6b7280;
    --tw-prose-code: #111827;
    --tw-prose-pre-code: #e5e7eb;
    --tw-prose-pre-bg: #1f2937;
    --tw-prose-th-borders: #d1d5db;
    --tw-prose-td-borders: #e5e7eb;
    --tw-prose-invert-body: #d1d5db;
    --tw-prose-invert-headings: #fff;
    --tw-prose-invert-lead: #9ca3af;
    --tw-prose-invert-links: #fff;
    --tw-prose-invert-bold: #fff;
    --tw-prose-invert-counters: #9ca3af;
    --tw-prose-invert-bullets: #4b5563;
    --tw-prose-invert-hr: #374151;
    --tw-prose-invert-quotes: #f3f4f6;
    --tw-prose-invert-quote-borders: #374151;
    --tw-prose-invert-captions: #9ca3af;
    --tw-prose-invert-code: #fff;
    --tw-prose-invert-pre-code: #d1d5db;
    --tw-prose-invert-pre-bg: rgba(0,0,0,.5);
    --tw-prose-invert-th-borders: #4b5563;
    --tw-prose-invert-td-borders: #374151;
    font-size: 1rem;
    line-height: 1.75
}

.prose :where(p):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.25em;
    margin-top: 1.25em
}

.prose :where(video):not(:where([class~=not-prose] *)) {
    margin-bottom: 2em;
    margin-top: 2em
}

.prose :where(figure):not(:where([class~=not-prose] *)) {
    margin-bottom: 2em;
    margin-top: 2em
}

.prose :where(li):not(:where([class~=not-prose] *)) {
    margin-bottom: .5em;
    margin-top: .5em
}

.prose :where(ol>li):not(:where([class~=not-prose] *)) {
    padding-left: .375em
}

.prose :where(ul>li):not(:where([class~=not-prose] *)) {
    padding-left: .375em
}

.prose :where(.prose>ul>li p):not(:where([class~=not-prose] *)) {
    margin-bottom: .75em;
    margin-top: .75em
}

.prose :where(.prose>ul>li>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 1.25em
}

.prose :where(.prose>ul>li>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.25em
}

.prose :where(.prose>ol>li>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 1.25em
}

.prose :where(.prose>ol>li>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.25em
}

.prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose] *)) {
    margin-bottom: .75em;
    margin-top: .75em
}

.prose :where(hr+*):not(:where([class~=not-prose] *)) {
    margin-top: 0
}

.prose :where(h2+*):not(:where([class~=not-prose] *)) {
    margin-top: 0
}

.prose :where(h3+*):not(:where([class~=not-prose] *)) {
    margin-top: 0
}

.prose :where(h4+*):not(:where([class~=not-prose] *)) {
    margin-top: 0
}

.prose :where(thead th:first-child):not(:where([class~=not-prose] *)) {
    padding-left: 0
}

.prose :where(thead th:last-child):not(:where([class~=not-prose] *)) {
    padding-right: 0
}

.prose :where(tbody td,tfoot td):not(:where([class~=not-prose] *)) {
    padding: .5714286em
}

.prose :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose] *)) {
    padding-left: 0
}

.prose :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose] *)) {
    padding-right: 0
}

.prose :where(.prose>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 0
}

.prose :where(.prose>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 0
}

.prose-sm :where(.prose>ul>li p):not(:where([class~=not-prose] *)) {
    margin-bottom: .5714286em;
    margin-top: .5714286em
}

.prose-sm :where(.prose>ul>li>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 1.1428571em
}

.prose-sm :where(.prose>ul>li>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.1428571em
}

.prose-sm :where(.prose>ol>li>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 1.1428571em
}

.prose-sm :where(.prose>ol>li>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.1428571em
}

.prose-sm :where(.prose>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 0
}

.prose-sm :where(.prose>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 0
}

.prose-base :where(.prose>ul>li p):not(:where([class~=not-prose] *)) {
    margin-bottom: .75em;
    margin-top: .75em
}

.prose-base :where(.prose>ul>li>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 1.25em
}

.prose-base :where(.prose>ul>li>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.25em
}

.prose-base :where(.prose>ol>li>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 1.25em
}

.prose-base :where(.prose>ol>li>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.25em
}

.prose-base :where(.prose>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 0
}

.prose-base :where(.prose>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 0
}

.prose-lg :where(.prose>ul>li p):not(:where([class~=not-prose] *)) {
    margin-bottom: .8888889em;
    margin-top: .8888889em
}

.prose-lg :where(.prose>ul>li>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 1.3333333em
}

.prose-lg :where(.prose>ul>li>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.3333333em
}

.prose-lg :where(.prose>ol>li>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 1.3333333em
}

.prose-lg :where(.prose>ol>li>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.3333333em
}

.prose-lg :where(.prose>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 0
}

.prose-lg :where(.prose>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 0
}

.prose-xl :where(.prose>ul>li p):not(:where([class~=not-prose] *)) {
    margin-bottom: .8em;
    margin-top: .8em
}

.prose-xl :where(.prose>ul>li>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 1.2em
}

.prose-xl :where(.prose>ul>li>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.2em
}

.prose-xl :where(.prose>ol>li>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 1.2em
}

.prose-xl :where(.prose>ol>li>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.2em
}

.prose-xl :where(.prose>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 0
}

.prose-xl :where(.prose>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 0
}

.prose-2xl :where(.prose>ul>li p):not(:where([class~=not-prose] *)) {
    margin-bottom: .8333333em;
    margin-top: .8333333em
}

.prose-2xl :where(.prose>ul>li>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 1.3333333em
}

.prose-2xl :where(.prose>ul>li>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.3333333em
}

.prose-2xl :where(.prose>ol>li>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 1.3333333em
}

.prose-2xl :where(.prose>ol>li>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 1.3333333em
}

.prose-2xl :where(.prose>:first-child):not(:where([class~=not-prose] *)) {
    margin-top: 0
}

.prose-2xl :where(.prose>:last-child):not(:where([class~=not-prose] *)) {
    margin-bottom: 0
}

.prose-invert {
    --tw-prose-body: var(--tw-prose-invert-body);
    --tw-prose-headings: var(--tw-prose-invert-headings);
    --tw-prose-lead: var(--tw-prose-invert-lead);
    --tw-prose-links: var(--tw-prose-invert-links);
    --tw-prose-bold: var(--tw-prose-invert-bold);
    --tw-prose-counters: var(--tw-prose-invert-counters);
    --tw-prose-bullets: var(--tw-prose-invert-bullets);
    --tw-prose-hr: var(--tw-prose-invert-hr);
    --tw-prose-quotes: var(--tw-prose-invert-quotes);
    --tw-prose-quote-borders: var(--tw-prose-invert-quote-borders);
    --tw-prose-captions: var(--tw-prose-invert-captions);
    --tw-prose-code: var(--tw-prose-invert-code);
    --tw-prose-pre-code: var(--tw-prose-invert-pre-code);
    --tw-prose-pre-bg: var(--tw-prose-invert-pre-bg);
    --tw-prose-th-borders: var(--tw-prose-invert-th-borders);
    --tw-prose-td-borders: var(--tw-prose-invert-td-borders)
}

.form-input,.form-multiselect,.form-select,.form-textarea {
    --tw-shadow: 0 0 transparent;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    border-color: #8e8ea0;
    border-radius: 0;
    border-width: 1px;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: .5rem .75rem
}

.form-input:focus,.form-multiselect:focus,.form-select:focus,.form-textarea:focus {
    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: #2563eb;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    border-color: #2563eb;
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);
    outline: 2px solid transparent;
    outline-offset: 2px
}

.form-input::-webkit-input-placeholder,.form-textarea::-webkit-input-placeholder {
    color: #8e8ea0;
    opacity: 1
}

.form-input::placeholder,.form-textarea::placeholder {
    color: #8e8ea0;
    opacity: 1
}

.form-input::-webkit-datetime-edit-fields-wrapper {
    padding: 0
}

.form-input::-webkit-date-and-time-value {
    min-height: 1.5em
}

.form-input::-webkit-datetime-edit,.form-input::-webkit-datetime-edit-day-field,.form-input::-webkit-datetime-edit-hour-field,.form-input::-webkit-datetime-edit-meridiem-field,.form-input::-webkit-datetime-edit-millisecond-field,.form-input::-webkit-datetime-edit-minute-field,.form-input::-webkit-datetime-edit-month-field,.form-input::-webkit-datetime-edit-second-field,.form-input::-webkit-datetime-edit-year-field {
    padding-bottom: 0;
    padding-top: 0
}

.btn {
    align-items: center;
    border-color: transparent;
    border-radius: .25rem;
    border-width: 1px;
    display: inline-flex;
    font-size: .875rem;
    line-height: 1.25rem;
    padding: .5rem .75rem;
    pointer-events: auto
}

.btn:focus {
    outline: 2px solid transparent;
    outline-offset: 2px
}

.btn:disabled {
    cursor: not-allowed;
    opacity: .5
}

.btn-primary {
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    background-color: rgba(16,163,127,var(--tw-bg-opacity));
    color: rgba(255,255,255,var(--tw-text-opacity))
}

.btn-primary:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(26,127,100,var(--tw-bg-opacity))
}

.btn-primary:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    --tw-ring-offset-width: 2px;
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)
}

.btn-primary.focus-visible {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(25,195,125,var(--tw-ring-opacity))
}

.btn-primary:focus-visible {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(25,195,125,var(--tw-ring-opacity))
}

.btn-primary:disabled:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(16,163,127,var(--tw-bg-opacity))
}

.btn-neutral {
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    background-color: rgba(255,255,255,var(--tw-bg-opacity));
    border-color: rgba(0,0,0,.1);
    border-width: 1px;
    color: rgba(64,65,79,var(--tw-text-opacity));
    font-size: .875rem;
    line-height: 1.25rem
}

.btn-neutral:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(236,236,241,var(--tw-bg-opacity))
}

.btn-neutral:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    --tw-ring-offset-width: 2px;
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)
}

.btn-neutral.focus-visible {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(99,102,241,var(--tw-ring-opacity))
}

.btn-neutral:focus-visible {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(99,102,241,var(--tw-ring-opacity))
}

.dark .btn-neutral {
    --tw-border-opacity: 1;
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    background-color: rgba(52,53,65,var(--tw-bg-opacity));
    border-color: rgba(86,88,105,var(--tw-border-opacity));
    color: rgba(217,217,227,var(--tw-text-opacity))
}

.dark .btn-neutral:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(64,65,79,var(--tw-bg-opacity))
}

.btn-dark {
    --tw-border-opacity: 1;
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    background-color: rgba(52,53,65,var(--tw-bg-opacity));
    border-color: rgba(86,88,105,var(--tw-border-opacity));
    border-width: 1px;
    color: rgba(255,255,255,var(--tw-text-opacity))
}

.btn-dark:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(64,65,79,var(--tw-bg-opacity))
}

.btn-small {
    padding: .25rem .5rem
}

.sr-only {
    clip: rect(0,0,0,0);
    border-width: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px
}

.pointer-events-none {
    pointer-events: none
}

.pointer-events-auto {
    pointer-events: auto
}

.visible {
    visibility: visible
}

.invisible {
    visibility: hidden
}

.static {
    position: static
}

.fixed {
    position: fixed
}

.absolute {
    position: absolute
}

.relative {
    position: relative
}

.sticky {
    position: -webkit-sticky;
    position: sticky
}

.\!sticky {
    position: -webkit-sticky!important;
    position: sticky!important
}

.inset-0 {
    left: 0;
    right: 0
}

.inset-0,.inset-y-0 {
    bottom: 0;
    top: 0
}

.top-2 {
    top: .5rem
}

.left-4 {
    left: 1rem
}

.top-4 {
    top: 1rem
}

.right-0 {
    right: 0
}

.top-1\/2 {
    top: 50%
}

.top-\[20px\] {
    top: 20px
}

.top-0 {
    top: 0
}

.bottom-0 {
    bottom: 0
}

.left-0 {
    left: 0
}

.right-4 {
    right: 1rem
}

.right-1 {
    right: .25rem
}

.left-1\/2 {
    left: 50%
}

.bottom-1\.5 {
    bottom: .375rem
}

.bottom-1 {
    bottom: .25rem
}

.top-6 {
    top: 1.5rem
}

.left-2 {
    left: .5rem
}

.top-8 {
    top: 2rem
}

.left-full {
    left: 100%
}

.right-6 {
    right: 1.5rem
}

.bottom-\[124px\] {
    bottom: 124px
}

.top-full {
    top: 100%
}

.top-1\.5 {
    top: .375rem
}

.top-1 {
    top: .25rem
}

.-bottom-1\.5 {
    bottom: -.375rem
}

.-bottom-1 {
    bottom: -.25rem
}

.z-10 {
    z-index: 10
}

.z-50 {
    z-index: 50
}

.z-40 {
    z-index: 40
}

.z-20 {
    z-index: 20
}

.-z-10 {
    z-index: -10
}

.z-0 {
    z-index: 0
}

.z-\[2\] {
    z-index: 2
}

.z-\[60\] {
    z-index: 60
}

.order-1 {
    order: 1
}

.order-2 {
    order: 2
}

.col-span-1 {
    grid-column: span 1/span 1
}

.float-left {
    float: left
}

.m-6 {
    margin: 1.5rem
}

.m-auto {
    margin: auto
}

.m-1 {
    margin: .25rem
}

.m-0 {
    margin: 0
}

.m-2 {
    margin: .5rem
}

.mx-auto {
    margin-left: auto;
    margin-right: auto
}

.mx-1 {
    margin-left: .25rem;
    margin-right: .25rem
}

.\!my-0 {
    margin-bottom: 0!important;
    margin-top: 0!important
}

.mx-2 {
    margin-left: .5rem;
    margin-right: .5rem
}

.my-4 {
    margin-bottom: 1rem;
    margin-top: 1rem
}

.my-2 {
    margin-bottom: .5rem;
    margin-top: .5rem
}

.mr-2 {
    margin-right: .5rem
}

.mb-6 {
    margin-bottom: 1.5rem
}

.mb-2 {
    margin-bottom: .5rem
}

.mb-5 {
    margin-bottom: 1.25rem
}

.mb-4 {
    margin-bottom: 1rem
}

.mt-4 {
    margin-top: 1rem
}

.-mr-2 {
    margin-right: -.5rem
}

.mt-1 {
    margin-top: .25rem
}

.ml-4 {
    margin-left: 1rem
}

.-ml-4 {
    margin-left: -1rem
}

.mt-2 {
    margin-top: .5rem
}

.ml-auto {
    margin-left: auto
}

.mb-1 {
    margin-bottom: .25rem
}

.ml-2 {
    margin-left: .5rem
}

.mr-0 {
    margin-right: 0
}

.mr-4 {
    margin-right: 1rem
}

.mt-3 {
    margin-top: .75rem
}

.mt-5 {
    margin-top: 1.25rem
}

.-mr-12 {
    margin-right: -3rem
}

.ml-1 {
    margin-left: .25rem
}

.-ml-0\.5 {
    margin-left: -.125rem
}

.-mt-0\.5 {
    margin-top: -.125rem
}

.-ml-0 {
    margin-left: 0
}

.-mt-0 {
    margin-top: 0
}

.ml-3 {
    margin-left: .75rem
}

.mb-3 {
    margin-bottom: .75rem
}

.mr-1 {
    margin-right: .25rem
}

.mt-1\.5 {
    margin-top: .375rem
}

.-ml-\[1px\] {
    margin-left: -1px
}

.ml-6 {
    margin-left: 1.5rem
}

.mr-auto {
    margin-right: auto
}

.mb-10 {
    margin-bottom: 2.5rem
}

.-ml-px {
    margin-left: -1px
}

.mb-16 {
    margin-bottom: 4rem
}

.ml-12 {
    margin-left: 3rem
}

.\!mt-4 {
    margin-top: 1rem!important
}

.\!mb-2 {
    margin-bottom: .5rem!important
}

.mt-6 {
    margin-top: 1.5rem
}

.mb-8 {
    margin-bottom: 2rem
}

.block {
    display: block
}

.inline-block {
    display: inline-block
}

.inline {
    display: inline
}

.flex {
    display: flex
}

.inline-flex {
    display: inline-flex
}

.table {
    display: table
}

.grid {
    display: grid
}

.contents {
    display: contents
}

.hidden {
    display: none
}

.h-screen {
    height: 100vh
}

.h-\[30px\] {
    height: 30px
}

.h-4 {
    height: 1rem
}

.h-full {
    height: 100%
}

.h-8 {
    height: 2rem
}

.h-10 {
    height: 2.5rem
}

.h-6 {
    height: 1.5rem
}

.h-3 {
    height: .75rem
}

.h-12 {
    height: 3rem
}

.h-1 {
    height: .25rem
}

.h-\[42px\] {
    height: 42px
}

.h-5 {
    height: 1.25rem
}

.h-7 {
    height: 1.75rem
}

.h-32 {
    height: 8rem
}

.h-2 {
    height: .5rem
}

.h-\[1px\] {
    height: 1px
}

.h-\[37px\] {
    height: 37px
}

.max-h-5 {
    max-height: 1.25rem
}

.max-h-60 {
    max-height: 15rem
}

.max-h-64 {
    max-height: 16rem
}

.max-h-\[80vh\] {
    max-height: 80vh
}

.min-h-\[20px\] {
    min-height: 20px
}

.min-h-full {
    min-height: 100%
}

.min-h-screen {
    min-height: 100vh
}

.min-h-0 {
    min-height: 0
}

.min-h-\[24px\] {
    min-height: 24px
}

.min-h-\[71px\] {
    min-height: 71px
}

.min-h-\[32px\] {
    min-height: 32px
}

.w-full {
    width: 100%
}

.w-\[30px\] {
    width: 30px
}

.w-4 {
    width: 1rem
}

.w-8 {
    width: 2rem
}

.w-10 {
    width: 2.5rem
}

.w-6 {
    width: 1.5rem
}

.w-\[calc\(100\%-34px\)\] {
    width: calc(100% - 34px)
}

.w-\[calc\(100\%-50px\)\] {
    width: calc(100% - 50px)
}

.w-3 {
    width: .75rem
}

.w-12 {
    width: 3rem
}

.w-14 {
    width: 3.5rem
}

.w-screen {
    width: 100vw
}

.w-5 {
    width: 1.25rem
}

.w-11 {
    width: 2.75rem
}

.w-2 {
    width: .5rem
}

.w-96 {
    width: 24rem
}

.w-3\/4 {
    width: 75%
}

.max-w-lg {
    max-width: 32rem
}

.max-w-md {
    max-width: 28rem
}

.max-w-sm {
    max-width: 24rem
}

.max-w-xl {
    max-width: 36rem
}

.max-w-2xl {
    max-width: 42rem
}

.max-w-4xl {
    max-width: 56rem
}

.max-w-xs {
    max-width: 20rem
}

.max-w-7xl {
    max-width: 80rem
}

.max-w-full {
    max-width: 100%
}

.max-w-\[560px\] {
    max-width: 560px
}

.flex-1 {
    flex: 1 1 0%
}

.flex-none {
    flex: none
}

.flex-shrink-0 {
    flex-shrink: 0
}

.flex-shrink {
    flex-shrink: 1
}

.shrink-0 {
    flex-shrink: 0
}

.shrink {
    flex-shrink: 1
}

.flex-grow {
    flex-grow: 1
}

.flex-grow-0 {
    flex-grow: 0
}

.grow {
    flex-grow: 1
}

.-translate-y-1\/2 {
    --tw-translate-y: -50%
}

.-translate-y-1\/2,.translate-y-\[calc\(100\%-71px\)\] {
    -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.translate-y-\[calc\(100\%-71px\)\] {
    --tw-translate-y: calc(100% - 71px)
}

.-translate-x-full {
    --tw-translate-x: -100%
}

.-translate-x-full,.translate-y-4 {
    -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.translate-y-4 {
    --tw-translate-y: 1rem
}

.translate-y-0 {
    --tw-translate-y: 0px
}

.translate-x-0,.translate-y-0 {
    -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.translate-x-0 {
    --tw-translate-x: 0px
}

.translate-y-1 {
    --tw-translate-y: 0.25rem
}

.-translate-x-1\/2,.translate-y-1 {
    -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.-translate-x-1\/2 {
    --tw-translate-x: -50%
}

.translate-x-1 {
    --tw-translate-x: 0.25rem
}

.-translate-y-full,.translate-x-1 {
    -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.-translate-y-full {
    --tw-translate-y: -100%
}

.translate-x-full {
    --tw-translate-x: 100%
}

.translate-x-5,.translate-x-full {
    -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.translate-x-5 {
    --tw-translate-x: 1.25rem
}

.translate-x-4 {
    --tw-translate-x: 1rem
}

.translate-x-4,.translate-y-1\/4 {
    -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.translate-y-1\/4 {
    --tw-translate-y: 25%
}

.-translate-x-3\/4 {
    --tw-translate-x: -75%
}

.-translate-x-3\/4,.translate-x-3\/4 {
    -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.translate-x-3\/4 {
    --tw-translate-x: 75%
}

.rotate-180 {
    --tw-rotate: 180deg
}

.-rotate-180,.rotate-180 {
    -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.-rotate-180 {
    --tw-rotate: -180deg
}

.transform {
    -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

@-webkit-keyframes spin {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes spin {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

.animate-spin {
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite
}

.cursor-not-allowed {
    cursor: not-allowed
}

.cursor-pointer {
    cursor: pointer
}

.cursor-default {
    cursor: default
}

.select-none {
    -webkit-user-select: none;
    user-select: none
}

.resize-none {
    resize: none
}

.resize {
    resize: both
}

.appearance-none {
    -webkit-appearance: none;
    appearance: none
}

.grid-cols-2 {
    grid-template-columns: repeat(2,minmax(0,1fr))
}

.grid-cols-3 {
    grid-template-columns: repeat(3,minmax(0,1fr))
}

.flex-row {
    flex-direction: row
}

.flex-col {
    flex-direction: column
}

.flex-col-reverse {
    flex-direction: column-reverse
}

.items-start {
    align-items: flex-start
}

.items-end {
    align-items: flex-end
}

.items-center {
    align-items: center
}

.items-stretch {
    align-items: stretch
}

.justify-start {
    justify-content: flex-start
}

.justify-center {
    justify-content: center
}

.justify-between {
    justify-content: space-between
}

.gap-3 {
    gap: .75rem
}

.gap-1 {
    gap: .25rem
}

.gap-2 {
    gap: .5rem
}

.gap-4 {
    gap: 1rem
}

.gap-6 {
    gap: 1.5rem
}

.gap-0 {
    gap: 0
}

.gap-3\.5 {
    gap: .875rem
}

.gap-1\.5 {
    gap: .375rem
}

.space-x-1\.5>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-left: calc(.375rem*(1 - var(--tw-space-x-reverse)));
    margin-right: calc(.375rem*var(--tw-space-x-reverse))
}

.space-x-1>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-left: calc(.25rem*(1 - var(--tw-space-x-reverse)));
    margin-right: calc(.25rem*var(--tw-space-x-reverse))
}

.space-y-1>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-bottom: calc(.25rem*var(--tw-space-y-reverse));
    margin-top: calc(.25rem*(1 - var(--tw-space-y-reverse)))
}

.space-y-2>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-bottom: calc(.5rem*var(--tw-space-y-reverse));
    margin-top: calc(.5rem*(1 - var(--tw-space-y-reverse)))
}

.self-start {
    align-self: flex-start
}

.self-end {
    align-self: flex-end
}

.self-center {
    align-self: center
}

.self-stretch {
    align-self: stretch
}

.overflow-auto {
    overflow: auto
}

.overflow-hidden {
    overflow: hidden
}

.overflow-x-auto {
    overflow-x: auto
}

.overflow-y-auto {
    overflow-y: auto
}

.truncate {
    overflow: hidden;
    white-space: nowrap
}

.text-ellipsis,.truncate {
    text-overflow: ellipsis
}

.\!whitespace-pre {
    white-space: pre!important
}

.whitespace-pre-wrap {
    white-space: pre-wrap
}

.break-words {
    word-wrap: break-word
}

.break-all {
    word-break: break-all
}

.rounded-md {
    border-radius: .375rem
}

.rounded-sm {
    border-radius: .125rem
}

.rounded-full {
    border-radius: 9999px
}

.rounded-none {
    border-radius: 0
}

.rounded-lg {
    border-radius: .5rem
}

.\!rounded-none {
    border-radius: 0!important
}

.rounded {
    border-radius: .25rem
}

.rounded-l-md {
    border-bottom-left-radius: .375rem;
    border-top-left-radius: .375rem
}

.rounded-r-md {
    border-bottom-right-radius: .375rem;
    border-top-right-radius: .375rem
}

.rounded-t-xl {
    border-top-left-radius: .75rem;
    border-top-right-radius: .75rem
}

.border {
    border-width: 1px
}

.border-0 {
    border-width: 0
}

.border-2 {
    border-width: 2px
}

.border-y {
    border-bottom-width: 1px
}

.border-t,.border-y {
    border-top-width: 1px
}

.border-b {
    border-bottom-width: 1px
}

.border-l {
    border-left-width: 1px
}

.border-l-4 {
    border-left-width: 4px
}

.border-r-0 {
    border-right-width: 0
}

.border-b-2 {
    border-bottom-width: 2px
}

.border-none {
    border-style: none
}

.border-white\/10 {
    border-color: hsla(0,0%,100%,.1)
}

.border-white {
    --tw-border-opacity: 1;
    border-color: rgba(255,255,255,var(--tw-border-opacity))
}

.border-gray-300 {
    --tw-border-opacity: 1;
    border-color: rgba(197,197,210,var(--tw-border-opacity))
}

.border-black\/10 {
    border-color: rgba(0,0,0,.1)
}

.border-white\/20 {
    border-color: hsla(0,0%,100%,.2)
}

.border-indigo-400 {
    --tw-border-opacity: 1;
    border-color: rgba(129,140,248,var(--tw-border-opacity))
}

.border-gray-100 {
    --tw-border-opacity: 1;
    border-color: rgba(236,236,241,var(--tw-border-opacity))
}

.border-gray-200 {
    --tw-border-opacity: 1;
    border-color: rgba(217,217,227,var(--tw-border-opacity))
}

.border-transparent {
    border-color: transparent
}

.border-black\/20 {
    border-color: rgba(0,0,0,.2)
}

.border-green-500 {
    --tw-border-opacity: 1;
    border-color: rgba(25,195,125,var(--tw-border-opacity))
}

.border-orange-500 {
    --tw-border-opacity: 1;
    border-color: rgba(224,108,43,var(--tw-border-opacity))
}

.border-red-500 {
    --tw-border-opacity: 1;
    border-color: rgba(239,68,68,var(--tw-border-opacity))
}

.border-gray-500 {
    --tw-border-opacity: 1;
    border-color: rgba(142,142,160,var(--tw-border-opacity))
}

.bg-gray-200 {
    --tw-bg-opacity: 1;
    background-color: rgba(217,217,227,var(--tw-bg-opacity))
}

.bg-orange-500 {
    --tw-bg-opacity: 1;
    background-color: rgba(224,108,43,var(--tw-bg-opacity))
}

.bg-red-500 {
    --tw-bg-opacity: 1;
    background-color: rgba(239,68,68,var(--tw-bg-opacity))
}

.bg-\[\#5436DA\] {
    --tw-bg-opacity: 1;
    background-color: rgba(84,54,218,var(--tw-bg-opacity))
}

.bg-yellow-200 {
    --tw-bg-opacity: 1;
    background-color: rgba(250,230,158,var(--tw-bg-opacity))
}

.bg-white {
    --tw-bg-opacity: 1;
    background-color: rgba(255,255,255,var(--tw-bg-opacity))
}

.bg-black {
    --tw-bg-opacity: 1;
    background-color: rgba(0,0,0,var(--tw-bg-opacity))
}

.bg-gray-800 {
    --tw-bg-opacity: 1;
    background-color: rgba(52,53,65,var(--tw-bg-opacity))
}

.bg-gray-50 {
    --tw-bg-opacity: 1;
    /* background-color: rgba(247,247,248,var(--tw-bg-opacity)) */
}

.bg-gray-100 {
    --tw-bg-opacity: 1;
    background-color: rgba(236,236,241,var(--tw-bg-opacity))
}

.bg-transparent {
    background-color: transparent
}

.bg-gray-500\/90 {
    background-color: hsla(240,9%,59%,.9)
}

.bg-red-100 {
    --tw-bg-opacity: 1;
    background-color: rgba(254,226,226,var(--tw-bg-opacity))
}

.bg-yellow-100 {
    --tw-bg-opacity: 1;
    background-color: rgba(254,249,195,var(--tw-bg-opacity))
}

.bg-green-100 {
    --tw-bg-opacity: 1;
    background-color: rgba(210,244,211,var(--tw-bg-opacity))
}

.bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgba(32,33,35,var(--tw-bg-opacity))
}

.bg-gray-600 {
    --tw-bg-opacity: 1;
    background-color: rgba(86,88,105,var(--tw-bg-opacity))
}

.bg-gray-500 {
    --tw-bg-opacity: 1;
    background-color: rgba(142,142,160,var(--tw-bg-opacity))
}

.\!bg-white {
    --tw-bg-opacity: 1!important;
    background-color: rgba(255,255,255,var(--tw-bg-opacity))!important
}

.bg-red-200 {
    --tw-bg-opacity: 1;
    background-color: rgba(254,202,202,var(--tw-bg-opacity))
}

.\!bg-indigo-600 {
    --tw-bg-opacity: 1!important;
    background-color: rgba(79,70,229,var(--tw-bg-opacity))!important
}

.\!bg-gray-200 {
    --tw-bg-opacity: 1!important;
    background-color: rgba(217,217,227,var(--tw-bg-opacity))!important
}

.bg-green-500 {
    --tw-bg-opacity: 1;
    background-color: rgba(25,195,125,var(--tw-bg-opacity))
}

.bg-orange-500\/10 {
    background-color: rgba(224,108,43,.1)
}

.bg-red-500\/10 {
    background-color: rgba(239,68,68,.1)
}

.bg-gray-300 {
    --tw-bg-opacity: 1;
    background-color: rgba(197,197,210,var(--tw-bg-opacity))
}

.bg-gray-400 {
    --tw-bg-opacity: 1;
    background-color: rgba(172,172,190,var(--tw-bg-opacity))
}

.bg-green-600 {
    --tw-bg-opacity: 1;
    background-color: rgba(16,163,127,var(--tw-bg-opacity))
}

.bg-opacity-75 {
    --tw-bg-opacity: 0.75
}

.bg-gradient-to-l {
    background-image: linear-gradient(to left,var(--tw-gradient-stops))
}

.from-gray-800 {
    --tw-gradient-from: #343541;
    --tw-gradient-to: rgba(52,53,65,0);
    --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
}

.from-gray-900 {
    --tw-gradient-from: #202123;
    --tw-gradient-to: rgba(32,33,35,0);
    --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
}

.bg-contain {
    background-size: contain
}

.bg-center {
    background-position: 50%
}

.bg-no-repeat {
    background-repeat: no-repeat
}

.object-cover {
    object-fit: cover
}

.p-1 {
    padding: .25rem
}

.p-0 {
    padding: 0
}

.p-6 {
    padding: 1.5rem
}

.p-3 {
    padding: .75rem
}

.p-4 {
    padding: 1rem
}

.p-2 {
    padding: .5rem
}

.\!p-0 {
    padding: 0!important
}

.px-2 {
    padding-left: .5rem;
    padding-right: .5rem
}

.py-4 {
    padding-bottom: 1rem;
    padding-top: 1rem
}

.px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem
}

.py-1 {
    padding-bottom: .25rem;
    padding-top: .25rem
}

.py-0\.5 {
    padding-bottom: .125rem;
    padding-top: .125rem
}

.px-1\.5 {
    padding-left: .375rem;
    padding-right: .375rem
}

.py-0 {
    padding-bottom: 0;
    padding-top: 0
}

.px-1 {
    padding-left: .25rem;
    padding-right: .25rem
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem
}

.py-2 {
    padding-bottom: .5rem;
    padding-top: .5rem
}

.py-3 {
    padding-bottom: .75rem;
    padding-top: .75rem
}

.px-3 {
    padding-left: .75rem;
    padding-right: .75rem
}

.\!py-0 {
    padding-bottom: 0!important;
    padding-top: 0!important
}

.py-8 {
    padding-bottom: 2rem;
    padding-top: 2rem
}

.py-10 {
    padding-bottom: 2.5rem;
    padding-top: 2.5rem
}

.px-\[1px\] {
    padding-left: 1px;
    padding-right: 1px
}

.py-2\.5 {
    padding-bottom: .625rem;
    padding-top: .625rem
}

.pb-8 {
    padding-bottom: 2rem
}

.pt-20 {
    padding-top: 5rem
}

.pt-\[75\%\] {
    padding-top: 75%
}

.pt-2 {
    padding-top: .5rem
}

.pr-14 {
    padding-right: 3.5rem
}

.pr-6 {
    padding-right: 1.5rem
}

.pt-5 {
    padding-top: 1.25rem
}

.pb-4 {
    padding-bottom: 1rem
}

.pl-1 {
    padding-left: .25rem
}

.pt-1 {
    padding-top: .25rem
}

.pb-1 {
    padding-bottom: .25rem
}

.pl-2 {
    padding-left: .5rem
}

.pr-7 {
    padding-right: 1.75rem
}

.pl-3 {
    padding-left: .75rem
}

.pr-10 {
    padding-right: 2.5rem
}

.pr-2 {
    padding-right: .5rem
}

.pr-9 {
    padding-right: 2.25rem
}

.pr-3 {
    padding-right: .75rem
}

.pl-10 {
    padding-left: 2.5rem
}

.pb-3 {
    padding-bottom: .75rem
}

.pr-4 {
    padding-right: 1rem
}

.pr-5 {
    padding-right: 1.25rem
}

.pr-1 {
    padding-right: .25rem
}

.pb-6 {
    padding-bottom: 1.5rem
}

.pt-3 {
    padding-top: .75rem
}

.text-left {
    text-align: left
}

.text-center {
    text-align: center
}

.text-right {
    text-align: right
}

.align-top {
    vertical-align: top
}

.font-sans {
    font-family: Söhne,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji
}

.font-mono {
    font-family: Söhne Mono,Monaco,Andale Mono,Ubuntu Mono,monospace
}

.text-lg {
    font-size: 1.125rem
}

.text-lg,.text-xl {
    line-height: 1.75rem
}

.text-xl {
    font-size: 1.25rem
}

.text-xs {
    font-size: .75rem;
    line-height: 1rem
}

.text-\[10px\] {
    font-size: 10px
}

.text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem
}

.text-sm {
    font-size: .875rem;
    line-height: 1.25rem
}

.text-base {
    font-size: 1rem;
    line-height: 1.5rem
}

.text-2xl {
    font-size: 1.5rem;
    line-height: 2rem
}

.text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem
}

.font-semibold {
    font-weight: 600
}

.font-normal {
    font-weight: 400
}

.font-medium {
    font-weight: 500
}

.font-bold {
    font-weight: 700
}

.uppercase {
    text-transform: uppercase
}

.normal-case {
    text-transform: none
}

.italic {
    font-style: italic
}

.leading-6 {
    line-height: 1.5rem
}

.leading-tight {
    line-height: 1.25
}

.leading-5 {
    line-height: 1.25rem
}

.tracking-widest {
    letter-spacing: .1em
}

.text-red-500 {
    --tw-text-opacity: 1;
    color: rgba(239,68,68,var(--tw-text-opacity))
}

.text-gray-400 {
    --tw-text-opacity: 1;
    color: rgba(172,172,190,var(--tw-text-opacity))
}

.text-gray-500 {
    --tw-text-opacity: 1;
    color: rgba(142,142,160,var(--tw-text-opacity))
}

.text-white {
    --tw-text-opacity: 1;
    color: rgba(255,255,255,var(--tw-text-opacity))
}

.text-yellow-900 {
    --tw-text-opacity: 1;
    color: rgba(146,114,1,var(--tw-text-opacity))
}

.text-gray-800 {
    --tw-text-opacity: 1;
    /* color: rgba(52,53,65,var(--tw-text-opacity)) */
}

.text-gray-700 {
    --tw-text-opacity: 1;
    color: rgba(64,65,79,var(--tw-text-opacity))
}

.text-gray-200 {
    --tw-text-opacity: 1;
    color: rgba(217,217,227,var(--tw-text-opacity))
}

.text-gray-100 {
    --tw-text-opacity: 1;
    color: rgba(236,236,241,var(--tw-text-opacity))
}

.text-gray-300 {
    --tw-text-opacity: 1;
    color: rgba(197,197,210,var(--tw-text-opacity))
}

.text-gray-900 {
    --tw-text-opacity: 1;
    color: rgba(32,33,35,var(--tw-text-opacity))
}

.text-gray-600 {
    --tw-text-opacity: 1;
    color: rgba(86,88,105,var(--tw-text-opacity))
}

.text-red-600 {
    --tw-text-opacity: 1;
    color: rgba(220,38,38,var(--tw-text-opacity))
}

.text-yellow-700 {
    --tw-text-opacity: 1;
    color: rgba(161,98,7,var(--tw-text-opacity))
}

.text-green-700 {
    --tw-text-opacity: 1;
    color: rgba(26,127,100,var(--tw-text-opacity))
}

.text-indigo-500 {
    --tw-text-opacity: 1;
    color: rgba(99,102,241,var(--tw-text-opacity))
}

.text-red-700 {
    --tw-text-opacity: 1;
    color: rgba(185,28,28,var(--tw-text-opacity))
}

.text-red-800 {
    --tw-text-opacity: 1;
    color: rgba(153,27,27,var(--tw-text-opacity))
}

.text-black\/50 {
    color: rgba(0,0,0,.5)
}

.text-indigo-600 {
    --tw-text-opacity: 1;
    color: rgba(79,70,229,var(--tw-text-opacity))
}

.text-yellow-400 {
    --tw-text-opacity: 1;
    color: rgba(255,198,87,var(--tw-text-opacity))
}

.text-red-300 {
    --tw-text-opacity: 1;
    color: rgba(252,165,165,var(--tw-text-opacity))
}

.text-green-600 {
    --tw-text-opacity: 1;
    color: rgba(16,163,127,var(--tw-text-opacity))
}

.text-orange-500 {
    --tw-text-opacity: 1;
    color: rgba(224,108,43,var(--tw-text-opacity))
}

.text-blue-500 {
    --tw-text-opacity: 1;
    color: rgba(59,130,246,var(--tw-text-opacity))
}

.text-green-500 {
    --tw-text-opacity: 1;
    color: rgba(25,195,125,var(--tw-text-opacity))
}

.text-yellow-500 {
    --tw-text-opacity: 1;
    color: rgba(234,179,8,var(--tw-text-opacity))
}

.underline {
    text-decoration-line: underline
}

.\!no-underline {
    text-decoration-line: none!important
}

.placeholder-gray-500::-webkit-input-placeholder {
    --tw-placeholder-opacity: 1;
    color: rgba(142,142,160,var(--tw-placeholder-opacity))
}

.placeholder-gray-500::placeholder {
    --tw-placeholder-opacity: 1;
    color: rgba(142,142,160,var(--tw-placeholder-opacity))
}

.opacity-50 {
    opacity: .5
}

.opacity-0 {
    opacity: 0
}

.opacity-100 {
    opacity: 1
}

.opacity-20 {
    opacity: .2
}

.shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color)
}

.shadow-md,.shadow-sm {
    box-shadow: 0 0 transparent,0 0 transparent,var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)
}

.shadow-md {
    --tw-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)
}

.shadow-xl {
    --tw-shadow: 0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)
}

.shadow,.shadow-xl {
    box-shadow: 0 0 transparent,0 0 transparent,var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)
}

.shadow {
    --tw-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)
}

.shadow-\[0_0_10px_rgba\(0\2c 0\2c 0\2c 0\.10\)\] {
    --tw-shadow: 0 0 10px rgba(0,0,0,.1);
    --tw-shadow-colored: 0 0 10px var(--tw-shadow-color)
}

.shadow-\[0_0_10px_rgba\(0\2c 0\2c 0\2c 0\.10\)\],.shadow-lg {
    box-shadow: 0 0 transparent,0 0 transparent,var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)
}

.shadow-lg {
    --tw-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)
}

.shadow-gray-500 {
    --tw-shadow-color: #8e8ea0;
    --tw-shadow: var(--tw-shadow-colored)
}

.shadow-indigo-400 {
    --tw-shadow-color: #818cf8;
    --tw-shadow: var(--tw-shadow-colored)
}

.outline-none {
    outline: 2px solid transparent;
    outline-offset: 2px
}

.ring-1 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)
}

.ring-0,.ring-1 {
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)
}

.ring-0 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)
}

.ring-black {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(0,0,0,var(--tw-ring-opacity))
}

.ring-opacity-5 {
    --tw-ring-opacity: 0.05
}

.filter {
    -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

.filter-none {
    -webkit-filter: none;
    filter: none
}

.transition-transform {
    transition-duration: .15s;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1)
}

.transition {
    transition-duration: .15s;
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(.4,0,.2,1)
}

.transition-opacity {
    transition-duration: .15s;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(.4,0,.2,1)
}

.transition-all {
    transition-duration: .15s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1)
}

.transition-colors {
    transition-duration: .15s;
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
    transition-timing-function: cubic-bezier(.4,0,.2,1)
}

.transition-width {
    transition-duration: .15s;
    transition-property: width;
    transition-timing-function: cubic-bezier(.4,0,.2,1)
}

.duration-200 {
    transition-duration: .2s
}

.duration-500 {
    transition-duration: .5s
}

.duration-75 {
    transition-duration: 75ms
}

.duration-300 {
    transition-duration: .3s
}

.duration-150 {
    transition-duration: .15s
}

.duration-100 {
    transition-duration: .1s
}

.ease-out {
    transition-timing-function: cubic-bezier(0,0,.2,1)
}

.ease-in {
    transition-timing-function: cubic-bezier(.4,0,1,1)
}

.ease-linear {
    transition-timing-function: linear
}

.ease-in-out {
    transition-timing-function: cubic-bezier(.4,0,.2,1)
}

.line-clamp-2 {
    -webkit-line-clamp: 2
}

.line-clamp-2,.line-clamp-3 {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden
}

.line-clamp-3 {
    -webkit-line-clamp: 3
}

body,html {
    height: 100%
}

.dark body,.dark html {
    --tw-bg-opacity: 1;
    background-color: rgba(52,53,65,var(--tw-bg-opacity))
}

#__next,#root {
    height: 100%
}

.markdown ol {
    counter-reset: item
}

.markdown ul li {
    display: block;
    margin: 0;
    position: relative
}

.markdown ul li:before {
    content: "•";
    font-size: .875rem;
    line-height: 1.25rem;
    margin-left: -1rem;
    position: absolute
}

.markdown {
    max-width: none
}

.markdown h1,.markdown h2 {
    font-weight: 600
}

.markdown h2 {
    margin-bottom: 1rem;
    margin-top: 2rem
}

.markdown h3 {
    font-weight: 600
}

.markdown h3,.markdown h4 {
    margin-bottom: .5rem;
    margin-top: 1rem
}

.markdown h4 {
    font-weight: 400
}

.markdown h5 {
    font-weight: 600
}

.markdown blockquote {
    --tw-border-opacity: 1;
    border-color: rgba(142,142,160,var(--tw-border-opacity));
    border-left-width: 2px;
    line-height: 1rem;
    padding-left: 1rem
}

.markdown ol,.markdown ul {
    display: flex;
    flex-direction: column;
    padding-left: 1rem
}

.markdown ol li,.markdown ol li>p,.markdown ol ol,.markdown ol ul,.markdown ul li,.markdown ul li>p,.markdown ul ol,.markdown ul ul {
    margin: 0
}

.markdown table {
    --tw-border-spacing-x: 0px;
    --tw-border-spacing-y: 0px;
    border-collapse: separate;
    border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
    width: 100%
}

.markdown th {
    border: 0 solid var(--n-text-color);
    background-color: rgba(236,236,241,.2);
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-top-width: 1px;
    padding: .25rem .75rem
}

.markdown th:first-child {
    border-top-left-radius: .375rem
}

.markdown th:last-child {
    border-right-width: 1px;
    border-top-right-radius: .375rem
}

.markdown td {
    border: 0 solid var(--n-text-color);
    border-bottom-width: 1px;
    border-left-width: 1px;
    padding: .25rem .75rem
}

.markdown td:last-child {
    border-right-width: 1px
}

.markdown tbody tr:last-child td:first-child {
    border-bottom-left-radius: .375rem
}

.markdown tbody tr:last-child td:last-child {
    border-bottom-right-radius: .375rem
}

.markdown a {
    text-decoration-line: underline;
    text-underline-offset: 2px
}

.conversation-item-time:before {
    content: attr(data-time)
}

.tooltip-label:before {
    content: attr(data-content)
}

::v-deep button.scroll-convo {
    display: none
}

@-webkit-keyframes blink {
    to {
        visibility: hidden
    }
}

@keyframes blink {
    to {
        visibility: hidden
    }
}

.animate-flash {
    -webkit-animation: flash 2s steps(60,start);
    animation: flash 2s steps(60,start)
}

@-webkit-keyframes flash {
    0% {
        background-color: hsla(0,0%,100%,.4)
    }
}

@keyframes flash {
    0% {
        background-color: hsla(0,0%,100%,.4)
    }
}

.result-streaming>:not(ol):not(ul):not(pre):last-child:after,.result-streaming>ol:last-child li:last-child:after,.result-streaming>pre:last-child code:after,.result-streaming>ul:last-child li:last-child:after {
    -webkit-animation: blink 1s steps(5,start) infinite;
    animation: blink 1s steps(5,start) infinite;
    content: "▋";
    margin-left: .25rem;
    vertical-align: baseline
}

@-webkit-keyframes toast-open {
    0% {
        opacity: 0;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%)
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes toast-open {
    0% {
        opacity: 0;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%)
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@-webkit-keyframes toast-close {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

@keyframes toast-close {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

.toast-root {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 0;
    transition: all .24s cubic-bezier(0,0,.2,1)
}

.toast-root[data-state=entered],.toast-root[data-state=entering] {
    -webkit-animation: toast-open .24s cubic-bezier(.175,.885,.32,1.175) both;
    animation: toast-open .24s cubic-bezier(.175,.885,.32,1.175) both
}

.toast-root[data-state=exiting] {
    -webkit-animation: toast-close .12s cubic-bezier(.4,0,1,1) both;
    animation: toast-close .12s cubic-bezier(.4,0,1,1) both
}

.toast-root .alert-root {
    box-shadow: 0 0 1px rgba(67,90,111,.3),0 5px 8px -4px rgba(67,90,111,.3);
    flex-shrink: 0;
    pointer-events: all
}

.before\:visible:before {
    content: var(--tw-content);
    visibility: visible
}

.before\:absolute:before {
    content: var(--tw-content);
    position: absolute
}

.before\:-top-7:before {
    content: var(--tw-content);
    top: -1.75rem
}

.before\:top-0:before {
    content: var(--tw-content);
    top: 0
}

.before\:h-2:before {
    content: var(--tw-content);
    height: .5rem
}

.before\:w-2:before {
    content: var(--tw-content);
    width: .5rem
}

.before\:-translate-y-1\/2:before {
    --tw-translate-y: -50%
}

.before\:-translate-x-1\/2:before,.before\:-translate-y-1\/2:before {
    content: var(--tw-content);
    -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.before\:-translate-x-1\/2:before {
    --tw-translate-x: -50%
}

.before\:rotate-45:before {
    --tw-rotate: 45deg;
    content: var(--tw-content);
    -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.before\:border-b:before {
    border-bottom-width: 1px;
    content: var(--tw-content)
}

.before\:border-r:before {
    border-right-width: 1px;
    content: var(--tw-content)
}

.before\:border-black\/10:before {
    border-color: rgba(0,0,0,.1);
    content: var(--tw-content)
}

.before\:bg-gray-100:before {
    --tw-bg-opacity: 1;
    background-color: rgba(236,236,241,var(--tw-bg-opacity));
    content: var(--tw-content)
}

.before\:content-\[\"\"\]:before{--tw-content:"";content:var(--tw-content)}.before\:content-\[\'\"\'\]:before{--tw-content:'"';content:var(--tw-content)}.after\:h-\[15px\]:after{content:var(--tw-content);height:15px}.after\:w-\[1px\]:after{content:var(--tw-content);width:1px}.after\:bg-gray-300:after{--tw-bg-opacity:1;background-color:rgba(197,197,210,var(--tw-bg-opacity));content:var(--tw-content)}.after\:content-\[\"\"\]:after{--tw-content:"";content:var(--tw-content)}.after\:content-\[\'\"\'\]:after{--tw-content:'"';content:var(--tw-content)}.last\:mb-2:last-child{margin-bottom:.5rem}.last\:border-0:last-child{border-width:0}.last\:after\:bg-transparent:last-child:after{background-color:transparent;content:var(--tw-content)}.checked\:border-blue-600:checked{--tw-border-opacity:1;border-color:rgba(37,99,235,var(--tw-border-opacity))}.checked\:bg-blue-600:checked{--tw-bg-opacity:1;background-color:rgba(37,99,235,var(--tw-bg-opacity))}.focus-within\:z-10[focus-within]{z-index:10}.focus-within\:z-10:focus-within{z-index:10}.focus-within\:border-indigo-600[focus-within]{--tw-border-opacity:1;border-color:rgba(79,70,229,var(--tw-border-opacity))}.focus-within\:border-indigo-600:focus-within{--tw-border-opacity:1;border-color:rgba(79,70,229,var(--tw-border-opacity))}.focus-within\:ring-1[focus-within]{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus-within\:ring-1:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus-within\:ring-indigo-600[focus-within]{--tw-ring-opacity:1;--tw-ring-color:rgba(79,70,229,var(--tw-ring-opacity))}.focus-within\:ring-indigo-600:focus-within{--tw-ring-opacity:1;--tw-ring-color:rgba(79,70,229,var(--tw-ring-opacity))}.hover\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgba(236,236,241,var(--tw-bg-opacity))}.hover\:bg-\[\#2A2B32\]:hover{--tw-bg-opacity:1;background-color:rgba(42,43,50,var(--tw-bg-opacity))}.hover\:bg-gray-800:hover{--tw-bg-opacity:1;background-color:rgba(52,53,65,var(--tw-bg-opacity))}.hover\:bg-gray-500\/10:hover{background-color:hsla(240,9%,59%,.1)}.hover\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgba(247,247,248,var(--tw-bg-opacity))}.hover\:bg-white\/20:hover{background-color:hsla(0,0%,100%,.2)}.hover\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgba(217,217,227,var(--tw-bg-opacity))}.hover\:bg-gray-300:hover{--tw-bg-opacity:1;background-color:rgba(197,197,210,var(--tw-bg-opacity))}.hover\:pr-4:hover{padding-right:1rem}.hover\:pr-14:hover{padding-right:3.5rem}.hover\:text-gray-500:hover{--tw-text-opacity:1;color:rgba(142,142,160,var(--tw-text-opacity))}.hover\:text-gray-700:hover{--tw-text-opacity:1;color:rgba(64,65,79,var(--tw-text-opacity))}.hover\:text-white:hover{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.hover\:text-gray-900:hover{--tw-text-opacity:1;color:rgba(32,33,35,var(--tw-text-opacity))}.hover\:opacity-80:hover{opacity:.8}.hover\:opacity-75:hover{opacity:.75}.focus\:z-10:focus{z-index:10}.focus\:border-green-500:focus{--tw-border-opacity:1;border-color:rgba(25,195,125,var(--tw-border-opacity))}.focus\:border-indigo-500:focus{--tw-border-opacity:1;border-color:rgba(99,102,241,var(--tw-border-opacity))}.focus\:border-green-600:focus{--tw-border-opacity:1;border-color:rgba(16,163,127,var(--tw-border-opacity))}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\:ring-0:focus,.focus\:ring-2:focus{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\:ring-1:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus\:ring-inset:focus{--tw-ring-inset:inset}.focus\:ring-green-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(25,195,125,var(--tw-ring-opacity))}.focus\:ring-white:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(255,255,255,var(--tw-ring-opacity))}.focus\:ring-indigo-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(99,102,241,var(--tw-ring-opacity))}.focus\:ring-green-600:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(16,163,127,var(--tw-ring-opacity))}.focus\:ring-gray-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(142,142,160,var(--tw-ring-opacity))}.focus\:ring-offset-2:focus{--tw-ring-offset-width:2px}.focus-visible\:ring-0.focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus-visible\:ring-0:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.disabled\:bottom-0\.5:disabled{bottom:.125rem}.disabled\:bottom-0:disabled{bottom:0}.disabled\:cursor-auto:disabled{cursor:auto}.disabled\:text-gray-300:disabled{--tw-text-opacity:1;color:rgba(197,197,210,var(--tw-text-opacity))}.disabled\:opacity-20:disabled{opacity:.2}.disabled\:hover\:bg-transparent:hover:disabled{background-color:transparent}.disabled\:hover\:bg-white:hover:disabled{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.group:hover .group-hover\:visible{visibility:visible}.group:hover .group-hover\:from-\[\#2A2B32\]{--tw-gradient-from:#2a2b32;--tw-gradient-to:rgba(42,43,50,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.group:hover .group-hover\:text-gray-500{--tw-text-opacity:1;color:rgba(142,142,160,var(--tw-text-opacity))}.group:hover .group-hover\:text-gray-700{--tw-text-opacity:1;color:rgba(64,65,79,var(--tw-text-opacity))}.dark .dark\:prose-invert{--tw-prose-body:var(--tw-prose-invert-body);--tw-prose-headings:var(--tw-prose-invert-headings);--tw-prose-lead:var(--tw-prose-invert-lead);--tw-prose-links:var(--tw-prose-invert-links);--tw-prose-bold:var(--tw-prose-invert-bold);--tw-prose-counters:var(--tw-prose-invert-counters);--tw-prose-bullets:var(--tw-prose-invert-bullets);--tw-prose-hr:var(--tw-prose-invert-hr);--tw-prose-quotes:var(--tw-prose-invert-quotes);--tw-prose-quote-borders:var(--tw-prose-invert-quote-borders);--tw-prose-captions:var(--tw-prose-invert-captions);--tw-prose-code:var(--tw-prose-invert-code);--tw-prose-pre-code:var(--tw-prose-invert-pre-code);--tw-prose-pre-bg:var(--tw-prose-invert-pre-bg);--tw-prose-th-borders:var(--tw-prose-invert-th-borders);--tw-prose-td-borders:var(--tw-prose-invert-td-borders)}.dark .dark\:border-gray-900\/50{border-color:rgba(32,33,35,.5)}.dark .dark\:border-black\/20{border-color:rgba(0,0,0,.2)}.dark .dark\:border-white\/20{border-color:hsla(0,0%,100%,.2)}.dark .dark\:border-gray-700{--tw-border-opacity:1;border-color:rgba(64,65,79,var(--tw-border-opacity))}.dark .dark\:border-white\/10{border-color:hsla(0,0%,100%,.1)}.dark .dark\:border-black\/10{border-color:rgba(0,0,0,.1)}.dark .dark\:bg-\[\#444654\]{--tw-bg-opacity:1;background-color:rgba(68,70,84,var(--tw-bg-opacity))}.dark .dark\:bg-gray-800{--tw-bg-opacity:1;background-color:rgba(52,53,65,var(--tw-bg-opacity))}.dark .dark\:bg-gray-700{--tw-bg-opacity:1;background-color:rgba(64,65,79,var(--tw-bg-opacity))}.dark .dark\:bg-gray-800\/90{background-color:rgba(52,53,65,.9)}.dark .dark\:bg-gray-900{--tw-bg-opacity:1;background-color:rgba(32,33,35,var(--tw-bg-opacity))}.dark .dark\:bg-transparent{background-color:transparent}.dark .dark\:bg-white\/10{background-color:hsla(0,0%,100%,.1)}.dark .dark\:bg-white\/5{background-color:hsla(0,0%,100%,.05)}.dark .dark\:bg-gray-500{--tw-bg-opacity:1;background-color:rgba(142,142,160,var(--tw-bg-opacity))}.dark .dark\:text-gray-700{--tw-text-opacity:1;color:rgba(64,65,79,var(--tw-text-opacity))}.dark .dark\:text-gray-100{--tw-text-opacity:1;color:rgba(236,236,241,var(--tw-text-opacity))}.dark .dark\:text-gray-400{--tw-text-opacity:1;color:rgba(172,172,190,var(--tw-text-opacity))}.dark .dark\:text-gray-200{--tw-text-opacity:1;color:rgba(217,217,227,var(--tw-text-opacity))}.dark .dark\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.dark .dark\:text-gray-500{--tw-text-opacity:1;color:rgba(142,142,160,var(--tw-text-opacity))}.dark .dark\:text-red-500{--tw-text-opacity:1;color:rgba(239,68,68,var(--tw-text-opacity))}.dark .dark\:text-white\/50{color:hsla(0,0%,100%,.5)}.dark .dark\:text-gray-600{--tw-text-opacity:1;color:rgba(86,88,105,var(--tw-text-opacity))}.dark .dark\:text-gray-300{--tw-text-opacity:1;color:rgba(197,197,210,var(--tw-text-opacity))}.dark .dark\:opacity-100{opacity:1}.dark .dark\:shadow-\[0_0_15px_rgba\(0\2c 0\2c 0\2c 0\.10\)\]{--tw-shadow:0 0 15px rgba(0,0,0,.1);--tw-shadow-colored:0 0 15px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.dark .dark\:ring-white\/20{--tw-ring-color:hsla(0,0%,100%,.2)}.dark .dark\:ring-gray-600{--tw-ring-opacity:1;--tw-ring-color:rgba(86,88,105,var(--tw-ring-opacity))}.dark .dark\:last\:border-0:last-child{border-width:0}.dark .dark\:hover\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgba(64,65,79,var(--tw-bg-opacity))}.dark .dark\:hover\:bg-gray-900:hover{--tw-bg-opacity:1;background-color:rgba(32,33,35,var(--tw-bg-opacity))}.dark .dark\:hover\:bg-gray-600:hover{--tw-bg-opacity:1;background-color:rgba(86,88,105,var(--tw-bg-opacity))}.dark .dark\:hover\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgba(236,236,241,var(--tw-bg-opacity))}.dark .dark\:hover\:bg-gray-500\/10:hover{background-color:hsla(240,9%,59%,.1)}.dark .dark\:hover\:text-gray-200:hover{--tw-text-opacity:1;color:rgba(217,217,227,var(--tw-text-opacity))}.dark .dark\:hover\:text-white:hover{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.dark .dark\:hover\:text-gray-400:hover{--tw-text-opacity:1;color:rgba(172,172,190,var(--tw-text-opacity))}.dark .dark\:focus\:border-white:focus{--tw-border-opacity:1;border-color:rgba(255,255,255,var(--tw-border-opacity))}.dark .dark\:focus\:ring-white:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(255,255,255,var(--tw-ring-opacity))}.dark .dark\:disabled\:text-gray-400:disabled{--tw-text-opacity:1;color:rgba(172,172,190,var(--tw-text-opacity))}.dark .dark\:disabled\:hover\:bg-transparent:hover:disabled{background-color:transparent}.dark .dark\:disabled\:hover\:bg-gray-700:hover:disabled{--tw-bg-opacity:1;background-color:rgba(64,65,79,var(--tw-bg-opacity))}.dark .disabled\:dark\:hover\:text-gray-400:hover:disabled{--tw-text-opacity:1;color:rgba(172,172,190,var(--tw-text-opacity))}@media (min-width:640px){.sm\:absolute{position:absolute}.sm\:order-2{order:2}.sm\:order-1{order:1}.sm\:my-8{margin-bottom:2rem;margin-top:2rem}.sm\:mt-0{margin-top:0}.sm\:mt-4{margin-top:1rem}.sm\:mb-16{margin-bottom:4rem}.sm\:mt-\[20vh\]{margin-top:20vh}.sm\:flex{display:flex}.sm\:h-10{height:2.5rem}.sm\:w-full{width:100%}.sm\:w-10{width:2.5rem}.sm\:w-2\/5{width:40%}.sm\:max-w-sm{max-width:24rem}.sm\:max-w-lg{max-width:32rem}.sm\:max-w-xl{max-width:36rem}.sm\:max-w-2xl{max-width:42rem}.sm\:max-w-4xl{max-width:56rem}.sm\:max-w-md{max-width:28rem}.sm\:translate-y-0{--tw-translate-y:0px}.sm\:scale-95,.sm\:translate-y-0{-webkit-transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sm\:scale-95{--tw-scale-x:.95;--tw-scale-y:.95}.sm\:scale-100{--tw-scale-x:1;--tw-scale-y:1;-webkit-transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sm\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\:flex-row-reverse{flex-direction:row-reverse}.sm\:items-center{align-items:center}.sm\:gap-4{gap:1rem}.sm\:gap-12{gap:3rem}.sm\:border-t-0{border-top-width:0}.sm\:border-r{border-right-width:1px}.sm\:p-0{padding:0}.sm\:p-6{padding:1.5rem}.sm\:p-4{padding:1rem}.sm\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\:px-0{padding-left:0;padding-right:0}.sm\:pl-3{padding-left:.75rem}.sm\:pb-1{padding-bottom:.25rem}.sm\:pb-2{padding-bottom:.5rem}.sm\:text-left{text-align:left}.sm\:text-right{text-align:right}.sm\:text-sm{font-size:.875rem;line-height:1.25rem}.sm\:text-xs{font-size:.75rem;line-height:1rem}.sm\:text-base{font-size:1rem;line-height:1.5rem}.sm\:text-\[40px\]{font-size:40px}.sm\:duration-300{transition-duration:.3s}.sm\:duration-500{transition-duration:.5s}}@media (min-width:768px){.md\:invisible{visibility:hidden}.md\:fixed{position:fixed}.md\:inset-y-0{bottom:0;top:0}.md\:bottom-2\.5{bottom:.625rem}.md\:right-2{right:.5rem}.md\:bottom-2{bottom:.5rem}.md\:bottom-\[120px\]{bottom:120px}.md\:m-auto{margin:auto}.md\:mb-auto{margin-bottom:auto}.md\:mb-2{margin-bottom:.5rem}.md\:mt-3{margin-top:.75rem}.md\:flex{display:flex}.md\:hidden{display:none}.md\:h-48{height:12rem}.md\:h-full{height:100%}.md\:min-h-\[34px\]{min-height:34px}.md\:w-\[260px\]{width:260px}.md\:w-full{width:100%}.md\:w-1\/2{width:50%}.md\:w-\[100\%\]{width:100%}.md\:w-auto{width:auto}.md\:max-w-2xl{max-width:42rem}.md\:flex-col{flex-direction:column}.md\:gap-3{gap:.75rem}.md\:gap-6{gap:1.5rem}.md\:gap-4{gap:1rem}.md\:gap-2{gap:.5rem}.md\:border{border-width:1px}.md\:border-t-0{border-top-width:0}.md\:border-transparent{border-color:transparent}.md\:\!bg-transparent{background-color:transparent!important}.md\:bg-vert-light-gradient{background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 13.94%,#fff 54.73%)}.md\:py-6{padding-bottom:1.5rem;padding-top:1.5rem}.md\:py-3{padding-bottom:.75rem;padding-top:.75rem}.md\:px-4{padding-left:1rem;padding-right:1rem}.md\:pl-0{padding-left:0}.md\:pl-4{padding-left:1rem}.md\:pl-\[260px\]{padding-left:260px}.md\:pt-3{padding-top:.75rem}.md\:pb-6{padding-bottom:1.5rem}.md\:pb-5{padding-bottom:1.25rem}.md\:text-justify{text-align:justify}.md\:text-sm{font-size:.875rem;line-height:1.25rem}.md\:last\:mb-6:last-child{margin-bottom:1.5rem}.md\:disabled\:bottom-1:disabled{bottom:.25rem}.group:hover .md\:group-hover\:visible{visibility:visible}.dark .md\:dark\:border-transparent{border-color:transparent}.dark .dark\:md\:bg-vert-dark-gradient{background-image:linear-gradient(180deg,rgba(53,55,64,0),#353740 58.85%)}}@media (min-width:1024px){.lg\:absolute{position:absolute}.lg\:relative{position:relative}.lg\:top-0{top:0}.lg\:right-0{right:0}.lg\:top-1\/2{top:50%}.lg\:-left-2{left:-.5rem}.lg\:left-auto{left:auto}.lg\:-right-2{right:-.5rem}.lg\:m-auto{margin:auto}.lg\:mx-auto{margin-left:auto;margin-right:auto}.lg\:mt-0{margin-top:0}.lg\:mb-4{margin-bottom:1rem}.lg\:h-8{height:2rem}.lg\:w-3\/5{width:60%}.lg\:w-auto{width:auto}.lg\:w-1\/2{width:50%}.lg\:w-2\/3{width:66.666667%}.lg\:w-\[calc\(100\%-20px\)\]{width:calc(100% - 20px)}.lg\:w-\[calc\(100\%-115px\)\]{width:calc(100% - 115px)}.lg\:w-1\/3{width:33.333333%}.lg\:w-8{width:2rem}.lg\:max-w-sm{max-width:24rem}.lg\:max-w-none{max-width:none}.lg\:max-w-2xl{max-width:42rem}.lg\:max-w-3xl{max-width:48rem}.lg\:translate-y-0{--tw-translate-y:0px}.lg\:translate-x-full,.lg\:translate-y-0{-webkit-transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\:translate-x-full{--tw-translate-x:100%}.lg\:-translate-y-1\/2{--tw-translate-y:-50%}.lg\:-translate-x-full,.lg\:-translate-y-1\/2{-webkit-transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\:-translate-x-full{--tw-translate-x:-100%}.lg\:gap-1{gap:.25rem}.lg\:self-center{align-self:center}.lg\:rounded-lg{border-radius:.5rem}.lg\:rounded-none{border-radius:0}.lg\:border{border-width:1px}.lg\:border-0{border-width:0}.lg\:p-6{padding:1.5rem}.lg\:p-0{padding:0}.lg\:px-14{padding-left:3.5rem;padding-right:3.5rem}.lg\:px-0{padding-left:0;padding-right:0}.lg\:px-8{padding-left:2rem;padding-right:2rem}.lg\:pt-32{padding-top:8rem}.lg\:pl-2{padding-left:.5rem}.lg\:text-left{text-align:left}}@media (min-width:1280px){.xl\:w-1\/4{width:25%}.xl\:w-1\/3{width:33.333333%}.xl\:max-w-3xl{max-width:48rem}}@media (min-width:1536px){.\32xl\:w-1\/4{width:25%}}code,pre{font-family:Söhne Mono,Monaco,Andale Mono,Ubuntu Mono,monospace!important}code[class=language-plaintext]{white-space:pre-line}code.hljs,code[class*=language-],pre[class*=language-]{word-wrap:normal;background:none;color:#fff;-webkit-hyphens:none;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal}pre[class*=language-]{border-radius:.3em;overflow:auto}:not(pre)>code.hljs,:not(pre)>code[class*=language-]{border-radius:.3em;padding:.1em;white-space:normal}.hljs-comment{color:hsla(0,0%,100%,.5)}.hljs-meta{color:hsla(0,0%,100%,.6)}.hljs-built_in,.hljs-class .hljs-title{color:#e9950c}.hljs-doctag,.hljs-formula,.hljs-keyword,.hljs-literal{color:#2e95d3}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#00a67d}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#df3079}.hljs-bullet,.hljs-link,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#f22c3d}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#a9aec1}.token.punctuation{color:#fefefe}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#ffa07a}.token.boolean,.token.number{color:#00e0e0}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#abe338}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#00e0e0}.token.atrule,.token.attr-value,.token.function{color:gold}.token.keyword{color:#00e0e0}.token.important,.token.regex{color:gold}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}@media screen and (-ms-high-contrast:active){code[class*=language-],pre[class*=language-]{background:window;color:windowText}:not(pre)>code[class*=language-],pre[class*=language-]{background:window}.token.important{background:highlight;color:window;font-weight:400}.token.atrule,.token.attr-value,.token.function,.token.keyword,.token.operator,.token.selector{font-weight:700}.token.attr-value,.token.comment,.token.doctype,.token.function,.token.keyword,.token.operator,.token.property,.token.string{color:highlight}.token.attr-value,.token.url{font-weight:400}}@font-face{font-family:KaTeX_AMS;font-style:normal;font-weight:400;src:url(/_next/static/media/KaTeX_AMS-Regular.1608a09b.woff) format("woff")}@font-face{font-family:KaTeX_Caligraphic;font-style:normal;font-weight:700;src:url(/_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff) format("woff")}@font-face{font-family:KaTeX_Caligraphic;font-style:normal;font-weight:400;src:url(/_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff) format("woff")}@font-face{font-family:KaTeX_Fraktur;font-style:normal;font-weight:700;src:url(/_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff) format("woff")}@font-face{font-family:KaTeX_Fraktur;font-style:normal;font-weight:400;src:url(/_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff) format("woff")}@font-face{font-family:KaTeX_Main;font-style:normal;font-weight:700;src:url(/_next/static/media/KaTeX_Main-Bold.d181c465.woff) format("woff")}@font-face{font-family:KaTeX_Main;font-style:italic;font-weight:700;src:url(/_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff) format("woff")}@font-face{font-family:KaTeX_Main;font-style:italic;font-weight:400;src:url(/_next/static/media/KaTeX_Main-Italic.9024d815.woff) format("woff")}@font-face{font-family:KaTeX_Main;font-style:normal;font-weight:400;src:url(/_next/static/media/KaTeX_Main-Regular.7f51fe03.woff) format("woff")}@font-face{font-family:KaTeX_Math;font-style:italic;font-weight:700;src:url(/_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff) format("woff")}@font-face{font-family:KaTeX_Math;font-style:italic;font-weight:400;src:url(/_next/static/media/KaTeX_Math-Italic.5295ba48.woff) format("woff")}@font-face{font-family:"KaTeX_SansSerif";font-style:normal;font-weight:700;src:url(/_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff) format("woff")}@font-face{font-family:"KaTeX_SansSerif";font-style:italic;font-weight:400;src:url(/_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff) format("woff")}@font-face{font-family:"KaTeX_SansSerif";font-style:normal;font-weight:400;src:url(/_next/static/media/KaTeX_SansSerif-Regular.74048478.woff) format("woff")}@font-face{font-family:KaTeX_Script;font-style:normal;font-weight:400;src:url(/_next/static/media/KaTeX_Script-Regular.07505710.woff) format("woff")}@font-face{font-family:KaTeX_Size1;font-style:normal;font-weight:400;src:url(/_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff) format("woff")}@font-face{font-family:KaTeX_Size2;font-style:normal;font-weight:400;src:url(/_next/static/media/KaTeX_Size2-Regular.57727022.woff) format("woff")}@font-face{font-family:KaTeX_Size3;font-style:normal;font-weight:400;src:url(/_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff) format("woff")}@font-face{font-family:KaTeX_Size4;font-style:normal;font-weight:400;src:url(/_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff) format("woff")}@font-face{font-family:KaTeX_Typewriter;font-style:normal;font-weight:400;src:url(/_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff) format("woff")}.katex{font:normal 1.21em KaTeX_Main,Times New Roman,serif;line-height:1.2;text-indent:0;text-rendering:auto}.katex *{-ms-high-contrast-adjust:none!important;border-color:currentcolor}.katex .katex-version:after{content:"0.16.0"}.katex .katex-mathml{clip:rect(1px,1px,1px,1px);border:0;height:1px;overflow:hidden;padding:0;position:absolute;width:1px}.katex .katex-html>.newline{display:block}.katex .base{position:relative;white-space:nowrap;width:-webkit-min-content;width:min-content}.katex .base,.katex .strut{display:inline-block}.katex .textbf{font-weight:700}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:"KaTeX_SansSerif"}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathnormal{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .boldsymbol{font-family:KaTeX_Math;font-style:italic;font-weight:700}.katex .amsrm,.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:"KaTeX_SansSerif"}.katex .mathboldsf,.katex .textboldsf{font-family:"KaTeX_SansSerif";font-weight:700}.katex .mathitsf,.katex .textitsf{font-family:"KaTeX_SansSerif";font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{border-collapse:collapse;display:inline-table;table-layout:fixed}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;position:relative;vertical-align:bottom}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;font-size:1px;min-width:2px;vertical-align:bottom;width:2px}.katex .vbox{align-items:baseline;display:inline-flex;flex-direction:column}.katex .hbox{width:100%}.katex .hbox,.katex .thinbox{display:inline-flex;flex-direction:row}.katex .thinbox{max-width:0;width:0}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{border-bottom-style:solid;display:inline-block;width:100%}.katex .hdashline,.katex .hline,.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .rule,.katex .underline .underline-line{min-height:1px}.katex .mspace{display:inline-block}.katex .clap,.katex .llap,.katex .rlap{position:relative;width:0}.katex .clap>.inner,.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .clap>.fix,.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .clap>.inner,.katex .rlap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{border:0 solid;display:inline-block;position:relative}.katex .hline,.katex .overline .overline-line,.katex .underline .underline-line{border-bottom-style:solid;display:inline-block;width:100%}.katex .hdashline{border-bottom-style:dashed;display:inline-block;width:100%}.katex .sqrt>.root{margin-left:.27777778em;margin-right:-.55555556em}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.2em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:3.456em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.148em}.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11{font-size:4.976em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.83333333em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.16666667em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.5em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.66666667em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.4em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.88em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.45666667em}.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11{font-size:4.14666667em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.71428571em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.85714286em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.14285714em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.28571429em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.42857143em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.71428571em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.05714286em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.46857143em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:2.96285714em}.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11{font-size:3.55428571em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.75em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.875em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.125em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.25em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.5em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.8em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.16em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.5925em}.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11{font-size:3.11em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.55555556em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.66666667em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.77777778em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.88888889em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.11111111em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.6em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:1.92em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.30444444em}.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11{font-size:2.76444444em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.6em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.7em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.8em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.9em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.728em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.074em}.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11{font-size:2.488em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.41666667em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.5em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.58333333em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.66666667em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.75em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.83333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.2em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.44em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72833333em}.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11{font-size:2.07333333em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.34722222em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.41666667em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.48611111em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.55555556em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.625em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.69444444em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.83333333em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.2em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.44027778em}.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11{font-size:1.72777778em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.28935185em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.34722222em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.40509259em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.46296296em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.52083333em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.5787037em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.69444444em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.83333333em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20023148em}.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11{font-size:1.43981481em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.24108004em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.28929605em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.33751205em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.38572806em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.43394407em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48216008em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.57859209em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.69431051em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.83317261em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11{font-size:1.19961427em}.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1{font-size:.20096463em}.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2{font-size:.24115756em}.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3{font-size:.28135048em}.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4{font-size:.32154341em}.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5{font-size:.36173633em}.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6{font-size:.40192926em}.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7{font-size:.48231511em}.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8{font-size:.57877814em}.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9{font-size:.69453376em}.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10{font-size:.83360129em}.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .delimcenter,.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent>.vlist-t,.katex .op-limits>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{display:inline-block;min-width:1px}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{fill:currentcolor;stroke:currentcolor;fill-rule:nonzero;fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;display:block;height:inherit;position:absolute;width:100%}.katex svg path{stroke:none}.katex img{border-style:none;max-height:none;max-width:none;min-height:0;min-width:0}.katex .stretchy{display:block;overflow:hidden;position:relative;width:100%}.katex .stretchy:after,.katex .stretchy:before{content:""}.katex .hide-tail{overflow:hidden;position:relative;width:100%}.katex .halfarrow-left{left:0;overflow:hidden;position:absolute;width:50.2%}.katex .halfarrow-right{overflow:hidden;position:absolute;right:0;width:50.2%}.katex .brace-left{left:0;overflow:hidden;position:absolute;width:25.1%}.katex .brace-center{left:25%;overflow:hidden;position:absolute;width:50%}.katex .brace-right{overflow:hidden;position:absolute;right:0;width:25.1%}.katex .x-arrow-pad{padding:0 .5em}.katex .cd-arrow-pad{padding:0 .55556em 0 .27778em}.katex .mover,.katex .munder,.katex .x-arrow{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox,.katex .fcolorbox{border:.04em solid;box-sizing:border-box}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap{margin-left:-.2em;margin-right:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}.katex .angl{border-right:.049em solid;border-top:.049em solid;box-sizing:border-box;margin-right:.03889em}.katex .anglpad{padding:0 .03889em}.katex .eqn-num:before{content:"(" counter(katexEqnNo) ")";counter-increment:katexEqnNo}.katex .mml-eqn-num:before{content:"(" counter(mmlEqnNo) ")";counter-increment:mmlEqnNo}.katex .mtr-glue{width:50%}.katex .cd-vert-arrow{display:inline-block;position:relative}.katex .cd-label-left{display:inline-block;position:absolute;right:calc(50% + .3em);text-align:left}.katex .cd-label-right{display:inline-block;left:calc(50% + .3em);position:absolute;text-align:right}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:block;text-align:center;white-space:nowrap}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{padding-left:2em;text-align:left}body{counter-reset:katexEqnNo mmlEqnNo}

</style>