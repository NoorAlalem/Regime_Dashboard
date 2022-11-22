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


    </div>
    
  )
}

export default Draft