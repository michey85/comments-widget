import { Container } from '@mui/material';

import { CommentsWidget } from './features/comments';
import {TheModal} from './features/modal';

function App() {
  return (
    <>
    <TheModal />
    <Container maxWidth="md" sx={{my: 4}}>
      <CommentsWidget />
    </Container>
    </>
  );
}

export default App;
