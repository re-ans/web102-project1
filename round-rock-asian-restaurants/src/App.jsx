import restaurants from "./restaurants";
import RestaurantCard from "./components/RestaurantCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🍜 Top Asian Restaurants in Round Rock, TX</h1>
        <p>Your community guide to the best Asian food in Round Rock!</p>
      </header>
      <main className="card-grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            description={restaurant.description}
            address={restaurant.address}
            link={restaurant.link}
          />
        ))}
      </main>
    </div>
  );
}

export default App;