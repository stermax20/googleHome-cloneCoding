import React, { useState } from 'react';
import './App.css';
import googleLogo from './img/google_logo.png';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <section className="middle">
            <div className="google-logo">
                <img className="logo-image" src={googleLogo} alt="Google Logo" />
            </div>
            <div className="search-box">
                <input
                    className="search-bar"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="additional-box">
                <a className="additional-search" onClick={handleSearch}>
                    Google 검색
                </a>
                <a href="https://www.google.com/doodles" className="additional-lucky">
                    I'm Feeling Lucky
                </a>
            </div>
        </section>
    );
}

export default App;
