import { Container } from '@mui/material';
import { useState } from 'react';

import { CommentForm } from './features/CommentForm';
import { CommentList } from './features/CommentList';
import { CommentDelete } from './features/CommentDelete';

function App() {
  const [isModal, setModal] = useState(false);

  const closeModal = () => setModal(false);

  return (
    <>
    <Container maxWidth="md" sx={{my: 4}}>
      <CommentList handleModal={setModal} />
      <CommentForm />
    </Container>

    <CommentDelete open={isModal} closeModal={closeModal}/>
    </>
  );
}

export default App;
