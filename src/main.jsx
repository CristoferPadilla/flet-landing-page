import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsPage from './screens/UsPage';
import ContactPage from './screens/ContactPage';
import ServicePage from './screens/ServicePage';
import './index.css'
import HomePage from './screens/HomePage.jsx';
import BlogPage from './screens/BlogPage.jsx';
import PricesPage from './screens/PricesPage.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/flet-landing-page/'>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/us" element={ <UsPage /> }></Route>
          <Route path="/contact" element={ <ContactPage /> }></Route>
          <Route path="/prices" element={ <PricesPage /> }></Route>
          <Route path="/blog" element={ <BlogPage /> }></Route>
          <Route path="/service" element={ <ServicePage /> }></Route>
          
    </Routes>
  </BrowserRouter>
);
