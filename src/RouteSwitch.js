import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Aboutpage from './Aboutpage';
import Shoppage from './Shoppage';

function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/home' element={<Homepage />} />
                <Route path='/shop' element={<Shoppage />} />
                <Route path='/about' element={<Aboutpage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;