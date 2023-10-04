import * as MuiStyled from "./styles/MemoryForm.styled";

export default function MemoryFormActions({ onFormHardReset, loading }) {
  return (
    <>
      <MuiStyled.ClearButton
        variant="contained"
        size="small"
        onClick={onFormHardReset}
        fullWidth
        disabled={loading}
      >
        Clear
      </MuiStyled.ClearButton>

      <MuiStyled.SubmitButton
        variant="contained"
        size="large"
        type="submit"
        fullWidth
        disabled={loading}
      >
        Submit
      </MuiStyled.SubmitButton>
    </>
  );
}
