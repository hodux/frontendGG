import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Recipes from './components/Recipes';
import ResetPassword from './components/ResetPassword';
import Catalogue from './components/Catalogue';
import AddClient from "./components/AddClient";
import ListClient from "./components/ListClient";
import RecipeResult from "./components/RecipeResult";
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm'

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Home />} />
            <Route path='/about' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/catalogue' element={<Catalogue />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<AddClient />} />
            <Route path='/resetPassword' element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/addClts" element={<AddClient />} />
            <Route path="/listClts" element={<ListClient />} />
            <Route path='/catalogue/:recipeName' element={<RecipeDetail/>} />
            <Route path="/recipeForm" element={<RecipeForm />} />
            <Route path="/your_results" element={<RecipeResult />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;

