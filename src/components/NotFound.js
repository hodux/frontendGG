import "./notfound.css";

function NotFound() {
    return (
        <>
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <strong class="display-1">404</strong>
                <p class="my-3 lead">
                    Perdu?
                  </p>
                <a href="/" class="btn btn-primary">Retour à GG</a>
            </div>
        </div>
        </>
    );
}

export default NotFound;