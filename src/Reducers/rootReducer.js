const initstate = {
    posts: [
        {id: '1', title: 'Lorem ipsum', body: 'Reference site about Lorem Ipsum, giving information on its origins'},
        {id: '2', title: 'Lorem ipsum', body: 'Reference site about Lorem Ipsum, giving information on its origins'},
        {id: '3', title: 'Lorem ipsum', body: 'Reference site about Lorem Ipsum, giving information on its origins'}
    ]
}

const rootReducer = (state = initstate, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter( post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
     return state;
}

export default rootReducer;