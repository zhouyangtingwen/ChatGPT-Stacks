import { createApp } from "vue";
import i18n from "./language/i18n"
import naive from 'naive-ui'
import "./style.css";
import App from "./App.vue";

// 预览组件以及样式
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';

// emoji
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';

// 显示代码行数
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';

// 行内高亮
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css';

// 快速复制代码
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

// Prism
import Prism from 'prismjs';
// 代码高亮
import 'prismjs/components/prism-json';

// 选择使用主题
VMdPreview.use(vuepressTheme, {
  Prism,
});

VMdPreview.use(createTipPlugin());
VMdPreview.use(createEmojiPlugin());
VMdPreview.use(createLineNumbertPlugin());
VMdPreview.use(createHighlightLinesPlugin());
VMdPreview.use(createCopyCodePlugin());

createApp(App).use(naive).use(i18n).use(VMdPreview).mount("#app");
