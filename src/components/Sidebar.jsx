import React from 'react'

export default  function Sidebar(props){
  const {showModal, handleDisplayModal, data} =props
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>
          {data?.title}
        </h2>
        <div>
          <p>{data?.date}</p>
          <p>
          {data?.explanation}
          </p>
        </div>
        <button onClick={handleDisplayModal}>
          <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  )
}