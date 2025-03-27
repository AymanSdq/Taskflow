
import { useEffect } from "react"
import { useNavigate } from "react-router"



export default function Page() {

  const navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      
  
      navigate("/login")
    }, 500  )
  })

  return (
    <>
      Hello
    </>
  )
}
