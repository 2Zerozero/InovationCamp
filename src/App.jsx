import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Login from './components/Login';
import Nav from "./components/Nav";
import Taps from './components/Taps';
import Write from './components/Write';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <Nav/>
      <Taps/>
      <Login />
      <Write />
    </div>
    </QueryClientProvider>
  );
}

export default App;
