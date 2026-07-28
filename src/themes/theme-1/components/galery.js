import React, {forwardRef, useState, useEffect} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Typography, useTheme} from '@mui/material';
import {
  ArrowLeftRounded,
  ArrowRightRounded,
} from '@mui/icons-material';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {useCoupleData} from '@/context/CoupleDataContext';
import backgroundImage from '../assets/image/bgGaleri.png';
import ornament1 from '../assets/image/divider1.png';

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

const Gallery = forwardRef((props, sectionRef) => {
  const data = useCoupleData();
  const images = data.gallery || [];
  const placeholders = data.galleryPlaceholder || images;

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
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const theme = useTheme();

  const styles = {
    section: {
      overflow: 'hidden',
      zIndex: -2,
      color: theme.palette.primary.main,
      textAlign: 'center',
    },
    box: {
      backgroundColor: theme.palette.light.main,
      paddingTop: '20vh',
      paddingBottom: '5vh',
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
  };

  const PrevArrow = (arrowProps) => {
    const {className, style, onClick} = arrowProps;
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

  const NextArrow = (arrowProps) => {
    const {className, style, onClick} = arrowProps;
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
    beforeChange: (current, next) => setSelectedImageIndex(next),
  };

  const settings2 = {
    dots: true,
    infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
      <Box style={styles.box}>
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          src={ornament1}
          alt="flower"
          style={{
            position: 'absolute',
            alignSelf: 'left',
            marginTop: '-22vh',
            width: `${windowHeight > windowWidth ? '40%' : '22vh'}`,
            left: 0,
          }}
        />
        <Typography
          variant="h2"
          className="font-estetik"
          style={styles.txt}
        >
          Photo Gallery
        </Typography>
        <ImageCarouselWrapper style={{marginTop: '5vh'}}>
          <Slider {...settings1} ref={setMainSlider}>
            {images.map((imageUrl, index) => (
              <div key={imageUrl}>
                <img
                  src={imageUrl}
                  style={{
                    maxHeight: `${windowWidth > windowHeight ? '60vh' : '20rem'}`,
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
            {images.map((imageUrl, index) => (
              <div key={imageUrl}>
                <div style={styles.mask}>
                  <LazyLoadImage
                    src={imageUrl}
                    placeholderSrc={placeholders[index]}
                    width="100%"
                    height="100%"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
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
    </section>
  );
});

const PopUpImage = ({imageUrl, onClose}) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('pop-up-image')) onClose();
    };
    document.addEventListener('click', handleClickOutside);
    return () =>
      document.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  return (
    <div className="pop-up-image">
      <img src={imageUrl} alt="Pop-up" />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Gallery;
