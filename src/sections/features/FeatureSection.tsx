import './feature-section.css';

export default function FeatureSection(){
    return (
        <section className="feature-section">
            <h2>Key Features</h2>
            <div className="features-container">
                <div className="feature-card">
                    <h3>Feature 1</h3>
                    <p>Description of feature 1.</p>
                </div>
                <div className="feature-card">
                    <h3>Feature 2</h3>
                    <p>Description of feature 2.</p>
                </div>
                <div className="feature-card">
                    <h3>Feature 3</h3>
                    <p>Description of feature 3.</p>
                </div>
            </div>
        </section>
    );
}