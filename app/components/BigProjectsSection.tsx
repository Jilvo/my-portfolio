import React from 'react';
import Image from 'next/image';

export const BigProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Projets Grands Comptes</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
			title: 'Michelin DORD (Industrie)',
			description: 'Application interne de création, organisation et analyse d’études de simulation pneus.',
			tasks: [
				'Développer et maintenir l’app Django',
				'Mise en place d’un système d’import et export de fichier Excel afin de fluidifier la création de scénario métier.',
				'Mise en place de graphiques métier avec Chart.js',
				'Méthode SCRUM avec les POs/BAs',
				'Tests unitaires et assurance qualité',
				'Industrialisation et déploiement CI/CD',
			],
			techStack: ['Python', 'Django', 'TDD', 'Pandas', 'PostgreSQL', 'MVC', 'Chart.js', 'Docker', 'Gitlab CI', 'Azure' ,'SCSS' ,"Materialize", "Kubernetes"],
			image: '/michelin.jpg',
		},
    {
      title: 'IT Solutions Factory (Télécom)',
      description: 'CRM Django pour le client Salt, opérateur télécom en Suisse.',
      tasks: [
        "Développement et maintenance d'application web au sein d’une équipe de 10 personnes",
        'Rattrapage de la dette technique existante',
        'Mise en place de méthodes Agiles et SCRUM',
        'Écriture de tests unitaires et revues de code',
        'Pair/Mob programming',
      ],
      techStack: ['Python', 'Django', 'DRF', 'TDD', 'Microservices', 'WebSocket', 'GraphQL', 'Gitlab', 'Docker', 'Linux', 'PostgreSQL'],
      image: '/itsf.png',
    },
    {
      title: 'Axxès (Transport)',
      description: 'Système de traduction de cas d’usage en ordres Proxy pour équipements embarqués.',
      tasks: [
        'Conception et développement d’une API avec FastAPI et DDD',
        'Design d’applications pour objets connectés',
        'Rédaction et exécution de tests unitaires',
        'Revue de code et pair programming',
        'Déploiement sur Azure',
        'Organisation en méthode Agile',
      ],
      techStack: ['Python', 'FastAPI', 'Pydantic', 'DDD', 'Azure', 'CosmosDB', 'MongoDB', 'Gitlab', 'Docker'],
      image: '/axxes.png',
    },
    {
      title: 'Keolis (Transport)',
      description: 'Migration et automatisation d’une GED technique.',
      tasks: [
        'Participation aux phases de conception',
        'Développement d’un outil d’extraction et de comparaison de données CSV',
        'Création et traitement de données finales via Pandas',
        'Rédaction de documentation technique et procédures',
      ],
      techStack: ['Python', 'Pandas', 'Excel', 'PowerShell', 'Windows'],
      image: '/keolis.jpg',
    },
    {
      title: 'Codeactive (Finance)',
      description: 'Outils automatisés et API pour le secteur financier.',
      tasks: [
        'Conception et maintenance de bases de données > 1M dossiers',
        'Déploiement d’outils de surveillance débiteurs sur AWS',
        'Création d’API REST pour enrichissement de données',
        'Refonte front B2B en Vue.js 3',
        'Déploiement sous Linux et CI/CD',
      ],
      techStack: ['Python', 'Django', 'Flask', 'Vue.js 3', 'PostgreSQL', 'AWS', 'Bash', 'Linux'],
      image: '/code.jpg',
    },
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-6 space-y-4">
									<h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									<div className="mt-4">
										<h4 className="text-base sm:text-lg font-semibold text-white mb-2">Tâches réalisées</h4>
										<ul className="list-disc list-inside text-gray-300 space-y-1">
											{project.tasks.map((task) => (
												<li key={task}>{task}</li>
											))}
										</ul>
									</div>

									<div className="mt-4">
										<h4 className="text-base sm:text-lg font-semibold text-white mb-2">Stack Technique</h4>
										<div className="flex flex-wrap gap-2">
											{project.techStack.map((tech) => (
												<span key={tech} className="px-3 py-1 bg-[#1A1F2B] rounded-full text-sm font-medium text-gray-300 border border-[#2D333B]">
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>

								<div className="relative h-48 lg:h-auto">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 50vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent"></div>
								</div>
							</div>
						</div>
						))}
				</div>
			</div>
		</section>
	);
};
