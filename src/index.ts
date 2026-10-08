import {fetchProductCatalog,fetchProductReviews,fetchSalesReport} from "./apiSimulator.js";

fetchProductCatalog()
    .then((prodCatalog) => {
        console.log("Product Catalog:");
        console.log(prodCatalog);

        return fetchProductReviews(1);
    })
    .then((prodReviews) => {
        console.log("Product Reviews:");
        console.log(prodReviews);

        return fetchSalesReport();
    })
    .then((prodReport) => {
        console.log("Sales Report:");
        console.log(prodReport);
    })
    .catch((error) => {
        console.error("Something went wrong:", error);
    })
    .finally(() => {
        console.log("All API calls have been attempted!");
    });