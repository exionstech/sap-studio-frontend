interface AboutUsLayoutProps {
        children: React.ReactNode;
}

const AboutUsLayout = (
        { children }: AboutUsLayoutProps
) => {
  return (
    <div className="w-full min-h-screen scroll-smooth">
      {children}
    </div>
  )
}

export default AboutUsLayout
