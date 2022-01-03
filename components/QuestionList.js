import CheckIcon from '@mui/icons-material/Check';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import dung from '../assets/dung.mp3';
import sai from '../assets/sai.mp3';

const colorButton = ['primary', 'secondary', 'success', 'warning'];
const questionTag = ['A', 'B', 'C', 'D', 'E'];

export function QuestionList({ questionData }) {
  const [qsIdx, setQsIdx] = useState(0);
  const [show, setShow] = useState(false);
  const saiRef = useRef(null);
  const dungRef = useRef(null);

  const handleQuestionChange = (key) => {
    if (show) {
      setShow(false);
    }
    if (key === 1) {
      if (qsIdx < questionData.length - 1) {
        setQsIdx(qsIdx + 1);
      }
      return;
    }

    if (qsIdx > 0) {
      setQsIdx(qsIdx - 1);
    }
  };
  const [open, setOpen] = useState({
    open: false,
    title: '',
    content: '',
    correct: false,
  });

  const handleClose = () => {
    setOpen({
      ...open,
      open: false,
      title: '',
      content: '',
      correct: false,
    });

    dungRef.current.pause();
    dungRef.current.currentTime = 0;
    saiRef.current.pause();
    saiRef.current.currentTime = 0;
  };

  const handleAnswerClick = (isCorrect, isSpec) => {
    if (isSpec) {
      return;
    }
    if (isCorrect) {
      setOpen({
        ...open,
        open: true,
        content: 'Chúc mừng bạn đã trả lời chính xác !',
        correct: true,
      });

      dungRef.current.play();
      return;
    }

    setOpen({
      ...open,
      open: true,
      content: 'Bạn trả lời sai rồi !',
      correct: false,
    });

    saiRef.current.play();
  };

  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ margin: '2rem 0' }}>
            {questionData?.map((qs, index) => (
              <Box key={index} sx={{ display: index === qsIdx ? 'block' : 'none' }}>
                <Typography
                  color="#DB2B39"
                  sx={{
                    fontSize: '2.8rem',
                    marginBottom: !qs.questionType ? '2.5rem' : '1rem',
                    fontWeight: 'bold',
                  }}
                >{`Câu ${index + 1}: ${qs.question}`}</Typography>
                {qs.imgSrc && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <Image width={300} height={300} alt="No img" src={`/${qs.imgSrc}`} />
                  </Box>
                )}
                {qs.questionType && (
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Button
                      onClick={() => setShow(!show)}
                      size="large"
                      variant="outlined"
                      color="info"
                    >
                      Xem kết quả
                    </Button>
                    {show && (
                      <Typography sx={{ marginLeft: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
                        {qs.flow}
                      </Typography>
                    )}
                  </Box>
                )}
                {qs.answer.map((ans, idx) => (
                  <Stack key={idx}>
                    <Button
                      onClick={() => handleAnswerClick(!!ans.correct, !!qs.questionType)}
                      sx={{
                        justifyContent: 'start',
                        marginBottom: '1.5rem',
                        fontSize: '2.5rem',
                        padding: '1rem 2rem',
                        borderRadius: '2rem',
                        textTransform: 'none',
                        color: '#111',
                        textAlign: 'left',
                      }}
                      color={colorButton[idx]}
                      variant="outlined"
                    >{`${questionTag[idx]}. ${ans.value}`}</Button>
                  </Stack>
                ))}
              </Box>
            ))}
            <Grid sx={{ marginTop: '1rem' }} container={true} justifyContent="flex-end">
              <Button
                sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#DB2B39' }}
                disabled={qsIdx === 0}
                onClick={() => handleQuestionChange(0)}
                size="large"
                startIcon={<KeyboardArrowLeftOutlinedIcon />}
              >
                Câu trước
              </Button>
              <Button
                sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#DB2B39' }}
                disabled={qsIdx >= questionData.length - 1}
                onClick={() => handleQuestionChange(1)}
                size="large"
                endIcon={<ChevronRightOutlinedIcon />}
              >
                Câu tiếp theo
              </Button>
            </Grid>

            <Dialog open={open.open} onClose={handleClose}>
              <DialogContent>
                <DialogContentText
                  sx={{
                    fontSize: '1.5rem',
                    color: open.correct ? 'green' : 'red',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {open.correct ? <CheckIcon color="success" /> : <CloseIcon color="error" />}
                  &nbsp;&nbsp;&nbsp;
                  {open.content}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  color="inherit"
                  sx={{
                    fontSize: '1.25rem',
                    textTransform: 'none',
                  }}
                  onClick={handleClose}
                  autoFocus
                >
                  Đồng ý
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
          <audio ref={saiRef} src={sai} />
          <audio ref={dungRef} src={dung} />
        </Box>
      </Container>
    </Box>
  );
}
