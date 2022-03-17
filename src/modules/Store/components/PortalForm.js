import { useRef, useEffect } from "react";
import { Column, Form, Button, Portal, Image } from "tomato";

// import Logo from "../assets/logo_winexperience.svg";

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
            id="background-login"
          >
            <Column 
              ref={portal}
              sx={{
                bg: 'white',
                  borderRadius: '5px',
                  padding: "10px",
                  minHeight: "500px",
                  maxHeight: "80%",
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
            >
            <Image />
            {children}
          </Column>
        </div>
      </Portal>
  )
};
