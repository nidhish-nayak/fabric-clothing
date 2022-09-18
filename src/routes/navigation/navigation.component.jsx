import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <h1>My Navigation bar</h1>
            <Outlet />
        </div>
    )
}

export default Navigation;