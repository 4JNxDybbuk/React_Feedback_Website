import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStatus = () => {

    const { feedback } = useContext(FeedbackContext)

    const average = Math.round(feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
    )

    return (
        <div className='feedback-stats'>
            <h4> {feedback.length} Reviews</h4>
            <h4> Average Rating : {isNaN(average) ? 0 : average} </h4>
        </div>
    )
}


export default FeedbackStatus