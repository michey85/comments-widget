import { Avatar, Stack, Typography } from '@mui/material';

export const UserInfo = ({ avatar, username, createdAt }) => {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <Avatar alt={username} src={avatar} />
      <Typography>
        {username}
      </Typography>
      <Typography
        sx={{
          color: 'grey.500'
        }}
      >
        {createdAt}
      </Typography>
    </Stack>
  );
};
