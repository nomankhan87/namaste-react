import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: ['test']
    },
    reducers :{
        //two definition of by akshay
       //additem is action, and this function is reducer function     
       //or this addItem is a recer function which mao to the action
        addItem : (state, action) =>{
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
          },
        //originalState = {items: ["pizza"]}
        clearCart: (state, action) => {
        //RTK - either Mutate the existing  state or return a new State
        // state.items.length = 0; // originalState = []
    
        return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
        },    
    }


    

})

export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer;


//export specific action example from cw platofrm

// export const selectCurrentUser = (state: RootState) => state.auth.user;
// export const isLoggedIn = (state: RootState) => state.auth.jwt;
// export const selectUniqueDeviceId = (state: RootState) =>
//   state.auth.uniqueDeviceId;


