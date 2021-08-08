import React, {
  CSSProperties,
  forwardRef,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Transition as RTGTransition } from "react-transition-group";

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
  timeout: number | { appear?: number; enter?: number; exit?: number };
  [key: string]: any;
}

const Animate = forwardRef(
  (
    {
      children,
      style,
      defaultStyle,
      transitionStyle,
      transitionStatus,
      className,
    }: any,
    outsideRef: any
  ) => {
    const s = useMemo(
      () => ({
        ...style,
        ...defaultStyle,
        //@ts-ignore
        ...transitionStyle[transitionStatus],
      }),
      [transitionStatus, defaultStyle, transitionStyle]
    );

    // return (
    //   <div ref={outsideRef} className={className} style={s}>
    //     {children}
    //   </div>
    // );
    return React.Children.map(children, (child) =>
      React.cloneElement(child, { style: s, ref: outsideRef })
    );
  }
);

const Transition = forwardRef<HTMLDivElement, TransitionProps>(
  (
    { children, defaultStyle, transitionStyle, ...props }: TransitionProps,
    outsideRef: any
  ) => {
    const [_in, _setIn] = useState(false);
    const timeoutRef = useRef<any>();

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

    return (
      <RTGTransition {...props} in={_in}>
        {(transitionStatus) => {
          return React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              style: {
                ...defaultStyle,
                ...transitionStyle[transitionStatus],
              },
            })
          );
        }}
      </RTGTransition>
    );
  }
);
export { Transition };
