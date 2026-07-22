import React, {useState, useEffect} from 'react';
import {
  Grid,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
} from '@mui/material';

import backgroundImage from '../assets/image/bgPengantin.png';
import ornament1 from '../assets/image/ucapan1.png';
import ornament2 from '../assets/image/ucapan2.png';
import point1 from '../assets/image/point1.png';
import point2 from '../assets/image/point2.png';

const PerjalananCerita = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight,
  );

  const story = [
    'Ut ultrices in tortor eu tincidunt. Proin ultricies, massa id porta auctor, sapien velit facilisis lorem, vel pharetra diam metus ut lacus. Etiam cursus facilisis elit sed hendrerit. Aenean ut nunc ante.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ullamcorper justo, nec suscipit dui. Phasellus et ante maximus, tristique nisl et, volutpat nisl.',
    'Nullam fringilla urna risus, a convallis quam rutrum in. Fusce interdum lacus purus, sed maximus eros facilisis ut. Nullam felis diam, blandit vel tortor ut, pretium lacinia arcu.',
  ];

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

  const isLg = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const isMd = useMediaQuery((theme) => theme.breakpoints.only('md'));

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      overflow: 'hidden',
      textAlign: 'center',
      color: theme.palette.primary.main,
      padding: '20vh 5%',
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.dark',
    },
    box2: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center',
      color: 'primary.dark',
      margin: `5vh 0%`,
    },
    btnStyles: {
      borderRadius: 30,
      position: 'relative',
      padding: '8px 15px',
      fontSize: '0.75rem',
      justifySelf: 'center',
      marginTop: windowWidth > 600 ? '5vh' : '0vh',
      width: windowWidth > 600 ? '35%' : '80%',
      backgroundColor: theme.palette.primary.main,
    },
    glass: {
      background: 'rgba(255, 254, 251, 0.2)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 254, 251, 0.3)',
      padding: '20px',
      margin: '10px',
      textAlign: 'center',
    },
    img: {
      width: '100%',
      padding: '10px 0',
    },
  };

  return (
    <section style={styles.section}>
      <img
        data-aos="fade-up"
        data-aos-duration="1500"
        src={ornament1}
        alt="flower"
        style={{
          position: 'absolute',
          alignSelf: 'left',
          marginTop: '-20vh',
          width: `${windowHeight > windowWidth ? '50%' : '30vh'}`,
          left: 0,
        }}
      />
      <img
        data-aos="fade-up"
        data-aos-duration="1500"
        src={ornament2}
        alt="flower"
        style={{
          position: 'absolute',
          alignSelf: 'right',
          marginTop: '-20vh',
          width: `${windowHeight > windowWidth ? '50%' : '30vh'}`,
          right: 0,
        }}
      />
      <Box sx={styles.box}>
        <Typography variant="h2" className="font-estetik">
          Our Journey
        </Typography>
        <Grid
          container
          sx={{
            margin: 0,
            width: '100%',
            marginTop: 5,
            alignItems: 'center',
          }}
        >
          {isMd || isLg ? (
            <React.Fragment>
              <Grid
                item
                md={5}
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    style={{
                      ...styles.glass,
                      textAlign: 'justify',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="body1">
                      {story[0]}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                md={2}
                data-aos="flip-left"
                data-aos-duration="1500"
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box>
                    <img src={point2} alt={point2} />
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                md={5}
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    style={{
                      ...styles.glass,
                      textAlign: 'justify',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="body1">
                      {story[1]} <br />
                      <br />
                      {story[2]}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Box data-aos="flip-left" data-aos-duration="1500">
                    <img src={point1} alt={point1} />
                  </Box>
                  <Box
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    style={{
                      ...styles.glass,
                      textAlign: 'justify',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="body1">
                      {story[0]}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Box data-aos="flip-left" data-aos-duration="1500">
                    <img src={point2} alt={point2} />
                  </Box>
                  <Box
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    style={{
                      ...styles.glass,
                      textAlign: 'justify',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="body1">
                      {story[1]} <br />
                      <br />
                      {story[2]}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Box>
    </section>
  );
};

export default PerjalananCerita;
