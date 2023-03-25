import { Routes,Route } from "react-router-dom";
import Sprint from "./pages/Sprint";
import User from ".//pages/User";
import SprintPage from "./pages/SprintPage";
import UserPage from "./pages/UserPage.Jsx";


export default function AllRoutes() {
    return(
        <Routes>
            <Route path="/:sprintId/task" element={<SprintPage></SprintPage>}> </Route>
            <Route path="/:userId/task" element={<UserPage></UserPage>}></Route>
            <Route path="/" element={<Sprint></Sprint>}></Route>
            <Route path="/user" element={<User></User>}></Route>
        </Routes>
    )
}