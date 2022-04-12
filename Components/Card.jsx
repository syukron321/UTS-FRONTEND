const Card = (props) => {
  return (
    <div
      className="card"
      style={{ width: "18rem", margin: "2rem", marginBottom: "4rem" }}
    >
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.caption}</p>
        <a href="#" className="btn btn-primary">
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default Card;
