// import external modules
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// import internal(own) modules
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./app/redux/storeConfig/store";
import Spinner from "./app/shared/components/spinner/spinner.component";
import "./configFirebase";

const LazyApp = lazy(() => import("./App"));
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<Spinner />}>
        <LazyApp />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
