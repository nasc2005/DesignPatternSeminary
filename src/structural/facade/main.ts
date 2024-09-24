import { BuilderFacade } from './builder-facade';

const builderFacade = new BuilderFacade();

//chama classe da car factory
builderFacade.PuxaCar('Caixa de Som');

//chama classe da bicycle factory 
builderFacade.PuxaBike('Pizza');

//chama classe da ship factory 
builderFacade.PuxaShip('Container');