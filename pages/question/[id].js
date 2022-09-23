import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../contexts/auth';
import useQuestion from '../../hooks/useQuestion';
import axios from 'axios';
import Popup from 'reactjs-popup';
import Question from '../../components/Question';
import Comment from '../../components/Comment';

export const filteredCommentsURL = process.env.NEXT_PUBLIC_QUESTION_URL + "/";
export const URL = process.env.NEXT_PUBLIC_API_URL

export default function OneQuestion() {
    const { tokens, logout, user } = useAuth();
    const { question_resources, question_loading } = useQuestion();
    const [comments, setComments] = useState([])
    const [showModal, setShowModal] = useState(false)

    const router = useRouter();

    let question = "";

    function config() {
        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        };
    }

    function showQuestionModal() {
        if (showModal) {
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    }

    const getComment = async (id) => {
        if (router.query.id) {
            axios.get(filteredCommentsURL + router.query.id + "/comment")
                .then((res) => {
                    setComments(res.data)
                })
        }
    }

    function handleUpdateComment(event, id) {
        event.preventDefault()
        let commentURL = URL + "/comment/" + id + "/"
        let newComment = {
            content: event.target.comment.value,
            username: user.username,
            question: router.query.id,
            user: user.id,
        }
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

    function handleDeleteComment(id) {
        const commentURL = URL + "/comment/" + id + "/"
        axios.delete(commentURL, config());

    }

    function handleUpdateQuestion(event) {
        event.preventDefault();
        let updateQuestion = { ...question, content: event.target.content.value }
        axios.put(filteredCommentsURL + router.query.id + "/", updateQuestion, config())
        event.target.reset()
    }

    function handDeleteQuestion() {
        axios.delete(filteredCommentsURL + router.query.id + "/", config())
    }

    useEffect(() => {
        getComment()
        router.push('/')
    }, [router, comments])


    if (!question_loading) {
        let [q] = question_resources.filter((question) => parseInt(question.id) === parseInt(router.query.id))
        question = q
    }

    return (

        <div>
            <h3 className='text-4xl w-3/4 my-4 mx-auto font-bold'>Question</h3>
            {question ? <Question className='w-3/4' username={question.username} title={question.title} content={question.content} updated={question.updated_time} id={question.id} level={question.level} oneQuestion={true} /> : null}
            {user && user.id === question.user ?
                <div className='w-3/4 text-right mx-auto mb-4'>
                    <button className="p-2 font-medium uppercase bg-cyan-200 rounded text-emerald hover:bg-red-100 m-1" onClick={showQuestionModal}>Edit</button>
                    <button className="p-2 font-medium uppercase bg-red-300 rounded text-emerald hover:bg-red-100 m-1" onClick={() => handDeleteQuestion()}>Delete</button>
                    {showModal ? <form onSubmit={handleUpdateQuestion}>
                        <title defaultValue={question.title}></title>
                        <textarea className="w-1/2" name="content" defaultValue={question.content}></textarea>
                        <button className="p-2 font-medium uppercase bg-cyan-500 rounded text-emerald hover:bg-red-100 m-1" type="submit" >Submit</button>
                    </form> : null}
                </div> : <></>
            }
            {question ? <h3 className='text-3xl w-3/4 my-4 mx-auto font-bold'>Comments</h3> : null}
            {comments ? comments.map((c, i) => (
                <div key={i}>
                    {/* <div>{c.content}</div> */}
                    <Comment content={c.content} username={c.username} updated={c.updated_time} />
                    {user && user.id === c.user ?
                        <div className='w-3/4 mx-auto text-right'>
                            <Popup trigger={<button className="p-2 font-medium uppercase bg-cyan-200 rounded text-emerald hover:bg-red-100 m-1">Edit</button>} position="left">
                                <form onSubmit={(event) => handleUpdateComment(event, c.id)}>
                                    <textarea name="comment" defaultValue={c.content}></textarea>
                                    <button className="p-2 font-medium uppercase bg-cyan-500 rounded text-emerald hover:bg-red-100 m-1" type="submit" >Submit</button>
                                </form>
                            </Popup>
                            <button className="p-2 font-medium uppercase bg-red-300 rounded text-emerald hover:bg-red-100 m-1" onClick={() => handleDeleteComment(c.id)} >Delete</button>
                        </div>
                        : <></>}
                </div>
            )) : null}
            {user ?
                <form className='w-3/4 mx-auto' onSubmit={handleNewComment}>
                    <label className='block font-semibold text-xl' htmlFor='comment'>New Comment</label>
                    <textarea className='block w-full my-2 p-1 shadow' name='comment' placeholder='comment here...' required></textarea>
                    <button className="font-medium float-right p-2 uppercase bg-cyan-500 rounded text-emerald hover:bg-red-100 m-1" type='submit'>Submit Comment</button>
                </form> : null}
        </div>

    );
}