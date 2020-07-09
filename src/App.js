import { defineComponent, h } from "@vue/runtime-core"
import Ball from "./page/Ball";


export default defineComponent({
    setup() {
        console.log(Ball);
    },
    render() {
        return h("Container", [h(Ball)])
    }
})
