import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Flex,
  Form,
  LoginForm,
  Button,
  Icon,
  Text,
  Card,
  Portal,
} from "tomato";

// import Logo from "../assets/logo_winexperience.svg";

export const Header = ({ children }) => {
  const cart = useSelector((state) => state["store"].cart);

  const [isLogin, setIsLogin] = useState(false);
  const [loginScreen, setLoginScreen] = useState(false);

  const renderLoginButton = () => {
    if (isLogin)
      return (
        <Link style={{ textDecoration: "none" }} to="/user">
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
              Oi!
            </Text>
          </Flex>
        </Link>
      );
    else
      return (
        <Button
          style={{ textDecoration: "none" }}
          to="/login"
          onClick={() => setLoginScreen(true)}
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
              Signup/Login
            </Text>
          </Flex>
        </Button>
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
            onClick={() => console.log("bbbbbbbbb")}
          >
            <div onClick={() => console.log("aaaaaaaaaa")}>
              <Form
                object={{
                  campo1: "aaa",
                }}
                schema={{
                  sections: {
                    1: {
                      rows: [
                        { type: "title", value: "teste", name: "titulo" },
                        {
                          name: "campo1",
                          label: "campo1",
                          required: true,
                          placeholder: "Opaaa",
                        },
                      ],
                    },
                  },
                }}
              ></Form>
              <Button onClick={() => setLoginScreen(false)}>Fechar </Button>
            </div>
          </div>
        </Portal>
      )}
      <Flex>{renderLoginButton()}</Flex>
    </Flex>
  );
};
