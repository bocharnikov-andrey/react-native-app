export const formatLongAmount = (n: number) => {
  if (n < 1e3) return n;
  if (n >= 1e9) return `${+(n / 1e3).toFixed(1)}B`;
  if (n >= 1e6) return `${+(n / 1e3).toFixed(1)}M`;
  if (n >= 1e3) return `${+(n / 1e3).toFixed(1)}K`;
};

export const formatLongAmountInMillions = (n: number) => {
  if (n >= 1e6) return `${+(n / 1e6).toFixed(1)}T`;
  if (n >= 1e3) return `${+(n / 1e3).toFixed(1)}B`;
  if (n >= 1) return `${+n.toFixed(1)}M`;
  if (n < 1) return `${+(n * 1e3).toFixed(1)}K`;
  return n;
};
