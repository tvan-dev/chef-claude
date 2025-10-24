import { useRef } from "react";

import styles from "./main.module.css";

export default function Form({ inputValue, setInputValue, addIngredient }) {
    const inputRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputValue.trim()) return;

        addIngredient();
        setInputValue("");
        inputRef.current.focus();
    }
    return (
        <form onSubmit={handleSubmit} className={styles.formSubmit}>
            <input
                type="text"
                name="ingredient"
                placeholder="e.g oregano"
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className={styles.btnAdd}>Add ingredient</button>
        </form>
    );
}
