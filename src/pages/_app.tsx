import { createTheme, NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import "../styles/globals.css";

const lightTheme = createTheme({
  type: "light",
  theme: {
    fonts: {
      sans: "'Nunito', sans-serif",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono','DejaVu Sans Mono', 'Bitstream Vera Sans Mono'",
    },
    colors: {
      black: "#1b1c1e",
      gradient: "linear-gradient(115.1deg, #FF960B 1.07%, #E10044 98.95%)",
      primaryLight: "#FFC2D4",
      primaryLightHover: "#ff85a9", // commonly used on hover state
      primaryLightActive: "#ff5c8d", // commonly used on pressed state
      primaryLightContrast: "#ff1f62", // commonly used for text inside the component
      primary: "#e10044",
      primaryBorder: "#cc003d",
      primaryBorderHover: "#ff1f62",
      primarySolidHover: "#a30031",
      primarySolidContrast: "#ffebf1", // commonly used for text inside the component
      primaryShadow: "#520018",
      secondaryLight: "#ffedd6",
      secondaryLightHover: "#ffdcad", // commonly used on hover state
      secondaryLightActive: "#ffb85c", // commonly used on pressed state
      secondaryLightContrast: "#ffa733", // commonly used for text inside the component
      secondary: "#ff960b",
      secondaryBorder: "#f58b00",
      secondaryBorderHover: "#cc7400",
      secondarySolidHover: "#7a4500",
      secondarySolidContrast: "#fff6eb", // commonly used for text inside the component
      secondaryShadow: "#291700",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    fonts: {
      sans: "'Nunito', sans-serif",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono','DejaVu Sans Mono', 'Bitstream Vera Sans Mono'",
    },
    colors: {
      black: "#1b1c1e",
      gradient: "linear-gradient(115.1deg, #FF960B 1.07%, #E10044 98.95%)",
      primaryLight: "#FFC2D4",
      primaryLightHover: "#ff85a9", // commonly used on hover state
      primaryLightActive: "#ff5c8d", // commonly used on pressed state
      primaryLightContrast: "#ff1f62", // commonly used for text inside the component
      primary: "#e10044",
      primaryBorder: "#cc003d",
      primaryBorderHover: "#ff1f62",
      primarySolidHover: "#a30031",
      primarySolidContrast: "#ffebf1", // commonly used for text inside the component
      primaryShadow: "#520018",
      secondaryLight: "#ffedd6",
      secondaryLightHover: "#ffdcad", // commonly used on hover state
      secondaryLightActive: "#ffb85c", // commonly used on pressed state
      secondaryLightContrast: "#ffa733", // commonly used for text inside the component
      secondary: "#ff960b",
      secondaryBorder: "#f58b00",
      secondaryBorderHover: "#cc7400",
      secondarySolidHover: "#7a4500",
      secondarySolidContrast: "#fff6eb", // commonly used for text inside the component
      secondaryShadow: "#291700",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}
