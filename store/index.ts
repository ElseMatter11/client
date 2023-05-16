import { Context, MakeStore, createWrapper } from "next-redux-wrapper";
import { Store, createStore } from "redux";
import { RootState, rootReducer } from "./reducers";

// create a makeStore function
const makeStore = (context: Context) => createStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});