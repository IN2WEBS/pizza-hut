const ordersReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_PIZZA' :
            return [...state, action.payload];
        case 'ADD_DRINK' :
            return [...state, action.payload];
        default : return state
    }
};

export default ordersReducer;