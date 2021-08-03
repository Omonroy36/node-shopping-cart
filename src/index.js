import app from "./app";


const main = async () => {
    try {
        await app.listen(5000);
    } catch (error) {
        console.log(error);
    }
    console.log('Listening port 5000');
}

main();