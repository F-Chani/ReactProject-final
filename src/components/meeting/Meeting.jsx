import { observer } from 'mobx-react';
import './Meeting.css'
import Appointment from '../../store/Appointment';
const Meeting=(observer(({i},{key})=>{
    return (<>
  <div className="meet">

<p>service meetingType:{Appointment.meetingsList[i]?.meetingType}</p>
<p>service name:{Appointment.meetingsList[i]?.name}</p>
<p>service date:{Appointment.meetingsList[i]?.date}</p>
<p>service email:{Appointment.meetingsList[i]?.email}</p>
      {/* <p>Service Name: {Appointment.meetingsList[i]?.serviceName}</p>
      <p>Service Description: {Appointment.meetingsList[i]?.serviceDescribtion}</p>
      <p>Service Price: {Appointment.meetingsList[i]?.servicePrice}</p>
      <p>Date and Time: {Appointment.meetingsList[i]?.dateTime}</p>
      <p>Client Name: {Appointment.meetingsList[i]?.clientName}</p>
      <p>Client Phone: {Appointment.meetingsList[i]?.clientPhone}</p>
      <p>Client Email: {Appointment.meetingsList[i]?.clientEmail}</p> */}
      {/* כאן תוכל להוסיף את התצוגה של שאר פרטי הפגישה */}
    </div>


    </>
    )
}))
export default Meeting