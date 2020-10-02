const hotelData = [
    {
        id: 1,
        name: "Hotel Cox's Today",
        place: "cox's bazar",
        roomDetails: '4 Guest  2 Bedrooms  2 Beds  2 Baths',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        rating: 4.9,
        totalRating: 20,
        price: 34,
        img: 'https://content.r9cdn.net/rimg/himg/12/68/bc/hotelsdotcom-166015118-0fe6438f_w-125868.jpg'
    },
    {
        id: 2,
        name: "Long Beach Hotel",
        place: "cox's bazar",
        roomDetails: '2 Guest  1 Bedrooms  1 Beds  1 Baths',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        rating: 4.4,
        totalRating: 30,
        price: 54,
        img: 'https://content.r9cdn.net/rimg/himg/dc/ac/25/ostrovok-6502335-62e5f1b766aadd3d895afa14dbbebe8154a216ba-648655.jpg'
    },
    {
        id: 3,
        name: "Ocean Palace Hotel",
        place: "cox's bazar",
        roomDetails: '6 Guest  3 Bedrooms  3 Beds  3 Baths',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        rating: 4.1,
        totalRating: 13,
        price: 75,
        img: 'https://content.r9cdn.net/rimg/himg/bd/34/4e/ostrovok-6944352-193256177574e5f02fabe9c96ec87fb09cb21cc5-130357.jpg'
    },
    {
        id: 4,
        name: "Sajek Resort RungRang cottage",
        place: "sajek valley",
        roomDetails: '4 Guest  2 Bedrooms  2 Beds  2 Baths',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        rating: 4.9,
        totalRating: 20,
        price: 34,
        img: 'https://lh5.googleusercontent.com/p/AF1QipMyTcfUKUBR2YZTvLAxojsLAiCZS8LWr3oqLKa1=w592-h404-n-k-no-v1'
    },
    {
        id: 5,
        name: "Monghor Resort Sajek",
        place: "sajek valley",
        roomDetails: '2 Guest  1 Bedrooms  1 Beds  1 Baths',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        rating: 4.4,
        totalRating: 30,
        price: 54,
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/12/27/91/e6/royal-sajek-sajek-valley.jpg'
    },
    {
        id: 6,
        name: "Meghadree Eco Resort",
        place: "sajek valley",
        roomDetails: '6 Guest  3 Bedrooms  3 Beds  3 Baths',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        rating: 4.1,
        totalRating: 13,
        price: 75,
        img: 'https://ttg.com.bd/uploads/tours/hotels/164_51375727_299935717373936_5341332882491179008_njpg.jpg'
    },
    {
        id: 7,
        name: "Bottom Hill Palace Hotel",
        place: "sylhet",
        roomDetails: '4 Guest  2 Bedrooms  2 Beds  2 Baths',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        rating: 4.9,
        totalRating: 20,
        price: 34,
        img: 'https://content.r9cdn.net/rimg/himg/d1/78/0e/hotelsdotcom-536478-3c82581c_w-169595.jpg'
    },
    {
        id: 8,
        name: "Hotel Grand View",
        place: "sylhet",
        roomDetails: '2 Guest  1 Bedrooms  1 Beds  1 Baths',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        rating: 4.4,
        totalRating: 30,
        price: 54,
        img: 'https://content.r9cdn.net/rimg/himg/40/21/8b/hotelsdotcom-1455784064-355e5005_w-615807.jpg'
    },
    {
        id: 9,
        name: "Nazimgarh Garden Resort",
        place: "sylhet",
        roomDetails: '6 Guest  3 Bedrooms  3 Beds  3 Baths',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        rating: 4.1,
        totalRating: 13,
        price: 75,
        img: 'http://offroadbangladesh.com/wp-content/uploads/2015/03/g5-626x365.jpg'
    },
    {
        id: 10,
        name: "Royal Sundarban Wild Resort",
        place: "sundarban",
        roomDetails: '4 Guest  2 Bedrooms  2 Beds  2 Baths',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        rating: 4.9,
        totalRating: 20,
        price: 34,
        img: 'https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_437_h_230_c_fill_g_auto_q_auto:good_f_auto/v1477052418/Domestic%20Hotels/Hotels_Sundarban/Royal%20Sundarban%20Wild%20Resort/Overview.jpg'
    },
    {
        id: 11,
        name: "Sunderban Tiger Camp",
        place: "sundarban",
        roomDetails: '2 Guest  1 Bedrooms  1 Beds  1 Baths',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        rating: 4.4,
        totalRating: 30,
        price: 54,
        img: 'https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_437_h_230_c_fill_g_auto_q_auto:good_f_auto/v1536410529/Hotel/00041487/7_Bua0qy.jpg'
    },
    {
        id: 12,
        name: "Suranjana Holiday Resort",
        place: "sundarban",
        roomDetails: '6 Guest  3 Bedrooms  3 Beds  3 Baths',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        rating: 4.1,
        totalRating: 13,
        price: 75,
        img: 'https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_437_h_230_c_fill_g_auto_q_auto:good_f_auto/v1445329530/Domestic%20Hotels/Hotels_Sundarban/Suranjana%20Holiday%20Resort/FRONT_VIEW.jpg'
    }
]

export default hotelData;