import { cn } from "@/helpers/misc";
import { tv } from "tailwind-variants";

const baseButton = tv({
	base: cn(
		"cursor-pointer inline-flex items-center justify-center font-medium gap-2 select-none text-center transition-all",
		"focus:outline-none focus-visible:outline-none",
		"disabled:opacity-50 disabled:cursor-not-allowed",
	),
	variants: {
		kind: {
			primary: "",
			default: "",
			danger: "",
			ghost: "",
		},
		variant: {
			solid: "",
			outlined: "",
		},
		format: {
			rounded: "rounded-lg",
			"rounded-full": "rounded-full",
		},
		loading: {
			true: "cursor-not-allowed disabled:opacity-50",
		},
	},
	compoundVariants: [
		{
			kind: "default",
			variant: "solid",
			class: cn(
				"bg-primary text-white",
				"hover:bg-white",
				"focus:bg-white",
				"focus-visible:bg-white",
				"active:scale-95",
			),
		},
	],
});

export const buttonClassName = tv({
	extend: baseButton,
	variants: {
		size: {
			regular: "text-base py-4 px-6",
			large: "text-xl py-5 px-7",
			small: "text-sm py-2 px-3.5",
		},
		width: {
			auto: "w-auto",
			half: "w-1/2",
			full: "w-full text-center",
			fitContent: "w-fit",
		},
	},
	defaultVariants: {
		kind: "primary",
		size: "regular",
		width: "auto",
		variant: "solid",
		format: "rounded",
	},
});

export const adornmentStyles = tv({
	base: "flex items-center justify-center",
	variants: {
		size: {
			small: "w-4 h-4",
			regular: "w-5 h-5",
			large: "w-6 h-6",
		},
	},
	defaultVariants: {
		size: "regular",
	},
});
