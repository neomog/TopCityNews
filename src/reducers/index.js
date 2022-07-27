// REDUX
import { combineReducers } from "redux";

// REDUCERS
import articles from './articles_reducer';
import galleries from './gallery_reducer';
import news from "./news_reducer";

const rootReducer = combineReducers({
    articles,
    galleries,
    news
})

export default rootReducer;