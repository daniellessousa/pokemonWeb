import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <div>
    {children}
  </div>
);

export default MainLayout;
