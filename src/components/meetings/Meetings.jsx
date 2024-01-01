import { useState } from "react";
import { observer } from 'mobx-react';
import Appointment from "../../store/Appointment";
import Meeting from "../meeting/Meeting";
import Store from "../../store/Store";
import './meetings.css'
import { useEffect } from "react";
const Meetings = (observer(() => {
  useEffect(() => { console.log("admin - meeting: ", Appointment.meetingsList) }, [])


  const validDate = (dateTime) => {
    const today = new Date();
    const meetingDate = new Date(dateTime);

    const timeDiff = Math.abs(meetingDate.getTime() - today.getTime())
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    if (diffDays < 0)
      return 'non'
    else
      if (diffDays === 1) {
        return 'red';
      } else if (diffDays <= 7) {
        return 'orange'; //השבוע
      }
      else if (diffDays >= 7) {
        return 'green'; // עתיד
      }

  };
  return (
    <>
      <div>
        <h1>meetingsList</h1>
      </div>
      <div className="meetings-list">

        {/* <div className="meet"> */}
          <ul>
            {Appointment.meetingsList.map((meeting, key) => (
              <li key={key} className="service-item" >
                <h2> serviceName: {meeting.serviceName}</h2>
                <p>  serviceDescribtion:{meeting.serviceDescribtion}</p>
                {/* <p>date: {meeting.dateTime} </p> */}
                <p  className={validDate(meeting.dateTime)}>
                serviceDate: {meeting.dateTime}</p>
                <p>clientName:{meeting.clientName}</p>
                <p>clientPhone: {meeting.clientPhone}</p>
                <p>clientEmail: {meeting.clientEmail}</p>
                {/* <p>משך זמן: {service.duration} דקות</p> */}
              </li>
            ))}
          </ul>
        {/* </div> */}



        {/* {Appointment.meetingsList.map((v, key) => (
        <Meeting key={v} meeting={key} />
      ))} */}
      </div>
    </>
  )
}))

export default Meetings