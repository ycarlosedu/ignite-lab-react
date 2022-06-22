import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Video from '../components/Video';

const Event: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <Video />
        <Sidebar />
      </main>
    </div>
  );
};

export default Event;
