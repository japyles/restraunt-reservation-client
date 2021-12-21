import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ErrorAlert from '../layout/ErrorAlert'
import { postReservation } from '../utils/api'
import ReservationForm from './ReservationForm'

const NewReservation = ({ date }) => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        mobile_number: '',
        reservation_date: date,
        reservation_time: '10:08',
        people: '',
    })
    const [reservationError, setReservationError] = useState(null)

    const history = useHistory()

    const handleChange = ({ target }) => {
        let value = target.value
        if (target.name === 'people') {
            if (value < 1) value = 1
            
            value = Number(value)
        }

            setFormData({
                ...formData,
                [target.name]: value
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postReservation(formData)
            .then(res => {
                history.push(`/dashboard?date=${formData.reservation_date}`)
            }).catch((error) => {
                console.log('Error:', error)
                setReservationError(error)
            })
    }

    const cancelSubmit = () => {
        history.push(`/dashboard`)
    }


    return (

        <div>
            <ReservationForm 
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                cancelSubmit={cancelSubmit}
                reservationError={reservationError}
            />

            <ErrorAlert error={reservationError} />
        </div>
    )
}

export default NewReservation