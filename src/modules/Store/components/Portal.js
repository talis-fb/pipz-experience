import { useRef, useEffect } from "react";
import { Column, Form, Button, Portal } from "tomato";

export const PortalForm = ({ children, close }) => {
  const portal = useRef()

  useEffect(() => { 
    document.addEventListener('mousedown', function (event){
      if ( !portal.current.contains(event.target) )
        close()
    })
  }, [])

  return (
    <Portal>
      <div
        id="background-login"
        sx={{
          position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#44444477",
            transition: "all 2s",
        }}
          >
          <Column ref={portal} >
            {children}
          </Column>
        </div>
      </Portal>
  )
};
