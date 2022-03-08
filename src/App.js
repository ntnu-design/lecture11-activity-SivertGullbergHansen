import { Component } from "react";
import "./App.css";
import CoffeeButton from "./components/CoffeeButton";
import CoffeeControl from "./components/CoffeeControl";
import CoffeeInfo from "./components/CoffeeInfo";
import Thermos from "./components/Thermos";
import CoffeeRecipe from "./components/CoffeeRecipe";

class App extends Component {
  constructor() {
    super();
    this.state = {
      brewedAt: "2022-02-28T09:17:57.652Z",
      litersBrewed: "1.5",
      typeOfCoffee: "Awesome Coffee",
      grindingsettings: 4,
      litresWater: 1.5,
      rating: [3, 340],
      onClick: this.updateCoffee,
    };
  }

  updateCoffee = (newLiters) => {
    this.setState({ litersBrewed: newLiters });
  };

  render() {
    return (
      <div className="App">
        <header></header>
        <main>
          <div id="examples">
            <h1>Examples</h1>
            <Thermos {...this.state} />

            {/* <Thermos {...this.state} className="neumorphism-card"/> */}

            <CoffeeInfo {...this.state} />

            <CoffeeRecipe {...this.state} />

            <CoffeeButton {...this.state} />

            <CoffeeButton litersToBrew="1.1" {...this.state} />

            <CoffeeButton litersToBrew="0.5" {...this.state} />

            <CoffeeButton litersToBrew="3.1" {...this.state} />
          </div>

          <span>This is Thermos and CoffeeInfo</span>
          <section id="top-container" className="container neumorphism-card">
            <Thermos {...this.state} />
            <CoffeeInfo {...this.state} />
          </section>

          <span>This is Thermos and CoffeeButtons (individual components)</span>
          <section
            id="prepare-coffee-container"
            className="container neumorphism-card"
          >
            <Thermos {...this.state} />

            <div className="flex-columns">
              <CoffeeButton litersToBrew="2.1" {...this.state} />

              <CoffeeButton litersToBrew="1.1" {...this.state} />

              <CoffeeButton litersToBrew="0.5" {...this.state} />
            </div>
          </section>

          <span>
            This is CoffeeControl (composition: Thermos and CoffeeButton(s)))
          </span>
          <section>
            <CoffeeControl {...this.state} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
