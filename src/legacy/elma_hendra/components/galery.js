import React, {forwardRef, useState, useEffect} from 'react';
import backgroundImage from '../assets/image/bgGaleri.png';
import ornament1 from '../assets/image/galeri1.png';
import ornament2 from '../assets/image/galeri2.png';
import resin1 from '../assets/image/resin1.png';
import resin2 from '../assets/image/resin2.png';
import resin3 from '../assets/image/resin3.png';
import {Box, useTheme} from '@mui/material';
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from '@mui/icons-material';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarouselWrapper = styled(Box)`
  padding: 5px;
  .slick-slide img {
    max-width: 100%;
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
  '/media/elma_hendra/1.jpg',
  '/media/elma_hendra/2.jpg',
  '/media/elma_hendra/3.jpg',
  '/media/elma_hendra/4.jpg',
  '/media/elma_hendra/5.jpg',
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
      backgroundColor: theme.palette.light.main,
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'top',
      backgroundSize: '100% 100%',
      overflow: 'hidden',
      paddingBottom: `${15 + windowWidth * 0.01}vh`,
      zIndex: -2,
    },
    mask: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '9rem',
      padding: '5%',
    },
    txt: {
      fontSize: `${250 + windowWidth * 0.1}%`,
      marginBottom: '5vh',
      textAlign: 'center',
      color: theme.palette.light.main,
    },
    ornament1: {
      justifySelf: 'start',
      alignSelf: 'start',
      marginTop: '10vh',
      position: 'absolute',
      zIndex: 0,
      left: 0,
      width: `${60 + windowWidth * 0.05}%`,
      height: `${30 + windowWidth * 0.03}vh`,
      backgroundImage: `url(${ornament1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
    ornament2: {
      left: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-3vh',
      width: `${60 + windowWidth * 0.025}%`,
      height: `${40 + windowWidth * 0.01}vh`,
      backgroundImage: `url(${ornament2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
    },
    resin1: {
      right: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-5vh',
      width: `${70 + windowWidth * 0.025}%`,
      height: `${50 + windowWidth * 0.01}vh`,
      backgroundImage: `url(${resin1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    resin2: {
      left: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '80vh',
      width: `${70 + windowWidth * 0.025}%`,
      height: `${50 + windowWidth * 0.01}vh`,
      backgroundImage: `url(${resin2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
    },
    resin3: {
      right: 0,
      display: 'flex',
      zIndex: 0,
      position: 'absolute',
      marginTop: '-12vh',
      width: `${70 + windowWidth * 0.025}%`,
      height: `${50 + windowWidth * 0.01}vh`,
      backgroundImage: `url(${resin3})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
  };

  const PrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
      <ArrowBackIosRounded
        className={className}
        style={{
          ...style,
          display: 'block',
          marginLeft: '10%',
          color: theme.palette.light.main,
          zIndex: 3,
        }}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
      <ArrowForwardIosRounded
        className={className}
        style={{
          ...style,
          display: 'block',
          marginRight: '10%',
          color: theme.palette.light.main,
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
        style={styles.resin1}
        data-aos="fade"
        data-aos-duration="1500"
      />
      <div
        style={styles.ornament1}
        data-aos="fade-right"
        data-aos-duration="1500"
      />
      <div style={styles.resin2} />
      <Box sx={{marginTop: '40vh'}}>
        <h1 className="font-estetik" style={styles.txt}>
          Photo Gallery
        </h1>
        <ImageCarouselWrapper style={{marginBottom: '20vh'}}>
          <Slider {...settings1} ref={setMainSlider}>
            {imageToShow.map((imageUrl, index) => (
              <div key={index}>
                <img
                  src={imageUrl}
                  style={{
                    height: `${windowWidth > windowHeight ? '60vh' : '20rem'}`,
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
        <div
          style={styles.resin3}
          data-aos="fade"
          data-aos-duration="1500"
        />
        <div
          style={styles.ornament2}
          data-aos="fade-right"
          data-aos-duration="1500"
        />
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
