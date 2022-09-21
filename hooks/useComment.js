import axios from 'axios';
import useSWR from 'swr';

export const oneCommentURL = process.env.NEXT_PUBLIC_API_URL + "/comment/";
export const filteredCommentsURL = process.env.NEXT_PUBLIC_QUESTION_URL + "/";


import { useAuth } from '../contexts/auth';

export default function useComment() {

  const { tokens, logout } = useAuth();

  // const { data, error, mutate } = useSWR([apiUrl, tokens], fetchComment);

  // async function fetchComment(url) {
  //   if (!tokens) {
  //     return;
  //   }
  //   try {
  //     const response = await axios.get(url, config());
  //     return response.data;
  //   } catch (err) {
  //     handleError(err);
  //   }
  // }

  // async function createComment(info) {
  //   try {
  //     await axios.post(apiUrl, info, config());
  //     mutate(); // mutate causes complete collection to be refetched
  //   } catch (err) {
  //     handleError(err);
  //   }
  // }

  // async function deleteComment(id) {

  //   try {
  //     const url = apiUrl + id;
  //     await axios.delete(url, config());
  //     mutate(); // mutate causes complete collection to be refetched
  //   } catch (err) {
  //     handleError(err);
  //   }
  // }

  // async function updateComment(id, info) {
  //   try {
  //     const url = apiUrl + id;
  //     await axios.put(url, info, config());
  //   } catch (err) {
  //     handleError(err);
  //   }
  // }



  // helper function to handle getting Authorization headers EXACTLY right

  async function getFilteredComment(question_id) {
    try {
      const response = await axios.get(filteredCommentsURL + question_id + "/comment", config());
      return response.data
    } catch (err) {
      handleError(err);
    }
  }


  function config() {
    return {
      headers: {
        'Authorization': 'Bearer ' + tokens.access
      }
    };
  }

  function handleError(err) {
    console.error(err);
    // currently just log out on error
    // but a common error will be short lived token expiring
    // STRETCH: refresh the access token when it has expired
    logout();
  }

  return {
    // comment_loading: tokens && !error && !data,
    getFilteredComment,
    // createComment,
    // deleteComment,
    // updateComment,
  };
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/