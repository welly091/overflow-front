import { state, useState } from 'react'
import useQuestion from '../hooks/useQuestion'

export default function Main() {

  const { question_resources, question_loading } = useQuestion();
  console.log(question_resources)
  console.log(question_loading)

  return (
    <>
      <form>
        <label>
          <input name='' className='flex-auto items-center w-full ml-96 mt-6 max-w-md mx-auto shadow rounded border-0 p-3 border-gray-800' type='text' placeholder='search..' />
        </label>
        <button type='submit' className='ml-4 rounded-lg bg-slate-400 text-white px-8 py-2'>Submit</button>
      </form>
      {question_loading || !question_resources ? null :
        question_resources.map((question, idx) => {
          return (
            <div key={idx} className='flex-auto ml-96 pr-96 w-full box-border h-32 w-32 p-4 border-4 ... mt-16'>
              <h3 className='text-slate-400'>{question.title}</h3>
              <p>{question.content}</p>
            </div>
          )
        })
      }
    </>
  );
}

