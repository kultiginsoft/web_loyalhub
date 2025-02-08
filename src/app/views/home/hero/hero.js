import {Box, Button, Container, Heading, Icon, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {FaGift, FaMobileAlt, FaUpload} from "react-icons/fa";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const HeroSection = () => {
    return (
        <MotionBox
            bg="coffee.900"
            color="coffee.100"
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            px={6}
            py={12}
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: "easeOut"}}
        >
            <Container maxW="container.lg">
                <Heading size="2xl" fontWeight="800">
                    🚀 Create a <Text as="span" color="orange.300">Loyalty App</Text> for Your Business
                </Heading>

                <Text fontSize="xl" fontWeight="500" color="coffee.400" mt={4}>
                    Build a custom customer loyalty app for your brand in minutes.
                </Text>

                <SimpleGrid columns={{base: 1, md: 3}} spacing={8} mt={10}>
                    <VStack spacing={4}>
                        <Icon as={FaUpload} boxSize={12} color="orange.300"/>
                        <Text fontSize="xl" fontWeight="700">Easy Upload</Text>
                        <Text fontSize="md" color="coffee.300">Upload your text and images, and we'll handle the
                            rest.</Text>
                    </VStack>

                    <VStack spacing={4}>
                        <Icon as={FaMobileAlt} boxSize={12} color="orange.300"/>
                        <Text fontSize="xl" fontWeight="700">Custom Mobile App</Text>
                        <Text fontSize="md" color="coffee.300">Get a mobile app designed specifically for your
                            brand.</Text>
                    </VStack>

                    <VStack spacing={4}>
                        <Icon as={FaGift} boxSize={12} color="orange.300"/>
                        <Text fontSize="xl" fontWeight="700">Loyalty Programs</Text>
                        <Text fontSize="md" color="coffee.300">Offer discounts and special offers to your
                            customers.</Text>
                    </VStack>
                </SimpleGrid>

                <MotionButton
                    mt={10}
                    colorScheme="orange"
                    size="lg"
                    borderRadius="full"
                    fontSize="lg"
                    fontWeight="bold"
                    px={8}
                    py={6}
                    whileHover={{scale: 1.08}}
                    whileTap={{scale: 0.95}}
                >
                    📲 Get Started Now
                </MotionButton>
            </Container>
        </MotionBox>
    );
};
export default HeroSection;