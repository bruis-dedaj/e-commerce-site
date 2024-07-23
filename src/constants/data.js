export const categories = [
  {
    name: "all",
    __typename: "Category",
  },
  {
    name: "clothes",
    __typename: "Category",
  },
  {
    name: "tech",
    __typename: "Category",
  },
];

export const products = [
  {
    id: "huarache-x-stussy-le",
    name: "Nike Air Huarache Le",
    inStock: true,
    gallery: [
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087",
    ],
    description: "\u003Cp\u003EGreat sneakers for everyday use!\u003C/p\u003E",
    category: "clothes",
    attributes: [
      {
        id: "Size",
        items: [
          {
            displayValue: "40",
            value: "40",
            id: "40",
            __typename: "Attribute",
          },
          {
            displayValue: "41",
            value: "41",
            id: "41",
            __typename: "Attribute",
          },
          {
            displayValue: "42",
            value: "42",
            id: "42",
            __typename: "Attribute",
          },
          {
            displayValue: "43",
            value: "43",
            id: "43",
            __typename: "Attribute",
          },
        ],
        name: "Size",
        type: "text",
        __typename: "AttributeSet",
      },
    ],
    prices: [
      {
        amount: 144.69,
        currency: {
          label: "USD",
          symbol: "$",
          __typename: "Currency",
        },
        __typename: "Price",
      },
    ],
    brand: "Nike x Stussy",
    __typename: "Product",
  },
  {
    id: "jacket-canada-goosee",
    name: "Jacket",
    inStock: true,
    gallery: [
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
      "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
      "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png",
    ],
    description: "\u003Cp\u003EAwesome winter jacket\u003C/p\u003E",
    category: "clothes",
    attributes: [
      {
        id: "Size",
        items: [
          {
            displayValue: "Small",
            value: "S",
            id: "Small",
            __typename: "Attribute",
          },
          {
            displayValue: "Medium",
            value: "M",
            id: "Medium",
            __typename: "Attribute",
          },
          {
            displayValue: "Large",
            value: "L",
            id: "Large",
            __typename: "Attribute",
          },
          {
            displayValue: "Extra Large",
            value: "XL",
            id: "Extra Large",
            __typename: "Attribute",
          },
        ],
        name: "Size",
        type: "text",
        __typename: "AttributeSet",
      },
    ],
    prices: [
      {
        amount: 518.47,
        currency: {
          label: "USD",
          symbol: "$",
          __typename: "Currency",
        },
        __typename: "Price",
      },
    ],
    brand: "Canada Goose",
    __typename: "Product",
  },
  {
    id: "ps-5",
    name: "PlayStation 5",
    inStock: true,
    gallery: [
      "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg",
    ],
    description:
      "\u003Cp\u003EA good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha\u003C/p\u003E",
    category: "tech",
    attributes: [
      {
        id: "Color",
        items: [
          {
            displayValue: "Green",
            value: "#44FF03",
            id: "Green",
            __typename: "Attribute",
          },
          {
            displayValue: "Cyan",
            value: "#03FFF7",
            id: "Cyan",
            __typename: "Attribute",
          },
          {
            displayValue: "Blue",
            value: "#030BFF",
            id: "Blue",
            __typename: "Attribute",
          },
          {
            displayValue: "Black",
            value: "#000000",
            id: "Black",
            __typename: "Attribute",
          },
          {
            displayValue: "White",
            value: "#FFFFFF",
            id: "White",
            __typename: "Attribute",
          },
        ],
        name: "Color",
        type: "swatch",
        __typename: "AttributeSet",
      },
      {
        id: "Capacity",
        items: [
          {
            displayValue: "512G",
            value: "512G",
            id: "512G",
            __typename: "Attribute",
          },
          {
            displayValue: "1T",
            value: "1T",
            id: "1T",
            __typename: "Attribute",
          },
        ],
        name: "Capacity",
        type: "text",
        __typename: "AttributeSet",
      },
    ],
    prices: [
      {
        amount: 844.02,
        currency: {
          label: "USD",
          symbol: "$",
          __typename: "Currency",
        },
        __typename: "Price",
      },
    ],
    brand: "Sony",
    __typename: "Product",
  },
  {
    id: "xbox-series-s",
    name: "Xbox Series S 512GB",
    inStock: false,
    gallery: [
      "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg",
    ],
    description:
      "\n\u003Cdiv\u003E\n    \u003Cul\u003E\n        \u003Cli\u003E\u003Cspan\u003EHardware-beschleunigtes Raytracing macht dein Spiel noch realistischer\u003C/span\u003E\u003C/li\u003E\n        \u003Cli\u003E\u003Cspan\u003ESpiele Games mit bis zu 120 Bilder pro Sekunde\u003C/span\u003E\u003C/li\u003E\n        \u003Cli\u003E\u003Cspan\u003EMinimiere Ladezeiten mit einer speziell entwickelten 512GB NVMe SSD und wechsle mit Quick Resume nahtlos zwischen mehreren Spielen.\u003C/span\u003E\u003C/li\u003E\n        \u003Cli\u003E\u003Cspan\u003EXbox Smart Delivery stellt sicher, dass du die beste Version deines Spiels spielst, egal, auf welcher Konsole du spielst\u003C/span\u003E\u003C/li\u003E\n        \u003Cli\u003E\u003Cspan\u003ESpiele deine Xbox One-Spiele auf deiner Xbox Series S weiter. Deine Fortschritte, Erfolge und Freundesliste werden automatisch auf das neue System übertragen.\u003C/span\u003E\u003C/li\u003E\n        \u003Cli\u003E\u003Cspan\u003EErwecke deine Spiele und Filme mit innovativem 3D Raumklang zum Leben\u003C/span\u003E\u003C/li\u003E\n        \u003Cli\u003E\u003Cspan\u003EDer brandneue Xbox Wireless Controller zeichnet sich durch höchste Präzision, eine neue Share-Taste und verbesserte Ergonomie aus\u003C/span\u003E\u003C/li\u003E\n        \u003Cli\u003E\u003Cspan\u003EUltra-niedrige Latenz verbessert die Reaktionszeit von Controller zum Fernseher\u003C/span\u003E\u003C/li\u003E\n        \u003Cli\u003E\u003Cspan\u003EVerwende dein Xbox One-Gaming-Zubehör -einschließlich Controller, Headsets und mehr\u003C/span\u003E\u003C/li\u003E\n        \u003Cli\u003E\u003Cspan\u003EErweitere deinen Speicher mit der Seagate 1 TB-Erweiterungskarte für Xbox Series X (separat erhältlich) und streame 4K-Videos von Disney+, Netflix, Amazon, Microsoft Movies &amp; TV und mehr\u003C/span\u003E\u003C/li\u003E\n    \u003C/ul\u003E\n\u003C/div\u003E",
    category: "tech",
    attributes: [
      {
        id: "Color",
        items: [
          {
            displayValue: "Green",
            value: "#44FF03",
            id: "Green",
            __typename: "Attribute",
          },
          {
            displayValue: "Cyan",
            value: "#03FFF7",
            id: "Cyan",
            __typename: "Attribute",
          },
          {
            displayValue: "Blue",
            value: "#030BFF",
            id: "Blue",
            __typename: "Attribute",
          },
          {
            displayValue: "Black",
            value: "#000000",
            id: "Black",
            __typename: "Attribute",
          },
          {
            displayValue: "White",
            value: "#FFFFFF",
            id: "White",
            __typename: "Attribute",
          },
        ],
        name: "Color",
        type: "swatch",
        __typename: "AttributeSet",
      },
      {
        id: "Capacity",
        items: [
          {
            displayValue: "512G",
            value: "512G",
            id: "512G",
            __typename: "Attribute",
          },
          {
            displayValue: "1T",
            value: "1T",
            id: "1T",
            __typename: "Attribute",
          },
        ],
        name: "Capacity",
        type: "text",
        __typename: "AttributeSet",
      },
    ],
    prices: [
      {
        amount: 333.99,
        currency: {
          label: "USD",
          symbol: "$",
          __typename: "Currency",
        },
        __typename: "Price",
      },
    ],
    brand: "Microsoft",
    __typename: "Product",
  },
  {
    id: "apple-imac-2021",
    name: "iMac 2021",
    inStock: true,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000",
    ],
    description: "The new iMac!",
    category: "tech",
    attributes: [
      {
        id: "Capacity",
        items: [
          {
            displayValue: "256GB",
            value: "256GB",
            id: "256GB",
            __typename: "Attribute",
          },
          {
            displayValue: "512GB",
            value: "512GB",
            id: "512GB",
            __typename: "Attribute",
          },
        ],
        name: "Capacity",
        type: "text",
        __typename: "AttributeSet",
      },
      {
        id: "With USB 3 ports",
        items: [
          {
            displayValue: "Yes",
            value: "Yes",
            id: "Yes",
            __typename: "Attribute",
          },
          {
            displayValue: "No",
            value: "No",
            id: "No",
            __typename: "Attribute",
          },
        ],
        name: "With USB 3 ports",
        type: "text",
        __typename: "AttributeSet",
      },
      {
        id: "Touch ID in keyboard",
        items: [
          {
            displayValue: "Yes",
            value: "Yes",
            id: "Yes",
            __typename: "Attribute",
          },
          {
            displayValue: "No",
            value: "No",
            id: "No",
            __typename: "Attribute",
          },
        ],
        name: "Touch ID in keyboard",
        type: "text",
        __typename: "AttributeSet",
      },
    ],
    prices: [
      {
        amount: 1688.03,
        currency: {
          label: "USD",
          symbol: "$",
          __typename: "Currency",
        },
        __typename: "Price",
      },
    ],
    brand: "Apple",
    __typename: "Product",
  },
  {
    id: "apple-iphone-12-pro",
    name: "iPhone 12 Pro",
    inStock: true,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000",
    ],
    description: "This is iPhone 12. Nothing else to say.",
    category: "tech",
    attributes: [
      {
        id: "Capacity",
        items: [
          {
            displayValue: "512G",
            value: "512G",
            id: "512G",
            __typename: "Attribute",
          },
          {
            displayValue: "1T",
            value: "1T",
            id: "1T",
            __typename: "Attribute",
          },
        ],
        name: "Capacity",
        type: "text",
        __typename: "AttributeSet",
      },
      {
        id: "Color",
        items: [
          {
            displayValue: "Green",
            value: "#44FF03",
            id: "Green",
            __typename: "Attribute",
          },
          {
            displayValue: "Cyan",
            value: "#03FFF7",
            id: "Cyan",
            __typename: "Attribute",
          },
          {
            displayValue: "Blue",
            value: "#030BFF",
            id: "Blue",
            __typename: "Attribute",
          },
          {
            displayValue: "Black",
            value: "#000000",
            id: "Black",
            __typename: "Attribute",
          },
          {
            displayValue: "White",
            value: "#FFFFFF",
            id: "White",
            __typename: "Attribute",
          },
        ],
        name: "Color",
        type: "swatch",
        __typename: "AttributeSet",
      },
    ],
    prices: [
      {
        amount: 1000.76,
        currency: {
          label: "USD",
          symbol: "$",
          __typename: "Currency",
        },
        __typename: "Price",
      },
    ],
    brand: "Apple",
    __typename: "Product",
  },
  {
    id: "apple-airpods-pro",
    name: "AirPods Pro",
    inStock: false,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
    ],
    description:
      "\n\u003Ch3\u003EMagic like you’ve never heard\u003C/h3\u003E\n\u003Cp\u003EAirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings, and a customizable fit for all-day comfort. Just like AirPods, AirPods Pro connect magically to your iPhone or Apple Watch. And they’re ready to use right out of the case.\n\n\u003Ch3\u003EActive Noise Cancellation\u003C/h3\u003E\n\u003Cp\u003EIncredibly light noise-cancelling headphones, AirPods Pro block out your environment so you can focus on what you’re listening to. AirPods Pro use two microphones, an outward-facing microphone and an inward-facing microphone, to create superior noise cancellation. By continuously adapting to the geometry of your ear and the fit of the ear tips, Active Noise Cancellation silences the world to keep you fully tuned in to your music, podcasts, and calls.\n\n\u003Ch3\u003ETransparency mode\u003C/h3\u003E\n\u003Cp\u003ESwitch to Transparency mode and AirPods Pro let the outside sound in, allowing you to hear and connect to your surroundings. Outward- and inward-facing microphones enable AirPods Pro to undo the sound-isolating effect of the silicone tips so things sound and feel natural, like when you’re talking to people around you.\u003C/p\u003E\n\n\u003Ch3\u003EAll-new design\u003C/h3\u003E\n\u003Cp\u003EAirPods Pro offer a more customizable fit with three sizes of flexible silicone tips to choose from. With an internal taper, they conform to the shape of your ear, securing your AirPods Pro in place and creating an exceptional seal for superior noise cancellation.\u003C/p\u003E\n\n\u003Ch3\u003EAmazing audio quality\u003C/h3\u003E\n\u003Cp\u003EA custom-built high-excursion, low-distortion driver delivers powerful bass. A superefficient high dynamic range amplifier produces pure, incredibly clear sound while also extending battery life. And Adaptive EQ automatically tunes music to suit the shape of your ear for a rich, consistent listening experience.\u003C/p\u003E\n\n\u003Ch3\u003EEven more magical\u003C/h3\u003E\n\u003Cp\u003EThe Apple-designed H1 chip delivers incredibly low audio latency. A force sensor on the stem makes it easy to control music and calls and switch between Active Noise Cancellation and Transparency mode. Announce Messages with Siri gives you the option to have Siri read your messages through your AirPods. And with Audio Sharing, you and a friend can share the same audio stream on two sets of AirPods — so you can play a game, watch a movie, or listen to a song together.\u003C/p\u003E\n",
    category: "tech",
    attributes: [],
    prices: [
      {
        amount: 300.23,
        currency: {
          label: "USD",
          symbol: "$",
          __typename: "Currency",
        },
        __typename: "Price",
      },
    ],
    brand: "Apple",
    __typename: "Product",
  },
  {
    id: "apple-airtag",
    name: "AirTag",
    inStock: true,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",
    ],
    description:
      "\n\u003Ch1\u003ELose your knack for losing things.\u003C/h1\u003E\n\u003Cp\u003EAirTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack. And just like that, they’re on your radar in the Find My app. AirTag has your back.\u003C/p\u003E\n",
    category: "tech",
    attributes: [],
    prices: [
      {
        amount: 120.57,
        currency: {
          label: "USD",
          symbol: "$",
          __typename: "Currency",
        },
        __typename: "Price",
      },
    ],
    brand: "Apple",
    __typename: "Product",
  },
];
