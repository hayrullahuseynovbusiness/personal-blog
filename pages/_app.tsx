import { AppProps } from "next/app";
import "styles/global.css";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="max-w-3xl mx-auto w-full px-6">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
