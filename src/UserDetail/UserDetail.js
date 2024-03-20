import { Box, Typography, IconButton } from "@mui/material";
import "./UserDetail.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import StaticData from "../Services/Static";
import CottageIcon from "@mui/icons-material/Cottage";

const octokit = new Octokit(StaticData.payload);
const headers = StaticData.headers;

const UserDetail = () => {
  const [userData, setUserDate] = useState({});
  const location = useLocation();
  const userDetail = location.state;
  const isUrl = StaticData.isUrl;
  const isUTC = StaticData.isUTC;
  const tableData = StaticData.userDetailKey;
  const getLabel = StaticData.getLabel;
  const extractDateTimeFromUTC = StaticData.extractDateTimeFromUTC;
  const navigate = useNavigate();

  const fetchUserDetail = async () => {
    try {
      const response = await octokit.request("GET /users/{username}", {
        username: userDetail,
        headers,
      });
      setUserDate(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  return (
    <Box className="user-detail">
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
      <Typography className="user-detail__heading" variant="h2">
        User <span className="user-detail__heading__span"> Detail</span>
      </Typography>
      {Boolean(Object.keys(userData).length) ? (
        <>
          <Typography className="user-detail__header" variant="h4">
            {userData?.name || userData?.login}
          </Typography>
          <Box className="user-detail__detail-wrapper">
            <img
              className="user-detail__detail-wrapper__img"
              src={userData.avatar_url}
            />
            <Box>
              <table
                border={"1"}
                className="user-detail__detail-wrapper__table"
              >
                {tableData.map(
                  (data) =>
                    userData[data] && (
                      <tr className="user-detail__detail-wrapper__table__row">
                        <td className="user-detail__detail-wrapper__table__row__key">
                          {getLabel(data)}
                        </td>
                        {isUrl.includes(data) ? (
                          <td className="user-detail__detail-wrapper__table__row__value">
                            <a
                              className="user-card__detail__value__link"
                              href={userData[data]}
                              target="_blank"
                            >
                              gitHub.com/{userData.login}
                            </a>
                          </td>
                        ) : (
                          <td className="user-detail__detail-wrapper__table__row__value">
                            {isUTC.includes(data)
                              ? extractDateTimeFromUTC(userData[data])
                              : userData[data]}
                          </td>
                        )}
                      </tr>
                    )
                )}
              </table>
            </Box>
          </Box>
        </>
      ) : (
        <Typography color="var(--primary-clr)" variant="h4">
          Loading...
        </Typography>
      )}
    </Box>
  );
};

export default UserDetail;
