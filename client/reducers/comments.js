function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      // take the current state
      ...state,
      // overwrite this post
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  
  return state;
}

function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      const { author, comment } = action;
      return [...state, { text: comment, user: author }];
    case "REMOVE_COMMENT":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export default comments;
