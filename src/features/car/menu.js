import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuitems : ["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panel", "Powerwall", "Shop", "Account"]
}

const menuSlice = createSlice({
    name : "menu",
    initialState,
    reducers : {}
})

export const selectMenu = state => state.menu.menuitems

export default menuSlice.reducer