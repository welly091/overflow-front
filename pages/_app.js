import '../styles/globals.css'
import { AuthProvider } from '../contexts/auth'
import Layout from '../components/Layout'
import {useState} from 'react'

function MyApp({ Component, pageProps }) {
  const [question, setQuestion] = useState({'title':"@@@@@"})
  
  return (
      <AuthProvider>
        <Layout>
          <Component {...pageProps} setQuestion={setQuestion} question={question}/>
        </Layout>
      </AuthProvider>
    
  )
}

export default MyApp
