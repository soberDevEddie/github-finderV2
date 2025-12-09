import UserSearch from './components/UserSearch';
import { FaGithub } from 'react-icons/fa';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <div className='container'>
      <FaGithub size={40} color='green'/>
      <h1>Github Finder</h1>
      <UserSearch />
      <Toaster />
    </div>
  );
};

export default App;
