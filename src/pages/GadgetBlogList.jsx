import React from 'react';

const GadgetBlogList = ({blogs}) => {

    return (
        <div>
             <h1 className='title'>Gadget Blog</h1>
            {
                blogs.map((blog)=> (
                    
                        <div key={blog.id} className="blog-preiview">
                            <h2>{blog.title}</h2>
                            {/* <p>{blog.body}</p> */}
                            <i>{blog.coo}</i>
                            {/* <div>
                                <button onClick={()=>{handleDelete(blog.id)}}>Delete Blog</button>
                            </div> */}
                        </div>
                    
                ))
        }
        </div>
    );
}

export default GadgetBlogList;
