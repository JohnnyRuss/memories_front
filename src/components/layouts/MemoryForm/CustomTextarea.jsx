import { nanoid } from "@reduxjs/toolkit";

import TextareaAutosize from "react-textarea-autosize";
import styles from "./styles/customTextarea.module.css";

const fieldId = nanoid();

export default function CustomTextarea({
  label,
  minRows = 4,
  maxRows = 10,
  fieldProps,
  error,
  helperText,
}) {
  return (
    <div
      className={`${styles.customTextareaContainer} ${
        error ? styles.error : ""
      }`}
    >
      <label htmlFor={fieldId} className={styles.customTextareaLabel}>
        {label}
      </label>

      <div className={styles.customTextareaInnerContainer}>
        <div className={styles.textAreaWrapper}>
          <TextareaAutosize
            id={fieldId}
            minRows={minRows}
            maxRows={maxRows}
            {...fieldProps}
            className={styles.customTextarea}
            placeholder="textarea-placeholder"
          />
        </div>

        {error && <p className={styles.helperText}>{helperText}</p>}
      </div>
    </div>
  );
}
