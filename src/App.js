import './App.css';
import MainPage from "./pages/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import CreateContactPage from "./pages/CreateContactPage";
import EditContactPage from "./pages/EditContactPage";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="add-contact" element={<CreateContactPage/>}/>
                <Route path="/edit-contact/:uid" element={<EditContactPage />} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
