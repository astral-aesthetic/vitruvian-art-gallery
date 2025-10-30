import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Build-correct public asset URL that respects Vite's base in production
export function asset(p: string): string {
  const base = (import.meta as any).env?.BASE_URL || '/'
  const baseClean = String(base).replace(/\/$/, '')
  const pathClean = String(p).replace(/^\//, '')
  return `${baseClean}/${pathClean}`
}
