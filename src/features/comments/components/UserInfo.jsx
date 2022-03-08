import { Avatar, Chip, Stack, Typography } from '@mui/material';

export const UserInfo = ({
    avatar,
    username,
    createdAt,
    isCurrentUser,
}) => (
  <Stack
    spacing={2}
    direction="row"
    alignItems="center"
    gridArea="info"
  >
    <Avatar alt={username} src={avatar} />
    <Typography>
      {username}
    </Typography>
    {isCurrentUser && (
      <Chip label="you" />
    )}
    <Typography
      sx={{
        color: 'grey.500'
      }}
    >
      {createdAt}
    </Typography>
  </Stack>
);
