import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "./i18n";
import "./helpers/polyfill";
import "highlight.js/styles/github.css";
import "./less/global.less";
import "./css/tailwind.css";
import "dayjs/locale/zh";
import "dayjs/locale/fr";
import "dayjs/locale/vi";
import { CssVarsProvider } from "@mui/joy";
import theme from "./theme";

dayjs.extend(relativeTime);

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(
  <Provider store={store}>
    <CssVarsProvider theme={theme}>
      <App />
    </CssVarsProvider>
  </Provider>
);
