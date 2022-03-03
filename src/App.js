import { Container } from '@mui/material';

import { CommentForm } from './features/CommentForm';
import { CommentBody } from './features/CommentBody';

function App() {
  return (
    <Container>
      <CommentForm />
      <CommentBody />
    </Container>
  );
}

export default App;
