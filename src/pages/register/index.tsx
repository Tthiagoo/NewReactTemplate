import { Button, TextField } from '@material-ui/core'
import {
  addDoc,
  collection,
  doc,
  QuerySnapshot,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { db } from '../../config/firebaseClient'
import { useCollection } from 'react-firebase-hooks/firestore'

interface IUser {
  name: 'string'
  age: Number
}

export default function Register() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [usersDb, setUsersDb] = useState([])

  const collectionRef = collection(db, 'users')

  //get
  const [users, loading, error] = useCollection(collection(db, 'users'), {
    snapshotListenOptions: { includeMetadataChanges: true }
  })

  const data = {
    name,
    age
  }

  const onSubmit = async () => {
    const ref = await addDoc(collectionRef, data)
    alert(`Adicionado ${ref.id}`)
  }

  const onUpdate = async (id, age) => {
    const newField = { age: age + 1 }
    const userDoc = doc(collectionRef, id)
    await updateDoc(userDoc, newField)
  }

  const onDelete = async id => {
    const userDoc = doc(collectionRef, id)
    await deleteDoc(userDoc)
  }

  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          color="secondary"
          label="Name"
          value={name}
          variant="outlined"
          style={{ backgroundColor: '#eeeee4' }}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <TextField
          id="outlined-basic"
          color="secondary"
          label="age"
          variant="outlined"
          value={age}
          style={{ backgroundColor: '#eeeee4' }}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAge(e.target.valueAsNumber)
          }
          type="number"
        />

        <Button onClick={onSubmit} variant="contained">
          Contained
        </Button>
      </div>

      <div style={{ marginTop: '20px' }}>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {users && (
          <span>
            {users.docs.map(doc => (
              <div key={doc.id} style={{ margin: '15px' }}>
                <p>{JSON.stringify(doc.data().name)}</p>
                <p>{JSON.stringify(doc.data().age)}</p>
                <Button
                  onClick={() => onUpdate(doc.id, doc.data().age)}
                  variant="contained"
                >
                  Aumentar o age
                </Button>

                <Button onClick={() => onDelete(doc.id)} variant="contained">
                  Delete User
                </Button>
              </div>
            ))}
          </span>
        )}
      </div>
    </>
  )
}
