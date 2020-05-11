import React from 'react';
import { ButtonBack, ButtonFirst, ButtonLast, ButtonNext,
  CarouselProvider, DotGroup, ImageWithZoom, Slide, Slider, Image, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      default: '',
      set1: '',
      set2: '',
      id: ''
    }
  }

  render() {
    let colorSize = {
      width: "3em",
      height: "3em",
      display: "inline-flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }

    let borderStyle = {
      borderStyle: "none",
      backgroundColor: "transparent"
    }

    return (
      <div>
         {this.props.whichPic !== 1 ? <div></div> :

      <CarouselProvider
      visibleSlides={1}
      totalSlides={3}
      step={1}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
      hasMasterSpinner
      lockOnWindowScroll
      hasMasterSpinner = {true}
    >

      <Slider>
        <Slide index={0}>
          <ImageWithZoom src= {this.props.photo1.img1} />
        </Slide>
        <Slide index={1}>
          <ImageWithZoom src= {this.props.photo1.img2} />
        </Slide>
        <Slide index={2}>
          <ImageWithZoom src= {this.props.photo1.img3} />
        </Slide>
      </Slider>

      <ButtonFirst style = {borderStyle}><Image style = {colorSize}
        src = {this.props.photo1.img1}
        /></ButtonFirst>

      <ButtonNext style = {borderStyle}> <Image style = {colorSize}
        src = {this.props.photo1.img2}
        /></ButtonNext>

      <ButtonLast style = {borderStyle}>   <Image style = {colorSize}
        src = {this.props.photo1.img3}
        /></ButtonLast>

    </CarouselProvider>
  }

     {this.props.whichPic !== 2 ? <div></div> :

      <CarouselProvider
      visibleSlides={1}
      totalSlides={3}
      step={1}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
      hasMasterSpinner
      lockOnWindowScroll
      hasMasterSpinner = {true}
    >

      <Slider>
        <Slide index={0}>
          <ImageWithZoom src= {this.props.photo2.img1} />
        </Slide>
        <Slide index={1}>
          <ImageWithZoom src= {this.props.photo2.img2} />
        </Slide>
        <Slide index={2}>
          <ImageWithZoom src= {this.props.photo2.img3} />
        </Slide>
      </Slider>

      <ButtonFirst style = {borderStyle}><Image style = {colorSize}
        src = {this.props.photo2.img1}
        /></ButtonFirst>

      <ButtonNext style = {borderStyle}> <Image style = {colorSize}
        src = {this.props.photo2.img2}
        /></ButtonNext>

      <ButtonLast style = {borderStyle}>   <Image style = {colorSize}
        src = {this.props.photo2.img3}
        /></ButtonLast>


    </CarouselProvider>
  }


      {this.props.whichPic !== 3 ? <div></div> :

      <CarouselProvider
      visibleSlides={1}
      totalSlides={3}
      step={1}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
      hasMasterSpinner
      lockOnWindowScroll
      hasMasterSpinner = {true}
      >

      <Slider>
        <Slide index={0}>
          <ImageWithZoom src= {this.props.photo3.img1} />
        </Slide>
        <Slide index={1}>
          <ImageWithZoom src= {this.props.photo3.img2} />
        </Slide>
        <Slide index={2}>
          <ImageWithZoom src= {this.props.photo3.img3} />
        </Slide>
      </Slider>


      <ButtonFirst style = {borderStyle}><Image style = {colorSize}
        src = {this.props.photo3.img1}
        /></ButtonFirst>

      <ButtonNext style = {borderStyle}> <Image style = {colorSize}
        src = {this.props.photo3.img2}
        /></ButtonNext>

      <ButtonLast style = {borderStyle}>   <Image style = {colorSize}
        src = {this.props.photo3.img3}
        /></ButtonLast>


      </CarouselProvider>
      }


     </div>

    )
  }
}

export default Carousel;


