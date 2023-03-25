import {PostTask_success} from "./postTypestypes"

const InitialValue = {
    loading: false,
    error: false,
    PostTask_success:false,
}

export const postTaskReducer = (state = InitialValue, { type, payload }) => {
    switch (type) {
        case SIGNUP_loading: {
            return {
                ...state,
                loading: true,
                
            }
        }
        case SIGNUP_Success: {
            return {
                ...state,
                loading: false,
                PostTask_success:true,
            }
        }
        case SIGNUP_Error: {
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