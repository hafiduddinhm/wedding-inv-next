import React, {useState, useEffect} from 'react';
import {Grid, Box, useTheme, useMediaQuery} from '@mui/material';
import {Favorite} from '@mui/icons-material';

import {useCoupleData} from '@/context/CoupleDataContext';
import ornament1 from '../assets/image/ornamen.png';

const PerjalananCerita = () => {
  const data = useCoupleData();
  const story = data.story || [];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const theme = useTheme();

  const isLg = useMediaQuery((t) => t.breakpoints.up('lg'));
  const isMd = useMediaQuery((t) => t.breakpoints.only('md'));
  const isWide = isLg || isMd;

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
    ornament1: {
      display: 'flex',
      zIndex: 0,
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

  const YearBadge = ({year, iconFirst}) => (
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
      {iconFirst && <Favorite />}
      <h1
        className="font-serif"
        style={{...styles.txt.header, marginRight: '4px'}}
      >
        {year}
      </h1>
      {!iconFirst && <Favorite />}
    </Box>
  );

  const StoryCard = ({item, animation}) => (
    <Box
      data-aos={animation}
      data-aos-duration="1500"
      sx={{
        borderRadius: 5,
        backgroundColor: theme.palette.secondary.main,
        padding: 3,
        paddingTop: 2,
      }}
    >
      {item.title && (
        <h1
          className="font-serif"
          style={{...styles.txt.header, textAlign: 'left'}}
        >
          {item.title}
        </h1>
      )}
      {item.image && (
        <img src={item.image} style={styles.img} alt="" />
      )}
      <p style={styles.txt}>{item.detail}</p>
    </Box>
  );

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
          {story.map((item, index) =>
            isWide ? (
              <Grid
                key={item.title || index}
                container
                spacing={2}
                wrap="nowrap"
                sx={{margin: 0, width: '100%'}}
              >
                {index % 2 === 0 ? (
                  <>
                    <Grid item xs={5} md={5}></Grid>
                    <Grid
                      item
                      xs={2}
                      md={2}
                      style={{paddingLeft: '0px'}}
                    >
                      <YearBadge year={item.year} iconFirst={false} />
                    </Grid>
                    <Grid item xs={5} md={5}>
                      <StoryCard item={item} animation="fade-left" />
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={5} md={5}>
                      <StoryCard item={item} animation="fade-right" />
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      md={2}
                      style={{paddingLeft: '0px'}}
                    >
                      <YearBadge year={item.year} iconFirst={true} />
                    </Grid>
                    <Grid item xs={5} md={5}></Grid>
                  </>
                )}
              </Grid>
            ) : (
              <Grid
                key={item.title || index}
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
                      {item.year}
                    </h1>
                    <Favorite />
                  </Box>
                </Grid>
                <Grid item xs={9} md={9}>
                  <StoryCard item={item} animation="fade-left" />
                </Grid>
              </Grid>
            ),
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
        &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
        menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
        agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
        menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
        yang demikian itu benar-benar terdapat tanda-tanda (kebesaran
        Allah) bagi kaum yang berpikir.&quot;
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
        &quot;Ar-Rum : 21&quot;
      </p>
    </section>
  );
};

export default PerjalananCerita;
