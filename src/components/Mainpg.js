import React from 'react'
import Mainpic from './Mainpic';
import Rooms from './Rooms';
import Services from './Services';
import Attractions from './Attractions';
import Booking from './Booking'

function Mainpg() {
    return (
        <>
            <Mainpic />
            <Rooms />
            <Services />
            <Attractions />
            <Booking/>
        </>
    )
}

export default Mainpg
