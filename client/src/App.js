import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Element = route.element;
            const Layout = route.isHeader ? DefaultComponent : Fragment;
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
