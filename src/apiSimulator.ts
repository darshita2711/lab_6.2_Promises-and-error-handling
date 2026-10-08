import { NetworkError, DataError } from "./error.js";

interface Product {
    id: number;
    name: string;
    price: number;
}

export const fetchProductCatalog = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject (new NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};

interface Review {
    id:number;
    rating: number;
}

export const fetchProductReviews = (productId: number): Promise<Review[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                const productReview: Review[] = [
                    { id: 1, rating: 5 },
                    { id: 2, rating: 4.5 },
                    { id: 3, rating: 3 }
                ];

                for (let i = 0; i < productReview.length; i++) {
                    if (productId === productReview[i]?.id) {
                        const review = productReview[i];

                        if (review) {
                            resolve([review]);
                            return;
                        }
                    }
                }

                reject(
                    new DataError("Product ID was not found")
                );
            } else {
                reject( new NetworkError(
                    `Failed to fetch reviews for product ID ${productId}`
                ));
            }
        }, 1500);
    });
};

interface SalesReport{
    totalSales:number;
    unitsSold :number;
    averagePrice:number;
}

export const fetchSalesReport = (): Promise<SalesReport> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({
                    totalSales: 15000,
                    unitsSold: 50,
                    averagePrice: 300
                });
            } else {
                reject ( new NetworkError("Failed to fetch sales report"));
            }
        }, 1000);
    });
};

fetchProductCatalog();