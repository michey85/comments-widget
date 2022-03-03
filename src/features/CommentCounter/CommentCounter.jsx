import PropTypes from 'prop-types';
import { Add, Remove } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';

const CommentCounter = ({count = 0}) => {
  return (
    <Stack
      direction={{xs: 'row', md: 'column'}}
      sx={{
        backgroundColor: 'grey.200',
        borderRadius: 2,
      }}
    >
      <Button variant="text" size="sm">
        <Add fontSize='2' />
      </Button>
      <Typography
        sx={{
          color: 'primary.main',
          textAlign: 'center',
          fontWeight: 700,
          p: 1,
        }}
      >{count}</Typography>
      <Button variant="text" size="sm">
        <Remove fontSize='2' />
      </Button>
    </Stack>
  )
}

CommentCounter.propTypes = {
  count: PropTypes.number,
};

export {CommentCounter};