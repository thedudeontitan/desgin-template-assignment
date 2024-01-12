import React from 'react'
import styles from './styles/button.module.css'

interface ButtonProps {
    label: string
}

const Button: React.FC<ButtonProps> = ({label}) => {
  return (
    <div className={styles.main}>
        {label}
    </div>
  )
}

export default Button;
