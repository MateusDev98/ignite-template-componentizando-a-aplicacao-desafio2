import { SideBar } from "./SideBar";
import { Content } from "./Content";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="layout">
      <SideBar />
      <div className="container">
        <Header />
        <Content />
      </div>
    </div>
  );
}
