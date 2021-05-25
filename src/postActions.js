export const getPost = postId => {
  return {
    type: "GET_POST",
    payload: postId
  };
};
