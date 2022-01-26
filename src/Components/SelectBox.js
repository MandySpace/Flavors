function SelectBox({ fields, name, setState, value }) {
  return (
    <select
      value={value}
      name={name}
      id={name}
      onChange={(e) => setState(e.target.value)}
      className={`select-box ${name === "Sort By" ? "sort-btn" : ""}`}
    >
      <option value="">{name}</option>
      {fields.map((field, i) => {
        return (
          <option
            key={i}
            value={field}
            // selected={field === value ? "selected" : ""}
          >
            {field
              .split(" ")
              .map((x) => x[0]?.toUpperCase() + x.slice(1))
              .join(" ")}
          </option>
        );
      })}
    </select>
  );
}

export default SelectBox;
