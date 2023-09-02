import {React} from 'react';
// eslint-disable-next-line no-unused-vars
import Chip from './Chip';
// eslint-disable-next-line no-unused-vars
import EmptyList from './EmptyList';
import '../../blog.css';
import { Link } from 'react-router-dom';

const Blog = ({content}) => {
  return (
    <>
      <Link className='blog-goBack' to='/blog'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {content ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {content.created}</p>
            <h1>{content.title}</h1>
            <div className='blog-subCategory'>
              
                <div>
                  <Chip label={content.tags[0].name} />
                </div>
              
            </div>
          </header>
          <img src={content.featured_image} alt='cover' />
          <div className='blog-content' dangerouslySetInnerHTML={{__html: content.body}}></div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};


export default Blog;