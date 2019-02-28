import * as cn from 'classnames'
import * as React from 'react'
import {IconModel, icons} from './icons'
import {IAppearanceProps, IProps} from "../../common/props";
import {PREFIX} from "../../common/constants";
import {SizeKind} from "../..";
import {isUndefined} from "../../common/utils";

export interface IIconProps extends IProps, IAppearanceProps {
    name?: string,
    tagName?: keyof JSX.IntrinsicElements,
    title?: string,
    width?: number | string,
    height?: number | string,
    fill?: string
}

export class Icon extends React.Component<IIconProps> {
    public static displayName = 'Ts:Icon'

    public static defaultProps = {
        fill: 'currentColor',
        tagName: 'span',
        width: 20,
        height: 20,
    }

    public render() {
        const {tagName: TagName, name, title, size, className, fill} = this.props
        const {width, height} = this.getRectangular()
        const iconClasses = cn(`${PREFIX}-icon`, `${PREFIX}-icon-${name}`, {
            [`${PREFIX}-icon-${size}`]: size
        }, className)
        const path = icons[name] as IconModel
        return (
            // @ts-ignore
            <TagName className={iconClasses} title={title ? title : undefined}>
                <svg fill={fill}
                     width={width}
                     height={height}
                     data-id={`${PREFIX}-${name}`}
                     viewBox={path.viewBox}>
                    <title>{path.title}</title>
                    <path d={path.d} />
                </svg>
            </TagName>
        )
    }

    private getRectangular() {
        let { width, height, size } = this.props
        if(!isUndefined(size)) {
            switch (size) {
                case SizeKind.SMALL:
                    width = height = 16
                    break
                case SizeKind.LARGE:
                    width = height = 24
                    break
            }
        }

        return {width, height}
    }
}


