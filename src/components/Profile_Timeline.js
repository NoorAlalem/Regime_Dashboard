import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

function Profile_Timeline() {
  const [value, setValue] = useState();

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <>
      {/* Timeline */}
      <div className="card">
        <h4 className="card-header">الجدول الزمني للمشترك</h4>
        <div className="card-body pt-1">
          <ul className="timeline ms-50">
            <li className="timeline-item">
              <span className="timeline-point timeline-point-indicator" />
              <div className="timeline-event">
                <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                  <h6>تم الإشتراك </h6>
                  <span className="timeline-event-time me-1">
                    منذ 15/11/2022
                  </span>
                </div>
                <p>باقة 99 دينار</p>
              </div>
            </li>
            <li className="timeline-item">
              <span className="timeline-point timeline-point-warning timeline-point-indicator" />
              <div className="timeline-event">
                <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                  <h6>تم تقديم شكوى</h6>
                  <span className="timeline-event-time me-1">
                    {" "}
                    منذ 4/11/2022
                  </span>
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
                  <span className="timeline-event-time me-1">
                    منذ 24/10/2022
                  </span>
                </div>
                <p> لدي حساسية من اللوز</p>
              </div>
            </li>
            <li className="timeline-item">
              <span className="timeline-point timeline-point-danger timeline-point-indicator" />
              <div className="timeline-event">
                <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                  <h6>الغاء الإشتراك</h6>
                  <span className="timeline-event-time me-1">
                    منذ 15/10/2022
                  </span>
                </div>
              </div>
            </li>
            <li className="timeline-item">
              <span className="timeline-point timeline-point-info timeline-point-indicator" />
              <div className="timeline-event">
                <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                  <h6> تعديل بيانات</h6>
                  <span className="timeline-event-time me-1">
                    منذ 10/10/2022
                  </span>
                </div>
                <p>تعديل رقم الهاتف</p>
              </div>
            </li>
            <li className="timeline-item">
              <span className="timeline-point timeline-point-indicator" />
              <div className="timeline-event">
                <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                  <h6>تم الإشتراك </h6>
                  <span className="timeline-event-time me-1">
                    منذ 1/10/2022
                  </span>
                </div>
                <p>باقة 15 دينار</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile_Timeline;
