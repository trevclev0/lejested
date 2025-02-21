import ClearAllIcon from "@mui/icons-material/ClearAll";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, List, Typography, Grid2 as Grid } from "@mui/material";
import { ResponseOption } from "../types/ResponseOption";
import Option from "./Option";

type ResponseOptionManagementProps = {
  label: string;
  id: string;
  clearResponseOptionData: Function;
  addResponseOption: Function;
  responseOptions?: ResponseOption[];
  deleteResponseOption: Function;
};

function ResponseOptionManagement({
  label,
  id,
  clearResponseOptionData,
  addResponseOption,
  responseOptions,
  deleteResponseOption,
}: ResponseOptionManagementProps) {
  return (
    <Grid>
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography variant="h3">{label}</Typography>
        <Box>
          <Button onClick={() => clearResponseOptionData(id)}>
            <ClearAllIcon htmlColor="white" fontSize="large" />
          </Button>
          <Button onClick={() => addResponseOption(id)}>
            <AddIcon htmlColor="white" fontSize="large" />
          </Button>
        </Box>
      </Grid>
      <List>
        {responseOptions &&
          responseOptions.map((option) => {
            return (
              <Option
                key={option.key}
                id={option.key}
                label={option.label}
                deleteHandler={() => deleteResponseOption(id, option.key)}
              />
            );
          })}
      </List>
    </Grid>
  );
}

export default ResponseOptionManagement;
