import {useEffect, useState, forwardRef} from 'react';
import {useSearchParams} from 'next/navigation';
import {
  Box,
  Button,
  useTheme,
  Dialog,
  DialogContent,
  Slide,
} from '@mui/material';
import {MailOutlined} from '@mui/icons-material';

import ornament from '../assets/image/ornament-home.png';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const OpeningModal = ({onClosed = () => {}}) => {
  const searchParams = useSearchParams();
  const [guest, setGuest] = useState('');
  const [open, setOpen] = useState(true);

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
    const toParam = searchParams.get('to');
    setGuest(toParam);
  }, [searchParams]);

  const theme = useTheme();

  const handleClose = () => {
    // document.body.style.overflowY = "auto";
    setOpen(false);
    onClosed();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      fullScreen
      onClose={handleClose}
      PaperProps={{
        style: {
          backgroundColor: theme.palette.dark.main,
          // background: `url(${bg}) no-repeat center center`,
          // backgroundSize: 'cover',
        },
      }}
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          // alignItems: 'center',
          margin: '10vh 10%',
          padding: 0,
          textAlign: 'center',
          color: theme.palette.primary.main,
        }}
      >
        <Box
          height={`${191 + (windowWidth * 64) / 664}px`}
          sx={{
            color: 'white',
            backgroundImage: `url(${ornament})`,
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'moontime',
            fontSize: 52,
          }}
        >
          J & W
        </Box>
        <Box
          sx={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Playfair Display',
            fontSize: 24,
          }}
        >
          Johando & Windi
        </Box>
        {guest && (
          <Box>
            <Box
              sx={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Playfair Display',
                fontSize: 16,
              }}
            >
              Kepada Bapak/Ibu/Saudara/i
            </Box>
            <Box
              sx={{
                margin: '15px 0',
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Playfair Display',
                fontWeight: '700',
                fontSize: 20,
              }}
            >
              {guest}
            </Box>
          </Box>
        )}
        <Button
          variant="contained"
          onClick={handleClose}
          // style={styles.button}
          sx={{
            borderRadius: 20,
            maxWidth: '30%',
            minWidth: '210px',
            alignSelf: 'center',
          }}
        >
          <MailOutlined
            style={{
              marginRight: '7px',
              fontSize: `${90 + windowWidth * 0.03}%`,
            }}
          />
          Buka Undangan
        </Button>
      </DialogContent>
    </Dialog>
  );
};
export default OpeningModal;
