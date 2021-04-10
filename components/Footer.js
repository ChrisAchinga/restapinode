import styles from '@styles/Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className={styles.footer}>
        Competent Software/Web Developer | Fullstack developer {currentYear}
      </footer>
    </>
  )
}

export default Footer
