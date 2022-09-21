import { useRouter } from 'next/router';
import useComment from '../../hooks/useComment';
import useQuestion from '../../hooks/useQuestion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/auth';

export const filteredCommentsURL = process.env.NEXT_PUBLIC_QUESTION_URL + "/";

export default function Question() {
    const { tokens, logout } = useAuth();
    const [comments, setComments] = useState([])
    // const { getFilteredComment } = useComment()
    const router = useRouter();
    const { question_resources, question_loading } = useQuestion();
    let question;

    function config() {
        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        };
    }

    const getData = async (id) => {
        if (router.query.id) {
            axios.get(filteredCommentsURL + router.query.id + "/comment")
                .then((res) => {
                    setComments(res.data)
                })
        }
    }

    useEffect(() => {
        getData()
    }, [router])


    if (!question_loading) {
        let [q] = question_resources.filter((question) => parseInt(question.id) === parseInt(router.query.id))
        question = q
    }

    return (

        <div>
            <div>{question.title}</div>
            <div>{question.content}</div>
            {comments ? comments.map((c, i) => (
                <div key={i}>{c.content}</div>
            )) : <div></div>}
        </div>

    );
}




