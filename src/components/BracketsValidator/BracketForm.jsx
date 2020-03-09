import React from "react";
import { useForm } from "react-hook-form";
import styles from "./BracketForm.module.css";

const BracketForm = props => {
  const { handleSubmit, register, errors } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { ...props }
  });

  const onSubmit = data => {
    let arr = [];
    if (data["()"]) arr.push(["(", ")"]);
    if (data["squareBrackets"]) arr.push(["[", "]"]);
    if (data["{}"]) arr.push(["{", "}"]);
    if (data.customOpen && data.customClose) arr.push([`${data.customOpen}`, `${data.customClose}`]);
    props.setPhrase(data.phrase);
    props.setValidators(arr);
  };

  return (
    <div className={styles.BracketForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.expression}>
          <input
            className={styles.phraseInput}
            type="text"
            // placeholder={props.phrase}
            name="phrase"
            ref={register({
              required: "phrase is required"
            })}
          />
          Phrase to check
          {errors.phrase && <div className={styles.errorMessage}>{errors.phrase.message}</div>}
        </div>
        <div className={styles.validators}>
          <div>
            <input id="()" type="checkbox" placeholder="( )" name="()" defaultChecked="true" ref={register} />
            <label >( ) </label>
          </div>
          <div>
            <input id="[]" type="checkbox" placeholder="[ ]" name="squareBrackets" ref={register} />
            <label for="[]">[ ]</label>
          </div>

          <div>
            <input
              id="{}"
              type="checkbox"
              placeholder="{ }"
              name="{}"
              ref={register({
                maxLength: 1
              })}
            />
            <label for="{}">{"{ }"}</label>
          </div>
          <div>
            <div className={styles.customBlock}>
              <input
                className={styles.customInput}
                type="text"
                placeholder="customOpen"
                name="customOpen"
                ref={register({
                    maxLength: 1
                  })}
              />

              <input
                className={styles.customInput}
                type="text"
                placeholder="customClose"
                name="customClose"
                ref={register({
                  maxLength: 1
                })}
              />

              <button type="submit">validate</button>
            </div>
          {(errors.customOpen||errors.customClose) && <div className={styles.errorMessage}>Only 1 symbol, please</div>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BracketForm;
