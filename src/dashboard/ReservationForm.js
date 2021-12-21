import React from 'react'
import ErrorAlert from '../layout/ErrorAlert'

const ReservationForm = ({ formData, handleChange, handleSubmit, cancelSubmit, reservationError  }) => {

    return (
        <div className='editRes'>
            <h1>Edit Reservations</h1>
            <ErrorAlert error={reservationError} />
            <form onSubmit={handleSubmit}>
                <div className='name'>
                    <div className='firstName'>
                        <label htmlFor='first_name'>
                            First Name
                            <input
                                id='first_name'
                                type='text'
                                name='first_name'
                                onChange={handleChange}
                                defaultValue={formData.first_name}
                                placeholder='First Name'
                            />
                        </label>
                        <label htmlFor='last_name' className='lastName'>
                            Last Name
                            <input
                                id='last_name'
                                type='text'
                                name='last_name'
                                onChange={handleChange}
                                defaultValue={formData.last_name}
                                placeholder='Last Name'
                            />
                        </label>
                    </div>
                </div>
                
                <div className='mobileNumber'>
                    <label htmlFor='mobile_number'>
                        Mobile Phone Number
                        <input
                            id='mobile_number'
                            type='tel'
                            name='mobile_number'
                            onChange={handleChange}
                            defaultValue={formData.mobile_number}
                            placeholder='Mobile Number'
                        />
                    </label>
                </div>

                <div className='reservationInfo'>
                    <div className='resDate'>
                        <label htmlFor='reservation_date'>
                            Select Reservation Date
                            <input
                                id='reservation_date'
                                type='date'
                                name='reservation_date'
                                onChange={handleChange}
                                defaultValue={formData.reservation_date}
                            />
                        </label>
                    </div>
                    <div className='resTime'>
                        <label htmlFor='reservation_time'>
                            Select Reservation Time
                            <input
                                id='reservation_time'
                                type='time'
                                name='reservation_time'
                                onChange={handleChange}
                                defaultValue={formData.reservation_time}
                            />
                        </label>
                    </div>
                </div>

                <div className='numberPeople'>
                    <label htmlFor='people'>
                        Number of Guests
                        <input
                            id='people'
                            type='number'
                            name='people'
                            onChange={handleChange}
                            defaultValue={formData.people}
                        />
                    </label>
                </div>
                
                <div className='editResBtn'>
                    <button type='submit' className='btn submitBtn'>Submit<span></span></button>
                    <button type='cancel' className='btn cancelBtn' onClick={cancelSubmit}>Cancel<span></span></button>
                </div>
            </form>
        </div>
    )
}

export default ReservationForm