import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { BigProjectsSection } from './components/BigProjectsSection';
import { SmallProjectsSection } from './components/SmallProjectsSection';
import { ContactSection } from './components/ContactSection';

export default function WebDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-[#0D1117] text-white">
			<HeroSection />
			<SkillsSection />
			<BigProjectsSection />
			<SmallProjectsSection />
			<ContactSection />
		</main>
	);
}
