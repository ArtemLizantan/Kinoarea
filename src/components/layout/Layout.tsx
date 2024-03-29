import { ReactNode } from "react";
import Container from "../container/Container";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};

export default Layout;
