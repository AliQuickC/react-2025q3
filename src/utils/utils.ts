export function getPagesCount(
  cardsTotal: number,
  maxCardsOnPage: number
): number {
  return Math.ceil(cardsTotal / maxCardsOnPage);
}
