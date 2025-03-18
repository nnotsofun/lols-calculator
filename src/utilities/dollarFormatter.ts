export const dollarFormatter = (amount: number) =>   new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(
    amount,
  );