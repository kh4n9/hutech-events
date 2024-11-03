import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import AdminLayoutComponent from './components/AdminLayoutComponent';
import LayoutComponent from './components/LayoutComponent';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element: Element, isHeader, isAdmin }, index) => {
          // Chọn Layout phù hợp dựa trên các điều kiện
          const Layout = isHeader ? (isAdmin ? AdminLayoutComponent : LayoutComponent) : React.Fragment;

          return (
            <Route
              key={index}
              path={path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
