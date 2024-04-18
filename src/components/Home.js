import food from "./food.png";
import seafood from "./seafood.jpg";
import noodles from "./noodles.jpg";
import './home.css'

function Home() {

    return (
        <>
        <body>

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner justify-content-center">
                <div class="carousel-item active ">
                    <img src={food} class="d-block w-100 img" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={seafood} class="d-block w-100 img" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={noodles} class="d-block w-100 img" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

            <div class="container container-home mt-5">

            <div class="text-center row mt-4 border-bottom border-secondary">
                <div class="col-12 col-lg-8">
                <h1 class="display-5">Bienvenue sur Grimace Gastronomy!</h1>
                <p class="px-5">Grimace Gastronomy est une application innovante conçue pour simplifier le processus de recherche de recettes culinaires en fonction des préférences et buts alimentaires de chaque individu.</p>
                </div>
                <div class="col-12 col-lg-4">
                <p class="px-5 mb-2">Que vous soyez végétarien, végétalien ou simplement à la recherche de nouvelles idées pour votre alimentation quotidienne, GG est votre compagnon idéal pour explorer des recettes délicieuses et adaptées à vos besoins spécifiques!</p>
                </div>
            </div>

            <div class="row mt-2">
                <a class="col-6 text-start" href="signUp">Create your account!</a>
                <a class="col-6 text-end" href="/signIn">Already a user?</a>
            </div>

            <div class="row">
                <div class="col-8">
                    
                </div>
            </div>


            </div>
        </body>
    
        </>
    );
}

export default Home;