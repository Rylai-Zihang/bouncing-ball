import { createApp } from "./src/runtime-canvas";
import App from "./src/App";
import { getCanvasRootContainer } from "./src/Ball";

console.log(getCanvasRootContainer);
createApp(App).mount(getCanvasRootContainer());
