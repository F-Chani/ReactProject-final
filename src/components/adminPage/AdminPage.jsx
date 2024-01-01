import { Link, Outlet } from "react-router-dom";
import AdminDetails from "../adminDetails/AdminDetails";
import { Button } from '@mui/material'
import { useEffect } from "react";

function AdminPage() {

    return (
        <>
            <AdminDetails />
            <div className="button">
            <br />
            <Button>   <Link to="./meeting">Meeting</Link> </Button>
            <br />
            <Button> <Link to="./services" > services</Link> </Button>
            <br />
            
            <Outlet />
            </div>
        </>
    )

}
export default AdminPage
