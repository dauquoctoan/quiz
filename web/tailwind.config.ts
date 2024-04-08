import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './helpers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '25': 'repeat(25, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'theme-primary': 'var(--color-theme-shadow-primary)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(.4,0,.2,1)',
      },
      screens: {
        md: { max: "768px", min: '0' },
        lg: { max: "1024px", min: '768px' },
        xl: { min: '1024px' }
      },
      width: {
        'width-menu': 'var(--width-menu)',
        'width-menu-collap': 'var(--width-menu-collap)'
      },
      keyframes: {
        dropDown: {
          "0%": {
            transform: 'scaleY(.95)',
          },
          '100%': {
            transform: 'scaleY(1)'
          },
        },
        popUp: {
          "0%": {
            transform: 'scale(.95)',
            opacity: '.8',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        closePopUp: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',

          },
          "100%": {
            transform: 'scale(.8)',
            opacity: '0',
          },
        },
        openNoti: {
          "0%": {
            opacity: '0',
            transform: 'translateY(-50%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        closeNoti: {
          "0%": {
            opacity: '1',
            maxHeight: '100px',
            marginTop: '8px',
            paddingTop: '4px',
            paddingBottom: '4px',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            maxHeight: '0px',
            marginTop: '0px',
            paddingTop: '0px',
            paddingBottom: '0px',
            transform: 'translateY(-50%)',
          },
        },
        rangeLoading: {
          "0%": {
            width: '0%',
            display: 'block',
          },
          '100%': {
            width: '100%',
            display: 'none',
          },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(1.15)',
            opacity: '0'
          }
        },
        overlay: {
          '0%': {
            'background-color': 'transparent'
          },
          '100%': {
            'background-color': 'var(--color-modal-overlay)'
          }
        },
        closeOverlay: {
          '0%': {
            'background-color': 'transparent'
          },
          '100%': {
            'background-color': 'var(--color-modal-overlay)'
          }
        },
        modalContentPopup: {
          from: {
            transform: 'scale(.9)',
            opacity: '.5',
          },
          to: {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        fadeMenu: {
          from: {
            'max-height': '0px',
          },
          to: {
            'max-height': '500px'
          }
        }
      },
      animation: {
        openNoti: 'openNoti .4s ease-out',
        closeNoti: 'closeNoti .4s ease-out',
        popUp: 'popUp .3s ease-out',
        closePopUp: 'closePopUp .3s ease-out',
        dropDown: 'dropDown .3s ease-out',
        overlay: 'overlay .3s ease-out',
        ping: 'ping 1.2s',
        loadingRange: 'rangeLoading .2s ease-out',
        modalContentPopup: 'modalContentPopup .2s',
        fadeMenu: 'fadeMenu .1s',
      },
      colors: {
        "theme-primary": 'var(--color-theme-primary)',
        "color-text-sidebar": '#A3A3A3',
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
        'table-shadow-left-primary': 'var(--color-light-table-shadow-left-primary)',
        'table-shadow-right-primary': 'var(--color-light-table-shadow-right-primary)',
        'shadow-left':'rgba(0, 0, 0, 0.12) 0px 4px 8px 0px, rgba(16, 24, 40, 0.12) 0px 6px 12px 0px, rgba(16, 24, 40, 0.12) 0px 1px 16px 0px',
        'shadow-right':'rgba(0, 0, 0, 0.12) 0px 4px 8px 0px, rgba(16, 24, 40, 0.12) 0px 6px 12px 0px, rgba(16, 24, 40, 0.12) 0px 1px 16px 0px',
        'shadow-top':'rgba(0, 0, 0, 0.12) 0px 4px 8px 0px, rgba(16, 24, 40, 0.12) 0px 6px 12px 0px, rgba(16, 24, 40, 0.12) 0px 1px 16px 0px',
        'shadow-bottom':'rgba(0, 0, 0, 0.12) 0px 4px 8px 0px, rgba(16, 24, 40, 0.12) 0px 6px 12px 0px, rgba(16, 24, 40, 0.12) 0px 1px 16px 0px'
      }
    },
  },
  plugins: [],
}
export default config