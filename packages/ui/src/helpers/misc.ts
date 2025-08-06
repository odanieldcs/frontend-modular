import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function para combinar classes CSS
 * Combina clsx (para condicionais) com tailwind-merge (para resolver conflitos)
 */
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}