import { Text } from "@nextui-org/react";
import Image from "next/image";
import { Box } from "./Box";

export default function Logo() {
  return (
    <Box
      css={{
        gap: 12,
      }}
    >
      <Image src="/logo.svg" alt="PetMais" width={60} height={75}></Image>
      <Text h1 css={{ color: "$white", fontWeight: 600 }}>
        PetMais
      </Text>
    </Box>
  );
}
