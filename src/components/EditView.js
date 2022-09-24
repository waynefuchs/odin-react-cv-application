function EditView(props) {
  return props.isEditing ? (
    <input
      className={["edit"].concat([props.className]).join(" ")}
      type="text"
      data-id={props.id}
      value={props.value}
    />
  ) : (
    <div className={["edit"].concat([props.className]).join(" ")} type="text">
      {props.value}
    </div>
  );
}

export default EditView;
