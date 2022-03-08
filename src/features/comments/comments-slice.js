import { createSlice, nanoid } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    entities: [],
  },
  reducers: {
    addComment: {
      reducer: (state, {payload: newComment}) => {
        state.entities.push(newComment);
      },
      prepare: ({content, user}) => {
        const id = nanoid();

        return {
          payload: {
            id,
            content,
            createdAt: 'Just now',
            score: 0,
            replies: [],
            user,
          }
        };
      }
    },
    addReply: {
      reducer: (state, {payload: {commentId, reply}}) => {
        const comment = state.entities.find(comment => comment.id === commentId);

        if (comment) {
          comment.replies.push(reply);
        }
      },
      prepare: ({content, user, replyingTo, commentId}) => {
        const id = nanoid();
        return {
          payload: {
            reply: {
              id,
              content,
              user,
              replyingTo,
              score: 0,
              createdAt: 'Just now',
            },
            commentId,
          },
        };
      }
    },
    removeComment: (state, {payload: commentId}) => {
      state.entities = state.entities.filter(comment => comment.id !== commentId);
    },
    removeReply: (state, {payload: {replyId, commentId}}) => {
      const commentIndex = state.entities.findIndex(comment => commentId === comment.id);

      if (commentIndex > -1) {
        state.entities = state
          .entities[commentIndex]
          .replies
          .filter(reply => reply.id !== replyId);
      }
    },
    editComment: (state, {payload: {content, commentId}}) => {
      const comment = state.entities.find(comment => comment.id === commentId);

      if (comment) {
        comment.content = content;
      }
    },
    editReply: (state, {payload: {content, commentId, replyId}}) => {
      const comment = state.entities.find(comment => commentId === comment.id);

      if (comment) {
        const reply = comment.replies.find(reply => reply.id === replyId);

        if (reply) {
          reply.content = content;
        }
      };
    },
    incCommentScore: (state, {payload: commentId}) => {
      const comment = state.entities.find(comment => commentId === comment.id);
      if (comment) comment.score++;
    },
    decCommentScore: (state, {payload: commentId}) => {
      const comment = state.entities.find(comment => commentId === comment.id);
      if (comment) comment.score--;
    },
    incReplyScore: (state, {payload: {commentId, replyId}}) => {
      const comment = state.entities.find(comment => commentId === comment.id);

      if (comment) {
        const reply = comment.replies.find(reply => reply.id === replyId);

        if (reply) {
          reply.score++;
        }
      };
    },
    decReplyScore: (state, {payload: {commentId, replyId}}) => {
      const comment = state.entities.find(comment => commentId === comment.id);
      if (comment) {
        const reply = comment.replies.find(reply => reply.id === replyId);

        if (reply) {
          reply.score--;
        }
      };
    },
  },
});
export const {addComment, addReply, editComment, editReply, removeComment, removeReply, incCommentScore, incReplyScore, decCommentScore, decReplyScore} = commentsSlice.actions;

export const commentReducer = commentsSlice.reducer;

export const selectComments = state => state.comments.entities;
