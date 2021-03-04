import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum ...', author: 'clinchy', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum ...', author: 'rii', id: 2 },
        { title: 'Web dev pro tips', body: 'lorem ipsum ...', author: 'clinchy', id: 3 },
    ]);
    
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
            <BlogList blogs={blogs.filter(blog => blog.author === 'clinchy')} title="Clinchy's Blogs" />
        </div>
    );
}
 
export default Home;