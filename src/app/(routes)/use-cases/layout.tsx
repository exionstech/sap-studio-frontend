interface UseCaseLayoutProps {
        children: React.ReactNode;
}

const UseCaseLayout = (
        { children }: UseCaseLayoutProps
) => {
  return (
    <div className="w-full min-h-screen scroll-smooth">
      {children}
    </div>
  )
}

export default UseCaseLayout
