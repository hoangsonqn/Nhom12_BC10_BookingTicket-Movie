import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";

export const UserTemplate = (props) => {
  //props là path, exact, Component
  const { Component, ...restProps } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        // props.location
        //props.history
        //props.match

        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
