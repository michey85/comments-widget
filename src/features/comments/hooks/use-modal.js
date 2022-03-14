import { useDispatch } from 'react-redux';

import {showModal} from '../../modal';
import {removeComment, removeReply} from '../comments-slice';

const useModal = (commentId, replyId) => {
  const dispatch = useDispatch();

  function handleModalAction() {
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

  return handleModalShow;
}

export {useModal};
