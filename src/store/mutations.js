import { removerAccent } from "../models/removeAccent";


export const API_FAILURE = (state, error) => {
  if (error.message.includes("400")) {
    state.errormessage = "Erreur de connexion à l'api";
  } else if (error.message.includes("404")) {
    state.errormessage = "Données non trouvées";
  } else {
    state.errormessage = "la requête a échoué";
  }
};

export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};

export const FILTERED_PRODUCTS = (state, name) => {
  if (!name || name === "{}") {
      state.searchProduct = null
    state.filteredProducts = null;
  } else {
      state.searchProduct = name
    name = removerAccent(name.trim().toLowerCase());
    state.filteredProducts = state.products.filter((product) => {
      return (
        product.slug.toLowerCase().includes(name) ||
        product.name.toLowerCase().includes(name) ||
        product.type.toLowerCase().includes(name)
      );
    });
  }
};