import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import LoginControls from "./components/LoginControls";
import StatsBar from "./components/StatsBar";
import SearchBar from "./components/SearchBar";
import NewsletterForm from "./components/NewsletterForm";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar></NavigationBar>
        <SearchBar></SearchBar>
        <LoginControls></LoginControls>
      </header>
      <main>
        <HeroSection></HeroSection>
      </main>
    </div>
  );
}

export default App;
