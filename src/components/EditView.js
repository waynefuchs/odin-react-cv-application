function EditView(props) {
  if (props.isViewing) {
    if (!props.value.length) return null;
    return (
      <div className={["edit"].concat([props.className]).join(" ")} type="text">
        {props.value}
      </div>
    );
  }

  return (
    <input
      onChange={props.edit}
      className={["edit"].concat([props.className]).join(" ")}
      type={'type' in props ? props.type : "text"}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}

export default EditView;
