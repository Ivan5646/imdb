// task description  https://gist.github.com/krambertech/ecb3890824fd7ada0f4ec1ff55125758

// Make correct app architecture...

// popular movies request 
// https://api.themoviedb.org/3/movie/popular?api_key=45175df0f8d9c645fa9d232c3b5f2d41&language=en-US&page=1
// api
// https://www.themoviedb.org/settings/api



// Steps.

// Start page.
// 1) cards for popular movies


// - Create infinity scroll
// При открытии приложения, должен отображаться список популярных фильмов с пагинацией или динамической подгрузкой (на выбор).
// 2) split data to show 5 or 10 movies at each scroll (instead of default 20 which is too much?) 


// - Checks of this type below are unnecessary, remove?
if (this.props.popularMovies.length) // in render()
if (state.popularMovies.allMovies) // in mapStateToProps()


// - Search field to filter movies
// options
// 1) filter in component, in render() display either state with filtered movies, either props.popularMovies from the store. 
this.setState = ({ emptySearch: event.target.value === "" ? false : true }); // this.state undefined
this.setState({ emptySearch: searchValue }); // works, correct syntax
// a) put input independently b) pass search string from input to filter function c) how can i make it rereender in popularList on change?

// поле для поиска. Когда ты вводишь туда какой-то текст, должны отобразиться фильмы которые ему соответствуют. Для каждого фильма в списке должен отображаться список жанров (названий жанров, не айдишек), к которым он принадлежит.
// have get the initial state when user deletes search strnig in the search upnut
componentWillMount() { 
    save here initial state
    console.log("componentWillMount, this.props.popularMovies", this.props.popularMovies);
    inititalState(this.props.popularMovies); // empty array
}
// how to call a method inside same react component?

// how to set initial state in reducer off the fetch result?
https://github.com/redux-loop/redux-loop/issues/55


// make a copy of movies in reducer
// undefined though fine in state (in console redux-logger)

// coding if conditions in reducer is giving syntax errors

//
function filterMovies(moviesToFilter, searchString){
    moviesToFilter.filter((movie) => {
        if (movie.title.toLowerCase().search(searchString.toLowerCase()) !== -1) {
            //console.log("filter, state.unfiltered", state.unfiltered);
            console.log("found", movie.title);
            return movie;
        }
    })
}

 allMovies: filterMovies(state.allMovies, action.searchString), // allMovies are undefined, though movies are found

// Things to do.
// Fix arrow functions error.
// https://stackoverflow.com/questions/42063854/arrow-function-syntax-not-working-with-webpack


// Search examples
// http://btholt.github.io/complete-intro-to-react/
// library https://stackoverflow.com/questions/51182165/implementation-of-redux-search-with-components  https://github.com/bvaughn/redux-search  https://bvaughn.github.io/redux-search/
// https://stackoverflow.com/questions/47784442/react-redux-search-filter-update-app-state-as-you-type


// Done

// - Create infinity scroll
// either use react comp either write one myself, js functionlaity in the video below
// https://www.youtube.com/watch?v=eziREnZPml4   js fetch on scroll
// Questions.
// how to pass a page number of the query? how to keep track of the counter? In the container's state.
// A) Try with waypoint and my own reducer logics. Done!
// ! https://medium.com/@k88lawrence/dead-simple-infinite-scroll-with-kaminari-and-react-waypoint-8073c22be7ed  the case with unlimitied data request
<Waypoint onEnter={this.test}/> /// wokred, placed as a last element !
// how to load data with limited data fetched at a time (per fetch request)?
// 1) keep adding movies to the state (not rewrite it with new data requests)
// How do I keep adding movies to the state? The only way is to persist to LS and add up new data to there??
        case 'RECEIVE_POPULAR':
            return { ...state, allMovies: state.allMovies.concat(action.result.results), loading: false }; // used .concat to concatenate arrays
// B) Try with ready made component like https://www.npmjs.com/package/react-lazy-load ?
// if none is gonna work skip this, keep on doing other tasks of the project

// Add scss to css functionality in webpack Done

// ...state spread syntax error, make it work - just try another react redux boilerplate
// https://stackoverflow.com/questions/38669951/react-redux-spread-operator-in-reducer-returning-error-unexpected-token  fixed the error
return [...state,
    {posts: action.payload}
];
return {...state, posts: action.payload};  // but this does not work
// fixed with new boilerpale with webpack 4


// Inspect redux action on console, standart redux debugger? redux-logger?
import  createLogger  from 'redux-logger'
const logger = createLogger({
    //empty options
});
const store = createStore(
    reducer,
    applyMiddleware(logger)
);

// Fetch data from api.
// https://daveceddia.com/where-fetch-data-redux/
// ex. 1  http://jsfiddle.net/cdagli/b2uq8704/6/  data in not coming to render() and first time state without posts, secons has the posts from api
// ex. 2 https://medium.com/@lavitr01051977/basic-react-redux-app-with-async-call-to-api-e478e6e0c48b  https://github.com/Lavitr/ReduxAsyncActions
 if (this.props.posts) { ... } // resolved with this ckeck in render method of container 