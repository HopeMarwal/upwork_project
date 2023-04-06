import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/style/nav.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav>
      <div className='logo'>
        <NavLink to='/'>Logo</NavLink>
      </div>
      <div className={`nav_menu ${isMenuOpen && 'open'}`}>
        <NavLink to='/servicos'>servicos</NavLink>
        <NavLink to='/depoimentos'>Depoimentos</NavLink>
        <NavLink to='/projetos' >projetos</NavLink>
        <NavLink to='/contato'>contato</NavLink>
      </div>
      <div className='close_icon' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </div>
    </nav>
  )
}
