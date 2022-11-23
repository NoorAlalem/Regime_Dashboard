import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
        <div className="navbar-container d-flex content">
          <div className="bookmark-wrapper d-flex align-items-center">
            <ul className="nav navbar-nav d-xl-none">
              <li className="nav-item">
                <a className="nav-link menu-toggle" href="index.html">
                  <FeatherIcon icon='menu' className="ficon" />
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav bookmark-icons"></ul>
          </div>
          <ul className="nav navbar-nav align-items-center ms-auto">
            {/* //DROPDOWN */}

            <li class="nav-item dropdown dropdown-notification me-25">
              <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle color="#F8F8F8">
                  <FeatherIcon className="ficon" icon="bell" />

                  <span
                    style={{ left: "10px", top: "0px" }}
                    class="badge rounded-pill bg-danger badge-up"
                  ></span>
                </DropdownToggle>

                <ul
                  style={{ marginTop: "55px" }}
                  class="dropdown-menu dropdown-menu-media dropdown-menu-end"
                >
                  <li class="dropdown-menu-header">
                    <div class="dropdown-header d-flex">
                      <h4
                        style={{ textAlign: "center" }}
                        class="notification-title mb-0 me-auto"
                      >
                        &nbsp; الإشعارات &nbsp;
                      </h4>
                      <div class="badge rounded-pill badge-light-primary">
                        &nbsp; 1 جديد &nbsp;
                      </div>
                    </div>
                  </li>

                  <li class="scrollable-container media-list">
                    <a class="d-flex" href="#">
                      <div class="list-item d-flex align-items-start">
                        <div class="me-1">
                          <div class="avatar bg-light-warning">
                            <div class="avatar-content">
                              <i
                                class="avatar-icon"
                                data-feather="alert-triangle"
                              ></i>
                            </div>
                          </div>
                        </div>
                        <div class="list-item-body flex-grow-1">
                          <p class="media-heading">
                            &nbsp; لديك شكوى جديدة من المستخدم &nbsp;
                            <span class="fw-bolder"> 0911111111 </span>
                          </p>
                          <small class="notification-text">إشعار جديد</small>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li class="dropdown-menu-footer">
                    <button class="btn btn-primary w-100">
                      تمت قراءة جميع الإشعارات
                    </button>
                  </li>
                </ul>
              </ButtonDropdown>
            </li>

            <li className="nav-item dropdown dropdown-user">
              <a
                className="nav-link dropdown-toggle dropdown-user-link"
                id="dropdown-user"
                href="index.html"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="user-nav d-sm-flex d-none">
                  <span className="user-name fw-bolder"> محمد الزقني</span>
                  <span className="user-status"> ادمن </span>
                </div>
                <span className="avatar">
                  <img
                    className="round"
                    src="../../../app-assets/images/logo/logo1.png"
                    alt="avatar"
                    height="40"
                    width="40"
                  />
                  <span className="avatar-status-online"></span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
