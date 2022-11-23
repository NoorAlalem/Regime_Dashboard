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
                <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
                  {/* User Info */}
                  <div className="card">
                    <div className="card-body">
                      <div className="user-avatar-section mb-3">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            className="img-fluid rounded mt-3 mb-2"
                            src="../../../app-assets/images/portrait/small/avatar-s-2.jpg"
                            height={110}
                            width={110}
                            alt="User avatar"
                          />
                          <div className="user-info text-center">
                            <h4> نور العالم</h4>
                            <span className="badge bg-light-secondary">
                              مشترك شهري
                            </span>
                          </div>
                        </div>
                      </div>

                      <h4 className="fw-bolder border-bottom pb-50 mb-1">
                        معلومات المشترك:
                      </h4>
                      <div className="info-container">
                        <ul className="list-unstyled">
                          <li className="mb-75">
                            <span className="fw-bolder me-25">رقم الهاتف:</span>
                            <span className="badge bg-light-primary">
                              0911111111
                            </span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">
                              {" "}
                              البريد الإلكتروني:
                            </span>
                            <span className="badge bg-light-primary">
                              noor.alalem98@gmail.com
                            </span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">العنوان:</span>
                            <span className="badge bg-light-primary">
                              {" "}
                              طرابلس
                            </span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">العمر:</span>
                            <span className="badge bg-light-primary">24</span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">الطول:</span>
                            <span className="badge bg-light-primary">159</span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">الوزن:</span>
                            <span className="badge bg-light-primary">56</span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">الهدف: </span>
                            <span className="badge bg-light-primary">
                              {" "}
                              المحافظة على الوزن{" "}
                            </span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">
                              ممارسة الرياضة:{" "}
                            </span>
                            <span className="badge bg-light-primary">
                              {" "}
                              2-3 اسبوعيًا
                            </span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">
                              الحمية الغذائية:
                            </span>
                            <span className="badge bg-light-primary">
                              {" "}
                              كيتو{" "}
                            </span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">الحساسية:</span>
                            <span className="badge bg-light-primary">
                              {" "}
                              اللوز{" "}
                            </span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">الأمراض:</span>
                            <span className="badge bg-light-danger">لا</span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">
                              فقد التوازن:
                            </span>
                            <span className="badge bg-light-danger">لا</span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">الأدوية:</span>
                            <span className="badge bg-light-danger">لا</span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">مدخن:</span>
                            <span className="badge bg-light-success">نعم</span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">
                              ساعات النوم:
                            </span>
                            <span className="badge bg-light-primary">
                              مابين 4 و 6
                            </span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">حركة العمل:</span>
                            <span className="badge bg-light-success">نعم</span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">افضل وزن:</span>
                            <span className="badge bg-light-primary">
                              منذ سنة
                            </span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">الماء:</span>
                            <span className="badge bg-light-primary">
                              2 لتر{" "}
                            </span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">سبب الأكل:</span>
                            <span className="badge bg-light-primary">
                              {" "}
                              الإكتئاب{" "}
                            </span>{" "}
                            &nbsp;
                            <span className="badge bg-light-primary">
                              {" "}
                              الملل{" "}
                            </span>{" "}
                            &nbsp;
                            <span className="badge bg-light-primary">
                              {" "}
                              السعادة{" "}
                            </span>
                          </li>
                          <li className="mb-75">
                            <span className="fw-bolder me-25">افضل أكلة:</span>
                            <span className="badge bg-light-primary">
                              {" "}
                              المكرونة{" "}
                            </span>
                          </li>
                        </ul>
                        <div className="d-flex justify-content-center pt-2">
                          <a
                            href="javascript:;"
                            className="btn btn-primary me-1"
                            data-bs-target="#editUser"
                            data-bs-toggle="modal"
                          >
                            تعديل
                          </a>
                          <a
                            href="javascript:;"
                            className="btn btn-outline-danger suspend-user"
                          >
                            الغاء الإشتراك
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Plan Card */}
                  {/* <div className="card border-primary">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <span className="badge bg-light-primary">Standard</span>
                  <div className="d-flex justify-content-center">
                    <sup className="h5 pricing-currency text-primary mt-1 mb-0">$</sup>
                    <span className="fw-bolder display-5 mb-0 text-primary">99</span>
                    <sub className="pricing-duration font-small-4 ms-25 mt-auto mb-2">/month</sub>
                  </div>
                </div>
                <ul className="ps-1 mb-2">
                  <li className="mb-50">10 Users</li>
                  <li className="mb-50">Up to 10 GB storage</li>
                  <li>Basic Support</li>
                </ul>
                <div className="d-flex justify-content-between align-items-center fw-bolder mb-50">
                  <span>Days</span>
                  <span>4 of 30 Days</span>
                </div>
                <div className="progress mb-50" style={{height: 8}}>
                  <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={65} aria-valuemax={100} aria-valuemin={80} />
                </div>
                <span>4 days remaining</span>
                <div className="d-grid w-100 mt-2">
                  <button className="btn btn-primary" data-bs-target="#upgradePlanModal" data-bs-toggle="modal">
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div> */}
                  {/* /Plan Card */}
                </div>

                <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
                {/* Links */}
                  <ul className="nav nav-pills mb-2">
                    <li className="nav-item">
                      <Link to="/Profile" className="nav-link">
                        <i
                          data-feather="user"
                          className="font-medium-3 me-50"
                        />
                        <span className="fw-bold">الجدول الزمني</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/Profile_Complaints_Details"
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
                      <a className="nav-link" href="app-user-view-billing.html">
                        <i
                          data-feather="bookmark"
                          className="font-medium-3 me-50"
                        />
                        <span className="fw-bold">الوجبات</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app-user-view-billing.html">
                        <i
                          data-feather="bookmark"
                          className="font-medium-3 me-50"
                        />
                        <span className="fw-bold">الاشتراكات</span>
                      </a>
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
            {/*/ Edit User Modal */}
            {/* upgrade your plan Modal */}
            {/* <div className="modal fade" id="upgradePlanModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-upgrade-plan">
          <div className="modal-content">
            <div className="modal-header bg-transparent">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-5 pb-2">
              <div className="text-center mb-2">
                <h1 className="mb-1">Upgrade Plan</h1>
                <p>Choose the best plan for user.</p>
              </div>
              <form id="upgradePlanForm" className="row pt-50" onsubmit="return false">
                <div className="col-sm-8">
                  <label className="form-label" htmlFor="choosePlan">Choose Plan</label>
                  <select id="choosePlan" name="choosePlan" className="form-select" aria-label="Choose Plan">
                    <option selected>Choose Plan</option>
                    <option value="standard">Standard - $99/month</option>
                    <option value="exclusive">Exclusive - $249/month</option>
                    <option value="Enterprise">Enterprise - $499/month</option>
                  </select>
                </div>
                <div className="col-sm-4 text-sm-end">
                  <button type="submit" className="btn btn-primary mt-2">Upgrade</button>
                </div>
              </form>
            </div>
            <hr />
            <div className="modal-body px-5 pb-3">
              <h6>User current plan is standard plan</h6>
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex justify-content-center me-1 mb-1">
                  <sup className="h5 pricing-currency pt-1 text-primary">$</sup>
                  <h1 className="fw-bolder display-4 mb-0 text-primary me-25">99</h1>
                  <sub className="pricing-duration font-small-4 mt-auto mb-2">/month</sub>
                </div>
                <button className="btn btn-outline-danger cancel-subscription mb-1">Cancel Subscription</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
            {/*/ upgrade your plan Modal */}
          </div>
        </div>
      </div>
  );
}

export default Profile_Complaints_Details;
