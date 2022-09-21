import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useAuth } from '../contexts/auth';

export default function Login(props) {

  const { user, login } = useAuth()

  function handleSubmit(e) {
    e.preventDefault();
    login(e.target.username.value, e.target.password.value)
    
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col w-3/5 p-3 pb-12 m-auto my-5 space-y-5 text-center border-2 border-black rounded-md shadow-lg mt-28 shadow-black'>
        <label className='flex flex-row mb-4 ml-8 text-4xl font-bold'> Username
          <input name='username' type='text' placeholder='username or email' className='mx-4 bg-gray-100' />
        </label>
        <label className='flex flex-row mb-4 ml-10 text-4xl font-bold'> Password
          <input name='password' type='password' placeHolder='password' className='mx-4 bg-gray-100' />
        </label>
        <button type='submit' className='absolute flex flex-row justify-center w-20 h-8 bg-blue-300 border-blue-600 right-80 bottom-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300 ... font-semibold shadow-lg shadow-blue-500/50 rounded-lg'>Login</button>
      </form>
    </>
  )
}