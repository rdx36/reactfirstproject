const sampleData = {
    Sameer: {
      name: "Sameer",
      connectionList: ["Ayushi", "Kamalnath"],
    },
    Ayushi: {
      name: "Ayushi",
      connectionList: ["Sameer", "Bhaskar"],
    },
    Bhaskar: {
      name: "Bhaskar",
      connectionList: ["Ayushi", "Shantikumar"],
    },
    Kamalnath: {
      name: "Kamalnath",
      connectionList: ["Sameer", "Shantikumar"],
    },
    Shantikumar: {
      name: "Shantikumar",
      connectionList: ["Kamalnath", "Bhaskar"],
    },
  };
  
  export default sampleData;
  