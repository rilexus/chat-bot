import React, {FC, HTMLProps} from 'react';

const BaseButton:FC<HTMLProps<HTMLButtonElement>> = (props) => {
	// @ts-ignore
	return <button {...props}/>
};

export {BaseButton};
