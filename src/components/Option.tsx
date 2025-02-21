import { Button, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

type ResponseOptionDisplay = {
  id: string;
  label: string;
  deleteHandler: Function;
};

type OptionButtonP = {
  deleteHandler: Function;
};

function OptionButton({ deleteHandler }: OptionButtonP) {
  return (
    <Button onClick={() => deleteHandler()}>
      <ClearIcon htmlColor="white" />
    </Button>
  );
}

function Option({ label, deleteHandler }: ResponseOptionDisplay) {
  return (
    <ListItem
      className="response-option"
      secondaryAction={<OptionButton deleteHandler={deleteHandler} />}
    >
      <ListItemText>{label}</ListItemText>
    </ListItem>
  );
}

export default Option;
