import React from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
      data-scroll-to-active="true"
    >
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row align-items-center">
          <li className="nav-item me-auto" style={{ paddingRight: "50px" }}>
            <a className="navbar-brand" href="">
              <span className="brand-logo">
                <img
                  src="../../../app-assets/images/logo/logo1.png"
                  alt="Logo"
                />
              </span>
              <h2 className="brand-text"> رجيم</h2>
            </a>
          </li>
          <li className="nav-item nav-toggle" style={{ paddingRight: "60px" }}>
            <a
              className="nav-link modern-nav-toggle pe-0"
              data-bs-toggle="collapse"
            >
              <i
                className="d-block d-xl-none text-primary toggle-icon font-medium-4"
                data-feather="x"
              />
              <i
                className="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary"
                data-feather="disc"
                data-ticon="disc"
              />
            </a>
          </li>
        </ul>
      </div>

      <hr />

      <div className="shadow-bottom" />
      <div className="main-menu-content">
        <ul
          class="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li className=" navigation-header">
            <span data-i18n="Apps & Pages"> خاص بخدمة العملاء </span>
            {/* <FeatherIcon icon="more-horizontal" /> */}
          </li>

          <li className="nav-item">
            <a className="d-flex align-items-center">
              <FeatherIcon icon="user" />
              <span className="menu-title text-truncate">خدمة العملاء</span>
              <FeatherIcon
                icon="chevron-right"
                style={{ marginRight: "40px" }}
              />
            </a>

            <ul className="menu-content">
              <li>
                <Link to="/" className="d-flex align-items-center">
                  <FeatherIcon icon="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="eCommerce"
                  >
                    المشتركين
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/FollowUp" className="d-flex align-items-center">
                  <FeatherIcon icon="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="eCommerce"
                  >
                    متابعة المشتركين
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/Complaints" className="d-flex align-items-center">
                  <FeatherIcon icon="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="eCommerce"
                  >
                    الشكاوى
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          {/* <li className=" mb-1 nav-item">
            <a className="d-flex align-items-center">
              <FeatherIcon icon="home" />
              <span className="menu-item text-truncate">الوجبات</span>
            </a>
          </li> */}

          {/* <li className=" mb-1 nav-item">
            <a className="d-flex align-items-center">
              <FeatherIcon icon="home" />
              <span className="menu-item text-truncate">الاحصائيات</span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
