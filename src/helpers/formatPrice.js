export function formatPrice(cents) {
  return cents.toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: "0"
  });
}
