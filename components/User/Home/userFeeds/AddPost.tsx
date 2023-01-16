import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import PostAddModal from "../../Upload/UploadPost";

export default function AddPost() {
  const [addPost, setAddPost] = React.useState(false);
  const handleOpen = () => setAddPost(true);
  return (
    <>
      <Card
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
        <CardContent>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-flexible"
            label="What's on your mind?"
            multiline
            maxRows={4}
            variant="standard"
          />
          {/* <AddCircleOutlineIcon sx={{marginTop:1 , fontSize:40 , cursor: 'pointer'}} /> */}
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleOpen}
            className="bg-black text-white m-3 hover:bg-white hover:text-black"
          >
            Create
          </Button>
        </CardContent>
        {/* <addPostModal addPost={addPost} setAddPost={setAddPost} /> */}
        <PostAddModal addPost={addPost} setAddPost={setAddPost} />
      </Card>
    </>
  );
}
