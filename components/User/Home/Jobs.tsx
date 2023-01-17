import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Image from "next/image";

interface Props {
  mode: String;
}

function Jobs({ mode }: Props) {
  return (
    <Card
      className="shadow-2xl shadow-gray-800 rounded-lg"
      sx={{
        minWidth: { xs: "auto", md: "auto", sm: 400 },
        margin: 1,
        marginLeft: { xs: 1, sm: 6, md: 1 },
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      {/* <CardMedia
        component="img"
        height="20%"
        image="https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"
        alt="Paella dish"
      /> */}
      <Box sx={{ position: "relative", width: "100%", height: 350 }}>
        <Image
          src="https://thumbs.dreamstime.com/b/hiring-website-banner-poster-vector-concept-black-tie-suit-cool-advertising-job-vacancy-position-offer-career-163726839.jpg"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 30vw,
              33vw"
          alt=""
        />
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="chat" sx={{ marginRight: 1 }}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <CardActions disableSpacing>
          <IconButton aria-label="save Jobs">
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={
                <BookmarkIcon
                  sx={{ color: mode == "light" ? "black" : "white" }}
                />
              }
            />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}

export default Jobs;
