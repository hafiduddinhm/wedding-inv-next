import React, {forwardRef, useState, useEffect} from 'react';
import {Grid, Box, useTheme, useMediaQuery} from '@mui/material';
import backgroundImage from '../assets/image/bg.png';
import ornament from '../assets/image/ornamen.png';
import ornament2 from '../assets/image/perjalanan.png';
import butterfly from '../assets/image/butterfly.png';
import timeline from '../assets/image/timeline.png';
import pageTransition from '../assets/image/transition.png';
import groom from '../assets/image/groom.png';
import bride from '../assets/image/bride.png';
import aos from 'aos';
import 'aos/dist/aos.css';

const Pengantin = forwardRef((props, sectionRef) => {
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

  useEffect(() => {
    aos.init();
  }, []);

  const isLg = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const isMd = useMediaQuery((theme) => theme.breakpoints.only('md'));

  const theme = useTheme();

  const styles = {
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      margin: '7% 10%',
    },
    ornament: {
      width: `${70 - windowWidth * 0.02}%`,
    },
    ornament2: {
      width: `${120 - windowWidth * 0.03}%`,
    },
    butterfly: {
      top: '0vh',
      width: `30%`,
      position: 'relative',
      right: '-50%',
    },
    timeline: {
      width: '70%',
      paddingBottom: `${140 - windowWidth * 0.03}%`,
    },
    timeline2: {
      width: '100%',
      height: '100%',
      paddingBottom: `${90 - windowWidth * 0.1}%`,
    },
    txt: {
      header: {
        fontSize: `${110 + windowWidth * 0.06}%`,
        marginTop: '2vh',
        textAlign: 'center',
      },
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
    },
    img: {
      width: '65%',
    },
  };

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        overflowX: 'hidden',
      }}
    >
      <div
        style={{
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '7vh',
        }}
      >
        <img
          src={pageTransition}
          style={{height: '100%', width: '100%'}}
        />
      </div>
      <Box sx={styles.box}>
        <img src={ornament} style={styles.ornament} />
        <p
          style={{
            color: theme.palette.dark.main,
            textAlign: 'center',
            marginTop: '2vh',
            fontSize: `${70 + windowWidth * 0.04}%`,
          }}
        >
          Assalamu'alaikum Wr. Wb.
          <br />
          Tanpa mengurangi rasa hormat. Kami mengundang
          Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri
          acara pernikahan kami:
        </p>
        <Box
          data-aos="fade-right"
          data-aos-duration="1500"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={groom} style={styles.img} />
          <h1 style={styles.txt.header}>Irfan Arif Widya Kusuma</h1>
          <p style={styles.txt}>
            Putra Pertama dari Bpk Arifin & Ibu Maya
          </p>
        </Box>
        <h1
          style={{
            fontSize: `${200 - windowWidth * 0.04}%`,
            marginBottom: '2vh',
          }}
        >
          &
        </h1>
        <Box
          data-aos="fade-left"
          data-aos-duration="1500"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={bride} style={styles.img} />
          <h1 style={styles.txt.header}>Yayuk Susanti</h1>
          <p style={styles.txt}>
            Putri Kedua dari Bpk Saunan (Alm) & Ibu Sumarni
          </p>
        </Box>
        <br />
        <br />
        <br />
        <br />
        <img src={ornament2} style={styles.ornament2} />
        <h1 style={styles.txt.header}>Perjalanan Cerita Kami</h1>
        <img src={ornament} style={styles.ornament} />
        <img
          data-aos="fade-left"
          data-aos-duration="2000"
          src={butterfly}
          style={styles.butterfly}
        />
        <Grid container spacing={4} wrap="nowrap">
          {isMd || isLg ? (
            <React.Fragment>
              <Grid
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="700"
                item
                xs={14}
                sm={5}
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '3%',
                  paddingBottom: 0,
                }}
              >
                <p style={styles.txt}>
                  Di tahun 2023 ini alhamdulilah kami bisa melanjutkan
                  hubungan ke jenjang pernikahan. Terimakasih untuk
                  semesta atas segala campur tangan di dalamnya.
                  Terimakasih untuk mempercayai bahwa sabar adalah
                  ladang pahala untuk aku bisa nemenin mas terus.
                </p>
              </Grid>
              <Grid
                data-aos="flip-right"
                data-aos-duration="1000"
                data-aos-delay="700"
                item
                xs={8}
                sm={2}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingLeft: 0,
                }}
              >
                <img src={timeline} style={styles.timeline} />
              </Grid>
              <Grid
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-delay="700"
                item
                xs={14}
                sm={5}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  padding: '3%',
                  paddingTop: 0,
                }}
              >
                <p style={styles.txt}>
                  Awal bertemu pada tahun 2018. Kemudian di tahun 2021
                  kami menjalin hubungan sampai saat ini. Berawal dari
                  teman tidak disangka sama sama ada rasa.
                </p>
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid
                data-aos="fade-right"
                data-aos-duration="1500"
                item
                xs={8}
                md={4}
                style={{paddingLeft: 0, marginLeft: '-7%'}}
              >
                <img src={timeline} style={styles.timeline2} />
              </Grid>
              <Grid
                item
                xs={16}
                md={8}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  paddingLeft: '2%',
                  marginRight: '-5%',
                }}
              >
                <p
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  style={styles.txt}
                >
                  Awal bertemu pada tahun 2018. Kemudian di tahun 2021
                  kami menjalin hubungan sampai saat ini. Berawal dari
                  teman tidak disangka sama sama ada rasa.
                </p>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  style={styles.txt}
                >
                  ⋮
                </p>
                <p
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  style={styles.txt}
                >
                  Di tahun 2023 ini alhamdulilah kami bisa melanjutkan
                  hubungan ke jenjang pernikahan. Terimakasih untuk
                  semesta atas segala campur tangan di dalamnya.
                  Terimakasih untuk mempercayai bahwa sabar adalah
                  ladang pahala untuk aku bisa nemenin mas terus.
                </p>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Box>
    </section>
  );
});

export default Pengantin;
