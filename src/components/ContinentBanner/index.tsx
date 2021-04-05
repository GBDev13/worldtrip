import { Flex, Heading } from "@chakra-ui/react";

export default function ContinentBanner() {

  return (
    <Flex
      w="100%"
      h={["150px","300px","500px"]}
      px={["0","0","36"]}
      pt={["0","0","96"]}
      bgImage="url('https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center","center", "flex-start"]}
    >
      <Heading
        textAlign={["center","left"]}
        fontSize={["1.75rem","5xl"]}
        color="gray.100"
        fontWeight="500"
      >
        Europa
      </Heading>
    </Flex>
  )
}