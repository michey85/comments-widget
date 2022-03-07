import { Container } from '@mui/material';

import { CommentForm } from './features/CommentForm';
import { CommentList } from './features/CommentList';

function App() {
  return (
    <Container maxWidth="md" sx={{my: 4}}>
      <CommentList />
      <CommentForm />
    </Container>
  );
}

export default App;
