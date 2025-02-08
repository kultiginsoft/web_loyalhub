import {Box} from "@chakra-ui/react";
import Header from "./header/header";
import HeroSection from "./hero/hero";
import Footer from "./footer/footer";
import HowItWorks from "./howitworks/howitworks";

const HomePage = () => {
    return (
        <Box>
            <Header/>
            <HeroSection/>
            <HowItWorks/>
            <Footer/>
        </Box>
    );
};

export default HomePage;
