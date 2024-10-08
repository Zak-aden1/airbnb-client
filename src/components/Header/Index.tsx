import Logo from "../Logo/Index"

const Header = () => {
  return (
    <header className="p-4 flex justify-between border border-red-200">
    <Logo />

    <div className="flex gap-2 space-x-3 border-2 border-grey-300 px-4 py-2 rounded-full shadow-md shadow-gray-300">
      <p className="h:b hover:bg-gray-500">Anywhere</p>
      <div className="border border-l border-grey-300"></div>
      <p>Any week</p>
      <div className="border border-l border-grey-300"></div>
      <p className="text-gray-400">Add guests</p>
      <button className="bg-primary rounded-full p-1 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>

    <div className="flex gap-2 space-x-3 border border-grey-300 px-4 py-2 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 relative top-1">
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
    </svg>

    </div>
    </div>
  </header>
  )
}

export default Header