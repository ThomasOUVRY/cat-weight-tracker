export const getCatAge = async (birthDate: Date) => {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - birthDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const years = Math.floor(diffDays / 365);
  const remainingDays = diffDays % 365;
  const months = Math.floor(remainingDays / 30);
  const days = remainingDays % 30;
  const weeks = Math.floor(diffDays / 7);

  return {
    years,
    months,
    days,
    weeks,
  };
};
