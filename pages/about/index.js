import Navbar from "@/components/Navbar"
import Image from "next/image"
const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center' }}>

        <div>
          <Image src='/img.jpg' height='300' width='500' alt="image here" />
        </div>
        <div>
          <Image src='https://images.unsplash.com/photo-1689832870997-18b825b4b676?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80' alt="image here" height='300' width='500' />
        </div>
      </div>

    </div>
  )
}

export default About