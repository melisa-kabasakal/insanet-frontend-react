import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingAuctions, setLoadingAuctions] = useState(true);

  useEffect(() => {
    const loadHomePage = async () => {
      console.log("Ana sayfa yükleniyor...");


      try {
        const categoriesResponse = await fetch('/api/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
        setLoadingCategories(false);
      } catch (e) {
        console.error("Kategori yükleme hatası:", e);
        setLoadingCategories(false);
      }

     
      try {
        const auctionsResponse = await fetch('/api/auctions/active');
        const auctionsData = await auctionsResponse.json();
        setAuctions(auctionsData);
        setLoadingAuctions(false);
      } catch (e) {
        console.error("İhale yükleme hatası:", e);
        setLoadingAuctions(false);
      }
    };

    loadHomePage();
  }, []);

  return (
    <div>
      <section className="hero" aria-label="Reklam Alanı">
        <div className="ad-space">
          <h2>Reklam Alanı</h2>
        </div>
      </section>

      <section className="categories">
        <h2>Kategoriler</h2>
        <div className="categoryList">
          {loadingCategories ? (
            <div className="loading-indicator">Kategoriler yükleniyor...</div>
          ) : (
            categories.map((category) => (
              <div key={category.id}>{category.name}</div>
            ))
          )}
        </div>
      </section>

      <section className="auctions">
        <h2>Aktif İhaleler</h2>
        <div className="auctionList">
          {loadingAuctions ? (
            <div className="loading-indicator">İhaleler yükleniyor...</div>
          ) : (
            auctions.map((auction) => (
              <div key={auction.id}>{auction.title}</div>
            ))
          )}
        </div>
      </section>

      <section className="hero" aria-label="Alt Reklam Alanı">
        <div className="ad-space">
          <h2>Reklam Alanı</h2>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
