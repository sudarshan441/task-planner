import { POST_Error, POST_loading, POST_Success } from "./post.types"

const InitialValue = {
    loading: false,
    error: false,
}

export const postSprintReducer = (state = InitialValue, { type, payload }) => {
    switch (type) {
        case POST_loading: {
            return {
                ...state,
                loading: true,
                }
        }
        case POST_Success: {
            
            return {
                ...state,
                loading: false,
             
            }
        }
        case POST_Error: {
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