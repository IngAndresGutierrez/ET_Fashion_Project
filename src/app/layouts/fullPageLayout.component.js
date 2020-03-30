import React from "react";
import classnames from "classnames";

const FullPageLayout = ({ children, ...rest }) => {
  return (
    <div className={classnames("login-layout wrapper ")}>
      <main className="main text-muted">{children}</main>
    </div>
  );
};

export default FullPageLayout;
