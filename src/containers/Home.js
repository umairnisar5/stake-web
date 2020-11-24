import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Buttons from "../components/Buttons";
import StackingCard from "../components/StackingCard";
import DepositeCard from "../components/DepositeCard";
import { Grid } from "@material-ui/core";
const Home = () => {
  return (
    <div>
      <Header />

      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} xm={12} md={8} lg={6} xl={6}>
          <Grid container>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <Card />
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              xm={12}
              md={8}
              lg={6}
              xl={6}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <StackingCard />
            </Grid>
            <Grid
              item
              xs={12}
              xm={12}
              md={8}
              lg={6}
              xl={6}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <DepositeCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
