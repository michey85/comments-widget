import { CommentForm } from './components/CommentForm';
import { CommentList } from './CommentList';


const CommentsWidget = () => { 
  return (
    <>
      <CommentList />
      <CommentForm />
    </>
  )
}

export {CommentsWidget};
