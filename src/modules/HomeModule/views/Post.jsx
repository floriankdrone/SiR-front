import {
  Avatar,
  Chip,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import DeleteIcon from "@mui/icons-material/Delete";

const Post = ({
  avatarUrl,
  canDelete,
  content,
  date,
  handleDelete,
  handleDonate,
  id,
  price,
  username,
}) => {
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
            {canDelete ? (
              <Button
                color="primary"
                variant="extended"
                onClick={() => handleDelete(id)}
              >
                <DeleteIcon />
              </Button>
            ) : (
              ""
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Post;
