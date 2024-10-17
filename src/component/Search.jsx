import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";

class Search extends Component {

    state = {

        search: '',
        type: 'all',


    }

    heandleKey = (elem) => {
        if (elem.key === 'Enter') {
            this.props.SearchingMovies(this.state.search, this.state.type)
        }
    }

    handleFilter = (elem) => {
        this.setState(
            () => ({type: elem.target.dataset.type}),
            () => {this.props.SearchingMovies( this.state.search, this.state.type)}

        )
    }

    render() {
        return (
            <div className="row">
                <div className="col s12" style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                
                    <input id="search" 
                    type="search" 
                    className="validate" 
                    placeholder="Search" 
                    value={this.state.search} 
                    onKeyDown={this.heandleKey} 
                    onChange={(elem) => this.setState({ search: elem.target.value })} />
                   
                    <button 
                    className="btn waves-effect waves-light" 
                    type="submit" 
                    name="action" 
                    onClick={() => this.props.SearchingMovies(this.state.search, this.state.type)}> Search
                        <i class="material-icons right">send</i> 
                    </button>
                </div>
                <div>
                        <label> 
                            <input className="with-gap " name="type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'} />
                            <span >All</span>
                        </label>
                        <label>
                            <input className="with-gap " name="type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'} />
                            <span >Movies</span>
                        </label>
                        <label>
                            <input className="with-gap " name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'} />
                            <span >Series</span>
                        </label>
                        <label>
                            <input className="with-gap " name="type" type="radio" data-type="game" onChange={this.handleFilter} checked={this.state.type === 'game'} />
                            <span>Games</span>
                        </label>
                </div>
            </div>
        )
    }

}

export default Search
