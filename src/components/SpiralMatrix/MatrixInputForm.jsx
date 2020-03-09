import React from "react";
import { useForm } from "react-hook-form";
import styles from "../Calendar/DateForm.module.css";

const MatrixInputForm = props => {
  const { handleSubmit, register, errors } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { ...props }
  });

  const onSubmit = data => {
    props.setNewDimensions(data.width, data.height);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="width"
        type="number"
        min="1"
        max="100"
        ref={register({
          required: "height is required",
        })}
      />
      <input
        name="height"
        type="number"
        min="1"
        max="100"
        ref={register({
          required: "height is required",
        })}
      />
      <button type="submit">Submit</button>
      {errors.width && <div className={styles.errorMessage}>{errors.width.message}</div>}
      {errors.height && <div className={styles.errorMessage}>{errors.height.message}</div>}
    </form>
  );
};

export default MatrixInputForm;
