function fetchUserMock(callback) {
  setTimeout(() => {
    const user = {
      name: "Brenan",
      age: 21
    };

    callback(user);
  }, 1000);
}

fetchUserMock((user) => {
  console.log("User fetched:", user);
});


function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = {
        name: "Brenan",
        age: 21
      };

      resolve(user);
    }, 1000);
  });
}

async function getUser() {
  try {
    const user = await fetchUser();
    console.log("User fetched:", user);
  } catch (error) {
    console.log("Failed to fetch user:", error.message);
  }
}

getUser();