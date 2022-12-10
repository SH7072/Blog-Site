import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('A');
    const [date, setDate] = useState('2022-01-01');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author,date};
        console.log(blog);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
            
        }).then(()=>{
            console.log('new blog added');

        })

    }

    return ( 
        <div className="create">
            <h2>Add a New Blog </h2>

            <form onSubmit={handleSubmit}>
                <label >
                    Blog Title:
                </label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label >
                    Blog Body:
                </label>
                <textarea 
                    type="text" 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                 <label >
                    Author:
                </label>
                <textarea 
                    type="text" 
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                ></textarea>
                
                    
                <label >
                    Date:
                </label>
                <input 
                    type="date" 
                    required 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                {<button>Add Block</button>}
                {/* {<button disabled>inf Block</button>} */}
            </form>


        </div>


     );
}
 
export default Create;