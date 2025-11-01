import { useState, useRef, useEffect } from "react";
import styles from "./main.module.css";
import Form from "./Form";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./CLaudeRecipe";
import { getRecipeFromMistral } from "../../ai";

export default function Main() {
    const [input, setInput] = useState("");
    const [ingredientsList, setIngredientList] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipe, setRecipe] = useState("");
    const refRecipeSection = useRef(null)

    function add() {
        setIngredientList((prev) => [...prev, input]);
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

    useEffect(() => {
        if(recipe && refRecipeSection !== null) {
            refRecipeSection.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    })

    return (
        <main className={styles.container}>
        <Form inputValue={input} setInputValue={setInput} addIngredient={add} />

        {ingredientsList.length > 0 && (
            <IngredientsList
            ingredientsList={ingredientsList}
            setRecipeShown={setRecipeShown}
            getRecipe={getRecipe}
            ref={refRecipeSection}
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
