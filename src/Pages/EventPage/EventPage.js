import React from 'react';
import LandingBanner from '../../Componets/LandingBanner/LandingBanner';
import EventCard from '../../Componets/EventCard/EventCard';

function EventPage() {
    return (
        <div>
            <LandingBanner />
            <div className='row center'>
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    )
}

export default EventPage;