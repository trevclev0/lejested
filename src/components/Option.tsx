import { Button, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

type ResponseOptionDisplay = {
  id: string;
  label: string;
  deleteHandler: Function;
};

function Option({ label, deleteHandler }: ResponseOptionDisplay) {
  return (
    <ListItem className="response-option">
      <ListItemText>{label}</ListItemText>
      <Button onClick={() => deleteHandler()}>
        <ClearIcon htmlColor="white" />
      </Button>
    </ListItem>
  );
}

export default Option;
