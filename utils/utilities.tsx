const formatInput = (field: HTMLInputElement): void => {
  field.value = field.value.replace(/[^0-9.]/g, "");

  if (field.value.includes(".")) {
    let parts = field.value.split(".");
    field.value =
      parts[0].substring(0, 5) +
      "." +
      (parts[1] ? parts[1].substring(0, 2) : "");
  } else {
    field.value = field.value.substring(0, 5);
  }
};
