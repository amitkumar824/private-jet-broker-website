/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Collection from './pages/Collection';
import PropertyDetails from './pages/PropertyDetails';
import Concierge from './pages/Concierge';
import Discover from './pages/Discover';
import Saved from './pages/Saved';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Collection />} />
          <Route path="property/:id" element={<PropertyDetails />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="concierge" element={<Concierge />} />
          <Route path="discover" element={<Discover />} />
          <Route path="saved" element={<Saved />} />
          {/* Fallback for other paths */}
          <Route path="*" element={<Collection />} />
        </Route>
      </Routes>
    </Router>
  );
}
