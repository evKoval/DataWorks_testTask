import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Arrays.module.css";

const fillArrays = (L, M, Sn) => {
  let m = 0,
    i = 0;
  let mArray = [],
    nArray = [];
  Sn = Sn.split("");
  const arr2Length = Sn.filter(val => val == 2).length;
  M-=arr2Length
  while (m < M ) {
    [mArray[i], nArray[i]] = [Math.ceil(Sn[i] / 2), Math.floor(Sn[i] / 2)];
    Sn[i]==1 && m++;
    i++;
  }
  for (i; i < L; i++) {
    [nArray[i], mArray[i]] = [Math.ceil(Sn[i] / 2), Math.floor(Sn[i] / 2)];
  }
  return [mArray.join(""), nArray.join("")];
};

const Arrays = () => {
  const [arrLength, setArrLength] = useState(20);
  const [summM, setM] = useState(15);
  const [summN, setN] = useState(15);
  const [Sn, setSn] = useState("22221121112121212121");
  const [Arrays, setArrays] = useState([]);

  const { register, handleSubmit, errors } = useForm({
    defaultValues: { arrayLength: 20, M: 15, N: 15, Sn: "22221121112121212121" }
  });

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
      <div className={styles.labels}>
        <div className={styles.label}>L</div>
        <div className={styles.label}>M</div>
        <div className={styles.label}>N</div>
      </div>
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
          min="0"
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
          min="0"
          ref={register({
            required: "summ of elements in 2nd array is required",
            max: { value: arrLength, message: `N must be less than length of array L=${arrLength}` }
          })}
        />
        <div className={styles.Sn}>
          Sn=
          <input
            type="text"
            placeholder="Sn"
            name="Sn"
            onChange={onSnChange}
            ref={register({
              required: true,
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
                equalToSummMN: value =>
                  value.split("").reduce((a, b) => +a + +b, 0) === +summM + +summN ||
                  `Summ must be equal to M+N = ${+summM + +summN}`,
                checkNumberOfTwo: value =>
                  value.split("").filter(num => num == 2).length <= Math.min(summM, summN) ||
                  `Quantity of "2" must be less than ${Math.min(summM, summN)}`
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
        <div className={styles.newArrays}>{Arrays[0]}</div>
        <div className={styles.newArrays}>{Arrays[1]}</div>
        <input type="submit" value="Generate" />
      </form>
    </div>
  );
};

export default Arrays;
