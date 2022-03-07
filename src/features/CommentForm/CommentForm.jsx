import PropTypes from 'prop-types';
import { Paper, Avatar, TextField, Button } from '@mui/material';


const CommentForm = ({type = 'comment', replyingTo = ''}) => {
  // TODO: get from state
  const user = {
    avatar: './images/avatars/image-juliusomo.png',
    username: 'juliusomo',
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 2,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <Avatar alt={user.username} src={user.avatar} />
      <TextField
        multiline
        rows={4}
        placeholder="Add a comment..."
        fullWidth
        defaultValue={replyingTo ? `@${replyingTo}` : ''}
        sx={{}}
      />
      <Button>{type === 'reply' ? 'Reply' : 'Send'}</Button>
    </Paper>
  )
}

CommentForm.propTypes = {
  type: PropTypes.oneOf(['comment', 'reply']),
  replyingTo: PropTypes.string,
};

export {CommentForm};