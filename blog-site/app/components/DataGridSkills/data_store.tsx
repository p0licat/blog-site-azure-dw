import {
  GridColDef,
  GridRowsProp,
  GridValueFormatterParams,
} from "@mui/x-data-grid";

export function relativeSelectorColumnsSkills() {
  return [
    {
      field: "Technology",
      headerName: "Technology",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "Share",
      headerName: "Share (Weighted avg)",
      flex: 1,
      minWidth: 250,
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

export function relativeSelectorColumnsFrameworks() {
  return [
    {
      field: "Framework",
      headerName: "Framework",
      flex: 1,
      minWidth: 175,
    },
    {
      field: "Type",
      headerName: "Type",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "Subtype",
      headerName: "Subtype",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "WA",
      headerName: "Weighted avg.",
      flex: 1,
      minWidth: 250,
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

export function relativeSelectorColumns() {
  return [
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      minWidth: 300,
    },
    {
      field: "Hours",
      headerName: "Hours",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "ECTS",
      headerName: "ECTS credits",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "WA",
      headerName: "Weighted avg. contribution",
      flex: 1,
      minWidth: 400,
      valueGetter: (params) => {
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
  ] as GridColDef[];
}

export function relativeSelectorRowsFrameworks() {
  return [
    {
      Framework: "Django",
      Subtype: "Web",
      Type: "Framework",
      WA: 0.0087,
      id: 100,
      key: 100,
    } as any,
    {
      Framework: "Plotly.js",
      Subtype: "Visualization",
      Type: "Library",
      WA: 0.11539999999999999,
      id: 101,
      key: 101,
    } as any,
    {
      Framework: "Plotly Python",
      Subtype: "Visualization",
      Type: "Library",
      WA: 0.11539999999999999,
      id: 102,
      key: 102,
    } as any,
    {
      Framework: "Dash Python",
      Subtype: "Visualization",
      Type: "Library",
      WA: 0.11539999999999999,
      id: 103,
      key: 103,
    } as any,
    {
      Framework: "Cytoscape JS",
      Subtype: "Visualization",
      Type: "Library",
      WA: 0.0,
      id: 104,
      key: 104,
    } as any,
    {
      Framework: "Networkx",
      Subtype: "Visualization",
      Type: "Library",
      WA: 0.0,
      id: 105,
      key: 105,
    } as any,
    {
      Framework: "Matplotlib",
      Subtype: "Visualization",
      Type: "Library",
      WA: 0.057699999999999994,
      id: 106,
      key: 106,
    } as any,
    {
      Framework: "Seaborn",
      Subtype: "Visualization",
      Type: "Library",
      WA: 0.0,
      id: 107,
      key: 107,
    } as any,
    {
      Framework: "WinForms",
      Subtype: "UI design, .NET",
      Type: "Framework",
      WA: 0.0058,
      id: 108,
      key: 108,
    } as any,
    {
      Framework: "Pandas",
      Subtype: "Scientific computing",
      Type: "Library",
      WA: 0.11539999999999999,
      id: 109,
      key: 109,
    } as any,
    {
      Framework: "Numpy",
      Subtype: "Scientific computing",
      Type: "Library",
      WA: 0.11539999999999999,
      id: 110,
      key: 110,
    } as any,
    {
      Framework: "Scikit Learn",
      Subtype: "Scientific computing",
      Type: "Library",
      WA: 0.11539999999999999,
      id: 111,
      key: 111,
    } as any,
    {
      Framework: "Flask",
      Subtype: "REST",
      Type: "Library",
      WA: 0.0087,
      id: 112,
      key: 112,
    } as any,
    {
      Framework: "Arduino, Raspberry, I2C",
      Subtype: "Embedded",
      Type: "Platform",
      WA: 0.0217,
      id: 113,
      key: 113,
    } as any,
    {
      Framework: "SQL, Postgres",
      Subtype: "Databases",
      Type: "Language",
      WA: 0.11539999999999999,
      id: 114,
      key: 114,
    } as any,
    {
      Framework: "Pyautogui",
      Subtype: "Behavioural testing",
      Type: "Library",
      WA: 0.0058,
      id: 115,
      key: 115,
    } as any,
    {
      Framework: "Spring Framework",
      Subtype: "Aspect oriented programming",
      Type: "Framework",
      WA: 0.025,
      id: 116,
      key: 116,
    } as any,
    {
      Framework: "Swagger",
      Subtype: "API development",
      Type: "Framework",
      WA: 0.025,
      id: 117,
      key: 117,
    } as any,
    {
      Framework: "OpenUI",
      Subtype: "API development",
      Type: "Framework",
      WA: 0.0192,
      id: 118,
      key: 118,
    } as any,
    {
      Framework: "OpenLiberty",
      Subtype: "API development",
      Type: "Framework",
      WA: 0.0058,
      id: 119,
      key: 119,
    } as any,
    {
      Framework: "C#",
      Subtype: ".NET",
      Type: "Language",
      WA: 0.0058,
      id: 120,
      key: 120,
    } as any,
  ];
}

export function relativeSelectorRowsSkills() {
  return [
    { Share: 0.2143, Technology: "Python", id: 20, key: 20 } as any,
    { Share: 0.2143, Technology: "Data Science", id: 21, key: 21 } as any,
    {
      Share: 0.19329999999999997,
      Technology: "Office Suite",
      id: 22,
      key: 22,
    } as any,
    { Share: 0.0805, Technology: "Hardware", id: 23, key: 23 } as any,
    { Share: 0.075, Technology: "Java", id: 24, key: 24 } as any,
    { Share: 0.0, Technology: "Hardware", id: 25, key: 25 } as any,
    { Share: 0.0322, Technology: "Python  Django", id: 26, key: 26 } as any,
    { Share: 0.028900000000000002, Technology: "C++", id: 27, key: 27 } as any,
    { Share: 0.0229, Technology: "Linux", id: 28, key: 28 } as any,
    { Share: 0.0229, Technology: "IT", id: 29, key: 29 } as any,
    {
      Share: 0.021400000000000002,
      Technology: "Spring",
      id: 30,
      key: 30,
    } as any,
    {
      Share: 0.019299999999999998,
      Technology: "Python",
      id: 31,
      key: 31,
    } as any,
    {
      Share: 0.019299999999999998,
      Technology: "Kernel",
      id: 32,
      key: 32,
    } as any,
    {
      Share: 0.019299999999999998,
      Technology: "Compilers and Assembly",
      id: 33,
      key: 33,
    } as any,
    {
      Share: 0.0161,
      Technology: "Visual Basic and .NET",
      id: 34,
      key: 34,
    } as any,
    {
      Share: 0.010700000000000001,
      Technology: "Azure",
      id: 35,
      key: 35,
    } as any,
    {
      Share: 0.0096,
      Technology: "Research and Documentation",
      id: 36,
      key: 36,
    } as any,
  ];
}

export function relativeSelectorRows() {
  return [
    {
      key: 3,
      id: 3,
      Name: "Internship (React, .Net, Azure)",
      Hours: 120,
      ECTS: 6,
      WA: 0.0502,
    } as any,
    {
      key: 4,
      id: 4,
      Name: "Fundamentals of Programming (Python)",
      Hours: 84,
      ECTS: 6,
      WA: 0.0368,
    } as any,
    {
      key: 5,
      id: 5,
      Name: "Advanced Programming Methods (Java)",
      Hours: 84,
      ECTS: 6,
      WA: 0.0368,
    } as any,
    {
      key: 6,
      id: 6,
      Name: "Business Intelligence (DBMS)",
      Hours: 60,
      ECTS: 7,
      WA: 0.0362,
    } as any,
    {
      key: 7,
      id: 7,
      Name: "Blockchain: Smart Contracts (Solidity)",
      Hours: 60,
      ECTS: 7,
      WA: 0.0362,
    } as any,
    {
      key: 8,
      id: 8,
      Name: "Formal Languages and Compiler Design",
      Hours: 84,
      ECTS: 5,
      WA: 0.0332,
    } as any,
    {
      key: 9,
      id: 9,
      Name: "Systems for Analysis and Design (Java)",
      Hours: 70,
      ECTS: 6,
      WA: 0.0329,
    } as any,
    {
      key: 10,
      id: 10,
      Name: "Databases",
      Hours: 70,
      ECTS: 6,
      WA: 0.0329,
    } as any,
    {
      key: 11,
      id: 11,
      Name: "Web Programming",
      Hours: 56,
      ECTS: 6,
      WA: 0.0307,
    } as any,
    {
      key: 12,
      id: 12,
      Name: "Probability Theory and Statistics",
      Hours: 56,
      ECTS: 6,
      WA: 0.0307,
    } as any,
    {
      key: 13,
      id: 13,
      Name: "Affective Computing",
      Hours: 70,
      ECTS: 4,
      WA: 0.0307,
    } as any,
    {
      key: 14,
      id: 14,
      Name: "Software Engineering",
      Hours: 70,
      ECTS: 6,
      WA: 0.0296,
    } as any,
    {
      key: 15,
      id: 15,
      Name: "Object Oriented Programming (Python)",
      Hours: 70,
      ECTS: 6,
      WA: 0.0296,
    } as any,
    {
      key: 16,
      id: 16,
      Name: "Parallel and Distributed Programming",
      Hours: 70,
      ECTS: 5,
      WA: 0.0293,
    } as any,
    {
      key: 17,
      id: 17,
      Name: "Operating Systems (Linux/Unix)",
      Hours: 70,
      ECTS: 5,
      WA: 0.0293,
    } as any,
    {
      key: 18,
      id: 18,
      Name: "Computer Networks",
      Hours: 56,
      ECTS: 6,
      WA: 0.029,
    } as any,
    {
      key: 19,
      id: 19,
      Name: "Artificial Intelligence",
      Hours: 56,
      ECTS: 6,
      WA: 0.029,
    } as any,
    {
      key: 20,
      id: 29,
      Name: "Computer Vision and Deep Learning",
      Hours: 70,
      ECTS: 4,
      WA: 0.0284,
    } as any,
    {
      key: 21,
      id: 21,
      Name: "Computer Systems Architecture (x86)",
      Hours: 70,
      ECTS: 6,
      WA: 0.029,
    } as any,
  ] as GridRowsProp;
}
