https://gist.github.com/krambertech/ecb3890824fd7ada0f4ec1ff55125758

Make correct app architecture...



// 1) При открытии приложения, должен отображаться список популярных фильмов с пагинацией или динамической подгрузкой (на выбор).
// Делать запрос для получения фильмов. Где в react+redux?
// https://daveceddia.com/where-fetch-data-redux/



api
https://www.themoviedb.org/settings/api


// Things to do.





// Done

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
// ex. 1  http://jsfiddle.net/cdagli/b2uq8704/6/  data in not coming to render() and first time state without posts, secons has the posts from api
// ex. 2 https://medium.com/@lavitr01051977/basic-react-redux-app-with-async-call-to-api-e478e6e0c48b  https://github.com/Lavitr/ReduxAsyncActions
 if (this.props.posts) { ... } // resolved with this ckeck in render method of container 