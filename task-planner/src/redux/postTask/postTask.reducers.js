import {PostTask_Error, PostTask_loading, PostTask_Success} from "./postTypestypes"

const InitialValue = {
    loading: false,
    error: false,
    PostTask_success:false,
}

export const postTaskReducer = (state = InitialValue, { type, payload }) => {
    switch (type) {
        case PostTask_loading: {
            return {
                ...state,
                loading: true,
                
            }
        }
        case PostTask_Success: {
            return {
                ...state,
                loading: false,
                PostTask_success:true,
            }
        }
        case PostTask_Error: {
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