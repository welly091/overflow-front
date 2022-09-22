export default function reset() {
  return (
    <>
    <form className='flex flex-col w-3/5 p-3 pb-12 m-auto my-5 space-y-5 text-center border-2 border-black rounded-md shadow-lg mt-28 shadow-black'>
      <label className='flex flex-row mb-4 ml-20 text-m font-bold'> New Password
        <input name='password' type='password' placeHolder='password' className='mx-4 bg-gray-100' />
      </label>
      <label className='flex flex-row mb-4 ml-4 text-m font-bold'> Re-enter Password
        <input className='mx-4 bg-gray-100' type='password' placeholder='re-enter password' name='re-enter password'/>
      </label>
      <button className='absolute flex flex-row justify-center w-20 h-8 bg-blue-300 border-blue-600 right-80 bottom-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300 ... font-semibold shadow-lg shadow-blue-500/50 ... rounded-lg'>Reset</button>
    </form>
    </>
  )
}