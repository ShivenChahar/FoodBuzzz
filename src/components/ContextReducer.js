import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      // Find if item with same id and size already exists
      const existingIndex = state.findIndex(
        (item) => item.id === action.id && item.size === action.size
      );

      if (existingIndex !== -1) {
        // Item exists: update qty and price
        return state.map((item, index) => {
          if (index === existingIndex) {
            const newQty = item.qty + action.qty;
            return {
              ...item,
              qty: newQty,
              price: item.unitPrice * newQty, // price recalculated
            };
          }
          return item;
        });
      } else {
        // Add new item with unitPrice stored separately
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            size: action.size,
            unitPrice: action.price, // per item price
            price: action.price * action.qty, // total price for qty
            img: action.img,
            qty: action.qty,
          },
        ];
      }
    }

    case 'REMOVE': {
      const newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    }

    case 'DROP':
      return [];

    default:
      console.error('Unknown action type:', action.type);
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
