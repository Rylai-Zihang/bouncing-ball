import { defineComponent, h, onMounted, onUnmounted } from "@vue/runtime-core"
import { getGame } from "../Ball";
import { ref } from "@vue/reactivity"

export default defineComponent({
    setup() {
        const { ballX, ballY } = moveBall();

        return {
            ballX,
            ballY
        };
    },
    render(ctx) {
        return h("Container", [
            h("circle", { x: ctx.ballX, y: ctx.ballY })
        ]);
    }
});

const moveBall = function() {
    const ballX = ref(100);
    const ballY = ref(200);
    const ballVx = ref(8);
    const ballVy = ref(0);

    const maxWidth = 1440 - 60;
    const minWidth = 60
    const maxHeight = 800;

    onMounted(() => {
        getGame().ticker.add(() => {
            ballX.value += ballVx.value;
            ballY.value += ballVy.value;
            ballVy.value += 0.8;
            // hit
            if(ballY.value > maxHeight) {
                ballVy.value *= -0.8;
                ballY.value += ballVy.value;
            }
            if (ballX.value >= maxWidth || ballX.value <= minWidth) {
                ballVx.value *= -1;
                ballX.value += ballVx.value;
            }
        });
    });

    onUnmounted(() => {
        getGame().ticker.destroy();
    })

    return { ballX, ballY };
}
