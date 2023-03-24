import "../App.css"
import React from 'react'
const MenuBar = () => {
  return (
    <div className='menuBar'>

        <div className="mainLinks">
            <ul>
                <li>
                     <a href="/">
                     HOME
                     </a>
                </li>
                <li> <a href="/signin">
                SIGN IN

                </a>
                </li>
                <li> <a href="/newuser">
                REGISTER

                </a>
                </li>
                <li> <a href="/about">
                ABOUT
                </a>
                    
                </li>

            </ul>
        </div>

     
    </div>
  )
}

export default MenuBar