export const SEARCH = "SEARCH";

export const inputSearch = (payload) => {
  return {
    type: SEARCH,
    payload,
  };
};
