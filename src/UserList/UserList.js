import { Grid, Box, Typography, IconButton } from "@mui/material";
import "./UserList.scss";
import UserCard from "../UserCard/UserCard";
import { useLocation, useNavigate } from "react-router-dom";
import CottageIcon from "@mui/icons-material/Cottage";

const UserList = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userList = location.state;
  return (
    <Box className="user-list__wrapper">
      <Box className="home-button">
        <IconButton
          onClick={() => navigate("/")}
          aria-label="home"
          color="primary"
          size="large"
        >
          <CottageIcon fontSize="large" />
        </IconButton>
      </Box>
      <Typography variant="h4" className="user-list__wrapper__header">
        User <span className="user-list__wrapper__header__span">List</span>
      </Typography>
      <Grid className="user-list">
        {userList.map((user) => (
          <UserCard key={user.login} user={user} />
        ))}
      </Grid>
    </Box>
  );
};

export default UserList;
