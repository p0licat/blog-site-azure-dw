import { GridValueFormatterParams } from "@mui/x-data-grid";

export function relativeSelectorColumnsBooks() {
  return [
    {
      field: "Title",
      headerName: "Title",
      flex: 1,
      minWidth: 350,
    },
    {
      field: "Location",
      headerName: "Location",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "Library",
      headerName: "Library",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "Date",
      headerName: "Date",
      flex: 1,
      minWidth: 50,
    },
    {
      field: "Time",
      headerName: "Time",
      flex: 1,
      minWidth: 50,
    },
    {
      field: "Share",
      headerName: "Relevance score",
      flex: 1,
      minWidth: 60,
      valueGetter: (params: any) => {
        if (!params.value) {
          return params.value;
        }
        return params.value * 100;
      },
      valueFormatter: (params: GridValueFormatterParams<number>) => {
        if (params.value == null) {
          return "";
        }
        return `${params.value.toLocaleString()}%`;
      },
    },
  ];
}

export function relativeSelectorRowsBooks() {
  return [
    {
      Date: "09.05.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "13:18",
      Title: "Aspect-oriented soft Sharere development with use cases",
      Share: 0.016,
      id: 100,
      key: 100,
    } as any,
    {
      Date: "16.04.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "14:21",
      Title: "OBJ, CafeOBJ, Maude at Formal Methods '99",
      Share: 0.016,
      id: 101,
      key: 101,
    } as any,
    {
      Date: "29.01.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "14:39",
      Title: "Modeling reactive systems with statecharts",
      Share: 0.016,
      id: 102,
      key: 102,
    } as any,
    {
      Date: "21.01.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "17:37",
      Title: "Open distributed systems",
      Share: 0.016,
      id: 103,
      key: 103,
    } as any,
    {
      Date: "16.04.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "14:21",
      Title:
        "Continuous-time dynamical systems for solving constraint satisfaction problems",
      Share: 0.0144,
      id: 104,
      key: 104,
    } as any,
    {
      Date: "03.03.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:49",
      Title: "Elemente de programare liniara",
      Share: 0.0144,
      id: 105,
      key: 105,
    } as any,
    {
      Date: "21.01.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "14:02",
      Title: "Application of Petri nets to communication networks",
      Share: 0.0144,
      id: 106,
      key: 106,
    } as any,
    {
      Date: "16.06.2022",
      Library: "Biblioteca de Fizica",
      Location: "Romania - Cluj",
      Time: "10:00",
      Title: "Lattice vibrations",
      Share: 0.0139,
      id: 107,
      key: 107,
    } as any,
    {
      Date: "23.05.2022",
      Library: "Biblioteca de Fizica",
      Location: "Romania - Cluj",
      Time: "09:21",
      Title: "Nonlinear and Dynamic Programming",
      Share: 0.0139,
      id: 108,
      key: 108,
    } as any,
    {
      Date: NaN,
      Library:
        "University of Luxembourg or Biblioteque Nationale du Luxembourg",
      Location: "Luxembourg",
      Time: NaN,
      Title:
        "Cognitive aspects of human computer interaction for geographic information systems [proceedings of the NATO Advanced Research Workshop on Cognitive Aspects of Human Computer Interaction for Geographic Information Systems, Palma de Mallorca, Spain, March 20-25, 1994] ed. by Timothy L. Nyerges [et al.]",
      Share: 0.0137,
      id: 109,
      key: 109,
    } as any,
    {
      Date: NaN,
      Library:
        "University of Luxembourg or Biblioteque Nationale du Luxembourg",
      Location: "Luxembourg",
      Time: NaN,
      Title:
        "The object constraint language getting your models ready for MDA J. B.  Sharermer, A. G. Kleppe",
      Share: 0.013500000000000002,
      id: 110,
      key: 110,
    } as any,
    {
      Date: "27.06.2022",
      Library: "Biblioteca de Fizica",
      Location: "Romania - Cluj",
      Time: "12:09",
      Title: "Color and symmetry",
      Share: 0.013300000000000001,
      id: 111,
      key: 111,
    } as any,
    {
      Date: "20.06.2022",
      Library: "Biblioteca de Fizica",
      Location: "Romania - Cluj",
      Time: "09:59",
      Title: "Optical crystallography",
      Share: 0.013300000000000001,
      id: 112,
      key: 112,
    } as any,
    {
      Date: "16.06.2022",
      Library: "Biblioteca de Fizica",
      Location: "Romania - Cluj",
      Time: "09:59",
      Title: "An introduction to X-ray crystallography",
      Share: 0.013300000000000001,
      id: 113,
      key: 113,
    } as any,
    {
      Date: "03.06.2022",
      Library: "Biblioteca de Fizica",
      Location: "Romania - Cluj",
      Time: "12:23",
      Title: "Generators and relations for discrete groups",
      Share: 0.013300000000000001,
      id: 114,
      key: 114,
    } as any,
    {
      Date: "17.11.2021",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "12:39",
      Title: "An introduction to algebraic geometry and algebraic groups",
      Share: 0.013000000000000001,
      id: 115,
      key: 115,
    } as any,
    {
      Date: "31.01.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Fractional graph theory : a rational approach to the theory of graphs / Ed Sharerd R. Scheinerman, Daniel H. Ullman ; with a foreword by Claude",
      Share: 0.0128,
      id: 116,
      key: 116,
    } as any,
    {
      Date: "07.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title: "Basic econometrics / Damodar N. Gujarati",
      Share: 0.0128,
      id: 117,
      key: 117,
    } as any,
    {
      Date: "07.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title: "Agent-based models / Gilbert ; Nigel",
      Share: 0.0128,
      id: 118,
      key: 118,
    } as any,
    {
      Date: "07.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Handbook on entropy, complexity and spatial dynamics : a rebirth of theory? / edited by Aura Reggiani ... [et al.]",
      Share: 0.0128,
      id: 119,
      key: 119,
    } as any,
    {
      Date: "17.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title: "Bayesian reasoning and machine learning / David Barber",
      Share: 0.0128,
      id: 120,
      key: 120,
    } as any,
    {
      Date: "17.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title: "Measuring market power / edited by Daniel J. Slottje",
      Share: 0.0128,
      id: 121,
      key: 121,
    } as any,
    {
      Date: "17.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Economics of regulation and antitrust / W. Kip Viscusi, Joseph E. Harrington, John M. Vernon",
      Share: 0.0128,
      id: 122,
      key: 122,
    } as any,
    {
      Date: "17.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title: "Levy processes and stochastic calculus / David Applebaum",
      Share: 0.0128,
      id: 123,
      key: 123,
    } as any,
    {
      Date: "07.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Introduction to stochastic calculus with applications / Fima C Klebaner",
      Share: 0.0128,
      id: 124,
      key: 124,
    } as any,
    {
      Date: "17.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Network science, nonlinear science and infrastructure systems / edited by Terry L. Friesz",
      Share: 0.0128,
      id: 125,
      key: 125,
    } as any,
    {
      Date: "17.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Multilevel theory, research, and methods in organizations : foundations, extensions, and new directions / Katherine J. Klein, Steve W.J. Kozlowski editors ; foreword by Sheldon",
      Share: 0.0128,
      id: 126,
      key: 126,
    } as any,
    {
      Date: NaN,
      Library:
        "University of Luxembourg or Biblioteque Nationale du Luxembourg",
      Location: "Luxembourg",
      Time: NaN,
      Title:
        "Algebra - representation theory ed. by Klaus W. Roggenkamp and Mirela Stefanescu",
      Share: 0.0128,
      id: 127,
      key: 127,
    } as any,
    {
      Date: NaN,
      Library:
        "University of Luxembourg or Biblioteque Nationale du Luxembourg",
      Location: "Luxembourg",
      Time: NaN,
      Title:
        "Commutative algebra, singularities, and computer algebra edited by J\\u00fcrgen Herzog ... [et al.]",
      Share: 0.0128,
      id: 128,
      key: 128,
    } as any,
    {
      Date: NaN,
      Library:
        "University of Luxembourg or Biblioteque Nationale du Luxembourg",
      Location: "Luxembourg",
      Time: NaN,
      Title: "Graphentheorie Reinhard Diestel",
      Share: 0.0128,
      id: 129,
      key: 129,
    } as any,
    {
      Date: "28.11.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:17",
      Title: "Measures of noncompactness in metric fixed point theory",
      Share: 0.0128,
      id: 130,
      key: 130,
    } as any,
    {
      Date: "28.11.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:18",
      Title: "Moduli of abelian varieties",
      Share: 0.0128,
      id: 131,
      key: 131,
    } as any,
    {
      Date: "28.11.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:26",
      Title: "Modular representations of finite groups of Lie type",
      Share: 0.0128,
      id: 132,
      key: 132,
    } as any,
    {
      Date: "28.11.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "13:33",
      Title: "State spaces of operator algebras",
      Share: 0.0128,
      id: 133,
      key: 133,
    } as any,
    {
      Date: "28.11.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:18",
      Title: "Elementary Dirichlet series and modular froms",
      Share: 0.0128,
      id: 134,
      key: 134,
    } as any,
    {
      Date: "28.11.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:18",
      Title:
        "I Sharesa Share theory, projective modules, and modular representations",
      Share: 0.0128,
      id: 135,
      key: 135,
    } as any,
    {
      Date: "25.11.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:15",
      Title: "Modular representations of finite groups of Lie type",
      Share: 0.0128,
      id: 136,
      key: 136,
    } as any,
    {
      Date: "25.11.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:15",
      Title: "Measures of noncompactness in metric fixed point theory",
      Share: 0.0128,
      id: 137,
      key: 137,
    } as any,
    {
      Date: "24.11.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "14:36",
      Title:
        "Harmonic analysis, function theory, operator theory, and their applications",
      Share: 0.0128,
      id: 138,
      key: 138,
    } as any,
    {
      Date: "23.05.2022",
      Library: "Biblioteca de Fizica",
      Location: "Romania - Cluj",
      Time: "09:21",
      Title: "Analiza matematica",
      Share: 0.0128,
      id: 139,
      key: 139,
    } as any,
    {
      Date: "19.05.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "14:22",
      Title: "Convexity and optimization",
      Share: 0.0128,
      id: 140,
      key: 140,
    } as any,
    {
      Date: "27.04.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "12:19",
      Title: "General lattice theory",
      Share: 0.0128,
      id: 141,
      key: 141,
    } as any,
    {
      Date: "27.04.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "12:19",
      Title: "New construction methods for oriented matriods",
      Share: 0.0128,
      id: 142,
      key: 142,
    } as any,
    {
      Date: "21.04.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "12:18",
      Title: "Studies in pure mathematics",
      Share: 0.0128,
      id: 143,
      key: 143,
    } as any,
    {
      Date: "16.04.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "14:21",
      Title: "Problem solving with Prolog",
      Share: 0.0128,
      id: 144,
      key: 144,
    } as any,
    {
      Date: "10.03.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "12:55",
      Title: "Selected papers of Alfred Renyi",
      Share: 0.0128,
      id: 145,
      key: 145,
    } as any,
    {
      Date: "03.03.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:49",
      Title: "Ecua\\u0163ii integrale Fredholm-Volterra",
      Share: 0.0128,
      id: 146,
      key: 146,
    } as any,
    {
      Date: "24.02.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:52",
      Title: "Algebraic, extremal, and metric combinatorics, 1986",
      Share: 0.0128,
      id: 147,
      key: 147,
    } as any,
    {
      Date: "24.02.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:52",
      Title: "Infinite and finite sets",
      Share: 0.0128,
      id: 148,
      key: 148,
    } as any,
    {
      Date: "18.02.2022",
      Library: "Biblioteca de Fizica",
      Location: "Romania - Cluj",
      Time: "11:43",
      Title: "Field theories of condensed matter systems",
      Share: 0.0128,
      id: 149,
      key: 149,
    } as any,
    {
      Date: "18.02.2022",
      Library: "Biblioteca de Fizica",
      Location: "Romania - Cluj",
      Time: "11:44",
      Title: "Quantum non-linear sigma-models",
      Share: 0.0128,
      id: 150,
      key: 150,
    } as any,
    {
      Date: "28.01.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "18:24",
      Title: "O mica introducere in Haskell 98",
      Share: 0.0128,
      id: 151,
      key: 151,
    } as any,
    {
      Date: "17.11.2021",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "12:47",
      Title: "Convexity and discrete geometry including graph theory",
      Share: 0.0128,
      id: 152,
      key: 152,
    } as any,
    {
      Date: "17.11.2021",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "12:47",
      Title: "Matrix groups",
      Share: 0.0128,
      id: 153,
      key: 153,
    } as any,
    {
      Date: "17.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Numerical methods and optimization in finance / Manfred Gilli, Dietmar Maringer, Enrico Schumann",
      Share: 0.011899999999999999,
      id: 154,
      key: 154,
    } as any,
    {
      Date: "17.11.2021",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "12:39",
      Title: "New techniques in network optimization",
      Share: 0.011899999999999999,
      id: 155,
      key: 155,
    } as any,
    {
      Date: "06.05.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "13:17",
      Title: "Time and resource constrained scheduling",
      Share: 0.011399999999999999,
      id: 156,
      key: 156,
    } as any,
    {
      Date: "28.11.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:18",
      Title: "Approximation theory",
      Share: 0.011000000000000001,
      id: 157,
      key: 157,
    } as any,
    {
      Date: "19.05.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "14:22",
      Title: "Analiza numerica",
      Share: 0.011000000000000001,
      id: 158,
      key: 158,
    } as any,
    {
      Date: "19.05.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "14:22",
      Title: "Analiza numerica cu Maple",
      Share: 0.011000000000000001,
      id: 159,
      key: 159,
    } as any,
    {
      Date: NaN,
      Library:
        "University of Luxembourg or Biblioteque Nationale du Luxembourg",
      Location: "Luxembourg",
      Time: NaN,
      Title:
        "Understanding spatial media edited by Rob Kitchin, Tracey P. Lauriault, Matthew W. Wilson",
      Share: 0.0096,
      id: 160,
      key: 160,
    } as any,
    {
      Date: NaN,
      Library:
        "University of Luxembourg or Biblioteque Nationale du Luxembourg",
      Location: "Luxembourg",
      Time: NaN,
      Title:
        "Geographic information systems and their socioeconomic applications David Martin",
      Share: 0.0096,
      id: 161,
      key: 161,
    } as any,
    {
      Date: NaN,
      Library:
        "University of Luxembourg or Biblioteque Nationale du Luxembourg",
      Location: "Luxembourg",
      Time: NaN,
      Title:
        "5G enabled secure wireless networks Dushantha Nalin K. Jayakody ... [et al.] (ed.)",
      Share: 0.0096,
      id: 162,
      key: 162,
    } as any,
    {
      Date: "23.06.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "13:13",
      Title: "To Sharerd spatial humanities",
      Share: 0.0096,
      id: 163,
      key: 163,
    } as any,
    {
      Date: "23.06.2022",
      Library: "Biblioteca Centrala",
      Location: "Romania - Cluj",
      Time: "13:13",
      Title: "Mapping landscapes in transformation",
      Share: 0.0096,
      id: 164,
      key: 164,
    } as any,
    {
      Date: "20.09.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Global Education Policy, Impact Evaluations, and Alternatives : The Political Economy of Knowledge Production / D. Brent Ed Sharerds Jr",
      Share: 0.0088,
      id: 165,
      key: 165,
    } as any,
    {
      Date: "20.09.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Cognitive economics : new trends / edited by Richard Topol, Bernard  Sharelliser",
      Share: 0.0088,
      id: 166,
      key: 166,
    } as any,
    {
      Date: "04.10.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title: "Advancing knowledge and the knowledge economy",
      Share: 0.0088,
      id: 167,
      key: 167,
    } as any,
    {
      Date: "17.11.2021",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "12:39",
      Title: "Algebraic theory of machines, languages, and semigroups",
      Share: 0.0088,
      id: 168,
      key: 168,
    } as any,
    {
      Date: "13.02.2023",
      Library: "Universita di Bologna, Faccolta di Matematica",
      Location: "Bologna",
      Time: NaN,
      Title:
        "Logic program synthesis and transformation ; Meta programming in logic : 4. international workshop LOPSTR '94 and META '94 : Pisa , Italy, June 20-21, 1994 : proceedings /",
      Share: 0.0085,
      id: 169,
      key: 169,
    } as any,
    {
      Date: "13.02.2023",
      Library: "Universita di Bologna, Faccolta di Matematica",
      Location: "Bologna",
      Time: NaN,
      Title:
        "Introduction to higher order categorical logic / J. Lambek, P. J. Scott",
      Share: 0.0085,
      id: 170,
      key: 170,
    } as any,
    {
      Date: "23.11.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "14:32",
      Title: "Coming to terms with modal logic",
      Share: 0.0085,
      id: 171,
      key: 171,
    } as any,
    {
      Date: "18.04.2022",
      Library: "Biblioteca de Fizica",
      Location: "Romania - Cluj",
      Time: "12:45",
      Title: "Fizica semiconductorilor",
      Share: 0.0085,
      id: 172,
      key: 172,
    } as any,
    {
      Date: "07.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title: "Human-computer interaction / Alan Dix ... [et al.]",
      Share: 0.0069,
      id: 173,
      key: 173,
    } as any,
    {
      Date: "20.09.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Economic analysis of environmental policy and law : an introduction / Michael Faure and Goran Skogh",
      Share: 0.0064,
      id: 174,
      key: 174,
    } as any,
    {
      Date: "07.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title: "Paths, flows and VLSI-layout / editors Bernhard Korte ...",
      Share: 0.0064,
      id: 175,
      key: 175,
    } as any,
    {
      Date: "13.02.2023",
      Library: "Universita di Bologna, Faccolta di Matematica",
      Location: "Bologna",
      Time: NaN,
      Title:
        "Graph drawing : Symposium on graph drawing, GD '96 : Berkely, California, USA, September 18-20, 1996 : proceedings / Stephen North (ed.)",
      Share: 0.0064,
      id: 176,
      key: 176,
    } as any,
    {
      Date: "13.02.2023",
      Library: "Universita di Bologna, Faccolta di Matematica",
      Location: "Bologna",
      Time: NaN,
      Title:
        "Term Rewriting and Applications : 16. International Conference, RTA 2005 : Nara, Japan, April 2005 : Proceedings / Jurgen Giesl (eds.)",
      Share: 0.0064,
      id: 177,
      key: 177,
    } as any,
    {
      Date: "13.02.2023",
      Library: "Universita di Bologna, Faccolta di Matematica",
      Location: "Bologna",
      Time: NaN,
      Title:
        "MFDBS 91 : 3. Symposium on mathematical fundamentals of database and knowledge base systems : Rostock, Germany, May 6-9, 1991 : proceedings / B. Thalheim, J.",
      Share: 0.0064,
      id: 178,
      key: 178,
    } as any,
    {
      Date: NaN,
      Library:
        "University of Luxembourg or Biblioteque Nationale du Luxembourg",
      Location: "Luxembourg",
      Time: NaN,
      Title:
        "Artificial intelligence and international economic law disruption, regulation, and reconfiguration ed. by Shin-Yi Peng, Ching-Fu Lin, Thomas Streinz",
      Share: 0.0064,
      id: 179,
      key: 179,
    } as any,
    {
      Date: NaN,
      Library:
        "University of Luxembourg or Biblioteque Nationale du Luxembourg",
      Location: "Luxembourg",
      Time: NaN,
      Title: "Geometric structures of information Frank Nielsen (ed.)",
      Share: 0.0064,
      id: 180,
      key: 180,
    } as any,
    {
      Date: "06.05.2022",
      Library: "Biblioteca de Matematica",
      Location: "Romania - Cluj",
      Time: "13:17",
      Title:
        "Techniques for modelling structured operational and denotational semantics definitions with term rewriting",
      Share: 0.0064,
      id: 181,
      key: 181,
    } as any,
    {
      Date: "06.05.2022",
      Library: "Biblioteca de Fizica",
      Location: "Romania - Cluj",
      Time: "10:25",
      Title:
        "A top-down, constraint-driven design methodology for analog integrated circuits",
      Share: 0.0064,
      id: 182,
      key: 182,
    } as any,
    {
      Date: NaN,
      Library:
        "University of Luxembourg or Biblioteque Nationale du Luxembourg",
      Location: "Luxembourg",
      Time: NaN,
      Title:
        "Vertex-frequency analysis of graph signals Ljubi\\u0161a Stankovi\\u0107 ... [t al.] (ed.)",
      Share: 0.0059,
      id: 183,
      key: 183,
    } as any,
    {
      Date: "07.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Computational methods for quantitative finance : finite element methods for derivative pricing / Norbert Hilber ... [et al.]",
      Share: 0.0055000000000000005,
      id: 184,
      key: 184,
    } as any,
    {
      Date: "31.01.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "standard for project management and a guide to the project management body of knowledge : (PMBOK guide) / [Project Management Institute]",
      Share: 0.0053,
      id: 185,
      key: 185,
    } as any,
    {
      Date: "17.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Perspectives on innovation / editors Franco Malerba and Stefano Brusoni",
      Share: 0.0048,
      id: 186,
      key: 186,
    } as any,
    {
      Date: "20.09.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "The *economic structure of intellectual property Law / William M. Landes, Richard A. Posner",
      Share: 0.0043,
      id: 187,
      key: 187,
    } as any,
    {
      Date: "07.02.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title:
        "Agent-based computational economics / edited by Leigh Tesfatsion and Kenneth L. Judd",
      Share: 0.0043,
      id: 188,
      key: 188,
    } as any,
    {
      Date: NaN,
      Library:
        "University of Luxembourg or Biblioteque Nationale du Luxembourg",
      Location: "Luxembourg",
      Time: NaN,
      Title: "Ensemble methods foundations and algorithms Zhi-Hua Zhou",
      Share: 0.0032,
      id: 189,
      key: 189,
    } as any,
    {
      Date: "20.09.2023",
      Library: "Universita di Bologna Campus Rimini",
      Location: "Rimini",
      Time: NaN,
      Title: "Causality : models, reasoning, and inference / Judea Pearl",
      Share: 0.0018,
      id: 190,
      key: 190,
    } as any,
  ];
}
