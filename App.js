import './App.css';
import Hero from './components/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// importing files of header
import Aboutus from './components/Pages/Aboutus'
import Gym1 from './components/Pages/AboutGyms/Gym1'
import DietPlan from './components/Pages/DietPlan'
import Header from './components/Header/Header';
// importing files of Gyms
import Gym2 from './components/Pages/AboutGyms/Gym1';
import Gym3 from './components/Pages/AboutGyms/Gym3';
import Gym4 from './components/Pages/AboutGyms/Gym4';
import Gym5 from './components/Pages/AboutGyms/Gym5';
import Gym6 from './components/Pages/AboutGyms/Gym6';
// importing files of DietPlan
// import GMdiet from './components/diets/dietloose/GMdiet'
import Regulardiet from './components/diets/dietloose/Regulardiet'
import Kitto from './components/diets/dietloose/Kitto'
import Bulk from './components/diets/dietgain/Bulk'
import Fat from './components/diets/dietgain/Fat'
import Quick from './components/diets/dietgain/Quick'
//Importing file for the workout plan 
import Biceps from './components/Pages/WorkoutPages/Biceps'
import Triceps from './components/Pages/WorkoutPages/Triceps'
import Back from './components/Pages/WorkoutPages/Back'
import Legs from './components/Pages/WorkoutPages/Legs'
import Chest from './components/Pages/WorkoutPages/Chest'
import Shoulder from './components/Pages/WorkoutPages/Shoulder'

const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/dietplan' element={<DietPlan />} />
          <Route path='/gym1' element={<Gym1 />} />
          <Route path='/gym2' element={<Gym2 />} />
          <Route path='/gym3' element={<Gym3 />} />
          <Route path='/gym4' element={<Gym4 />} />
          <Route path='/gym5' element={<Gym5 />} />
          <Route path='/gym6' element={<Gym6 />} />
          {/* <Route path='/gym7' element={<Gym7 />} /> */}
        </Routes>
      </BrowserRouter>

      {/* >>>>>>>>>>Routing for the diet plan <<<<<<<<< */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/Kitto' element={<Kitto />} />
          {/* <Route path='/GMdiet' element={<GMdiet />} /> */}
          <Route path='/Regulardiet' element={<Regulardiet />} />
          <Route path='/Bulk' element={<Bulk />} />
          <Route path='/Fat' element={<Fat />} />
          <Route path='/Quick' element={<Quick />} />
        </Routes>
      </BrowserRouter>

      {/* >>>>>>>>>>Routing for the Workout plan <<<<<<<<< */}
      <BrowserRouter>
        <Header />
        <Routes>

          {/* workout for the Bulking */}
          <Route path='/Biceps' element={<Biceps />} />
          <Route path='/Triceps' element={<Triceps />} />
          <Route path='/Shoulder' element={<Shoulder />} />
          <Route path='/Back' element={<Back />} />
          <Route path='/Legs' element={<Legs />} />
          <Route path='/Chest' element={<Chest />} />
          {/* workout for the leaning */}
          <Route path='/Biceps' element={<Biceps />} />
          <Route path='/Triceps' element={<Triceps />} />
          <Route path='/Shoulder' element={<Shoulder />} />
          <Route path='/Back' element={<Back />} />
          <Route path='/Legs' element={<Legs />} />
          <Route path='/Chest' element={<Chest />} />
        </Routes>
      </BrowserRouter>

      {/* <Hero />
      <Contact />
      <Join /> */}

    </div>
  );
}

export default App;
