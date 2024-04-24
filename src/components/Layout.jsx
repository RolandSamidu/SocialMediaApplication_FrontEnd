import React from 'react'
import MainSideBar from './MainSideBar'

const Layout = ({children}) => {
  return (
    <div className='flex'>
        <div className='flex w-full'>
            Nav bar
        </div>
        <div className='flex '>
            <div className='flex-1'>
                <MainSideBar/>
            </div>
            <div className='flex-1'>
                {children}
            </div>
            <div className='flex-1'>
                Sidebar2
            </div>
        </div>
    </div>
  )
}

export default Layout