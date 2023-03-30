export function getScreenWidth(): number {
  const width =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  return width;
}
