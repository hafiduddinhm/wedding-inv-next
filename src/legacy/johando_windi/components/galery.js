import React, {forwardRef, useState, useEffect} from 'react';
import backgroundImage from '../assets/image/bgGaleri.png';
import ornament1 from '../assets/image/ornamen.png';
import {Box, useTheme} from '@mui/material';
import {
  ArrowLeftRounded,
  ArrowRightRounded,
} from '@mui/icons-material';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarouselWrapper = styled(Box)`
  padding: 5px;
  .slick-track {
    display: flex;
  }
  .slick-slide {
    align-self: center;
  }
  .slick-slide img {
    max-width: 70%;
    justify-self: 'center'
    display: inline-block;
    margin: 0 auto;
    
  }
  .pop-up-image {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .pop-up-image img {
    max-width: 80%;
    max-height: 80%;
    margin: auto;
  }
  
  .pop-up-image button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }  
`;

const imageToShow = [
  '/media/ajay_uwin/1.webp',
  '/media/ajay_uwin/2.webp',
  '/media/ajay_uwin/3.webp',
  '/media/ajay_uwin/4.webp',
  '/media/ajay_uwin/5.webp',
  '/media/ajay_uwin/6.webp',
  '/media/ajay_uwin/7.webp',
  '/media/ajay_uwin/8.webp',
  '/media/ajay_uwin/9.webp',
  '/media/ajay_uwin/10.webp',
];

const Gallery = forwardRef((props, sectionRef) => {
  // let mainSlider = useRef()
  // let thumbnailSlider = useRef()
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const theme = useTheme();

  const styles = {
    section: {
      // backgroundImage: `url(${backgroundImage})`,
      // backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
      overflow: 'hidden',
      marginTop: '-80vh',
      // paddingBottom: `${50 + windowWidth * 0.01}vh`,
      zIndex: -2,
    },
    box: {
      backgroundColor: theme.palette.light.main,
      marginTop: '-40vh',
      padding: '35vh 0',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '100% 100%',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
    },
    mask: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '7rem',
      padding: '5%',
    },
    txt: {
      fontSize: `${250 + windowWidth * 0.1}%`,
      marginBottom: '5vh',
      textAlign: 'center',
      color: theme.palette.primary.main,
    },
    ornament1: {
      display: 'flex',
      zIndex: 0,
      // position: "absolute",
      margin: '10vh 0',
      width: `100%`,
      height: `${windowWidth * 0.06}vh`,
      backgroundImage: `url(${ornament1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
  };

  const PrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
      <ArrowLeftRounded
        className={className}
        style={{
          ...style,
          display: 'block',
          marginLeft: '10%',
          color: theme.palette.primary.main,
          zIndex: 3,
          fontSize: '350%',
        }}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
      <ArrowRightRounded
        className={className}
        style={{
          ...style,
          display: 'block',
          marginRight: '10%',
          color: theme.palette.primary.main,
          fontSize: '350%',
        }}
        onClick={onClick}
      />
    );
  };

  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    // asNavFor: thumbnailSlider.current,
    beforeChange: (current, next) => setSelectedImageIndex(next),
  };

  const settings2 = {
    dots: true,
    infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // asNavFor: mainSlider.current,
    // focusOnSelect: true,
    beforeChange: (current, next) => mainSlider.slickGoTo(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (mainSlider && thumbnailSlider) {
      mainSlider.slickGoTo(selectedImageIndex);
      thumbnailSlider.slickGoTo(selectedImageIndex);
    }
  }, [selectedImageIndex, mainSlider, thumbnailSlider]);

  return (
    <section ref={sectionRef} style={styles.section}>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        style={styles.ornament1}
      />
      <Box style={styles.box}>
        <h1 className="font-estetik" style={styles.txt}>
          Photo Gallery
        </h1>
        <Box>
          <ImageCarouselWrapper style={{marginBottom: '20vh'}}>
            <Slider {...settings1} ref={setMainSlider}>
              {imageToShow.map((imageUrl, index) => (
                <div key={index}>
                  <img
                    src={imageUrl}
                    style={{
                      maxHeight: `${
                        windowWidth > windowHeight ? '60vh' : '20rem'
                      }`,
                    }}
                    alt={`Image ${index}`}
                    onClick={() => setSelectedImage(imageUrl)}
                  />
                </div>
              ))}
            </Slider>
            <Slider
              {...settings2}
              ref={setThumbnailSlider}
              style={{position: 'relative', zIndex: 1}}
            >
              {imageToShow.map((imageUrl, index) => (
                <div key={index}>
                  <div style={styles.mask}>
                    <img
                      src={imageUrl}
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                      }}
                      alt={`Image ${index}`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            {selectedImage && (
              <PopUpImage
                imageUrl={selectedImage}
                onClose={() => setSelectedImage(null)}
              />
            )}
          </ImageCarouselWrapper>
        </Box>
      </Box>
    </section>
  );
});

const PopUpImage = ({imageUrl, onClose}) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('pop-up-image')) {
        onClose();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="pop-up-image">
      <img src={imageUrl} alt="Pop-up" />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Gallery;
