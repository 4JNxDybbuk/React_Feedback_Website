import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // fetch feedback data from backend .
    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:5000/feedback')
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    // add feeback item
    const addFeedback = async (newFeedback) => {
        const response = await fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    // delete feedback item.
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure for delete?')) {
            await fetch(`http://localhost:5000/feedback/${id}`, { method: 'DELETE' })
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    // edit feedback item
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, updatedItem) => {
        const response = await fetch(`http://localhost:5000/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })

        const data = await response.json()
        setFeedback(
            feedback.map((item) => (item.id === id) ? { ...item, ...data } : item)
        )
    }

    return <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            isLoading,
            addFeedback,
            deleteFeedback,
            editFeedback,
            updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext