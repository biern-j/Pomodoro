export const initialState = { cards: [] };


export const addCard = (state, card) => {
  const newCards = state.cards.concat([card]);

  return { cards: newCards };
};


export const removeCard = (state, i) => {
  const p1  = state.cards.slice(0, i);
  const p2 = state.cards.slice(i+1);
  const removed = p1.concat(p2);

  return { cards: removed };
};

