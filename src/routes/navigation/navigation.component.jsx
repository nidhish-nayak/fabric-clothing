import React, { Fragment } from "react";
//Fragment is used if no parent div element is needed
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <h1>My Navigation bar</h1>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;