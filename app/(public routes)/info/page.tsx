import { redirect } from 'next/navigation'
import React from 'react'

const LegacyInfoPage = () => {
  redirect('/about')
  return <div>LegacyInfoPage</div>
}

export default LegacyInfoPage
