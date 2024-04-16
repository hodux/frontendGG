import { useLocation } from "react-router-dom";

function RecipeResult(props) {

    const {result} = useLocation();
    const {weight} = result;

    return (
        <div>
            <p>hi : {props.location.result(weight)}</p>
        </div>
    );
}

export default RecipeResult;