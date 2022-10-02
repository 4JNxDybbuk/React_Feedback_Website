import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {

    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet. </p>
    }

    return (
        <div>
            {
                feedback.map((item) => (
                    <FeedbackItem key={item.id} item={item}  />
                ))
            }
        </div>
    )
}

export default FeedbackList