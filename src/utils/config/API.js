// USER REGISTRATION
export const USER_REGISTRATION = 'http://localhost:8000/register/'

// USER LOGIN
export const USER_LOGIN = 'http://localhost:8000/api-token-auth/'
/*
    Required fields in the request body: { username: '', password: '' }
    For remaining api calls token needs to be provided in the request header
*/

// GETTING HOTEL DATA
export const HOTEL_DATA = 'http://localhost:8000/hotel_api/'

// GETTING HOTEL DETAILS
export const HOTEL_DETAILS = 'http://localhost:8000/hotel_api/1'

// ADDING NEW HOTEL
export const ADD_NEW_HOTEL = 'http://localhost:8000/hotel_api/'
/*
Required fields in the request body:
    {
        name: '',
        city: '',
        country: '',
        stars: 0,
        description: '',
        price: 0,
        location: 1,2,
        user: 3
    }
*/

// GETTING REVIEWS FOR SPECIFIED HOTEL
export const SPECIFIED_HOTEL_REVIEWS = 'http://localhost:8000/hotel_api/get_hotel_reviews/1'

// GET FAVORITES FOR CURRENT USER
export const GET_FAVORITES = 'http://localhost:8000/favorites/'

// ADD OR REMOVE FROM FAVORITES
export const FAVORITES_TOGGLE = 'http://localhost:8000/favorites/add_remove'
/*
Required fields in the request body:
    {
        hotel_id: 3,
        is_favorite:
        True/False
    }
*/

//  Hit counter for handling errors. If number of visits is even, it returns success message, otherwise error.
export const HANDLING_COUNTER = 'http://localhost:8000/increment_counter'