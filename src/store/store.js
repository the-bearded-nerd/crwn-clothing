import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReduser = persistReducer(persistConfig, rootReducer);

const middleWares = [];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReduser,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
