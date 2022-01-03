import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import router from 'next/router';
import React, { useState } from 'react';
import { Layout, QuestionList } from '../components/index';
import { fiveData, fourData, threeData } from '../constants/data';

export default function Question() {
  const [mode, setMode] = useState(0);
  const [grade, setGrade] = useState(-1);

  const handleRouterChange = () => {
    router.push('/');
  };

  const handleGradeClick = (gradeClicked) => {
    setMode(1);
    setGrade(gradeClicked);
  };

  return (
    <Layout pageMode={mode}>
      <Head>
        <title>Câu hỏi | Tiểu học Dương Quang</title>
      </Head>
      {mode === 0 ? (
        <Box>
          <Container>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '9rem',
                }}
              >
                <Typography sx={{ fontWeight: 'bold', color: '#C03221', fontSize: '5rem' }}>
                  CHỌN KHỐI
                </Typography>
              </Box>
              <Stack direction="row" spacing={4} sx={{ marginTop: '5rem' }}>
                <Button
                  onClick={() => handleGradeClick(3)}
                  sx={{ fontSize: '3rem', textTransform: 'none', padding: '1rem 2rem' }}
                  variant="contained"
                  color="success"
                >
                  Khối 3
                </Button>
                <Button
                  onClick={() => handleGradeClick(4)}
                  sx={{ fontSize: '3rem', textTransform: 'none', padding: '1rem 2rem' }}
                  variant="contained"
                  color="warning"
                >
                  Khối 4
                </Button>
                <Button
                  onClick={() => handleGradeClick(5)}
                  sx={{ fontSize: '3rem', textTransform: 'none', padding: '1rem 2rem' }}
                  variant="contained"
                  color="primary"
                >
                  Khối 5
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      ) : (
        <Box>
          {grade === 3 && <QuestionList questionData={threeData} />}
          {grade === 4 && <QuestionList questionData={fourData} />}
          {grade === 5 && <QuestionList questionData={fiveData} />}
        </Box>
      )}
      {mode === 0 && (
        <Box
          sx={{
            display: 'flex',
            position: 'fixed',
            right: 20,
            bottom: 20,
          }}
        >
          <Button
            startIcon={<ArrowBackIosIcon />}
            size="large"
            onClick={handleRouterChange}
            variant="contained"
            color="inherit"
          >
            Trang trước
          </Button>
        </Box>
      )}
      {mode === 1 && (
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            left: 20,
            top: 20,
          }}
        >
          <Button
            startIcon={<ArrowBackIosIcon />}
            size="large"
            onClick={() => setMode(0)}
            variant="outlined"
            color="inherit"
          >
            Chọn khối
          </Button>
        </Box>
      )}
    </Layout>
  );
}
