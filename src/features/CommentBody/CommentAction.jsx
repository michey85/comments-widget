import { Button, Stack } from '@mui/material';
import { ReactComponent as ReplyIcon } from '../../images/icon-reply.svg';
import { ReactComponent as DeleteIcon } from '../../images/icon-delete.svg';
import { ReactComponent as EditIcon } from '../../images/icon-edit.svg';

export const CommentAction = ({ type = 'reply' }) => {
  if (type === 'reply') {
    return (
      <Button
        variant='text'
        color='secondary'
        startIcon={<ReplyIcon />}
        sx={{
          textTransform: 'none',
          fontWeight: 700,
          '&:hover': {
            opacity: 0.6,
          }
        }}
      >
        Reply
      </Button>
    );
  }

  return (
    <Stack direction='row' spacing={2}>
      <Button
        variant='text'
        startIcon={<DeleteIcon />}
        sx={{
          textTransform: 'none',
          fontWeight: 700,
          color: 'secondary.main',
          '&:hover': {
            opacity: 0.6,
          }
        }}
      >
        Delete
      </Button>
      <Button
        variant='text'
        startIcon={<EditIcon />}
        sx={{
          textTransform: 'none',
          fontWeight: 700,
          '&:hover': {
            opacity: 0.6,
          }
        }}
      >
        Edit
      </Button>
    </Stack>
  );
};
