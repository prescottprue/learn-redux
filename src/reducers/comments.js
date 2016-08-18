function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
    console.log('Adding a comment');
      // return existing state with the new one
      return [...state,{
        user: action.author,
        text: action.comment
      }]
      //Add code here to add comment to firebase

    case 'REMOVE_COMMENT':
    console.log('Removing a comment');
    // we need to return the new state without the deleted comment
    return [
      //from the beginning of the array, up to the coment we want deleted
      ...state.slice(0, action.i),
      // after the deleted comment, to the end
      ...state.slice(action.i + 1)
    ]
    //Add code here to delete comments from firebase/database

    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined'){
    return {
      // take the current state
      ...state,
      // overwrite tis post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}


export default comments;
