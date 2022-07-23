import React from 'react'
// import './footer.css'

export const Footer = () => {

    let footerStyle ={
        position: "relative",
        top: "70vh",
        bottom: "0",
        width: "100%",
        margin: "40px 0 0 0",
    }

  return (
    <div className="bg-dark text-light py-2" style={footerStyle}>
        <p className="text-center">
            Copyright &copy; All rights Reserved to <span className='text-warning'>Harshvardhan614</span>
        </p>
    </div>
  )
}
