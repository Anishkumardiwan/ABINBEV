import React from "react";
import Table from "./Table";
import {
  makeStyles,
  Container,
  Box,
  Grid,
  Button,
  ButtonGroup,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  // giving styles to TABLE CONTAINER
  myContainer: {
    marginTop: "25px",
    marginBottom: "25px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  boxHeading: {
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const Main = () => {
  const classes = useStyle();
  return (
    <Container maxWidth="lg" className={classes.myContainer}>
      <Box className={classes.boxHeading}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Box style={{ fontWeight: "bold" }}>Portfolio Plans</Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button>Media</Button>
              <Button>Marketing</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>

      <Table />
    </Container>
  );
};

export default Main;
