import React, { createContext, useContext, useEffect, useState } from 'react'
import { db } from '../config/firebaseClient'
import { useCollection } from 'react-firebase-hooks/firestore'
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'
import { IFirebaseContext } from '../DTOs/FirebaseDTO'

const FirebaseContext = createContext({} as IFirebaseContext)

export function FirebaseProvider({ children }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const collectionRef = collection(db, 'users')

  //get
  const [users, loading, error] = useCollection(collection(db, 'users'), {
    snapshotListenOptions: { includeMetadataChanges: true }
  })

  const data = {
    name,
    age
  }
  //post
  const onSubmit = async () => {
    const ref = await addDoc(collectionRef, data)
    alert(`Adicionado ${ref.id}`)
  }
  //update
  const onUpdate = async (id, age) => {
    const newField = { age: age + 1 }
    const userDoc = doc(collectionRef, id)
    await updateDoc(userDoc, newField)
  }
  //delete
  const onDelete = async id => {
    const userDoc = doc(collectionRef, id)
    await deleteDoc(userDoc)
  }
  return (
    <FirebaseContext.Provider
      value={{
        name,
        setName,
        age,
        setAge,
        users,
        loading,
        error,
        onUpdate,
        onDelete,
        onSubmit
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}
export const useFirebase = () => useContext(FirebaseContext)
