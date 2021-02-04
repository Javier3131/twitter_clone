import Feed from './Feed';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Home = () => {
  return (
    <div className="home">
        <div className="text-center py-5 px-3">
            <h1>Hola mundo</h1>
        </div>
      <LeftSidebar></LeftSidebar>
      <Feed></Feed>
      <RightSidebar></RightSidebar>
    </div>
  );
};

export default Home;
