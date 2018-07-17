// a reducer takes in two things
// 1. the action (info about what happened)
// 2. a copy of current state.
// it then returns an updated state updated based on the action

function posts(state = [], action) {
    console.log(state, action);
    return state;
}

export default posts;