import React from 'react'
import "./rootLayout.css"
import {Link, Outlet} from  "react-router-dom";

const RootLayout = () => {
  return (
    <div className='rootLayout'>
        <header>
            <Link to="/" className='logo'>
                <img  src="../../../public/logo.png" alt="" />
                <span>Parv AI</span>
            </Link>
            <div>User Just For</div>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout