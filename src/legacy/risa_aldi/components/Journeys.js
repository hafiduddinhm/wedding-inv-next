import React, {useState, useEffect} from 'react';
import {Box, useTheme} from '@mui/material';
import backgroundImage from '../assets/image/bgjourney.png';
import journeyOrnament from '../assets/image/journeyOrnament.png';
import ornament1 from '../assets/image/journey1.png';
import ornament2 from '../assets/image/journey2.png';
import butterfly from '../assets/image/butterfly.png';

const Journeys = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight,
  );

  const journeys = [
    {
      label: 'Maret 2022 - PDKT',
      detail:
        'Kita saling didekatkan oleh sepupu aku yang dimana sepupuku adalah rekan kerjanya Aldi. Seiring berjalan nya waktu, kami dekat, tapi beberapa lama setelah itu kami sempat menjauh dan lost contact',
    },
    {
      label: 'Mei 2022 - Pacaran',
      detail:
        'Sampai akhirnya kita bertemu lagi di salah satu tempat billiard dan di tanggal 5 mei 2022 kami menjadi pasangan kekasih',
    },
    {
      label: 'Nov 2022 - Lamaran',
      detail:
        'Hingga pada saat itu kami berdua memantapkan diri untuk melanjutkan ke jenjang yang lebih serius yang di mana lamaran kami di langsungkan pada tanggal 13 November 2022',
    },
    {
      label: '15 Sep 2024 - Akad',
      detail:
        'Setelah badai yang selalu menghantam kami, berbagai ujian sudah terlewati. Semoga ini akhir menuju awal perjalanan kami berdua. Kami akan menyempurnakan ibadah di tanggal 15 September 2024',
    },
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

  const styles = {
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'primary.main',
      marginTop: '-5vh',
      padding: '25% 10%',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      backgroundSize: '100% 100%',
      overflow: 'hidden',
      textAlign: 'center',
    },
    glass: {
      background: 'rgba(255, 254, 251, 0.2)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 254, 251, 0.3)',
      padding: '10px',
      margin: '10px',
      textAlign: 'center',
    },
    btnStyles: {
      borderRadius: 30,
      padding: '8px 15px',
      fontSize: '0.75rem',
      justifySelf: 'center',
      marginTop: '5%',
      width: '100%',
      backgroundColor: theme.palette.light.main,
      color: theme.palette.secondary.main,
    },
    txt: {
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
      color: theme.palette.dark.main,
      header: {
        fontSize: `${250 + windowWidth * 0.06}%`,
        marginBottom: '2vh',
        textAlign: 'center',
        color: theme.palette.secondary.main,
      },
    },
    img: {
      width: '100%',
      marginBottom: '1vh',
    },
  };

  return (
    <>
      <Box sx={styles.box}>
        <h1 className="font-estetik" style={styles.txt.header}>
          Our Journey
        </h1>
        <img
          src={ornament2}
          alt="flower"
          style={{
            position: 'absolute',
            alignSelf: 'left',
            marginTop: '60vh',
            width: `${windowHeight > windowWidth ? '40%' : '32vh'}`,
            right: 0,
          }}
        />
        <br />
        {journeys.map((journey, index) =>
          index % 2 === 0 ? (
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              style={{display: 'flex', alignItems: 'center'}}
            >
              <div
                style={{
                  ...styles.txt,
                  whiteSpace: 'nowrap',
                  ...(windowHeight > windowWidth && {
                    transformOrigin: '200% 0%',
                    transform: 'translate(-200%, 0%) rotate(-90deg)',
                    width: '10%',
                  }),
                }}
              >
                {journey.label}
              </div>
              <img
                src={journeyOrnament}
                alt="stick"
                style={{
                  height: '120px',
                }}
              />
              <Box style={styles.glass}>
                <div style={styles.txt}>{journey.detail}</div>
              </Box>
            </div>
          ) : (
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              style={{display: 'flex', alignItems: 'center'}}
            >
              <Box style={styles.glass}>
                <div style={styles.txt}>{journey.detail}</div>
              </Box>
              <img
                src={journeyOrnament}
                alt="stick"
                style={{
                  height: '120px',
                  transform: 'rotate(180deg)',
                }}
              />
              <div
                style={{
                  ...styles.txt,
                  whiteSpace: 'nowrap',
                  ...(windowHeight > windowWidth && {
                    transformOrigin: '150% 0%',
                    transform: 'translate(-50%, 0%) rotate(90deg)',
                    width: '10%',
                  }),
                }}
              >
                {journey.label}
              </div>
            </div>
          ),
        )}

        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          src={ornament1}
          alt="flower"
          style={{
            position: 'absolute',
            alignSelf: 'left',
            marginTop: '-15vh',
            width: `${windowHeight > windowWidth ? '50%' : '42vh'}`,
            left: 0,
          }}
        />
        <img
          data-aos="fade-down"
          data-aos-duration="1500"
          src={butterfly}
          alt="flower"
          style={{
            position: 'absolute',
            alignSelf: 'left',
            marginTop: '55vh',
            width: `${windowHeight > windowWidth ? '15%' : '10vh'}`,
            right: '3%',
          }}
        />
        <br />
      </Box>
    </>
  );
};

export default Journeys;
