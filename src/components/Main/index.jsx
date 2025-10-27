import { useState } from "react";
import styles from "./main.module.css";
import Form from "./Form";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./CLaudeRecipe";
import { getRecipeFromMistral } from "../../ai";

export default function Main() {
    const [input, setInput] = useState("");
    const [ingredientsList, setIngredientList] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipe, setRecipe] = useState();

    function add() {
        setIngredientList((prev) => [...prev, input]);
    }

    function toggleRecipeShown() {
        setRecipeShown((prevShown) => !prevShown);
    }

    async function getRecipe() {
        const recipeTextAi = await getRecipeFromMistral(ingredientsList);
        setRecipe(recipeTextAi);
    }

    function reset() {
        setIngredientList([]);
        setRecipe("");
        setRecipeShown(false);
    }

    return (
        <main className={styles.container}>
        <Form inputValue={input} setInputValue={setInput} addIngredient={add} />

        {ingredientsList.length > 0 && (
            <IngredientsList
            ingredientsList={ingredientsList}
            toggleRecipeShown={toggleRecipeShown}
            getRecipe={getRecipe}
            />
        )}

        {ingredientsList.length === 0 && (
            <p className={styles.emptyTitle}>
            Add at least three ingredients to get started! 🍇🍉🍌
            </p>
        )}

        {recipeShown && <ClaudeRecipe recipe={recipe} reset={reset}/>}
        </main>
    );
}
