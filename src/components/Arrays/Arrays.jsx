import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Arrays.module.css";

const fillArrays = (L, M, Sn) => {
  let m = 0,
    i = 0;
  let mArray = [],
    nArray = [];
  Sn = Sn.split("");
  while (m < M) {
    [mArray[i], nArray[i]] = [Math.ceil(Sn[i] / 2), Math.floor(Sn[i] / 2)];
    Sn[i] && m++;
    i++;
  }
  for (i; i < L; i++) {
    [nArray[i], mArray[i]] = [Math.ceil(Sn[i] / 2), Math.floor(Sn[i] / 2)];
  }
  return [mArray.join(""), nArray.join("")];
};

const Arrays = () => {
  const [arrLength, setArrLength] = useState();
  const [summM, setM] = useState(0);
  const [summN, setN] = useState(0);
  const [Sn, setSn] = useState(0);
  const [Arrays, setArrays] = useState([]);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    setArrays(fillArrays(arrLength, summM, Sn));
  };

  const onLengthChange = ev => {
    setArrLength(ev.currentTarget.value);
  };
  const onMChange = ev => {
    setM(ev.currentTarget.value);
  };
  const onNChange = ev => {
    setN(ev.currentTarget.value);
  };
  const onSnChange = ev => {
    setSn(ev.currentTarget.value);
  };
  return (
    <div className={styles.Arrays}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="arrayLength"
          name="arrayLength"
          onChange={onLengthChange}
          max="1000"
          min="1"
          ref={register({
            required: "length of arrays L is required"
          })}
        />

        <input
          type="number"
          placeholder="M"
          name="M"
          onChange={onMChange}
          ref={register({
            required: "summ of elements in 1st array is required",
            max: { value: arrLength, message: `M must be less than length of array L=${arrLength}` }
          })}
        />
        <input
          type="number"
          placeholder="N"
          name="N"
          onChange={onNChange}
          ref={register({
            required: "summ of elements in 2nd array is required",
            max: { value: arrLength, message: `N must be less than length of array L=${arrLength}` }
          })}
        />
        <div className={styles.Sn}>
          <input
            type="text"
            placeholder="Sn"
            name="Sn"
            onChange={onSnChange}
            ref={register({
              required: true,
              max: 123,
              maxLength: {
                value: arrLength,
                message: `Length must be equal to L=${arrLength}, currently ${Sn.length}`
              },
              minLength: {
                value: arrLength,
                message: `Length must be equal to L=${arrLength}, currently ${Sn.length}`
              },
              pattern: { value: /^[0-2]+$/i, message: `Only '0', '1', '2' values possible` },
              validate: {
                lessThanSummMN: value =>
                  value.split("").reduce((a, b) => +a + +b, 0) === +summM + +summN ||
                  `Summ must be equal to M+N = ${+summM + +summN}}`,
                checkNumberOfTwo: value =>
                  value.split("").filter(num => num == 2).length <= Math.min(summM, summN) ||
                  `Quantity of "2" must be less than ${ Math.min(summM, summN)}`
              }
            })}
          />
        </div>

        <div className={styles.errorMessage}>
          {(errors.Sn && errors.Sn.message) ||
            (errors.arrayLength && errors.arrayLength.message) ||
            (errors.M && errors.M.message) ||
            (errors.N && errors.N.message)}
        </div>
        <div>{Arrays[0]}</div>
        <div>{Arrays[1]}</div>
        <input type="submit" value="Generate" />
      </form>
    </div>
  );
};

export default Arrays;
