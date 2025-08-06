import type { HTMLAttributes } from 'react'

export type LoaderSize = 'small' | 'medium' | 'large'

export type LoaderVariant = 'dots' | 'spinner'

/**
 * Props for the Loader component.
 * Extends standard HTML div attributes to allow common DOM props.
 */
export type LoaderProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Controls the visibility of the loader. If `true`, the loader is displayed.
   */
  isLoading: boolean
  /**
   * The visual style of the loader (dots or spinner).
   * @default LoaderVariant.Dots
   */
  variant?: LoaderVariant
  /**
   * The visual size of the loader (small, medium, or large).
   * @default LoaderSize.Medium
   */
  size?: LoaderSize
  /**
   * Additional CSS classes to apply to the loader's main container.
   */
  className?: string
}
