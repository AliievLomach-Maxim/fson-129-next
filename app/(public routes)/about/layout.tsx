const AboutLayout = ({ children, settings }: LayoutProps<'/about'>) => {
  return (
    <>
      {settings}
      <br />
      <br />
      <br />
      {children}
    </>
  )
}

export default AboutLayout
