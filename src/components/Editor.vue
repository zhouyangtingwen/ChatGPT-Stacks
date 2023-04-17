<template>
  <div v-if="flag" style="border: 1px solid #ccc">
    <Toolbar
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
      style="border-bottom: 1px solid #ccc"
    />
    <Editor
      :defaultConfig="editorConfig"
      :defaultContent="defaultContent"
      :defaultHtml="defaultHtml"
      :mode="mode"
      @onCreated="handleCreated"
      style="height: 500px; overflow-y: hidden"
    />
    <!-- 注意: defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一 -->
  </div>
</template>

<script lang="ts">
import { onBeforeUnmount, ref, defineComponent, shallowRef } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import "@wangeditor/editor/dist/css/style.css";
import { IDomEditor } from "@wangeditor/editor";

export default defineComponent({
  components: { Editor, Toolbar },
  setup() {
    const editorId = "we-2022";
    // 编辑器实例，必须使用 shallowRef ！！！
    const editorRef = shallowRef<IDomEditor | undefined>(undefined);
    const flag = ref(false);
    // defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一
    const defaultHtml = ref("<p>一行文字</p>");
    const defaultContent = ref([
      { type: "paragraph", children: [{ text: "一行文字content" }] },
    ]);
    // const getDefaultContent = computed(() => cloneDeep(defaultContent)); // 注意，要深拷贝 defaultContent ，否则报错

    const toolbarConfig = {};
    const editorConfig = { placeholder: "请输入内容..." };
    setTimeout(() => {
      // defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一
      defaultHtml.value =
        "<p>hello&nbsp;<strong>world</strong></p>\n<p><br></p>";
      // defaultContent.value = [{ type: 'paragraph', children: [{ text: 'ajax 异步获取的内容' }] }];
      flag.value = true;
    }, 1000);

    // 编辑器创建完成触发
    const handleCreated = (editor: IDomEditor) => {
      console.log("created", editor);
      editorRef.value = editor; // 记录 editor 实例
      // editor.disable();
    };
    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });

    return {
      editorRef,
      mode: "default",
      defaultHtml,
      handleCreated,
      defaultContent,
      toolbarConfig,
      editorConfig,
      flag,
    };
  },
});
</script>
