import React, { useState } from 'react';
import Profile_Timeline from './Profile_Timeline_Details';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Nav from './Nav';
import Sidebar from './Sidebar';
import formatSub from '../utils/sub';

function Profile_Info_Details({ user }) {
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
    <div className='col-xl-4 col-lg-5 col-md-5 order-1 order-md-0'>
      {/* User Info */}
      <div className='card'>
        <div className='card-body'>
          <div className='user-avatar-section mb-3'>
            <div className='d-flex align-items-center flex-column'>
              <img
                className='img-fluid rounded mt-3 mb-2'
                src='../../../app-assets/images/portrait/small/avatar-s-2.jpg'
                height={110}
                width={110}
                alt='User avatar'
              />
              <div className='user-info text-center'>
                <h4> {user?.name}</h4>
                <span className='badge bg-light-secondary'>
                  {user?.subscriptions?.length < 1
                    ? 'لا يوجد'
                    : formatSub(user?.subscriptions[0].subOtherPlatform) ||
                      formatSub(user?.subscriptions[0].sub.name)}
                </span>
              </div>
            </div>
          </div>

          <h4 className='fw-bolder border-bottom pb-50 mb-1'>
            معلومات المشترك:
          </h4>
          <div className='info-container'>
            <ul className='list-unstyled'>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>رقم الهاتف:</span>
                <span className='badge bg-light-primary'>{user?.phone}</span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'> البريد الإلكتروني:</span>
                <span className='badge bg-light-primary'>
                  {user?.email || 'لا يوجد'}
                </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>العنوان:</span>
                <span className='badge bg-light-primary'>
                  {' '}
                  {user?.address || 'لا يوجد'}
                </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>العمر:</span>
                <span className='badge bg-light-primary'>{user?.age}</span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>الطول:</span>
                <span className='badge bg-light-primary'>{user?.height}</span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>الوزن:</span>
                <span className='badge bg-light-primary'>{user?.weight}</span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>الهدف: </span>
                <span className='badge bg-light-primary'>{user?.goal}</span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>ممارسة الرياضة: </span>
                <span className='badge bg-light-primary'>
                  {' '}
                  {user?.exercise}
                </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>الحمية الغذائية:</span>
                <span className='badge bg-light-primary'> null </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>الحساسية:</span>
                <span className='badge bg-light-primary'> null </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>الأمراض:</span>
                <span className='badge bg-light-danger'>
                  {user?.isIll ? 'نعم' : 'لا' || 'لا يوجد'}
                </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>فقد التوازن:</span>
                <span className='badge bg-light-danger'>
                  {user?.isDizzy ? 'نعم' : 'لا' || 'لا يوجد'}
                </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>الأدوية:</span>
                <span className='badge bg-light-danger'>
                  {user?.isMdication ? 'نعم' : 'لا' || 'لا يوجد'}
                </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>مدخن:</span>
                <span className='badge bg-light-success'>
                  {user?.isSmoker ? 'نعم' : 'لا' || 'لا يوجد'}
                </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>ساعات النوم:</span>
                <span className='badge bg-light-primary'>
                  {user?.sleep || 'لا يوجد'}
                </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>حركة العمل:</span>
                <span className='badge bg-light-success'>
                  {user?.work || 'لا يوجد'}
                </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>افضل وزن:</span>
                <span className='badge bg-light-primary'>
                  {user?.bestWeight || 'لا يوجد'}
                </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>الماء:</span>
                <span className='badge bg-light-primary'>
                  {user?.water || 'لا يوجد'}
                </span>
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>سبب الأكل:</span>
                {user?.eatingDisorder.length > 0
                  ? user?.eatingDisorder?.map((reason, index) => (
                      <span key={index}>
                        <span className='badge bg-light-primary'>
                          {reason} &nbsp;
                        </span>
                      </span>
                    ))
                  : 'لا يوجد'}
              </li>
              <li className='mb-75'>
                <span className='fw-bolder me-25'>افضل أكلة:</span>
                <span className='badge bg-light-primary'>
                  {' '}
                  {user?.foods || 'لا يوجد'}{' '}
                </span>
              </li>
            </ul>
            <div className='d-flex justify-content-center pt-2'>
              <button
                href='javascript:;'
                className='btn btn-primary me-1'
                data-bs-target='#editUser'
                data-bs-toggle='modal'
              >
                تعديل
              </button>
              <a
                href='javascript:;'
                className='btn btn-outline-danger suspend-user'
              >
                الغاء الإشتراك
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile_Info_Details;
