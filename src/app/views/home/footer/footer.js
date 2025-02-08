import {Box, Text} from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box py={4} bg="coffee.900" color="coffee.200" textAlign="center">
            <Text fontSize="sm">&copy; {new Date().getFullYear()} LoyalHub. All rights reserved.</Text>
        </Box>
    );
};

export default Footer;
