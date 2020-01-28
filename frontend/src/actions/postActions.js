import { FETCH_POST, NEW_POST} from './types';

export const fetchPosts = () => dispatch =>  {
  
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POST,
      payload: posts
    }))
}
export const createPosts = (post) => dispatch =>  {
  console.log('action called')
  fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_POST,
      payload: post
    }));
}