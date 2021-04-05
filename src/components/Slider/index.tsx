import { Flex, Heading, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Slider() {
  return (
    <Flex w="100%" h={["250px","450px"]} maxW="1240px" mx="auto" mb={["5","10"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{width: '100%', flex: '1'}}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/europe.png')"
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
            <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>O continente mais antigo.</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
        <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/africa.jpg')"
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Heading fontSize={["3xl","5xl"]} color="gray.100" fontWeight="bold">Africa</Heading>
            <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","2xl"]} mt={["2","4"]}>O continente mais quente.</Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}