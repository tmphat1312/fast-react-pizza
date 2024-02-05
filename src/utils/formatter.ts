export const currencyFormatter = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'EUR',
});

export const dateFormatter = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
});
