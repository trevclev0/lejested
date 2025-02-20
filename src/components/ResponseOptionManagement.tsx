import { Button, ButtonGroup, List, Typography } from "@mui/material";
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
    <>
      <Typography component="h2">{label}</Typography>
      <ButtonGroup>
        <Button onClick={() => clearResponseOptionData(id)}>
          <i className="fa fa-trash fa-xl" aria-hidden="true" />
        </Button>
        <Button onClick={() => addResponseOption(id)}>
          <i className="fa fa-plus fa-xl" aria-hidden="true" />
        </Button>
      </ButtonGroup>
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
    </>
  );
}

export default ResponseOptionManagement;
