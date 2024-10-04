const properties = [
    {
        id: 1,
        name: "Beach House",
        location: "Malibu, CA",
        rooms: 4,
        bathrooms: 2,
        size: "2000 sq ft",
        year_built: 2015,
        features: ["Pool", "Parking", "Ocean view"],
        description: "This stunning beach house features high-quality construction with a modern design, offering panoramic ocean views. Enjoy spacious living areas and top-notch amenities, making it an ideal choice for both relaxation and entertainment.",
        imageUrl: [
            "https://static1.squarespace.com/static/5eb1e180d1aaaa079bb58596/t/607b4c649c6cd72fbe9cc6cf/1618693221725/STUDIOpractice-malibu-beach-house-1-1500x1099.jpg",
            "https://static1.squarespace.com/static/5eb1e180d1aaaa079bb58596/t/607b4c649c6cd72fbe9cc6cf/1618693221725/STUDIOpractice-malibu-beach-house-1-1500x1099.jpg",
            "https://static1.squarespace.com/static/5eb1e180d1aaaa079bb58596/t/607b4c649c6cd72fbe9cc6cf/1618693221725/STUDIOpractice-malibu-beach-house-1-1500x1099.jpg",
            "https://static1.squarespace.com/static/5eb1e180d1aaaa079bb58596/t/607b4c649c6cd72fbe9cc6cf/1618693221725/STUDIOpractice-malibu-beach-house-1-1500x1099.jpg",
            "https://static1.squarespace.com/static/5eb1e180d1aaaa079bb58596/t/607b4c649c6cd72fbe9cc6cf/1618693221725/STUDIOpractice-malibu-beach-house-1-1500x1099.jpg"
        ]
    },    
    {
        id: 2,
        name: "City Apartment",
        location: "New York, NY",
        rooms: 2,
        bathrooms: 1,
        size: "900 sq ft",
        year_built: 2010,
        features: ["Gym", "24h Security", "Parking"],
        description: "This modern apartment features high-quality construction with stylish finishes. Located in the heart of the city, it offers quick access to essential amenities, ensuring both comfort and convenience for urban living.",
        imageUrl: [
            "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/c2cd77b11abf78327d4042c8df677bc8-full.jpg",
            "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/c2cd77b11abf78327d4042c8df677bc8-full.jpg",
            "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/c2cd77b11abf78327d4042c8df677bc8-full.jpg",
            "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/c2cd77b11abf78327d4042c8df677bc8-full.jpg",
            "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/c2cd77b11abf78327d4042c8df677bc8-full.jpg"
        ]
    },
    {
        id: 3,
        name: "Country House",
        location: "Aspen, CO",
        rooms: 5,
        bathrooms: 3,
        size: "3500 sq ft",
        year_built: 2005,
        features: ["Fireplace", "Garden", "Garage"],
        description: "This charming country house in the Aspen mountains offers spacious living with quality craftsmanship. Ideal for serene getaways, it features a cozy fireplace, a beautiful garden, and a garage, combining comfort and practicality for your family.",
        imageUrl: [
            "https://homes-and-villas.marriott.com/assets/images/vacation-rental-villa.png",
            "https://homes-and-villas.marriott.com/assets/images/vacation-rental-villa.png",
            "https://homes-and-villas.marriott.com/assets/images/vacation-rental-villa.png",
            "https://homes-and-villas.marriott.com/assets/images/vacation-rental-villa.png",
            "https://homes-and-villas.marriott.com/assets/images/vacation-rental-villa.png"
        ]
    },
    {
        id: 4,
        name: "Luxury Villa",
        location: "Beverly Hills, CA",
        rooms: 6,
        bathrooms: 5,
        size: "5000 sq ft",
        year_built: 2020,
        features: ["Pool", "Gym", "Garden", "Panoramic view"],
        description: "This luxurious villa in Beverly Hills boasts spacious living areas and high-end finishes. With a private pool, well-maintained garden, and stunning panoramic views, it offers an exclusive lifestyle designed for comfort and elegance.",
        imageUrl: [
            "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fogwm9fcxwf9ofaxghuo/frid4_19202721200",
            "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fogwm9fcxwf9ofaxghuo/frid4_19202721200",
            "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fogwm9fcxwf9ofaxghuo/frid4_19202721200",
            "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fogwm9fcxwf9ofaxghuo/frid4_19202721200",
            "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fogwm9fcxwf9ofaxghuo/frid4_19202721200"
        ]
    },
    {
        id: 5,
        name: "Modern House",
        location: "Miami, FL",
        rooms: 4,
        bathrooms: 2,
        size: "3000 sq ft",
        year_built: 2018,
        features: ["Parking", "Pool", "Near the beach"],
        description: "This modern house in Miami features a contemporary design with open spaces that maximize natural light. Its prime location offers easy access to the city's best beaches, making it ideal for both relaxation and entertainment.",
        imageUrl: [
            "https://static3.mansionglobal.com/production/media/article-images/00b428ec07c89dcf4a283cc35040ff48/large_1.Touzet-Studio-Photo-by-Robin-Hill-c-HI-RES-7.jpg",
            "https://static3.mansionglobal.com/production/media/article-images/00b428ec07c89dcf4a283cc35040ff48/large_1.Touzet-Studio-Photo-by-Robin-Hill-c-HI-RES-7.jpg",
            "https://static3.mansionglobal.com/production/media/article-images/00b428ec07c89dcf4a283cc35040ff48/large_1.Touzet-Studio-Photo-by-Robin-Hill-c-HI-RES-7.jpg",
            "https://static3.mansionglobal.com/production/media/article-images/00b428ec07c89dcf4a283cc35040ff48/large_1.Touzet-Studio-Photo-by-Robin-Hill-c-HI-RES-7.jpg",
            "https://static3.mansionglobal.com/production/media/article-images/00b428ec07c89dcf4a283cc35040ff48/large_1.Touzet-Studio-Photo-by-Robin-Hill-c-HI-RES-7.jpg"
        ]
    },
    {
        id: 6,
        name: "Luxurious Apartment",
        location: "Dubai, UAE",
        rooms: 3,
        bathrooms: 3,
        size: "1500 sq ft",
        year_built: 2021,
        features: ["Pool", "Gym", "City view"],
        description: "This exclusive apartment in the heart of Dubai offers stunning city views paired with luxurious interior finishes, providing a sophisticated living experience.",
        imageUrl: [
            "https://www1.lovethatdesign.com/wp-content/uploads/2021/05/Love-That-Design-Taj-Residences-JLT-Spline-6-1727x1152.jpg",
            "https://www1.lovethatdesign.com/wp-content/uploads/2021/05/Love-That-Design-Taj-Residences-JLT-Spline-6-1727x1152.jpg",
            "https://www1.lovethatdesign.com/wp-content/uploads/2021/05/Love-That-Design-Taj-Residences-JLT-Spline-6-1727x1152.jpg",
            "https://www1.lovethatdesign.com/wp-content/uploads/2021/05/Love-That-Design-Taj-Residences-JLT-Spline-6-1727x1152.jpg",
            "https://www1.lovethatdesign.com/wp-content/uploads/2021/05/Love-That-Design-Taj-Residences-JLT-Spline-6-1727x1152.jpg"
        ]
    },
    {
        id: 7,
        name: "Classic House",
        location: "Boston, MA",
        rooms: 4,
        bathrooms: 2,
        size: "2500 sq ft",
        year_built: 1920,
        features: ["Garden", "Fireplace", "Close to parks"],
        description: "This classic house in historic Boston features traditional architectural details and a charming garden, making it a perfect family home.",
        imageUrl: [
            "https://www.probuilder.com/sites/default/files/pb/Darling-Homes-Woodforest-American-Classic-model-traditional-style.jpg",
            "https://www.probuilder.com/sites/default/files/pb/Darling-Homes-Woodforest-American-Classic-model-traditional-style.jpg",
            "https://www.probuilder.com/sites/default/files/pb/Darling-Homes-Woodforest-American-Classic-model-traditional-style.jpg",
            "https://www.probuilder.com/sites/default/files/pb/Darling-Homes-Woodforest-American-Classic-model-traditional-style.jpg",
            "https://www.probuilder.com/sites/default/files/pb/Darling-Homes-Woodforest-American-Classic-model-traditional-style.jpg"
        ]
    },
    {
        id: 8,
        name: "Downtown Penthouse",
        location: "Chicago, IL",
        rooms: 3,
        bathrooms: 3,
        size: "1800 sq ft",
        year_built: 2017,
        features: ["City view", "Gym", "24h Security"],
        description: "This luxurious penthouse in downtown Chicago boasts stunning city views and easy access to all urban amenities, ideal for city living.",
        imageUrl: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/432166986.jpg?k=d7f83bbcb47baaf425724e1e504024021bff7e258af889fbcb8df4aa8003adfe&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/432166986.jpg?k=d7f83bbcb47baaf425724e1e504024021bff7e258af889fbcb8df4aa8003adfe&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/432166986.jpg?k=d7f83bbcb47baaf425724e1e504024021bff7e258af889fbcb8df4aa8003adfe&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/432166986.jpg?k=d7f83bbcb47baaf425724e1e504024021bff7e258af889fbcb8df4aa8003adfe&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/432166986.jpg?k=d7f83bbcb47baaf425724e1e504024021bff7e258af889fbcb8df4aa8003adfe&o=&hp=1"
        ]
    },
    {
        id: 9,
        name: "Mountain Chalet",
        location: "Lake Tahoe, CA",
        rooms: 5,
        bathrooms: 3,
        size: "4000 sq ft",
        year_built: 2012,
        features: ["Fireplace", "Mountain view", "Garage"],
        description: "This cozy chalet in Lake Tahoe is perfect for skiing and nature lovers, featuring breathtaking mountain views and comfortable living spaces.",
        imageUrl: [
            "https://st.hzcdn.com/simgs/pictures/exteriors/contemporary-mountain-chalet-andrea-schumacher-interiors-img~c87156bf097f5fdb_4-6658-1-6d327fc.jpg",
            "https://st.hzcdn.com/simgs/pictures/exteriors/contemporary-mountain-chalet-andrea-schumacher-interiors-img~c87156bf097f5fdb_4-6658-1-6d327fc.jpg",
            "https://st.hzcdn.com/simgs/pictures/exteriors/contemporary-mountain-chalet-andrea-schumacher-interiors-img~c87156bf097f5fdb_4-6658-1-6d327fc.jpg",
            "https://st.hzcdn.com/simgs/pictures/exteriors/contemporary-mountain-chalet-andrea-schumacher-interiors-img~c87156bf097f5fdb_4-6658-1-6d327fc.jpg",
            "https://st.hzcdn.com/simgs/pictures/exteriors/contemporary-mountain-chalet-andrea-schumacher-interiors-img~c87156bf097f5fdb_4-6658-1-6d327fc.jpg"
        ]
    },
    {
        id: 10,
        name: "Lake House",
        location: "Lake Como, Italy",
        rooms: 4,
        bathrooms: 2,
        size: "3000 sq ft",
        year_built: 2015,
        features: ["Lake view", "Garden", "Lake access"],
        description: "This charming lake house offers stunning views of Lake Como, providing a tranquil retreat with direct water access and a private garden, perfect for relaxation and outdoor activities.",
        imageUrl: [
            "https://idologyasheville.com/img/Things-You-Never-Knew-About-Your-Lakehouse-Home-Floors_IDology-Asheville.jpg",
            "https://idologyasheville.com/img/Things-You-Never-Knew-About-Your-Lakehouse-Home-Floors_IDology-Asheville.jpg",
            "https://idologyasheville.com/img/Things-You-Never-Knew-About-Your-Lakehouse-Home-Floors_IDology-Asheville.jpg",
            "https://idologyasheville.com/img/Things-You-Never-Knew-About-Your-Lakehouse-Home-Floors_IDology-Asheville.jpg",
            "https://idologyasheville.com/img/Things-You-Never-Knew-About-Your-Lakehouse-Home-Floors_IDology-Asheville.jpg"
        ]
    },
    {
        id: 11,
        name: "Compact Studio",
        location: "San Francisco, CA",
        rooms: 1,
        bathrooms: 1,
        size: "500 sq ft",
        year_built: 2008,
        features: ["Equipped kitchen", "Close to public transport"],
        description: "This compact studio in San Francisco is ideal for individuals or couples looking to live in the heart of the city, featuring a fully equipped kitchen and easy access to public transport.",
        imageUrl: [
            "https://shedcoliving.com/app/uploads/2023/02/dsc1791-edit-1920x1282.jpg",
            "https://shedcoliving.com/app/uploads/2023/02/dsc1791-edit-1920x1282.jpg",
            "https://shedcoliving.com/app/uploads/2023/02/dsc1791-edit-1920x1282.jpg",
            "https://shedcoliving.com/app/uploads/2023/02/dsc1791-edit-1920x1282.jpg",
            "https://shedcoliving.com/app/uploads/2023/02/dsc1791-edit-1920x1282.jpg"
        ]
    }    
]


export default properties;
