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
import React, { forwardRef, useEffect, useMemo, useRef, useState, } from "react";
import { Transition as RTGTransition } from "react-transition-group";
const Animate = forwardRef(({ children, style, defaultStyle, transitionStyle, transitionStatus, className, }, outsideRef) => {
    const s = useMemo(() => (Object.assign(Object.assign(Object.assign({}, style), defaultStyle), transitionStyle[transitionStatus])), [transitionStatus, defaultStyle, transitionStyle]);
    // return (
    //   <div ref={outsideRef} className={className} style={s}>
    //     {children}
    //   </div>
    // );
    return React.Children.map(children, (child) => React.cloneElement(child, { style: s, ref: outsideRef }));
});
const Transition = forwardRef((_a, outsideRef) => {
    var { children, defaultStyle, transitionStyle } = _a, props = __rest(_a, ["children", "defaultStyle", "transitionStyle"]);
    const [_in, _setIn] = useState(false);
    const timeoutRef = useRef();
    useEffect(() => {
        // NOTE: This is a workaround entering state not being animated when this
        // Component should animate on mount see:<https://github.com/reactjs/react-transition-group/issues/745>
        requestAnimationFrame(() => {
            timeoutRef.current = setTimeout(() => {
                //@ts-ignore
                _setIn(props.in);
            }, 5);
        });
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [props.in, timeoutRef]);
    return (React.createElement(RTGTransition, Object.assign({}, props, { in: _in }), (transitionStatus) => {
        return React.Children.map(children, (child) => React.cloneElement(child, {
            style: Object.assign(Object.assign({}, defaultStyle), transitionStyle[transitionStatus]),
        }));
    }));
});
export { Transition };
