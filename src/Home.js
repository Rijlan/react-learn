import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum ...', author: 'clinchy', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum ...', author: 'rii', id: 2 },
        { title: 'Web dev pro tips', body: 'lorem ipsum ...', author: 'clinchy', id: 3 },
    ]);

    const [name, setName] = useState('clinchy');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);
    
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <button onClick={() => setName('rii')}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;