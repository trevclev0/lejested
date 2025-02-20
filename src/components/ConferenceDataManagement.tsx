import { Button, Grid2 as Grid, Typography } from "@mui/material";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

type ConferenceDataManagementProps = {
  clearConferenceData: Function;
};

function ConferenceDataManagement({
  clearConferenceData,
}: ConferenceDataManagementProps) {
  return (
    <Grid container>
      <Typography component="h1">Conference Data</Typography>
      <Button onClick={clearConferenceData}>
        <DeleteSweepIcon htmlColor="white" />
      </Button>
    </Grid>
  );
}

export default ConferenceDataManagement;
