// interface ProfileLayoutProps {
//   children: React.ReactNode
// }

// const ProfileLayout = ({ children }: ProfileLayoutProps) => {
const ProfileLayout = ({ children }: LayoutProps<'/profile'>) => {
  return (
    <div>
      <h2>ProfileLayout</h2>
      <br />
      {children}
      <br />
    </div>
  )
}

export default ProfileLayout
