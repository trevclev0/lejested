import "./App.css";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ResponseOptionManagement from "./components/ResponseOptionManagement";
import { ConferenceDataP } from "./types/ConferenceDataP";

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
    <main>
      <div>
        <h1>Conference Data</h1>
        <button onClick={clearConferencData}>
          <i className="fa fa-trash fa-xl" aria-hidden="true" />
        </button>
      </div>

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

      <h3>Debug Conference Data</h3>
      <pre>{JSON.stringify(conferenceData, null, 2)}</pre>
    </main>
  );
}

export default App;
