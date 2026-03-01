"use client";

import * as React from "react";

type Props = {
	label: string;
	name: string;
	required?: boolean;
	placeholder?: string;
	defaultValue?: string;
	minRows?: number;
};

export default function SimpleRichTextEditor({
	label,
	name,
	required,
	placeholder,
	defaultValue,
	minRows = 6,
}: Props) {
	const editorRef = React.useRef<HTMLDivElement | null>(null);
	const inputRef = React.useRef<HTMLInputElement | null>(null);

	React.useEffect(() => {
		if (editorRef.current) {
			// Initialize with plain text (no special characters)
			editorRef.current.innerText = defaultValue ?? "";
			syncHiddenInput();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const syncHiddenInput = () => {
		if (!editorRef.current || !inputRef.current) return;
		// Save as plain text only
		inputRef.current.value = editorRef.current.innerText;
	};

	const onInput = () => {
		syncHiddenInput();
	};

	const cmd = (command: string) => {
		// Use document.execCommand for simple inline formatting (visual only)
		// Saved value remains plain text via hidden input
		try {
			document.execCommand(command);
		} catch {}
		editorRef.current?.focus();
	};

	const listCmd = (ordered: boolean) => {
		try {
			document.execCommand(
				ordered ? "insertOrderedList" : "insertUnorderedList"
			);
		} catch {}
		editorRef.current?.focus();
	};

	return (
		<div className="mb-2">
			<label className="form-label d-flex align-items-center justify-content-between">
				<span>
					{label}
					{required ? " *" : ""}
				</span>
				<div
					className="btn-group"
					role="group"
					aria-label={`${label} formatting`}
				>
					<button
						type="button"
						className="btn btn-sm btn-outline-secondary"
						onClick={() => cmd("bold")}
					>
						B
					</button>
					<button
						type="button"
						className="btn btn-sm btn-outline-secondary"
						onClick={() => cmd("italic")}
					>
						I
					</button>
					<button
						type="button"
						className="btn btn-sm btn-outline-secondary"
						onClick={() => listCmd(false)}
					>
						• List
					</button>
					<button
						type="button"
						className="btn btn-sm btn-outline-secondary"
						onClick={() => listCmd(true)}
					>
						1. List
					</button>
				</div>
			</label>
			<div
				ref={editorRef}
				className="form-control"
				contentEditable
				onInput={onInput}
				data-placeholder={placeholder || "Start typing..."}
				style={{
					minHeight: `${minRows * 22}px`,
					whiteSpace: "pre-wrap",
					overflowWrap: "anywhere",
				}}
				aria-multiline
			/>
			<input
				ref={inputRef}
				type="hidden"
				name={name}
				required={required}
			/>
			<style jsx>{`
				[contenteditable][data-placeholder]:empty:before {
					content: attr(data-placeholder);
					color: #9ca3af;
				}
			`}</style>
		</div>
	);
}
