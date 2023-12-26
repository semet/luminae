import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";

const latoFont = Lato({
   subsets: ["latin"],
   weight: ["100", "300", "400", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <main className={latoFont.className}>
         <Component {...pageProps} />
      </main>
   );
}
