export const calculate = (a: string, b: string, op: string) => {
  const n1 = parseFloat(a);
  const n2 = parseFloat(b);

  if (isNaN(n1) || isNaN(n2)) {
    return 'Ingresa números válidos';
  }

  if (op === '+') return String(n1 + n2);
  if (op === '-') return String(n1 - n2);
  if (op === '*') return String(n1 * n2);
  if (op === '/') return n2 === 0 ? 'No se divide entre 0' : String(n1 / n2);

  return 'Operación no válida';
};