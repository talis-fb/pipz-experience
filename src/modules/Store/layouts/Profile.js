import { Column, Flex, Grid, Button } from "tomato";
import { Link } from "react-router-dom";

import { Banner } from "./Banner";
import { Header } from "./Header";

export const Profile = ({ children }) => {
  return (
    <Column
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Header />
      <Grid columns={"200px auto"}>
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Button>
            <Link to="/profile">Compras</Link>
          </Button>
          <Button>
            <Link to="/profile/compras">Compras</Link>
          </Button>
          <Button>
            <Link to="/profile">Sair</Link>
          </Button>
        </Flex>

        {children}
      </Grid>
    </Column>
  );
};
