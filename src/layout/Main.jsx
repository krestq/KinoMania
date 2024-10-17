import React, {Component} from "react"
import { Movies } from "../component/Movies"
import Search from "../component/Search"
import Preloader from "../component/Preloader"

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {

    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch (`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=Hardcore`)
        .then (res => res.json())
        .then (data => this.setState({movies: data.Search, loading: false}))
    }


    SearchingMovies = (str, type = 'all') => {
        fetch (`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${ 
            type !== `all` ? `&type=${type}`  : "" } `) 

        .then ((res) => res.json())
        .then ((data) => this.setState({movies: data.Search, loading: false }))
    }


    render () {
        const {movies, loading} = this.state
            return (
        <main className="content">
            <Search SearchingMovies = {this.SearchingMovies} />
            { loading.length ? <Preloader/> : <Movies movies = {movies}/> }
        </main>
    )
}
}

export {Main}