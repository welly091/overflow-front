import Header from '../components/Header'
import Footer from '../components/Footer'

export default function signUp(props){
  return(
    <>
    <form className='flex flex-col w-3/5 p-3 pb-12 m-auto my-5 space-y-5 font-serif text-center border-2 border-black rounded-md shadow-lg mt-28 shadow-black'>
      <label className='flex flex-row mb-4 text-4xl font-bold ml-44'> Username
        <input className='mx-4 bg-gray-100' type='text' placeholder='username' name='username'/>
      </label>
      <label className='flex flex-row mb-4 ml-64 text-4xl font-bold'> Email
        <input className='mx-4 bg-gray-100' type='text' placeholder='email' name='email'/>
      </label>
      <label className='flex flex-row mb-4 ml-48 text-4xl font-bold'> Password
        <input className='mx-4 bg-gray-100' type='password' placeholder='password' name='password'/>
      </label>
      <label className='flex flex-row mb-4 ml-4 text-4xl font-bold'> Re-enter Password
        <input className='mx-4 bg-gray-100' type='password' placeholder='re-enter password' name='re-enter password'/>
      </label>
      <button className='absolute flex flex-row justify-center w-20 h-8 bg-blue-300 border-blue-600 right-80 bottom-48 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300 ... font-semibold shadow-lg shadow-blue-500/50 rounded-lg'>Sign Up</button>
    </form>
    </>
  )
}