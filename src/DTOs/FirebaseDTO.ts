import { DocumentData, FirestoreError, QuerySnapshot } from 'firebase/firestore'

export interface IFirebaseContext {
  name: string
  setName: (value: React.SetStateAction<string>) => void
  age: number
  setAge: React.Dispatch<React.SetStateAction<number>>
  users: QuerySnapshot<DocumentData>
  loading: boolean
  error: FirestoreError
  onUpdate: (id: any, age: any) => Promise<void>
  onDelete: (id: any) => Promise<void>
  onSubmit: () => Promise<void>
}
