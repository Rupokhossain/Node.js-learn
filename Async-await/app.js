/* const fetchUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("End of searching for users from the database");
            resolve({ 
                id: id,
                name: "Siam",
                memberType: "Premium"
            });
        }, 2000);
    });
};

async function getUserDetails() {
    console.log("Process Start...");

    const user = await fetchUser(101);

    console.log(`User Name: ${user.name}`);

    console.log("Process end!");
}
getUserDetails(); */

// error handling
/* const login = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === "12345") {
                resolve("Login success!");
            } else {
                reject("Wrong Password! Try again");
            }
        }, 2000);
    });
};


async function handleLogin() {
    try {
        console.log("Login Check");
        const message = await login("siam@test.com", "12345");
        console.log(message);
    } catch (error) {
        console.log("error is here:", error);
    } finally {
        console.log("Login end");
    }
}

handleLogin();  */



// chain of action
/* const enroll = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("1. enroll done!"), 2000);
  });
};

const payment = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("2.payment done"), 2000);
    });
};

const sendEmail = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("3.Email done"), 1000);
    });
};

// async-await diye serial e kaj kora
async function startAdmission() {
    console.log("Enroll start...");

    const step1 = await enroll();
    console.log(step1);

    const step2 = await payment();
    console.log(step2);


    const step3 = await sendEmail();
    console.log(step3);

    console.log("Congratulation! You are our student now!");
}

startAdmission(); */



// problem-solving
const checkEvenOdd = (number) => {
    return new Promise((resolve, reject) => {
        console.log("Check the process...");

        setTimeout(() => {
            if(number % 2 === 0) {
                resolve(`Success: ${number} it is an even number.`);
            } else {
                reject(`Faild: ${number} it is an odd number.`);
            }
        }, 2000);
    });
};

async function handleNumber(num) {
    try {
        const result = await checkEvenOdd(num);
        console.log(result);
    } catch (error) {
        console.log("Error caught: ", error);
    } finally {
        console.log("All done!");
    }
}

handleNumber(10);
handleNumber(7);