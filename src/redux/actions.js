//remove
export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index,
    //index: index     also works(ES6)
  };
}

export function addPost(post) {
  return {
    type: "ADD_POST",
    post,
  };
}
//adding post
