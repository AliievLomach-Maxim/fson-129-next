'use client'

interface ErrorPageProps {
  error: Error
  reset: () => void
}
const ErrorPage = ({ reset }: ErrorPageProps) => {
  //   return <div>ErrorPage: {error.message}</div>
  return (
    <div>
      <h2>Oops. something wrong. Pls reload the page</h2>
      <button onClick={reset}>Reload</button>
    </div>
  )
}

export default ErrorPage
