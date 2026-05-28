import './landing.css';
import TitleSection from '../../sections/title/TitleSection';
import FeatureSection from '../../sections/features/FeatureSection';

export default function Landing(){
    return (
        <main className="landing-page-container">
            <TitleSection />
            <FeatureSection />
        </main>
    );
}