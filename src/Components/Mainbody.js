import React from 'react'
import Introduction from './Introduction'
import Form from './Form'
const Mainbody = () => {
    return (
        <div className='container mt-14 flex mx-auto items-center justify-center'>
            <div className="left me-24">
                <Introduction/>
            </div>
            <div className="right bg-white rounded-xl p-8 w-1/3 h-auto mt-16">
                <Form/>
            </div>

        </div>
    )
}

export default Mainbody