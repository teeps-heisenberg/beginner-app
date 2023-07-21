import Navbar from "@/components/Navbar"
import Link from "next/link";


export const  getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return {
    props:{
      data:data,
    }
  }
}


const Blog = ({data}) => {
  return (
    <div>
      <Navbar/>
      <h1>Blogs</h1>
      {data.slice(0,5).map((blog)=>{
        return (
          <div key={blog.id}>
            <h2>{blog.id}</h2>
            <Link href={`/blog/${blog.id}`}>
              <h3>{blog.title}</h3>
            </Link>
          </div>
        );     
      })}
    </div>
  )
}

export default Blog