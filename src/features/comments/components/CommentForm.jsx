import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper, Avatar, TextField, Button } from '@mui/material';

import { selectUser } from '../../user/user-slice';
import { addComment, addReply } from '../comments-slice';


const CommentForm = ({type = 'comment', replyingTo = '', commentId}) => {
  const [text, setText] = useState(replyingTo ? `@${replyingTo} ` : '');
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const avatar = user.image.png;

  const handleAddComment = () => {
    if (!text) return;

    if (commentId) {
      dispatch(addReply({
        content: text,
        user,
        replyingTo,
        commentId,
      }))
    } else {
      const content = text.split(' ').slice(1).join(' ');

      dispatch(addComment({
        content,
        user,
      }));
      document.dispatchEvent('click');
    }

    setText('');
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
      <Avatar alt={user.username} src={avatar} />
      <TextField
        multiline
        rows={4}
        placeholder="Add a comment..."
        fullWidth
        defaultValue={text}
        onChange={(event) => setText(event.target.value)}
        sx={{}}
      />
      <Button onClick={handleAddComment}>
        {type === 'reply' ? 'Reply' : 'Send'}
      </Button>
    </Paper>
  )
}

CommentForm.propTypes = {
  type: PropTypes.oneOf(['comment', 'reply']),
  replyingTo: PropTypes.string,
  commentId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export {CommentForm};