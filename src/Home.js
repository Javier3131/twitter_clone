import Feed from './Feed';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Home = () => {
  return (
    <div className="home row">
      <LeftSidebar className="col-md-3"></LeftSidebar>
      <Feed className="col-md-4"></Feed>
      <RightSidebar className="col-md-3"></RightSidebar>
    </div>
  );
};

export default Home;
