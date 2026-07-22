/* eslint-disable react-hooks/rules-of-hooks */
import React, {forwardRef, useState, useEffect} from 'react';
import {
  Grid,
  Box,
  Button,
  useTheme,
  TextField,
  Select,
  MenuItem,
  CircularProgress,
  useMediaQuery,
} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import {AccessTimeOutlined, SendRounded} from '@mui/icons-material';
import {motion} from 'framer-motion';
import axios from 'axios';
import {timeAgo} from '@/utils/timeAgo';

import {
  Card,
  CardContent,
  Typography,
  Alert,
  AlertTitle,
  Snackbar,
  Slide,
} from '@mui/material';

import backgroundImage from '../assets/image/bgUcapan.png';
import ornament from '../assets/image/ornament2-home.png';

const Ucapan = forwardRef((props, sectionRef) => {
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

  const isXs =
    useMediaQuery(theme.breakpoints.up('xs')) &&
    useMediaQuery(theme.breakpoints.down('sm'));
  const isSm =
    useMediaQuery(theme.breakpoints.up('sm')) &&
    useMediaQuery(theme.breakpoints.down('md'));

  const [nama, setNama] = useState('');
  const [ucapan, setUcapan] = useState('');
  const [kehadiran, setKehadiran] = useState(0);
  const [formTouched, setFormTouched] = useState(false);

  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPost, setLoadingPost] = useState(false);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const beUrl = 'https://wedding-inv-be.vercel.app/johando_windi';
  const MAX_LENGTH = 20;

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(beUrl);
      setComment(response.data.data);
    } catch (error) {
      setSeverity('error');
      setTitle('Yahh..');
      setMessage('Daftar ucapan gagal diambil');
      setOpen(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    const {name, value} = event.target;
    if (!formTouched) {
      setFormTouched(true);
    }
    if (name === 'kehadiran') {
      setKehadiran(value);
    } else {
      if (name === 'nama') {
        if (value.length <= 20) {
          setNama(value);
        }
      } else if (name === 'ucapan') {
        setUcapan(value);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formdata = new FormData();

    formdata.append('name', nama);
    if (kehadiran === 1) {
      formdata.append('status', true);
    } else if (kehadiran === 2) {
      formdata.append('status', false);
    } else {
      setSeverity('error');
      setTitle('Upss..');
      setMessage('Kamu belum konfirmasi kehadiranmu');
      setOpen(true);
      return;
    }
    formdata.append('comment', ucapan);
    setLoadingPost(true);

    axios
      .post(beUrl, formdata, {
        headers: {'Content-Type': 'application/json'},
      })
      .then((response) => {
        console.log(response.data);
        setLoadingPost(false);
        setLoading(true);
        fetchData();
        setSeverity('success');
        setTitle('Berhasil');
        setMessage('Ucapan berhasil dikirim!');
        setOpen(true);
      })
      .catch((err) => {
        setLoadingPost(false);
        setSeverity('error');
        setTitle('Sayang sekali');
        setMessage('Ucapanmu gagal dikirim');
        setOpen(true);
        console.error(err);
        // alert("Gagal mengirim ucapan")
      });
    handleReset();
  };

  const handleReset = () => {
    setNama('');
    setUcapan('');
    setKehadiran(0);
    setFormTouched(false);
  };

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return (
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
    });
  }

  const styles = {
    section: {
      backgroundColor: theme.palette.light.main,
      paddingBottom: '10vh',
    },
    box: {
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'dark.main',
      padding:
        windowWidth > 500 ? '0vh 12% 0vh 12%' : '00vh 12% 0vh 12%',
      backgroundColor: theme.palette.light.main,
      //   backgroundImage: `url(${backgroundImage})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100% 100%",
      //   backgroundPosition: "center center",
      overflow: 'hidden',
    },
    card: {
      maxHeight: '60vh',
      overflowY: 'scroll',
      overflowX: 'hidden',
      borderRadius: '15px',
      border: '0.5rem solid rgba(0, 0, 0, 0.01)',
      borderWidth: '0.5rem',
      // padding: '0.5rem',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      txt: {
        header: {
          fontSize: `${80 + windowWidth * 0.04}%`,
          fontWeight: '500',
          color: theme.palette.dark.main,
          marginBottom: '5px',
          fontFamily: 'Josefin Sans',
        },
        time: {
          fontSize: `${60 + windowWidth * 0.04}%`,
          color: theme.palette.dark.main,
          display: 'flex',
          alignItems: 'center',
          marginTop: '1.2rem',
          fontFamily: 'Josefin Sans',
          fontWeight: 300,
        },
        fontSize: `${70 + windowWidth * 0.04}%`,
        color: theme.palette.dark.main,
        alignItems: 'center',
        fontFamily: 'Josefin Sans',
        fontWeight: 300,
      },
    },
    btnStyles: {
      submit: {
        borderRadius: 30,
        padding: '8px 15px',
        fontSize: '0.75rem',
        justifySelf: 'center',
        marginTop: '15px',
        width: '100%',
        backgroundColor: 'dark.main',
        color: 'white',
        '& .MuiCircularProgress-root': {
          color: 'white',
        },
        '&:hover': {
          backgroundColor: '#875B57',
          boxShadow: 'none',
        },
      },
      cancel: {
        borderRadius: 30,
        borderColor: 'dark.main',
        padding: '8px 15px',
        fontSize: '0.75rem',
        borderWidth: '2px',
        justifySelf: 'center',
        marginTop: '15px',
        width: '100%',
        '&:hover': {
          backgroundColor: 'dark.main',
          color: 'white',
        },
        '&:active': {
          borderColor: 'dark.main',
        },
      },
    },
    color: theme.palette.primary.main,
    txt: {
      header: {
        fontSize: `${300 + windowWidth * 0.06}%`,
        marginBottom: '2vh',
        textAlign: 'center',
        zIndex: 1,
      },
      larger: {
        textAlign: 'center',
        fontSize: `${110 + windowWidth * 0.04}%`,
        color: theme.palette.dark.main,
      },
      textAlign: 'center',
      fontSize: `${70 + windowWidth * 0.04}%`,
      color: theme.palette.dark.main,
      marginBottom: '2vh',
      fontWeight: 300,
      zIndex: 1,
    },
    img: {
      width: '100%',
      marginBottom: '1vh',
    },
  };

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: theme.palette.light.main,
        paddingBottom: '10vh',
        overflow: 'hidden',
        color: styles.color,
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
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h2"
          className="font-estetik"
          textAlign="center"
        >
          Ucapan dan Doa Restu
        </Typography>

        <img src={ornament} style={{width: '250px'}} alt="" />
        <form
          onSubmit={handleSubmit}
          style={{zIndex: 0, margin: '3vh 0% 7vh 0%'}}
        >
          <TextField
            label="Nama"
            name="nama"
            value={nama}
            onChange={handleChange}
            fullWidth
            required
            helperText={
              formTouched ? `${nama.length}/${MAX_LENGTH}` : ''
            }
            margin="normal"
            variant="filled"
            InputProps={{
              maxLength: MAX_LENGTH,
              disableUnderline: true,
              style: {
                borderRadius: 20,
                fontSize: `${70 + windowWidth * 0.04}%`,
                backgroundColor: 'white',
                boxShadow: '6px 4px 7.8px rgba(0, 0, 0, 0.15)',
              },
            }}
            InputLabelProps={{
              sx: {
                color: styles.color,
              },
            }}
          />
          <TextField
            label="Berikan ucapanmu"
            name="ucapan"
            value={ucapan}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
            margin="none"
            variant="filled"
            InputProps={{
              disableUnderline: true,
              style: {
                borderRadius: 20,
                fontSize: `${70 + windowWidth * 0.04}%`,
                backgroundColor: 'white',
                boxShadow: '6px 4px 7.8px rgba(0, 0, 0, 0.15)',
              },
            }}
            InputLabelProps={{
              sx: {
                color: styles.color,
              },
            }}
          />
          <br />
          <p></p>
          <Select
            labelId="kehadiran-label"
            id="kehadiran"
            name="kehadiran"
            value={kehadiran}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="filled"
            disableUnderline
            style={{
              borderRadius: 20,
              paddingBottom: 15,
              backgroundColor: 'white',
              boxShadow: '6px 4px 7.8px rgba(0, 0, 0, 0.15)',
            }}
          >
            <MenuItem value={0}>
              <Typography variant="body1" color={styles.color}>
                Konfirmasi kehadiran
              </Typography>
            </MenuItem>
            <MenuItem value={1}>
              <Typography variant="body1" color={styles.color}>
                Hadir
              </Typography>
            </MenuItem>
            <MenuItem value={2}>
              <Typography variant="body1" color={styles.color}>
                Berhalangan
              </Typography>
            </MenuItem>
          </Select>
          <div style={{marginTop: '1rem'}}>
            <LoadingButton
              type="submit"
              variant="contained"
              disableRipple={true}
              disabled={!formTouched}
              sx={{
                borderRadius: 30,
                padding: '8px 15px',
                fontSize: '0.75rem',
                justifySelf: 'center',
                marginTop: '15px',
                width: '100%',
                backgroundColor: 'primary.main',
                color: 'white',
                '& .MuiCircularProgress-root': {
                  color: 'white',
                },
                '&:hover': {
                  backgroundColor: 'light.main',
                  boxShadow: 'none',
                },
              }}
              loading={loadingPost}
            >
              <span>Kirim</span>
              <SendRounded
                sx={{
                  width: '0.9rem',
                  marginLeft: '7px',
                  alignSelf: 'center',
                }}
              />
            </LoadingButton>
            {formTouched && (
              <Button
                variant="outlined"
                disableRipple={true}
                onClick={handleReset}
                sx={styles.btnStyles.cancel}
              >
                Batal
              </Button>
            )}
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleSnackbarClose}
              TransitionComponent={Slide}
              anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
              <Alert
                severity={severity}
                variant="filled"
                onClose={handleSnackbarClose}
              >
                <AlertTitle>{title}</AlertTitle>
                {message}
              </Alert>
            </Snackbar>
          </div>
        </form>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          style={{
            maxHeight: '60vh',
            width: '95%',
            maxWidth: '435px',
            overflowY: 'scroll',
            overflowX: 'hidden',
            borderRadius: '15px',
            border: '0.5rem solid rgba(0, 0, 0, 0.01)',
            borderWidth: '0.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid container spacing={2} direction="column">
            {loading ? (
              <Grid
                item
                sx={{
                  margin: '5%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CircularProgress size={'10%'} />
              </Grid>
            ) : (
              <>
                {comments !== null && comments !== undefined ? (
                  <>
                    {comments.map((comment) => (
                      <Grid key={comment._id} item>
                        <motion.div
                          initial="offscreen"
                          whileInView="onscreen"
                          viewport={{once: true, amount: 0.8}}
                          style={{height: '100%'}}
                        >
                          <motion.div
                            className="card"
                            variants={cardVariants}
                            style={{
                              backgroundColor: 'transparent',
                              borderColor: 'transparent',
                            }}
                          >
                            <Card style={{borderRadius: '10px'}}>
                              <CardContent
                                sx={{
                                  paddingBottom: '1.5vh !important',
                                }}
                              >
                                <Typography
                                  fontWeight="bold"
                                  color={styles.color}
                                >
                                  {toTitleCase(comment.name)} -{' '}
                                  {comment.status === 'true'
                                    ? 'Hadir'
                                    : 'Tidak Hadir'}
                                </Typography>
                                <Typography
                                  component="p"
                                  color={styles.color}
                                >
                                  {comment.comment}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '1.2rem',
                                    fontFamily: 'Josefin Sans',
                                  }}
                                  color={styles.color}
                                  component="p"
                                >
                                  <AccessTimeOutlined
                                    sx={{
                                      width: '0.9rem',
                                      marginRight: '2%',
                                      alignSelf: 'center',
                                    }}
                                  />
                                  {timeAgo(comment.timestamp)}
                                </Typography>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </motion.div>
                      </Grid>
                    ))}
                  </>
                ) : (
                  <Grid
                    item
                    sx={{
                      margin: '2%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p style={styles.txt}>
                      <i>Belum ada ucapan</i>
                    </p>
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </div>
      </Box>
    </section>
  );
});

export default Ucapan;
