import React, {useState} from 'react';
import BlogList from '../pages/BlogList';
import suya from '../image/suya.jpeg';
import burger from '../image/burger1.png';
import pizza from '../image/pizza.jpeg';
import meatpie from '../image/meatpie.jpeg';

const Blog = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "Atama",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            stateOfOrigin: "Akwa Ibom",
            img: suya,
            id: 1
        },
        {
            title: "Oha",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            stateOfOrigin: "Abia",
            img: burger,
            id: 2
        },
        {
            title: "Edikaikong",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            stateOfOrigin: "Akwa Ibom",
            img: pizza,
            id: 3
        },
        {
            title: "Efo",
            body: " lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut    labore et dolore magna aliqu compliance et  con adipiscing elit",                                             
            stateOfOrigin: "Ijebu",
            img: meatpie,
            id: 4
        },
       
    ]);

    const handleDelete = (id) => {
        let deletedBlogs = blogs.filter(blog => blog.id!== id);
        setBlogs(deletedBlogs);
    }

    return (
        <div>
           <BlogList blogs = {blogs} handleDelete={handleDelete} />
        </div>
    );
}

export default Blog;
