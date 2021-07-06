import {useEffect, useRef} from "react";

const useCallbackRef = (callback: (...args: any) => any /* TODO: type this */) => {
	const callbackRef = useRef(callback);
	
	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);
	
	return callbackRef
}
export {useCallbackRef}
