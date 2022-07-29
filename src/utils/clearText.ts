export function clearText(text: string) {
  const newText =
    text[0].toLowerCase() +
    text
      .substring(1)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s/g, '');

  return newText;
}
