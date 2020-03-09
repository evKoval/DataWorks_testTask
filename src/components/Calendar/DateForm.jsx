import React from "react";
import { useForm } from "react-hook-form";
import styles from "./DateForm.module.css";

const DateForm = props => {
  const { handleSubmit, register, errors } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { ...props }
  });

  const onSubmit = data => {
    props.refreshDate(data.date);
  };

  return (
    <form className={styles.DateForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        name="date"
        ref={register({
          required: "Date is required",
          pattern: {
            value: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i,
            message: "!Invalid date! Date format must be dd.mm.yyyy"
          }
        })}
      />
      <button type="submit">Submit</button>
      <div className={styles.errorMessage}> {errors.date && errors.date.message}</div>
    </form>
  );
};

export default DateForm;
