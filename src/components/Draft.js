import React from 'react'

function Draft() {
  return (
    <div>
      <h1> Searchable Dropdown</h1>
      <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserCountry">Country</label>
                  <select id="modalEditUserCountry" name="modalEditUserCountry" className="select2 form-select">
                    <option value>Select Value</option>
                    <option value="Australia">Australia</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Korea">Korea, Republic of</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Russia">Russian Federation</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                  </select>
                </div>
<h1> on/off button </h1>
<div className="col-12">
                  <div className="d-flex align-items-center mt-1">
                    <div className="form-check form-switch form-check-primary">
                      <input type="checkbox" className="form-check-input" id="customSwitch10" defaultChecked />
                      <label className="form-check-label" htmlFor="customSwitch10">
                        <span className="switch-icon-left"><i data-feather="check" /></span>
                        <span className="switch-icon-right"><i data-feather="x" /></span>
                      </label>
                    </div>
                    <label className="form-check-label fw-bolder" htmlFor="customSwitch10">Use as a billing address?</label>
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
              
    </div>
    
  )
}

export default Draft