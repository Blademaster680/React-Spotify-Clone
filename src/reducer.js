export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE WHEN DONE DEVELOPING...
  // token:
  //   "BQBBee-1CHf_1o2ogxgG2WmTVcNKkDDJeWIMwl6ez_pbNeo-9Htz9HnGoce6nioFyvBtPSNvE-DFgKavmGAApjs_Tn2njywRSi7h3hu986PGql6pcxY3MTAIMw9VtuYZbFZuJsV4GW-Cb46n__GeIyO0c-TOVd9lnI6Gs45nKzXRDQwz",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
