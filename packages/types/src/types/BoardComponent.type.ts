import {COMPONENT_TYPES} from "../enums";

type BoardComponentType = {
	own: boolean; // TODO: find better key
	props: {
		id: string;
		value: string;
	};
	type: COMPONENT_TYPES;
};

export {BoardComponentType}
