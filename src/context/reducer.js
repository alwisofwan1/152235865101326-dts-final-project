export const actionType = {
  SET_USER: 'SET_USER',
  SET_FOOD_ITEMS: 'SET_FOOD_ITEMS',
  SET_CART_SHOW: 'SET_CART_SHOW',
  SET_CARTITEMS: 'SET_CARTITEMS',
  SET_LOADING_DATA: 'SET_LOADING_DATA',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };

    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };

    case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };

    case actionType.SET_LOADING_DATA:
      return {
        ...state,
        loadingData: action.loadingData,
      };

    default:
      return state;
  }
};

export default reducer;
