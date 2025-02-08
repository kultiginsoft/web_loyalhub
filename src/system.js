import {createSystem, defaultConfig} from "@chakra-ui/react"

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                heading: {value: `'Poppins', sans-serif`},
                body: {value: `'Poppins', sans-serif`},
            },
            colors: {
                coffee: {
                    900: "#4B2E2E",
                    700: "#8B5E3C",
                    500: "#D3A184",
                    400: "#D7CCC8",
                    200: "#F5E6D3",
                    100: "#F5F5F5"
                },
                orange: {
                    900: "#E67E22",
                    700: "#F39C12",
                    500: "#F5B041",
                    200: "#F8C471",
                    100: "#FADFAD"
                }
            },
        },
    },
})

export default system;