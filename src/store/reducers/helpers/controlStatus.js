export const initialStatus = {
  loading: false,
  error: false,
  message: "",
};

export function controlStatus(type, message) {
  switch (type) {
    case "pending":
      return {
        loading: true,
        error: false,
        message: "",
      };
    case "success":
      return initialStatus;
    case "fail":
      return {
        loading: false,
        error: true,
        message: message || "",
      };
    default:
      return initialStatus;
  }
}
