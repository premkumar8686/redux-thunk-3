import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import thunk from "redux-thunk";


export const myStore = createStore(
    rootReducer,
    applyMiddleware( thunk ),
)