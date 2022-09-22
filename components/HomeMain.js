import useQuestion from '../hooks/useQuestion'
import Link from 'next/link';
import QuestionForm from "../components/Form";
import { useAuth } from '../contexts/auth';
import Question from './Question';

export default function Main(props) {

   const { question_resources, question_loading, createQuestion } = useQuestion();
   const { user } = useAuth();

   return (
      <>
         <div>
            <h1 className='text-center mr-24 mt-0 text-xl border-b-4 border-red-600 bg-black w-full text-white pt-5 pb-5 bg-gradient-to-r from-slate-500 text-opacity-50 '>Ask a Question by Using The Search Bar Below!</h1>
         </div>
         <div className='flex'>
            <aside class="float-left w-64" aria-label="Sidebar">
               <div class="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-black">
                  <ul class="space-y-4">
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="ml-3">102</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">201</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">301</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">401</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">Career Readiness</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </aside>
            <div className='w-full'>
               <form className='mx-auto mb-16 w-full text-center'>
                  <label>
                     <input id='search-bar' name='' className='inline-block items-center w-full mt-8 max-w-md mx-auto shadow rounded border-0 p-3 border-gray-800 shadow-lg border-double border-4 border-black mt-16' type='text' placeholder='search...' />
                  </label>
                  <button id='search-button' type='submit' className='ml-4 rounded-lg bg-green-700 text-white px-8 py-2 shadow-xlg hover:bg-green-700 transition transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300'>Submit</button>
               </form>
               {question_loading || !question_resources ? null :
                  question_resources.map((question, idx) => (
                     <Question key={idx} className='w-3/4' username={question.username} title={question.title} content={question.content} updated={question.updated_time} id={question.id} />
                  ))
               }
               {user ? <QuestionForm className='mx-auto' create={createQuestion} /> : null}
            </div>
         </div>
      </>
   );
}

