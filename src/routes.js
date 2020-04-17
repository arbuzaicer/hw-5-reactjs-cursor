import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Error from "./Pages/Error";

const routes = [
    {
        path: "/sign-up",
        exact: true,
        component: SignUp
    },
    {
        path: "/",
        exact: true,
        component: SignIn
    },
    {
        component: Error
    }
];

export default routes;