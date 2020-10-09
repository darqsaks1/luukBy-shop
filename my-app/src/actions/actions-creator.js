export const setHref = (actionType, data) => {
    const action = {
        type: actionType,
        payload: data,
    };
    return action;
};

export const setBucket = (actionType, data) => {
    const action = {
        type: actionType,
        payload: data,
    };
    return action;
};
export const setItemBucket = (actionType, item) => {
    const action = {
        type: actionType,
        payload: item,
    };
    return action;
};
export const deleteBucket = (actionType, data) => {
    const action = {
        type: actionType,
        payload: data,
    };
    console.log(data)
    return action;
};