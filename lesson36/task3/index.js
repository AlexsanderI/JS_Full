const getUsersBlogs = async (arr) => {
  const usersLink = `https://api.github.com/users`;
  try {
    const usersArray = (userId) =>
      fetch(`${usersLink}/${userId}`)
        .then((response) => response.json())
        .catch((error) => {
          throw new Error(error.text);
        });

    const resultArray = await Promise.all(arr.map((el) => usersArray(el)));
    const blogArray = resultArray.map((el) => el.blog);
    return blogArray;
  } catch (error) {
    throw new Error(error.text);
  }
};
// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
