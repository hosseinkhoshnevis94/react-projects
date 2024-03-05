import React from 'react'
import styles from './Container.module.css'

const Container = ({children,appTitle}) => {

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{appTitle}</h2>
      <div>{children}</div>
      </section>
  )
}

export default Container