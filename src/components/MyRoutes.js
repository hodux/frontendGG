import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import NotFound from './NotFound';
import Profile from './Profile';
import SignIn from './SignIn';
import AddClient from './AddClient';
import Recipes from './Recipes';
import ResetPassword from './ResetPassword';
import Catalogue from './Catalogue';
import ListClient from "./ListClient";
import RecipeResult from "./RecipeResult";
import RecipeDetail from './RecipeDetail'; 
import RecipeForm from './RecipeForm';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
            <Route path="/" element={<PrivateRoute/>}>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/recipes' element={<Recipes />} />
                    <Route path='/listClts' element={<ListClient />} />
                    <Route path='/catalogue' element={<Catalogue />} />
                    <Route path='/catalogue/:recipe_ID' element={<RecipeDetail />} />
                    <Route path="/recipeForm" element={<RecipeForm />} />
                    <Route path="/your_results" element={<RecipeResult />} />
                </Route>
                <Route path='/signIn' element={<SignIn />} />
                <Route path='/signUp' element={<AddClient />} />
                <Route path='/resetPassword' element={<ResetPassword />} />
                <Route path='/home' element={<Home />} />
                <Route path='/contact' element={<Home />} />
                <Route path='/about' element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default MyRoutes;
