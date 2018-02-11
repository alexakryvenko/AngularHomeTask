import { GeneratorService } from "./generator.service";

const generatorServiceFactory = () => {
  return new GeneratorService(10);
};

export const generatorProvider =  { provide: GeneratorService,
  useFactory: generatorServiceFactory
};
