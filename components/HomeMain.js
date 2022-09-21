import useQuestion from '../hooks/useQuestion'
import Link from 'next/link';
import QuestionForm from "../components/Form";

export default function Main(props) {

  const { question_resources, question_loading, createQuestion } = useQuestion();


  return (
    <>
    <form>
      <label>
        <input id='search-bar' name='' className='flex-auto items-center w-full ml-96 mt-6 max-w-md mx-auto shadow rounded border-0 p-3 border-gray-800 mr-auto m-auto' type='text' placeholder='search..'/>
      </label>
      <button id='search-button'type='submit' className='ml-4 rounded-lg bg-slate-400 text-white px-8 py-2'>Submit</button>
    </form>

      <div className=''>
        <nav className="flex-auto py-4 px-6 border-b border-gray-200">
          <h1>Common Categories</h1>
          <li href="/">
            <a>Data Structures</a>
          </li>
          <li href="">
            <a>Javascript</a>
          </li>
          <li href=''>
            <a>Python</a>
          </li>
          <li href=''>
            <a>Career Readiness</a>
          </li>
        </nav>
      </div>

      {/* <button>+ Add Question</button> */}
      <div className=''>
        <nav className="flex-auto py-4 px-6 border-b border-gray-200">
          <h1>Level</h1>
          <li href="/">
            <a>102</a>
          </li>
          <li href="">
            <a>201</a>
          </li>
          <li href=''>
            <a>301</a>
          </li>
          <li href=''>
            <a>401</a>
          </li>
        </nav>
      </div>

      {question_loading || !question_resources ? null :
        question_resources.map((question, idx) => (
          <div key={idx} className='flex-auto ml-96 pr-96 w-full box-border h-32 w-32 p-4 border-4 ... mt-16'>
            <Link href={{
              pathname: `/question/${question.id}`,
            }}>
              <a className='text-slate-400'>
                <div>{question.title}</div>
                <div>{question.content}</div>
              </a>
            </Link>
          </div>
        ))
      }
      <QuestionForm create={createQuestion} />
    </>
  );
}

