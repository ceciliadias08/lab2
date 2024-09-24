export default function Resort(props) {
  console.log(props);
  return (
    <body>
      <div className="card">
        <img className="image" src={props.image} width="200px"></img>
        <h2>{props.name}</h2>
        <p>{props.hotel}</p>
        <h3 className="green">{props.rate}</h3>
        <p>{props.price}</p>
      </div>
    </body>
  );
}
