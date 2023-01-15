import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Image from "next/image";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        component="div"
        sx={{ maxWidth: 160 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function SideBar() {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }} pt={1}>
      <Box position="fixed">
        <Card
          sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 150, lg: 140 },
              height: 200,
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Image
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 30vw,
              33vw"
              alt=""
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Followers : 4000
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Following : 4000
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Pages : 4000
              </Typography>
            </CardContent>
          </Box>
        </Card>

        <Box sx={{ minWidth: 200, paddingTop: 2 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </Box>
    </Box>
  );
}
