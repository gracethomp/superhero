import { Superpower } from "./Superpower.type";

export type Superhero = {
  id?: number;
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: Superpower[];
  catch_phrase: string;
  images?: string[];
};
