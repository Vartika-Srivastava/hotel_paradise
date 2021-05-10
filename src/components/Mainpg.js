import React from 'react'
import Mainpic from './Mainpic';
import Rooms from './Rooms';
import Services from './Services';
import Attractions from './Attractions';

function Mainpg() {
    // let myStyle = {
    //     minHeight: "2000px"
    // }
    return (
        <div>
            <Mainpic />
            <Rooms />
            <Services />
            <Attractions />
        </div>
    )
}

export default Mainpg
