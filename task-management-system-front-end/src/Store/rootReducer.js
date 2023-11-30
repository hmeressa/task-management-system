import { combineReducers } from "redux";
import { projectReducer } from "./Projects/projectReducer";
import { loginReducer } from "./Auth/authReducer";
import { dashboardReducer } from "./Dashboard/dashboardReducers";
import { taskReducer } from "./Task/taskReducer";
const rootReducer=combineReducers({
    dashboardReducer:dashboardReducer,
    loginReducer:loginReducer,
    projectReducer:projectReducer,
    taskReducer:taskReducer,
});
export default rootReducer;