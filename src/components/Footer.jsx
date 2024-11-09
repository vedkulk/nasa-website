import React from 'react'

export default  function Footer(props){
  const {showModal, handleDisplayModal, data} =props
  return (
    <footer>
        <div onClick={handleDisplayModal} className='bgGradient'></div>
          <div>
            <h1>APOD Project</h1>
            <h2>{data?.title}</h2>
          </div>
        <button onClick={handleDisplayModal}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}

