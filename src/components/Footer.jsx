import React from 'react'

export default  function Footer(props){
  const {showModal, handleDisplayModal} =props
  return (
    <footer>
        <div onClick={handleDisplayModal} className='bgGradient'></div>
          <div>
            <h2>Brutal Martian Project</h2>
            <h1>APOD Project</h1>
          </div>
        
        <button onClick={handleDisplayModal}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}

