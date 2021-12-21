import React, { useState, useEffect } from 'react'
import ReservationForm from './ReservationForm'
import { useParams, useHistory } from 'react-router-dom'
import { readReservation, editReservation } from '../utils/api'


function EditReservation() {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        mobile_number: '',
        reservation_date: '',
        reservation_time: '',
        people: 1,
    })
    const [reservationError, setReservationError] = useState(null)

    const params = useParams()
    const history = useHistory()


    useEffect(() => {
        const abortController = new AbortController();
        setReservationError(null);
        readReservation(params.reservation_id, abortController.signal)
          .then((reservation) => setFormData({
              ...reservation,
              reservation_date: new Date(reservation.reservation_date).toISOString().substr(0, 10)
          }))
          .catch(setReservationError);
        return () => abortController.abort();
    }, [params.reservation_id])

    const handleSubmit = (event) => {
        event.preventDefault()
        const abortController = new AbortController()
        editReservation(formData, params.reservation_id, abortController.signal)
            .then(() => history.push(`/dashboard?date=${formData.reservation_date}`))
            .catch(setReservationError)
        return () => abortController.abort()
    }

    const handleChange = ({ target }) => {
        let value = target.value

        if (target.name === 'people') {
            if (value < 1) {
                value = 1
            }

            value = Number(value)
        }
            setFormData({
                ...formData,
                [target.name]: value,
            })
    }

    const cancelSubmit = () => {
        history.goBack()
    }

    return <ReservationForm 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                cancelSubmit={cancelSubmit}
                reservationError={reservationError} 
            />
}


export default EditReservation