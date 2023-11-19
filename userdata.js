const books = [
  {
    obj: 1,
    bookTitle: "The Road",
    author: "Cormac McCarthy",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/10/the-50-coolest-book-covers-15.jpg",
  },
  {
    obj: 2,
    bookTitle: "Jaws",
    author: "Peter Benchley",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/10/the-50-coolest-book-covers-47.jpg",
  },
  {
    obj: 3,
    bookTitle: "Small World",
    author: "Jonathan Evision",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/newscms/2023_18/1825799/screen_shot_2022-01-04_at_3-38-56_pm.png",
  },
  {
    obj: 4,
    bookTitle: "The Weeding Crasher",
    author: "Mia Sosa",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1642006901-41twCm1DBNL._SL500_.jpg",
  },
  {
    obj: 5,
    bookTitle: "All The Broken Places",
    author: "John Boyne",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://i.ebayimg.com/images/g/0LcAAOSw2ChjVVVF/s-l1200.webp",
  },
  {
    obj: 6,
    bookTitle: "A Broken Land",
    author: "David Donache",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGdkZyODjYOa8995XI_t_XkOY5l9FGYccCfk_gYCcxJ985WOrtye9yZF9Cx0jEssJX2U&usqp=CAU",
  },
  {
    obj: 7,
    bookTitle: "A Long Shadow",
    author: "David Beckler",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1641514717i/60050783._UX160_.jpg",
  },
  {
    obj: 8,
    bookTitle: "Our Missing Hearts",
    author: "Celeste Ng",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://images.seattletimes.com/wp-content/uploads/2022/12/12162022_12345_174602.jpg",
  },
  {
    obj: 9,
    bookTitle: "All of Us Are Broken",
    author: "Fiona Cummins",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://images.squarespace-cdn.com/content/v1/6039530d2c1d0a4a6823e4e0/1689174565105-JX1ZMZ4RQX99TAXPLOWR/9781529040203.jpg",
  },
  {
    obj: 10,
    bookTitle: "Solar Bones",
    author: "Mike McCormack",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://s26162.pcdn.co/wp-content/uploads/2019/11/A1NfEjobJnL-691x1024.jpg",
  },
  {
    obj: 11,
    bookTitle: "Under This Unbroken Sky",
    author: "Shandi Mitchell",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://m.media-amazon.com/images/I/71AFAjapa7L._AC_UF350,350_QL50_.jpg",
  },
  {
    obj: 12,
    bookTitle: "Stephen King",
    author: "Stephen Renner",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660828226-51mDSBk7YL._SL500_.jpg",
  },
  {
    obj: 13,
    bookTitle: "A Curse of Queens",
    author: "Amanda Bouchet",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://t1.bookpage.com/wp-content/uploads/2022/08/29141322/curseofqueens.jpg",
  },
  {
    obj: 14,
    bookTitle: "Under The Never Sky",
    author: "Veronica Rossi",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfYgr0UqHRjEsv_PFPBsNkLh9HcHyQr3RM9wcyaLIOIvHwmgFPAAW7TLHG_gWa1OEfTo&usqp=CAU",
  },
  {
    obj: 15,
    bookTitle: "Walking Through The Needles",
    author: "Heather Levy",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0_nD0_pf7hxSuBofIwFA15D_X3wMbDvhcxrw6B00T7GjZAqd0anvmvWcJXPmfOvmgqc&usqp=CAU",
  },
  {
    obj: 16,
    bookTitle: "Reminder Of Him",
    author: "Collen Hoover",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627673942i/58341222.jpg",
  },
  {
    obj: 17,
    bookTitle: "Love At First Spite",
    author: "Anna E. Collins",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://media1.popsugar-assets.com/files/thumbor/_mifZ0bq1VsbrkmtGGyRZHcxGCw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/12/21/315/n/43611095/812a1f1c8616a24c_714BH7gG9sL/i/Love-at-First-Spite-by-Anna-E-Collins.jpg",
  },
  {
    obj: 18,
    bookTitle: "The Mutual Friend",
    author: "Carter Bays",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://www.realsimple.com/thmb/aOZnSiQ6CQROWu1p6mynRaAtmAA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-mutual-friend-best-books-2022-0622-2000-e3671cf9a9c048a186b3ff3be5866454.jpeg",
  },
  {
    obj: 19,
    bookTitle: "Becoming",
    author: "Michelle Obama",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEdpgNuK9wHv3dcBwRCTk-UhL0YzHM2ZOuerhgsqSrOHq2a4p8_Wn40tsm0b2yptCg8w&usqp=CAU",
  },
  {
    obj: 20,
    bookTitle: "Harry Potter And The Prisoner Of Azkaban",
    author: "J.K Rowling",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg",
  },
  {
    obj: 21,
    bookTitle: "The Lord Of Rings",
    author: "J.R.R Tolkien",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    imageAddress:
      "https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/Lord-of-the-Rings-cover.jpg",
  },
];
export default books;
