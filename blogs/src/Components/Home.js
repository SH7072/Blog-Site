import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import BlogList from "./BlogList";
const Home = () => {
    
    const {data:blogs}=useFetch('http://localhost:8000/blogs');
        // console.log(blogs);
    return ( 
        <div className="home">
        {  blogs&&<BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;