import { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const keyframes: ResolvableTo<KeyValuePair<string, KeyValuePair<string, KeyValuePair<string, string>>>> | undefined={
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
      },
      '100%': {
        transform: 'scale(1)'
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
        paddingTop:'4px',
        paddingBottom:'4px',
        transform: 'translateY(0)',
      },
      '100%': {
        opacity: '0',
        maxHeight: '0px',
        marginTop: '0px',
        paddingTop:'0px',
        paddingBottom:'0px',
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
    showNav: {
      from: {
        opacity: '0',
      },
      to: {
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
}

export const animation : ResolvableTo<KeyValuePair<string, string>> | undefined ={
    openNoti: 'openNoti .4s ease-out',
    closeNoti: 'closeNoti .4s ease-out',
    popUp: 'popUp .3s ease-out',
    dropDown: 'dropDown .3s ease-out',
    overlay: 'overlay .3s ease-out',
    ping: 'ping 1.2s',
    loadingRange: 'rangeLoading .2s ease-out',
    modalContentPopup: 'modalContentPopup .2s',
    showNav: 'showNav 1.2s ease-out',
    fadeMenu: 'fadeMenu .1s',
}
