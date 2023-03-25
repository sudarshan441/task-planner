import { GET_Error, GET_loading, GET_Success } from "./get.types"

const InitialValue = {
    sprints:[],
    loading: false,
    error: false,
}

export const getSprintReducer = (state = InitialValue, { type, payload }) => {
    switch (type) {
        case GET_loading: {
            return {
                ...state,
                loading: true,
                
            }
        }
        case GET_Success: {
            
            return {
                ...state,
                loading: false,
                sprints:payload,
                 
            }
        }
        case GET_Error: {
            return {
                ...state,
                loading: false,
                error: true,
            }

        }
        default: {
            return state
        }
    }
}