import React from 'react';
import InfoCard from './InfoCard';

function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-8">Qu'est-ce que la Rougeole ?</h1>

      <InfoCard title="Définition">
        <p>
          La rougeole est une maladie infectieuse virale très contagieuse, causée par un virus de la famille des Paramyxoviridae (genre Morbillivirus). 
          Elle touche principalement les enfants, mais peut survenir à tout âge chez les personnes non immunisées.
        </p>
        <p className="mt-2">
          Avant l'introduction de la vaccination à grande échelle, la rougeole était une cause majeure de mortalité infantile dans le monde.
        </p>
      </InfoCard>

      <InfoCard title="Transmission">
        <p>
          Le virus de la rougeole se propage extrêmement facilement d'une personne à l'autre par voie aérienne, via les gouttelettes de salive émises lorsqu'une personne infectée tousse, éternue ou parle. 
        </p>
        <p className="mt-2">
          Le virus peut rester en suspension dans l'air ou survivre sur des surfaces contaminées pendant quelques heures. Le contact direct avec les sécrétions du nez ou de la gorge d'une personne infectée est également un mode de transmission.
        </p>
      </InfoCard>

      <InfoCard title="Contagiosité">
        <p>
          Une personne atteinte de rougeole est contagieuse environ 4 jours avant l'apparition de l'éruption cutanée et jusqu'à 4 jours après. 
          La période de contagiosité maximale se situe juste avant et au moment de l'éruption.
        </p>
        <p className="mt-2">
          En raison de sa très haute contagiosité (une personne infectée peut contaminer 15 à 20 personnes non protégées), la maladie peut se propager rapidement dans les populations où la couverture vaccinale est insuffisante.
        </p>
      </InfoCard>

    </div>
  );
}

export default AboutPage;

