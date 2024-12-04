
const sqlBasicsQuestions = [
    {
      question: "What is the SQL command used to create a database?",
      optionA: "CREATE DATABASE",
      optionB: "NEW DATABASE",
      optionC: "MAKE DATABASE",
      optionD: "ADD DATABASE",
      correctAnswer: "optionA",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "Which SQL clause is used to filter results?",
      optionA: "WHERE",
      optionB: "FILTER",
      optionC: "SELECT",
      optionD: "HAVING",
      correctAnswer: "optionA",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "What is the SQL command used to retrieve data from a database?",
      optionA: "SELECT",
      optionB: "GET",
      optionC: "FETCH",
      optionD: "RETRIEVE",
      correctAnswer: "optionA",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "Which SQL function is used to count the number of rows in a table?",
      optionA: "COUNT()",
      optionB: "SUM()",
      optionC: "AVG()",
      optionD: "NUM()",
      correctAnswer: "optionA",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "What does the SQL statement 'DROP TABLE' do?",
      optionA: "Deletes all data in a table",
      optionB: "Removes a table from a database",
      optionC: "Renames a table",
      optionD: "Changes a table structure",
      correctAnswer: "optionB",
       explanation: "2 + 2 equals 4 because it's basic addition."
    }
  ];

  const sqlJoinsQuestions = [
    {
      question: "Which SQL JOIN returns all records when there is a match in either left or right table?",
      optionA: "INNER JOIN",
      optionB: "LEFT JOIN",
      optionC: "RIGHT JOIN",
      optionD: "FULL OUTER JOIN",
      correctAnswer: "optionD",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "Which SQL JOIN only returns matching records from both tables?",
      optionA: "INNER JOIN",
      optionB: "LEFT JOIN",
      optionC: "RIGHT JOIN",
      optionD: "CROSS JOIN",
      correctAnswer: "optionA",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "Which type of JOIN will include all records from the left table and matching rows from the right table?",
      optionA: "INNER JOIN",
      optionB: "LEFT JOIN",
      optionC: "RIGHT JOIN",
      optionD: "FULL OUTER JOIN",
      correctAnswer: "optionB",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "Which SQL clause is used to specify the condition for a JOIN?",
      optionA: "JOIN ON",
      optionB: "WHERE",
      optionC: "SELECT",
      optionD: "HAVING",
      correctAnswer: "optionA",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "Which of the following is not a type of SQL JOIN?",
      optionA: "OUTER JOIN",
      optionB: "LEFT JOIN",
      optionC: "CROSS JOIN",
      optionD: "UNION JOIN",
      correctAnswer: "optionD",
       explanation: "2 + 2 equals 4 because it's basic addition."
    }
  ];

 const sqlSubqueriesQuestions = [
    {
      question: "Which of the following is a valid use of a subquery?",
      optionA: "In the SELECT statement",
      optionB: "In the WHERE clause",
      optionC: "In the FROM clause",
      optionD: "All of the above",
      correctAnswer: "optionD",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "What is a correlated subquery?",
      optionA: "A subquery that does not depend on the outer query",
      optionB: "A subquery that references columns from the outer query",
      optionC: "A subquery with a GROUP BY clause",
      optionD: "A subquery within an INSERT statement",
      correctAnswer: "optionB",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "What is the purpose of a subquery?",
      optionA: "To join two tables",
      optionB: "To filter results",
      optionC: "To return a set of rows for the outer query",
      optionD: "To modify data",
      correctAnswer: "optionC",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "Can a subquery be used in an UPDATE statement?",
      optionA: "Yes, only in the SET clause",
      optionB: "No, subqueries can only be used in SELECT statements",
      optionC: "Yes, in any part of the statement",
      optionD: "No, subqueries cannot be used in UPDATE statements",
      correctAnswer: "optionC",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "What does the keyword 'EXISTS' do in a subquery?",
      optionA: "Checks for the existence of rows in the subquery",
      optionB: "Filters the results of the outer query",
      optionC: "Counts the number of rows returned by the subquery",
      optionD: "Used to combine results from multiple queries",
      correctAnswer: "optionA",
       explanation: "2 + 2 equals 4 because it's basic addition."
    }
  ];

  const sqlNormalizationQuestions = [
    {
      question: "What is the goal of normalization in database design?",
      optionA: "To reduce redundancy and improve data integrity",
      optionB: "To improve performance of queries",
      optionC: "To add more tables to the database",
      optionD: "To merge tables into one",
      correctAnswer: "optionA",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "What is the highest normal form for a relational database?",
      optionA: "First Normal Form (1NF)",
      optionB: "Second Normal Form (2NF)",
      optionC: "Third Normal Form (3NF)",
      optionD: "Boyce-Codd Normal Form (BCNF)",
      correctAnswer: "optionD",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "What is a key characteristic of Second Normal Form (2NF)?",
      optionA: "All non-key attributes are functionally dependent on the entire primary key",
      optionB: "No repeating groups of data in a table",
      optionC: "Elimination of transitive dependencies",
      optionD: "Data is organized in separate tables for each subject",
      correctAnswer: "optionA",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "Which of the following is a characteristic of a table in First Normal Form (1NF)?",
      optionA: "No repeating groups of columns",
      optionB: "No partial dependency",
      optionC: "No transitive dependency",
      optionD: "No null values in any attribute",
      correctAnswer: "optionA",
       explanation: "2 + 2 equals 4 because it's basic addition."
    },
    {
      question: "Which normal form is concerned with eliminating transitive dependencies?",
      optionA: "1NF",
      optionB: "2NF",
      optionC: "3NF",
      optionD: "BCNF",
      correctAnswer: "optionC",
       explanation: "2 + 2 equals 4 because it's basic addition."
    }
  ];

  const sqlChapters = {
    "Basics": sqlBasicsQuestions || [],
    "Joins": sqlJoinsQuestions || [],
    "Subqueries": sqlSubqueriesQuestions || [],
    "Normalization": sqlNormalizationQuestions || [],
  };



export const technicalTest = {
  SQL: sqlChapters,
  
};

