import React from 'react'

function PreLoader({ fadeAway }) {
  return (
    <>
        <div className={`preloader ${fadeAway ? 'fade-away' : ''}`}>
            <img src="/icon-add-to-cart.svg" alt="preloader" />
        </div>
    </>
  )
}

export default PreLoader;