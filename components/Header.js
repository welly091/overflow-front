import Link from 'next/link'
import { useAuth } from '../contexts/auth';

function Header() {

  const { user, logout } = useAuth()

  return (
    <header className='flex justify-between items-center bg-black p-3.5 font-serif'>
      <h1 className='text-4xl font-bold text-white'>Code Overflow</h1>
      <div>
        <nav>
          <Link href={"/"}>
            <a className="inline-block w-20 text-white bg-red-600 p-0.5 mx-0.5 rounded-lg border border-red-500">Home</a>
          </Link>
          <Link href={'/about-us'} >
            <a className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded-lg border border-black text-center">About Us</a>
          </Link>
          {
            user && <p className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded-lg border border-black text-center">{user.username}</p>
          }
          <button onClick={logout} className="inline-block w-20 text-white bg-red-600 p-0.5 mx-0.5 rounded-lg border border-red-500">Sign Up</button>
          {user ?
            <p onClick={logout} className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded-lg border border-black text-center">Logout</p> :
            <Link href={'/login'} >
              <a className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded-lg border border-black text-center">Sign in</a>
            </Link>}
        </nav>
      </div>
    </header>
  );
}

export default Header;