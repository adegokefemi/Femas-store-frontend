import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

// Login takes dispatch and user(username & password). The dispatch is coming from useDispatch hook.
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure())    
    }
};