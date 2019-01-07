// task description  https://gist.github.com/krambertech/ecb3890824fd7ada0f4ec1ff55125758

// Make correct app architecture...

// popular movies request 
// https://api.themoviedb.org/3/movie/popular?api_key=45175df0f8d9c645fa9d232c3b5f2d41&language=en-US&page=1
// recommendations
// https://api.themoviedb.org/3/movie/338952/recommendations?api_key=45175df0f8d9c645fa9d232c3b5f2d41&language=en-US&page=1
// search 
// https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=45175df0f8d9c645fa9d232c3b5f2d41&query=aq
// genres
// https://api.themoviedb.org/3/genre/movie/list?api_key=45175df0f8d9c645fa9d232c3b5f2d41&language=en-US
// popular
// https://api.themoviedb.org/3/movie/popular?api_key=45175df0f8d9c645fa9d232c3b5f2d41&language=en-US&page=1
// api
// https://www.themoviedb.org/settings/api


// App UI
// - start page which is a list of popular movies
// - movie detailed page
// - favourites, separate page or not?


// Steps.
//  Реализуйте возможность добавлять фильмы в избранное как со списка, так и на странице с отдельным фильмом. Список таких фильмов сохраняйте локально (localStorage, например). Предусмотрите просмотр списка с избранными фильмами где-то в приложении и удаление из избранного. Также предусмотрите отображение на карточке с фильмом и его странице информации о том, что этот фильм добавлен в избранное.
// done - Remove from fav
// done - Persisit to LS
// done - Check for doubles, 
// - Notificate user when movie is already in fav
// show hide notification. Have to show notification onCLik for a specific movie, how?
// done - Show that a movie is in favs on movie page (Compulsory)
// - Be able to add movie to favs from movie page? 
// - Enable to go to a movie from fav 

// Routing
// Link routing. Be able to paste the link to adress bar and have the movie (which was previsouly opened on click) there.
// so when I get to any route redux store is resetted? It does so with /favourites.



// Things to do.
// Refactor render of popualList
// created popularMovie and searchREsults components, has to make component for the repetetive code in them
// not a stable work
// Fixed. 40 movies at the start instead of 20

// CSS markup

// - Checks of this type below are unnecessary, remove? How to handle error in render method property of props undefined though it exist in state?
if (this.props.popularMovies.length) // in render()
if (state.popularMovies.allMovies) // in mapStateToProps()
// ?    https://stackoverflow.com/questions/40635804/why-are-my-props-undefined-when-using-redux-and-react-js

// Fix arrow functions error.
// https://stackoverflow.com/questions/42063854/arrow-function-syntax-not-working-with-webpack





// Done
// Done. Поле для поиска. !-1
// Done. Когда ты вводишь туда какой-то текст, должны отобразиться фильмы которые ему соответствуют. Для каждого фильма в списке должен отображаться список жанров (названий жанров, не айдишек), к которым он принадлежит. 
// Done. Search function is supposed to search in database not among the movies on the page
// Done. - Be able to go to a movie from search.
genre_ids // popular movies properties

// - check for doubles
// favoutitesReucer problem. Tried
// a) for loop with switch case or if else - returns undefined
function checkDouble(array, itemToCheck) {
    for (let i=0; i < array.length; i++) {
        switch (array[i].id === itemToCheck.id) {
            case true:
                return console.log("double");
            case false:
                return itemToCheck;
        }
        // if  (array[i].id === itemToCheck.id) {
        //     break;
        // } else {
        //     return itemToCheck;
        // }
    }
}
// b) map retuns undefined too
function checkDouble(array, itemToCheck) {
    array.map((movie) => {
        if (movie.id === itemToCheck.id) {
            console.log("double");
        } else {
            return itemToCheck;
        }
    })
}
// c) using function to write straight to reducer's favourites returns undefined no clue why
function checkDouble (state, itemToCheck) {
    if (state.length) {
        state.find((movie) => {
            if (movie.id === itemToCheck.id) {
                console.log("double");
                return state;
            } else {
                console.log("else of find"); // second action results in only undefined in array
                return state.concat(itemToCheck);
            }
        });
    } else {
        console.log("no length");
        return state.concat(itemToCheck);
    }
}
// Solved
function checkDouble (state, itemToCheck) {
    if (state.length) {
       const filteredArray = state.filter((movie) => {
            return movie.id === itemToCheck.id
        });
       if (filteredArray == false || filteredArray.length === 0) {
           return state.concat(itemToCheck);
       } else {
           return state.concat([]);
       }
    } else {
        console.log("no length");
        return state.concat(itemToCheck);
    }
}

