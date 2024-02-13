import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"
import AssistantsView from "../views/AssistantsView"
import FilesView from "../views/FilesView"


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="assistants" element={<AssistantsView/>}></Route>
        <Route path="files" element={<FilesView/>}></Route>
    </Route>
));

export default router