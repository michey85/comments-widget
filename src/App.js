import { Container } from '@mui/material';

import { CommentsWidget } from './widgets/comments/CommentsWidget';

function App() {
  return (
    <Container maxWidth="md" sx={{my: 4}}>
      <CommentsWidget />
    </Container>
  );
}

export default App;
