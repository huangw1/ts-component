import {Position} from "../../common/position";
import {Data} from "popper.js";

export const positionToPlacement = (position: Position | 'auto') => {
    switch (position) {
        case Position.TOP_LEFT:
            return 'top-start';
        case Position.TOP:
            return 'top';
        case Position.TOP_RIGHT:
            return 'top-end';
        case Position.RIGHT_TOP:
            return 'right-start';
        case Position.RIGHT:
            return 'right';
        case Position.RIGHT_BOTTOM:
            return 'right-end';
        case Position.BOTTOM_RIGHT:
            return 'bottom-end';
        case Position.BOTTOM:
            return 'bottom';
        case Position.BOTTOM_LEFT:
            return 'bottom-start';
        case Position.LEFT_BOTTOM:
            return 'left-end';
        case Position.LEFT:
            return 'left';
        case Position.LEFT_TOP:
            return 'left-start';
        case 'auto':
            return 'auto';
        default:
            return new Error(`Unexpected position: ${position}`);
    }
}

export const getPosition = (placement, index) => {
    return placement.split('-')[index]
}

export const getOppositePosition = (position) => {
    switch (position) {
        case 'top':
            return 'bottom'
        case 'bottom':
            return 'top'
        case 'left':
            return 'right'
        default:
            return 'left'
    }
}

/**
 *      |
 *  left|right
 * @param position
 */
export const isVerticalPosition = (position) => {
    return ['left', 'right'].indexOf(position) != -1
}

export const getAlignment = (alignment) => {
    switch (alignment) {
        case 'start':
            return 'left'
        case 'end':
            return 'right'
        default:
            return 'center'
    }
}

export const getTransformOrigin = (data: Data) => {
    const position = getPosition(data.placement, 0)
    const alignment = getPosition(data.placement, 1)
    return isVerticalPosition(position) ?
        `${getOppositePosition(position)} ${getAlignment(alignment)}` :
        `${getAlignment(alignment)} ${getOppositePosition(position)}`
}

