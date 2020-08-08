import Products from "../api/Products";

export const getProducts = ({ commit }) => {
  Products.all()
    .then((response) => {
      commit("SET_PRODUCTS", response.data);
    })
    .catch((error) => commit("API_FAILURE", error));
};

export const filteredProducts = ({ commit }, name) => {
    commit('FILTERED_PRODUCTS', name)
};