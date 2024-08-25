import React from 'react'

export default  function Sidebar(props){
  const {showModal, handleDisplayModal} =props
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>
          Brutal Martian etx
        </h2>
        <div>
          <p>Decription</p>
          <p>
            fudisdh
            fjksddsk
            fdjksdkh
          </p>
        </div>
        <button onClick={handleDisplayModal}>
          <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  )
}