import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Profile_Edit_Info from "./Profile_Edit_Info";
import Profile_Info_Details from "./Profile_Info_Details";

function Profile_Complaints_Details() {


  return (

      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row"></div>
          <div className="content-body">
            <section className="app-user-view-account">
              <div className="row">
                {/* User Sidebar */}
                <Profile_Info_Details />

                <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
                {/* Links */}
                  <ul className="nav nav-pills mb-2">
                    <li className="nav-item">
                      <Link to="/Profile_Timeline" className="nav-link">
                        <i
                          data-feather="user"
                          className="font-medium-3 me-50"
                        />
                        <span className="fw-bold">الجدول الزمني</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                      >
                        <i
                          data-feather="lock"
                          className="font-medium-3 me-50"
                        />
                        <span className="fw-bold">الشكاوى</span>
                      </Link>
                    </li>
                  
                    <li className="nav-item">
                    <Link
                      to='/Profile_Subscription' className="nav-link" >
                        <i
                          data-feather="bookmark"
                          className="font-medium-3 me-50"
                        />
                        <span className="fw-bold">الاشتراكات</span>
                      </Link>
                    </li>
                  </ul>

                  
                  {/* Complaints */}
                  <div className="card">
                    <h2 className="card-header">الشكاوى </h2>
                    <div className="card-body">
                      <div className="content-wrapper container-xxl p-0">
                        <div id="table-hover-row">
                          <div className="col-12">
                            <div className="card">
                              <hr class="my-0" />
                              <div className="table-responsive">
                                <table
                                  className="table table-hover"
                                  style={{
                                    textAlign: "center",
                                    borderCollapse: "separate",
                                    borderSpacing: "0 15px",
                                  }}
                                >
                                  <thead>
                                    <tr>
                                      <th>الشكوى</th>
                                      <th>الحـالة</th>
                                      <th> </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <span className="fw-bold">
                                          الرجاء المساعدة لم اتمكن من الدخول الى
                                          التطبيق!!{" "}
                                        </span>
                                      </td>
                                      <td>
                                        <span className="badge rounded-pill badge-light-secondary me-1">
                                          {" "}
                                          لم تتم المتابعة بعد
                                        </span>
                                      </td>
                                      <td>
                                        <UncontrolledDropdown>
                                          <DropdownToggle
                                            caret
                                            tag="span"
                                            className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                          >
                                            <FeatherIcon icon="more-vertical" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                            <DropdownItem
                                              className="w-100"
                                              onClick={() => {}}
                                            >
                                              <FeatherIcon
                                                icon="check"
                                                className="me-75"
                                              />
                                              <span>تم الرد</span>
                                            </DropdownItem>
                                            <DropdownItem
                                              className="w-100"
                                              onClick={() => {}}
                                            >
                                              <FeatherIcon
                                                icon="x"
                                                className="me-75"
                                              />
                                              <span>لم يتم الرد</span>
                                            </DropdownItem>
                                          </DropdownMenu>
                                        </UncontrolledDropdown>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="fw-bold">
                                          الرجاء المساعدة لم اتمكن من الدخول الى
                                          التطبيق!! الرجاء المساعدة لم اتمكن من
                                          الدخول الى التطبيق!! الرجاء المساعدة
                                          لم اتمكن من الدخول الى التطبيق!!
                                          الرجاء المساعدة لم اتمكن من الدخول الى
                                          التطبيق!! الرجاء المساعدة لم اتمكن من
                                          الدخول الى التطبيق!!{" "}
                                        </span>
                                      </td>
                                      <td>
                                        <span className="badge rounded-pill badge-light-success me-1">
                                          {" "}
                                          تمت المتابعة
                                        </span>
                                      </td>
                                      <td>
                                        <UncontrolledDropdown>
                                          <DropdownToggle
                                            caret
                                            tag="span"
                                            className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                          >
                                            <FeatherIcon icon="more-vertical" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                            <DropdownItem
                                              className="w-100"
                                              onClick={() => {}}
                                            >
                                              <FeatherIcon
                                                icon="check"
                                                className="me-75"
                                              />
                                              <span>تم الرد</span>
                                            </DropdownItem>
                                            <DropdownItem
                                              className="w-100"
                                              onClick={() => {}}
                                            >
                                              <FeatherIcon
                                                icon="x"
                                                className="me-75"
                                              />
                                              <span>لم يتم الرد</span>
                                            </DropdownItem>
                                          </DropdownMenu>
                                        </UncontrolledDropdown>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="fw-bold">
                                          الرجاء المساعدة لم اتمكن من الدخول الى
                                          التطبيق!! الرجاء المساعدة لم اتمكن من
                                          الدخول الى التطبيق!!{" "}
                                        </span>
                                      </td>
                                      <td>
                                        <span className="badge rounded-pill badge-light-danger me-1">
                                          {" "}
                                        لم يتم الرد
                                        </span>
                                      </td>
                                      <td>
                                        <UncontrolledDropdown>
                                          <DropdownToggle
                                            caret
                                            tag="span"
                                            className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                          >
                                            <FeatherIcon icon="more-vertical" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                            <DropdownItem
                                              className="w-100"
                                              onClick={() => {}}
                                            >
                                              <FeatherIcon
                                                icon="check"
                                                className="me-75"
                                              />
                                              <span>تم الرد</span>
                                            </DropdownItem>
                                            <DropdownItem
                                              className="w-100"
                                              onClick={() => {}}
                                            >
                                              <FeatherIcon
                                                icon="x"
                                                className="me-75"
                                              />
                                              <span>لم يتم الرد</span>
                                            </DropdownItem>
                                          </DropdownMenu>
                                        </UncontrolledDropdown>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="fw-bold">
                                          لم اتمكن من الدخول الى التطبيق!!{" "}
                                        </span>
                                      </td>
                                      <td>
                                        <span className="badge rounded-pill badge-light-success me-1">
                                          {" "}
                                         تمت المتابعة
                                        </span>
                                      </td>
                                      <td>
                                        <UncontrolledDropdown>
                                          <DropdownToggle
                                            caret
                                            tag="span"
                                            className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                          >
                                            <FeatherIcon icon="more-vertical" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                            <DropdownItem
                                              className="w-100"
                                              onClick={() => {}}
                                            >
                                              <FeatherIcon
                                                icon="check"
                                                className="me-75"
                                              />
                                              <span>تم الرد</span>
                                            </DropdownItem>
                                            <DropdownItem
                                              className="w-100"
                                              onClick={() => {}}
                                            >
                                              <FeatherIcon
                                                icon="x"
                                                className="me-75"
                                              />
                                              <span>لم يتم الرد</span>
                                            </DropdownItem>
                                          </DropdownMenu>
                                        </UncontrolledDropdown>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              
              </div>
            </section>

            {/* Edit User Modal */}
            <div
              className="modal fade"
              id="editUser"
              tabIndex={-1}
              aria-hidden="true"
            >
              <Profile_Edit_Info />
            </div>
          
           
           
          </div>
        </div>
      </div>
  );
}

export default Profile_Complaints_Details;
