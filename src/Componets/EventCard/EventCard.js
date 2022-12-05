import React from 'react';
import './EventCard.css';

const EventCard = () => {
    return (
            <div className='eventCardBlock'>
                <div className='innerBannerBlock'>
                </div>
                <h4>Event Title</h4>
                <p>
                    Aliqua ut dolor in ut voluptate deserunt cupidatat cupidatat id aliquip. Exercitation anim anim ex sit fugiat culpa et sit. 
                </p>

                <button className='rsvpBtn'>
                    RSVP
                </button>
            </div>
        
    );
}

export default EventCard;