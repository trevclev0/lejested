import { Typography } from "@mui/material";
import { ConferenceDataP } from "../types/ConferenceDataP";

type ConferenceDataVerboseProps = {
  conferenceData: ConferenceDataP;
};

function ConferenceDataVerbose({ conferenceData }: ConferenceDataVerboseProps) {
  return (
    <>
      <Typography component="h3">Debug Conference Data</Typography>
      <pre>{JSON.stringify(conferenceData, null, 2)}</pre>
    </>
  );
}

export default ConferenceDataVerbose;
