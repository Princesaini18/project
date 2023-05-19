const products = [
  {
    name: 'Jacket',
    images: ['https://i.imgur.com/gJ5WdCb.jpg', 'https://i.imgur.com/gg43pzm.jpg', 'https://i.imgur.com/gg43pzm.jpg'],
    description:
      'jacket blue color',
    category: ['Men', 'Jacket'],
    sizes: ['S', 'XS'],
    price: 8000,
    countInStock: 10,
    rating: 3,
    numReviews: 0,
  },
  // {
  //   name: 'MEN HANDCRAFTED BROWN FORMAL LACEUP SHOES',
  //   images: ['https://cdn.shopify.com/s/files/1/0575/2982/7496/products/PLG_6920_500x500.jpg?v=1678773756'],
  //   description:
  //     'Oxford glossy brown formal laceup , perfect for every outings . Handcrafted made for longer durability and usage with most basic and traditional shoe shape is used round toe which makes the shoes classic and modified with the trendiest designs . We use EVA Form to keep to fresh and in comfort through the day . You can wear it for any occasion party , office work , traditional festivities etc. With semi chatai design on the vamp which makes it look elegant and stylish by keeping it casual . Properly stitched with water resistant and comfortable material Faux leather . Shoes are quite spacious and therefore very comfortable, especially if you have broad or wide feet. Best designs with the durability of the product is hard to find . Perfect fitting with comfort and style ! Perfectly fit for your feet with comfort and elegant styling ! This stylish looking shoes will make your look perfect with the comfort of your feets . This pair is perfect for your every attire !! These are doubled stitched from the welts and the vamps , has a heel to give the shoe a more elegant touch .',

  //   category: ['Shoes', 'Men'],
  //   sizes: ['S', 'XS'],
  //   price: 2000,
  //   countInStock: 7,
  //   rating: 0,
  //   numReviews: 0,
  // },

  {
    name: ' Puma Spikeless Golf Shoes',
    images: ['https://image.globalgolf.com/dynamic/1060092/aas/right-shoe-side-angle/puma-proadapt-alphacat-disc-spikeless.jpg?s=350'],
    description:
      'The Puma ProAdapt AlphaCat Disc golf shoe is constructed with an EXO Shell upper that is engineered with mesh, providing breathability. The mesh lies underneath a TPU film that provides support. The upper provides water protection and comes with a 1 year waterproof warranty. In addition, the upper is equipped with a micro-adjusting dial system that quickly and easily secures your foot for a locked in, consistent and custom fit. AlphaCat features a molded comfort collar, a ProFit insole, and bootie construction for comfortable wear. The Adapt Foam midsole provides a stable ground feel, cushioning, and high energy return while the PROADAPT outsole provides ground gripping traction. The outsole is made with multi material that combines high-durometer, abrasion resistant TPU with multiple shaped lugs.',

    category: ['Shoes', 'Men'],
    sizes: ['S', 'XS'],
    price: 2,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'watch for men',
    images: ['https://i.imgur.com/7AIhl9Y.jpg', 'https://i.imgur.com/7AIhl9Y.jpg', 'https://i.imgur.com/7AIhl9Y.jpg'],
    description:
      'black coloured smart watch for men ',
    category: ['Watches', 'Men'],
    sizes: ['S', 'XS'],
    price: 800,
    countInStock: 11,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Mikado Women Analog Watch',
    images: ['https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWtWLiSawYxE5ivp8kP_TC42vXL6F7UwsUCj5coY0D-CfXPGv2TP7fuGec9zEh1ASwQaLyXmsKC2jLrgKfYAcHvZET3MscxnRNJHdOjTpK'],
    description:
      'New range of Fashion Watches - Designer, Classy, Charming, Elegant, Appealing, Affordable, Casual as well as party wear. Perfect gift for you and your loved ones. ',
    category: ['Watches', 'Women'],
    sizes: ['S', 'XS'],
    price: 500,
    countInStock: 11,
    rating: 0,
    numReviews: 0,
  },

  {
    name: 'Jacket for men',
    images: ['https://i.imgur.com/26Vuebt.jpg', 'https://i.imgur.com/26Vuebt.jpg', 'https://i.imgur.com/26Vuebt.jpg'],
    description:
      'Winter wear for men, light-green jacket for men, woollen jacket.',
    category: ['Women', 'jacket'],
    sizes: ['S', 'XS'],
    price: 600,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Winter wear for women',
    images: ['https://i.imgur.com/FqUJLMq.jpg', 'https://i.imgur.com/3k5mDDN.jpg', 'https://i.imgur.com/iWpQlso.jpg'],
    description:
      'Blue coloured woollen sweater for women, ',
    category: ['Women'],
    sizes: ['S', 'XS'],
    price: 1000,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Hoodie for Men',
    images: ['https://i.imgur.com/qU9avme.jpg', 'https://i.imgur.com/usDXEF8.jpg', 'https://i.imgur.com/hmLilCy.jpg'],
    description:
      'double-coloured casual hoodie wear for men',
    category: ['Jacket', 'Men'],
    sizes: ['S', 'XS'],
    price: 500,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'cotton T-shirt for men',
    images: ['https://i.imgur.com/2zcsO2C.jpg', 'https://i.imgur.com/PsxB6lI.jpg', 'https://i.imgur.com/OfaTKXp.jpg'],
    description:
      'Red coloured cotton casual t-shirt for men.',
    category: ['Jacket'],
    sizes: ['S', 'XS'],
    price: 300,
    countInStock: 9,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Bag',
    images: ['https://i.imgur.com/QN2BSdJ.jpg', 'https://i.imgur.com/XPb2MDt.jpg', 'https://i.imgur.com/RA2eY23.jpg'],
    description:
      'blue coloured leather bag for women.',
    category: ['Bag', 'Women'],
    sizes: ['S', 'XS', 'L', 'XL'],
    price: 500,
    countInStock: 9,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Bag',
    images: ['https://i.imgur.com/QN2BSdJ.jpg', 'https://i.imgur.com/XPb2MDt.jpg', 'https://i.imgur.com/RA2eY23.jpg'],
    description:
      'blue coloured leather bag for women.',
    category: ['Bag', 'Women'],
    sizes: ['S', 'XS', 'L', 'XL'],
    price: 500,
    countInStock: 9,
    rating: 0,
    numReviews: 0,
  },

]

export default products
