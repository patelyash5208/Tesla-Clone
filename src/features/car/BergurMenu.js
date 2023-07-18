import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    burgeritems : ["Existing Inventory", "Used Inventory", "Trade-In", "Demo Drive", "Insurance", "Fleet", "Cybertruck", "Roadster", "Semi", "Charging", "Commercial Energy", "Utilities", "Careers", "Find Us", "Events", "Support", "Investor Relations"]
}

const burgerSlice = createSlice({
    name : "burger",
    initialState,
    reducers : {}
})

export const selectBurger = state => state.burger.burgeritems

export default burgerSlice.reducer