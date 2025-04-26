export function isNumeric(value) {
    const regex = /^\d*$/;
    return regex.test(value);
  }