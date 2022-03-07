import PropTypes from 'prop-types';
import { Add, Remove } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

const CommentCounter = ({count = 0}) => {
  return (
    <Stack
      direction={{xs: 'row', md: 'column'}}
      sx={{
        verticalAlign: 'middle',
        backgroundColor: 'grey.200',
        borderRadius: 2,
        p: 1,
        alignItems: 'center',
        gap: 2,
        width: {xs: 'auto', md: '24px'},
        '& *': {
          fontWeight: 700,
          color: 'primary.main'
        },
        '& > span:hover': {
          cursor: 'pointer',
        },
        '& svg': {
          opacity: 0.7,
        },
        '& svg:hover': {
          opacity: 1,
        },
      }}
    >
      <Typography
        component="span"
      >
        <Add scale={0.75}/>
      </Typography>
      <Typography>
        {count}
      </Typography>
      <Typography
        component="span" 
      >
        <Remove scale={0.75} />
      </Typography>
    </Stack>
  )
}

CommentCounter.propTypes = {
  count: PropTypes.number,
};

export {CommentCounter};