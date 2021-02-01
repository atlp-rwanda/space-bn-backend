import models from '../database/models';
const { User } = models

const  findUser = async (email) =>{
    try {
        return await User.findOne( { where:{ email } });
    } catch (error) {
        throw error;
    }
}
const updateUser = async (email, update) =>{
    try {
        return await User.update(update, { 
            where: { email }, 
            returning: true 
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {findUser, updateUser};