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
      <Grid columns={"200px auto"} sx={{ height: '100%', width: '100%' }}>
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
              height: '100%'
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

        <Flex sx={{ 
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
              height: '100%',
            width: '100%'
        }}>
        {children}
      </Flex>
      </Grid>
    </Column>
  );
};
