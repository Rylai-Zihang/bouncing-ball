import { createRenderer } from "@vue/runtime-core";
import { Graphics, Text, Container } from "pixi.js";
// 创建渲染器
// 实现渲染接口
const renderer = createRenderer({
    createElement(type) {
        // 基于 type 去创建视图
        let element;
        switch(type) {
            case "Container":
                element = new Container();
                break;
            case "circle":
                element = new Graphics();
                element.beginFill(0x1099bb, 1);
                element.drawCircle(0, 0, 70);
                element.endFill();
                break;
        }
        return element;
    },
    insert(el, parent) {
        parent.addChild(el);
    },
    patchProp(el, key, prevValue, nextValue) {
        el[key] = nextValue;
    },
    setElementText(node, text) {
        const canvasText = new Text(text);
        node.addChild(canvasText);
    },
    createText(text) {
        return new Text(text);
    },
    parentNode() {},
    // 获取兄弟节点
    nextSibling() {},
    // 删除节点时调用
    remove(el) {
        const parent = el.parent;
        if (parent) {
            parent.removeChild(el);
        }
    }
});

export function createApp(rootComponent) {
    // 调用 renderer
    return renderer.createApp(rootComponent);
}
