import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'

interface InputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'date'
  idName: string
  placeholder?: string
  value?: string | number
  mask?: string
  className?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  withBackground: boolean
  readOnly?: boolean
  withIcon?: boolean
}

const Input: React.FC<InputProps> = ({
  type,
  idName,
  placeholder,
  required,
  value,
  mask,
  className,
  onKeyDown,
  onChange,
  onBlur,
  withBackground,
  readOnly,
  withIcon,
}) => {
  const [classNameDefault, setClassNameDefault] = useState('')

  const handleClassname = () => {
    if (withBackground) {
      setClassNameDefault(
        'w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500',
      )
    } else {
      setClassNameDefault(
        'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-300 dark:focus:border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 peer',
      )
    }
  }

  useEffect(() => {
    handleClassname()
  })

  return (
    <InputMask
      type={type}
      id={idName}
      name={idName}
      mask={mask || ''}
      placeholder={placeholder}
      value={value}
      className={`${classNameDefault} ${className} ${withIcon ? 'pl-10' : ''}`}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      readOnly={readOnly}
    />
  )
}

export default Input
