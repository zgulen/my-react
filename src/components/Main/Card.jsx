import "./Main.scss";

const Card = (data) => {
    const {id, title, desc,image}=data
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>
      
      <img src={image} alt={title} />

      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
