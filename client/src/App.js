import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import LayoutComponent from './components/LayoutComponent';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Element = route.element;
            const Layout = route.isHeader ? LayoutComponent : Fragment;
            return (
              <Route
                key={index}
                path={route.path}
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
    </div>
  )
}

export default App;
