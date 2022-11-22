import React from "react";
import { Link } from "react-router-dom";

function Complaints_Table() {
  return (
    <div className="app-content content ">
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />

      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row">
          <div className="content-header-left col-md-9 col-12 mb-2">
            <div className="row breadcrumbs-top">
              <div className="col-12">
                <h1 className="float-start mb-0 text-primary">الشكاوى:</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="row" id="table-hover-row">
          <div className="col-12">
            <div className="card">
              <div className="card-body mt-2">
                <form className="dt_adv_search" method="POST">
                  <div className="row g-1 mb-md-1">
                    <div className="col-md-4">
                      <label className="form-label">
                        {" "}
                        <b> البحث عن رقم المشترك </b>{" "}
                      </label>
                      <div
                        style={{ width: "100.7%", marginTop: "3px" }}
                        className="input-group "
                      >
                        <span
                          className="input-group-text"
                          id="basic-addon-search1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-search"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0911111111"
                          aria-label="Search..."
                          aria-describedby="basic-addon-search1"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 user_status">
                      <label className="form-label">
                        <b> الحالة </b>
                      </label>
                      <select className="form-select text-capitalize mb-md-0 mb-2xx">
                        <option value="new" className="text-capitalize">
                          الكل
                        </option>
                        <option value="new" className="text-capitalize">
                          لم تتم المتابعة بعد
                        </option>
                        <option value="old" className="text-capitalize">
                          تمت المتابعة
                        </option>
                        <option value="old" className="text-capitalize">
                          لم يتم الرد
                        </option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
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
                      <th>اسم المشترك </th>
                      <th>رقم الهاتف</th>
                      <th>الحـالة</th>
                      <th>الشكوى </th>
                      <th> تايخ الشكوى</th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="../../../app-assets/images/icons/user1.png"
                          className="me-75"
                          height={20}
                          width={20}
                          alt="Angular"
                        />
                        <span className="fw-bold">نور العالم </span>
                      </td>
                      <td>0929207542</td>
                      <td>
                        <span className="badge rounded-pill badge-light-secondary me-1">
                          {" "}
                          لم تتم المتابعة بعد
                        </span>
                      </td>
                      <td>الرجاء المساعدة لم اتمكن من الدخول الى التطبيق!!</td>
                      <td>11/21/2022</td>
                      <td>
                      <Link
                        to='/Profile'
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          متابعة
                        </Link>

                        {/* <UncontrolledDropdown>
                                <DropdownToggle
                                  caret
                                  tag="span"
                                  className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                >
                                  <FeatherIcon icon="more-vertical" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                  <DropdownItem className="w-100" onClick={() => {
                                      
                                      }}>
                                    <FeatherIcon
                                      icon="check"
                                      className="me-75"
                                    />
                                    <span>قبول</span>
                                  </DropdownItem>
                                  <DropdownItem
                                    className="w-100"
                                    onClick={() => {
                                      
                                    }}
                                  >
                                    <FeatherIcon
                                      icon="x"
                                      className="me-75"
                                    />
                                    <span>رفض</span>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown> */}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <img
                          src="../../../app-assets/images/icons/user1.png"
                          className="me-75"
                          height={20}
                          width={20}
                          alt="Angular"
                        />
                        <span className="fw-bold">نور العالم </span>
                      </td>
                      <td>0929207542</td>
                      <td>
                        <span className="badge rounded-pill badge-light-danger me-1">
                          {" "}
                          لم تتم المتابعة بعد
                        </span>
                      </td>
                      <td>الرجاء المساعدة لم اتمكن من الدخول الى التطبيق!!</td>
                      <td>11/21/2022</td>
                      <td>
                      <Link
                        to='/Profile'
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          متابعة
                        </Link>

                        {/* <UncontrolledDropdown>
                                <DropdownToggle
                                  caret
                                  tag="span"
                                  className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                >
                                  <FeatherIcon icon="more-vertical" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                  <DropdownItem className="w-100" onClick={() => {
                                      
                                      }}>
                                    <FeatherIcon
                                      icon="check"
                                      className="me-75"
                                    />
                                    <span>قبول</span>
                                  </DropdownItem>
                                  <DropdownItem
                                    className="w-100"
                                    onClick={() => {
                                      
                                    }}
                                  >
                                    <FeatherIcon
                                      icon="x"
                                      className="me-75"
                                    />
                                    <span>رفض</span>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown> */}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <img
                          src="../../../app-assets/images/icons/user1.png"
                          className="me-75"
                          height={20}
                          width={20}
                          alt="Angular"
                        />
                        <span className="fw-bold">نور العالم </span>
                      </td>
                      <td>0929207542</td>
                      <td>
                        <span className="badge rounded-pill badge-light-danger me-1">
                          {" "}
                          لم تتم المتابعة بعد
                        </span>
                      </td>
                      <td>الرجاء المساعدة لم اتمكن من الدخول الى التطبيق!!</td>
                      <td>11/21/2022</td>
                      <td>
                      <Link
                        to='/Profile'
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          متابعة
                        </Link>

                        {/* <UncontrolledDropdown>
                                <DropdownToggle
                                  caret
                                  tag="span"
                                  className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                >
                                  <FeatherIcon icon="more-vertical" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                  <DropdownItem className="w-100" onClick={() => {
                                      
                                      }}>
                                    <FeatherIcon
                                      icon="check"
                                      className="me-75"
                                    />
                                    <span>قبول</span>
                                  </DropdownItem>
                                  <DropdownItem
                                    className="w-100"
                                    onClick={() => {
                                      
                                    }}
                                  >
                                    <FeatherIcon
                                      icon="x"
                                      className="me-75"
                                    />
                                    <span>رفض</span>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown> */}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <img
                          src="../../../app-assets/images/icons/user1.png"
                          className="me-75"
                          height={20}
                          width={20}
                          alt="Angular"
                        />
                        <span className="fw-bold">نور العالم </span>
                      </td>
                      <td>0929207542</td>
                      <td>
                        <span className="badge rounded-pill badge-light-success me-1">
                          {" "}
                          لم تتم المتابعة بعد
                        </span>
                      </td>
                      <td>الرجاء المساعدة لم اتمكن من الدخول الى التطبيق!!</td>
                      <td>11/21/2022</td>
                      <td>
                        <Link
                        to='/Profile'
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          متابعة
                        </Link>

                        {/* <UncontrolledDropdown>
                                <DropdownToggle
                                  caret
                                  tag="span"
                                  className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                >
                                  <FeatherIcon icon="more-vertical" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                  <DropdownItem className="w-100" onClick={() => {
                                      
                                      }}>
                                    <FeatherIcon
                                      icon="check"
                                      className="me-75"
                                    />
                                    <span>قبول</span>
                                  </DropdownItem>
                                  <DropdownItem
                                    className="w-100"
                                    onClick={() => {
                                      
                                    }}
                                  >
                                    <FeatherIcon
                                      icon="x"
                                      className="me-75"
                                    />
                                    <span>رفض</span>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown> */}
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
  );
}

export default Complaints_Table;
