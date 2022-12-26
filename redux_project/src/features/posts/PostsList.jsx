import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import {selectAllPosts,getPostsError,getPostsStatus,fetchPosts} from "./postsSlice.js";
import PostsExcerpt from "../../../redux-post/features/posts/PostsExcerpt.jsx";

const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(()=>{
        if(postsStatus === 'idle'){
            dispatch(fetchPosts())
        }
    },[postsStatus,dispatch])

    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post=>(

    ))
    return (
        <section>
            <h2>posts</h2>
            {renderedPosts}
        </section>
    );
};

export default PostsList;