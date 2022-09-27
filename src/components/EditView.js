function EditView(props) {
  return props.isEditing ? (
    <div className={["edit"].concat([props.className]).join(" ")} type="text">
      {props.value}
    </div>
  ) : (
    <input
      className={["edit"].concat([props.className]).join(" ")}
      type="text"
      data-id={props.id}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}

export default EditView;
