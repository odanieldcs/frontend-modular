import { tv } from 'tailwind-variants'

export const loaderStyles = tv({
  slots: {
    container: 'inline-flex items-center justify-start',
    element: '',
  },
  variants: {
    variant: {
      dots: {
        container: 'inline-flex rounded-full animate-pulse',
        element: 'bg-white rounded-full animate-pulse',
      },
      spinner: {
        container: 'inline-flex items-center justify-center',
        element: 'rounded-full inline-block box-border',
      },
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
  compoundVariants: [
    {
      variant: 'dots',
      size: 'small',
      class: {
        container: 'gap-0.5',
        element: 'h-1 w-1',
      },
    },
    {
      variant: 'dots',
      size: 'medium',
      class: {
        container: 'gap-1',
        element: 'h-1.5 w-1.5',
      },
    },
    {
      variant: 'dots',
      size: 'large',
      class: {
        container: 'gap-1.5',
        element: 'h-2.5 w-2.5',
      },
    },

    {
      variant: 'spinner',
      size: 'small',
      class: {
        element: '!h-2-5 !w-2-5',
      },
    },
    {
      variant: 'spinner',
      size: 'medium',
      class: {
        element: '',
      },
    },
    {
      variant: 'spinner',
      size: 'large',
      class: {
        element: '!h-6 !w-6',
      },
    },
  ],
  defaultVariants: {
    variant: 'dots',
    size: 'medium',
  },
})
