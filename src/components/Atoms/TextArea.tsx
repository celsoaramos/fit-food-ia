import React, { useEffect, useState, ChangeEvent } from 'react'

interface InputProps {
  idName: string
  placeholder?: string
  value?: string | number
  className?: string
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  withBackground: boolean
  readOnly?: boolean
}

const TextArea: React.FC<InputProps> = ({
  idName,
  placeholder,
  required,
  value,
  className,
  onChange,
  withBackground,
  readOnly,
}) => {
  const [classNameDefault, setClassNameDefault] = useState('')

  const handleClassname = () => {
    if (withBackground) {
      setClassNameDefault(
        'w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500',
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
    <textarea
      id={idName}
      name={idName}
      placeholder={placeholder}
      value={value}
      className={`${classNameDefault} ${className}`}
      onChange={onChange}
      required={required}
      readOnly={readOnly}
    />
  )
}

export default TextArea
