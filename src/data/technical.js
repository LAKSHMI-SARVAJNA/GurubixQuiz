
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

<<<<<<< HEAD
  const sqlChapters = {
    "Basics": sqlBasicsQuestions || [],
    "Joins": sqlJoinsQuestions || [],
    "Subqueries": sqlSubqueriesQuestions || [],
    "Normalization": sqlNormalizationQuestions || [],
  };



export const technicalTest = {
  SQL: sqlChapters,
  
=======
const mongoDBCRUDQuestions = [
    {
      question: "Which method is used to create a new document in a MongoDB collection?",
      optionA: "insert()",
      optionB: "create()",
      optionC: "add()",
      optionD: "save()",
      correctAnswer: "optionA"
    },
    {
      question: "What method is used to find a single document in MongoDB?",
      optionA: "find()",
      optionB: "findOne()",
      optionC: "fetch()",
      optionD: "get()",
      correctAnswer: "optionB"
    },
    {
      question: "Which MongoDB method is used to update a document?",
      optionA: "update()",
      optionB: "updateOne()",
      optionC: "set()",
      optionD: "modify()",
      correctAnswer: "optionB"
    },
    {
      question: "Which method removes a document from a collection?",
      optionA: "remove()",
      optionB: "deleteOne()",
      optionC: "drop()",
      optionD: "clear()",
      correctAnswer: "optionB"
    },
    {
      question: "How do you insert multiple documents in MongoDB?",
      optionA: "insert()",
      optionB: "insertMany()",
      optionC: "addMany()",
      optionD: "createMany()",
      correctAnswer: "optionB"
    }
  ];
  
  const mongoDBAggregationQuestions = [
    {
      question: "Which stage of the aggregation pipeline is used to filter documents?",
      optionA: "match",
      optionB: "group",
      optionC: "project",
      optionD: "sort",
      correctAnswer: "optionA"
    },
    {
      question: "Which method is used to aggregate data in MongoDB?",
      optionA: "aggregate()",
      optionB: "mapReduce()",
      optionC: "reduce()",
      optionD: "filter()",
      correctAnswer: "optionA"
    },
    {
      question: "Which aggregation stage groups data based on specific criteria?",
      optionA: "match",
      optionB: "group",
      optionC: "unwind",
      optionD: "project",
      correctAnswer: "optionB"
    },
    {
      question: "Which stage allows you to reshape documents in MongoDB aggregation?",
      optionA: "project",
      optionB: "group",
      optionC: "match",
      optionD: "sort",
      correctAnswer: "optionA"
    },
    {
      question: "In the aggregation pipeline, which stage is used to sort data?",
      optionA: "sort",
      optionB: "group",
      optionC: "match",
      optionD: "project",
      correctAnswer: "optionA"
    }
  ];

 const  mongoDBIndexesQuestions=[
    {
      question: "What is the default index in MongoDB?",
      optionA: "compound index",
      optionB: "single field index",
      optionC: "text index",
      optionD: "hashed index",
      correctAnswer: "optionB"
    },
    {
      question: "What command creates an index in MongoDB?",
      optionA: "createIndex()",
      optionB: "index()",
      optionC: "addIndex()",
      optionD: "insertIndex()",
      correctAnswer: "optionA"
    },
    {
      question: "Which of the following is NOT a type of index in MongoDB?",
      optionA: "text index",
      optionB: "geospatial index",
      optionC: "hash index",
      optionD: "datetime index",
      correctAnswer: "optionD"
    },
    {
      question: "What is the purpose of an index in MongoDB?",
      optionA: "To make queries faster",
      optionB: "To increase disk usage",
      optionC: "To maintain data consistency",
      optionD: "To perform aggregations",
      correctAnswer: "optionA"
    },
    {
      question: "Which index type is used for searching text in MongoDB?",
      optionA: "hash index",
      optionB: "text index",
      optionC: "geospatial index",
      optionD: "compound index",
      correctAnswer: "optionB"
    }
  ];

  const mongoDBDataModelingQuestions =  [
    {
      question: "What is the primary feature of MongoDB's data model?",
      optionA: "SQL-based",
      optionB: "Document-based",
      optionC: "Row-based",
      optionD: "Column-based",
      correctAnswer: "optionB"
    },
    {
      question: "Which of the following is the correct way to model relationships in MongoDB?",
      optionA: "Referencing and Embedding",
      optionB: "Foreign keys",
      optionC: "Join operations",
      optionD: "Subqueries",
      correctAnswer: "optionA"
    },
    {
      question: "Which data structure is used in MongoDB documents?",
      optionA: "Arrays",
      optionB: "Tables",
      optionC: "JSON-like objects",
      optionD: "CSV files",
      correctAnswer: "optionC"
    },
    {
      question: "How is data typically embedded in a MongoDB document?",
      optionA: "As an array",
      optionB: "As a set",
      optionC: "As a nested document",
      optionD: "As a foreign key",
      correctAnswer: "optionC"
    },
    {
      question: "In MongoDB, what is used to link data between collections?",
      optionA: "Foreign key",
      optionB: "Reference",
      optionC: "Composite key",
      optionD: "Relationship model",
      correctAnswer: "optionB"
    }
  ];

  const reactJsComponentsQuestions = [
    {
      question: "What is the default state of a functional component in React?",
      optionA: "undefined",
      optionB: "null",
      optionC: "state",
      optionD: "this.state",
      correctAnswer: "optionB"
    },
    {
      question: "Which of the following is used to pass data between React components?",
      optionA: "props",
      optionB: "state",
      optionC: "this",
      optionD: "context",
      correctAnswer: "optionA"
    },
    {
      question: "What is a 'pure' component in React?",
      optionA: "A component that doesn't re-render when the state changes",
      optionB: "A component that only renders once",
      optionC: "A component that always re-renders",
      optionD: "A component that returns the same output for the same input",
      correctAnswer: "optionD"
    },
    {
      question: "Which of the following is NOT a lifecycle method in React?",
      optionA: "componentDidMount()",
      optionB: "componentWillUnmount()",
      optionC: "render()",
      optionD: "componentWillRender()",
      correctAnswer: "optionD"
    },
    {
      question: "What does 'ReactDOM.render()' do?",
      optionA: "It adds elements to the DOM",
      optionB: "It updates the virtual DOM",
      optionC: "It updates the state of a component",
      optionD: "It removes elements from the DOM",
      correctAnswer: "optionA"
    }
  ];
  
  const reactJsStateManagementQuestions = [
    {
      question: "What hook is used to add state to a functional component?",
      optionA: "useState()",
      optionB: "useEffect()",
      optionC: "useContext()",
      optionD: "useReducer()",
      correctAnswer: "optionA"
    },
    {
      question: "Which hook is used for side-effects in React functional components?",
      optionA: "useEffect()",
      optionB: "useState()",
      optionC: "useContext()",
      optionD: "useRef()",
      correctAnswer: "optionA"
    },
    {
      question: "Which hook allows a component to subscribe to context changes in React?",
      optionA: "useState()",
      optionB: "useContext()",
      optionC: "useReducer()",
      optionD: "useEffect()",
      correctAnswer: "optionB"
    },
    {
      question: "Which of the following React hooks is used for performance optimization?",
      optionA: "useMemo()",
      optionB: "useEffect()",
      optionC: "useState()",
      optionD: "useReducer()",
      correctAnswer: "optionA"
    },
    {
      question: "How do you share state between components in React?",
      optionA: "Through props",
      optionB: "By passing state to child components",
      optionC: "By using context API",
      optionD: "All of the above",
      correctAnswer: "optionD"
    }
  ];

 const  reactJsHooksQuestions = [
    {
      question: "Which hook returns the current value of a ref object?",
      optionA: "useEffect()",
      optionB: "useState()",
      optionC: "useRef()",
      optionD: "useMemo()",
      correctAnswer: "optionC"
    },
    {
      question: "What is the purpose of the 'useCallback' hook?",
      optionA: "To memoize functions to prevent unnecessary re-renders",
      optionB: "To fetch data from an API",
      optionC: "To store values in a component's state",
      optionD: "To trigger side-effects in a component",
      correctAnswer: "optionA"
    },
    {
      question: "What does the 'useReducer' hook do in React?",
      optionA: "Manages state with a reducer function, similar to Redux",
      optionB: "Stores values in the component state",
      optionC: "Creates an effect based on component updates",
      optionD: "Optimizes performance by memoizing state values",
      correctAnswer: "optionA"
    },
    {
      question: "Which hook allows functional components to access the component's lifecycle methods?",
      optionA: "useEffect()",
      optionB: "useState()",
      optionC: "useCallback()",
      optionD: "useContext()",
      correctAnswer: "optionA"
    },
    {
      question: "Which of the following hooks is useful for managing form state?",
      optionA: "useState()",
      optionB: "useEffect()",
      optionC: "useRef()",
      optionD: "useReducer()",
      correctAnswer: "optionA"
    }
  ];

 const  reactJsLifecycleQuestions = [
    {
      question: "Which lifecycle method is called immediately after a component is mounted?",
      optionA: "componentDidMount()",
      optionB: "componentWillMount()",
      optionC: "componentDidUpdate()",
      optionD: "shouldComponentUpdate()",
      correctAnswer: "optionA"
    },
    {
      question: "Which of the following lifecycle methods is invoked before a component is removed from the DOM?",
      optionA: "componentWillUnmount()",
      optionB: "componentDidUpdate()",
      optionC: "componentWillMount()",
      optionD: "shouldComponentUpdate()",
      correctAnswer: "optionA"
    },
    {
      question: "What does the 'shouldComponentUpdate()' method return?",
      optionA: "A boolean value indicating whether the component should re-render",
      optionB: "A value indicating the new state of the component",
      optionC: "The updated props of the component",
      optionD: "A list of dependencies for the component to update",
      correctAnswer: "optionA"
    },
    {
      question: "Which lifecycle method allows you to update state after a component has re-rendered?",
      optionA: "componentDidUpdate()",
      optionB: "componentWillUpdate()",
      optionC: "componentDidMount()",
      optionD: "shouldComponentUpdate()",
      correctAnswer: "optionA"
    },
    {
      question: "What is the primary purpose of React's lifecycle methods?",
      optionA: "To manage state transitions and side-effects",
      optionB: "To directly interact with the DOM",
      optionC: "To handle user events",
      optionD: "To optimize performance in the app",
      correctAnswer: "optionA"
    }
  ];

const springCoreQuestions = [
  {
    question: "What is the purpose of the Spring Framework?",
    optionA: "To create REST APIs",
    optionB: "To simplify Java development with inversion of control",
    optionC: "To provide tools for managing databases",
    optionD: "To manage web applications",
    correctAnswer: "optionB"
  },
  {
    question: "Which annotation is used to mark a Spring configuration class?",
    optionA: "@SpringBootApplication",
    optionB: "@Configuration",
    optionC: "@Component",
    optionD: "@Bean",
    correctAnswer: "optionB"
  },
  {
    question: "Which of the following is not a module of Spring?",
    optionA: "Spring AOP",
    optionB: "Spring JDBC",
    optionC: "Spring React",
    optionD: "Spring MVC",
    correctAnswer: "optionC"
  },
  {
    question: "What is Dependency Injection in Spring?",
    optionA: "A design pattern where one object provides dependencies to another object",
    optionB: "A way to initialize objects manually",
    optionC: "An automatic way of managing Java beans",
    optionD: "None of the above",
    correctAnswer: "optionA"
  },
  {
    question: "Which of the following is the Spring annotation used to define a service layer?",
    optionA: "@Controller",
    optionB: "@Service",
    optionC: "@Component",
    optionD: "@Repository",
    correctAnswer: "optionB"
  }
];

const springBootQuestions = [
  {
    question: "What is Spring Boot's primary goal?",
    optionA: "To create stand-alone, production-grade Spring-based applications",
    optionB: "To manage configuration settings",
    optionC: "To handle database operations",
    optionD: "To simplify Java compilation",
    correctAnswer: "optionA"
  },
  {
    question: "Which file is used to configure Spring Boot application's properties?",
    optionA: "application.properties",
    optionB: "config.yaml",
    optionC: "application.yml",
    optionD: "Both A and C",
    correctAnswer: "optionD"
  },
  {
    question: "Which annotation is used to start a Spring Boot application?",
    optionA: "@SpringBootApplication",
    optionB: "@EnableAutoConfiguration",
    optionC: "@Configuration",
    optionD: "@Bean",
    correctAnswer: "optionA"
  },
  {
    question: "Which is used to expose RESTful web services in Spring Boot?",
    optionA: "Spring REST",
    optionB: "Spring WebFlux",
    optionC: "@RestController",
    optionD: "@WebService",
    correctAnswer: "optionC"
  },
  {
    question: "Spring Boot automatically configures your application based on which of the following?",
    optionA: "application.properties",
    optionB: "Classpath libraries",
    optionC: "Both A and B",
    optionD: "None of the above",
    correctAnswer: "optionC"
  }
];

const springDataAccessQuestions = [
  {
    question: "Which Spring framework provides an abstraction for database access?",
    optionA: "Spring JDBC",
    optionB: "Spring AOP",
    optionC: "Spring ORM",
    optionD: "Spring Data",
    correctAnswer: "optionD"
  },
  {
    question: "Which annotation is used to declare a Spring Data repository?",
    optionA: "@Repository",
    optionB: "@Service",
    optionC: "@Component",
    optionD: "@Transactional",
    correctAnswer: "optionA"
  },
  {
    question: "What is the purpose of Spring's JdbcTemplate?",
    optionA: "To perform query execution and handle connections",
    optionB: "To automatically configure Hibernate",
    optionC: "To manage application properties",
    optionD: "To create REST APIs",
    correctAnswer: "optionA"
  },
  {
    question: "Which Spring Data project supports repositories for NoSQL databases?",
    optionA: "Spring Data MongoDB",
    optionB: "Spring Data JPA",
    optionC: "Spring Data Neo4j",
    optionD: "Spring WebFlux",
    correctAnswer: "optionA"
  },
  {
    question: "What is the default behavior of Spring's @Transactional annotation?",
    optionA: "Starts a transaction on method entry, commits on method exit",
    optionB: "Immediately commits after the method call",
    optionC: "Disables transactions for the method",
    optionD: "Enables exception handling",
    correctAnswer: "optionA"
  }
];

const springSecurityQuestions = [
  {
    question: "Which Spring Security annotation is used for securing methods?",
    optionA: "@Secured",
    optionB: "@Authorize",
    optionC: "@Security",
    optionD: "@PreAuthorize",
    correctAnswer: "optionA"
  },
  {
    question: "What is the main purpose of Spring Security?",
    optionA: "To provide authentication and authorization services",
    optionB: "To enable email services",
    optionC: "To create logging services",
    optionD: "To manage database connections",
    correctAnswer: "optionA"
  },
  {
    question: "Which of the following Spring Security components manages user authentication?",
    optionA: "AuthenticationManager",
    optionB: "SessionFactory",
    optionC: "AuthorizationManager",
    optionD: "SecurityContextHolder",
    correctAnswer: "optionA"
  },
  {
    question: "What is the role of 'SecurityContextHolder' in Spring Security?",
    optionA: "Holds authentication and authorization information for the current thread",
    optionB: "Manages database connections",
    optionC: "Handles application-level logging",
    optionD: "Manages UI components",
    correctAnswer: "optionA"
  },
  {
    question: "What type of attack is Spring Security's CSRF protection designed to mitigate?",
    optionA: "Cross-Site Request Forgery",
    optionB: "SQL Injection",
    optionC: "Cross-Site Scripting",
    optionD: "Buffer Overflow",
    correctAnswer: "optionA"
  }
];

const nodeJsBasicsQuestions = [
  {
    question: "Which of the following is the default HTTP port for Node.js?",
    optionA: "8080",
    optionB: "3000",
    optionC: "5000",
    optionD: "9000",
    correctAnswer: "optionB"
  },
  {
    question: "Which of the following methods is used to start a Node.js server?",
    optionA: "http.createServer()",
    optionB: "fs.createServer()",
    optionC: "node.createServer()",
    optionD: "express.createServer()",
    correctAnswer: "optionA"
  },
  {
    question: "Which module in Node.js provides the functionality for HTTP?",
    optionA: "http",
    optionB: "url",
    optionC: "express",
    optionD: "axios",
    correctAnswer: "optionA"
  },
  {
    question: "Which of the following is a non-blocking I/O function in Node.js?",
    optionA: "fs.readFileSync",
    optionB: "fs.writeFileSync",
    optionC: "fs.readFile",
    optionD: "fs.createWriteStream",
    correctAnswer: "optionC"
  },
  {
    question: "What is the purpose of the 'require' function in Node.js?",
    optionA: "To import modules",
    optionB: "To start the server",
    optionC: "To handle client requests",
    optionD: "To parse JSON",
    correctAnswer: "optionA"
  }
];

const nodeJsExpressQuestions = [
  {
    question: "Which method is used to define a route in Express?",
    optionA: "app.route()",
    optionB: "app.get()",
    optionC: "app.define()",
    optionD: "app.method()",
    correctAnswer: "optionB"
  },
  {
    question: "Which middleware is used in Express for parsing JSON?",
    optionA: "bodyParser.json()",
    optionB: "express.json()",
    optionC: "express.urlencoded()",
    optionD: "express.static()",
    correctAnswer: "optionB"
  },
  {
    question: "What does the Express router handle?",
    optionA: "Request routing",
    optionB: "Data parsing",
    optionC: "Database connections",
    optionD: "File handling",
    correctAnswer: "optionA"
  },
  {
    question: "Which method is used to listen to requests on a particular port in Express?",
    optionA: "app.listen()",
    optionB: "app.serve()",
    optionC: "app.open()",
    optionD: "app.run()",
    correctAnswer: "optionA"
  },
  {
    question: "Which Express function handles HTTP requests?",
    optionA: "express.request()",
    optionB: "express.response()",
    optionC: "app.use()",
    optionD: "app.get()",
    correctAnswer: "optionD"
  }
];

const nodeJsAsyncProgrammingQuestions = [
  {
    question: "Which method is used to make a function asynchronous in Node.js?",
    optionA: "setTimeout()",
    optionB: "fs.readFile()",
    optionC: "async/await",
    optionD: "process.nextTick()",
    correctAnswer: "optionC"
  },
  {
    question: "Which of the following is true about Node.js event-driven architecture?",
    optionA: "It handles requests asynchronously using an event loop",
    optionB: "It only supports synchronous programming",
    optionC: "It blocks threads while waiting for operations",
    optionD: "It uses multithreading for parallelism",
    correctAnswer: "optionA"
  },
  {
    question: "Which function is used to handle errors in a Node.js asynchronous callback?",
    optionA: "throw",
    optionB: "next()",
    optionC: "callback(error, result)",
    optionD: "reject()",
    correctAnswer: "optionC"
  },
  {
    question: "What is the purpose of 'Promise' in Node.js?",
    optionA: "To handle asynchronous operations and their results",
    optionB: "To manage database connections",
    optionC: "To schedule tasks",
    optionD: "To block synchronous operations",
    correctAnswer: "optionA"
  },
  {
    question: "Which of the following can be used for asynchronous HTTP requests in Node.js?",
    optionA: "http.get()",
    optionB: "fs.readFile()",
    optionC: "Promise.all()",
    optionD: "setTimeout()",
    correctAnswer: "optionA"
  }
];

const nodeJsAPIsQuestions = [
  {
    question: "Which Node.js API is used to handle HTTP requests and responses?",
    optionA: "http",
    optionB: "fs",
    optionC: "express",
    optionD: "path",
    correctAnswer: "optionA"
  },
  {
    question: "Which of the following is a core module in Node.js for working with the filesystem?",
    optionA: "fs",
    optionB: "http",
    optionC: "url",
    optionD: "events",
    correctAnswer: "optionA"
  },
  {
    question: "Which Node.js method is used to send HTTP responses?",
    optionA: "response.send()",
    optionB: "response.write()",
    optionC: "response.end()",
    optionD: "response.sendFile()",
    correctAnswer: "optionC"
  },
  {
    question: "What does the 'fs' module in Node.js allow you to do?",
    optionA: "Work with files and directories",
    optionB: "Handle HTTP requests",
    optionC: "Serve static files",
    optionD: "Perform mathematical operations",
    correctAnswer: "optionA"
  },
  {
    question: "Which Node.js API provides functionality for managing streams of data?",
    optionA: "stream",
    optionB: "buffer",
    optionC: "http",
    optionD: "child_process",
    correctAnswer: "optionA"
  }
];

const djangoModelsQuestions = [
  {
    question: "Which class is used to define a Django model?",
    optionA: "Model",
    optionB: "Object",
    optionC: "View",
    optionD: "Table",
    correctAnswer: "optionA"
  },
  {
    question: "Which Django method is used to create a new object in the database?",
    optionA: "save()",
    optionB: "create()",
    optionC: "insert()",
    optionD: "new()",
    correctAnswer: "optionA"
  },
  {
    question: "What is the purpose of 'Meta' class in Django models?",
    optionA: "To define additional options for the model",
    optionB: "To manage database connections",
    optionC: "To specify model relationships",
    optionD: "To validate model data",
    correctAnswer: "optionA"
  },
  {
    question: "Which Django model field type is used for storing boolean values?",
    optionA: "BooleanField",
    optionB: "CharField",
    optionC: "IntegerField",
    optionD: "DateField",
    correctAnswer: "optionA"
  },
  {
    question: "How do you define a one-to-many relationship in Django models?",
    optionA: "ForeignKey",
    optionB: "ManyToManyField",
    optionC: "OneToOneField",
    optionD: "PrimaryKey",
    correctAnswer: "optionA"
  }
];

const djangoViewsQuestions = [
  {
    question: "Which function is used to render a response in Django?",
    optionA: "render()",
    optionB: "response()",
    optionC: "HttpResponse()",
    optionD: "render_response()",
    correctAnswer: "optionA"
  },
  {
    question: "In Django, which decorator is used to mark a view as requiring login?",
    optionA: "@login_required",
    optionB: "@user_required",
    optionC: "@authenticate",
    optionD: "@admin_only",
    correctAnswer: "optionA"
  },
  {
    question: "Which method is used to handle GET requests in Django views?",
    optionA: "get()",
    optionB: "post()",
    optionC: "put()",
    optionD: "delete()",
    correctAnswer: "optionA"
  },
  {
    question: "Which Django class is used for class-based views?",
    optionA: "View",
    optionB: "TemplateView",
    optionC: "HttpResponseView",
    optionD: "CBV",
    correctAnswer: "optionA"
  },
  {
    question: "How do you handle multiple forms in a single Django view?",
    optionA: "Use formsets",
    optionB: "Use multiple view functions",
    optionC: "Use request handling functions",
    optionD: "Use a single form and switch the method",
    correctAnswer: "optionA"
  }
];

const djangoTemplatesQuestions = [
  {
    question: "Which template tag is used to include another template inside a template in Django?",
    optionA: "{% include %}",
    optionB: "{% extend %}",
    optionC: "{% block %}",
    optionD: "{% import %}",
    correctAnswer: "optionA"
  },
  {
    question: "What is the purpose of the {% block %} tag in Django templates?",
    optionA: "To define sections of code that can be overridden in child templates",
    optionB: "To include reusable template content",
    optionC: "To handle static files",
    optionD: "To render data passed from the view",
    correctAnswer: "optionA"
  },
  {
    question: "Which Django template tag is used to loop through a list or dictionary?",
    optionA: "{% for %}",
    optionB: "{% loop %}",
    optionC: "{% each %}",
    optionD: "{% iterate %}",
    correctAnswer: "optionA"
  },
  {
    question: "What is the correct syntax to output a variable in Django templates?",
    optionA: "{{ variable_name }}",
    optionB: "{% variable_name %}",
    optionC: "[[ variable_name ]]",
    optionD: "<%= variable_name %>",
    correctAnswer: "optionA"
  },
  {
    question: "Which tag is used for conditional statements in Django templates?",
    optionA: "{% if %}",
    optionB: "{% when %}",
    optionC: "{% choose %}",
    optionD: "{% condition %}",
    correctAnswer: "optionA"
  }
];

const djangoAdminQuestions = [
  {
    question: "Which Django class is used to register models in the admin panel?",
    optionA: "ModelAdmin",
    optionB: "Admin",
    optionC: "AdminSite",
    optionD: "Register",
    correctAnswer: "optionA"
  },
  {
    question: "Which method is used to customize the display of a model in Django Admin?",
    optionA: "list_display",
    optionB: "admin_display",
    optionC: "model_display",
    optionD: "list_view",
    correctAnswer: "optionA"
  },
  {
    question: "How do you make a model searchable in the Django admin interface?",
    optionA: "Use the search_fields attribute",
    optionB: "Use the search_bar attribute",
    optionC: "Use the filter_fields attribute",
    optionD: "Use the admin_search attribute",
    correctAnswer: "optionA"
  },
  {
    question: "Which Django method allows you to customize the form used in the admin panel for a model?",
    optionA: "form",
    optionB: "formfield_overrides",
    optionC: "admin_form",
    optionD: "model_form",
    correctAnswer: "optionA"
  },
  {
    question: "Which field type in Django Admin allows you to add a filter sidebar?",
    optionA: "list_filter",
    optionB: "search_fields",
    optionC: "date_hierarchy",
    optionD: "filter_sidebar",
    correctAnswer: "optionA"
  }
];


export const technicalTest = {
  SQL: {
    "Basics": sqlBasicsQuestions || [],
    "Joins": sqlJoinsQuestions || [],
    "Subqueries": sqlSubqueriesQuestions || [],
    "Normalization": sqlNormalizationQuestions || [],
  },
  MongoDB:   {
    "CRUD": mongoDBCRUDQuestions || [],
    "Aggregation": mongoDBAggregationQuestions || [],
    "Indexes": mongoDBIndexesQuestions || [],
    "DataModeling": mongoDBDataModelingQuestions || [],
  },
  ReactJs: 
  {
    "Components": reactJsComponentsQuestions || [],
    "StateManagement": reactJsStateManagementQuestions || [],
    "Hooks": reactJsHooksQuestions || [],
    "Lifecycle": reactJsLifecycleQuestions || [],
  },
  Spring:  {
    "Core": springCoreQuestions || [],
    "SpringBoot": springBootQuestions || [],
    "DataAccess": springDataAccessQuestions || [],
    "Security": springSecurityQuestions || [],
  },
  NodeJs: {
    "Basics": nodeJsBasicsQuestions || [],
    "Express": nodeJsExpressQuestions || [],
    "AsynchronousProgramming": nodeJsAsyncProgrammingQuestions || [],
    "APIs": nodeJsAPIsQuestions || [],
  },
  Django: {
    "Models": djangoModelsQuestions || [],
    "Views": djangoViewsQuestions || [],
    "Templates": djangoTemplatesQuestions || [],
    "Admin": djangoAdminQuestions || [],
  }
>>>>>>> 0f1ffe53e9b997b83ccd3abb58a9c76de15c12a1
};

