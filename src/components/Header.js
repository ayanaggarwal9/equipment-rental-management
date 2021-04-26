import React from 'react';
import '../styles/header.css';
import Select from './Select';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    state = {
        collapsed: true,
        selectedLocation: '',
        selectedBranch: '',
        branches: [],
       
    };
    toggleNavbar = () => this.setState({
        collapsed: !this.state.collapsed,
    });
    getBranches = (locationId) => {
        return this.props.locations.find(location => location.dealers_id === locationId).branches
    }
    selectLocationAction = (e) => {
        let branches = this.getBranches(e.target.value)
        this.setState({ selectedLocation: e.target.value, branches })
    }
    selectBranchAction = (e) => {
        this.setState({ selectedBranch: e.target.value })
    }
    searchEquipments = () => {
        let selectedLocation = this.props.locations.find(location => location.dealers_id === this.state.selectedLocation);
        let selectedBranch =selectedLocation.branches.find(branch => branch.branch_id === this.state.selectedBranch);
        let list = selectedBranch? selectedBranch.categories:[];
        this.props.history.push({
            pathname: '/equipmentcatalog',
            state: { list}
        })
    }
 
    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <nav className="navbar navbar-expand-lg navbar-light">

                <div class="container-fluid  d-flex justify-content-around">
                    <button onClick={this.toggleNavbar} className={`${classTwo}`} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <p class="navbar-brand">Rental Management system</p>
                    <div className={`${classOne}`} id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto ">
                            <li class="nav-item dropdown">
                                <Select onSelectChange={this.selectLocationAction} text='Select Location' options={this.props.locations.length ? this.props.locations : []} />
                            </li>
                            <li className={`${this.state.branches.length ? '' : 'd-none'} nav-item dropdown `}>
                                <Select onSelectChange={this.selectBranchAction} text='Select Branch' options={this.state.branches.length ? this.state.branches : []} />
                            </li>

                        </ul>

                    </div>


                    <div className="search" onClick={this.searchEquipments}>
                        <i className="fas fa-arrow-right" ></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            </nav>
        )


    }
}

export default withRouter(Header);