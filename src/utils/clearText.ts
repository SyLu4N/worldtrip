export function clearText(text: string) {
  const textClear = text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s/g, '');

  const newText = textClear[0].toLowerCase() + textClear.substring(1);

  return newText;
}
