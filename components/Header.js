import Link from 'next/link'
import { useAuth } from '../contexts/auth';

function Header() {

  const { user, logout } = useAuth()

  return (
    <header className='flex justify-between items-center bg-green-400 p-3.5'>
      <h1 className='text-4xl'>Code Overflow</h1>
      <div>
        <nav>
          <Link href={"/"}>
            <a className="inline-block w-20 text-white bg-green-600 p-0.5 mx-0.5 rounded border border-black">Home</a>
          </Link>
          <Link href={'/about-us'} >
            <a className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded border border-black text-center">About Us</a>
          </Link>
          {
            user && <p className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded border border-black text-center">{user.username}</p>
          }
          <button onClick={logout} className="inline-block w-20 text-white bg-green-600 p-0.5 mx-0.5 rounded border border-black">Sign Up</button>
          {user ?
            <p onClick={logout} className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded border border-black text-center">Logout</p> :
            <Link href={'/sign-up'} >
              <a className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded border border-black text-center">Sign in</a>
            </Link>}
        </nav>
      </div>
    </header>
  );
}

export default Header;