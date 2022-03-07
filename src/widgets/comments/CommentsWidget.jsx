import { useState } from 'react';

import { CommentDelete } from '../../features/CommentDelete';
import { CommentForm } from '../../features/CommentForm';
import { CommentList } from './CommentList';

const CommentsWidget = () => {
  const [isModal, setModal] = useState(false);

  const closeModal = () => setModal(false);

  return (
    <>
      <CommentList handleModal={setModal} />
      <CommentForm />
      <CommentDelete open={isModal} closeModal={closeModal} />
    </>
  )
}

export {CommentsWidget};