import React from "react";
import ReactDOM from "react-dom/client";

/*
  Header
    - Logo
    - Nav Items
  Body
    - Search
    - RestaurantContainer
      - RestaurantCard
  Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

const restaurantData = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "778196",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/5e38b1f7-a230-4ad6-b51f-974777137ee1_778196.JPG",
      locality: "Civil Lines",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-17 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5a0b1abb-cb6f-449c-9000-71ffbb31acf4",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/pizza-hut-civil-lines-rest778196",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "789747",
      name: "Burger Farm",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_789747.JPG",
      locality: "Dhandhupura",
      areaName: "Tajganj",
      costForTwo: "₹250 for two",
      cuisines: ["American"],
      avgRating: 4.4,
      parentId: "4660",
      avgRatingString: "4.4",
      totalRatingsString: "555",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-17 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5a0b1abb-cb6f-449c-9000-71ffbb31acf4",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/burger-farm-dhandhupura-tajganj-rest789747",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "774091",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/68772459-93e3-41f8-83f0-c774235d042b_774091.JPG",
      locality: "Khandari",
      areaName: "CHURCH ROAD",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.5,
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "750",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-16 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹290",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "46",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5a0b1abb-cb6f-449c-9000-71ffbb31acf4",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/theobroma-khandari-church-road-rest774091",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "439068",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/37117ee8-74e8-4549-a006-2b492cad3aeb_439068.JPG",
      locality: "Civil Lines",
      areaName: "Civil Lines",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.4,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.4",
      totalRatingsString: "128",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-16 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "41",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5a0b1abb-cb6f-449c-9000-71ffbb31acf4",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/baskin-robbins-ice-cream-desserts-civil-lines-rest439068",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1054298",
      name: "Dabba & Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/19/7edcebbb-7545-43d4-be25-e63c9ddf27df_1054298.jpg",
      locality: "Nehru Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["Home food", "Indian", "Thalis"],
      avgRating: 4.3,
      parentId: "612560",
      avgRatingString: "4.3",
      totalRatingsString: "64",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-16 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5a0b1abb-cb6f-449c-9000-71ffbb31acf4",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/dabba-and-co-nehru-nagar-civil-lines-rest1054298",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "982203",
      name: "Blue Tokai Coffee Roasters",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/28/5eaff309-fd7f-47c1-af58-23cbd5837892_982203ssss.jpg",
      locality: "Amar Lok Colony",
      areaName: "Tajganj",
      costForTwo: "₹600 for two",
      cuisines: ["Beverages", "Cafe", "Coffee"],
      avgRating: 4.7,
      parentId: "2682",
      avgRatingString: "4.7",
      totalRatingsString: "15",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-16 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5a0b1abb-cb6f-449c-9000-71ffbb31acf4",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/blue-tokai-coffee-roasters-amar-lok-colony-tajganj-rest982203",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "79628",
      name: "Bhawna Sweets",
      cloudinaryImageId: "ij5lrqmlvgwr6wz8iawj",
      locality: "Madiya Katra",
      areaName: "Lohamandi",
      costForTwo: "₹250 for two",
      cuisines: ["Sweets", "Bakery", "Beverages", "snack"],
      avgRating: 4.1,
      veg: true,
      parentId: "13641",
      avgRatingString: "4.1",
      totalRatingsString: "25K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-16 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹39",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5a0b1abb-cb6f-449c-9000-71ffbb31acf4",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/bhawna-sweets-madiya-katra-lohamandi-rest79628",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "102953",
      name: "GMB - Gopika Sweets & Restaurant",
      cloudinaryImageId: "l6iqlfn5uwesenzcm0xk",
      locality: "Jeoni Mandi",
      areaName: "Jeoni Mandi",
      costForTwo: "₹300 for two",
      cuisines: ["Sweets", "Snacks"],
      avgRating: 4.5,
      veg: true,
      parentId: "87777",
      avgRatingString: "4.5",
      totalRatingsString: "5.3K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-16 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "70% OFF",
        subHeader: "UPTO ₹130",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.7",
          ratingCount: "59",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5a0b1abb-cb6f-449c-9000-71ffbb31acf4",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/gmb-gopika-sweets-and-restaurant-jeoni-mandi-rest102953",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    restaurant?.info;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="card-details">{name}</h3>
      <h4 className="card-details">{avgRating}/5 ratings</h4>
      <h4 className="card-details">{cuisines.join(", ")}</h4>
      <h4 className="card-details">{areaName}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {restaurantData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
