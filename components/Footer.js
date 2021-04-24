const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer>
        Competent Software/Web Developer | Fullstack developer {currentYear}
      </footer>
    </>
  )
}

export default Footer
