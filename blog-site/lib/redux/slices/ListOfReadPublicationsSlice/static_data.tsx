import { IPublicationEntry } from "./ListOfReadPublicationsSlice";

export const staticPubs: IPublicationEntry[] = [
  {
    key: 1,
    id: 1,
    Tags: "Science, Machine Learning",
    Date: new Date(2024, 1, 16),
    Title:
      "Handwritten Mathematical Expression Recognition with Bidirectionally Trained Transformer",
  } as IPublicationEntry,
  {
    key: 2,
    id: 2,
    Tags: "Science, Machine Learning",
    Date: new Date(2024, 1, 16),
    Title:
      "CoMER: Modeling Coverage for Transformer-based Handwritten Mathematical Expression Recognition",
  } as IPublicationEntry,
  {
    key: 3,
    id: 3,
    Tags: "Science, Machine Learning",
    Date: new Date(2023, 1, 15),
    Title:
      "Handwritten Mathematical Expression Recognition with Bidirectionally Trained Transformer",
  } as IPublicationEntry,
  {
    key: 4,
    id: 4,
    Tags: "Science, Machine Learning, Biomimicry 🧬",
    Date: new Date(2024, 1, 10),
    Title:
      "BioBERT: a pre-trained biomedical language representation model for biomedical text mining",
  } as IPublicationEntry,
  {
    key: 5,
    id: 5,
    Tags: "Science, Quantum Mechanics",
    Date: new Date(2024, 1, 3),
    Title:
      "Non-Pauli topological stabilizer codes from twisted quantum doubles",
  } as IPublicationEntry,
];
