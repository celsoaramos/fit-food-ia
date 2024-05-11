import React, { useEffect, useState } from 'react'
import Button from '@/components/Atoms/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Breadcrumb from './Breadcrumb'

interface Props {
  name?: string
}

const Header = ({ name }: Props) => {

  const [formattedName, setFormattedName] = useState('')
  const [pathAtual, setPathAtual] = useState('')


  const router = useRouter()

  

  useEffect(() => {
    setPathAtual(router.pathname)
    setFormattedName(
      pathAtual.slice(1).charAt(0).toUpperCase() + pathAtual.slice(2),
    )
  }, [pathAtual])


  return (
      <header className="h-[10%] sm:w-[100%] xs:w-[95%] px-4 sm:flex sm:justify-between grid grid-cols-6 items-center">
        
        <div className="flex items-center xs:col-span-4">
          <Breadcrumb pageName={formattedName} />
        </div>
        
      </header>
  )
}

export default Header
