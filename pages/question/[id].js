import { useRouter } from 'next/router';
import useComment from '../../hooks/useComment';
import useQuestion from '../../hooks/useQuestion';
import { useEffect, useState,useRef } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/auth';
import Popup from 'reactjs-popup';

export const filteredCommentsURL = process.env.NEXT_PUBLIC_QUESTION_URL + "/";
export const URL = process.env.NEXT_PUBLIC_API_URL

export default function Question() {
    const { tokens, logout, user } = useAuth();
    const [comments, setComments] = useState([])
    // const { getFilteredComment } = useComment()
    const router = useRouter();
    const { question_resources, question_loading } = useQuestion();
    let question = "";

    function config() {
        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        };
    }

    const getComment = async (id) => {
        if (router.query.id) {
            axios.get(filteredCommentsURL + router.query.id + "/comment")
                .then((res) => {
                    setComments(res.data)
                })
        }
    }

    function handleUpdateComment(event){
        event.preventDefault()
        let commentURL = URL + "/comment/" + event.target.input.value + "/"
        let newComment={
            content: event.target.comment.value,
            username: user.username,
            question: router.query.id,
            user: user.id
        }
        console.log(newComment)
        axios.put(commentURL, newComment, config())
        event.target.reset()
    }

    function handleNewComment(event) {
        event.preventDefault();
        const commentURL = URL + "/question/" + router.query.id + "/comment";
        const newComment = {
            content: event.target.comment.value,
            username: user.username,
            question: router.query.id,
            user: user.id
        };
        axios.post(commentURL, newComment, config());
        event.target.reset()
    }

    function handleDeleteComment(id){
        const commentURL = URL + "/comment/" + id + "/"
        axios.delete(commentURL, config());
        
    }

    useEffect(() => {
        getComment()
    }, [router])


    if (!question_loading) {
        let [q] = question_resources.filter((question) => parseInt(question.id) === parseInt(router.query.id))
        question = q
    }

    return (

        <div>
            <div>{question ? question.title : null}</div>
            <div>{question ? question.content : null}</div>
            { user && user.id === question.user ?
            <div>
                <button className="p-4 uppercase bg-red-300 rounded text-emerald hover:bg-red-100 m-1">Delete</button>
                <button className="p-4 uppercase bg-cyan-200 rounded text-emerald hover:bg-red-100 m-1">Edit</button>
            </div>:<></>
            }
            {comments ? comments.map((c, i) => (
                <div key={i}>
                    <div>{c.content}</div>
                    { user && user.id === c.user ? 
                    <>
                        <button className="p-4 uppercase bg-red-300 rounded text-emerald hover:bg-red-100 m-1" onClick={()=>handleDeleteComment(c.id) } >Delete</button>
                        <Popup  trigger={<button className="p-4 uppercase bg-cyan-200 rounded text-emerald hover:bg-red-100 m-1">Edit</button>} position="right center">
                        <form onSubmit={handleUpdateComment}>
                            <textarea name="comment" defaultValue={c.content}></textarea>
                            <input type="hidden" name="input" value={c.id}></input>
                            <button className="p-4 uppercase bg-cyan-500 rounded text-emerald hover:bg-red-100 m-1" type="submit" >Submit</button>
                        </form>
                        </Popup>
                    </>
                     :<></>}
                </div>
            )) : null}
            {user ?
                <form onSubmit={handleNewComment}>
                    <label htmlFor='comment'>New Comment</label>
                    <textarea name='comment' placeholder='comment here...'></textarea>
                    <button type='submit'>Submit Comment</button>
                </form> : null}
        </div>

    );
}