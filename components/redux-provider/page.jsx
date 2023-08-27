'use client';
import store from "@/redux/store";
import { Provider } from "react-redux";
store

function MyProvider({children}) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default MyProvider;