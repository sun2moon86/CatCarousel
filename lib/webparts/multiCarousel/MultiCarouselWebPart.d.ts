import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { WebPartContext, BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IMultiCarouselWebPartProps {
    TitleofCarousel: string;
    seeMore: string;
    URL: string;
    apiURL: string;
    context: WebPartContext;
}
export default class MultiCarouselWebPart extends BaseClientSideWebPart<IMultiCarouselWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=MultiCarouselWebPart.d.ts.map