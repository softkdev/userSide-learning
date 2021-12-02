import "tailwindcss/tailwind.css";
import "./../../public/assets/fontiran.css";
import "./../../public/style.css";
import Layouts from "../components/Layouts";
import store, { wrapper } from "./../redux/store";
import axios from "axios";
import { useEffect } from "react";
// import { Provider } from "react-redux";
// import { createWrapper } from "next-redux-wrapper";

export const BASE_URI = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.baseURL = BASE_URI;

function MyApp({ Component, pageProps }) {
  useEffect(() => {}, []);
  return (
    // <Provider store={store}>
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
    // </Provider>
  );
}
// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
