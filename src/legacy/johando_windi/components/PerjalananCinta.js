import React, {useState, useEffect} from 'react';
import {Grid, Box, useTheme, useMediaQuery} from '@mui/material';
import {Favorite} from '@mui/icons-material';
import ornament1 from '../assets/image/ornamen.png';
import storyImg from '../assets/image/storyImg.webp';

const PerjalananCerita = () => {
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

  const isLg = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const isMd = useMediaQuery((theme) => theme.breakpoints.only('md'));

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      overflow: 'hidden',
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.dark',
      margin: `${-5 + windowWidth * 0.01}vh 7% 0vh 7%`,
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
    txt: {
      header: {
        fontSize: `${100 + windowWidth * 0.06}%`,
        textAlign: 'center',
        fontWeight: '600 !important',
      },
      textAlign: 'left',
      lineHeight: '2vh',
      fontSize: `${60 + windowWidth * 0.04}%`,
      color: theme.palette.primary.main,
      marginBottom: '-0.1rem',
      fontWeight: 300,
    },
    img: {
      width: '100%',
      padding: '10px 0',
    },
  };
  const story = [
    'Di tahun 2022, singkat cerita kami berkenalan tanpa sengaja melalui teman kami berdua. Waktu berjalan begitu singkat, hingga dari situlah perkenalan kami dimulai. waktu demi waktu kami lewati seperti teman biasa, hingga pada suatu saat dia memutuskan untuk datang ke rumahku, dan meminta izin kepada orang tua ku untuk berkenalan lebih jauh lagi. Alhamdulillah waktu itu kali pertama dia datang, yang bertepatan juga dengan bulan suci Ramadhan tahun lalu.',
    '17 Juli 2022, tanpa menunggu waktu lama, dia akhirnya memutuskan untuk melamarku tepat tiga bulan sejak kita berkenalan, kami pun tidak menyangka bahwa perkenalan kami yang singkat, akan sampai ke titik ini dengan penuh makna.',
    '11 & 16 Juli 2023, Insya Allah dengan Doa Restu kedua orang tua, keluarga, dan sahabat, kami akan melangsungkan pernikahan kami.',
  ];

  return (
    <section style={styles.section}>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        style={styles.ornament1}
      />
      <Box sx={styles.box}>
        <h1
          className="font-serif"
          style={{...styles.txt.header, fontWeight: 'bold'}}
        >
          Perjalanan Cinta Kami
        </h1>
        <Grid
          container
          direction="column"
          columnSpacing={4}
          wrap="nowrap"
          sx={{margin: 0, width: '100%', marginTop: 5}}
        >
          {isMd || isLg ? (
            <React.Fragment>
              <Grid
                container
                spacing={2}
                sx={{margin: 0, width: '100%'}}
                wrap="nowrap"
              >
                <Grid item xs={5} md={5}></Grid>
                <Grid item xs={2} md={2} style={{paddingLeft: '0px'}}>
                  <Box
                    data-aos="flip-up"
                    data-aos-duration="1500"
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: '10px',
                    }}
                  >
                    <h1
                      className="font-serif"
                      style={{
                        ...styles.txt.header,
                        marginRight: '4px',
                      }}
                    >
                      2022
                    </h1>
                    <Favorite />
                  </Box>
                </Grid>
                <Grid item xs={5} md={5}>
                  <Box
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    sx={{
                      borderRadius: 5,
                      backgroundColor: theme.palette.secondary.main,
                      padding: 3,
                      paddingTop: 2,
                    }}
                  >
                    <h1
                      className="font-serif"
                      style={{
                        ...styles.txt.header,
                        textAlign: 'left',
                      }}
                    >
                      Perkenalan
                    </h1>
                    <img src={storyImg} style={styles.img} alt="" />
                    <p style={styles.txt}>{story[0]}</p>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                wrap="nowrap"
                sx={{margin: 0, width: '100%'}}
              >
                <Grid item xs={5} md={5}>
                  <Box
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    sx={{
                      borderRadius: 5,
                      backgroundColor: theme.palette.secondary.main,
                      padding: 3,
                      paddingTop: 2,
                    }}
                  >
                    <h1
                      className="font-serif"
                      style={{
                        ...styles.txt.header,
                        textAlign: 'left',
                      }}
                    >
                      Tunangan
                    </h1>
                    <p style={styles.txt}>{story[1]}</p>
                  </Box>
                </Grid>
                <Grid item xs={2} md={2} style={{paddingLeft: '0px'}}>
                  <Box
                    data-aos="flip-up"
                    data-aos-duration="1500"
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: '10px',
                    }}
                  >
                    <Favorite />
                    <h1
                      className="font-serif"
                      style={{
                        ...styles.txt.header,
                        marginRight: '4px',
                      }}
                    >
                      2022
                    </h1>
                  </Box>
                </Grid>
                <Grid item xs={5} md={5}></Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                wrap="nowrap"
                sx={{margin: 0, width: '100%'}}
              >
                <Grid item xs={5} md={5}></Grid>
                <Grid item xs={2} md={2} style={{paddingLeft: '0px'}}>
                  <Box
                    data-aos="flip-up"
                    data-aos-duration="1500"
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: '10px',
                    }}
                  >
                    <h1
                      className="font-serif"
                      style={{
                        ...styles.txt.header,
                        marginRight: '4px',
                      }}
                    >
                      2023
                    </h1>
                    <Favorite />
                  </Box>
                </Grid>
                <Grid item xs={5} md={5}>
                  <Box
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    sx={{
                      borderRadius: 5,
                      backgroundColor: theme.palette.secondary.main,
                      padding: 3,
                      paddingTop: 2,
                    }}
                  >
                    <h1
                      className="font-serif"
                      style={{
                        ...styles.txt.header,
                        textAlign: 'left',
                      }}
                    >
                      Pernikahan
                    </h1>
                    <p style={styles.txt}>{story[2]}</p>
                  </Box>
                </Grid>
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid
                container
                spacing={2}
                sx={{margin: 0, width: '100%'}}
                wrap="nowrap"
              >
                <Grid item xs={3} md={3} style={{paddingLeft: '0px'}}>
                  <Box
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: '10px',
                    }}
                  >
                    <h1
                      className="font-serif"
                      style={{
                        ...styles.txt.header,
                        marginRight: '4px',
                      }}
                    >
                      2022
                    </h1>
                    <Favorite />
                  </Box>
                </Grid>
                <Grid item xs={9} md={9}>
                  <Box
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    sx={{
                      borderRadius: 5,
                      backgroundColor: theme.palette.secondary.main,
                      padding: 3,
                      paddingTop: 2,
                    }}
                  >
                    <h1
                      className="font-serif"
                      style={{
                        ...styles.txt.header,
                        textAlign: 'left',
                      }}
                    >
                      Perkenalan
                    </h1>
                    <img src={storyImg} style={styles.img} alt="" />
                    <p style={styles.txt}>{story[0]}</p>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                wrap="nowrap"
                sx={{margin: 0, width: '100%'}}
              >
                <Grid item xs={3} md={3} style={{paddingLeft: '0px'}}>
                  <Box
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: '10px',
                    }}
                  >
                    <h1
                      className="font-serif"
                      style={{
                        ...styles.txt.header,
                        marginRight: '4px',
                      }}
                    >
                      2022
                    </h1>
                    <Favorite />
                  </Box>
                </Grid>
                <Grid item xs={9} md={9}>
                  <Box
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    sx={{
                      borderRadius: 5,
                      backgroundColor: theme.palette.secondary.main,
                      padding: 3,
                      paddingTop: 2,
                    }}
                  >
                    <h1
                      className="font-serif"
                      style={{
                        ...styles.txt.header,
                        textAlign: 'left',
                      }}
                    >
                      Tunangan
                    </h1>
                    <p style={styles.txt}>{story[1]}</p>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                wrap="nowrap"
                sx={{margin: 0, width: '100%'}}
              >
                <Grid item xs={3} md={3} style={{paddingLeft: '0px'}}>
                  <Box
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: '10px',
                    }}
                  >
                    <h1
                      className="font-serif"
                      style={{
                        ...styles.txt.header,
                        marginRight: '4px',
                      }}
                    >
                      2023
                    </h1>
                    <Favorite />
                  </Box>
                </Grid>
                <Grid item xs={9} md={9}>
                  <Box
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    sx={{
                      borderRadius: 5,
                      backgroundColor: theme.palette.secondary.main,
                      padding: 3,
                      paddingTop: 2,
                    }}
                  >
                    <h1
                      className="font-serif"
                      style={{
                        ...styles.txt.header,
                        textAlign: 'left',
                      }}
                    >
                      Pernikahan
                    </h1>
                    <p style={styles.txt}>{story[2]}</p>
                  </Box>
                </Grid>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Box>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        style={styles.ornament1}
      />
      <p
        data-aos="fade-up"
        data-aos-duration="1500"
        style={{
          ...styles.txt,
          fontFamily: 'Playfair Display',
          fontWeight: '300',
          textAlign: 'justify',
          margin: '0 7%',
        }}
      >
        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
        menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
        agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
        menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
        yang demikian itu benar-benar terdapat tanda-tanda (kebesaran
        Allah) bagi kaum yang berpikir."
        <br />
        <br />
      </p>
      <p
        data-aos="flip-left"
        data-aos-delay="700"
        style={{
          ...styles.txt,
          fontFamily: 'Playfair Display',
          fontWeight: '300',
          textAlign: 'left',
          margin: '0 7%',
          width: 'fit-content',
        }}
      >
        "Ar-Rum : 21"
      </p>
    </section>
  );
};

export default PerjalananCerita;
