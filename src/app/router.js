import React, { Component, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const LazyLoginScreen = lazy(() =>
  import("./auth/components/login/login.component")
);

const LazyCategoriesScreen = lazy(() =>
  import("./categories/components/categories/categories.component")
);

const LazyAdminScreen = lazy(() =>
  import("./admin/categories/components/registerCategory.component")
);

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LazyLoginScreen} />
          <Route exact path="/categories" component={LazyCategoriesScreen} />
          <Route exact path="/admin" component={LazyAdminScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
