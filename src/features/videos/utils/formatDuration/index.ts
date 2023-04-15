/**
 * @access public
 * @param duration Duration in seconds.
 * @returns string
 * @example
 * ```ts
 * formatDuration(9720); // "2:42:25"
 * formatDuration(3500); // "58:20"
 * ```
 */
export function formatDuration(duration: number): string {
  const seconds = duration % 60;
  const minute = Math.trunc((duration / 60) % 60);
  const hours = Math.trunc(duration / 60 / 60);

  const formatHours = hours > 0 ? formatTime(hours) : null;
  const formatMinute = formatTime(minute);
  const formatSeconds = formatTime(seconds);

  const format = formatHours
    ? `${formatHours}:${formatMinute}:${formatSeconds}`
    : `${formatMinute}:${formatSeconds}`;

  return format;
}

/**
 * Add 0 if time less than 10
 * @access privte
 * @example
 * ```ts
 * formatTime(2); // => "02"
 * ```
 */
function formatTime(time: number): string {
  return time < 10 ? `0${time}` : `${time}`;
}
