function RestaurantCard({ name, cuisine, description, address, link }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <span className="cuisine-tag">{cuisine}</span>
      <p>{description}</p>
      <p className="address">📍 {address}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View on Yelp →
      </a>
    </div>
  );
}

export default RestaurantCard;