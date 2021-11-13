const Person = (props) => {
  const h3Text = props.age > 18 ? "please go vote!" : "you must be 18";
  const nameText = props.name.length > 8 ? props.name.slice(0, 6) : props.name;
  const hobbies = props.hobbies.map((h) => <li>{h}</li>);

  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <li>Name: {nameText}</li>
        <li>Age: {props.age}</li>
        <ul>
          Hobbies:
          {hobbies}
        </ul>
      </ul>
      <h3>{h3Text}</h3>
    </div>
  );
};
