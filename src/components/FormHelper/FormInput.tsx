import React from "react";
import { FieldError } from "react-hook-form";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: FieldError;
	wrapperClass?: string;
}

const FormInput: React.FC<FormInputProps> = ({
	label,
	id,
	error,
	wrapperClass = "form-group",
	...props
}) => {
	return (
		<div className={wrapperClass}>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...props} />
			{error && <small className="text-danger">{error.message}</small>}
		</div>
	);
};

export default FormInput;
