import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import path from "../components/path";
import Head from "next/head";
import AboutLayout from "../components/AboutLayout";

export const getStaticProps = async () => {
  const res = await fetch(`${path}about`);
  const data = await res.json();
  return {
    props: { aboutData: data },
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "20px",
  },
}));

const about = ({ aboutData }) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Portfolio | About</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {aboutData.map((data) => {
            return (
              <AboutLayout
                key={data._id}
                image={data.image}
                title={data.title}
                describe={data.describe}
              />
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default about;
