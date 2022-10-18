import React, {Component} from 'react';
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";
class Main extends Component {
    state = {
        movies: []
    };
    componentDidMount() {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=329ffa13&s=panda')
            .then((respone) => respone.json())
            .then(data => this.setState({movies: data.Search}))
    }
    searchMovies =(str, type = 'all') => {

        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=329ffa13&s=${str}`)
            .then((respone) => respone.json())
            .then(data => this.setState({movies: data.Search}))

        
    };
    render() {
        return (
            <div className="container content">
                <Search searchMovies = {this.searchMovies}/>
                {this.state.movies.length ? (<Movies movies={this.state.movies}/>) : <Loader/>}
            </div>
        );
    }
}
export default Main;