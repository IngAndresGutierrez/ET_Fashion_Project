import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

/**
 * Call auth api of Google
 * @param  {}
 * @return  {Promise}
 */
export const loginWithGoogle = ({ history }) => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(providerGoogle)
    .then(result => {
      history.push(`/categories`);
    })
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
};
