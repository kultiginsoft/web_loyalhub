import {Box, Flex, Button, Spacer, Link, Image, Heading} from "@chakra-ui/react";
import logo from "../../../../assets/loyalhub_logo.png";
import {motion} from "framer-motion";
import NavItems from "../../../models/navItems";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const Header = () => {
    return (
        <MotionBox
            as="header"
            position="sticky"
            top="0"
            zIndex="1000"
            bg="coffee.700"
            color="coffee.100"
            py={4}
            px={6}
            boxShadow="md"
            initial={{opacity: 0, y: -30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: "easeOut"}}
        >
            <Flex align="center">
                <MotionImage
                    src={logo}
                    alt="Loyalty App"
                    borderRadius="md"
                    h="auto"
                    maxW="40px"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                    whileHover={{scale: 1.02}}
                />
                <Heading size="lg" fontWeight="700" ml={2}>LoyalHub</Heading>

                <Spacer/>

                <Flex gap={8}>
                    {Object.entries(NavItems).map(([key, href]) => (
                        <Link
                            key={key}
                            href={href}
                            fontSize="xl"
                            fontWeight="600"
                            color="coffee.100"
                            _hover={{
                                color: "orange.300",
                                textDecoration: "none",
                                transform: "scale(1.05)",
                            }}
                            transition="all 0.3s ease"
                        >
                            {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                        </Link>
                    ))}
                </Flex>

                <Spacer/>

                <Button
                    colorScheme="orange"
                    size="md"
                    fontSize="md"
                    fontWeight="bold"
                    borderRadius="full"
                    _hover={{bg: "orange.400", transform: "scale(1.05)"}}
                    transition="all 0.3s ease"
                >
                    Login
                </Button>
            </Flex>
        </MotionBox>
    );
};

export default Header;
