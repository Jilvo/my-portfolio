import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Compétences Techniques</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Maîtrise Backend',
							skills: [
								{ name: 'Python', years: 4 },
								{ name: 'Django', years: 3 },
								{ name: 'FastAPI', years: 2 },
								{ name: 'Flask', years: 1 },
								{ name: 'Java', years: "< 1" },
								{ name: 'Spring', years: "< 1" },
							],
							icon: '⚡',
							color: 'from-green-500 to-green-700',
						},
						{
							category: 'Frontend',
							skills: [
								{ name: 'JavaScript', years: 4 },
								{ name: 'Vue.js', years: "1" },
								{ name: 'SCSS', years: "1" },
								{ name: 'ChartJS', years: "1" },
								{ name: 'Tailwind CSS', years: 2 },
								{ name: 'Bootstrap', years: 2 },
								{ name: 'Materialize', years: "1" },
							],
							icon: '🎨',
							color: 'from-blue-500 to-blue-700',
						},
						{
							category: 'Cloud & DevOps',
							skills: [
								{ name: 'Azure', years: 2 },
								{ name: 'AWS', years: "< 1" },
								{ name: 'Docker', years: 2 },
								{ name: 'Gitlab CI', years: 2 },
								{ name: 'Travis CI', years: "1" },
								{ name: 'Kubernetes', years: "< 1" },
							],
							icon: '🚀',
							color: 'from-purple-500 to-purple-700',
						},
					].map((category) => (
						<div key={category.category} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name} className="flex justify-between items-center">
										<span className="text-base">{skill.name}</span>
										{skill.years} {typeof skill.years === "number" ? "ans" : "an"} d&apos;expérience
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
