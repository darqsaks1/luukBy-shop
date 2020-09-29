import {
    SET_BUCKET,
    SET_PRODUCT_PAGE,
    DELETE_BUCKET,
} from '../actions/actions-types'

const initialState = {
    bucketState: [],
    productHref: '/start',
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BUCKET:
            return {
                ...state,
                bucketState: [...state.bucketState, action.payload]
            };
        case DELETE_BUCKET:
            return {
                ...state,
                bucket: state.bucket.slice(0, -1)
            };
        case SET_PRODUCT_PAGE:
            return {
                ...state,
                productHref: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;