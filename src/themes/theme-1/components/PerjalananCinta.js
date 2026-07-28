import React, {useState, useEffect} from 'react';
import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
} from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import {timelineItemClasses} from '@mui/lab/TimelineItem';

import {useCoupleData} from '@/context/CoupleDataContext';
import backgroundImage from '../assets/image/bgPengantin.png';
import ornament1 from '../assets/image/ucapan1.png';
import ornament2 from '../assets/image/ucapan2.png';

const PerjalananCerita = () => {
  const data = useCoupleData();
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
  const isLg = useMediaQuery((t) => t.breakpoints.up('lg'));
  const isMd = useMediaQuery((t) => t.breakpoints.only('md'));

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
  };

  const story = data.story || [];

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
          {story.map((item, index) => (
            <TimelineItem key={item.detail}>
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
                    {item.title && (
                      <Typography variant="h6">
                        {item.title}
                      </Typography>
                    )}
                    {item.date && (
                      <Typography variant="overline">
                        {item.date}
                      </Typography>
                    )}
                    <Typography variant="body1">
                      {item.detail}
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
