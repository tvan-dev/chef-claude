import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./main.module.css";

export default function ClaudeRecipe({ recipe, reset }) {
  if (!recipe) return null;

  return (
    <section className={styles.recipeSection}>
      <h1 className={styles.titleDescribe}>Your recipe:</h1>
      <div className={styles.recipeBox}>
        <div className={styles.markdownWrapper}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {recipe}
          </ReactMarkdown>
        </div>
      </div>
      <button className={styles.btnReset} onClick={reset}>Reset</button>
    </section>
  );
}
