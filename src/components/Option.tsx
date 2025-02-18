type ResponseOptionDisplay = {
  id: string;
  label: string;
  deleteHandler: Function;
};

function Option({ label, deleteHandler }: ResponseOptionDisplay) {
  return (
    <li className="response-option">
      <p>{label}</p>
      <div>
        <button onClick={() => deleteHandler()}>
          <i className="fa fa-times fa-lg" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}

export default Option;
