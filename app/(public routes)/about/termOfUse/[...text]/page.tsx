interface DynamicPageProps {
  params: Promise<{ text: string[] }>
}

const DynamicPage = async ({ params }: DynamicPageProps) => {
  const { text } = await params
  if (text.length > 3) {
    // redirect to 404
  }
  const req = text.join('/')
  console.log(`fetch to api :getPageTextFor(${req})`, req)
  return <div>DynamicPage</div>
}

export default DynamicPage

// page.tsx > /about/views || /about/views/version-2 || /about/setting/views/one-love || /about/setting/views/one-love/v2
