import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'

interface IconProps {
  icon: string
  color: string
  size: 'small' | 'medium' | 'large' | 'two' | 'three' | 'four' | 'five'
  tooltip?: string
  className?: string
  hasChildren?: boolean
  children?: React.ReactNode
}

const Icon: React.FC<IconProps> = ({ icon, color, size, className, hasChildren, children, tooltip }) => {
  const [sizeIcon, setSizeIcon] = useState('')
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const handleSizeIcon = () => {
    if (size === 'small') {
      setSizeIcon('text-xs')
    } else if (size === 'medium') {
      setSizeIcon('text-sm')
    } else if (size === 'large') {
      setSizeIcon('text-lg')
    } else if (size === 'two') {
      setSizeIcon('text-2xl')
    } else if (size === 'three') {
      setSizeIcon('text-3xl')
    } else if (size === 'four') {
      setSizeIcon('text-4xl')
    } else if (size === 'five') {
      setSizeIcon('text-5xl')
    }
  }

  useEffect(() => {
    handleSizeIcon()
  })


  return (
    hasChildren ? (
      <div className="flex items-center">
        <i className={`mdi ${icon} ${sizeIcon} ${color} ${className}`} />
        {children}
      </div>
    ) : (
      <i className={`mdi ${icon} ${sizeIcon} ${color} ${className}`} />
    )
  )

}

export default Icon
