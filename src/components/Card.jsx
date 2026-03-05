const Card = ({ title }) => {
  return (
    <div className="card">
      <div className="card-top">
        <p>COMPONENTE TRES</p>
      </div>

      <div className="card-bottom">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;