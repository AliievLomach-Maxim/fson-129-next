'use client'

import { useTestStore } from '@/lib/store/test-store'

const Settings = () => {
  // const testStore = useTestStore()
  const testText = useTestStore((storeObj) => storeObj.testText)
  console.log('Settings render')
  return (
    <div>
      Settings
      <hr />
      <h2>testText::{testText}</h2>
    </div>
  )
}

export default Settings
