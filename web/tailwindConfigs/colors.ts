import { RecursiveKeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const colors: ResolvableTo<RecursiveKeyValuePair<string, string>> | undefined= {
    "theme-primary": 'var(--color-theme-primary)',
    "theme-secondary": "var(--color-theme-secondary)",
    "theme-text-primary": 'var(--color-theme-text-primary)',
    "theme-border-primary": 'var(--color-theme-border-primary)',
    "theme-border-secondary": 'var(--color-theme-border-secondary)',
    "theme-border-highligh": 'var(--color-theme-border-highligh)',
    "color-special-primary": "var(--color-special-primary)",
    "color-special-secondary": "var(--color-special-secondary)",
    'color-warning': "var(--color-warning)",
    'color-error': "var(--color-error)",
    'color-info': "var(--color-info)",
    'color-success': "var(--color-success)",
    'color-modal-overlay': 'var(--color-modal-overlay)',
    'table-shadow-left-primary':'var(--color-light-table-shadow-left-primary)',
    'table-shadow-right-primary':'var(--color-light-table-shadow-right-primary)'
}