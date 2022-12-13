import useFetch from "../Hooks/useFetch";
import { useParams,useHistory } from "react-router-dom";
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog } = useFetch('http://localhost:8000/blogs/' + id);
    const history=useHistory();
    
    const handleClick=() => {

        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('blog deleted');
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            <h2>Blog Details {id}</h2>
            {blog && (
                <article>
                    <h3>{blog.title}</h3>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <div>{blog.date}</div>
                    <button onClick={() => handleClick()}>Delete</button>
                </article>
             )} 

        </div>
    );
}

    export default BlogDetails;