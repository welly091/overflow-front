import { useRouter } from 'next/router'
import useComment from '../../hooks/useComment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/auth';

export const filteredCommentsURL = process.env.NEXT_PUBLIC_QUESTION_URL + "/";

export default function question(){
    const { tokens, logout } = useAuth();
    const[comments, setComments] = useState([])
    const{getFilteredComment} = useComment()
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
        axios.get(filteredCommentsURL + question.id+"/comment", config())
        .then((res) =>{
            setComments(res.data)
        })
    }

    useEffect(()=>{
        getData(question.id)
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




