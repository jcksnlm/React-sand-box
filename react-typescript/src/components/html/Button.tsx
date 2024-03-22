import React from "react"

type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({variant, children, ...buttonProperties}: ButtonProps) => {
  return (
    <button 
      className={`class-with-${variant}`} 
      {...buttonProperties}>{children}
      </button>
  )
}
