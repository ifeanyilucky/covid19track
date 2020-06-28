import React from 'react';
import styles from './App.module.css'
import { fetchData } from './api'
// import Cards from './components/cards/Cards';
// import Chart from './components/chart/Chart';
// import countryPicker from './components/countryPicker';
import {Cards, CountryPicker, Chart } from './components'
import image from '../src/components/images/coronapre.png';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <p className={styles.picktext}> Select Country</p>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} /> 
        <a href="https://codack.netlify.app" target="_blank" className={styles.footertxt}> Developed by Ifeanyi Lucky</a>
      </div>
    );
  }
}

export default App;
