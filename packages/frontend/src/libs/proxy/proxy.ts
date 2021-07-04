import { useEffect, useState } from "react";

function proxy<State extends object>(initState: State): State {
  let subscribers: any = [];

  const handler: any = {
    get: function (obj: any, prop: any) {
      return prop in obj ? obj[prop] : undefined;
    },
    set: function (obj: any, prop: any, value: any) {
      if (obj[prop] === value) {
        return;
      }

      obj[prop] = value;

      subscribers.forEach((subscriber: (state: State) => void) => {
        if (typeof subscriber === "function") {
          subscriber(obj);
        }
      });

      // Indicate success
      return true;
    },
  };

  return new Proxy(
    {
      ...initState,
      unsubscribe: (callback: (state: State) => void): void => {
        subscribers = subscribers.filter(
          (subscriber: (state: State) => void) => subscriber !== callback
        );
      },
      subscribe: (callback: (state: State) => void): void => {
        subscribers.push(callback);
      },
    },
    handler
  );
}

function useProxy<State extends object>(state: State): State {
  const [_, setToggle] = useState(true);

  useEffect(() => {
    const toggle = () => setToggle((old) => !old);
    //@ts-ignore
    state.subscribe(toggle);
    return () => {
      //@ts-ignore
      state.unsubscribe(toggle);
    };
  }, []);

  return state;
}
export { proxy, useProxy };
