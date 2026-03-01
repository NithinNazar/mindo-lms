import type {
	FieldValues,
	UseFormProps,
	UseFormReturn,
} from "../../node_modules/react-hook-form/dist/types/form";

declare module "react-hook-form" {
	// Re-export the official type surface so downstream imports keep working.
	export * from "../../node_modules/react-hook-form/dist/types";

	// Explicitly declare the client-only hook so TypeScript doesn't fall back to
	// the react-server declaration, which omits it and breaks compilation.
	export function useForm<
		TFieldValues extends FieldValues = FieldValues,
		TContext = any,
		TTransformedValues = TFieldValues,
	>(
		props?: UseFormProps<TFieldValues, TContext, TTransformedValues>,
	): UseFormReturn<TFieldValues, TContext, TTransformedValues>;
}
