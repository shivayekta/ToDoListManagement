const FilterTask = (props) => {
  const options = [
    {
      title: "All",
      id: "All",
    },
    {
      title: "Complite",
      id: "Complite",
    },
    {
      title: "UnComplite",
      id: "UnComplite",
    },
  ];
  const onChangeHandler = (e) => {
    e.preventDefault();

    props.onFilterHandler(e.target.value);
  };
  return (
    <>
      <div className=" mx-auto col-8 col-md-6 col-lg-4 mb-2">
        <select
          className="form-control "
          placeholder="Add new task"
          aria-label="Add New Task"
          aria-describedby="basic-addon2"
          onChange={onChangeHandler}
        >
          {options.map((option) => (
            <option value={option.id} key={option.id}>{option.title}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FilterTask;
