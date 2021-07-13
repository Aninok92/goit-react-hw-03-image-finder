import { Component } from "react";
import s from "./Searchbar.module.scss";

class Searchbar extends Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit(this.state.value);
    console.log(this.state.value);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={s.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
