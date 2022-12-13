import React from 'react'
import FullCalendar, { addDays } from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

function Calendar_Meal() {
  return (
    <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
    </div>
    <div className="content-body">
      {/* Full calendar start */}
      <section>
        <div className="app-calendar overflow-hidden border">
          <div className="row g-0">
            {/* Sidebar */}
            <div className="col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column" id="app-calendar-sidebar">
              <div className="sidebar-wrapper">
                <div className="card-body d-flex justify-content-center">
                  <button  className="btn btn-primary btn-toggle-sidebar w-100" data-bs-toggle="modal" data-bs-target="#add-new-sidebar">
                    <span className="align-middle">اضافة حدث</span>
                    {/* onClick={() => setModalOpen(true)} */}
                  </button>
                </div>
                <div className="card-body pb-0">
                  <h5 className="section-label mb-1">
                    <span className="align-middle"> خاص بمنسق المشاريع : </span>
                  </h5>
                  <br /><br />
                  <div className="form-check mb-1">
                    <input type="radio" className="form-check-input input-filter" id="select-all" defaultChecked />
                    <label className="form-check-label" htmlFor="select-all">يمكنك إضافة الأحداث هنا.</label>
                  </div>
                  <br /> <br />

                  <div className="form-check mb-1">
                    <input type="radio" className="form-check-input input-filter" id="select-all" defaultChecked />
                    <label className="form-check-label" htmlFor="select-all">سوف يتم عرض جميع الأحداث لجميع مستخدمي النظام. </label>
                  </div>
                  <br /><br />

                  <div className="form-check mb-1">
                    <input type="radio" className="form-check-input input-filter" id="select-all" defaultChecked />
                    <label className="form-check-label" htmlFor="select-all">يمكنك مسح جميع الأحداث عند النقر على الحدث. </label>
                  </div>
                                  
                </div>
              </div>
              <div className="mt-auto">
                <img src="../../../app-assets/images/pages/calendar-illustration.png" alt="Calendar illustration" className="img-fluid" />
              </div>
            </div>
            {/* /Sidebar */}
            {/* Calendar */}
            <div className="col position-relative">
              <div className="card shadow-none border-0 mb-0 rounded-0">
                <div className="card-body pb-0">

                <FullCalendar
                    plugins={[ timeGridPlugin , interactionPlugin ]}
                    initialView="timeGridWeek"
                    showNonCurrentDates={3}
                    locale="ar"
                    editable={true}
                    Calendar_Meal
                />
                {/* <FullCalendar
                    locale="ar"
                    ref={calendarRef}
                    events={events}
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    eventAdd={event => handleEventAdd(event)}
                    datesSet={ (date) => handleDateSet(date)}
                    eventColor="#1484a8"
                    eventClick={ eventClick}
                /> */}
                </div>
              </div>
            </div>
            {/* /Calendar */}
            <div className="body-content-overlay" />
          </div>
        </div>
        {/* Calendar Add/Update/Delete event modal*/}
        {/* <Calendar_Add_Event isOpen={modalOpen} onClose={() => setModalOpen(false)} 
      onEventAdded={event => onEventAdded(event)} /> */}
        {/*/ Calendar Add/Update/Delete event modal*/}
      </section>
      {/* Full calendar end */}
    </div>
  </div>
</div>
  )
}

export default Calendar_Meal