function comments(state = [], action) {
    switch (action.type) {
        case "ADD_COMMENT":
            const {postId, author, comment} = action;
            const oldComments = state[postId] || [];
            const updatedComments = [
                ...oldComments,
                {text: comment, user: author}
            ]
            return Object.assign({}, state, {[postId]: updatedComments});
        default:
          return state;
      }
}

export default comments;