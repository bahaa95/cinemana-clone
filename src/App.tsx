import { AppProvider } from 'src/providers';
import { AppRoutes } from 'src/routes';

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
};

export default App;
