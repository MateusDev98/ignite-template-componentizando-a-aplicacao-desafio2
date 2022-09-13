import { Layout } from "./components/Layout";
import AppProvider from "./providers/AppProvider";
import "./styles/global.scss";

export function App() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}
