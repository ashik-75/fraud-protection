import UserId from "../models/userIdModel.js";

export const storeUser = (req, res, next) => {
    try {
        // console.log('storing user into database', req.body);
        // check if it is a user with email and other infos
        const userData = req.body;
        // let userInfo = userData?.userInfo;
        const storeUserData = await storeUser(userData);
        // let dataStored = await storeUser(req.body);
        res.send({
            status: 201,
            message: 'user stored successfully',
            data: storeUserData,
        });
    } catch (error) {
        console.log('error storing user data in db', error);
        next(error);
    }
}

export const getUserUniqueIdFromDb = (req, res, next) => {
    try {
        const { randomString } = req.body;
        const userResponse = await getUserIdFromDb(randomString);
        res.send({
            status: 200,
            data: userResponse,
        });
    } catch (error) {
        console.log('error creating user id', error);
        next(error);
    }
}

async function getUserIdFromDb(randomString) {
    if (mongoose.connection.readyState) {
        console.log('database is connected');
        let userId = await UserId.findOne({ randomString: randomString });
        console.log({ userId });
        if (userId?.randomString) {
            console.log('user exists with this random string', { userId });
            return { userId, message: 'already exists' };
        } else {
            userId = await UserId.create({ randomString: randomString });
            console.log('userId inserted', { userId });
            return {
                userId,
                message: 'inserted'
            }
        }
    }
}