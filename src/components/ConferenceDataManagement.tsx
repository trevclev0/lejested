import { Button, Grid2 as Grid, Typography } from "@mui/material";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { MouseEventHandler } from "react";

type ConferenceDataManagementProps = {
    clearConferenceData: MouseEventHandler;
};

function ConferenceDataManagement({
    clearConferenceData,
}: ConferenceDataManagementProps) {
    return (
        <Grid container alignItems="center" justifyContent="space-between">
            <Typography variant="h2">Conference Data</Typography>
            <Button onClick={clearConferenceData}>
                <DeleteSweepIcon fontSize="large" htmlColor="white" />
            </Button>
        </Grid>
    );
}

export default ConferenceDataManagement;
