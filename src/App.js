import logo from "./logo.svg";
import filterButton from "./components/filterButton";
import table from "./components/table";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bienvenu Dispatcher 1 </h1>
      <section className="filterLine">
        {/* j'ai créer un dossier components afin de pouvoir réutiliser les boutons de filtrage */}
        Filtrer les commandes par statut : {filterButton("Waiting")}
        {filterButton("Loading")}
        {filterButton("Success")}
        {filterButton("Fail")}
      </section>
      <section>{table("")}</section>

    </div>
  );
}

export default App;
