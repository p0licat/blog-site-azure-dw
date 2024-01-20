import { PersonalEvent } from "./types";

export const staticEvents: PersonalEvent[] = [
  {
    key: 1,
    id: 1,
    description: "Moved from Bistrita to Cluj-Napoca",
    date: new Date(2021, 1, 15),
  } as PersonalEvent,
  {
    key: 2,
    id: 2,
    description: "Finished my first React.js project",
    date: new Date(2021, 6, 8),
  } as PersonalEvent,
  {
    key: 3,
    id: 3,
    description: "Visiting the libraries at BCU Cluj as part of my studies",
    date: new Date(2022, 4, 21),
  } as PersonalEvent,

  {
    key: 4,
    id: 4,
    description: "Finished my license thesis",
    date: new Date(2022, 5, 15),
  } as PersonalEvent,
  {
    key: 5,
    id: 5,
    description: "Started an internship at IBM in Cluj, Romania",
    date: new Date(2022, 9, 1),
  } as PersonalEvent,
  {
    key: 6,
    id: 6,
    description: "Moved to Italy",
    date: new Date(2022, 12, 20),
  } as PersonalEvent,
  {
    key: 7,
    id: 7,
    description: "Obtained a Traineeship at the EIB in Luxembourg",
    date: new Date(2023, 2, 3),
  } as PersonalEvent,
  {
    key: 8,
    id: 8,
    description: "Visited the European Court of Justice Open Days",
    date: new Date(2023, 5, 9),
  } as PersonalEvent,
  {
    key: 9,
    id: 9,
    description: "Visited Brussels for the first time",
    date: new Date(2023, 5, 20),
  } as PersonalEvent,
].reverse();
