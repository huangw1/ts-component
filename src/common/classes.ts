
export const getIconClass: (iconName: string) => string  = (iconName: string) => {
    if(iconName == null) {
        return ''
    }
    return iconName.indexOf('ts-icon-') == 0 ? iconName : `ts-icon-${iconName}`
}
