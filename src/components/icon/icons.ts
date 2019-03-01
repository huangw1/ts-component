export type IconModel = {
    title: string,
    viewBox: string,
    d: string
}

const icon_check: IconModel = {
    title: 'check',
    viewBox: `0 0 20 20`,
    d: `M17 4c-.28 0-.53.11-.71.29L7 13.59 3.71 10.3A.965.965 0 0 0 3 10a1.003 1.003 0 0 0-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l10-10A1.003 1.003 0 0 0 17 4z`
}

const icon_close: IconModel = {
    title: 'close',
    viewBox: '0 0 20 20',
    d: `M11.41 10l4.29-4.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L10 8.59l-4.29-4.3a1.003 1.003 0 0 0-1.42 1.42L8.59 10 4.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4.29-4.3 4.29 4.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L11.41 10z`
}

const icon_warn: IconModel = {
    title: 'warn',
    viewBox: '0 0 20 20',
    d: `M19.86 17.52l.01-.01-9-16-.01.01C10.69 1.21 10.37 1 10 1s-.69.21-.86.52l-.01-.01-9 16 .01.01c-.08.14-.14.3-.14.48 0 .55.45 1 1 1h18c.55 0 1-.45 1-1 0-.18-.06-.34-.14-.48zM11 17H9v-2h2v2zm0-3H9V6h2v8z`
}

const icon_caret_down = {
    title: 'caret-down',
    viewBox: '0 0 20 20',
    d: `M16 7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63z`
}

const icon_caret_up = {
    title: 'caret-up',
    viewBox: '0 0 20 20',
    d: `M15.76 12.37l.01-.01-5-6-.01.01C10.57 6.15 10.31 6 10 6s-.57.15-.76.37l-.01-.01-5 6 .01.01c-.14.17-.24.39-.24.63 0 .55.45 1 1 1h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63z`
}

const icon_caret_left = {
    title: 'caret-left',
    viewBox: '0 0 20 20',
    d: `M13 4c-.24 0-.46.1-.63.24l-.01-.01-6 5 .01.01c-.22.19-.37.45-.37.76s.15.57.37.76l-.01.01 6 5 .01-.01c.17.14.39.24.63.24.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z`
}

const icon_caret_right = {
    title: 'caret-right',
    viewBox: '0 0 20 20',
    d: `M14 10c0-.31-.15-.57-.37-.76l.01-.01-6-5-.01.01C7.46 4.1 7.24 4 7 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1 .24 0 .46-.1.63-.24l.01.01 6-5-.01-.01c.22-.19.37-.45.37-.76z`
}

const icon_arrow_down = {
    title: 'arrow-down',
    viewBox: '0 0 20 20',
    d: `M16 6c-.28 0-.53.11-.71.29L10 11.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0 0 16 6z`
}

const icon_arrow_up = {
    title: 'arrow-up',
    viewBox: '0 0 20 20',
    d: `M16.71 12.29l-6-6C10.53 6.11 10.28 6 10 6s-.53.11-.71.29l-6 6a1.003 1.003 0 0 0 1.42 1.42L10 8.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z`
}

const icon_arrow_left = {
    title: 'arrow-left',
    viewBox: '0 0 20 20',
    d: `M8.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 0 0 1.42-1.42L8.41 10z`
}

const icon_arrow_right = {
    title: 'arrow-right',
    viewBox: '0 0 20 20',
    d: `M13.71 9.29l-6-6a1.003 1.003 0 0 0-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z`
}

export const icons = {
    check: icon_check,
    close: icon_close,
    warn: icon_warn,
    'caret-down': icon_caret_down,
    'caret-up': icon_caret_up,
    'caret-left': icon_caret_left,
    'caret-right': icon_caret_right,
    'arrow-down': icon_arrow_down,
    'arrow-up': icon_arrow_up,
    'arrow-left': icon_arrow_left,
    'arrow-right': icon_arrow_right,
}
