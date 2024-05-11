import React from 'react'
import Card from '@/components/Atoms/Card'
import Label from '@/components/Atoms/Label'
import Link from 'next/link'

export default function Index() {
  return (

    <div className="grid grid-cols-2 w-full">
      <Link
        href={"/fit"}
        className='cursor-pointer'
      >
        <div className="flex justify-center item-center">
          <Card
            key={1}
            backgroundColor="bg-[url('/images/fit.jpg')] bg-cover"
            className='h-[50vh] w-[90%] flex justify-center items-center'
          >
            <Label
              text='MONTE SUA SÉRIE COM A IA'
              className='cursor-pointer text-2xl text-center px-5 py-5 bg-[#975743] rounded-lg'
              color='text-white'
              fontWeight='bolder'
            />
          </Card>
        </div>
      </Link>

      <Link
        href={"/food"}
        className='cursor-pointer'
      >
        <div className="flex justify-center ">
          <Card
            backgroundColor="bg-[url('/images/food.jpg')] bg-contain no-repeat"
            className='h-[50vh] w-[90%] flex justify-center items-center'
          >
            <Label
              text='CRIA SUA DIETA PERSONALIZADA'
              className='cursor-pointer text-2xl text-center px-5 py-5 bg-[#b9999e] rounded-lg'
              color='text-white'
              fontWeight='bolder'
            />
          </Card>
        </div>
      </Link>
    </div>

  )
}
