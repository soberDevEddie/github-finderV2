import UserSearch from './components/UserSearch';
import { FaGithub } from 'react-icons/fa';

const App = () => {
  return (
    <div className='container'>
      <FaGithub size={40} color='green'/>
      <h1>Github Finder</h1>
      <UserSearch />
    </div>
  );
};

export default App;
