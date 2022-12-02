import React from "react";
import { Link } from "react-router-dom";
import LandingBanner from "../../Common/LandingBanner/LandingBanner";

const EventPage = () => {
    return <div>
        <LandingBanner/>
        <Link to='temp'>
            Go to Temp
        </Link>
    </div>
}

export default EventPage;