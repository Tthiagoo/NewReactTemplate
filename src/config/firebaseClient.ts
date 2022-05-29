import 'firebase/firestore'
import 'firebase/analytics'
import { initializeApp, getApps, deleteApp, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export const firebaseConfig = {
  apiKey: 'AIzaSyAnM3fORzbgO2NegLT8aOfJr4sWkhwfSdI',
  authDomain: 'testefirebasereact-ddfda.firebaseapp.com',
  projectId: 'testefirebasereact-ddfda',
  storageBucket: 'testefirebasereact-ddfda.appspot.com',
  messagingSenderId: '12319339968',
  appId: '1:12319339968:web:139b67b7a2a76f24874425',
  measurementId: 'G-BHS6WV69N2'
}

if (typeof window !== 'undefined' && !getApps().length) {
  console.log('caiu aqui')

  initializeApp(firebaseConfig)
} else {
  getApp()
}
/*if (process.env.FIREBASE_CLIENT_EMAIL && !getApps().length) {
  firebase.initializeApp(firebaseConfig)
}
*/
const app = getApp()

export const db = getFirestore(app)
