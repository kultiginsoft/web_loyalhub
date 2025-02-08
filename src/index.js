import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Box, ChakraProvider} from "@chakra-ui/react";
import system from './system';
import {motion} from "framer-motion";

const MotionBox = motion(Box);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ChakraProvider value={system}>
            <MotionBox
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <App/>
            </MotionBox>
        </ChakraProvider>
    </React.StrictMode>
);

reportWebVitals();