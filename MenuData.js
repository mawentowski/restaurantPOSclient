// menuData.js
const menuData = {
  appetizers: [
    {
      id: "appetizer-1",
      name: "Appetizer X",
      description: "Description for Appetizer 1",
      image: require("./assets/icon.png"),
      price: "$5.50",
    },
    {
      id: "appetizer-2",
      name: "Appetizer 2",
      description: "Description for Appetizer 2",
      image: require("./assets/icon.png"),
      price: "$6.50",
    },
    // Add more appetizers here
  ],
  mainCourses: [
    {
      id: "main-course-1",
      name: "Main Course 1",
      description: "Description for Main Course 1",
      image: require("./assets/icon.png"),
      price: "$5.50",
    },
    // Add more main courses here
  ],
  desserts: [
    {
      id: "dessert-1",
      name: "Dessert 1",
      description: "Description for Dessert 1",
      image: require("./assets/icon.png"),
      price: "$5.50",
    },
    // Add more desserts here
  ],
};

export default menuData;
