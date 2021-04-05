import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Banner from "../components/Banner";
import Caracteristicas from "../components/Caracteristicas";
import Header from "../components/Header";
import Separador from "../components/Separador";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Flex direction="column">
    <Head>
      <title>WorldTrip - Home</title>
    </Head>

    <Header />
    <Banner />
    <Caracteristicas />
    <Separador />

    <Heading
      textAlign="center"
      fontWeight="500"
      mb={["5","14"]}
      fontSize={["lg",
      "3xl",
      "4xl"]}
    >
    Vamos nessa?<br/>Então escolha seu continente
    </Heading>
    
    <Slider />
  </Flex>
  )
}
