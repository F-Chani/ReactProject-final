import { useEffect } from 'react';
import { useState } from 'react';
import AdminData from '../../store/AdminData';
import {observer} from "mobx-react";
import Store from '../../store/Store';
import AddService from '../addService/AddService';
import './Services.css'

const Services=(observer(()=> {

    return (
      <>
       {AdminData.isLogin? <AddService/> :<></>}
      <div className="services-container">
  <h1>רשימת שירותים</h1>
  <ul>
    {AdminData.services.map(service => (
      <li key={service.id} className="service-item">
        <h2>  שם השרות: {service.name}</h2>
        <p> תאור השירות: {service.description} </p>
        <p> {service.price} :מחיר</p>
        <p> {service.during} :משך זמן השירות</p>
      </li>
    ))}
  </ul>
</div>
      </>
    )
  }))

  export default Services
  