const express = require('express')
const app = express()
const port = 8000

const Registration_Login = [
    {
        id: 1,
        firstname: "Sagor",
        lastname: "Khan",
        email: "sagor@gmail.com",
        password: "sagor123",
        phone: "01710000001",
        role: "customer",
        address: "Mirpur, Dhaka"
    },
    {
        id: 2,
        firstname: "Shawon",
        lastname: "Khan",
        email: "shawon@gmail.com",
        password: "shawon123",
        phone: "01710000002",
        role: "customer",
        address: "Uttara, Dhaka"
    },
    {
        id: 3,
        firstname: "Bijoy",
        lastname: "Khan",
        email: "bijoy@gmail.com",
        password: "bijoy123",
        phone: "01710000003",
        role: "customer",
        address: "Dhanmondi, Dhaka"
    },
    {
        id: 4,
        firstname: "Rahim",
        lastname: "Ahmed",
        email: "rahim@gmail.com",
        password: "rahim123",
        phone: "01710000004",
        role: "customer",
        address: "Banani, Dhaka"
    },
    {
        id: 5,
        firstname: "Karim",
        lastname: "Hasan",
        email: "karim@gmail.com",
        password: "karim123",
        phone: "01710000005",
        role: "customer",
        address: "Mohammadpur, Dhaka"
    },
    {
        id: 6,
        firstname: "Nusrat",
        lastname: "Jahan",
        email: "nusrat@gmail.com",
        password: "nusrat123",
        phone: "01710000006",
        role: "customer",
        address: "Bashundhara, Dhaka"
    },
    {
        id: 7,
        firstname: "Sadia",
        lastname: "Islam",
        email: "sadia@gmail.com",
        password: "sadia123",
        phone: "01710000007",
        role: "customer",
        address: "Gulshan, Dhaka"
    },
    {
        id: 8,
        firstname: "Fahim",
        lastname: "Rahman",
        email: "fahim@gmail.com",
        password: "fahim123",
        phone: "01710000008",
        role: "customer",
        address: "Badda, Dhaka"
    },
    {
        id: 9,
        firstname: "Tanvir",
        lastname: "Hossain",
        email: "tanvir@gmail.com",
        password: "tanvir123",
        phone: "01710000009",
        role: "customer",
        address: "Khilgaon, Dhaka"
    },
    {
        id: 10,
        firstname: "Mim",
        lastname: "Akter",
        email: "mim@gmail.com",
        password: "mim123",
        phone: "01710000010",
        role: "customer",
        address: "Wari, Dhaka"
    },
    {
        id: 11,
        firstname: "Arif",
        lastname: "Chowdhury",
        email: "arif@gmail.com",
        password: "arif123",
        phone: "01710000011",
        role: "customer",
        address: "Farmgate, Dhaka"
    },
    {
        id: 12,
        firstname: "Mehedi",
        lastname: "Hasan",
        email: "mehedi@gmail.com",
        password: "mehedi123",
        phone: "01710000012",
        role: "customer",
        address: "Pallabi, Dhaka"
    },
    {
        id: 13,
        firstname: "Tamanna",
        lastname: "Sultana",
        email: "tamanna@gmail.com",
        password: "tamanna123",
        phone: "01710000013",
        role: "customer",
        address: "Rampura, Dhaka"
    },
    {
        id: 14,
        firstname: "Rakib",
        lastname: "Hossain",
        email: "rakib@gmail.com",
        password: "rakib123",
        phone: "01710000014",
        role: "customer",
        address: "Jatrabari, Dhaka"
    },
    {
        id: 15,
        firstname: "Farhan",
        lastname: "Ahmed",
        email: "farhan@gmail.com",
        password: "farhan123",
        phone: "01710000015",
        role: "customer",
        address: "Banasree, Dhaka"
    },
    {
        id: 16,
        firstname: "Ayesha",
        lastname: "Rahman",
        email: "ayesha@gmail.com",
        password: "ayesha123",
        phone: "01710000016",
        role: "customer",
        address: "Lalmatia, Dhaka"
    },
    {
        id: 17,
        firstname: "Imran",
        lastname: "Khan",
        email: "imran@gmail.com",
        password: "imran123",
        phone: "01710000017",
        role: "customer",
        address: "Tejgaon, Dhaka"
    },
    {
        id: 18,
        firstname: "Samiha",
        lastname: "Islam",
        email: "samiha@gmail.com",
        password: "samiha123",
        phone: "01710000018",
        role: "customer",
        address: "Motijheel, Dhaka"
    },
    {
        id: 19,
        firstname: "Nabil",
        lastname: "Ahmed",
        email: "nabil@gmail.com",
        password: "nabil123",
        phone: "01710000019",
        role: "customer",
        address: "Kakrail, Dhaka"
    },
    {
        id: 20,
        firstname: "Rafi",
        lastname: "Hasan",
        email: "rafi@gmail.com",
        password: "rafi123",
        phone: "01710000020",
        role: "customer",
        address: "Uttara, Dhaka"
    }
];



