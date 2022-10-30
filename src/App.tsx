import {Container } from '@mui/material';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routes } from './router/routes';
import queryClient from './services/queryClient';

function App() {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Container sx={{ height: '100%', display: 'flex', justifyContent: 'center', pb: 5 }}>
          <Router>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Router>
        </Container>
      </QueryClientProvider>
    </div>
  );
}

export default App;
