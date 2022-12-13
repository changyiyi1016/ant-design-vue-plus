import { App } from "vue";
import BioButton from "./components/Button/Button";
import BioInput from "./components/Input.vue";
// 导出单独组件
export { BioButton, BioInput };
//编写一个插件，实现一个install方法全局注册引入组件
export default {
  install(app: App): void {
    app.component(BioButton.name, BioButton);
    app.component(BioInput.name, BioInput);
  },
};
