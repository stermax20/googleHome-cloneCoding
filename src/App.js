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
                <div className="search-container">
                    <svg
                        className="search-icon"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        onClick={handleSearch}
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                    <input
                        className="search-bar"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
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
