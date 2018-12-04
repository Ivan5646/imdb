https://gist.github.com/krambertech/ecb3890824fd7ada0f4ec1ff55125758

Make correct app architecture...



// 1) При открытии приложения, должен отображаться список популярных фильмов с пагинацией или динамической подгрузкой (на выбор).
// create infinity scroll
// either use react comp either write one myself, js functionlaity in the video below
// https://www.youtube.com/watch?v=eziREnZPml4   js fetch on scroll
<InfiniteScroll
    pageStart={0}
    loadMore={this.props.fetchPopulars()}
    hasMore={true || false}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
    {this.props.popularMovies.toString()}
</InfiniteScroll>
// Questions.
// how to pass a page number of the query? how to keep track of the counter?
// a) ! https://medium.com/@k88lawrence/dead-simple-infinite-scroll-with-kaminari-and-react-waypoint-8073c22be7ed
// waypoint onEnter does not fire (fires only on load)
<Waypoint onEnter={() => {this.test()}}> // did not work
// b) https://github.com/joshwnj/react-visibility-sensor thia shit is not what I need?
<Waypoint onEnter={this.test}/> /// wokred, placed as a last element !


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