import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/user/'

// Create new goal
/*
const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL, goalData, config)

    return response.data
}
*/
// Get user goals
const getProfile = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL + 'profile', null, config)
    console.log(response)
    return response.data.body
}
const updateProfile = async (profileData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    console.log('updateprofile-------------------')
    console.log(token)
    console.log(profileData)
    const response = await axios.put(API_URL + 'profile', profileData, config)
    console.log(response)
    return response.data.body
}
// Delete user goal
/*
const deleteGoal = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + goalId, config)

    return response.data
}
*/

const profileService = {
    /*createGoal,*/
    getProfile,
    updateProfile,
    /*deleteGoal,*/
}

export default profileService