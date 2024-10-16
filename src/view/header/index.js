import React from 'react'
import { Link } from 'react-router-dom';
import { FaCar, FaCreditCard, FaLaptop, FaSignInAlt, FaUser, FaUsers, FaWhatsapp, FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { MenuList, MenuItem, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Collapse   } from '@mui/material';
import { MdMenu } from 'react-icons/md'

export default function Header(prosps) {
  const [state, setState] = React.useState({
    open: false
  });

  const [ collapse, setCollapse ] =  React.useState({
    site: false,
    financeiro: false
  });

  return (
    <>
        {(window.innerWidth < 577) ? 
            <AppBar position="fixed">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setState({open: true})}
              >
                <MdMenu />
              </IconButton>
              <Typography variant="h6" component="div">
                {prosps.title}
              </Typography>
            </Toolbar>
          </AppBar>

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
   <Drawer
      anchor='left'
      open={state.open}
      onClose={() => setState({open: false})}

   >
    <div style={{width: 320, maxWidth: window.innerWidth - 70}}>

        <List component="nav" className='menu-mobile'>
            <ListItem>
                <img className='img-fluid logo-mobile' src='logo.png' alt='LOGO DA EMPRESA' height="40px" />
            </ListItem>

            <ListItem>
              Teste@gmail.com
            </ListItem>
            <Divider className='mt-2 mb-3' />

            <ListItem>
              <ListItemIcon>
                  <FaCar />
              </ListItemIcon>
              <ListItemText  primary="Veiculos" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                  <FaUser />
              </ListItemIcon>
              <ListItemText  primary="Proprietarios" />
            </ListItem>

            <ListItem button onClick={() => setCollapse({site: (collapse.site) ? false : true })}>
              <ListItemIcon>
                  <FaLaptop />
              </ListItemIcon>
              <ListItemText  primary="Site" />
              {(collapse.site) ? <FaAngleUp /> : <FaAngleDown />  }
            </ListItem>

            <Collapse
              in={collapse.site}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText className='pl-5' primary="Otimazação para o Google" />
                </ListItem>
                <ListItem>
                  <ListItemText className='pl-5' primary="Unidades e telefones" />
                </ListItem>
                <ListItem>
                  <ListItemText className='pl-5' primary="Minha Logo" />
                </ListItem>
                <ListItem>
                  <ListItemText className='pl-5' primary="Dominio" />
                </ListItem>
                <ListItem>
                  <ListItemText className='pl-5' primary="Configurações" />
                </ListItem>
              </List>
            </Collapse>

          <Divider className='mt-2 mb-2' />

            <ListItem button onClick={() => setCollapse({financeiro: (collapse.financeiro) ? false : true })}>
              <ListItemIcon>
                  <FaCreditCard />
              </ListItemIcon>
              <ListItemText  primary="Financeiro" />
              {(collapse.financeiro) ? <FaAngleUp /> : <FaAngleDown />  }
            </ListItem>

            <Collapse
              in={collapse.financeiro}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText className='pl-5' primary="Meu Plano" />
                </ListItem>
                <ListItem>
                  <ListItemText className='pl-5' primary="Minhas Transações" />
                </ListItem>
              </List>
            </Collapse>

          <Divider className='mt-2 mb-2' />
          
            <ListItem>
              <ListItemIcon>
                  <FaWhatsapp />
              </ListItemIcon>
              <ListItemText  primary="Ajuda" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                  <FaSignInAlt />
              </ListItemIcon>
              <ListItemText  primary="Sair" />
            </ListItem>
        </List>
    </div>

   </Drawer>
    </>
  )
}
