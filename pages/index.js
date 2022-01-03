import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Typography } from '@mui/material';
import Head from 'next/head';
import router from 'next/router';
import React from 'react';
import { Layout } from '../components/index';

export default function HomeIndex() {
  const handleRouterChange = () => {
    router.push('/question');
  };

  return (
    <Layout pageMode={0}>
      <Head>
        <title>Tiểu học Dương Quang</title>
      </Head>
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '2rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{ fontWeight: 'bold', fontSize: '3rem', color: '#1E1E24', marginTop: '3rem' }}
            >
              LIÊN ĐỘI TIỂU HỌC DƯƠNG QUANG
            </Typography>
            <Typography
              sx={{ fontWeight: 'bold', fontSize: '4.1rem', marginTop: '6rem', color: '#C03221' }}
            >
              GIAO LƯU TÌM HIỀU VỀ AN TOÀN GIAO THÔNG
            </Typography>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '4rem',
                color: '#C03221',
                marginTop: '1rem',
                fontStyle: 'italic',
                fontFamily: `'Times New Roman', serif`,
              }}
            >
              An toàn giao thông cho nụ cười trẻ thơ
            </Typography>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '3.5rem',
                color: '#C03221',
                marginTop: '1rem',
                fontFamily: `'Times New Roman', serif`,
              }}
            >
              Năm học 2021-2022
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          right: 20,
          bottom: 20,
        }}
      >
        <Button
          endIcon={<ArrowForwardIosIcon />}
          size="large"
          onClick={handleRouterChange}
          variant="contained"
          color="inherit"
        >
          Trang tiếp
        </Button>
      </Box>
    </Layout>
  );
}
