/**
 *
 * @param duration Duration in seconds.
 * @returns string
 * @example
 * ```ts
 * formatDuration(9720); // 2:42:25
 * formatDuration(3500); // 58:20
 * ```
 */
export function formatDuration(duration: number): string {
  const seconds = duration % 60;
  const minute = Math.trunc((duration / 60) % 60);
  const hours = Math.trunc(duration / 60 / 60);
  const format = hours > 0 ? `${hours}:${minute}:${seconds}` : `${minute}:${seconds}`;
  return format;
}
