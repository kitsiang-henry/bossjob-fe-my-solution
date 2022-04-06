import { actionTypes } from "../actions/actions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    size: 10,
    jobTitle: '',
    companyName: '',
    page: 1,
    error: false,
    placeholderData: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return {
                ...state,
                ...action.payload
            }
        }

        case actionTypes.FAILURE:
            return {
                ...state,
                ...{
                    error: action.error
                }
            }

        case actionTypes.PAGE_INCREMENT:
            return {
                ...state,
                ...{
                    page: state.page + 1
                }
            }

        case actionTypes.PAGE_DECREMENT:
            return {
                ...state,
                ...{
                    page: state.page - 1
                }
            }

        case actionTypes.RESET:
            return {
                ...state,
                ...{
                    count: initialState.count
                }
            }

        case actionTypes.LOAD_DATA_SUCCESS:
            return {
                ...state,
                ...{
                    placeholderData: action.data
                }
            }

        case actionTypes.QUERY:
            return {
                ...state,
                ...{
                    query: action.query
                }
            }

        default:
            return state
    }
}

export default reducer;