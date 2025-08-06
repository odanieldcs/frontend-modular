import { useCallback } from 'react'
import type { ButtonProps } from './button.types'

const useButtonClick = (
  onClick: ButtonProps['onClick'],
  disabled: boolean | undefined,
  loading: boolean,
) => {
  return useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        e.preventDefault()
        return
      }
      onClick?.(e)
    },
    [disabled, loading, onClick],
  )
}

export { useButtonClick }
