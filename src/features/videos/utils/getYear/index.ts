export function getYear(date: string | Date): number {
  const datObj = typeof date === 'string' ? new Date(date) : date;
  return datObj.getFullYear();
}
