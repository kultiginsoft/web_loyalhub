import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";

const HomePage = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box bg="blue.600" color="white" py={20}>
                <Container maxW="container.lg">
                    <Flex direction={{base: "column", md: "row"}} align="center">
                        {/* Left Side - Text */}
                        <VStack align="start" spacing={5} flex="1">
                            <Heading size="2xl">Create Your Loyalty App in Minutes!</Heading>
                            <Text fontSize="lg">
                                Upload your brand details, customize rewards, and get a
                                ready-to-use mobile app for your customers.
                            </Text>
                            <Stack direction="row">
                                <Button colorScheme="yellow" size="lg">Get Started</Button>
                                <Button colorScheme="gray" variant="outline" size="lg">
                                    Learn More
                                </Button>
                            </Stack>
                        </VStack>
                        {/* Right Side - Image */}
                        <Image
                            src="https://source.unsplash.com/600x400/mobileapp"
                            alt="Loyalty App"
                            borderRadius="md"
                            ml={{md: 10}}
                            mt={{base: 10, md: 0}}
                        />
                    </Flex>
                </Container>
            </Box>

            {/* Features Section */}
            <Container maxW="container.lg" py={20}>
                <Heading textAlign="center" mb={10}>
                    Why Choose LoyalHub?
                </Heading>
                <Flex wrap="wrap" justify="center" gap={10}>
                    {[
                        {title: "Custom Branding", desc: "Fully customize your app."},
                        {title: "Fast & Easy", desc: "No coding required."},
                        {title: "Boost Customer Loyalty", desc: "Retain more customers."},
                        {title: "Cross-Platform", desc: "Works on iOS & Android."},
                    ].map((feature, index) => (
                        <Box key={index} p={5} bg="gray.100" borderRadius="md" w="250px">
                            <Heading size="md" mb={2}>{feature.title}</Heading>
                            <Text>{feature.desc}</Text>
                        </Box>
                    ))}
                </Flex>
            </Container>

            {/* Call to Action */}
            <Box bg="yellow.400" py={10} textAlign="center">
                <Heading size="lg" mb={3}>Start Building Your Loyalty App Today!</Heading>
                <Button colorScheme="blue" size="lg">Upload & Generate</Button>
            </Box>
        </Box>
    );
};

export default HomePage;
