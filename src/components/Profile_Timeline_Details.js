import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import Profile_Info_Details from './Profile_Info_Details';
import Profile_Edit_Info from './Profile_Edit_Info';

function Profile_Timeline_Details({ user, userId }) {
  const [value, setValue] = useState();

  console.log(user, userId);
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <div className='app-content content '>
        <div className='content-overlay' />
        <div className='header-navbar-shadow' />
        <div className='content-wrapper container-xxl p-0'>
          <div className='content-header row'></div>
          <div className='content-body'>
            <section className='app-user-view-account'>
              <div className='row'>
                {/* User Sidebar */}
                <Profile_Info_Details user={user} />

                <div className='col-xl-8 col-lg-7 col-md-7 order-0 order-md-1'>
                  {/* Links */}
                  <ul className='nav nav-pills mb-2'>
                    <li className='nav-item'>
                      <Link className='nav-link active'>
                        <i
                          data-feather='user'
                          className='font-medium-3 me-50'
                        />
                        <span className='fw-bold'>الجدول الزمني</span>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        to={`/user-complaints/${userId}`}
                        className='nav-link'
                      >
                        <i
                          data-feather='lock'
                          className='font-medium-3 me-50'
                        />
                        <span className='fw-bold'>الشكاوى</span>
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="app-user-view-billing.html">
                        <i
                          data-feather="bookmark"
                          className="font-medium-3 me-50"
                        />
                        <span className="fw-bold">الوجبات</span>
                      </a>
                    </li> */}
                    <li className='nav-item'>
                      <Link
                        to={`/user-subscription/${userId}`}
                        className='nav-link'
                      >
                        <i
                          data-feather='bookmark'
                          className='font-medium-3 me-50'
                        />
                        <span className='fw-bold'>الاشتراكات</span>
                      </Link>
                    </li>
                  </ul>

                  {/* TimeLine */}
                  <div className='card'>
                    <h4 className='card-header'>الجدول الزمني للمشترك</h4>
                    {/* <div className='card-body pt-1'>
                      <ul className='timeline ms-50'>
                        <li className='timeline-item'>
                          <span className='timeline-point timeline-point-indicator' />
                          <div className='timeline-event'>
                            <div className='d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1'>
                              <h6>تم الإشتراك </h6>
                              <span className='timeline-event-time me-1'>
                                منذ 15/11/2022
                              </span>
                            </div>
                            <p>باقة 99 دينار</p>
                          </div>
                        </li>
                        <li className='timeline-item'>
                          <span className='timeline-point timeline-point-warning timeline-point-indicator' />
                          <div className='timeline-event'>
                            <div className='d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1'>
                              <h6>تم تقديم شكوى</h6>
                              <span className='timeline-event-time me-1'>
                                {' '}
                                منذ 4/11/2022
                              </span>
                            </div>
                            <p>
                              الرجاء المساعدة، لقد قمت بالإشتراك ولم يصلني شي!!
                            </p>
                            <div className='d-flex flex-row align-items-center mb-50'>
                              <div className='user-info'>
                                <h6 className='mb-0'>
                                  تم الاتصال من قبل ( اكرام )
                                </h6>
                                <p className='mb-0'> لم يتم الرد</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className='timeline-item'>
                          <span className='timeline-point timeline-point-info timeline-point-indicator' />
                          <div className='timeline-event'>
                            <div className='d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1'>
                              <h6>طلب تعديل وجبة</h6>
                              <span className='timeline-event-time me-1'>
                                منذ 24/10/2022
                              </span>
                            </div>
                            <p> لدي حساسية من اللوز</p>
                          </div>
                        </li>
                        <li className='timeline-item'>
                          <span className='timeline-point timeline-point-danger timeline-point-indicator' />
                          <div className='timeline-event'>
                            <div className='d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1'>
                              <h6>الغاء الإشتراك</h6>
                              <span className='timeline-event-time me-1'>
                                منذ 15/10/2022
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className='timeline-item'>
                          <span className='timeline-point timeline-point-info timeline-point-indicator' />
                          <div className='timeline-event'>
                            <div className='d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1'>
                              <h6> تعديل بيانات</h6>
                              <span className='timeline-event-time me-1'>
                                منذ 10/10/2022
                              </span>
                            </div>
                            <p>تعديل رقم الهاتف</p>
                          </div>
                        </li>
                        <li className='timeline-item'>
                          <span className='timeline-point timeline-point-indicator' />
                          <div className='timeline-event'>
                            <div className='d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1'>
                              <h6>تم الإشتراك </h6>
                              <span className='timeline-event-time me-1'>
                                منذ 1/10/2022
                              </span>
                            </div>
                            <p>باقة 15 دينار</p>
                          </div>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </section>

            {/* Edit User Modal */}
            <div
              className='modal fade'
              id='editUser'
              tabIndex={-1}
              aria-hidden='true'
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
    </>
  );
}

export default Profile_Timeline_Details;
