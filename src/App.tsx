import "./App.css";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ResponseOptionManagement from "./components/ResponseOptionManagement";
import { ConferenceDataP } from "./types/ConferenceDataP";

export default function App() {
  const [conferenceData, setConferenceData] = useState<ConferenceDataP>({});

  function addStagedResponseOption() {
    const newRO = {
      key: uuidv4(),
      label: `Staged Response Option ${Date.now()}`,
    };
    setConferenceData((prev) => ({
      ...prev,
      stagedResponseOptions: [
        ...(conferenceData.stagedResponseOptions || []),
        newRO,
      ],
    }));
  }

  function addPendingResponseOption() {
    const newRO = {
      key: uuidv4(),
      label: `Pending Response Option ${Date.now()}`,
    };
    setConferenceData((prev) => ({
      ...prev,
      pendingResponseOptions: [
        ...(conferenceData.pendingResponseOptions || []),
        newRO,
      ],
    }));
  }

  function deleteStagedOptionHandler(optionId: string) {
    setConferenceData((prev) => ({
      ...prev,
      stagedResponseOptions: (prev.stagedResponseOptions || []).filter(
        (ro) => ro.key !== optionId,
      ),
    }));
  }

  function deletePendingOptionHandler(optionId: string) {
    setConferenceData((prev) => ({
      ...prev,
      pendingResponseOptions: (prev.pendingResponseOptions || []).filter(
        (ro) => ro.key !== optionId,
      ),
    }));
  }

  function clearConferencData() {
    setConferenceData({});
  }

  function clearResponseData(type: string) {
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
        clearResponseOptionData={clearResponseData}
        addResponseOption={addStagedResponseOption}
        responseOptions={conferenceData.stagedResponseOptions}
        deleteResponseOption={deleteStagedOptionHandler}
      />

      <ResponseOptionManagement
        label="Pending Response Options"
        id="pendingResponseOptions"
        clearResponseOptionData={clearResponseData}
        addResponseOption={addPendingResponseOption}
        responseOptions={conferenceData.pendingResponseOptions}
        deleteResponseOption={deletePendingOptionHandler}
      />

      <h3>Debug Conference Data</h3>
      <pre>{JSON.stringify(conferenceData, null, 2)}</pre>
    </main>
  );
}