// При клике на карточку с фильмом, должна быть показана страница с детальной информацией об этом фильме и списком рекоммендованых или похожих (можно и то, и то) фильмов к нему.
// 1) render info on movie page
// 2) fetch and render reommended
// 3) replace url with movie id, have to pass movieId from redux store here, in App.js, feels like it not right to conect App.js to redux?
// in main.js  <Route path= this.props.movieId  seems to have the same value as movie.id in PopularList but Movie com is not rendered  

// react-router 
// example
// app.js
<Route path="/movie" component={Movie} />
// popularList.js
return (
    <Link to="/movie" component={Movie} key={movie.id}>
        <div className={"movie-card"}>
            <div>{movie.title}</div>
            <img src={`${this.dbLink}${movie.poster_path}`}></img>
        </div>
    </Link>
)

// should be using react-router-dom  https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// https://scotch.io/courses/using-react-router-4/route-params 04:30. passing path parameter, also using axios.get in ComponentDidMount...

// Start page.
// 1) cards for popular movies. Done.


// - Create infinity scroll. Done.
// При открытии приложения, должен отображаться список популярных фильмов с пагинацией или динамической подгрузкой (на выбор).
// 2) split data to show 5 or 10 movies at each scroll (instead of default 20 which is too much?) 

// - Create infinity scroll
// either use react comp either write one myself, js functionlaity in the video below
// https://www.youtube.com/watch?v=eziREnZPml4   js fetch on scroll
// Questions.
// Any fetch from api.
// this one returned no data, but general info: headers, status, etc 
export function fetchRecommendations(movieId) {
    return function(dispatch) {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
            .then(( data ) => {
                dispatch(receivedRecommendations(data));
            });
    };
}
// this one fetshed data
export const receivedRecommendations = (result) => ({
    type: 'RECEIVE_RECOMMENDATIONS',
    result: result
});

export function fetchRecommendations(movieId) {
    return function(dispatch) {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
            .then(  // because it has function to handle error?
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then(( data ) => {
                dispatch(receivedRecommendations(data));
            });
    };
}


//  https://blog.logrocket.com/data-fetching-in-redux-apps-a-100-correct-approach-4d26e21750fc

// should I have loading flag always when I fetch something from api, and shuold I always have such structrue:
export const requestPopualrs = () => ({
    type: 'REQUEST_POPULAR',
});
export const receivedPopulars = (result) => ({
    type: 'RECEIVE_POPULAR',
    result: result,
});
export function fetchPopulars(page) {
    return function (dispatch) { // what is dispatch?
        dispatch(requestPopualrs());
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((result) => {
                    dispatch(receivedPopulars(result));
                },
            );
    };
}


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


// - Search field to filter movies. Done.
// options
// 1) filter in component, in render() display either state with filtered movies, either props.popularMovies from the store. 
this.setState = ({ emptySearch: event.target.value === "" ? false : true }); // this.state undefined
this.setState({ emptySearch: searchValue }); // works, correct syntax
// a) put input independently b) pass search string from input to filter function c) how can i make it rerender in popularList on change?

// поле для поиска. Когда ты вводишь туда какой-то текст, должны отобразиться фильмы которые ему соответствуют. Для каждого фильма в списке должен отображаться список жанров (названий жанров, не айдишек), к которым он принадлежит(?). 
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

// Inspect redux action on console, standart redux debugger? redux-logger?
import  createLogger  from 'redux-logger'
const logger = createLogger({
    //empty options
});
const store = createStore(
    reducer,
    applyMiddleware(logger)
);

// action is not fired 
this.props.testMovieClick(); // because I should use instead
testMovieClick();


// Search examples
// http://btholt.github.io/complete-intro-to-react/
// library https://stackoverflow.com/questions/51182165/implementation-of-redux-search-with-components  https://github.com/bvaughn/redux-search  https://bvaughn.github.io/redux-search/
// https://stackoverflow.com/questions/47784442/react-redux-search-filter-update-app-state-as-you-type


// Fetch data from api.
// https://daveceddia.com/where-fetch-data-redux/
// ex. 1  http://jsfiddle.net/cdagli/b2uq8704/6/  data in not coming to render() and first time state without posts, secons has the posts from api
// ex. 2 https://medium.com/@lavitr01051977/basic-react-redux-app-with-async-call-to-api-e478e6e0c48b  https://github.com/Lavitr/ReduxAsyncActions
 if (this.props.posts) { ... } // resolved with this ckeck in render method of container 



// when adding <DoubleNotification /> comp to popularMovie this.props.genres.genres become undefined
// Solved by check if (this.props.genres) { ... }


// Recurring propblems
// export default connect - You likely forgot to export your component
import PopularMovie from "./popularMovie"; // use this 
of import {PopularMovie} from "./popularMovie"; // instead of this