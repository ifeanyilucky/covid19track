import React from 'react';
import styles from './App.module.css'
import { fetchData } from './api'
// import Cards from './components/cards/Cards';
// import Chart from './components/chart/Chart';
// import countryPicker from './components/countryPicker';
import {Cards, CountryPicker, Chart } from './components'
import image from '../src/components/images/image.png';


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
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <h4 className={styles.footertxt}>Visit <a href="https://disturbinglgs.com.ng" className={styles.footertxt} target="_blank">DISTURBING LAGOS</a> for more updates.</h4>
      </div>
    );
  }
}

export default App;