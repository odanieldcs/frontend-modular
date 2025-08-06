import { cn } from "@/helpers/misc";
import { forwardRef, type JSX, memo } from "react";
import { Loader } from "../loader";
import {
	DEFAULT_BUTTON_FORMAT,
	DEFAULT_BUTTON_HTML_TYPE,
	DEFAULT_BUTTON_KIND,
	DEFAULT_BUTTON_SIZE,
	DEFAULT_BUTTON_VARIANT,
	DEFAULT_BUTTON_WIDTH,
} from "./button.constants";
import { buttonClassName } from "./button.styles";
import type { ButtonProps } from "./button.types";
import { useButtonClick } from "./button.utils";

/**
 * A versatile and customizable Button component for user interactions.
 * It supports different semantic kinds, visual variants, sizes, and adornments (icons).
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the button.
 * @param {string} [props.className] - Optional custom CSS classes.
 * @param {'submit' | 'button' | 'reset'} [props.type='button'] - The HTML type of the button.
 * @param {boolean} [props.loading=false] - If `true`, displays a loading spinner and disables the button.
 * @param {'primary' | 'default' | 'danger' | 'ghost'} [props.kind='default'] - The semantic kind (color/intent) of the button.
 * @param {'auto' | 'half' | 'full' | 'fitContent'} [props.width='auto'] - The width behavior of the button.
 * @param {'small' | 'regular' | 'large'} [props.size='regular'] - The visual size of the button.
 * @param {'solid' | 'outlined'} [props.variant='solid'] - The visual variant/style of the button.
 * @param {'rounded' | 'rounded-full'} [props.format='rounded'] - The border-radius format of the button.
 * @param {Function} [props.onClick] - Click event handler.
 * @param {boolean} [props.disabled] - If `true`, the button is disabled.
 * @returns {JSX.Element} A customizable button element.
 *
 * @example
 * ```tsx
 * <Button kind='primary' onClick={() => alert('Clicked!')}>Submit</Button>
 * <Button size='small' startAdornment={{ name: 'plus', colorFill: 'fill-primary' }}>Add</Button>
 * ```
 */
const Button = memo(
	forwardRef<HTMLButtonElement, ButtonProps>(
		(
			{
				children,
				className,
				type = DEFAULT_BUTTON_HTML_TYPE,
				loading = false,
				kind = DEFAULT_BUTTON_KIND,
				width = DEFAULT_BUTTON_WIDTH,
				size = DEFAULT_BUTTON_SIZE,
				variant = DEFAULT_BUTTON_VARIANT,
				format = DEFAULT_BUTTON_FORMAT,
				onClick,
				disabled,
				...props
			},
			ref,
		): JSX.Element => {
			const buttonClasses = buttonClassName({
				kind,
				width,
				size,
				variant,
				format,
			});

			const handleClick = useButtonClick(onClick, disabled, loading);

			return (
				<button
					ref={ref}
					className={cn(buttonClasses, className)}
					type={type}
					onClick={handleClick}
					disabled={disabled || loading}
					{...props}
				>
					{loading ? (
						<Loader isLoading={true} variant="spinner" size="small" />
					) : (
						children
					)}
				</button>
			);
		},
	),
);

Button.displayName = "Button";

export { Button };
