import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper, Avatar, TextField, Button } from '@mui/material';

import { selectUser } from '../../user/user-slice';
import { addComment, addReply, editComment, editReply } from '../comments-slice';


const commentType = {
  comment: 'Send',
  edit: 'Update',
  reply: 'Reply', 
}

const CommentForm = ({type = 'comment', replyingTo = '', commentId, replyId}) => {
  const [text, setText] = useState(replyingTo ? replyingTo : '');
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const avatar = user.image.png;

  const handleAddComment = () => {
    if (!text) return;

    switch(type) {
      case 'comment': {
        dispatch(addComment({
          content: text,
          user,
        }));
        break;
      }
      case 'edit': {
        if (!replyId) {
          dispatch(editComment({
            commentId,
            content: text,
          }))
        } else {
          const content = text.split(' ').slice(1).join(' ');

          dispatch(editReply({
            commentId,
            replyId,
            content,
          }));
        }
        break;
      }
      case 'reply': {
        const [replyto, ...content] = text.split(' ');

        dispatch(addReply({
          content: content.join(' '),
          user,
          replyingTo: replyto.slice(1), // without @
          commentId,
        }));

        break;
      }
      default: {
        throw new Error('Invalid form type');
      }
    }

    document.body.click();
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
        value={text}
        onChange={(event) => setText(event.target.value)}
        sx={{}}
      />
      <Button onClick={handleAddComment}>
        {commentType[type]}
      </Button>
    </Paper>
  )
}

CommentForm.propTypes = {
  type: PropTypes.oneOf(['comment', 'reply', 'edit']),
  replyingTo: PropTypes.string,
  commentId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export {CommentForm};
