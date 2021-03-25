import * as React from "../../_snowpack/pkg/react.js";
import {QueryClient, QueryClientProvider} from "../../_snowpack/pkg/react-query.js";
const queryClient = new QueryClient();
export default function Blog() {
  return /* @__PURE__ */ React.createElement(QueryClientProvider, {
    client: queryClient
  }, /* @__PURE__ */ React.createElement(App, null));
}
function App() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
}
