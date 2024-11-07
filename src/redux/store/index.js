import { configureStore } from "@reduxjs/toolkit";
import interfaceReducer from "../slice/interface";
import selectorReducer from "../slice/selector";
import ProductsSlice from "../slice/ProductsSlice";
import FeedbacksSlice from "../slice/FeedbackSlice";
import AddressSlice from "../slice/AddressSlice";
import UserSlice from "../slice/UserSlice";
import heroSlice from "../slice/HeroSlice";
import offersSlice from "../slice/OfferSlice";

export const store = configureStore({
    reducer: {
        interface: interfaceReducer,
        selector: selectorReducer,
        products: ProductsSlice,
        feedbacks: FeedbacksSlice,
        user: UserSlice,
        addresses: AddressSlice,
        hero: heroSlice,
        offers: offersSlice,
    },
});
