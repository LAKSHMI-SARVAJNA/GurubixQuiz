// Sample question arrays for C, C++, Python, Java
// Replace these with your actual question data

const cChapters = {
  "Strings": cStringQuestions || [],
  "Pointers": cPointersQuestions || [],
  "Functions": cFunctionsQuestions || [],
  "Arrays": cArraysQuestions || [],
};

const cppChapters = {
  "OOP": cppOOPQuestions || [],
  "Functions": cppFunctionsQuestions || [],
  "ConstructorsandDestructors": cppConstructorsandDestructorsQuestions || [],
  "DataStructures": cppDataStructuresQuestions || [],
};

const pythonChapters = {
  "Basics": pythonBasicsQuestions || [],
  "DataStructures": pythonDataStructuresQuestions || [],
  "OOP": pythonOOPQuestions || [],
  "Libraries": pythonLibrariesQuestions || [],
};

const javaChapters = {
  "OOP": javaOOPQuestions || [],
  "Collections": javaCollectionsQuestions || [],
  "Exceptions": javaExceptionsQuestions || [],
  "Threads": javaThreadsQuestions || [],
};

export const technicalTest = {
  C: cChapters,
  Cpp: cppChapters,
  Python: pythonChapters,
  Java: javaChapters,
};
