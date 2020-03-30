/**
 * @fileoverview Login with Google
 *
 * @version             1.0
 *
 * @author              Jaime Andrés Gómez Gutiérrez <email@etfashion.com>
 * @copyright           etfashion.com
 *
 * History
 * v1.0 – Implementation Login component by Jaime Andrés Gómez Gutiérrez
 */

import React from "react";
import Grid from "@material-ui/core/Grid";
import GoogleButton from "react-google-button";

import { loginWithGoogle } from "../../../providers/user.provider";
import AppBarComponent from "../../../shared/components/header/header.component";
import useStyles from "./login.style";

function Login({ history }) {
  const classes = useStyles();

  return (
    <div>
      <AppBarComponent />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <GoogleButton onClick={() => loginWithGoogle({ history })} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
