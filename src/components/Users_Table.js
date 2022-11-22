import React from "react";
import FeatherIcon from "feather-icons-react";

function Users_Table() {
  return (
    <div className="app-content content ">
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />

      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row">
          <div className="content-header-left col-md-9 col-12 mb-2">
            <div className="row breadcrumbs-top">
              <div className="col-12">
                <h1 className="float-start mb-0 text-primary">
                  {" "}
                  جميع المشتركين
                </h1>
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
                        <b> البحث عن جميع بيانات الجدول: </b>{" "}
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
                          placeholder="البحث عن معلومات الزبائن..."
                          aria-label="Search..."
                          aria-describedby="basic-addon-search1"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 user_status">
                      <label className="form-label">
                        <b> الجنس </b>
                      </label>
                      <select className="form-select text-capitalize mb-md-0 mb-2xx">
                        <option value="new" className="text-capitalize">
                          الكل
                        </option>
                        <option value="new" className="text-capitalize">
                          انثى
                        </option>
                        <option value="old" className="text-capitalize">
                          ذكر
                        </option>
                      </select>
                    </div>
                    <div className="col-md-4 user_plan">
                      <label className="form-label" htmlFor="UserPlan">
                        <b> نوع الإشتراك </b>
                      </label>
                      <select
                        id="UserPlan"
                        className="form-select text-capitalize mb-md-0 mb-2"
                      >
                        <option value="Basic" className="text-capitalize">
                          الكل
                        </option>
                        <option value="Basic" className="text-capitalize">
                          يومي
                        </option>
                        <option value="Company" className="text-capitalize">
                          اسبوعي
                        </option>
                        <option value="Enterprise" className="text-capitalize">
                          شهري
                        </option>
                      </select>
                    </div>
                  </div>
                  {/* <div className="row g-1">
      <div className="col-md-4">
        <label className="form-label">City:</label>
        <input type="text" className="form-control dt-input" data-column={4} placeholder="Balky" data-column-index={3} />
      </div>
      <div className="col-md-4">
        <label className="form-label">Date:</label>
        <div className="mb-0">
          <input type="text" className="form-control dt-date flatpickr-range dt-input" data-column={5} placeholder="StartDate to EndDate" data-column-index={4} name="dt_date" />
          <input type="hidden" className="form-control dt-date start_date dt-input" data-column={5} data-column-index={4} name="value_from_start_date" />
          <input type="hidden" className="form-control dt-date end_date dt-input" name="value_from_end_date" data-column={5} data-column-index={4} />
        </div>
      </div>
      <div className="col-md-4">
        <label className="form-label">Salary:</label>
        <input type="text" className="form-control dt-input" data-column={6} placeholder={10000} data-column-index={5} />
      </div>
    </div> */}
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
                      <th>الجنس</th>
                      <th>العمر</th>
                      <th>BMI</th>
                      <th>الهدف</th>
                      <th>السعرات المستهدفه</th>
                      <th>نوع الإشتراك</th>
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
                      <td>انثى</td>
                      <td>
                        {/* <span className="badge rounded-pill badge-light-primary me-1">Active</span> */}
                        24
                      </td>
                      <td>23.5</td>
                      {/* <div className="dropdown">
                  <button type="button" className="btn btn-sm dropdown-toggle hide-arrow py-0" data-bs-toggle="dropdown">
                    <i data-feather="more-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      <i data-feather="edit-2" className="me-50" />
                      <span>Edit</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i data-feather="trash" className="me-50" />
                      <span>Delete</span>
                    </a>
                  </div>
                </div> */}
                      <td>تثبيت وزن</td>
                      <td>1850</td>
                      <td>شهري</td>
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
                      <td>انثى</td>
                      <td>
                        {/* <span className="badge rounded-pill badge-light-primary me-1">Active</span> */}
                        24
                      </td>
                      <td>23.5</td>
                      {/* <div className="dropdown">
                  <button type="button" className="btn btn-sm dropdown-toggle hide-arrow py-0" data-bs-toggle="dropdown">
                    <i data-feather="more-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      <i data-feather="edit-2" className="me-50" />
                      <span>Edit</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i data-feather="trash" className="me-50" />
                      <span>Delete</span>
                    </a>
                  </div>
                </div> */}
                      <td>تثبيت وزن</td>
                      <td>1850</td>
                      <td>شهري</td>
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
                      <td>انثى</td>
                      <td>
                        {/* <span className="badge rounded-pill badge-light-primary me-1">Active</span> */}
                        24
                      </td>
                      <td>23.5</td>
                      {/* <div className="dropdown">
                  <button type="button" className="btn btn-sm dropdown-toggle hide-arrow py-0" data-bs-toggle="dropdown">
                    <i data-feather="more-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      <i data-feather="edit-2" className="me-50" />
                      <span>Edit</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i data-feather="trash" className="me-50" />
                      <span>Delete</span>
                    </a>
                  </div>
                </div> */}
                      <td>تثبيت وزن</td>
                      <td>1850</td>
                      <td>شهري</td>
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
                      <td>انثى</td>
                      <td>
                        {/* <span className="badge rounded-pill badge-light-primary me-1">Active</span> */}
                        24
                      </td>
                      <td>23.5</td>
                      {/* <div className="dropdown">
                  <button type="button" className="btn btn-sm dropdown-toggle hide-arrow py-0" data-bs-toggle="dropdown">
                    <i data-feather="more-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      <i data-feather="edit-2" className="me-50" />
                      <span>Edit</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i data-feather="trash" className="me-50" />
                      <span>Delete</span>
                    </a>
                  </div>
                </div> */}
                      <td>تثبيت وزن</td>
                      <td>1850</td>
                      <td>شهري</td>
                    </tr>
                    <tr className="">
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
                      <td>انثى</td>
                      <td>
                        {/* <span className="badge rounded-pill badge-light-primary me-1">Active</span> */}
                        24
                      </td>
                      <td>23.5</td>
                      {/* <div className="dropdown">
                  <button type="button" className="btn btn-sm dropdown-toggle hide-arrow py-0" data-bs-toggle="dropdown">
                    <i data-feather="more-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      <i data-feather="edit-2" className="me-50" />
                      <span>Edit</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i data-feather="trash" className="me-50" />
                      <span>Delete</span>
                    </a>
                  </div>
                </div> */}
                      <td>تثبيت وزن</td>
                      <td>1850</td>
                      <td>شهري</td>
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

export default Users_Table;
