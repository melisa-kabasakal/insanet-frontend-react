import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
    return (
        <nav>
            <div className="navBottom">
                <div className="container">
                    <nav className="mainNav">
                        <Link to="/products" className="menuItem">Ürünler</Link>
                        <Link to="/suppliers" className="menuItem">Onaylı Tedarikçiler</Link>
                        <Link to="/contractors" className="menuItem">Onaylı Müteahhitler</Link>
                        <Link to="/logistics" className="menuItem">Onaylı Lojistik Firmaları</Link>
                        <Link to="/auctions" className="menuItem">İhaleler</Link>
                        <Link to="/experiences" className="menuItem">Platform Deneyimleri</Link>
                        <Link to="/media" className="menuItem">Medyada İnşanet</Link>
                    </nav>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;
