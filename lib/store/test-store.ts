import { create } from 'zustand'

interface TestStore {
  testText: string
  testText2: string
  setText: (v: string) => void
  clearText: () => void
}

export const useTestStore = create<TestStore>()((setTestStore) => {
  return {
    testText: '',
    testText2: '',
    setText: (inputValue: string) => {
      return setTestStore({ testText: inputValue })
    },
    clearText: () => {
      return setTestStore({ testText: '' })
    },
  }
})

// const useGlobalUser = create((setUser) => {
//   return {
//     user: null,
//     updateUser: () => {
//       setUser({ name: 'Alex', age: 42 })
//     },
//     clearUser: () => {
//       setUser(null)
//     },
//   }
// })

// const userStore = useGlobalUser()
// userStore.user
// userStore.updateUser()
// userStore.clearUser()
//
// import React from 'react'

// const UserComponent = () => {
//     const [user, setUser] = useState(null)

//     const updateUser = () => {
//         setUser({name:'Alex',age:42})
//      }

//      const clearUser = () => {
//         setUser(null)
//       }
//   return (
//     <div>UserComponent</div>
//   )
// }

// export default UserComponent
