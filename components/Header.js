import Link from 'next/link'
import { useAuth } from '../contexts/auth';
import Logo from '../public/images/pythonlogo.PNG'
import Image from 'next/image';


function Header() {

  const { user, logout } = useAuth()

  return (
    <header className='flex justify-between items-center p-3.5 font-serif'>
      <Image src={Logo} className="max-w-full" layout="" alt="Logo" />
      <h1 className='pl-52 text-4xl subpixel-antialiased tracking-widest  ml-0'>Code Overflow</h1>
      <div>
        <nav>
          <Link href={"/"}>
            <a className="inline-block w-20 text-white bg-red-600 p-0.5 mx-0.5 rounded-lg border-red-500 pl-4 font-serif ">Home</a>
          </Link>
          <Link href={'/about-us'} >
            <a className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded-lg border-black text-center font-serif ">About Us</a>
          </Link>
          {
            user && <p className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded-lg border border-black text-center">{user.username}</p>
          }
          <Link href={'/sign-up'}>
            <a onClick={logout} className="inline-block w-20 text-white bg-red-600 p-0.5 mx-0.5 rounded-lg border-red-500 font-serif transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 ...">Sign Up</a>
          </Link>
          
          {user ?
            <p onClick={logout} className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded-lg border-black text-center">Logout</p> :
            <Link href={'/login'} >
              <a className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded-lg border border-black text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 ...">Sign in</a>
            </Link>}
        </nav>
      </div>
    </header>
  );
}

export default Header;