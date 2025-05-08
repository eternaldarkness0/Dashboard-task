import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[10vh] overflow-hidden flex items-center border-b-1 border-b-[#313b54]'>

        <div className='text-white flex items-center justify-center sm:justify-between w-[90%] md:w-[80%] mx-auto'>
            <h1 className='hidden sm:flex md:text-xl lg:text-2xl'>Hi Arthur, welcome! You have 12 open tasks.</h1>

            <div className='flex items-center gap-4 cursor-pointer'>
                <input type="text" placeholder='Search' className='lg:w-[480px] lg:h-[48px] bg-[#313b54] px-4 py-3 rounded-full placeholder:text-lg outline-none'/>
                <div className='p-2 w-11 h-11 bg-blue-900 transition-all duration-300 hover:bg-blue-800 rounded-full flex items-center justify-center text-xl'>
                    AR
                </div>
            </div>
        </div>

    </div>
    
  )
}

export default Navbar