import React from 'react'
import facebook from '../Images/facebookLogo.svg'
const Introduction = () => {
    return (
        <>
            <img className='w-80' src={facebook} alt="" srcset="" />
            <p className='text-3xl mx-6 text-left font-semibold'>Facebook helps you connect and  share <br /> with the people in your life.</p>
        </>
    )
}

export default Introduction