import { CREATE_NEW_ORDER, CREATE_NEW_ORDER_FAIL, CREATE_NEW_ORDER_REQUEST, MY_ORDER, MY_ORDER_FAIL, MY_ORDER_REQUEST, ORDER_DETAILS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST } from "../Constants/constant";

const initialState = {
    order: []
}

export function OrderReducer(state = initialState, actions) {
    switch (actions.type) {

        case CREATE_NEW_ORDER_REQUEST:
        case MY_ORDER_REQUEST:
            return {
                loading: true
            }

        case CREATE_NEW_ORDER:
        case MY_ORDER:
            return {
                loading: false,
                order: actions.payload
            }
        case CREATE_NEW_ORDER_FAIL:
        case MY_ORDER_FAIL:
            return {
                loading: false,
                error: actions.payload
            }

        default:
            return state

    }
}



export function OrderDetailReducer(state = { orderDetails: [] }, actions) {
    switch (actions.type) {

        case ORDER_DETAILS_REQUEST:
            return {
                loading: true
            }

        case ORDER_DETAILS:
            return {
                loading: false,
                orderDetails: actions.payload
            }
        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: actions.payload
            }

        default:
            return state

    }
}