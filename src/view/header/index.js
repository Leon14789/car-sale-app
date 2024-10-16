import React from 'react'
import { Navigate, Link } from 'react-router-dom';
import { FaCar, FaCreditCard, FaDesktop, FaLaptop, FaSignInAlt, FaUsers, FaWhatsapp } from 'react-icons/fa';
import { MenuList, MenuItem } from '@mui/material';

export default function Header() {
  return (
    <>
        {(window.innerWidth < 577) ? 
      <div>CELL</div> 

      :
      
      <nav className='header navbar navbar-expand-lg navbar-ligth bg-white p-0'>
          <div className='container'>
            <Link className="navbar-brand" to='/'>
                  <img src='logo.png' alt='LOGO DA EMPRESA' height="40px" />
            </Link>
              <ul className='navbar-nav '>
                
                <li className='nav-item'>
                  <Link className='nav-link' to="/vehicles">
                    <FaCar className="icon-lg mr-2" />  Veiculos
                  </Link>
                </li>

                <li className='nav-item'>
                  <button className='nav-link' to="/vehicles">
                    <FaUsers className="icon-lg mr-2" />  Proprietarios
                  </button>
                </li>

                <li className='nav-item dropdown'>
                  <Link className='nav-link dropdown-toggle ' to="#" data-toggle="dropdown">
                    <FaLaptop className="icon-lg mr-2" />  Site
                  </Link>
                  <MenuList className='dropdown-menu'>
                    <MenuItem className='dropdown-item'>
                        Otimização para o Google
                    </MenuItem>
                    <MenuItem className='dropdown-item'>
                        Unidades e Telefones
                    </MenuItem>
                    <MenuItem className='dropdown-item'>
                        Minha  Logo
                    </MenuItem>
                    <MenuItem className='dropdown-item'>
                        Dominio
                    </MenuItem>
                    <MenuItem className='dropdown-item'>
                        Configurações
                    </MenuItem>
                  </MenuList>
                </li>

                <li className='nav-item dropdown'>
                  <Link className='nav-link dropdown-toggle ' to="#" data-toggle="dropdown">
                    <FaCreditCard className="icon-lg mr-2" />  Financeiro
                  </Link>
                  <MenuList className='dropdown-menu'>
                    <MenuItem className='dropdown-item'>
                       Meu Plano
                    </MenuItem>
                    <MenuItem className='dropdown-item'>
                       Minhas Transações
                    </MenuItem>
                  </MenuList>
                </li>

                <li className='nav-item'>
                  <Link className='nav-link' to="#">
                    <FaWhatsapp className="icon-lg mr-2" />  Ajuda
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link className='nav-link' to="/vehicles">
                    <FaSignInAlt className="icon-lg mr-2" />  Sair
                  </Link>
                </li>


              </ul>
          </div>
      </nav>
   }
    </>
  )
}
