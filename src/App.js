import 'antd/dist/antd.css';
import {Routes, Route} from 'react-router-dom'
import Home from './page/home';
import Anime from './page/anime';
import Action from './page/action';
import DetailMovie from './page/detailMovie';
import Romance from './page/romance';
import Login from './page/login';
import LayoutMain from './component/layout';

function App() {
  return (
    <div className=''>
      <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<LayoutMain />}>
            <Route index element={<Home />} />
            <Route path='/detail/:IdMovie' element={<DetailMovie />} />
            <Route path='/anime' element={<Anime />} />
            <Route path='/romance' element={<Romance />} />
            <Route path='/action' element={<Action />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
