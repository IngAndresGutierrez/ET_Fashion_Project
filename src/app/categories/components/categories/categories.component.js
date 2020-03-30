import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import { getCategories } from "../../../providers/categories.provider";
import CategoryComponent from "../category/category.component";
import AppBarComponent from "../../../shared/components/header/header.component";

function CategoriesComponent() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (categories.length === 0) {
      getCategories()
        .then(function(querySnapshot) {
          let tmpCategories = [];
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            tmpCategories.push(doc.data());
          });
          setCategories(tmpCategories);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    }
  });

  let categoriesList = categories.map((item, index) => {
    return <CategoryComponent category={item} key={index} />;
  });

  return (
    <div>
      <AppBarComponent />
      <Grid container direction="row" justify="center" alignItems="center">
        {categoriesList}
      </Grid>
    </div>
  );
}

export default CategoriesComponent;
