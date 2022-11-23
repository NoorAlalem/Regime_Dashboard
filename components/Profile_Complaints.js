import React, { useState } from 'react'
import FeatherIcon from "feather-icons-react"
import { Link } from "react-router-dom";
import Nav from './Nav';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Profile_Complaints() {

    const [value,setValue] = useState()

    function handleChange(event){
      setValue(event.target.value)
  }
  
  return (
<body
    class="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
    data-open="click"
    data-menu="vertical-menu-modern"
    data-col=""
  >
<Nav />
<Sidebar />


    <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
    </div>
    <div className="content-body">
      <section className="app-user-view-account">
        <div className="row">
          {/* User Sidebar */}
          <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
            {/* User Info */}
            <div className="card">
              <div className="card-body">
                <div className="user-avatar-section mb-3">
                  <div className="d-flex align-items-center flex-column">
                    <img className="img-fluid rounded mt-3 mb-2" src="../../../app-assets/images/portrait/small/avatar-s-2.jpg" height={110} width={110} alt="User avatar" />
                    <div className="user-info text-center">
                      <h4> نور العالم</h4>
                      <span className="badge bg-light-secondary">مشترك شهري</span>
                    </div>
                  </div>
                </div>
               
                <h4 className="fw-bolder border-bottom pb-50 mb-1">معلومات المشترك:</h4>
                <div className="info-container">
                  <ul className="list-unstyled">
                    <li className="mb-75">
                      <span className="fw-bolder me-25">رقم الهاتف:</span>
                      <span className="badge bg-light-primary">0911111111</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25"> البريد الإلكتروني:</span>
                      <span className="badge bg-light-primary">noor.alalem98@gmail.com</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">العنوان:</span>
                      <span className="badge bg-light-primary"> طرابلس</span>
                     
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">العمر:</span>
                      <span className="badge bg-light-primary">24</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">الطول:</span>
                      <span className="badge bg-light-primary">159</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">الوزن:</span>
                      <span className="badge bg-light-primary">56</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">الهدف: </span>
                      <span className="badge bg-light-primary"> المحافظة على الوزن </span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">ممارسة الرياضة: </span>
                       <span className="badge bg-light-primary"> 2-3 اسبوعيًا</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">الحمية الغذائية:</span>
                      <span className="badge bg-light-primary"> كيتو </span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">الحساسية:</span>
                      <span className="badge bg-light-primary"> اللوز </span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">الأمراض:</span>
                       <span className="badge bg-light-danger">لا</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">فقد التوازن:</span>
                       <span className="badge bg-light-danger">لا</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">الأدوية:</span>
                       <span className="badge bg-light-danger">لا</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">مدخن:</span>
                       <span className="badge bg-light-success">نعم</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">ساعات النوم:</span>
                       <span className="badge bg-light-primary">مابين 4 و 6</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">حركة العمل:</span>
                       <span className="badge bg-light-success">نعم</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">افضل وزن:</span>
                       <span className="badge bg-light-primary">منذ سنة</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">الماء:</span>
                       <span className="badge bg-light-primary">2 لتر </span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">سبب الأكل:</span>
                       <span className="badge bg-light-primary"> الإكتئاب </span> &nbsp;
                       <span className="badge bg-light-primary"> الملل </span> &nbsp;
                       <span className="badge bg-light-primary"> السعادة </span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">افضل أكلة:</span>
                       <span className="badge bg-light-primary"> المكرونة </span>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center pt-2">
                    <a href="javascript:;" className="btn btn-primary me-1" data-bs-target="#editUser" data-bs-toggle="modal">
                      تعديل
                    </a>
                    <a href="javascript:;" className="btn btn-outline-danger suspend-user">الغاء الإشتراك</a>
                  </div>
                </div>
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
            {/* /Plan Card */}
          </div>
       
          <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
           
            <ul className="nav nav-pills mb-2">
              <li className="nav-item">
                <Link to='/Profile' className="nav-link">
                  <i data-feather="user" className="font-medium-3 me-50" />
                  <span className="fw-bold">الجدول الزمني</span></Link>
              </li>
              <li className="nav-item">
                <Link to='/Profile_Complaints' className="nav-link active">
                  <i data-feather="lock" className="font-medium-3 me-50" />
                  <span className="fw-bold">الشكاوى</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="app-user-view-billing.html">
                  <i data-feather="bookmark" className="font-medium-3 me-50" />
                  <span className="fw-bold">الوجبات</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="app-user-view-billing.html">
                  <i data-feather="bookmark" className="font-medium-3 me-50" />
                  <span className="fw-bold">الاشتراكات</span>
                </a>
              </li>
             
            </ul>
        
            {/* /Project table */}
            {/* Activity Timeline */}
            <div className="card">
              <h4 className="card-header">الجدول الزمني للمشترك</h4>
              <div className="card-body pt-1">
                <ul className="timeline ms-50">
                  <li className="timeline-item">
                    <span className="timeline-point timeline-point-indicator" />
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                        <h6>تم الإشتراك   </h6>
                        <span className="timeline-event-time me-1">منذ 15/11/2022</span>
                      </div>
                      <p>باقة 99 دينار</p>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <span className="timeline-point timeline-point-warning timeline-point-indicator" />
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                        <h6>تم تقديم شكوى</h6>
                        <span className="timeline-event-time me-1"> منذ 4/11/2022</span>
                      </div>
                      <p>الرجاء المساعدة، لقد قمت بالإشتراك ولم يصلني شي!!</p>
                      <div className="d-flex flex-row align-items-center mb-50">
                        
                        <div className="user-info">
                          <h6 className="mb-0">تم الاتصال من قبل ( اكرام )</h6>
                          <p className="mb-0"> لم يتم الرد</p>
                        </div>
                        
                      </div>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <span className="timeline-point timeline-point-info timeline-point-indicator" />
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                        <h6>طلب تعديل وجبة</h6>
                        <span className="timeline-event-time me-1">منذ 24/10/2022</span>
                      </div>
                      <p> لدي حساسية من اللوز</p>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <span className="timeline-point timeline-point-danger timeline-point-indicator" />
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                        <h6>الغاء الإشتراك</h6>
                        <span className="timeline-event-time me-1">منذ 15/10/2022</span>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <span className="timeline-point timeline-point-info timeline-point-indicator" />
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                        <h6> تعديل بيانات</h6>
                        <span className="timeline-event-time me-1">منذ 10/10/2022</span>
                      </div>
                      <p>تعديل رقم الهاتف</p>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <span className="timeline-point timeline-point-indicator" />
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                        <h6>تم الإشتراك   </h6>
                        <span className="timeline-event-time me-1">منذ 1/10/2022</span>
                      </div>
                      <p>باقة 15 دينار</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          
          </div>
          {/*/ User Content */}
        </div>
      </section>
      {/* Edit User Modal */}
      <div className="modal fade" id="editUser" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-edit-user">
          <div className="modal-content">
            <div className="modal-header bg-transparent">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body pb-5 px-sm-5 pt-50">
              <div className="text-center mb-2">
                <h1 className="mb-1">  تعديل بيانات المشترك </h1>
                <p> سيتم تعديل بيانات المشترك بناءً على رغبته</p>
              </div>
              <form id="editUserForm" className="row gy-1 pt-75" onsubmit="return false">
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserFirstName"> الإسم:</label>
                  <input type="text" name="name" id="modalEditUserFirstName"  className="form-control" placeholder="الإسم واللقب معًا.." defaultValue="نور العالم"  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLastName"> البريد الإلكتروني</label>
                  <input type="text" name="email" id="modalEditUserLastName"  className="form-control" placeholder="noor@gmail.com" defaultValue="noor.alalem98@gmail.com" data-msg="الرجاء كتابة بريدك الإلكتروني" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserFirstName"> رقم الهاتف:</label>
                  <input type="text" name="phone" id="modalEditUserFirstName"  className="form-control" placeholder="0921222122" defaultValue="0911111111"  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLastName"> العمر:</label>
                  <input type="text" name="age" id="modalEditUserLastName"  className="form-control" placeholder="35" defaultValue="24" />
                </div>
                {/* <div className="col-12">
                  <label className="form-label" htmlFor="modalEditUserName">Username</label>
                  <input type="text" id="modalEditUserName" name="modalEditUserName" className="form-control" defaultValue="gertrude.dev" placeholder="john.doe.007" />
                </div> */}
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserEmail">الطول</label>
                  <input type="text" name="height" id="modalEditUserEmail"  className="form-control" defaultValue="59" placeholder="170" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserEmail">العرض</label>
                  <input type="text" name="weight" id="modalEditUserEmail"  className="form-control" defaultValue="56" placeholder="85" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage">الجنس</label>
                  <select name="gender" id="modalEditUserLanguage"  className="select2 form-select">
                    <option value={1}>انثى</option>
                    <option value={2}>ذكر</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserStatus">الهدف</label>
                  <select name="goal" id="modalEditUserStatus"  className="form-select" aria-label="Default select example">
                    <option value={1}>زيادة الوزن</option>
                    <option value={2}>فقدان وزن</option>
                    <option value={3}>المحافظة على الوزن</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage">الرياضة</label>
                  <select name="exercise" id="modalEditUserLanguage"  className="select2 form-select">
                    <option value="no">قليل / لا تمارس الرياضة</option>
                    <option value="">نتمرن 1-2 اسبوعيًا</option>
                    <option value="">نتمرن 2-3 اسبوعيًا</option>
                    <option value="">نتمرن 3-5 اسبوعيًا</option>
                    <option value="">نتمرن 6-7 اسبوعيًا</option>
                    <option value="">رياضي محترف</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage">امراض:</label>
                  <select name='value' onChange={handleChange} id="modalEditUserLanguage"  className="select2 form-select">
                  <option value='no'>لا</option>
                  <option value='yes' >نعم</option >
                    {value === 'yes'  ? 
                    
                    <div className="col-12 col-md-6">
                    <label className="form-label" htmlFor="modalEditTaxID">اسم المرض:</label>
                    <input type="text" name="illness" id="modalEditTaxID"  className="form-control modal-edit-tax-id" placeholder="السكر..." />
                  </div>
                  
                    : 
                    null }
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage">فقد التوازن:</label>
                  <select name='isDizzy' id="modalEditUserLanguage"  className="select2 form-select">
                  <option value='no'>لا</option>
                  <option value='yes' >نعم</option >
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage"> تناول الأدوية:</label>
                  <select name='isMdication' id="modalEditUserLanguage"  className="select2 form-select">
                  <option value='no'>لا</option>
                  <option value='yes' >نعم</option >
                  {/* ADD INPUT IF YES */}
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage">مدخن:</label>
                  <select name='isSmoker' id="modalEditUserLanguage"  className="select2 form-select">
                  <option value='no'>لا</option>
                  <option value='yes' >نعم</option >
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage">ساعات النوم:</label>
                  <select name="sleep" id="modalEditUserLanguage"  className="select2 form-select">
                    <option value=""> اقل من 4 ساعات</option>
                    <option value=""> ما بين 4 و 6 ساعات</option>
                    <option value=""> ما بين 6 و 12 ساعة </option>
                    <option value=""> اكثر من 12 ساعات </option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage">حركة العمل:</label>
                  <select name="work" id="modalEditUserLanguage"  className="select2 form-select">
                    <option value="no">لا</option>
                    <option value=""> نعم، حركة كثيرة</option>
                    <option value=""> نعم، حركة قليلة</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage">افضل وزن :</label>
                  <select name="bestWeight" id="modalEditUserLanguage"  className="select2 form-select">
                    <option value="">منذ سنة</option>
                    <option value=""> منذ سنتين  </option>
                    <option value=""> منذ ثلاث سنوات أو أكثر  </option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage">شراب الماء:</label>
                  <select name="water" id="modalEditUserLanguage"  className="select2 form-select">
                    <option value="">لتر أو أقل </option>
                    <option value=""> 2 لتر أو أكثر    </option>
                    <option value=""> 3 لتر أو أكثر </option>
                  </select>
                </div>
                <div className="col-12">
                <label className="form-label" htmlFor="modalEditUserLanguage">أفضل أكلة مع ذكر اسمها:</label>
                  <select name="water" id="modalEditUserLanguage"  className="select2 form-select mb-1">
                    <option value=""> الحلو</option>
                    <option value=""> الحار</option>
                  </select>
                  <input type="text" name="" id="modalEditUserName"  className="form-control" defaultValue="المكرونة" placeholder="الرجاء كتابة أفضل أكلة لديك..." />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage">سبب الأكل:</label>
                  <select id="modalEditUserLanguage" name="" className="select2 form-select" multiple>
                    <option value="">الملل</option>
                    <option value="">التعب</option>
                    <option value="">الغضب</option>
                    <option value="">السعادة</option>
                    <option value="">الإكتئاب</option>
                    <option value="">القلق</option>
                    <option value="">الضغط النفسي</option>
                    <option value="">التوتر</option>
                  </select>
                </div>
                
              
                <div className="col-12 text-center mt-2 pt-50">
                  <button type="submit" className="btn btn-primary me-1">تأكيد</button>
                  <button type="reset" className="btn btn-outline-secondary" data-bs-dismiss="modal" aria-label="Close">
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
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


</body>
  )
}

export default Profile_Complaints