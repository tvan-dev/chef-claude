import styles from "./main.module.css";


export default function IngredientsList({ ingredientsList, setRecipeShown,getRecipe,ref }) {

async function handleGetRecipe() {
    setRecipeShown(true)
    await getRecipe()
}


    return (
        <section className={styles.list}>
            <h1>Ingredients on hand:</h1>

            <ul className={styles.ingredientList}>
                {ingredientsList.map((ingredient) => {
                return <li key={crypto.randomUUID()}>{ingredient}</li>;
                })}
            </ul>

            {ingredientsList.length > 2 && (
                <div className={styles.recipe} ref={ref}>
                    <div className={styles.title}>
                        <h3 className={styles.titleQuestion}>Ready for a recipe?</h3>
                        <p className={styles.subTitle}>
                        Generate a recipe from your list of ingredients.
                        </p>
                    </div>

                    <button className={styles.btnGetRecipe} onClick={handleGetRecipe} >Get a recipe</button>
                </div>
            )}
        </section>
    );
}
