
import {
    SET_BUCKET,
    ORDER_BUCKET,
    SET_PRODUCT_PAGE,
    DELETE_BUCKET,
    SET_NUMBER_PLUS,
    SET_CATEGORIES,
    SET_NUMBER_MINUS,
} from '../actions/actions-types'

const initialState = {
    bucketState: [],
    productHref: '/start',
    categor: '',
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_BUCKET:
            return {
                ...state,
                bucketState: action.payload
            };
        case SET_BUCKET:
             
            return {
                ...state,
                bucketState: [...state.bucketState.filter(item => item.name !== action.payload.name), action.payload]
            };
        case SET_NUMBER_PLUS:
             
            return {
                ...state,
                bucketState: [...state.bucketState.map(item => {
                    if (item.name === action.payload.name) {
                        return {
                            ...item, number: item.number + 1
                        }
                    } else {
                        return item;
                    }
                })]
            };
        case SET_NUMBER_MINUS:
           
            return {
                ...state,
                bucketState: [...state.bucketState.map(item => {
                    if (item.name === action.payload.name) {
                        if (item.number > 0) {
                            return {
                                ...item, number: item.number - 1
                            }
                        }
                        if (item.number === 0) {
                            return {
                                ...item, number: item.number * 0
                            }
                        }
                    }
                    else {
                        return item;
                    }
                })]
            };

        case DELETE_BUCKET:
            return {
                ...state,
                bucketState: state.bucketState.slice(0, -1)
            };
        case SET_PRODUCT_PAGE:
             
            return {
                ...state,
                productHref: action.payload,
            };
        case SET_CATEGORIES:
            return {
                ...state,
                categor: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;