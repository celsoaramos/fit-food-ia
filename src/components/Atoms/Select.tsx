import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'

interface Option {
  value: string | number
  label: string
}

interface SelectProps {
  idName: string
  firstItem: string
  valueFirstItem: string | number
  value: string | number
  withBackground: boolean
  options?: Option[]
  className?: string
  required?: boolean
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void
  onKeyDown?: (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLSelectElement>,
  ) => void
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLSelectElement>,
  ) => void
}

const Select: React.FC<SelectProps> = ({
  idName,
  firstItem,
  valueFirstItem,
  required,
  value,
  options,
  withBackground,
  className,
  onKeyDown,
  onChange,
  onBlur,
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
    <select
      id={idName}
      name={idName}
      value={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onBlur={onBlur}
      className={`text-gray-500 ${classNameDefault} ${className}`}
      required={required}
    >
      <option
        value={valueFirstItem}
        className={`text-gray-500 ${classNameDefault}`}
      >
        {firstItem}
      </option>

      {options?.map((option) => (
        <option
          key={option.label}
          value={option.value}
          className="text-gray-500"
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
