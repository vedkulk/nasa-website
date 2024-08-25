import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'
export default  function App(){
  const [showModal, setShowModal] = useState(false)
  const NASA_KEY= import.meta.env.VITE_NASA_API_KEY
  function handleDisplayModal(){
    setShowModal(prev=>!prev)
  }
  return (
    <>
      <Main/>
      {showModal && (
      <Sidebar handleDisplayModal={handleDisplayModal}/> )}
      <Footer handleDisplayModal={handleDisplayModal}/>
    </>
  )
}

