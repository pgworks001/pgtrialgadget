import React, {useState, useEffect} from 'react';
import GadgetBlogList from '../pages/GadgetBlogList';
import UseCustomHook from '../useCustomHook';

const GadgetBlog = () => {
    let URL = "http://localhost:8000/blogs"
    const { data: blogs, isLoading, isError } = UseCustomHook

    
   
    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error fetching data</div>}
            {blogs && <GadgetBlogList blogs={blogs}/>}
           
        </div>
    );
}

export default GadgetBlog;
