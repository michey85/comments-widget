import { Box, Button, Modal, Stack, Typography } from '@mui/material';


const CommentDelete = ({open, closeModal}) => {
  return (
    <Modal
      open={open}
      onClose={closeModal}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 250,
          bgcolor: 'background.paper',
          p: 3,
          borderRadius: '5px',
        }}
      >
        <Typography component="h2" variant="h5">
          Delete comment
        </Typography>
        <Typography sx={{py: 2}}>
          Are you sure you want to delete this comment? This will remove the comment and can't be undone.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button sx={{color: 'grey.50', bgcolor: 'grey.500'}} onClick={closeModal}>
            Cancel
          </Button>
          <Button color="secondary" onClick={closeModal}>
            Yes, delete
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}

export {CommentDelete};
