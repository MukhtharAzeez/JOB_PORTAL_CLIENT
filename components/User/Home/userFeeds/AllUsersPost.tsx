import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Collapse, Divider, InputBase, Paper, styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Comment from "./Comment";
import moment from "moment";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { currentUser } from "../../../../redux/user/userAuthSlicer";
import { getPostComment, postComment, postLike } from "../../../../api/User/Post/post";

interface props {
  mode: String;
  post: any;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  if (expand) {
  }
  return <IconButton disableRipple {...other} />;
})(({ theme, expand }: any) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function AllUsersPost({ mode, post }: props) {
  const { userId } = useSelector(currentUser);

  const [likes, setLikes] = React.useState(post.likes ? post.likes.length : 0);
  const [comment, setComment] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [allComments, setAllComments] = React.useState(null);
  const [emojiPicker, setEmojiPicker] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function handleLike(postId: string) {
    const result = await postLike(postId, userId);
    if (result.data) setLikes(likes + 1);
    else setLikes(likes - 1);
  }

  function handleComment(e: any) {
    setExpanded(false);
    setEmojiPicker(false);
    setComment(e.target.value);
  }

  async function sendComment(postId: string) {
    setEmojiPicker(false);
    if (comment.trim().length == 0) return setComment("");
    await postComment(postId, userId, comment);
    setComment("");
    getPostComments(postId);
  }

  async function getPostComments(postId: string) {
    if (expanded) {
      handleExpandClick();
    } else {
      const comments = await getPostComment(postId);
      setAllComments(comments.data);
      handleExpandClick();
    }
  }
  return (
    <Card
      className="shadow-2xl shadow-gray-800 rounded-md"
      sx={{
        minWidth: { xs: "auto", md: "auto", sm: 400 },
        margin: 1,
        marginLeft: { xs: 1, sm: 6, md: 1 },
      }}
      key={post._id}
    >
      <CardHeader
        avatar={
          post.user.image.length ? (
            <Avatar alt="User Profile" src={post.user.image} />
          ) : (
            <Avatar className="bg-gray-500" aria-label="recipe">
              {post.user.firstName[0]}
            </Avatar>
          )
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.user.firstName + " " + post.user.lastName}
        subheader={moment(post.createdAt).fromNow()}
      />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 400, md: 500 },
        }}
      >
        {post.image.map(function (image: any, index: number) {
          return (
            <Image
              key={index}
              src="https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"
              // src={image}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 30vw,
              33vw"
              alt=""
            />
          );
        })}
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardActions disableSpacing>
          {post.likes?.includes(userId) ? (
            <IconButton
              aria-label="add to favorites"
              onClick={() => handleLike(post._id)}
              className="hover:bg-transparent"
              disableRipple
            >
              <Checkbox
                checkedIcon={<FavoriteBorderIcon />}
                icon={<Favorite sx={{ color: "red" }} />}
              />
              <p className="text-sm">{likes}</p>
            </IconButton>
          ) : (
            <IconButton
              aria-label="add to favorites"
              onClick={() => handleLike(post._id)}
              className="hover:bg-transparent"
              disableRipple
            >
              <Checkbox
                icon={<FavoriteBorderIcon />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
              <p className="text-sm">{likes}</p>
            </IconButton>
          )}

          <IconButton
            aria-label="chat"
            sx={{ marginRight: 1 }}
            className="hover:bg-transparent"
            onClick={() => getPostComments(post._id)}
          >
            <ExpandMore
              expand={expanded}
              
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ChatBubbleOutlineIcon />
            </ExpandMore>
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <CardActions disableSpacing>
          <IconButton aria-label="save post">
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

      {/* Comment Box TextField */}
      <Box>
        <Paper
          component="form"
          sx={{
            p: "4px 4px",
            ml: 3,
            mb: 2,
            mt: 2,
            display: "flex",
            alignItems: "center",
            width: "90%",
          }}
          className={
            mode == "light" ? "bg-slate-100" : "shadow-sm shadow-gray-600"
          }
        >
          <IconButton
            sx={{ p: "10px" }}
            aria-label="menu"
            onClick={() => setEmojiPicker(!emojiPicker)}
          >
            <EmojiEmotionsIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="say something...."
            inputProps={{ "aria-label": "say something...." }}
            onChange={handleComment}
            value={comment}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <AttachFileIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            onClick={() => sendComment(post._id)}
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <SendIcon />
          </IconButton>
        </Paper>
        <Box
          className={
            emojiPicker ? "absolute z-50 block justify-center" : "hidden"
          }
        >
          <Picker
            data={data}
            previewPosition="none"
            onEmojiSelect={(e: any) => {
              setComment(comment + e.native);
            }}
          />
        </Box>
      </Box>

      {/* Comment Box */}
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        className="max-h-80 overflow-auto scrollbar-hide"
      >
        <Comment comments={allComments} />
      </Collapse>
    </Card>
  );
}

export default AllUsersPost;
