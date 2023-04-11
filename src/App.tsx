import { AppProvider } from 'src/providers';
import { AppRoutes } from 'src/routes';

const App = () => {
  return (
    <div className="App">
      <div className="relative min-h-screen">
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </div>
    </div>
  );
};

export default App;
