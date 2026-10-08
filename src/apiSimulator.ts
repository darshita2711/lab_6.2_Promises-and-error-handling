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
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};

interface Review {
    rating: number;
}

export const fetchProductReviews = (productId: number): Promise<Review[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                   { rating: 5 },
                    { rating: 4 },
                    { rating: 5 }
                ]);
            } else {
                reject(
                    `Failed to fetch reviews for product ID ${productId}`
                );
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
                reject("Failed to fetch sales report");
            }
        }, 1000);
    });
};

fetchProductCatalog();