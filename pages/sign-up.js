import axios from "axios"
import { useAuth } from '../contexts/auth';
const createUserURL = process.env.NEXT_PUBLIC_API_URL + "/user/create/"

export default function Signup(props) {
  const { user, login } = useAuth()

  function handleCreateUser(event) {
    event.preventDefault();
    let newUser = {
      username: event.target.username.value,
      password: event.target.password.value,
      email: event.target.email.value
    }
    try {
      axios.post(createUserURL, newUser)
      login(newUser.username, newUser.password)
      event.target.reset()
    } catch (error) {
      console.log("Error")
    }
  }

  return (
    <>
      <form onSubmit={handleCreateUser}
        className='flex flex-col w-3/5 p-3 pb-12 m-auto my-5 space-y-5 text-center border-2 border-black rounded-md shadow-lg mt-28 shadow-black'>
        <label className='flex flex-row text-m font-bold pl-16'> Username
          <input className='mx-4 bg-gray-100 pl-20' type='text' placeholder='username' name='username' maxLength={16} />
        </label>
        <label className='flex flex-row mb-4 text-m font-bold pl-24'> Email
          <input className='mx-4 bg-gray-100 pl-20' type='text' placeholder='email' name='email' />
        </label>
        <label className='flex flex-row mb-4 text-m font-bold pl-16'> Password
          <input className='mx-4 bg-gray-100 pl-20' type='password' placeholder='password' name='password' />
        </label>
        <label className='flex flex-row mb-4 text-m font-bold'> Re-enter Password
          <input className='mx-4 bg-gray-100 pl-20' type='password' placeholder='re-enter password' name='re-enter password' />
        </label>
        <button type="submit"
          className='absolute flex flex-row justify-center w-20 h-8 bg-blue-300 border-blue-600 right-80 bottom-48 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300 ... font-semibold shadow-lg shadow-blue-500/50 rounded-lg'>
          Sign Up
        </button>
      </form>
    </>
  )
}