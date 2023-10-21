const Person = (props) => {
  const { name, age, image } = props;
  return (
    <div className="person">
      <img src={image} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </div>
  );
};
export default Person;
