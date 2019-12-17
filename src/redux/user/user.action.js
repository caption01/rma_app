import { SET_USER_DATA } from './user.type';

export const loadUserData = (user) => ({
    type: SET_USER_DATA,
    payload: user
})