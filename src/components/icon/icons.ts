// https://leungwensen.github.io/svg-icon/#ant

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

export const icons = {
    check: icon_check,
    close: icon_close,
    warn: icon_warn
}
