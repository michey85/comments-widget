import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: null,
  reducers: {
    showModal: (_, {payload: {
      title,
      description,
      onBtnClick,
      btnText,
    }}) => {
      return {
        title,
        description,
        onBtnClick,
        btnText,
      }
    },
    closeModal: () => null,
  },
});

export const {showModal, closeModal} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const selectIsOpen = (state) => Boolean(state.modal);
export const selectModalData = (state) => state.modal;
