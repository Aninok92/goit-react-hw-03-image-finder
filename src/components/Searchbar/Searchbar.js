import { Component } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
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

    if (this.state.value.trim() === "") {
      toast.error("enter something");
      return;
    }

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit(this.state.value);
    console.log(this.state.value);
    this.setState({ value: "" });
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
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.defaultProps = {
  onSubmit: () => null,
};

Searchbar.propType = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
