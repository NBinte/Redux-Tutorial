import { FETCH_POSTS, NEW_POST } from "../../actions/types";

const initialState = {
    items: [],
    item: {}
};

export default (state = initialState, action) => {

    switch (action.type) {
        case FETCH_POSTS:
            console.log("fetch_posts");
            return {
                ...state,
                items: action.payload
            };

        case NEW_POST:
            console.log("new_post");
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
};