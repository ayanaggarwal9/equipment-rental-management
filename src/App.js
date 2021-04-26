import React from 'react'
import api from './api/api'
import Home from './components/Home'
import Header from './components/Header'
import EquipmentCatalog from './components/EquipmentCatalog'
import EuipmentDetail from './components/EuipmentDetail'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    locations: [],
    categories: []
  }
  getLocations = () => {
    api.get('/data')
      .then((res) => {
        this.setState({
          locations: res.data.locations
        });
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          error: true,
        });
      });
  }
  searchEquipments = (locationId, branchId) => {
   
  }
  componentDidMount() {
    this.getLocations();
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header locations={this.state.locations} searchEquipments={this.searchEquipments} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/equipmentcatalog' render={(props) => <EquipmentCatalog {...props} />} />
            <Route path='/equipment/:id' component={EuipmentDetail} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </React.Fragment>)
  }
}

export default App;
