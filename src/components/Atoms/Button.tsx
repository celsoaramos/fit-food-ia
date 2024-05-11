import React, { Children, useEffect, useState } from 'react'

interface ButtonProps {
  type: 'default' | 'submit' | 'cancel' | 'text' | 'disabled' | 'icon' | 'ideiaProjeto' | 'projetoSimilarGithub'
  label: string
  textSize?: 'small' | 'medium' | 'large' | 'two' | 'three' | 'four'
  fontWeight?: 'lighter' | 'normal' | 'semibolder' | 'bolder'
  className?: string
  onClick?: (e?: any) => void | string | number | boolean
  disabled?: boolean
  children?: React.ReactNode | Array<React.ReactNode>
  hasChildren?: boolean
}

const Button = ({
  label,
  onClick,
  disabled,
  className,
  type,
  textSize,
  fontWeight,
  children,
  hasChildren,
}: ButtonProps) => {
  const [typeButton, setTypeButton] = useState('')
  const [textSizeButton, setTextSizeButton] = useState('')
  const [fontWeightButton, setFontWeightButton] = useState('')

  const handleType = () => {
    if (type === 'projetoSimilarGithub') {
      setTypeButton(
        'block w-full max-w-xs mx-auto bg-[#f47556] hover:bg-[#f47556] focus:bg-[#f47556] text-white font-bold px-3 py-3 rounded-lg',
      )
    } else if (type === 'ideiaProjeto') {
      setTypeButton(
        'block w-full max-w-xs mx-auto bg-[#faba26] hover:bg-[#faba26] focus:bg-[#faba26] text-white font-bold px-3 py-3 rounded-lg',
      )
    } else if (type === 'default') {
      setTypeButton(
        'block w-full max-w-xs mx-auto bg-primary-500 hover:bg-primary-700 text-white font-bold px-3 py-3 rounded-lg',
      )
    } else if (type === 'submit') {
      setTypeButton(
        'block w-full max-w-xs mx-auto bg-primary-500 hover:bg-primary-700 focus:bg-primary-70 text-white font-bold px-3 py-3 rounded-lg',
      )
    } else if (type === 'cancel') {
      setTypeButton(
        'block w-full',
      )
    } else if (type === 'text') {
      setTypeButton('bg-transparent text-gray-500 font-semibold py-2 px-1')
    } else if (type === 'disabled') {
      setTypeButton(
        'block w-full max-w-xs mx-auto bg-gray-500 text-white font-bold px-3 py-3 rounded-lg cursor-not-allowed',
      )
    } else if (type === 'icon') {
      setTypeButton('bg-transparent text-gray-500 font-semibold py-2 px-1')
    }
  }

  const handleTextSize = () => {
    if (textSize === 'small') {
      setTextSizeButton('text-xs')
    } else if (textSize === 'medium') {
      setTextSizeButton('text-sm')
    } else if (textSize === 'large') {
      setTextSizeButton('text-lg')
    } else if (textSize === 'two') {
      setTextSizeButton('text-2xl')
    } else if (textSize === 'three') {
      setTextSizeButton('text-3xl')
    } else if (textSize === 'four') {
      setTextSizeButton('text-4xl')
    }
  }

  const handleFontWeight = () => {
    if (fontWeight === 'lighter') {
      setFontWeightButton('font-light')
    } else if (fontWeight === 'normal') {
      setFontWeightButton('font-normal')
    } else if (fontWeight === 'semibolder') {
      setFontWeightButton('font-semibold')
    } else if (fontWeight === 'bolder') {
      setFontWeightButton('font-bold')
    }
  }

  useEffect(() => {
    handleType()
    handleTextSize()
    handleFontWeight()
  })

  return (
    <button
      onClick={onClick}
      className={`${typeButton} ${textSizeButton} ${fontWeightButton} ${className}`}
      disabled={disabled}
    >
      {hasChildren ? children : label}
    </button>
  )
}

export default Button
