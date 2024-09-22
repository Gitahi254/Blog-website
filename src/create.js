import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog= {title, body, author};

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body:JSON.stringify(blog)
        }).then(() => {
            console.log('Success!')
            setIsPending(false);

            navigate('/');
        })
        // history.go(-1);
        
    }





    return ( 
        <div className="create">
            <h2> Add a new blog</h2>
            { /* FORM FOR ADDING A NEW BLOG */ }

            <form onSubmit={handleSubmit}>  
                <label >Blog Title:</label>
                <input 
                type="text"
                required
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                />

                <label >Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>


                <label >Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario"> mario</option>
                    <option value="yoshi">yoshi</option>
                </select>


                {!isPending && <button>Add blog.</button>}
                {isPending && <button disabled>Adding blog....</button>}

                {/* <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p> */}
            </form>
        </div>
     );
}
 
export default Create;