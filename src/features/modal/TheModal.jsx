import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Modal, Stack, Typography } from '@mui/material';

import { closeModal, selectIsOpen, selectModalData } from './modal-slice';

const TheModal = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectIsOpen);
  const {
      title,
      description = "",
      onBtnClick = Function.prototype,
      btnText = 'Yes, delete',
  } = useSelector(selectModalData) || {};


  const handleClose = () => dispatch(closeModal());
  const handleAction = () => {
    onBtnClick();
    handleClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
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
          {title}
        </Typography>
        <Typography sx={{py: 2}}>
          {description}
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button sx={{color: 'grey.50', bgcolor: 'grey.500'}} onClick={handleClose}>
            Cancel
          </Button>
          {
            !!btnText && (
              <Button color="secondary" onClick={handleAction}>
                {btnText}
              </Button>
            )
          }
        </Stack>
      </Box>
    </Modal>
  )
}

export {TheModal};
