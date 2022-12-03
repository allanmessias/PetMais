import { Button, styled, Text } from "@nextui-org/react";
import { Box } from "../components/Box";
import Icon from "../components/Icon";
import Image from "next/image";
import Logo from "../components/Logo";

const GradientBox = styled(Box, {
  background: "$gradient",
  width: "100vw",
  height: "100vh",
});

const Wrapper = styled(Box, {
  p: 150,
  width: "100%",
  position: "relative",
});

const BoxLocation = () => {
  return (
    <Box
      css={{
        position: "absolute",
        top: 150,
        right: 150,
        flexDirection: "column",
        alignItems: "end",
      }}
    >
      <Text h3 color="$white">
        Fortaleza
      </Text>
      <Text h4 color="$white">
        Ceará
      </Text>
    </Box>
  );
};

const CatDogIllustration = () => {
  return (
    <Box
      css={{
        flexDirection: "column",
        alignSelf: "end",
        marginLeft: 200,
        alignItems: "center",
      }}
    >
      <Image
        src="/images/heart-landing.svg"
        alt="heart"
        width={115}
        height={133}
      ></Image>

      <Image
        src="/images/pets-landing.svg"
        alt="Pets dog and cat"
        width={550}
        height={380}
      ></Image>
    </Box>
  );
};

export default function Index() {
  return (
    <GradientBox>
      <Wrapper>
        <BoxLocation></BoxLocation>
        <Box
          css={{
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <Box
            css={{
              gap: 40,
              flexDirection: "column",
            }}
          >
            <Text
              css={{
                color: "$white",
                fontWeight: 700,
                width: 500,
                fontSize: 100,
                lineHeight: 0.9,
              }}
            >
              Leve felicidade para o mundo
            </Text>
            <Text
              h2
              css={{
                color: "$white",
                width: 400,
                lineHeight: 1,
              }}
            >
              Gerencie seus pets com mais facilidade!
            </Text>
          </Box>
        </Box>

        <CatDogIllustration></CatDogIllustration>

        <Button
          auto
          color="warning"
          icon={<Icon name="arrow_forward" />}
          css={{
            borderRadius: 26,
            position: "absolute",
            bottom: 150,
            right: 150,
            width: 80,
            height: 80,
          }}
        />
      </Wrapper>
    </GradientBox>
  );
}
