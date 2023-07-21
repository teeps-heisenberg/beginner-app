import React from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar';


export const getStaticPaths = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const paths = data.map((element)=>{
    return{
      params:{
        pageNo:element.id.toString(),
      },
    };
  }); 

  return {
    paths,
    fallback:false,
  };
};


export const  getStaticProps = async(context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props:{
      data:data,
    }
  }
}




const BlogData = ({data}) => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  const {id,title,body} = data;
  return (
    <>
      <Navbar/>
      <div>
        <h2>{id}</h2>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </>
  )
}

export default BlogData
