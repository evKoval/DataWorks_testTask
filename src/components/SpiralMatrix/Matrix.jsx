import React from "react";
import styles from "./Matrix.module.css";

const Matrix = props => {
  const spiralMatrix = (width, height) => {
    let matrix = [];
    let currentMaxJ = width;
    let currentMaxI = height;
    let currentMinJ = 0;
    let currentMinI = 0;
    const totalCount = width * height;
    let k = 1;

    for (let i = 0; i < height; i++) {
      matrix[i] = [];
    }
    while (k <= width * height) {
      let i = currentMinI;
      let j = currentMinJ;

      //go right
      for (j; j < currentMaxJ; j++) {
        matrix[i][j] = k++;
      }
      i++;
      j--;
      currentMinI++;

      if (k > totalCount) {
        break;
      }

      //go down
      for (i; i < currentMaxI; i++) {
        matrix[i][j] = k++;
      }
      if (k > totalCount) {
        break;
      }
      i--;
      j--;
      currentMaxJ--;

      //go left
      for (j; j > currentMinJ; j--) {
        matrix[i][j] = k++;
      }
      if (k > totalCount) {
        break;
      }
      currentMaxI--;

      //go up
      for (i; i >= currentMinI; i--) {
        matrix[i][j] = k++;
      }

      currentMinJ++;
    }
    return matrix;
  };

  let matrix = spiralMatrix(props.width, props.height);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = (
      <tr key={i}>
        {matrix[i].map(cell => (
          <td
            className={styles.cell}
            key={cell}
            style={{
              backgroundColor: `RGBA(0, 0, 0, ${cell / (props.width * props.height)})`,
              color: `RGBA(0, ${(255 * cell) / (props.width * props.height)}, 0, ${1 -
                (cell * 0.4) / (props.width * props.height)} )`
            }}>
            {cell}
          </td>
        ))}
      </tr>
    );
  }

  return (
    <div>
      <table>
        <caption>{props.width + "x" + props.height}</caption>
        <tbody>{matrix}</tbody>
      </table>
    </div>
  );
};

export default Matrix;
