import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Sidebar from './Sidebar';
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import Profile_Edit_Info from './Profile_Edit_Info';
import Profile_Info_Details from './Profile_Info_Details';
import formatSub from '../utils/sub';

function Profile_Subscription_Details({ user, userId }) {
  const [value, setValue] = useState();

  function handleChange(event) {
    setValue(event.target.value);
  }

  const options = [
    { value: 'A', label: 'الملل' },
    { value: 'B', label: 'التعب' },
    { value: 'C', label: 'الغضب' },
    { value: 'D', label: 'السعادة' },
    { value: 'E', label: 'الإكتئاب' },
    { value: 'F', label: 'القلق' },
    { value: 'G', label: 'الضغط النفسي' },
    { value: 'H', label: 'التوتر' },
  ];

  return (
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
                    <Link to={`/user-timeline/${userId}`} className='nav-link'>
                      <i data-feather='user' className='font-medium-3 me-50' />
                      <span className='fw-bold'>الجدول الزمني</span>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      to={`/user-complaints/${userId}`}
                      className='nav-link'
                    >
                      <i data-feather='lock' className='font-medium-3 me-50' />
                      <span className='fw-bold'>الشكاوى</span>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link className='nav-link active'>
                      <i
                        data-feather='bookmark'
                        className='font-medium-3 me-50'
                      />
                      <span className='fw-bold'>الاشتراكات</span>
                    </Link>
                  </li>
                </ul>

                {/* Current Subscription */}
                <div className='card'>
                  <div className='card-header'>
                    <h4 className='card-title'>
                      {' '}
                      <b> اشتراكات المشترك </b>{' '}
                    </h4>
                  </div>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='mb-2 pb-50'>
                          <h5>
                            الاشتراك الحالي هو
                            <strong className='badge badge-light-primary ms-50'>
                              {user?.subscriptions?.length < 1
                                ? 'لا يوجد'
                                : formatSub(
                                    user?.subscriptions[0].subOtherPlatform
                                  ) ||
                                  formatSub(user?.subscriptions[0].sub.name)}
                            </strong>
                          </h5>
                        </div>
                        <div className='mb-2 pb-50'>
                          <h5>
                            تاريخ الإشتراك
                            <strong className='badge badge-light-primary ms-50'>
                              {user?.subscriptions?.length < 1
                                ? 'لا يوجد'
                                : user?.subscriptions[0].startDate.split(
                                    'T'
                                  )[0]}
                            </strong>
                          </h5>
                          <h5>
                            تاريخ انتهاء الاشتراك
                            <strong className='badge badge-light-danger ms-50'>
                              {user?.subscriptions?.length < 1
                                ? 'لا يوجد'
                                : user?.subscriptions[0].endDate.split('T')[0]}
                            </strong>
                          </h5>
                        </div>
                        {/* <div className="mb-2 mb-md-1">
          <h5>$199 Per Month <span className="badge badge-light-primary ms-50">Popular</span></h5>
          <span>Standard plan for small to medium businesses</span>
        </div> */}
                      </div>
                      <div className='col-md-6'>
                        <div className='alert alert-success mb-2' role='alert'>
                          <h6 className='alert-heading'>عدد الإشتراكات </h6>
                          <div className='alert-body fw-normal'>
                            {' '}
                            {user?.subscriptions?.length > 0
                              ? user?.subscriptions?.length
                              : 'لا يوجد'}{' '}
                          </div>
                        </div>
                      </div>
                      <div className='col-12'>
                        <button
                          className='btn btn-primary me-1 mt-1'
                          data-bs-toggle='modal'
                          data-bs-target='#upgradePlanModal'
                        >
                          تجديد الإشتراك
                        </button>
                        <button className='btn btn-outline-danger cancel-subscription mt-1'>
                          {' '}
                          إلغاء الإشتراك
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className='card'>
                  <div className='card-header'>
                    <h4 className='card-title mb-50'>
                      <b> طرق الدفع</b>{' '}
                    </h4>
                  </div>
                  <div className='card-body'>
                    <div className='added-cards'>
                      {user?.subscriptions.map((sub, index) => (
                        <div className='cardMaster border rounded p-2 mb-1'>
                          <div className='d-flex justify-content-between flex-sm-row flex-column'>
                            <div className='card-information'>
                              {/* <img
                                className='mb-1 img-fluid'
                                src='../../../app-assets/images/icons/payments/visa.png'
                                alt='Visa Card'
                              /> */}
                              <h6>{sub?.paymentMethod} </h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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

          {/* upgrade subscription */}
          <div
            className='modal fade'
            id='upgradePlanModal'
            tabIndex={-1}
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered modal-upgrade-plan'>
              <div className='modal-content'>
                <div className='modal-header bg-transparent'>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  />
                </div>
                <div className='modal-body px-5 pb-2'>
                  <div className='text-center mb-2'>
                    <h1 className='mb-1'> تجديد الإشتراك</h1>
                  </div>
                  <form
                    id='upgradePlanForm'
                    className='row pt-50'
                    onsubmit='return false'
                  >
                    <div className='col-sm-8'>
                      <label className='form-label' htmlFor='choosePlan'>
                        {' '}
                        اختيار باقة
                      </label>
                      <select
                        id='choosePlan'
                        name='choosePlan'
                        className='form-select'
                        aria-label='Choose Plan'
                      >
                        <option selected> اختيار باقة</option>
                        <option value='standard'>باقة اسبوعية - 15دينار</option>
                        <option value='exclusive'>باقة شهرية - 39دينار </option>
                        <option value='Enterprise'>
                          {' '}
                          باقة ربع سنوية - 99دينار
                        </option>
                      </select>
                    </div>
                    <div className='col-sm-4 text-sm-end'>
                      <button type='submit' className='btn btn-primary mt-2'>
                        تأكيد
                      </button>
                    </div>
                  </form>
                </div>
                <hr />
                <div className='modal-body px-5 pb-3'>
                  <h6>الباقة الحالية للمشترك هي الباقة الشهرية</h6>
                  <div className='d-flex justify-content-between align-items-center flex-wrap'>
                    <div className='d-flex justify-content-center me-1 mb-1'>
                      <sup className='h5 pricing-currency pt-1 text-primary'>
                        LYD
                      </sup>
                      <h1 className='fw-bolder display-4 mb-0 text-primary me-25'>
                        39
                      </h1>
                      <sub className='pricing-duration font-small-4 mt-auto mb-2'>
                        /شهر
                      </sub>
                    </div>
                    <button className='btn btn-outline-danger cancel-subscription mb-1'>
                      {' '}
                      إلغاء الإشتراك
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile_Subscription_Details;
