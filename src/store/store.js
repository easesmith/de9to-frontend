import { configureStore } from "@reduxjs/toolkit";

import errorSlice from "./slices/errorSlice";
import loadingSlice from "./slices/loadingSlice";

export const store = configureStore({
    reducer: {
        error: errorSlice,
        loading: loadingSlice,
    }
});