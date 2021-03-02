var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'MultiCarouselWebPartStrings';
import MultiCarousel from './components/MultiCarousel';
var MultiCarouselWebPart = /** @class */ (function (_super) {
    __extends(MultiCarouselWebPart, _super);
    function MultiCarouselWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiCarouselWebPart.prototype.render = function () {
        var element = React.createElement(MultiCarousel, {
            TitleofCarousel: this.properties.TitleofCarousel,
            seeMore: this.properties.seeMore,
            URL: this.properties.URL,
            apiURL: this.properties.apiURL,
            context: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    MultiCarouselWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    MultiCarouselWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('TitleofCarousel', {
                                    label: "Title of Carousel",
                                    value: "Cats Carousel"
                                }),
                                PropertyPaneTextField('seeMore', {
                                    label: "See more (text)",
                                    value: "See more"
                                }),
                                PropertyPaneTextField('URL', {
                                    label: "See more (url)",
                                    value: "https://thecatapi.com/"
                                }),
                                PropertyPaneTextField('apiURL', {
                                    label: "Cats API URL",
                                    value: "https://docs.thecatapi.com/"
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return MultiCarouselWebPart;
}(BaseClientSideWebPart));
export default MultiCarouselWebPart;
//# sourceMappingURL=MultiCarouselWebPart.js.map