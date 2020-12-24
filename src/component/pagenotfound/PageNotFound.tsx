import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound: React.FC = () => {
  const history = useHistory();
  return (
    <div className="container">
      <Typography variant="h3" gutterBottom>
        Oops!!! Page not found
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/")}
      >
        Return
      </Button>
    </div>
  );
};

export default PageNotFound;
