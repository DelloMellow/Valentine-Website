import { useState } from 'react';
import '../App.css'
import PixelEnvelope from '../assets/envelope.png'
import PixelCat from '../assets/cat_heart.gif'

function Home() {
    const [started, setStarted] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [noActive, setNoActive] = useState(false);
    const [noPosition, setNoPosition] = useState({ top: 0, left: 0 });

    const moveNoButton = () => {
        const buttonWidth = 120;
        const buttonHeight = 50;
        const padding = 20;
        const maxX = window.innerWidth - buttonWidth - padding;
        const maxY = window.innerHeight - buttonHeight - padding;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        setNoPosition({
            top: randomY,
            left: randomX
        });

        setNoActive(true);
    };

    return (
        <>
            {accepted && <div className="confetti"></div>}

            <div className="retro-window">
                {/* Window Header */}
                <div className="window-header">
                    <div className="window-title">
                        <span className="pixel-heart">♥</span>
                        <span>LOVE</span>
                        <span className="pixel-heart">♥</span>
                    </div>
                    <div className="window-controls">
                        <span className="control-btn">−</span>
                        <span className="control-btn">□</span>
                        <span className="control-btn">×</span>
                    </div>
                </div>

                {/* Decorative Hearts Bar */}
                <div className="hearts-bar">
                    <div className="pixel-heart-icon">♥</div>
                    <div className="pixel-dot">•</div>
                    <div className="pixel-heart-icon">♥</div>
                    <div className="pixel-dot">•</div>
                    <div className="pixel-heart-icon">♥</div>
                </div>

                {/* Window Content */}
                <div className="window-content">
                    {!started ? (
                        <>
                            <div className="pixel-cat">
                                <img src={PixelEnvelope} alt="image" className="cat-image" />
                            </div>

                            <h1 className="main-title">
                                HAPPY VALENTINE
                            </h1>

                            <p className="subtitle">Press to Start</p>

                            <button className="pixel-btn start-btn" onClick={() => setStarted(true)}>
                                ▶ Start
                            </button>
                        </>
                    ) : accepted ? (
                        <>
                            <div className="pixel-cat excited">
                                <img src={PixelCat} alt="excited cat" className="cat-image" />
                                <small className="pixel-heart floating">♥</small>
                            </div>

                            <h1 className="success-title">YAYYYYY 💕</h1>
                            <p className="success-message">
                                You just made my heart explode 💘
                            </p>
                        </>
                    ) : (
                        <>
                            <div className="pixel-cat">
                                <div className="cat-ears">
                                    <span>△</span>
                                    <span>△</span>
                                </div>
                                <div className="cat-face">◕ω◕</div>
                                <small className="pixel-heart floating">♥</small>
                            </div>

                            <h1 className="question-title">
                                Will You Be My Valentine?
                            </h1>

                            <div className="button-container">
                                <button
                                    className="pixel-btn yes-btn"
                                    onClick={() => setAccepted(true)}
                                >
                                    Yes
                                </button>

                                <button
                                    className="pixel-btn no-btn"
                                    onMouseEnter={moveNoButton}
                                    onClick={moveNoButton}
                                    style={
                                        noActive
                                            ? {
                                                position: "fixed",
                                                top: noPosition.top,
                                                left: noPosition.left,
                                            }
                                            : {}
                                    }
                                >
                                    No
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Window Footer */}
                <div className="window-footer">
                    Valentine Date: Meow Restaurant at 7pm. Dress Fancy!
                </div>
            </div>
        </>
    );
}

export default Home;