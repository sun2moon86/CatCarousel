import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { WebPartContext, BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'MultiCarouselWebPartStrings';
import MultiCarousel from './components/MultiCarousel';
import { IMultiCarouselProps } from './components/IMultiCarouselProps';

export interface IMultiCarouselWebPartProps {
  TitleofCarousel: string;
  seeMore: string;
  URL: string;
  apiURL: string;
  context: WebPartContext;
}

export default class MultiCarouselWebPart extends BaseClientSideWebPart<IMultiCarouselWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMultiCarouselProps> = React.createElement(
      MultiCarousel,
      {
        TitleofCarousel: this.properties.TitleofCarousel,
        seeMore: this.properties.seeMore,
        URL: this.properties.URL,
        apiURL: this.properties.apiURL,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
