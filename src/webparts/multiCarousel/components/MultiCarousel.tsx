import * as React from 'react';
import styles from './MultiCarousel.module.scss';
import { IMultiCarouselProps } from './IMultiCarouselProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ServiceProvider } from './ServiceProvider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export interface ICatCarouselState {
  catImages: ICatImages[];
  carouselElements: JSX.Element[];
}
export interface ICatImages {
  url: string;
  Id: string;
}
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default class MultiCarousel extends React.Component<IMultiCarouselProps, ICatCarouselState> {
  private serviceProvider;
  public constructor(props: IMultiCarouselProps, state: ICatCarouselState) {
    super(props);
    this.serviceProvider = new ServiceProvider(this.props.context, this.props.apiURL);
    this.state = {
      catImages: [] as ICatImages[],
      carouselElements: []
    };

  }
  public render(): React.ReactElement<IMultiCarouselProps> {
    return (
      <div className={styles.multiCarousel}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div style={{ float: 'left', width: '80%', textAlign: 'center' }} className={styles.description}>{escape(this.props.TitleofCarousel)}</div>
              <div style={{ float: 'right', width: '20%' }}><a href={this.props.URL} className={styles.description} target="_blank">
                <span className={styles.label}>{this.props.seeMore}</span>
              </a></div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={false}
                infinite={true}
                autoPlay={false}
                renderDotsOutside={true}
                // autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carouselContainer"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {this.state.carouselElements}

              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
  public componentDidMount(): void {
    this.getData();
  }

  private getData() {
    this.serviceProvider.
      getTotals()
      .then(
        (result: any): void => {
          var catImages: ICatImages[] = [];
          if (result.length > 0) {
            for (var i = 0; i < result.length; i++) {
              catImages.push({
                url: result[i].url,
                Id: result[i].id
              });
            }
          }
          console.log(catImages);
          let items = catImages;
          let cardsElements: JSX.Element[] = [];
          if (items.length > 0) {
            items.map((imgs: ICatImages) => {
              cardsElements.push(<div>
                <img src={imgs.url} width="150" height="150" />
              </div>);
            });
            this.setState({ carouselElements: cardsElements });
          }
        }
      )
      .catch(error => {
        console.log(error);
      });
  }
}
