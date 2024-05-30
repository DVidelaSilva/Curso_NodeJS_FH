import { heroes } from "../data/hero";



export const findHeroById = (id: number) => {
    return heroes.find((hero) => hero.id === id)
};
