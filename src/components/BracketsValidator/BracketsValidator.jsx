import React, { Component } from "react";
import BracketForm from "./BracketForm";
import styles from "./BracketForm.module.css";

const validateBrackets = (stringToValidate, ...args) => {
  let bracketPairs = {};
  let bracesStack = [];
  let error;

  args = args.flat();

  //create obj for matching closing braces to opening ones
  args.forEach(elem => {
    bracketPairs[elem[1]] = elem[0];
  });

  // create array of opening braces
  const openingBrackets = Array.from(Object.values(bracketPairs));

  //create RegExp from args !!!"\\" added to screen symbols "()[]{}", should
  //iteratively add alements from args checking if symbol or remove "\\"( bad for "[]")
  const regexp = new RegExp(`[\\${args.flat(Infinity).join("\\")}]`, "g");

  let bracketMatch;

  while ((bracketMatch = regexp.exec(stringToValidate))) {
    //   debugger;
    // adding opening brace to stack
    if (openingBrackets.includes(bracketMatch[0])) {
      bracesStack = [...bracesStack, { [bracketMatch[0]]: bracketMatch.index }];
    }
    //delete last opening bracket in stack if it matches current closing bracket
    else if (
      bracesStack.length &&
      bracketPairs[bracketMatch[0]] === Object.keys(bracesStack[bracesStack.length - 1])[0]
    ) {
      bracesStack.splice(-1, 1);
    }
    //error if last opening bracket in stack doesn't match current closing bracket
    else {
      error = `${bracketMatch.index}`;
      break;
    }
  }

  let message = error
    ? `error: unmatching brace ${bracketMatch[0]} at position ${bracketMatch.index}`
    : !!bracesStack.length
    ? `unmatching brace ${Object.keys(bracesStack[bracesStack.length - 1])[0]} at position ${
        Object.values(bracesStack[bracesStack.length - 1])[0]
      }`
    : "correct bracket expression!!";
  error = error
    ? bracketMatch.index
    : !!bracesStack.length
    ? Object.values(bracesStack[bracesStack.length - 1])[0]
    : null;
  return [message, error];
};

export default class BracketsValidator extends Component {
  constructor() {
    super();
    this.state = {
      phrase: "(1+2*[3-4]/{5+6})",
      validators: [["(", ")"]]
    };
  }

  setPhrase = newPhrase => {
    this.setState({ phrase: newPhrase });
  };
  setValidators = newValidators => {
    this.setState({ validators: newValidators });
  };
  render() {
    let { phrase, validators } = this.state;
    const [resultStr, index = null] = validateBrackets(phrase, validators);
    const className = index === 0 || !!index ? "errorMessage" : "";
    return (
      <div>
        <BracketForm phrase={phrase} setPhrase={this.setPhrase} setValidators={this.setValidators} />
        {
          <div className={styles.result}>
            {phrase.slice(0, index)}
            <span className={styles[className]}>{phrase.charAt(index)}</span>
            {phrase.slice(+index + 1)}
          </div>
        }
        <div className={styles.result + " " + styles[className]}>{resultStr}</div>
      </div>
    );
  }
}
