import { useState } from 'react'
import Header from '../Molecules/Header'

interface LayoutProps {
  children?: any 
  backgroundColor?: string 
}

const Layout = (props: LayoutProps) => {


  const [isNavOpenMobile, setIsNavOpenMobile] = useState(false)

  return (
    <div className={`flex sm:w-full h-screen`}>
      <div className={`${isNavOpenMobile ? 'absolute inset-0 bg-[#e2e8f061]' : 'hidden'}`}></div>
      <div className={`flex w-full ${props.backgroundColor} bg-cover h-[30%]`}>

        <main className="flex-1 h-[100vh] overflow-y-auto no-scrollbar ">
          <Header />
          <div className="px-4 max-w-screen-xl mx-auto">
            <div className="mt-4 p-4">{props.children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
