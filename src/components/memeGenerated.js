import React, { useState } from 'react';
import styles from './styles.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';

const MemeGenerated = () => {

    const [copied, setCopied] = useState(false);

    const clipboard = useClipboard();
    const history = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');

    const copyLink = () => {
        clipboard.copy(url);
        setCopied(true);
    };

    return (
        <div className={styles.container}>
            <button onClick={() => history('/')} className="home">
                Make More Memes
            </button>
            {url && <img alt='meme' src={url} />}
            <button onClick={copyLink} className="copy">
                {copied ? 'Link copied!' : 'Copy link'}
            </button>
        </div>
    );
};
export default MemeGenerated;