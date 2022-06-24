import './home.css';
import NavBar from '../../component/navbar/nav';
import Content from '../../component/content/content';

function Home() {
  return (
    <div className="home">
        <div className="home1">
            <NavBar></NavBar>
        </div>
        <div className="home2">
            <Content></Content>
        </div>
    </div>
  );
}

export default Home;
