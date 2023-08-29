import React, {useState, useEffect} from "react";
import Navbar from "../Components/Navbar";
import Toolbar from "../Components/Toolbar";
import Sidebar from "../Components/Sidebar";
import DataSheet from "../Components/DataSheet";
import { serviceConnector } from "../Service/serviceConnector";


const Home = () => {
    const [showSheet, setShowheet] = useState(false)

    useEffect(() => {
        serviceConnector(`/WbsMaintenance/LoadWbsview/ct_id=SOUTHAFTEL`, "get")
    },[])
 return (
    <div>
        
        <Navbar />
        <Toolbar />
        <div className="flex">
        <div className="w-1/5"><Sidebar  nodeSelected={(value) => setShowheet(true)}/></div>
        <div className="w-4/5">
            {showSheet && <DataSheet />}
        </div>
        </div>
        
    </div>
 )
}

export default Home