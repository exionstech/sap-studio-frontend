interface ContactUsLayoutProps {
        children: React.ReactNode;
}

const ContactUsLayout = (
        { children }: ContactUsLayoutProps
) => {
  return (
    <div className="w-full min-h-screen scroll-smooth">
      {children}
    </div>
  )
}

export default ContactUsLayout
