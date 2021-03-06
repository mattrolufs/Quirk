/**
 * Values used by the various gate drawing strategies.
 */
class GateDrawParams {
    /**
     * @param {!Painter} painter
     * @param {!boolean} isInToolbox
     * @param {!boolean} isHighlighted
     * @param {!boolean} isResizeShowing
     * @param {!boolean} isResizeHighlighted
     * @param {!Rect} rect
     * @param {!Gate} gate
     * @param {!CircuitStats} stats
     * @param {undefined|!{row: !int, col: !int}} positionInCircuit
     * @param {!Array.<!Point>} focusPoints
     * @param {undefined|*} customStatsForCircuitPos
     */
    constructor(painter,
                isInToolbox,
                isHighlighted,
                isResizeShowing,
                isResizeHighlighted,
                rect,
                gate,
                stats,
                positionInCircuit,
                focusPoints,
                customStatsForCircuitPos) {
        /** @type {!Painter} */
        this.painter = painter;
        /** @type {!boolean} */
        this.isInToolbox = isInToolbox;
        /** @type {!boolean} */
        this.isHighlighted = isHighlighted;
        /** @type {!boolean} */
        this.isResizeShowing = isResizeShowing;
        /** @type {!boolean} */
        this.isResizeHighlighted = isResizeHighlighted;
        /** @type {!Rect} */
        this.rect = rect;
        /** @type {!Gate} */
        this.gate = gate;
        /** @type {!CircuitStats} */
        this.stats = stats;
        /** @type {?{row: !int, col: !int}} */
        this.positionInCircuit = positionInCircuit;
        /** @type {!Array.<!Point>} */
        this.focusPoints = focusPoints;
        /** @type {undefined|*} */
        this.customStats = customStatsForCircuitPos;
    }
}

export {GateDrawParams}
