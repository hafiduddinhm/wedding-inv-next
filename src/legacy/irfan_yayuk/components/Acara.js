import React, {forwardRef, useState, useEffect} from 'react';
import {Grid, Box, Button, useTheme} from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import cardBackground from '../assets/image/13-4.png';
import ornament1 from '../assets/image/acara1.png';
import ornament2 from '../assets/image/acara2.png';
import pattern from '../assets/image/pattern.png';

const Acara = forwardRef((props, sectionRef) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const theme = useTheme();

  const handleButtonClick = () => {
    window.open('https://maps.app.goo.gl/9eDXpA7zyLP59MPL9?g_st=iw');
  };

  const styles = {
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      margin: '0% 15%',
    },
    ornament1: {
      justifySelf: 'start',
      alignSelf: 'start',
      marginLeft: '-22%',
      left: 0,
      width: `${57 + windowWidth * 0.03}%`,
      height: `${27 + windowWidth * 0.01}vh`,
      backgroundImage: `url(${ornament1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
    ornament2: {
      justifySelf: 'end',
      alignSelf: 'end',
      marginRight: '-22%',
      right: 0,
      width: `${47 + windowWidth * 0.03}%`,
      height: `${27 + windowWidth * 0.01}vh`,
      backgroundImage: `url(${ornament2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
    },
    btnStyles: {
      borderRadius: 30,
      padding: '8px 15px',
      fontSize: '0.75rem',
      justifySelf: 'center',
      marginTop: windowWidth > 600 ? '30%' : '40%',
      width: windowWidth > 600 ? '45%' : '80%',
      backgroundColor: '#777687',
    },
    txt: {
      header: {
        fontSize: `${100 + windowWidth * 0.06}%`,
        marginTop: '2vh',
        textAlign: 'center',
      },
      h5: {
        textAlign: 'center',
        fontSize: `${90 + windowWidth * 0.04}%`,
        fontWeight: 'bold',
        color: theme.palette.dark.main,
      },
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
      color: theme.palette.dark.main,
    },
  };

  return (
    <section
      ref={sectionRef}
      style={{backgroundColor: '#dfdfdf', overflowX: 'hidden'}}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1080 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{backgroundColor: '#dfdfdf'}}
      >
        <defs>
          <filter
            id="filter0_d_4_33"
            x="-10"
            y="-6.99998"
            width="1100"
            height="197.824"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4_33"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4_33"
              result="shape"
            />
          </filter>
          <pattern
            id="img1"
            patternUnits="userSpaceOnUse"
            width="200"
            height="200"
          >
            <image
              href={pattern}
              x="0"
              y="0"
              width="200"
              height="200"
            />
          </pattern>
        </defs>
        <g filter="url(#filter0_d_4_33)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1080 149.758V3.05176e-05H0V184.759C5.51097 185.163 10.7737 185.473 15.7306 185.677C69.3632 187.879 109.695 178.457 150.914 168.828C187.038 160.389 223.843 151.791 270.88 150.719C319.606 149.609 357.661 156.076 395.426 162.494C435.231 169.258 474.713 175.967 526.028 173.691C570.888 171.702 605.726 161.494 639.831 151.501C679.327 139.929 717.841 128.645 769.801 130.744C806.974 132.245 835.283 142.641 863.085 152.85C894.251 164.295 924.78 175.506 966.445 173.691C1002.65 172.114 1049.81 159.195 1080 149.758Z"
            fill="#F7F7F3"
            fillOpacity="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1080 138.528V0H0V169.447C28.3614 173.496 58.2605 176.439 83.5 176C118.216 175.396 144.281 169.294 170.885 163.065C194.263 157.593 218.056 152.022 248.5 150C283.937 147.646 312.781 152.263 340.768 156.743C375.776 162.347 409.444 167.736 453 159C474.269 154.734 490.028 147.426 505.597 140.206C522.515 132.361 539.208 124.62 562.5 121C607.828 113.956 641.573 125.734 676.707 137.997C705.112 147.911 734.424 158.142 771.5 159C815.547 160.02 850.203 149.028 884.077 138.285C923.309 125.842 961.492 113.731 1012 121C1032.91 124.01 1057.97 131.201 1080 138.528Z"
            fill="#D9D9D9"
            fillOpacity="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1080 158.716V-0.999985H0V153.447C48.8943 162.829 118.315 174.554 162 176.5C211.502 178.705 248.729 169.271 286.773 159.631C320.115 151.182 354.086 142.573 397.5 141.5C442.474 140.388 477.599 146.863 512.455 153.289C549.195 160.061 585.637 166.779 633 164.5C674.405 162.508 706.56 152.288 738.039 142.283C774.493 130.697 810.041 119.398 858 121.5C892.31 123.003 918.439 133.412 944.1 143.634C972.866 155.092 1001.04 166.317 1039.5 164.5C1052.03 163.908 1065.98 161.719 1080 158.716Z"
            fill="url(#img1)"
          />
        </g>
      </svg>
      <Box sx={styles.box}>
        <div style={styles.ornament1} />
        <Grid
          container
          spacing={6}
          style={{
            position: 'relative',
            marginTop: '-25%',
            marginBottom: '-20%',
          }}
        >
          <Grid
            data-aos="fade-right"
            data-aos-duration="1500"
            item
            xs={12}
            sm={6}
            style={{justifyContent: 'center'}}
          >
            <h2
              className="font-estetik"
              style={{textAlign: 'center'}}
            >
              Akad Nikah
            </h2>
            <Box
              style={{
                backgroundImage: `url(${cardBackground})`,
                padding:
                  windowWidth > 600
                    ? '20% 5% 10% 10%'
                    : '30% 5% 10% 10%',
              }}
            >
              <h5 style={styles.txt.h5}>Sabtu, 06 Mei 2023</h5>
              <p style={styles.txt}>
                Pukul 09.00 WIB s/d Selesai
                <br />
                Alamat: Dsn. Balong Ombo RT 001 RW 001 Desa Talun
                Kidul Kec. Sumobito Kab. Jombang
              </p>
            </Box>
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-duration="1500"
            item
            xs={12}
            sm={6}
          >
            <h2
              className="font-estetik"
              style={{textAlign: 'center'}}
            >
              Resepsi
            </h2>
            <Box
              style={{
                backgroundImage: `url(${cardBackground})`,
                padding:
                  windowWidth > 600
                    ? '20% 5% 10% 10%'
                    : '30% 5% 10% 10%',
              }}
            >
              <h5 style={styles.txt.h5}>Minggu, 07 Mei 2023</h5>
              <p style={styles.txt}>
                Pukul 15.00 WIB s/d Selesai
                <br />
                Alamat: Jl. Anggrek 49 RT 002 RW 013 Desa Kureksari
                Kec. Waru Kab. Sidoarjo
              </p>
            </Box>
          </Grid>
        </Grid>
        <Button
          data-aos="fade-up"
          data-aos-duration="1500"
          variant="contained"
          onClick={handleButtonClick}
          style={styles.btnStyles}
        >
          <PlaceIcon style={{marginRight: '7px', fontSize: '1rem'}} />
          Lihat Lokasi
        </Button>
        <div style={styles.ornament2} />
      </Box>
    </section>
  );
});

export default Acara;
