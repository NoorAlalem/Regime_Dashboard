import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div
      className='main-menu menu-fixed menu-light menu-accordion menu-shadow'
      data-scroll-to-active='true'
    >
      <div className='navbar-header'>
        <ul className='nav navbar-nav flex-row align-items-center'>
          <li className='nav-item me-auto' style={{ paddingRight: '50px' }}>
            <a className='navbar-brand' href=''>
              <span className='brand-logo'>
                <img
                  src='../../../app-assets/images/logo/logo1.png'
                  alt='Logo'
                />
              </span>
              <h2 className='brand-text'> رجيم</h2>
            </a>
          </li>

          <li className='nav-item nav-toggle'>
            <a
              className='nav-link modern-nav-toggle pe-0'
              data-bs-toggle='collapse'
            >
              <i
                className='d-block d-xl-none text-primary toggle-icon font-medium-4'
                data-feather='x'
              />
              <i
                className='d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary'
                data-feather='disc'
                data-ticon='disc'
              />
            </a>
          </li>
        </ul>
      </div>

      <hr />

      <div className='shadow-bottom' />
      <div className='main-menu-content'>
        <ul
          class='navigation'
          id='main-menu-navigation'
          data-menu='menu-navigation'
        >
          {SidebarData.map((val, key) => {
            return (
              <li key={key} className=' mb-1 nav-item'>
                <Link to={`${val.link}`} className='d-flex align-items-center'>
                  <div> {val.icon} </div>
                  <span className='menu-item text-truncate'>{val.title}</span>
                </Link>
              </li>
            );
          })}
          <li key='add-meal' className=' mb-1 nav-item'>
            <a
              href='https://meals-and-ingrdents-client.vercel.app/'
              target='_blank'
              className='d-flex align-items-center'
            >
              <div>
                {' '}
                <RamenDiningIcon />{' '}
              </div>
              <span className='menu-item text-truncate'>اضافة وجبة</span>
            </a>
          </li>
          <li key='add-meal' className=' mb-1 nav-item'>
            <a
              href='https://meals-and-ingrdents-client.vercel.app/ingredients/'
              target='_blank'
              className='d-flex align-items-center'
            >
              <div>
                {' '}
                <RestaurantIcon />
              </div>
              <span className='menu-item text-truncate'>اضافة مكوّن</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
