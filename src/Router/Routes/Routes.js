const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {

            }
        ]
    }
]);

export default router;