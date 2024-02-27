import avatar from "./assets/Spoderman.webp"

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={avatar} alt="" />
      <h2 className="card-title">Bonk</h2>
      <p className="card-text">I make react apps and play Darktide.</p>
    </div>
  );
}

export default Card;
