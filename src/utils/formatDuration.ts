const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});

export const formatDuration = (duration: number) => {
  const hours = Math.floor(duration / 60 / 60);
  const minites = Math.floor((duration - hours * 60 * 60) / 60)
  const seconds = duration % 60;

  if (hours > 0) {
    return `${hours}:${LEADING_ZERO_FORMATTER.format(minites)}:${LEADING_ZERO_FORMATTER.format(seconds)}`
  }

  return `${minites}:${LEADING_ZERO_FORMATTER.format(seconds)}`
};


