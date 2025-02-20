import { Button, ListItem, Typography } from "@mui/material";

type ResponseOptionDisplay = {
  id: string;
  label: string;
  deleteHandler: Function;
};

function Option({ label, deleteHandler }: ResponseOptionDisplay) {
  return (
    <ListItem className="response-option">
      <Typography component="p">{label}</Typography>
      <div>
        <Button onClick={() => deleteHandler()}>
          <i className="fa fa-times fa-lg" aria-hidden="true" />
        </Button>
      </div>
    </ListItem>
  );
}

export default Option;