const products = [
    {
        id: 1,
        name: "Samsung Galaxy A55 5G",
        brand: "Samsung",
        category: "Mobiles",
        price: 49999,
        discount: 10,
        finalPrice: 44999,
        rating: 4.8,
        totalReviews: 1250,
        stock: 25,
        seller: "Gadget World",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "samsung-a55.jpg",
        description: "Samsung smartphone with AMOLED display and 5G.",
        specifications: {
            ram: "8GB",
            storage: "128GB",
            camera: "50MP",
            battery: "5000mAh"
        }
    },
    {
        id: 2,
        name: "iPhone 15",
        brand: "Apple",
        category: "Mobiles",
        price: 95000,
        discount: 8,
        finalPrice: 87400,
        rating: 4.9,
        totalReviews: 2100,
        stock: 12,
        seller: "Apple Store BD",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "iphone-15.jpg",
        description: "Apple iPhone with advanced camera system.",
        specifications: {
            storage: "128GB",
            camera: "48MP",
            display: "6.1 inch",
            chip: "A16 Bionic"
        }
    },
    {
        id: 3,
        name: "Redmi Note 13 Pro",
        brand: "Xiaomi",
        category: "Mobiles",
        price: 32999,
        discount: 12,
        finalPrice: 29039,
        rating: 4.6,
        totalReviews: 890,
        stock: 30,
        seller: "Xiaomi Official",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "redmi-note-13.jpg",
        description: "Mid-range smartphone with high resolution camera.",
        specifications: {
            ram: "8GB",
            storage: "256GB",
            camera: "200MP",
            battery: "5100mAh"
        }
    },
    {
        id: 4,
        name: "MacBook Air M2",
        brand: "Apple",
        category: "Laptops",
        price: 145000,
        discount: 5,
        finalPrice: 137750,
        rating: 4.9,
        totalReviews: 560,
        stock: 8,
        seller: "Tech Zone",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "macbook-air-m2.jpg",
        description: "Apple laptop for productivity and creative work.",
        specifications: {
            ram: "8GB",
            storage: "256GB SSD",
            processor: "Apple M2",
            display: "13.6 inch"
        }
    },
    {
        id: 5,
        name: "HP Pavilion 15",
        brand: "HP",
        category: "Laptops",
        price: 85000,
        discount: 7,
        finalPrice: 79050,
        rating: 4.5,
        totalReviews: 340,
        stock: 10,
        seller: "Laptop Gallery",
        freeDelivery: false,
        deliveryCharge: 100,
        image: "hp-pavilion-15.jpg",
        description: "Laptop for students and office productivity.",
        specifications: {
            ram: "16GB",
            storage: "512GB SSD",
            processor: "Intel Core i5",
            display: "15.6 inch"
        }
    },
    {
        id: 6,
        name: "Sony WH-1000XM5",
        brand: "Sony",
        category: "Audio",
        price: 42000,
        discount: 15,
        finalPrice: 35700,
        rating: 4.8,
        totalReviews: 720,
        stock: 14,
        seller: "Sound House",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "sony-headphones.jpg",
        description: "Premium wireless noise cancelling headphones.",
        specifications: {
            type: "Over-ear",
            connectivity: "Bluetooth",
            battery: "30 hours"
        }
    },
    {
        id: 7,
        name: "AirPods Pro 2",
        brand: "Apple",
        category: "Audio",
        price: 28000,
        discount: 10,
        finalPrice: 25200,
        rating: 4.7,
        totalReviews: 980,
        stock: 18,
        seller: "Apple Store BD",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "airpods-pro-2.jpg",
        description: "Wireless earbuds with active noise cancellation.",
        specifications: {
            type: "Wireless earbuds",
            connectivity: "Bluetooth",
            feature: "Active Noise Cancellation"
        }
    },
    {
        id: 8,
        name: "Logitech MX Master 3S",
        brand: "Logitech",
        category: "Accessories",
        price: 12500,
        discount: 10,
        finalPrice: 11250,
        rating: 4.8,
        totalReviews: 430,
        stock: 20,
        seller: "Computer Source",
        freeDelivery: false,
        deliveryCharge: 60,
        image: "logitech-mouse.jpg",
        description: "Wireless mouse for professional productivity.",
        specifications: {
            connectivity: "Bluetooth",
            dpi: "8000",
            battery: "Rechargeable"
        }
    },
    {
        id: 9,
        name: "Nike Air Max 270",
        brand: "Nike",
        category: "Fashion",
        price: 14500,
        discount: 20,
        finalPrice: 11600,
        rating: 4.6,
        totalReviews: 640,
        stock: 22,
        seller: "Sports Corner",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "nike-air-max.jpg",
        description: "Comfortable sports shoes for everyday use.",
        specifications: {
            material: "Mesh",
            gender: "Men",
            type: "Sneakers"
        }
    },
    {
        id: 10,
        name: "Adidas Ultraboost",
        brand: "Adidas",
        category: "Fashion",
        price: 16000,
        discount: 15,
        finalPrice: 13600,
        rating: 4.7,
        totalReviews: 510,
        stock: 16,
        seller: "Sports Corner",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "adidas-ultraboost.jpg",
        description: "Premium running shoes with comfortable cushioning.",
        specifications: {
            material: "Primeknit",
            gender: "Unisex",
            type: "Running Shoes"
        }
    },
    {
        id: 11,
        name: "Men's Cotton Casual Shirt",
        brand: "Easy",
        category: "Fashion",
        price: 1800,
        discount: 25,
        finalPrice: 1350,
        rating: 4.3,
        totalReviews: 320,
        stock: 50,
        seller: "Fashion House",
        freeDelivery: false,
        deliveryCharge: 70,
        image: "casual-shirt.jpg",
        description: "Comfortable cotton shirt for casual occasions.",
        specifications: {
            material: "Cotton",
            sizes: ["M", "L", "XL"],
            gender: "Men"
        }
    },
    {
        id: 12,
        name: "Women's Leather Handbag",
        brand: "Lino Perros",
        category: "Fashion",
        price: 4500,
        discount: 20,
        finalPrice: 3600,
        rating: 4.5,
        totalReviews: 280,
        stock: 18,
        seller: "Style Gallery",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "leather-handbag.jpg",
        description: "Stylish handbag for everyday use.",
        specifications: {
            material: "Synthetic Leather",
            color: "Black",
            gender: "Women"
        }
    },
    {
        id: 13,
        name: "Samsung Galaxy Watch 6",
        brand: "Samsung",
        category: "Wearables",
        price: 22000,
        discount: 12,
        finalPrice: 19360,
        rating: 4.6,
        totalReviews: 390,
        stock: 15,
        seller: "Gadget World",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "galaxy-watch-6.jpg",
        description: "Smartwatch with health and fitness tracking features.",
        specifications: {
            display: "Super AMOLED",
            connectivity: "Bluetooth",
            battery: "300mAh"
        }
    },
    {
        id: 14,
        name: "JBL Flip 6 Speaker",
        brand: "JBL",
        category: "Audio",
        price: 12500,
        discount: 15,
        finalPrice: 10625,
        rating: 4.7,
        totalReviews: 620,
        stock: 20,
        seller: "Sound House",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "jbl-flip-6.jpg",
        description: "Portable waterproof Bluetooth speaker.",
        specifications: {
            output: "30W",
            battery: "12 hours",
            waterproof: "IP67"
        }
    },
    {
        id: 15,
        name: "Canon EOS R50",
        brand: "Canon",
        category: "Cameras",
        price: 78000,
        discount: 8,
        finalPrice: 71760,
        rating: 4.8,
        totalReviews: 190,
        stock: 6,
        seller: "Camera World",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "canon-eos-r50.jpg",
        description: "Mirrorless camera for photography and video.",
        specifications: {
            sensor: "APS-C",
            resolution: "24.2MP",
            video: "4K"
        }
    },
    {
        id: 16,
        name: "Ergonomic Office Chair",
        brand: "Comfort",
        category: "Home & Living",
        price: 12000,
        discount: 18,
        finalPrice: 9840,
        rating: 4.4,
        totalReviews: 160,
        stock: 12,
        seller: "Furniture Mart",
        freeDelivery: false,
        deliveryCharge: 250,
        image: "office-chair.jpg",
        description: "Ergonomic chair for office and home use.",
        specifications: {
            material: "Mesh",
            adjustable: true,
            color: "Black"
        }
    },
    {
        id: 17,
        name: "Wooden Study Table",
        brand: "HomeStyle",
        category: "Home & Living",
        price: 9500,
        discount: 10,
        finalPrice: 8550,
        rating: 4.3,
        totalReviews: 110,
        stock: 9,
        seller: "Furniture Mart",
        freeDelivery: false,
        deliveryCharge: 200,
        image: "study-table.jpg",
        description: "Modern wooden study table for students.",
        specifications: {
            material: "Engineered Wood",
            color: "Brown",
            drawers: 2
        }
    },
    {
        id: 18,
        name: "Samsung 24 Inch Monitor",
        brand: "Samsung",
        category: "Computers",
        price: 18000,
        discount: 10,
        finalPrice: 16200,
        rating: 4.6,
        totalReviews: 240,
        stock: 11,
        seller: "Tech Zone",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "samsung-monitor.jpg",
        description: "Full HD monitor for work and entertainment.",
        specifications: {
            size: "24 inch",
            resolution: "1920x1080",
            refreshRate: "75Hz"
        }
    },
    {
        id: 19,
        name: "Water Resistant Laptop Backpack",
        brand: "American Tourister",
        category: "Bags",
        price: 3500,
        discount: 20,
        finalPrice: 2800,
        rating: 4.5,
        totalReviews: 370,
        stock: 30,
        seller: "Bag House",
        freeDelivery: false,
        deliveryCharge: 80,
        image: "laptop-backpack.jpg",
        description: "Durable backpack with dedicated laptop compartment.",
        specifications: {
            capacity: "25L",
            material: "Polyester",
            laptopSize: "15.6 inch"
        }
    },
    {
        id: 20,
        name: "Anker Power Bank 20000mAh",
        brand: "Anker",
        category: "Accessories",
        price: 5500,
        discount: 12,
        finalPrice: 4840,
        rating: 4.7,
        totalReviews: 450,
        stock: 24,
        seller: "Gadget World",
        freeDelivery: true,
        deliveryCharge: 0,
        image: "anker-power-bank.jpg",
        description: "Portable fast charging power bank.",
        specifications: {
            capacity: "20000mAh",
            output: "22.5W",
            ports: 3
        }
    }
];



app.get('/',(req,res)=>{
    res.send("hello world")

})

app.get('/Registration_Login',(req,res)=>{
    res.send(Registration_Login)

})


app.get('/products',(req,res)=>{
    res.send(products)

})



app.listen(port,()=>{
    console.log(`Server is Running on port http://localhost:${port}`);
    
})





