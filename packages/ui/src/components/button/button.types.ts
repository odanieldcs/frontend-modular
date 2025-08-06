import type { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Props for the Button component.
 * It's a versatile and customizable button for user interactions.
 * Extends standard HTML `button` attributes for native button props.
 */
export type ButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	"type"
> & {
	/**
	 * The content to be rendered inside the button. Can be text, icons, or any ReactNode.
	 */
	children: ReactNode;
	/**
	 * Optional custom CSS classes to apply to the button's root element.
	 */
	className?: string;
	/**
	 * The HTML `type` attribute of the button.
	 * @default 'button'
	 */
	type?: "button" | "submit" | "reset";
	/**
	 * If `true`, the button will display a loading indicator and be disabled.
	 * @default false
	 */
	loading?: boolean;
	/**
	 * The semantic kind (color/intent) of the button.
	 * @default 'default'
	 */
	kind?: "primary" | "default" | "danger" | "ghost";
	/**
	 * The width behavior of the button.
	 * @default 'auto'
	 */
	width?: "auto" | "half" | "full" | "fitContent";
	/**
	 * The visual size of the button.
	 * @default 'regular'
	 */
	size?: "small" | "regular" | "large";
	/**
	 * The visual variant/style of the button (e.g., default solid, outlined).
	 * @default 'solid'
	 */
	variant?: "solid" | "outlined";
	/**
	 * The border-radius format of the button.
	 * @default 'rounded'
	 */
	format?: "rounded" | "rounded-full";
};
