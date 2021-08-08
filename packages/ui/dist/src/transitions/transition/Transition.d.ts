import React, { CSSProperties, ReactNode } from "react";
interface TransitionProps {
    defaultStyle: CSSProperties;
    transitionStyle: {
        entered?: CSSProperties;
        entering?: CSSProperties;
        exiting?: CSSProperties;
        exited?: CSSProperties;
        unmounted?: CSSProperties;
    };
    className?: string;
    children: ReactNode;
    style?: CSSProperties;
    in?: boolean;
    appear?: boolean;
    timeout: number | {
        appear?: number;
        enter?: number;
        exit?: number;
    };
    [key: string]: any;
}
declare const Transition: React.ForwardRefExoticComponent<Pick<TransitionProps, string | number> & React.RefAttributes<HTMLDivElement>>;
export { Transition };
//# sourceMappingURL=Transition.d.ts.map