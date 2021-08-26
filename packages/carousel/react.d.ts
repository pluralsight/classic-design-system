import { ValueOf } from '@pluralsight/ps-design-system-util';
import React from 'react';
import { Control } from './dist/esm/react/control';
import * as vars from './dist/esm/vars/index';
interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    controlPrev?: React.ReactNode;
    controlNext?: React.ReactNode;
    size?: ValueOf<typeof vars.sizes>;
}
interface CarouselStatics {
    Control: typeof Control;
    Item: typeof Item;
    sizes: typeof vars.sizes;
}
declare type CarouselComponent = React.FC<CarouselProps> & CarouselStatics;
declare const Carousel: CarouselComponent;
export default Carousel;
export interface ItemProps extends React.HTMLAttributes<HTMLLIElement> {
    _onFocus?: (evt: React.FocusEvent) => void;
}
export declare const Item: React.FC<ItemProps>;
