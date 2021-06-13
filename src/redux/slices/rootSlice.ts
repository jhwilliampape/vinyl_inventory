import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "And So I Watch You From Afar - The Endless Shimmering", 	
	    label: 'Sargent House – SH191', 
	    format: "Vinyl, LP, Album, Limited Edition, Translucent Coke Bottle", 
	    country: 'USA', 
	    released: 'October 20,2017', 
	    genre: 'Rock', 
	    style: 'Post Rock, Math Rock', 
	    price: "39.99"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, } = rootSlice.actions;