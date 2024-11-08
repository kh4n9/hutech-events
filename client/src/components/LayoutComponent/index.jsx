import HeaderComponent from "../HeaderComponent";

const LayoutComponent = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
};

export default LayoutComponent;