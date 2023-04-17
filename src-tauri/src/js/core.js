// *** Core Script - IPC ***

const uid = () => window.crypto.getRandomValues(new Uint32Array(1))[0];
function transformCallback(callback = () => {}, once = false) {
  const identifier = uid();
  const prop = `_${identifier}`;
  Object.defineProperty(window, prop, {
    value: (result) => {
      if (once) {
        Reflect.deleteProperty(window, prop);
      }
      return callback(result)
    },
    writable: false,
    configurable: true,
  })
  return identifier;
}
async function invoke(cmd, args) {
  return new Promise((resolve, reject) => {
    if (!window.__TAURI_POST_MESSAGE__) reject('__TAURI_POST_MESSAGE__ does not exist!');
    const callback = transformCallback((e) => {
      resolve(e);
      Reflect.deleteProperty(window, `_${error}`);
    }, true)
    const error = transformCallback((e) => {
      reject(e);
      Reflect.deleteProperty(window, `_${callback}`);
    }, true)
    window.__TAURI_POST_MESSAGE__({
      cmd,
      callback,
      error,
      ...args
    });
  });
}

window.uid = uid;
window.invoke = invoke;
window.transformCallback = transformCallback;

async function init() {
  document.addEventListener("click", (e) => {
    const origin = e.target.closest("a");
    if (!origin || !origin.target) {
      return;
    }
    if (origin && origin.href && origin.target !== '_self') {
      invoke('open', { url: origin.href });
    }
  });

  document.addEventListener("keydown", (e) => { if(e.keyCode == 229) e.stopPropagation(); }, true)
  if (window.location.host === 'chat.openai.com') {
    
  }
}

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}