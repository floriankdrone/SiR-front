import {
  Avatar,
  Chip,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";

const Post = ({ avatarUrl, username, date, content, price, handleDonate }) => {
  return (
    <>
      <Card variant="outlined" style={{ margin: "16px", borderRadius: "12px" }}>
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <Avatar
              src={avatarUrl}
              alt={`${username}'s avatar`}
              style={{ marginRight: "12px" }}
            />
            <div>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                {username}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {date}
              </Typography>
            </div>
            <Chip label={price} />
          </div>
          <Typography variant="body1" style={{ marginBottom: "12px" }}>
            {content}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              color="primary"
              variant="extended"
              onClick={() => handleDonate()}
            >
              <PaymentsIcon />
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Post;
