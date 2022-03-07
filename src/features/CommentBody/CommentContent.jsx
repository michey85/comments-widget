import { Typography } from '@mui/material';

const CommentContent = ({replyingTo, content}) => {
  return (
    <Typography>
          {replyingTo && (
            <Typography
              component="span"
              color="primary"
              sx={{
                fontWeight: 'fontWeightBold',
                cursor: 'pointer',
              }}
            >
            {'@' + replyingTo + ' '}
            </Typography>
          )
          }{content}
        </Typography>
  )
}

export {CommentContent};