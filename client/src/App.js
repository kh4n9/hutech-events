import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import AdminLayoutComponent from './components/AdminLayoutComponent';
import LayoutComponent from './components/LayoutComponent';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Element = route.element;
            let Layout = Fragment;
            if (route.isHeader && route.isAdmin) {
              Layout = AdminLayoutComponent
            }
            else if (route.isHeader) {
              Layout = LayoutComponent;
            }
            else {
              Layout = Fragment;
            }

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
