import React, { useEffect, useState } from 'react'

interface LabelProps {
  text: string
  textSize?: 'small' | 'medium' | 'large' | 'two' | 'three' | 'four'
  fontWeight?: 'lighter' | 'normal' | 'semibolder' | 'bolder'
  color: string
  htmlFor?: string
  className?: string
}

const Label: React.FC<LabelProps> = ({
  text,
  textSize,
  fontWeight,
  color,
  htmlFor,
  className,
}) => {
  const [textSizeLabel, setTextSizeLabel] = useState('')
  const [fontWeightLabel, setFontWeightLabel] = useState('')

  const handleTextSize = () => {
    if (textSize === 'small') {
      setTextSizeLabel('text-xs')
    } else if (textSize === 'medium') {
      setTextSizeLabel('text-sm')
    } else if (textSize === 'large') {
      setTextSizeLabel('text-lg')
    } else if (textSize === 'two') {
      setTextSizeLabel('text-2xl')
    } else if (textSize === 'three') {
      setTextSizeLabel('text-3xl')
    } else if (textSize === 'four') {
      setTextSizeLabel('text-4xl')
    }
  }

  const handleFontWeight = () => {
    if (fontWeight === 'lighter') {
      setFontWeightLabel('font-light')
    } else if (fontWeight === 'normal') {
      setFontWeightLabel('font-normal')
    } else if (fontWeight === 'semibolder') {
      setFontWeightLabel('font-semibold')
    } else if (fontWeight === 'bolder') {
      setFontWeightLabel('font-bold')
    }
  }

  useEffect(() => {
    handleTextSize()
    handleFontWeight()
  })

  return (
    <label
      htmlFor={htmlFor}
      className={`font-sans ${textSizeLabel} ${color} ${fontWeightLabel} ${className}`}
    >
      {text}
    </label>
  )
}

export default Label
