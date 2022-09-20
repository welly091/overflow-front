import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <Header/>
      <form className='flex flex-col w-5/6 p-4 m-auto my-5 space-y-5 text-center border-2 border-black rounded-md'>
        <label className='flex flex-row mb-4 text-4xl font-bold'> Username 
          <input name='username' type='text' placeholder='username or email' className='mx-4 bg-gray-100'/>
        </label>
        <label className='flex flex-row mb-4 text-4xl font-bold'> Password
          <input name='password' type='text' placeHolder='password' className='mx-4 bg-gray-100'/>
        </label>
        <Link href='/'>
        <button className='w-5/6 bg-blue-200 border-black'>Login</button>
      </Link>
      </form>
      <Footer/>
    </>
  )
}