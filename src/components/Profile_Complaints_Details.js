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
import { useQuery } from 'react-query';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../store/login-context';

function Profile_Complaints_Details({ user, userId }) {
  const { token } = useAuth();

  const fetchUserComplaints = async ({ queryKey }) => {
    const response = await fetch(
      `https://mealsandingrdents-server-production.up.railway.app/dashboard/support/user/${userId}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    console.log(data.data);
    return data.data;
  };
  const { data, status, isPreviousData } = useQuery(
    'userComplaints',
    fetchUserComplaints,
    {
      keepPreviousData: true,
    }
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching data</div>;
  }
  const updateComplaint = async (input, complaintId) => {
    console.log(input, 'input');
    let data;
    if (input === 'تم الرد') {
      data = {
        status: 'تم الرد',
        isSolved: true,
      };
    } else {
      data = {
        status: input,
        isSolved: false,
      };
    }

    const response = await fetch(
      `https://mealsandingrdents-server-production.up.railway.app/dashboard/support/${complaintId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    if (result.success === true) {
      toast.success('تم التعديل بنجاح');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      toast.error('حدث خطأ أثناء التعديل');
    }
  };

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
                    <Link className='nav-link active'>
                      <i data-feather='lock' className='font-medium-3 me-50' />
                      <span className='fw-bold'>الشكاوى</span>
                    </Link>
                  </li>

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

                {/* Complaints */}
                <div className='card'>
                  <h2 className='card-header'>الشكاوى </h2>
                  <div className='card-body'>
                    <div className='content-wrapper container-xxl p-0'>
                      <div id='table-hover-row'>
                        <div className='col-12'>
                          <div className='card'>
                            <hr class='my-0' />
                            <div className='table-responsive'>
                              <table
                                className='table table-hover'
                                style={{
                                  textAlign: 'center',
                                  borderCollapse: 'separate',
                                  borderSpacing: '0 15px',
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
                                  {data.map((complaint) => (
                                    <tr key={complaint._id}>
                                      <td>
                                        <span className='fw-bold'>
                                          {complaint?.inquiry}
                                        </span>
                                      </td>
                                      <td>
                                        <span className='badge rounded-pill badge-light-secondary me-1'>
                                          {complaint?.status}
                                        </span>
                                      </td>
                                      <td>
                                        <UncontrolledDropdown>
                                          <DropdownToggle
                                            caret
                                            tag='span'
                                            className='btn btn-sm dropdown-toggle hide-arrow py-0'
                                          >
                                            <FeatherIcon icon='more-vertical' />
                                          </DropdownToggle>
                                          <DropdownMenu className='dropdown-menu dropdown-menu-end'>
                                            <DropdownItem
                                              className='w-100'
                                              onClick={() =>
                                                updateComplaint(
                                                  'تم الرد',
                                                  complaint._id
                                                )
                                              }
                                            >
                                              <FeatherIcon
                                                icon='check'
                                                className='me-75'
                                              />
                                              <span>تم الرد</span>
                                            </DropdownItem>
                                            <DropdownItem
                                              className='w-100'
                                              onClick={() =>
                                                updateComplaint(
                                                  'لم يتم الرد',
                                                  complaint._id
                                                )
                                              }
                                            >
                                              <FeatherIcon
                                                icon='x'
                                                className='me-75'
                                              />
                                              <span>لم يتم الرد</span>
                                            </DropdownItem>
                                          </DropdownMenu>
                                        </UncontrolledDropdown>
                                      </td>
                                    </tr>
                                  ))}

                                  {/* <tr>
                                    <td>
                                      <span className='fw-bold'>
                                        الرجاء المساعدة لم اتمكن من الدخول الى
                                        التطبيق!! الرجاء المساعدة لم اتمكن من
                                        الدخول الى التطبيق!! الرجاء المساعدة لم
                                        اتمكن من الدخول الى التطبيق!! الرجاء
                                        المساعدة لم اتمكن من الدخول الى
                                        التطبيق!! الرجاء المساعدة لم اتمكن من
                                        الدخول الى التطبيق!!{' '}
                                      </span>
                                    </td>
                                    <td>
                                      <span className='badge rounded-pill badge-light-success me-1'>
                                        {' '}
                                        تمت المتابعة
                                      </span>
                                    </td>
                                    <td>
                                      <UncontrolledDropdown>
                                        <DropdownToggle
                                          caret
                                          tag='span'
                                          className='btn btn-sm dropdown-toggle hide-arrow py-0'
                                        >
                                          <FeatherIcon icon='more-vertical' />
                                        </DropdownToggle>
                                        <DropdownMenu className='dropdown-menu dropdown-menu-end'>
                                          <DropdownItem
                                            className='w-100'
                                            onClick={() => {}}
                                          >
                                            <FeatherIcon
                                              icon='check'
                                              className='me-75'
                                            />
                                            <span>تم الرد</span>
                                          </DropdownItem>
                                          <DropdownItem
                                            className='w-100'
                                            onClick={() => {}}
                                          >
                                            <FeatherIcon
                                              icon='x'
                                              className='me-75'
                                            />
                                            <span>لم يتم الرد</span>
                                          </DropdownItem>
                                        </DropdownMenu>
                                      </UncontrolledDropdown>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span className='fw-bold'>
                                        الرجاء المساعدة لم اتمكن من الدخول الى
                                        التطبيق!! الرجاء المساعدة لم اتمكن من
                                        الدخول الى التطبيق!!{' '}
                                      </span>
                                    </td>
                                    <td>
                                      <span className='badge rounded-pill badge-light-danger me-1'>
                                        {' '}
                                        لم يتم الرد
                                      </span>
                                    </td>
                                    <td>
                                      <UncontrolledDropdown>
                                        <DropdownToggle
                                          caret
                                          tag='span'
                                          className='btn btn-sm dropdown-toggle hide-arrow py-0'
                                        >
                                          <FeatherIcon icon='more-vertical' />
                                        </DropdownToggle>
                                        <DropdownMenu className='dropdown-menu dropdown-menu-end'>
                                          <DropdownItem
                                            className='w-100'
                                            onClick={() => {}}
                                          >
                                            <FeatherIcon
                                              icon='check'
                                              className='me-75'
                                            />
                                            <span>تم الرد</span>
                                          </DropdownItem>
                                          <DropdownItem
                                            className='w-100'
                                            onClick={() => {}}
                                          >
                                            <FeatherIcon
                                              icon='x'
                                              className='me-75'
                                            />
                                            <span>لم يتم الرد</span>
                                          </DropdownItem>
                                        </DropdownMenu>
                                      </UncontrolledDropdown>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span className='fw-bold'>
                                        لم اتمكن من الدخول الى التطبيق!!{' '}
                                      </span>
                                    </td>
                                    <td>
                                      <span className='badge rounded-pill badge-light-success me-1'>
                                        {' '}
                                        تمت المتابعة
                                      </span>
                                    </td>
                                    <td>
                                      <UncontrolledDropdown>
                                        <DropdownToggle
                                          caret
                                          tag='span'
                                          className='btn btn-sm dropdown-toggle hide-arrow py-0'
                                        >
                                          <FeatherIcon icon='more-vertical' />
                                        </DropdownToggle>
                                        <DropdownMenu className='dropdown-menu dropdown-menu-end'>
                                          <DropdownItem
                                            className='w-100'
                                            onClick={() => {}}
                                          >
                                            <FeatherIcon
                                              icon='check'
                                              className='me-75'
                                            />
                                            <span>تم الرد</span>
                                          </DropdownItem>
                                          <DropdownItem
                                            className='w-100'
                                            onClick={() => {}}
                                          >
                                            <FeatherIcon
                                              icon='x'
                                              className='me-75'
                                            />
                                            <span>لم يتم الرد</span>
                                          </DropdownItem>
                                        </DropdownMenu>
                                      </UncontrolledDropdown>
                                    </td>
                                  </tr> */}
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
            className='modal fade'
            id='editUser'
            tabIndex={-1}
            aria-hidden='true'
          >
            <Profile_Edit_Info />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile_Complaints_Details;
