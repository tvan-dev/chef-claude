import { useState } from "react";
import styles from "./main.module.css";
import Form from "./Form";
import IngredientsList from "./IngredientsList";

export default function Main() {
    const [input, setInput] = useState("");
    const [ingredientsList, setIngredientList] = useState([]);

    function add() {
        setIngredientList((prev) => [...prev, input]);
    }

    return (
        <main className={styles.container}>
            <Form inputValue={input} setInputValue={setInput} addIngredient={add} />

            {ingredientsList.length > 0 && (
                <IngredientsList ingredientsList={ingredientsList} />
            )}

            {ingredientsList.length === 0 && (
                <p className={styles.emptyTitle}>
                Add some ingredients and let's cook together! 🍇🍉🍌
                </p>
            )}
        </main>
    );
}
