import React, {forwardRef, useState, useEffect} from 'react';
import {
  Box,
  useTheme,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from '@mui/material';
import styled from 'styled-components';
import flower from '../assets/image/closing.png';
import flowers from '../assets/image/flowers.png';

const GalleryWrapper = styled(Box)`
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
    max-width: 90%;
    max-height: 90%;
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
  '/media/bambang_endah/1.webp',
  '/media/bambang_endah/2.webp',
  '/media/bambang_endah/3.webp',
  '/media/bambang_endah/4.webp',
  '/media/bambang_endah/5.webp',
  '/media/bambang_endah/6.webp',
];

const Gallery = forwardRef((props, sectionRef) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  const numCols = isXs || isSm ? 1 : isMd ? 2 : isLg ? 3 : 4;

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

  const styles = {
    section: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.light.main,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '7vh 10%',
      overflow: 'hidden',
      zIndex: -2,
    },
    flower: {
      left: 0,
      zIndex: 0,
      position: 'absolute',
      marginTop: `${0 + windowWidth * 0.01}vh`,
      width: `${30 - windowWidth * 0.01}%`,
      height: `${35 - windowHeight * 0.01}vh`,
      backgroundImage: `url(${flower})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left',
    },
    flowers: {
      left: 0,
      right: 0,
      zIndex: 0,
      width: '120%',
      position: 'relative',
    },
    hr: {
      border: 0,
      clear: 'both',
      display: 'block',
      width: '65%',
      backgroundColor: '#FFFFFF',
      height: '2px',
      opacity: 0.8,
      margin: '2%',
    },
    txt: {
      header: {
        fontSize: `${120 + windowWidth * 0.06}%`,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      fontSize: `${60 + windowWidth * 0.06}%`,
      marginBottom: '2vh',
      textAlign: 'center',
      color: theme.palette.light.main,
    },
    img: {
      borderRadius: '30px',
      width: '95%',
      alignSelf: 'center',
      justifySelf: 'center',
      boxShadow: '0 0 5px 5px rgba(255,255,255,0.2)',
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <hr style={styles.hr} />
      <h1 className="font-serif" style={styles.txt.header}>
        Gallery
      </h1>
      <hr style={styles.hr} />
      <br />
      <br />
      <div
        style={styles.flower}
        data-aos="zoom-in"
        data-aos-duration="1500"
      />
      <GalleryWrapper>
        <ImageList variant="masonry" cols={numCols} gap={10}>
          {imageToShow.map((item, index) => (
            <ImageListItem
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '5px',
              }}
            >
              <img
                src={item}
                alt={index + 1}
                onClick={() => setSelectedImage(item)}
                style={styles.img}
              />
            </ImageListItem>
          ))}
          {selectedImage && (
            <PopUpImage
              imageUrl={selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </ImageList>
      </GalleryWrapper>
      <img
        src={flowers}
        style={styles.flowers}
        data-aos="fade-up"
        data-aos-duration="1500"
      />
      <br />
      <br />
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        style={styles.txt}
      >
        <i>
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
          menciptakan untukmu isteri-isteri dari jenismu sendiri,
          supaya kamu cenderung dan merasa tenteram kepadanya, dan
          dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya
          pada yang demikian itu benar-benar terdapat tanda-tanda bagi
          kaum yang berfikir.
        </i>
      </p>
      <p
        data-aos="flip-left"
        data-aos-duration="500"
        data-aos-delay="500"
        style={styles.txt}
      >
        (Q.S Ar-Rum : 21)
      </p>
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
