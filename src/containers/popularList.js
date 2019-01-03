import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import Waypoint from 'react-waypoint';
import { Link } from 'react-router-dom'
import { fetchPopulars, searchMovies, getMovieId, addToFavourites, fetchGenres } from "../actions/popularActions";
import { Movie } from './movie'
import { DoubleNotification } from '../components/doubleNotification'

class PopularList extends React.Component {

    constructor(props) {
        super(props);
        this.dbLink = "https://image.tmdb.org/t/p/w400";
        this.genresArray = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];

        this.state = {
            page: 1
        };
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount(){
        this.props.fetchPopulars();
        this.props.fetchGenres();
    }

    loadMore() {
        this.setState = ({ page: this.state.page += 1 }); // why is this syntax working then?
        this.props.fetchPopulars(this.state.page);
    }

    generateNum() {
        let myDate = new Date();
        let uniqueNum =  +(new Date(myDate ));
        return uniqueNum;
    }

    getMovieId(movieId) {
        this.props.getMovieId(movieId);
    }

    addToFavourites(movie) {
        this.props.addToFavourites(movie);
    }

    renderGenres(array1, array2) {
        const genres = [];
        array1.map((listGenre) => {
            array2.find((popularGenre) => {
                if (popularGenre === listGenre.id) {
                    return genres.push(listGenre.name);
                }
            })
        });
        return genres;
    }

    render(){
        if (this.props.popularMovies.length) {
            if (!this.props.searchResults) {
                console.log("popular props", this.props);
                return (
                    <section className={"movies"}>
                        <h3>Popular Movies</h3>
                        <h4>{this.props.popularMovies.length}</h4>
                        <Link to="/favourites">
                            <div>Favourites</div>
                        </Link>
                        <div className={"movies__block"}>
                            {
                                this.props.popularMovies.map((movie) => {
                                    return (
                                        <div>
                                            <Link to={`/${movie.id}`} component={Movie} key={movie.id} onClick={() => {this.getMovieId(movie.id)}}>
                                                <div className={"movie-card"}>
                                                    <div>{movie.title}</div>
                                                    <img src={`${this.dbLink}${movie.poster_path}`}></img>
                                                </div>
                                            </Link>
                                            <div className="genres">
                                                {
                                                    this.renderGenres(this.genresArray, movie.genre_ids).map(genre => {
                                                        return (
                                                            <div>{genre}</div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <button onClick={() => {this.addToFavourites({
                                                id: movie.id,
                                                title: movie.title,
                                                img: `${this.dbLink}${movie.poster_path}`
                                            })}}>
                                                Add to Favourites
                                            </button>
                                            <DoubleNotification double={
                                                 this.props.favourites.find((fav) => {return fav.title === movie.title})
                                            }
                                            >
                                            </DoubleNotification>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Waypoint onEnter={this.loadMore}/>
                    </section>
                )
            } else {
                return (
                    <section className={"movies"}>
                        <div className={"movies__block"}>
                            {
                                this.props.searchResults.map((movie, index) => {
                                    return (
                                        <div>
                                            <Link to={`/${movie.id}`} component={Movie} key={movie.id} onClick={() => {this.getMovieId(movie.id)}}>
                                                <div className={"movie-card"} key={index}>
                                                    <div>{movie.title}</div>
                                                    <img src={`${this.dbLink}${movie.poster_path}`}></img>
                                                </div>
                                            </Link>
                                            <div className="genres">
                                                {
                                                    this.renderGenres(this.genresArray, movie.genre_ids).map(genre => {
                                                        return (
                                                            <div>{genre}</div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <button onClick={() => {this.addToFavourites({
                                                id: movie.id,
                                                title: movie.title,
                                                img: `${this.dbLink}${movie.poster_path}`
                                            })}}>
                                                Add to Favourites
                                            </button>
                                            <DoubleNotification double={
                                                this.props.favourites.find((fav) => {return fav.title === movie.title})
                                            }
                                            >
                                            </DoubleNotification>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                )
            }
        } else {
            return (
                <p>No data</p>
            )
        }
    }
}

function mapStateToProps(state){
    console.log("popularList state", state);
        return {
            popularMovies: state.popularMovies.allMovies, // popularMovies is the name of the reducer
            favourites: state.favourites.favourites,
            searchResults: state.searchDbResults.searchResult,
            genres: state.genres.id // id.genres
        }

}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchPopulars: fetchPopulars,
        searchMovies: searchMovies,
        getMovieId: getMovieId,
        addToFavourites: addToFavourites,
        fetchGenres: fetchGenres
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PopularList); // this is now a container
