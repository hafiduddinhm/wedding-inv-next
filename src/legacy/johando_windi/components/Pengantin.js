import React, {forwardRef, useState, useEffect} from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
} from '@mui/material';
import backgroundImage from '../assets/image/bgPengantin.png';
import backgroundGrid from '../assets/image/bgPengantin2.png';
import {ReactComponent as Basmallah} from '../assets/image/bismillah.svg';
import ornament2 from '../assets/image/ornament2-home.png';
import aos from 'aos';
import 'aos/dist/aos.css';

const Pengantin = forwardRef((props, sectionRef) => {
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

  useEffect(() => {
    aos.init();
  }, []);

  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.up('xs'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: theme.palette.light.main,
        paddingBottom: '10vh',
        overflow: 'hidden',
        color: theme.palette.secondary.main,
      }}
    >
      <Box
        style={{
          margin: '1vh 5%',
          padding: '40px 20px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: isXs || isSm ? 'auto 100%' : '100% 100%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          borderRadius: 11,
          backgroundColor: 'white',
          boxShadow: '6px 4px 7.8px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          data-aos="flip-down"
          data-aos-duration="1500"
          sx={{margin: '27px 0'}}
        >
          <Basmallah
            style={{
              width: '180px',
              height: '100%',
              fill: theme.palette.secondary.main,
            }}
          />
        </Box>
        <Typography variant="body2" style={{maxWidth: '400px'}}>
          Tanpa mengurangi rasa hormat, kami mengundang
          Bapak/Ibu/Saudara/i sekalian untuk menghadiri acara
          pernikahan putra-putri kami:
        </Typography>
        {isXs || isSm ? (
          <>
            <Box
              data-aos="fade-right"
              data-aos-duration="1500"
              sx={{
                margin: '27px 0',
              }}
            >
              <Typography variant="h3" className="font-estetik">
                Windi Handayani
              </Typography>
              <Typography variant="body2">
                Anak Kedua dari <br />
                Bapak Rasmidi dan Ibu Jatmi
              </Typography>
            </Box>
            <Box data-aos="flip-left" data-aos-duration="1500">
              <Typography variant="h3" className="font-estetik">
                &
              </Typography>
            </Box>
            <Box
              data-aos="fade-left"
              data-aos-duration="1500"
              sx={{
                margin: '27px 0',
                marginBottom: '25vh',
              }}
            >
              <Typography variant="h3" className="font-estetik">
                Johando Yogatama
              </Typography>
              <Typography variant="body2">
                Anak Pertama dari
                <br />
                Bapak Radi dan Ibu Parsini
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <img
              src={ornament2}
              style={{width: '250px', margin: '3vh'}}
              alt=""
            />
            <Grid
              container
              sx={{
                width: '95%',
                alignItems: 'center',
                margin: '10vh 0',
                padding: '0 5%',
              }}
            >
              <Grid
                item
                data-aos="fade-right"
                data-aos-duration="1500"
                md={5}
              >
                <Box
                  sx={{
                    padding: '40px',
                    backgroundImage: `url(${backgroundGrid})`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '-3px -2px 2px rgba(0, 0, 0, 0.15)',
                    // eslint-disable-next-line no-dupe-keys
                    boxShadow: '6px 4px 7.8px rgba(0, 0, 0, 0.15)',
                    borderRadius: 5,
                  }}
                >
                  <Typography variant="h3" className="font-estetik">
                    Windi Handayani
                  </Typography>
                  <br />
                  <Typography variant="body2">
                    Anak Kedua dari <br />
                    Bapak Rasmidi dan Ibu Jatmi
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                data-aos="flip-left"
                data-aos-duration="1500"
                md={2}
              >
                <Box>
                  <Typography variant="h3" className="font-estetik">
                    &
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                data-aos="fade-left"
                data-aos-duration="1500"
                md={5}
              >
                <Box
                  sx={{
                    padding: '40px',
                    backgroundImage: `url(${backgroundGrid})`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '-3px -2px 2px rgba(0, 0, 0, 0.15)',
                    // eslint-disable-next-line no-dupe-keys
                    boxShadow: '6px 4px 7.8px rgba(0, 0, 0, 0.15)',
                    borderRadius: 5,
                  }}
                >
                  <Typography variant="h3" className="font-estetik">
                    Johando Yogatama
                  </Typography>
                  <br />
                  <Typography variant="body2">
                    Anak Pertama dari
                    <br />
                    Bapak Radi dan Ibu Parsini
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </section>
  );
});

export default Pengantin;
