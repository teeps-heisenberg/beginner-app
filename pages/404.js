
import Navbar from "@/components/Navbar";
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();

    useEffect(()=>
    {
        setTimeout(()=>{
            router.push('/');
        },3000);
    },
    []);

    return (
    <div>
        <Navbar/>
        <h1>404</h1>
        <h2>We are Sorry! Page not Found.</h2>
        <div>
            <p>
                The page you are looking for might have been removed or had its name changed.
            </p>
        </div>
        <Link href="/">Back to HomePage</Link>
        <br/>
        <a onClick={()=> router.push('/')}>Back to Homepage using Click Button</a>
    </div>
  )
}

export default ErrorPage