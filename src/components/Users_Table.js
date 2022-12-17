import React, { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import { useQuery } from 'react-query';
import formatSub from '../utils/sub';
import { useDebounce } from 'use-debounce';
import { useAuth } from '../store/login-context';
import toast, { Toaster } from 'react-hot-toast';

function Users_Table() {
  const { token } = useAuth();

  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('0916304597');
  const debouncedFilter = useDebounce(filter, 1000);

  const fetchUser = async ({ queryKey }) => {
    const response = await fetch(
      `https://mealsandingrdents-server-production.up.railway.app/dashboard/user/phone/${queryKey[1]}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    if (data?.success === true) {
      return [data?.data];
    } else {
      return [];
    }
  };
  const { data, status, isPreviousData, isError, isSuccess } = useQuery(
    ['users', debouncedFilter[0]],
    fetchUser,
    {
      keepPreviousData: true,
    }
  );
  useEffect(() => {
    console.log(status, 'status');
    console.log(isError, 'isError');
  }, [status, isError]);

  if (status === 'loading') {
    // toast.loading('جاري تحميل البيانات...');
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    console.log(isError, 'error');

    return <div>Error fetching data</div>;
  }
  return (
    <div className='app-content content '>
      <div className='content-overlay' />
      <div className='header-navbar-shadow' />
      <Toaster />
      <div className='content-wrapper container-xxl p-0'>
        <div className='content-header row'>
          <div className='content-header-left col-md-9 col-12 mb-2'>
            <div className='row breadcrumbs-top'>
              <div className='col-12'>
                <h1 className='float-start mb-0 text-primary'>
                  {' '}
                  جميع المشتركين
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className='row' id='table-hover-row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body mt-2'>
                <form className='dt_adv_search' method='POST'>
                  <div className='row g-1 mb-md-1'>
                    <div className='col-md-4'>
                      <label className='form-label'>
                        {' '}
                        <b> البحث عن جميع بيانات الجدول: </b>{' '}
                      </label>
                      <div
                        style={{ width: '100.7%', marginTop: '3px' }}
                        className='input-group '
                      >
                        <span
                          className='input-group-text'
                          id='basic-addon-search1'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={14}
                            height={14}
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-search'
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2='16.65' y2='16.65' />
                          </svg>
                        </span>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='البحث عن معلومات الزبائن...'
                          aria-label='Search...'
                          aria-describedby='basic-addon-search1'
                          onChange={(e) => setFilter(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-md-4 user_status'>
                      <label className='form-label'>
                        <b> الجنس </b>
                      </label>
                      <select className='form-select text-capitalize mb-md-0 mb-2xx'>
                        <option value='new' className='text-capitalize'>
                          الكل
                        </option>
                        <option value='new' className='text-capitalize'>
                          انثى
                        </option>
                        <option value='old' className='text-capitalize'>
                          ذكر
                        </option>
                      </select>
                    </div>
                    <div className='col-md-4 user_plan'>
                      <label className='form-label' htmlFor='UserPlan'>
                        <b> نوع الإشتراك </b>
                      </label>
                      <select
                        id='UserPlan'
                        className='form-select text-capitalize mb-md-0 mb-2'
                      >
                        <option value='Basic' className='text-capitalize'>
                          الكل
                        </option>
                        <option value='Basic' className='text-capitalize'>
                          يومي
                        </option>
                        <option value='Company' className='text-capitalize'>
                          اسبوعي
                        </option>
                        <option value='Enterprise' className='text-capitalize'>
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
                      <th>#</th>
                      <th>اسم المشترك </th>
                      <th>رقم الهاتف</th>
                      <th>الجنس</th>
                      <th>العمر</th>
                      <th>BMI</th>
                      <th>الهدف</th>
                      <th>السعرات المستهدفه</th>
                      <th>نوع الإشتراك</th>
                      <th>تايخ انتهاء الإشتراك</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data?.map((user, index) => (
                        <tr>
                          <td>{index}</td>
                          <td>
                            <span className='fw-bold'>{user?.name}</span>
                          </td>
                          <td>{user?.phone}</td>
                          <td>{user?.gender}</td>
                          <td>{user?.age}</td>
                          <td>{user?.bmi}</td>
                          <td>{user?.goal}</td>
                          <td>{user?.bmr}</td>
                          <td>
                            {user?.subscriptions?.length < 1
                              ? 'لا يوجد'
                              : formatSub(
                                  user?.subscriptions[0].subOtherPlatform
                                ) || formatSub(user?.subscriptions[0].sub.name)}
                          </td>
                          <td>
                            {user?.subscriptions?.length < 1
                              ? 'لا يوجد'
                              : user?.subscriptions[0].endDate.split('T')[0]}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan='10'>لا يوجد بيانات</td>
                      </tr>
                    )}
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
