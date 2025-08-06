import { cn } from '@/helpers/misc'
import type { JSX } from 'react'
import {
  DEFAULT_LOADER_SIZE,
  DEFAULT_LOADER_VARIANT,
  LOADER_DOTS_ANIMATION_DURATION_MS,
  LOADER_DOTS_DELAY_1_MS,
  LOADER_DOTS_DELAY_2_MS,
} from './loader.constants'
import { loaderStyles } from './loader.styles'
import type { LoaderProps } from './loader.types'

/**
 * A versatile Loader component for displaying loading states with different visual styles and sizes.
 * It supports a "dots" animation and a "spinner" animation.
 *
 * @param {LoaderProps} props - The properties for the Loader component.
 * @param {boolean} props.isLoading - If `true`, the loader is displayed; otherwise, it's hidden.
 * @param {LoaderVariant} [props.variant=DEFAULT_LOADER_VARIANT] - The visual style of the loader.
 * @param {LoaderSize} [props.size=DEFAULT_LOADER_SIZE] - The visual size of the loader (small, medium, or large).
 * @param {string} [props.className] - Additional CSS classes to apply to the loader's main container.
 * @returns {JSX.Element | null} The loader component if `isLoading` is true, otherwise `null`.
 *
 * @example
 * ```
 * <Loader isLoading={true} />
 *
 * <Loader isLoading={true} variant={LoaderVariant.Spinner} size={LoaderSize.Small} />
 *
 * <Loader isLoading={true} size={LoaderSize.Large} />
 *
 * <Loader isLoading={false} />
 * ```
 */
export const Loader = ({
  isLoading,
  variant = DEFAULT_LOADER_VARIANT,
  size = DEFAULT_LOADER_SIZE,
  className,
  ...props
}: LoaderProps): JSX.Element | null => {
  if (!isLoading) {
    return null
  }

  const { container, element } = loaderStyles({ variant, size })

  if (variant === 'dots') {
    return (
      <div
        className={cn(container(), className)}
        data-testid="loader-dots-container"
        {...props}
      >
        <div
          className={cn(
            element(),
            `duration-${LOADER_DOTS_ANIMATION_DURATION_MS}`,
          )}
          data-testid="loader-dot-1"
        />
        <div
          className={cn(
            element(),
            `duration-${LOADER_DOTS_ANIMATION_DURATION_MS} delay-${LOADER_DOTS_DELAY_1_MS}`,
          )}
          data-testid="loader-dot-2"
        />
        <div
          className={cn(
            element(),
            `duration-${LOADER_DOTS_ANIMATION_DURATION_MS} delay-${LOADER_DOTS_DELAY_2_MS}`,
          )}
          data-testid="loader-dot-3"
        />
      </div>
    )
  }

  if (variant === 'spinner') {
    return (
      <div
        className={cn(container(), className)}
        data-testid="loader-spinner-container"
        {...props}
      >
        <div
          className={cn(element(), 'loader-spinner')}
          data-testid="loader-spinner"
        />
      </div>
    )
  }

  return null
}

Loader.displayName = 'Loader'
