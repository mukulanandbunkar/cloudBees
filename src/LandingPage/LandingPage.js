import LoadingButton from "@mui/lab/LoadingButton";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import "./LandingPage.scss";
import { useNavigate } from "react-router-dom";
import StaticData from "../Services/Static";

const LadingPage = (props) => {
  const { setUserList } = props;
  const [fetching, setFectching] = useState(false);
  const payload = StaticData.payload;
  const headers = StaticData.headers;
  const navigate = useNavigate();

  const FetchUserList = async () => {
    setFectching(true);
    const resquestData = await axios.get(
      "https://api.github.com/users",
      headers
    );
    try {
      console.log(resquestData);
      setUserList([...resquestData.data]);
    } catch (error) {
      //can be handle by toaster message
      console.log(error);
    } finally {
      setFectching(false);
      navigate("/user-list", { state: [...resquestData.data] });
    }
  };

  return (
    <Box className="landing-page">
      <Typography variant="h4" className="landing-page__my-name">
        MUKUL ANAND BUNKAR
      </Typography>
      <Typography className="landing-page__header">
        {!fetching ? "Click Here to fetch Git Data" : "Fetching..."}
      </Typography>
      <LoadingButton
        className="landing-page__button"
        loading={fetching}
        onClick={FetchUserList}
        endIcon={<AutoModeIcon />}
      >
        Fetch data
      </LoadingButton>
    </Box>
  );
};

export default LadingPage;
