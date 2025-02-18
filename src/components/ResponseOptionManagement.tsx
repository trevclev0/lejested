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
      <div>
        <h2>{label}</h2>
        <div>
          <button onClick={() => clearResponseOptionData(id)}>
            <i className="fa fa-trash fa-xl" aria-hidden="true" />
          </button>
          <button onClick={() => addResponseOption(id)}>
            <i className="fa fa-plus fa-xl" aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul>
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
      </ul>
    </>
  );
}

export default ResponseOptionManagement;
