export async function getRecoveryQuote() {
  const res = await fetch('https://quotes.rest/qod?category=inspire');
  const data = await res.json();
  return data.contents.quotes[0].quote;
}