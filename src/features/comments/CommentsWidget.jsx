import { useDispatch } from 'react-redux';

import {showModal} from '../modal';

import { CommentForm } from './components/CommentForm';
import { CommentList } from './CommentList';
import {removeComment, removeReply} from './comments-slice';

const CommentsWidget = () => {
  const dispatch = useDispatch();

  function handleModalAction({commentId, replyId}) {
    if (!replyId) {
      dispatch(removeComment(commentId));
    } else {
      dispatch(removeReply({commentId, replyId}))
    }
  }

  const handleModalShow = () => void dispatch(showModal({
    title: 'Delete comment',
    description: 'Are you sure you want to delete this comment? This will remove the comment and can\'t be undone.',
    onBtnClick: handleModalAction,
    btnText: 'Yes, delete',
  }));

  return (
    <>
      <CommentList handleModal={handleModalShow} />
      <CommentForm />
    </>
  )
}

export {CommentsWidget};