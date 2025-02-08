import {Box, Container, Heading, Icon, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {FaCogs, FaRocket, FaUpload} from "react-icons/fa";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const HowItWorks = () => {
    return (
        <MotionBox
            py={20}
            bg="coffee.700"
            color="coffee.100"
            textAlign="center"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: "easeOut"}}
        >
            <Container maxW="container.lg">
                <Heading size="2xl" fontWeight="700" mb={12}>
                    📌 How It Works
                </Heading>

                <SimpleGrid columns={{base: 1, md: 3}} spacing={12}>
                    <MotionVStack
                        spacing={4}
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        <Icon as={FaUpload} boxSize={14} color="orange.300"/>
                        <Text fontSize="xl" fontWeight="700">1. Upload Your Content</Text>
                        <Text fontSize="md" color="coffee.300">
                            Add your business name, description, images, and in-app texts.
                        </Text>
                    </MotionVStack>

                    <MotionVStack
                        spacing={4}
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.4}}
                    >
                        <Icon as={FaCogs} boxSize={14} color="orange.300"/>
                        <Text fontSize="xl" fontWeight="700">2. We Process It</Text>
                        <Text fontSize="md" color="coffee.300">
                            We manually generate a professional mobile app for you.
                        </Text>
                    </MotionVStack>

                    <MotionVStack
                        spacing={4}
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.6}}
                    >
                        <Icon as={FaRocket} boxSize={14} color="orange.300"/>
                        <Text fontSize="xl" fontWeight="700">3. Launch & Grow</Text>
                        <Text fontSize="md" color="coffee.300">
                            Get your custom app and start engaging with your customers!
                        </Text>
                    </MotionVStack>
                </SimpleGrid>
            </Container>
        </MotionBox>
    );
};

export default HowItWorks;