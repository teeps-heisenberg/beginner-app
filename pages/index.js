import Navbar from "@/components/Navbar"
import Head from "next/head"

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar/>
      <h1>Hello World</h1>
    </>
  )
}

export default index