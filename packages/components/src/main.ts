import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import myCom from "./index";

// 编写一个插件，实现一个install方法

const app = createApp(App);

app.use(myCom);
app.mount("#app");
