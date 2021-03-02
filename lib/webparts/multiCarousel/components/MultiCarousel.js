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
import styles from './MultiCarousel.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { ServiceProvider } from './ServiceProvider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
var responsive = {
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
var MultiCarousel = /** @class */ (function (_super) {
    __extends(MultiCarousel, _super);
    function MultiCarousel(props, state) {
        var _this = _super.call(this, props) || this;
        _this.serviceProvider = new ServiceProvider(_this.props.context, _this.props.apiURL);
        _this.state = {
            catImages: [],
            carouselElements: []
        };
        return _this;
    }
    MultiCarousel.prototype.render = function () {
        return (React.createElement("div", { className: styles.multiCarousel },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("div", { style: { float: 'left', width: '80%', textAlign: 'center' }, className: styles.description }, escape(this.props.TitleofCarousel)),
                        React.createElement("div", { style: { float: 'right', width: '20%' } },
                            React.createElement("a", { href: this.props.URL, className: styles.description, target: "_blank" },
                                React.createElement("span", { className: styles.label }, this.props.seeMore))))),
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement(Carousel, { swipeable: false, draggable: false, showDots: true, responsive: responsive, ssr: false, infinite: true, autoPlay: false, renderDotsOutside: true, 
                            // autoPlaySpeed={1000}
                            keyBoardControl: true, customTransition: "all .5", transitionDuration: 500, containerClass: "carouselContainer", removeArrowOnDeviceType: ["tablet", "mobile"], dotListClass: "custom-dot-list-style", itemClass: "carousel-item-padding-40-px" }, this.state.carouselElements))))));
    };
    MultiCarousel.prototype.componentDidMount = function () {
        this.getData();
    };
    MultiCarousel.prototype.getData = function () {
        var _this = this;
        this.serviceProvider.
            getTotals()
            .then(function (result) {
            var catImages = [];
            if (result.length > 0) {
                for (var i = 0; i < result.length; i++) {
                    catImages.push({
                        url: result[i].url,
                        Id: result[i].id
                    });
                }
            }
            console.log(catImages);
            var items = catImages;
            var cardsElements = [];
            if (items.length > 0) {
                items.map(function (imgs) {
                    cardsElements.push(React.createElement("div", null,
                        React.createElement("img", { src: imgs.url, width: "150", height: "150" })));
                });
                _this.setState({ carouselElements: cardsElements });
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return MultiCarousel;
}(React.Component));
export default MultiCarousel;
//# sourceMappingURL=MultiCarousel.js.map