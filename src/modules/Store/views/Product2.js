// import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  Button,
  Card,
  Column,
  Flex,
  Image,
  Text,
} from "tomato";

export const Product2 = () => {
  const { t } = useTranslation();

  return (
    <Card bg="l0" m="32px" sx={{ height: "fit-content" }}>
      <Flex bg="l2" sx={{ width: "100%", height: "100%" }}>

        <Image src={"https://www.paodeacucar.com/img/uploads/1/892/586892.png"} />

        <Column sx={{ flexGrow: 2 }}>
          <Text>Titulo invocado do vinho</Text>
          <Column>

            <Flex></Flex>

          </Column>
        </Column>

        <Column sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Flex>
            <Text>R$ 159.90</Text>
            <Text>R$ 95.00</Text>
          </Flex>
          <Button> {t("Avaliar")} </Button>
          <Button> {t("Adicionar")} </Button>
          <Button> {t("Compra Agora")} </Button>
        </Column>

      </Flex>
    </Card>
  );
};
