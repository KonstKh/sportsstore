export const GetMessages = (elem: any) => {
  const messages: string[] = [];
  if (elem.validity.valueMissing) {
    messages.push('Value required');
  }
  if (elem.validity.typeMismatch) {
    messages.push(`Invalid ${elem.type}`);
  }
  return messages;
}
