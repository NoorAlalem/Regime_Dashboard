import React from 'react'
import Footer from "./Footer";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";


function Edit_Ingredident() {
  return (
    <>
    <Nav />
    <Sidebar />
    <div className="app-content content ">
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />

      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row">
          <div className="content-header-left col-md-9 col-12 mb-2">
            <div className="row breadcrumbs-top">
              <div className="col-12">
                <h1 className="float-start mb-0 text-primary">تعديل مكوّن</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="row" id="table-hover-row">
          <div className="col-12">
            <div className="card">
              <div className="card-body mt-2">
                <form className="dt_adv_search" method="POST">
                  <div className="row g-1 mb-md-4">
                    <div className="col-md-3">
                      <label className="form-label">
                        {" "}
                        <b> اسم المكوّن </b>{" "}
                      </label>

                      <input
                        type="text"
                        className="form-control ms-50"
                        placeholder="بيض..."
                      />
                    </div>
                   
                  </div>
                  <div className="row g-1 mb-md-4">
                    <div className="col-md-3">
                      <label className="form-label">
                        {" "}
                        <b>الكمية </b>{" "}
                      </label>

                      <input
                        type="text"
                        className="form-control ms-50"
                        placeholder="100"
                      />
                    </div>
                    <div className="col-md-3 user_status">
                      <label className="form-label">
                        <b> وحدة القياس </b>
                      </label>
                      <select className="form-select text-capitalize mb-md-0 mb-2xx">
                        <option value="g" className="text-capitalize">
                          g
                        </option>
                        <option value="ml" className="text-capitalize">
                          ML
                        </option>
                      </select>
                    </div>

                  </div>

                  <div className="row g-1 mb-md-4">
                  <div className="col-md-3">
                      <label className="form-label">
                        {" "}
                        <b> السعرات  </b>{" "}
                      </label>

                      <input
                        type="text"
                        className="form-control ms-50"
                        placeholder="2000"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">
                        {" "}
                        <b> بروتين  </b>{" "}
                      </label>

                      <input
                        type="text"
                        className="form-control ms-50"
                        placeholder="78 ج"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">
                        {" "}
                        <b> كربوهيدرات  </b>{" "}
                      </label>

                      <input
                        type="text"
                        className="form-control ms-50"
                        placeholder="0.6 ج"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">
                        {" "}
                        <b> دهون</b>{" "}
                      </label>

                      <input
                        type="text"
                        className="form-control ms-50"
                        placeholder="5.3 ج"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                        <center className="mt-1">
                         <button
                          type="button"
                          className="btn btn-success"
                          style={{width:'100px'}}
                        >
                          تأكيـد
                        </button></center>

                   
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Edit_Ingredident