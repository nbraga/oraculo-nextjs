export const formatPhone = (phone: string) => {
  const removeSpecials = phone.replace(/\D+/g, "");
  const addPrefix = removeSpecials.replace(/^(\d{2})(\d)/g, "($1) $2");
  const newPhone = addPrefix.replace(/(\d)(\d{4})$/, "$1-$2");

  return newPhone;
};
