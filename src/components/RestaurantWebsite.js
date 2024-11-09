import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Copy, Navigation } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const RestaurantWebsite = () => {
  const { id } = useParams();
  console.log('Restaurant ID:', id);

  // Example restaurant data
  const restaurantData = {
    1: {
      name: 'SRISHTI RESTAURANT',
      cuisines: 'South Indian, North Indian',
      price: '₹100 for one',
      rating: 4.4,
      time: '31 min',
      discount: '50% OFF',
      imageUrl: 'https://media.istockphoto.com/id/867909720/photo/food-for-indian-festival-diwali.jpg?s=612x612&w=0&k=20&c=NQdkQQo5dNSRgLJsaqPHJ1JiU_v2ob7D529i4A4mPjY=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    2: {
      name: 'Essential',
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    3: {
      name: 'Amenityyy',
      cuisines: 'Indian restaurant',
      price: '₹40 for one',
      rating: 4.6,
      time: '24 min',
      imageUrl: 'https://media.istockphoto.com/id/1271604943/photo/assorted-indian-home-food-different-dishes-and-snacks-wooden-rustic-table-homemade-pilaf.jpg?s=612x612&w=0&k=20&c=f2aFRB_7ooZ01F3NA1grsLBwbXhnJuXj5VoalTKSYxo=',
      promoted: false,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    4: {
      name: 'Varieties Restaurant',
      cuisines: 'South Indian, North Indian, Cafe',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1005630488/photo/thali.jpg?s=612x612&w=0&k=20&c=ufwOsc-f-c7ibq5vzsQ1y8VTC3o61RtgN3YhVa_U5ms=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    5: {
      name: "Soha's cafe",
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1408964184/photo/chicken-tikka-masala-kadai-chicken-coconut-sabdji-indias-samosa-veg-curry-bainkar-bharta.jpg?s=612x612&w=0&k=20&c=hzCybSQollGMvUfvVTONbD7R96G63gCXgC5XPwdOkBo=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    6: {
      name: 'GS Hotel',
      cuisines: 'Family restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1490687071/photo/top-view-for-oriental-food.jpg?s=612x612&w=0&k=20&c=9yVib9aJvvzCPtKSpNTKavb6BUPFqe2pOr4LKRT4gPY=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    7: {
      name: 'Food Zone',
      cuisines: 'Fast food restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=2048x2048&w=is&k=20&c=1B9sUUPUsoVBAMCsk461nPRix-YIo74i8LgSWSkhCOE=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
    8: {
      name: 'SOE DHABA, Tezpur University',
      cuisines: 'Restaurant',
      price: '₹150 for one',
      rating: 4.3,
      time: '36 min',
      discount: '40% OFF',
      imageUrl: 'https://media.istockphoto.com/id/1442604378/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=WUCuJ2L2VKlrsIsXVnYX1HoG5rZM8K6ISeiE1liMBq4=',
      promoted: true,
      iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.511878273082!2d92.8335486754745!3d26.696089476776873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744eb254a078c07%3A0x8ff094b13b51d188!2sSRISHTI%20RESTAURANT!5e0!3m2!1sen!2sin!4v1731004026537!5m2!1sen!2sin",
      maplink: 'https://maps.app.goo.gl/gLiTcH5XEii5tBUS9',
      contact1: 9600774916,
      contact2: 9365419001,
      imageUrl1: "/srishti1.jpg" ,
      imageUrl2: "/srishti2.jpg",
      imageUrl3 : "/srishti2.jpg",
    },
  };

  // Fetch the restaurant data based on ID
  const restaurant = restaurantData[id];

  if (!restaurant) {
    return <p>Restaurant not found.</p>;
  }

  const { name, cuisines, iframe, maplink, contact1, contact2, imageUrl1, imageUrl2, imageUrl3 } = restaurant;

  return (
    <div className="min-h-screen bg-white">
      

      {/* Restaurant Info */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col w-6/12 gap-4">
            <h1 className="text-4xl font-bold font-serif mt-14">{name}</h1>
            <p className="text-gray-600 my-2">{cuisines}</p>
            <p className="text-gray-600">Tezpur University, Tezpur</p>
          </div>

          {/* Map */}
          <div className="mt-8 w-6/12">
            <div className="bg-gray-200 h-48 rounded-lg mb-4">
              <iframe src={iframe} className="w-full h-full"></iframe>
            </div>
            <a href={maplink} className="flex items-center text-red-500">
              <Navigation className="w-4 h-4 mr-1" />
              Direction
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-gray-600 text-lg">Contact Details:</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border rounded-lg p-4">
                <p className="text-gray-700 text-lg">{contact1}</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-gray-700 text-lg">{contact2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Images */}
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 mx-4 mb-4">
          <img src={imageUrl1} alt="Restaurant" className="w-full h-auto object-cover rounded" />
          <img src={imageUrl2} alt="Interior" className="w-full h-auto object-cover rounded" />
          <img src={imageUrl3} alt="Food" className="w-full h-auto object-cover rounded" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RestaurantWebsite;



























// import React, { useState } from 'react';
// import {   Star,  Copy, Navigation } from 'lucide-react';
// import Header from './Header';
// import Footer from './Footer';

// const RestaurantWebsite = ({ name, cuisines, iframe, maplink, contact1, contact2, imageUrl1, imageUrl2,imageUrl3 }) => {
 

  
//   return (
//     <div className="min-h-screen bg-white">
    
   
//       {/* Header */}
//       {/* <header className="border-b">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
//           <div className="flex items-center space-x-4 flex-1">
//             <img src="/api/placeholder/100/40" alt="Zomato" className="h-6" />
//             <div className="hidden md:flex items-center flex-1 max-w-2xl">
//               <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 flex-1">
//                 <MapPin className="w-5 h-5 text-gray-400" />
//                 <input 
//                   type="text" 
//                   placeholder="JP Nagar Phase 5" 
//                   className="bg-transparent outline-none ml-2 flex-1"
//                 />
//                 <Search className="w-5 h-5 text-gray-400" />
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <button className="text-gray-700">Log in</button>
//             <button className="text-gray-700">Sign up</button>
//           </div>
//         </div>
//       </header> */}
//     {/* Restaurant Info */}
//     <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row justify-between" >
//           <div className="flex flex-col w-6/12 gap-4" >
//             <h1 className="text-4xl font-bold font-serif mt-14">{name}</h1>
//             <p className="text-gray-600 my-2">{cuisines}</p>
//             <p className="text-gray-600">Tezpur university, tezpur</p>
           
//           </div>
//                     {/* Map */}
//                     <div className="mt-8 w-6/12">
                    
//                       <div className="bg-gray-200 h-48 rounded-lg mb-4">
                        
//                       <iframe src={iframe} 
//                       className='w-full h-full'
//                       ></iframe>
                       
//                       </div>
//                       <a href={maplink} className="flex items-center text-red-500">
//                           <Navigation className="w-4 h-4 mr-1" />
//                           Direction
//                         </a>
                      
                      
//                     </div>
//         </div>

//         {/* Tabs */}
//         <div className="border-b mt-8">
//           {/* <div className="flex space-x-8">
//             {tabs.map(tab => (
//               <button
//                 key={tab}
//                 className={`pb-4 ${
//                   activeTab === tab 
//                     ? 'text-red-500 border-b-2 border-red-500' 
//                     : 'text-gray-600'
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div> */}
//         </div>

//         {/* Main Content Area */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//           {/* Left Content */}
//           <div className="md:col-span-2">
//             <div className="flex items-center space-x-4 mb-4">
//               <span className="text-gray-600 text-lg">contact details :</span>        
//             </div>

//             {/* Menu Images */}
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               <div className="border rounded-lg p-4">
              
//                 <p className="text-gray-700 text-lg">{contact1}
//                 </p>
                
//               </div>
//               <div className="border rounded-lg p-4">
              
//                 <p className="text-gray-700 text-lg">{contact2}</p>
                
//               </div>
//             </div>

           
     
//           </div>

      
//         </div>
//       </div>


//       {/* Restaurant Hero Section */}
//       <div className="relative">
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-0 mx-4 mb-4 ">
        
//             <img 
//               src={imageUrl1} 
//               alt="Restaurant" 
//               className="w-full h-auto object-cover rounded "
//             />
//              <img 
//                 src={imageUrl2} 
//                 alt="Interior" 
//                 className="w-full  h-auto object-cover rounded"
//               />
//             <img 
//               src={imageUrl2} 
//               alt="Food" 
//               className="w-full h-auto object-cover rounded"
//             />
          
//         </div>
//       </div>
//     {/* <Footer/> */}
  
//     </div>
//   );
// };

// export default RestaurantWebsite;