import "./App.css";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ResponseOptionManagement from "./components/ResponseOptionManagement";
import { ConferenceDataP } from "./types/ConferenceDataP";
import { Grid2 as Grid, Container, Button, Typography } from "@mui/material";

function App() {
  const [conferenceData, setConferenceData] = useState<ConferenceDataP>({});

  function addResponseOption(type: string) {
    const newRO = {
      key: uuidv4(),
      label: `Response Option ${Date.now()}`,
    };
    setConferenceData((prev) => ({
      ...prev,
      [type]: [...(conferenceData[type] || []), newRO],
    }));
  }

  function deleteResponseOption(type: string, optionId: string) {
    setConferenceData((prev) => ({
      ...prev,
      [type]: (prev[type] || []).filter((ro) => ro.key !== optionId),
    }));
  }

  function clearConferencData() {
    setConferenceData({});
  }

  function clearResponseOptionData(type: string) {
    setConferenceData((prev) => ({
      ...prev,
      [type]: [],
    }));
  }

  return (
    <Container component="main">
      <Grid container spacing={2}>
        <Typography component="h1">Conference Data</Typography>
        <Button onClick={clearConferencData}>
          <i className="fa fa-trash fa-xl" aria-hidden="true" />
        </Button>
      </Grid>

      <ResponseOptionManagement
        label="Staged Response Options"
        id="stagedResponseOptions"
        clearResponseOptionData={clearResponseOptionData}
        addResponseOption={addResponseOption}
        deleteResponseOption={deleteResponseOption}
        responseOptions={conferenceData.stagedResponseOptions}
      />

      <ResponseOptionManagement
        label="Pending Response Options"
        id="pendingResponseOptions"
        clearResponseOptionData={clearResponseOptionData}
        addResponseOption={addResponseOption}
        deleteResponseOption={deleteResponseOption}
        responseOptions={conferenceData.pendingResponseOptions}
      />

      <Typography component="h3">Debug Conference Data</Typography>
      <pre>{JSON.stringify(conferenceData, null, 2)}</pre>
    </Container>
  );
}

export default App;
