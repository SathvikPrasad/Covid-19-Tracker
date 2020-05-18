import React, { Component, createContext } from "react";
import axios from "axios";
export const CovidContext = createContext();

export default class CovidContextProvider extends Component {
  state = {
    Data: {},
    loading: true,
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/india`).then((res) => {
      const Data = res.data;
      this.setState({
        Data,
      });
      this.setState({
        loading: !this.state.loading,
      });
    });
  }

  Search = (country) => {
    this.setState({
      loading: !this.state.loading,
    });
    axios.get(`http://localhost:5000/${country}`).then((res) => {
      const Data = res.data;
      this.setState({
        Data,
      });
      this.setState({
        loading: !this.state.loading,
      });
    });
  };

  render() {
    return (
      <div>
        <CovidContext.Provider
          value={{
            ...this.state,
            Data: this.state.Data,
            Search: this.Search,
            loading: this.state.loading,
          }}
        >
          {this.props.children}
        </CovidContext.Provider>
      </div>
    );
  }
}
