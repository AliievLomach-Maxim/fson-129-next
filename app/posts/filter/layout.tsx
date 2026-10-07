interface FilterLayoutProps {
  children: React.ReactNode
  sidebar: React.ReactNode
}
const FilterLayout = ({ children, sidebar }: FilterLayoutProps) => {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <aside style={{ minWidth: '200px' }}>{sidebar}</aside>
      {children}
    </div>
  )
}

export default FilterLayout
