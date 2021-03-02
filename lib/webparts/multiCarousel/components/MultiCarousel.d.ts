import * as React from 'react';
import { IMultiCarouselProps } from './IMultiCarouselProps';
import 'react-multi-carousel/lib/styles.css';
export interface ICatCarouselState {
    catImages: ICatImages[];
    carouselElements: JSX.Element[];
}
export interface ICatImages {
    url: string;
    Id: string;
}
export default class MultiCarousel extends React.Component<IMultiCarouselProps, ICatCarouselState> {
    private serviceProvider;
    constructor(props: IMultiCarouselProps, state: ICatCarouselState);
    render(): React.ReactElement<IMultiCarouselProps>;
    componentDidMount(): void;
    private getData;
}
//# sourceMappingURL=MultiCarousel.d.ts.map