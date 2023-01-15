import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        component="div"
        sx={{ maxWidth: 324 }}
      >
        Lorem ipsum dolor sit amer consectetur hello elixir
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        component="div"
        sx={{ maxWidth: 324 }}
      >
        Lorem ipsum dolor sit amer consectetur hello elixir
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        component="div"
        sx={{ maxWidth: 324 }}
      >
        Lorem ipsum dolor sit amer consectetur hello elixir
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        component="div"
        sx={{ maxWidth: 324 }}
      >
        Lorem ipsum dolor sit amer consectetur hello elixir
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Show More</Button>
    </CardActions>
  </React.Fragment>
);

function RightBar() {
  return (
    <div>
      <Box
        pt={1}
        position="fixed"
        sx={{ display: { xs: "none", md: "block" }, minWidth: 250 }}
      >
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}

export default RightBar;
