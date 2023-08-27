import { useEffect, useRef } from "react"

export const useOutClick = (Callback) =>{
    const ref = useRef(null)

    useEffect(() => {
        const outClick = (e) => {
          if (!ref.current?.contains(e.target)) {
            if(Callback) Callback()
          }
        }
        
        window.addEventListener("mousedown", outClick)
        return () => {
          window.removeEventListener("mousedown", outClick)
        }
      }, [])
      return ref
}