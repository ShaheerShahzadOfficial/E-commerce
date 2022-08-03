import axios from "axios"
import { CREATE_NEW_ORDER, CREATE_NEW_ORDER_FAIL, CREATE_NEW_ORDER_REQUEST, MY_ORDER, MY_ORDER_FAIL, MY_ORDER_REQUEST, ORDER_DETAILS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST } from "../Constants/constant"

const CreateOrder = (
    shippingInfo,
    orderItem,
    itemPrice,
    shippingPrice,
    totalPrice) => async (dispatch) => {

        dispatch({
            type: CREATE_NEW_ORDER_REQUEST
        })


        axios.post("http://localhost:4000/order/createOrder",
            {
                shippingInfo,
                orderItem,
                itemPrice,
                shippingPrice,
                totalPrice,
            },
            {
                withCredentials: true,
                credentials: "include",
                headers: { "Content-Type": "application/json" }
            }
        ).then((result) => {
            dispatch({
                type: CREATE_NEW_ORDER,
                payload: result.data
            })
        }).catch((err) => {
            dispatch({
                type: CREATE_NEW_ORDER_FAIL,
                payload: err.response.data.message
            })
        });


    }



const MyOrder = () => async (dispatch) => {

    dispatch({
        type: MY_ORDER_REQUEST
    })


    axios.get("http://localhost:4000/order/myOrder",

        {
            withCredentials: true,
            credentials: "include",
            headers: { "Content-Type": "application/json" }
        }
    ).then((result) => {
        dispatch({
            type: MY_ORDER,
            payload: result.data.orders
        })
    }).catch((err) => {
        dispatch({
            type: MY_ORDER_FAIL,
            payload: err.response.data.message
        })
    });


}


const GetOrderDetail = (id) => async (dispatch) => {

    dispatch({
        type: ORDER_DETAILS_REQUEST
    })


    axios.get(`http://localhost:4000/order/getOrderDetail/${id}`,

        {
            withCredentials: true,
            credentials: "include",
        }
    ).then((result) => {
        dispatch({
            type: ORDER_DETAILS,
            payload: result.data.order
        })
    }).catch((err) => {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: err.response.data.message
        })
    });


}


export {
    CreateOrder,
    MyOrder,
    GetOrderDetail
}