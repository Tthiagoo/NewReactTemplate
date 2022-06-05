import { Button, TextField } from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import { useFirebase } from '../../contexts/FirebaseContext'

export default function Register() {
  const {
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
  } = useFirebase()
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
