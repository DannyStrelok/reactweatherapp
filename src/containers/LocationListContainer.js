import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LocationList from '../components/LocationList';
import { setCity } from '../actions';

export class LocationListContainer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cities: state.cities
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)
