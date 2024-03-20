import { Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import "./UserCard.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";

const defaultUrl = "https://avatars.githubusercontent.com/u/32?v=4";

const UserCard = (props) => {
  const { user } = props;
  const dataKeys = [
    {
      label: "id",
      key: "id",
    },
    {
      label: "type",
      key: "type",
    },
    {
      label: "url",
      key: "html_url",
    },
  ];

  const isUrl = ["html_url"];
  console.log(user);
  const navigate = useNavigate();
  const onUserClick = async (user) => {
    try {
      navigate("/user-detail", { state: user.login });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box className="user-card">
      <Box className="user-card__img-wrapper">
        <img
          className="user-card__img-wrapper__img"
          alt="user"
          src={user?.avatar_url || defaultUrl}
        />
      </Box>
      <Box className="user-card__detail-wrapper">
        <Typography variant="h4">{user.login}</Typography>
        {dataKeys.map((key) => (
          <Box className="user-card__detail">
            <span className="user-card__detail__key">{`${key.label} : `}</span>{" "}
            {isUrl.includes(key.key) ? (
              <span className="user-card__detail__value">
                <a
                  className="user-card__detail__value__link"
                  href={user[key.key]}
                  target="_blank"
                >
                  gitHub.com/{user.login}
                </a>
              </span>
            ) : (
              <span className="user-card__detail__value">{user[key.key]}</span>
            )}
          </Box>
        ))}
        <LoadingButton
          className="user-card__button"
          startIcon={<PersonOutlineIcon />}
          onClick={() => onUserClick(user)}
        >
          USER DETAIL
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default UserCard;
