type ResponseOptionDisplay = {
  id: string;
  label: string;
  deleteHandler: Function;
};

function Option({ id, label, deleteHandler }: ResponseOptionDisplay) {
  return (
    <li className="response-option">
      <p>{label}</p>
      <div>
        <button onClick={() => deleteHandler(id)}>
          <i className="fa fa-times fa-lg" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}

export default Option;
