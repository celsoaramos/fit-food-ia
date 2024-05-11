import React from 'react'
import { Transition } from 'react-transition-group'

interface CustomPopoverProps {
  isOpen: boolean
  content: React.ReactNode
}

const CustomPopover = ({ isOpen, content }: CustomPopoverProps) => {
  const duration = 300

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 1,
  }

  const getTransitionStyles = (state: string) => {
    switch (state) {
      case 'entering':
        return { opacity: 0 }
      case 'entered':
        return { opacity: 1 }
      case 'exiting':
        return { opacity: 0 }
      case 'exited':
        return { opacity: 0 }
      default:
        return {}
    }
  }

  return (
    <Transition in={isOpen} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...getTransitionStyles(state),
            position: 'absolute',
            zIndex: 9999,
          }}
          className="custom-popover-container bg-gray-800 rounded-lg p-4 transition-opacity"
        >
          <div className="custom-popover-content">
            <div className="custom-popover-square w-4 h-1 rounded-full" />
            {content}
          </div>
        </div>
      )}
    </Transition>
  )
}

export default CustomPopover
