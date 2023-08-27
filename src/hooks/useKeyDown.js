import { useEffect,useRef } from "react"

export const useKeyDown = (keyId, callback) => {
    const ref = useRef(null)
    useEffect(() => {
        const handleKeydown = (e) => {
          if (e.key === keyId){
            if(callback) callback(ref.current)
          } 
        }
    
        window.addEventListener("keydown", handleKeydown)
    
        return () => {
          window.removeEventListener("keydowns", handleKeydown)
        }
      }, [])

      return ref
}