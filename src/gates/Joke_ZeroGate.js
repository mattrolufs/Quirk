import {Gate} from "src/circuit/Gate.js"
import {GatePainting} from "src/draw/GatePainting.js"
import {Matrix} from "src/math/Matrix.js"

const ZeroGate = Gate.fromKnownMatrix(
    "0",
    Matrix.square(0, 0, 0, 0),
    "Zero Gate",
    "Destroys the universe.").
    withCustomDrawer(args => {
        if (args.isHighlighted || args.isInToolbox) {
            GatePainting.paintBackground(args);
            GatePainting.paintOutline(args);
            GatePainting.paintGateSymbol(args);
            return;
        }

        let {x, y} = args.rect.center();
        let d = Math.min(args.rect.h, args.rect.w);
        args.painter.trace(tracer => {
            tracer.polygon([
                x, y-d/2,
                x-d/2, y,
                x, y+d/2,
                x+d/2, y
            ]);
        }).thenFill('#666').thenStroke('black');
        GatePainting.paintGateSymbol(args);
    });

export {ZeroGate}
