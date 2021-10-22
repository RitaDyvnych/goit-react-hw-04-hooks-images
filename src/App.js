import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

class App extends Component {
  state = {
    searchImg: "",
  };

  onSubmit = (data) => {
    this.setState({ searchImg: data });
  };

  onPageScroll() {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          searchImg={this.state.searchImg}
          scroll={this.onPageScroll}
        />
      </div>
    );
  }
}

export default App;
