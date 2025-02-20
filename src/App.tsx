import "./App.css";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ResponseOptionManagement from "./components/ResponseOptionManagement";
import { ConferenceDataP } from "./types/ConferenceDataP";
import { Container } from "@mui/material";
import ConferenceDataManagement from "./components/ConferenceDataManagement";
import ConferenceDataVerbose from "./components/ConferenceDataVerbose";

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

  function clearConferenceData() {
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
      <ConferenceDataManagement clearConferenceData={clearConferenceData} />

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

      <ConferenceDataVerbose conferenceData={conferenceData} />
    </Container>
  );
}

export default App;
