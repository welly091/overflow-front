import { useRouter } from 'next/router'
import useComment from '../../hooks/useComment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/auth';
import useQuestion from '../../hooks/useQuestion';

export const filteredCommentsURL = process.env.NEXT_PUBLIC_QUESTION_URL + "/";

export default function Question(){
    const { tokens, logout } = useAuth();
    const[comments, setComments] = useState([])
    const{getFilteredComment,} = useComment()
    const{data, question_loading} = useQuestion()
    const router = useRouter();
    const question = router.query

   function config() {
        return {
          headers: {
            'Authorization': 'Bearer ' + tokens.access
          }
        };
    }
   
    const getData = async() =>{
        console.log(question.id)
        axios.get(filteredCommentsURL + question.id+"/comment")
        .then((res) =>{
            setComments(res.data)
        })
    }

    const updateQuestion = async() => {
        
    }

    useEffect(()=>{
        
        getData()
        // question_loading ? null :setComments(data.filter(question.id == data.question.id))  
    },[])
    
        
   
    return (
        
        <div>
            <div>{question.title}</div>
            <div>{question.content}</div>
            {comments ? comments.map((c,i) =>(
                <div key={i}>{c.content}</div>
            )) : <div></div>}
        </div>
        
    );
}




