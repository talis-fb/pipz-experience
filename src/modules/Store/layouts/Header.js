import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Flex,
  Column,
  Form,
  LoginForm,
  Button,
  Icon,
  Text,
  Card,
  Portal,
  Image
} from "tomato";

// import Logo from "../assets/logo_winexperience.svg";

export const Header = ({ children }) => {
  const cart = useSelector((state) => state["store"].cart);

  const [isLogin, setIsLogin] = useState(false);
  const [loginScreen, setLoginScreen] = useState(false);

  const renderLoginButton = () => {
      return (
        <Link style={{ textDecoration: "none" }} 
          to={ isLogin ?  "/user" : "" }
          onClick={ !isLogin && (() => setLoginScreen(true)) }
          >
          <Flex alignItems="center">
            <Icon.Star />
            <Text
              bg="l3"
              ml="4px"
              sx={{
                fontSize: "13px",
                padding: "2px",
                lineHeight: 1,
                borderRadius: "50%",
              }}
            >
          {isLogin ? "Oi!" : "Signup/Login"}
            </Text>
          </Flex>
        </Link>
      );
  };


  const Login = () => {
    return (
      <Flex
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          top: "0px",
          left: "0px",
          opacity: "50%",
          zIndex: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => setLoginScreen(false)}
      >
        <Card onClick={() => console.log("aaa")} sx={{ bottom: "0px" }}>
          Teste
        </Card>
      </Flex>
    );
  };

  const portal = useRef()
  useEffect(() => { 
    document.addEventListener('mousedown', function (event){
      if ( !portal.current.contains(event.target) )
        setLoginScreen(false)
    })
  }, [])

  return (
    <Flex
      p="16px"
      sx={{
        width: "100%",
        minHeight: "48px",
        maxHeight: "48px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Flex sx={{ gap: "10px" }}>
        <Link style={{ textDecoration: "none" }} to="/">
          <Text sx={{ fontWeight: "bold" }} color="t2">
            The Wine Experience
          </Text>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/">
          <Text sx={{ fontWeight: "bold" }} color="t2">
            <Icon.Box />
            Shop
          </Text>
        </Link>
      </Flex>

      {/* Login Form */}
      {loginScreen && (
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
              sx={{
                bg: 'white',
                  borderRadius: '5px',
                  padding: "10px",
                  minHeight: "500px",
                  maxHeight: "80%",
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
              ref={portal}
            >
            <Image />
              <Form
                object={{
                  campo1: "aaa",
                }}
                schema={{
                  sections: {
                    1: {
                      rows: [
                        { type: "title", value: "Bem-Vindo ao Winexperience", name: "bem-vindo" },
                        {
                          name: "email",
                          // label: "Email",
                          required: true,
                          placeholder: "Email",
                        },
                        {
                          name: "password",
                          // label: "Password",
                          required: true,
                          placeholder: "Password",
                        }
                      ],
                    },
                  },
                }}
              ></Form>

        <Button sx={{ alignSelf: 'center' }}>Entrar</Button>
            </Column>
          </div>
        </Portal>
      )}


      <Flex>{renderLoginButton()}</Flex>

    </Flex>
  );
};
