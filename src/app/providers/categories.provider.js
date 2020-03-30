// import external modules
import firebase from "firebase/app";
import "firebase/firestore";

export const getCategories = () => {
  let categoriesDb = firebase.firestore().collection("categories");

  // Create a query against the collection.
  return categoriesDb.get();
};
