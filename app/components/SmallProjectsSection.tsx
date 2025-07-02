import React from 'react';
import Image from 'next/image';
export const SmallProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Mentorat && Projets Petits Comptes</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
					{
					title: 'Mentor (Formation)',
					description: 'Suivis individuels et personnalisé des élèves suivant les parcours diplômant d\'OpenClassrooms.',
					tasks: [
						'Accompagnement des élèves dans la réalisation de leurs projets',
						'Révision des projets et correction des livrables',
						'Conseils sur les bonnes pratiques de développement',
						'Préparation aux entretiens d\'embauche',
					],
					techStack: ['Python', 'Django', 'TDD', 'Javascript', 'Docker','DRF','API REST', 'Azure', 'Linux'],
					image: '/openclassrooms.jpg',
					},
					{
					title: 'MooneyBuyBot (Automate de Trading Cryptomonnaies sur Telegram)',
					description: 'Automate sur l\'application Telegram permettant de suivre le cours en direct de tous les achats d\'une cryptomonnaie afin de se position au bon moment afin un classement organique et non organique pour les différentes blockchains.',
					tasks: [
						'Création d\'un bot Telegram',
						'Implémentation d\'un système d\'abonnement payant',
						'Création d\'un système de notification en temps réel',
						'Mise en place d\'un classement des cryptomonnaies les plus achetées',
						'Récupération de toutes les données de la blockchain en direct et mise en place d\'un système de notification en temps réel via du Task Queue',
					],
					techStack: ['Python','Linux', 'Celery', 'Redis', 'Docker', 'MongoDB', 'Telegram API'],
					image: '/mooney.png',
					},
					{
					title: 'Cryptallin (Blog Cryptomonnaies)',
					description: 'Cryptallin est un blog dédié aux cryptomonnaies, permettant de suivre l\'actualité des cryptos, des analyses de marché et des guides pour les investisseurs.',
					tasks: [
						'Création d\'un blog',
						'Implémentation de la charte graphique',
						'Mise en place d\'un système de gestion de contenu (CMS)',
						'Ajout d\'un système de commentaires',
					],
					techStack: ['Wordpress', 'MySQL'],
					image: '/cryptallin.png',
					},
					{
					title: 'AvantGarde Coiffure (Salon de Coiffure)',
					description: 'AvantGarde est un salon de coiffure dans le bassin Lyonnais qui cherche à simplifier la vente en ligne de ses produits ainsi que la présentation de leurs prestations et de la prise de rdv.',
					tasks: [
						'Mise en place d\'un site vitrine',
						'Implémentation de la charte graphique',
						'Mise en place d\'un système de prise de rendez-vous en ligne',
						'Ajout d\'un système de vente en ligne avec WooCommerce',
					],
					techStack: ['Wordpress', 'MySQL'],
					image: '/avantgarde.jpg',
					},
					{
					title: 'SW2022 (Politique)',
					description: 'SW2022 est un site administratif pour une campagne présidentielle de 2022.',
					tasks: [
						'Un site administrable par le client',
						'Intégration de la charte graphique',
						'Changement de DNS de O2switch vers Scaleway',
						'mise en place d\'envoi de mail SMTP',
					],
					techStack: ['Python', 'Django', 'Javascript', 'Bootstrap', 'PostgreSQL', 'SendGrid', 'Linux'],
					image: '/sw2022.png',
					},
					].map((project) => (
						<div
              key={project.title}
              className="bg-[#21262D] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col lg:flex-row"
            >
              {/* Image à gauche */}
              <div className="relative w-full lg:w-1/2 h-48 lg:h-auto">
				<Image
					src={project.image}
					alt={project.title}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
				<div
					className={`
					absolute inset-0
					bg-gradient-to-r from-[#21262D]/0 via-[#21262D]/30 to-[#21262D]
					z-10
					`}
				/>
				</div>

              {/* Texte à droite */}
              <div className="p-6 w-full lg:w-1/2 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Tâches réalisées
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Stack Technique
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#1A1F2B] rounded-full text-sm font-medium text-gray-300 border border-[#2D333B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
	);
};
