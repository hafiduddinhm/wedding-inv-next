import React, {useState, useEffect} from 'react';
import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
} from '@mui/material';

import backgroundImage from '../assets/image/bgPengantin.png';
import ornament1 from '../assets/image/ucapan1.png';
import ornament2 from '../assets/image/ucapan2.png';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import {timelineItemClasses} from '@mui/lab/TimelineItem';

const PerjalananCerita = () => {
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

  const stories = [
    {
      title: 'Awal Berjumpa',
      date: '2016',
      detail:
        'Pertemuan kami tepatnya di Masjid Al-Ikhlas, Randugeneng Desa Cepokorejo dalam agenda organisasi. Fathia dan Hafidz pun saling berkenalan. Momen inilah Hafidz menaruh rasa pada Fathia dan berujung memendam perasaannya.',
    },
    {
      title: 'Lost Contact',
      date: '2017 - 2019',
      detail:
        'Kami sempat lost contact dalam rentang waktu yang cukup lama karena kesibukan masing-masing.',
    },
    {
      title: 'Komunikasi Terjalin',
      date: '2019',
      detail:
        'Kami kembali dipertemukan dalam agenda organisasi sekaligus menjadi pengurus organisasi yang sama. Kami mulai berkomunikasi kembali dengan jarak yang membentang Bogor-Tuban. Sedang Hafidz, masih jua memendam rasanya dan belum berani mengungkapkan meski komunikasi semakin terjalin. ',
    },
    {
      title: 'Pertemuan Kembali',
      date: '2024',
      detail:
        'Hafidz dan Fathia dipertemukan kembali setelah Fathia kembali dari perantauan. Komunikasi terjalin semakin baik antara Hafidz dan Fathia.',
    },
    {
      title: 'Mengungkapkan Rasa',
      date: 'Mei 2024',
      detail:
        'Membulatkan tekad, Hafidz akhirnya mengungkapkan perasaan yang selama ini ia pendam kepada Fathia.',
    },
    {
      title: 'Khitbah',
      date: 'September 2024',
      detail:
        'Hafidz dengan didampingi keluarga, meminang Fathia di hadapan keluarga besar. Alhamdulillah, Fathia menerima niat baik Hafidz dan memutuskan untuk melangsungkan pernikahan.',
    },
    {
      title: 'Pernikahan',
      date: '12 Desember 2024',
      detail:
        "InsyaAllah hari berkah dimana mitsaqan ghalizon digaungkan sebagai tanda terjalinnya ikatan suci dalam bentuk pernikahan. Semoga Allah memberikan kelancaran dan Allah bimbing kami untuk membangun keluarga yang Sakinah Mawaddah Warahmah, dunia & akhirat. Aamiin ya Rabbal 'Alamin",
    },
  ];

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
        <Typography variant="h4" className="font-estetik">
          Our Journey
        </Typography>
        <Timeline
          position={isLg || isMd ? 'alternate' : 'right'}
          sx={
            !isLg && !isMd
              ? {
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }
              : {}
          }
        >
          {stories.map((story, index) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{bgcolor: 'secondary.main'}} />
                <TimelineDot
                  variant="outlined"
                  color="secondary"
                  sx={{width: 20, height: 20}}
                />
                <TimelineConnector sx={{bgcolor: 'secondary.main'}} />
              </TimelineSeparator>
              <TimelineContent
                data-aos={
                  (isLg || isMd) && index % 2 === 0
                    ? 'fade-left'
                    : 'fade-right'
                }
                data-aos-duration="1700"
                sx={{py: '12px', px: 2}}
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
                      textAlign: 'left',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h6">
                      {story?.title || ''}
                    </Typography>
                    <Typography variant="overline">
                      {story?.date || ''}
                    </Typography>
                    <Typography variant="body1">
                      {story?.detail || ''}
                    </Typography>
                  </Box>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </section>
  );
};

export default PerjalananCerita;
