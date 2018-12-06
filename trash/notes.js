https://gist.github.com/krambertech/ecb3890824fd7ada0f4ec1ff55125758

Make correct app architecture...



// При открытии приложения, должен отображаться список популярных фильмов с пагинацией или динамической подгрузкой (на выбор).
// Create infinity scroll
// either use react comp either write one myself, js functionlaity in the video below
// https://www.youtube.com/watch?v=eziREnZPml4   js fetch on scroll

// Questions.
// how to pass a page number of the query? how to keep track of the counter?
// A) try with waypoint and my own reducer logics
// ! https://medium.com/@k88lawrence/dead-simple-infinite-scroll-with-kaminari-and-react-waypoint-8073c22be7ed  the case with unlimitied data request
<Waypoint onEnter={this.test}/> /// wokred, placed as a last element !
// how to load data with limited data fetched at a time (per fetch request)?
// 1) keep adding movies to the state (not rewrite it with new data requests)
// How do I keep adding movies to the state? The only way is to persist to LS and add up new data to there??
// 2) split data to show 5 or 10 movies at each scroll (instead of default 20 which is too much?) 
        case 'RECEIVED_MORE':
            return { ...state, moreMovies: state.moreMovies.push(action.result.results), loading: false }; // error push is not a function
// B) Try with ready made component like https://www.npmjs.com/package/react-lazy-load ?
// if none is gonna work skip this, keep on doing other tasks of the project



// - Search field to filter movies


// popular movies request 
https://api.themoviedb.org/3/movie/popular?api_key=45175df0f8d9c645fa9d232c3b5f2d41&language=en-US&page=1



api
https://www.themoviedb.org/settings/api


// Things to do.
// Fix arrow functions error.
// https://stackoverflow.com/questions/42063854/arrow-function-syntax-not-working-with-webpack




// Done

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