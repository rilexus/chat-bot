var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef, useMemo } from "react";
import { Ease } from "../../../css";
import { Transition } from "../../transition";
const FadeInTransition = forwardRef((_a, outsideRef) => {
    var { children, ease = Ease.ease, timeout, delay = 0, style, from = 0, to = 1 } = _a, props = __rest(_a, ["children", "ease", "timeout", "delay", "style", "from", "to"]);
    const transitionStyle = useMemo(() => ({
        entered: {
            opacity: to,
        },
        entering: {
            opacity: to,
        },
        exiting: {
            opacity: from,
        },
        exited: {
            opacity: from,
        },
    }), [from, to]);
    const defaultStyle = useMemo(() => ({
        willChange: "opacity",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: `${ease}`,
        transition: `opacity ${timeout}ms`,
    }), [timeout, delay, ease, from]);
    return (React.createElement(Transition, Object.assign({}, props, { ref: outsideRef, style: style, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "FadeInTransition" }), children));
});
export default FadeInTransition;
