import { Grid2 as Grid, Typography } from "@mui/material";
import { ConferenceDataP } from "../types/ConferenceDataP";

type ConferenceDataVerboseProps = {
  conferenceData: ConferenceDataP;
};

function ConferenceDataVerbose({ conferenceData }: ConferenceDataVerboseProps) {
  return (
    <Grid>
      <Typography variant="h4">Debug Conference Data</Typography>
      <pre>{JSON.stringify(conferenceData, null, 2)}</pre>
    </Grid>
  );
}

export default ConferenceDataVerbose;
