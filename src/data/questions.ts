export interface Question {
  id: number;
  question: string;
  options: string[];
  correctOptionIndex: number;
  coding?: string;
  isQuestionContainsCoding?: boolean;
}

export const questions: Question[] = [
  {
    id: 1,
    question:
      "A ___________ does not keep track of address of every element in the list.",
    options: ["Stack", "String", "Linear Array", "Queue"],
    correctOptionIndex: 2,
  },
  {
    id: 2,
    question:
      "A binary search tree whose left subtree and right subtree differ in hight by at most 1 unit is called _________.",
    options: ["AVL tree", "Red Black tree", "B trees", "Spanning trees"],
    correctOptionIndex: 0,
  },
  {
    id: 3,
    question: "A linked-list is a ________ structure.",
    options: ["Static", "Array of", "Dynamic", "Fixed"],
    correctOptionIndex: 2,
  },
  {
    id: 4,
    question:
      "Aposterior analysis are more accurate than apriori analysis because - ",
    options: [
      "It contains the real data",
      "It assumes all other factors to be dynamic",
      "It assumes all other factors to be constant",
      "It is a result of reverse-engineering",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 5,
    question: "Arrays are best data structures _________.",
    options: [
      "For relatively permanent collections of data",
      "For the size of the structure and the data in the structure and the data in the structure are constantly changing",
      "For both of above situation",
      "For none of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 6,
    question:
      "If the array is already sorted, which of these algorithms will exhibit the best performance.",
    options: ["Merge Sort", "Insertion Sort", "Quick Sort", "Heap Sort"],
    correctOptionIndex: 1,
  },
  {
    id: 7,
    question:
      "Inserting an item into the stack when stack is not full is called _______ operation and deletion of item form the stack, when stack is not empty is called _________ operation.",
    options: [
      "Push and Pop",
      "Pop and Push",
      "Insert and Delete",
      "Delete and Insert",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 8,
    question: "Minimum number of spanning tree in a connected graph is ______.",
    options: ["0", "n", "2n", "1"],
    correctOptionIndex: 3,
  },
  {
    id: 9,
    question: "Shell sort uses",
    options: ["Insertion Sort", "Quick Sort", "Merge Sort", "Selection Sort"],
    correctOptionIndex: 0,
  },
  {
    id: 10,
    question:
      "The logical or mathematical model of a particular organization of data is called a ______.",
    options: [
      "Data Structure",
      "Data Configuration",
      "Data arrangement",
      "Data formation",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 11,
    question:
      "What will be the running-time of Dijkstra's single source shortest path algorithm, if the graph G(V,E) is stored in form of adjacency list and binary heap is used -",
    options: [
      "O(|V|2)",
      "O (|V| log |V|)",
      "O (|E|+|V| log |V|)",
      "None of these",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 12,
    question: "When does top value of the stack changes?",
    options: [
      "Before deletion",
      "After deletion",
      "While checking for underflow",
      "At the time of deletion",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 13,
    question:
      "Which if the following is/are the levels of implementation of data structure",
    options: [
      "Abstract level",
      "Application level",
      "Implementation level",
      "All of the above",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 14,
    question: "Which of the following is not the part of ADT description?",
    options: ["Data", "Operations", "Both A and B", "None of A and B"],
    correctOptionIndex: 3,
  },
  {
    id: 15,
    question:
      "Which of the following is true about the characteristics of abstract data types? \nA. It exports a set of operations \nB. It exports a type.",
    options: [
      "A is true, B is true",
      "A is true and B is false",
      "A is false and B is true",
      "A is false and B is false",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 16,
    question:
      "Which of the following algorithm cannot be designed without recursion -",
    options: [
      "Tower of Hanoi",
      "Fibonacci Series",
      "Tree Traversal",
      "Polynomial Evaluation",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 17,
    question: "Which of the following has search efficiency of O(1) -",
    options: ["Tree", "Heap", "Hash Table", "Linked List"],
    correctOptionIndex: 3,
  },
  {
    id: 18,
    question:
      "_______ is very useful in situation when data have to stored and then retrieved in reverse order.",
    options: ["Stack", "Queue", "Single Linked List", "Doubly Linked List"],
    correctOptionIndex: 0,
  },
  {
    id: 19,
    question: "_______ is not the component of data structure.",
    options: [
      "Operations",
      "Storage Structures",
      "Algorithms",
      "None of the above",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 20,
    question:
      "_______ is a pile in which items are added at one end and removed from the other.",
    options: ["Stack", "Queue", "Single Linked List", "Double Linked List"],
    correctOptionIndex: 1,
  },
  {
    id: 21,
    question:
      "_______ level is where the model becomes compatible executable code.",
    options: [
      "Abstract level",
      "Application Level",
      "Implementation Level",
      "Interprating Level",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 22,
    question: "In order traversal of binary search tree will produce -",
    options: [
      "unsorted list",
      "reverse of input",
      "sorted list",
      "none of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 23,
    question:
      "What data structure can be used to check if a syntax has balanced paranthesis ?",
    options: ["Queue", "Stack", "Tree", "List"],
    correctOptionIndex: 1,
  },
  {
    id: 24,
    question: "Which of the following data structures are indexed structures?",
    options: ["Linear arrays", "Linked Lists", "Graphs", "Trees"],
    correctOptionIndex: 0,
  },
  {
    id: 25,
    question:
      "A graphical display of the fundamental products in a truth-table is known as",
    options: ["Mapping", "Graphing", "T-Map", "K-Map"],
    correctOptionIndex: 3,
  },
  {
    id: 26,
    question:
      "The minimum number of NAND gates required to implement the Boolean function. A + AB' + AB'C is equal to",
    options: ["Zero", "1", "4", "7"],
    correctOptionIndex: 0,
  },
  {
    id: 27,
    question: "Which of the following logic expression is incorrect?",
    options: ["1 ⊕ 0 = 1", "1 ⊕ 1 ⊕ 1 = 1", "1 ⊕ 1 = 0", "1 ⊕ 1 ⊕ 0 =1"],
    correctOptionIndex: 3,
  },
  {
    id: 28,
    question: "How many illegitimate states has synchronous mod-6 counter?",
    options: ["3", "2", "1", "6"],
    correctOptionIndex: 0,
  },
  {
    id: 29,
    question: "To build a mod-19 counter the number of flip-flops required is",
    options: ["3", "5", "7", "9"],
    correctOptionIndex: 1,
  },
  {
    id: 30,
    question: "Mod-6 and Mod-12 counters are most commonly used in",
    options: [
      "frequency counters",
      "multiplexed displays",
      "digital clocks",
      "power consumption meters",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 31,
    question: "X=1010100 and Y=1000011 using 1's complement Y-X is",
    options: ["-10111", "-10011", "-10001", "-11001"],
    correctOptionIndex: 2,
  },
  {
    id: 32,
    question:
      "A ________ in a table represents a relationship among a set of values.",
    options: ["Column", "Key", "Row", "Entry"],
    correctOptionIndex: 2,
  },
  {
    id: 33,
    question:
      "A domain is atomic if elements of the domain are considered to be ____________ units.",
    options: ["Different", "Indivisbile", "Constant", "Divisible"],
    correctOptionIndex: 1,
  },
  {
    id: 34,
    question:
      "Database _______,which is a snapshot of the data in the database at a given instant in time.",
    options: ["Schema", "Domain", "Instance", "Relation"],
    correctOptionIndex: 2,
  },
  {
    id: 35,
    question:
      "Database __________ , which is the logical design of the database.",
    options: ["Instance", "Schema", "Relation", "Domain"],
    correctOptionIndex: 1,
  },
  {
    id: 36,
    question:
      "For each attribute of a relation, there is a set of permitted values, called the ________ of that attribute.",
    options: ["Domain", "Relation", "Set", "Schema"],
    correctOptionIndex: 0,
  },
  {
    id: 37,
    question: "The term _______ is used to refer to a row.",
    options: ["Attribute", "Tuple", "Field", "Instance"],
    correctOptionIndex: 1,
  },
  {
    id: 38,
    question: "The tuples of the relations can be of ________ order.",
    options: ["Any", "Same", "Sorted", "Constant"],
    correctOptionIndex: 0,
  },
  {
    id: 39,
    question: "A relational database consists of a collection of",
    options: ["Tables", "Fields", "Records", "Keys"],
    correctOptionIndex: 0,
  },
  {
    id: 40,
    question:
      "A _____ is a property of the entire relation, rather than of the individual tuples in which each tuple is unique.",
    options: ["Rows", "Key", "Attribute", "Fields"],
    correctOptionIndex: 1,
  },
  {
    id: 41,
    question:
      "A _________ integrity constraint requires that the values appearing in specified attributes of any tuple in the referencing relation also appear in specified attributes of at least one tuple in the referenced relation.",
    options: ["Referential", "Referencing", "Specific", "Primary"],
    correctOptionIndex: 0,
  },
  {
    id: 42,
    question:
      "A attribute in a relation is a foreign key if the _______ key from one relation is used as an attribute in that relation.",
    options: ["Candidate", "Primary", "Super", "Sub"],
    correctOptionIndex: 2,
  },
  {
    id: 43,
    question:
      "A table on the many side of a one to many or many to many relationship must:",
    options: [
      "Be in Second Normal Form (2NF)",
      "Be in Third Normal Form (3NF)",
      "Have a single attribute key",
      "Have a composite key",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 44,
    question:
      "Consider attributes ID, CITY and NAME. Which one of this can be considered as a super key ?",
    options: ["NAME", "ID", "CITY", "none of the above"],
    correctOptionIndex: 1,
  },
  {
    id: 45,
    question:
      "Functional Dependencies are the types of constraints that are based on ______",
    options: ["Key", "Key revisited", "Superset key", "None of these"],
    correctOptionIndex: 0,
  },
  {
    id: 46,
    question:
      "In a relation between the entities the type and condition of the relation should be specified . That is called as ______ attribute.",
    options: ["Descriptive", "Derived", "Recursive", "Relative"],
    correctOptionIndex: 0,
  },
  {
    id: 47,
    question:
      "Not applicable condition can be represented in relation entry as",
    options: ["NA", "0", "NULL", "Blank Space"],
    correctOptionIndex: 2,
  },
  {
    id: 48,
    question: "Tables in second normal form (2NF):",
    options: [
      "Eliminate all hidden dependencies",
      "Eliminate the possibility of a insertion anomalies",
      "Have a composite key",
      "Have all non key fields depend on the whole primary key",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 49,
    question:
      "The ______ is the one in which the primary key of one relation is used as a normal attribute in another relation.",
    options: [
      "Referential relation",
      "Referencing relation",
      "Referenced relation",
      "Referred relation",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 50,
    question:
      "The attribute AGE is calculated from DATE_OF_BIRTH. The attribute AGE is _________________.",
    options: ["Single valued", "Multi valued", "Stored", "Derived"],
    correctOptionIndex: 3,
  },
  {
    id: 51,
    question:
      "The attribute name could be structured as a attribute consisting of first name, middle initial, and last name . This type of attribute is called _______________.",
    options: [
      "Simple attribute",
      "Composite attribute",
      "Multivalued attribute",
      "Derived attribute",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 52,
    question:
      "The descriptive property possessed by each entity set is _________.",
    options: ["Entity", "Attribute", "Relation", "Model"],
    correctOptionIndex: 1,
  },
  {
    id: 53,
    question:
      "The function that an entity plays in a relationship is called that entity's _____________.",
    options: ["Participation", "Position", "Role", "Instance"],
    correctOptionIndex: 2,
  },
  {
    id: 54,
    question:
      "The relation with the attribute which is the primary key is referenced in another relation. The relation which has the attribute as primary key is called",
    options: [
      "Referential relation",
      "Referencing relation",
      "Referenced relation",
      "Referred relation",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 55,
    question:
      "Which forms simplifies and ensures that there is minimal data aggregates and repetitive groups:",
    options: ["1NF", "2NF", "3NF", "4NF"],
    correctOptionIndex: 1,
  },
  {
    id: 56,
    question: "Which of the following is a single valued attribute",
    options: ["Register_number", "Address", "SUBJECT_TAKEN", "Reference"],
    correctOptionIndex: 0,
  },
  {
    id: 57,
    question:
      "An ________ is a set of entities of the same type that share the same properties, or attributes.",
    options: ["Entity set", "Attribute set", "Relation set", "Entity model"],
    correctOptionIndex: 0,
  },
  {
    id: 58,
    question: "Entity is a ______________.",
    options: [
      "Object of relation",
      "Present working model",
      "Thing in real world",
      "Model of relation",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 59,
    question:
      "Which is a bottom-up approach to database design that design by examining the relationship between attributes:",
    options: [
      "Functional dependency",
      "Database modeling",
      "Normalization",
      "Decomposition",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 60,
    question: "Which of the following can be a multivalued attribute ?",
    options: [
      "Phone_number",
      "Register Number",
      "Date_of_birth",
      "All of the mentioned",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 61,
    question:
      "Which one of the following is a set of one or more attributes taken collectively to uniquely identify a record?",
    options: ["Candidate key", "Sub key", "Super key", "Foreign key"],
    correctOptionIndex: 2,
  },
  {
    id: 62,
    question: "The term attribute refers to a ___________ of a table.",
    options: ["Record", "Column", "Tuple", "Key"],
    correctOptionIndex: 1,
  },
  {
    id: 63,
    question:
      "Empdt1(empcode, name, street, city, state, pincode). For any pincode, there is only one city and state. Also, for given street, city and state, there is just one pincode. In normalization terms, empdt1 is a relation in",
    options: [
      "1 NF only",
      "2 NF and hence also in 1 NF",
      "3NF and hence also in 2NF and 1NF",
      "BCNF and hence also in 3NF, 2NF and 1NF",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 64,
    question:
      "In the __________ normal form, a composite attribute is converted to individual attributes.",
    options: ["First", "Second", "Third", "Fourth"],
    correctOptionIndex: 2,
  },
  {
    id: 65,
    question:
      "The subset of super key is a candidate key under what condition ?",
    options: [
      "No proper subset is a super key",
      "All subsets are super keys",
      "Subset is a super key",
      "Each subset is a super key",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 66,
    question: "_____ users work on canned transactions",
    options: ["sophisticated", "naïve", "DBA", "casual"],
    correctOptionIndex: 1,
  },
  {
    id: 67,
    question: "_____ is the deadlock free lock",
    options: ["Conservative 2PL", "Basic 2PL", "Rigorous 2PL", "Strict 2PL"],
    correctOptionIndex: 0,
  },
  {
    id: 68,
    question:
      "_____ is the first schema to be designed when you are developing a DBMS",
    options: ["conceptual", "relational", "physical", "hierarchical"],
    correctOptionIndex: 0,
  },
  {
    id: 69,
    question: "Which of this is not a implementation data model",
    options: ["UML", "Relational", "Hierarchical", "network"],
    correctOptionIndex: 3,
  },
  {
    id: 70,
    question: "DBMS cannot be classified on",
    options: [
      "Data model",
      "Number of sites",
      "Number of users",
      "Concurrency level",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 71,
    question:
      "The ______________ checks the query syntax to determine whether it is formulated according to the syntax rules of the query language.",
    options: ["Scanner", "Parser", "Validation", "Query tree"],
    correctOptionIndex: 1,
  },
  {
    id: 72,
    question:
      "When transaction Ti requests a data item currently held by Tj, Ti is allowed to wait only if it has a timestamp larger than that of Tj (that is, Ti is younger than Tj ). Otherwise, Tj is rolled back (Tj is wounded by Ti ). This is",
    options: ["Wait-die", "Wait-wound", "Wound-wait", "Wait"],
    correctOptionIndex: 2,
  },
  {
    id: 73,
    question:
      "__________ rollback requires the system to maintain additional information about the state of all the running transactions.",
    options: ["Total", "Partial", "Time", "Commit"],
    correctOptionIndex: 1,
  },
  {
    id: 74,
    question:
      "A deadlock exists in the system if and only if the wait-for graph contains a ___________.",
    options: ["Cycle", "Direction", "Bi-direction", "Rotation"],
    correctOptionIndex: 0,
  },
  {
    id: 75,
    question:
      "A lock that allows concurrent transactions to access different rows of the same table is known as a",
    options: [
      "Database-level lock",
      "Table-level lock",
      "Page-level lock",
      "Row-level lock",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 76,
    question: "A primary key is combined with a foreign key creates",
    options: [
      "Parent-Child relation ship between the tables that connect them",
      "Many to many relationship between the tables that connect them",
      "Network model between the tables that connect them",
      "None of the mentioned",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 77,
    question:
      "A system is in a ______ state if there exists a set of transactions such that every transaction in the set is waiting for another transaction in the set.",
    options: ["Idle", "Waiting", "Deadlock", "Ready"],
    correctOptionIndex: 2,
  },
  {
    id: 78,
    question: "A window into a portion of a database is",
    options: ["Schema", "View", "Query", "Data dictionary"],
    correctOptionIndex: 1,
  },
  {
    id: 79,
    question:
      "All lock information is managed by a ____, which is responsible for assigning and policing the locks used by the transactions.",
    options: ["Scheduler", "DBMS", "Lock manager", "Locking agent"],
    correctOptionIndex: 2,
  },
  {
    id: 80,
    question:
      "An entity set that does not have sufficient attributes to form a primary key is termed a __________ .",
    options: [
      "Strong entity set",
      "Variant set",
      "Weak entity set",
      "Variable set",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 81,
    question:
      "Consider a directed line(->) from the relationship set advisor to both entity sets instructor and student. This indicates _________ cardinality.",
    options: ["One to many", "One to one", "Many to many", "Many to one"],
    correctOptionIndex: 1,
  },
  {
    id: 82,
    question:
      "For a weak entity set to be meaningful, it must be associated with another entity set, called the",
    options: [
      "Identifying set",
      "Owner set",
      "Neighbour set",
      "Strong entity set",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 83,
    question:
      "Given the basic ER and relational models, which of the following is INCORRECT?",
    options: [
      "An attribute of an entity can have more than one value",
      "An attribute of an entity can be composite",
      "In a row of a relational table, an attribute can have more than one value",
      "In a row of a relational table, an attribute can have exactly one value or a NULL value",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 84,
    question:
      "If transaction Ti gets an explicit lock on the file Fc in exclusive mode, then it has an __________ on all the records belonging to that file.",
    options: [
      "Explicit lock in exclusive mode",
      "Implicit lock in shared mode",
      "Explicit lock in shared mode",
      "Implicit lock in exclusive mode",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 85,
    question:
      "If you were collecting and storing information about your music collection, an album would be considered a(n) _____.",
    options: ["Relation", "Entity", "Instance", "Attribute"],
    correctOptionIndex: 1,
  },
  {
    id: 86,
    question: "Key to represent relationship between tables is called",
    options: [
      "Primary key",
      "Secondary Key",
      "Foreign Key",
      "None of the mentioned",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 87,
    question: "The deadlock in a set of transaction can be determined by",
    options: [
      "Read-only graph",
      "Wait graph",
      "Wait-for graph",
      "All of the mentioned",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 88,
    question:
      "The deadlock state can be changed back to stable state by using _____________ statement.",
    options: ["Commit", "Rollback", "Savepoint", "Deadlockd"],
    correctOptionIndex: 1,
  },
  {
    id: 89,
    question: "The entity relationship set is represented in E-R diagram as",
    options: [
      "Double diamonds",
      "Undivided rectangles",
      "Dashed lines",
      "Diamond",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 90,
    question: "The Rectangles divided into two parts represents",
    options: [
      "Entity set",
      "Relationship set",
      "Attributes of a relationship set",
      "Primary key",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 91,
    question:
      "The situation where the lock waits only for a specified amount of time for another lock to be released is",
    options: ["Lock timeout", "Wait-wound", "Timeout", "Wait"],
    correctOptionIndex: 0,
  },
  {
    id: 92,
    question:
      "We indicate roles in E-R diagrams by labeling the lines that connect ___________ to __________.",
    options: [
      "Diamond , diamond",
      "Rectangle, diamond",
      "Rectangle, rectangle",
      "Diamond, rectangle",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 93,
    question: "Weak entity set is represented as",
    options: ["Underline", "Double line", "Double diamond", "Double rectangle"],
    correctOptionIndex: 3,
  },
  {
    id: 94,
    question: "What are the ways of dealing with deadlock ? ",
    options: [
      "Deadlock prevention",
      "Deadlock recovery",
      "Deadlock detection",
      "All of the mentioned",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 95,
    question:
      "What is a relationship called when it is maintained between two entities?",
    options: ["Unary", "Binary", "Ternary", "Quaternary"],
    correctOptionIndex: 1,
  },
  {
    id: 96,
    question:
      "What term is used to refer to a specific record in your music database; for instance; information stored about a specific album?",
    options: ["Relation", "Instance", "Table", "Column"],
    correctOptionIndex: 1,
  },
  {
    id: 97,
    question:
      "When transaction Ti requests a data item currently held by Tj, Ti is allowed to wait only if it has a timestamp smaller than that of Tj (that is, Ti is older than Tj ). Otherwise, Ti is rolled back (dies). This is",
    options: ["Wait-die", "Wait-wound", "Wound-wait", "Wait"],
    correctOptionIndex: 0,
  },
  {
    id: 98,
    question:
      "Which of the following are introduced to reduce the overheads caused by the log-based recovery?",
    options: ["Checkpoints", "Indices", "Deadlocks", "Locks"],
    correctOptionIndex: 0,
  },
  {
    id: 99,
    question:
      "Which of the following indicates the maximum number of entities that can be involved in a relationship?",
    options: [
      "Minimum cardinality",
      "Maximum cardinality",
      "ERD",
      "Greater Entity Count",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 100,
    question:
      "Which of the following is a procedure for acquiring the necessary locks for a transaction where all necessary locks are acquired before any are released?",
    options: [
      "Record controller",
      "Exclusive lock",
      "Authorization rule",
      "Two phase lock",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 101,
    question:
      "Which of the following protocols ensures conflict serializability and safety from deadlocks?",
    options: [
      "Two-phase locking protocol",
      "Time-stamp ordering protocol",
      "Graph based protocol",
      "Node based protocol",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 102,
    question:
      "Which refers to a property of computer to run several operations simultaneously and possible as computers await response of each other?",
    options: ["Concurrency", "Deadlock", "Backup", "Recovery"],
    correctOptionIndex: 0,
  },
  {
    id: 103,
    question:
      "Which of the following gives a logical structure of the database graphically?",
    options: [
      "Entity-relationship diagram",
      "Entity diagram",
      "Database diagram",
      "Architectural representation",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 104,
    question:
      "Which of the following is the block that is not permitted to be written back to the disk?",
    options: ["Dead code", "Read only", "Pinned", "Zapped"],
    correctOptionIndex: 2,
  },
  {
    id: 105,
    question:
      "_____ means that data used during the execution of a transaction cannot be used by a second transaction until the first one is completed.",
    options: ["Serializability", "Atomicity", "Isolation", "Time stamping"],
    correctOptionIndex: 2,
  },
  {
    id: 106,
    question:
      "DBMS periodically suspends all processing and synchronizes its files and journals through the use of",
    options: [
      "Checkpoint facility",
      "Backup facility",
      "Recovery manager",
      "Database change log",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 107,
    question:
      "Each modification done in database transaction are first recorded into the",
    options: ["Harddrive", "Log", "Disk", "Datamart"],
    correctOptionIndex: 1,
  },
  {
    id: 108,
    question:
      "If a transaction is performed in a database and committed, the changes are taken to the previous state of transaction by",
    options: ["Flashback", "Rollback", "Redo", "Cannot be done"],
    correctOptionIndex: 3,
  },
  {
    id: 109,
    question:
      "If the state of the database no longer reflects a real state of the world that the database is supposed to capture, then such a state is called",
    options: [
      "Consistent state",
      "Parallel state",
      "Atomic state",
      "Inconsistent state",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 110,
    question:
      "The name of the transaction file shall be provided by the operator and the file that contains the edited transactions ready for execution shall be called",
    options: ["Batch.Exe", "Trans.Exe", "Opt.Exe", "Edit.Exe"],
    correctOptionIndex: 2,
  },
  {
    id: 111,
    question:
      "When the transaction finishes the final statement the transaction enters into",
    options: [
      "Active state",
      "Committed state",
      "Partially committed state",
      "Abort state",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 112,
    question:
      "Which of the following is an atomic sequence of database actions?",
    options: ["Transaction", "Concurrency", "Relations", "Reliability"],
    correctOptionIndex: 0,
  },
  {
    id: 113,
    question: "Which of the following is not a state in transaction?",
    options: ["Active", "Terminated", "Aborted", "Partially committed"],
    correctOptionIndex: 1,
  },
  {
    id: 114,
    question:
      "A transaction may not always complete its execution successfully. Such a transaction is termed",
    options: ["Aborted", "Terminated", "Closed", "All of the mentioned"],
    correctOptionIndex: 0,
  },
  {
    id: 115,
    question:
      "In order to maintain transactional integrity and database consistency, what technology does a DBMS deploy?",
    options: ["Triggers", "Pointers", "Locks", "Cursors"],
    correctOptionIndex: 2,
  },
  {
    id: 116,
    question:
      "Let us consider phone_number, which can take single or several values. Treating phone_numbers permits instructors to have several phone numbers (including zero) associated with them.",
    options: ["Entity", "Attribute", "Relation", "Value"],
    correctOptionIndex: 0,
  },
  {
    id: 117,
    question:
      "The total participation by entities is represented in E-R diagram as",
    options: ["Dashed line", "Double line", "Double rectangle", "Circle"],
    correctOptionIndex: 1,
  },
  {
    id: 118,
    question:
      "If memory access takes 20 ns with cache and 110 ns without it, then the ratio (cache uses a 10 ns memory) is ____.",
    options: ["93%", "90%", "88%", "83%"],
    correctOptionIndex: 1,
  },
  {
    id: 119,
    question:
      "In a memory-mapped I/O system, which of the following will not be there?",
    options: ["LDA", "IN", "OUT", "ADD"],
    correctOptionIndex: 0,
  },
  {
    id: 120,
    question:
      "Suppose that a bus has 16 data lines and requires 4 cycles of 250 nsecs each to transfer data. The bandwidth of this bus would be 2 Megabytes/sec. If the cycle time of the bus was reduced to 125 nsecs and the number of cycles required for transfer stayed the same what would the bandwidth of the bus?",
    options: [
      "1 Megabyte/sec",
      "2 Megabyte/sec",
      "3 Megabyte/sec",
      "4 Megabyte/sec",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 121,
    question:
      "The average time required to reach a storage location in memory and obtain its contents is called ____.",
    options: [
      "Latency time",
      "Access time",
      "Turnaround time",
      "Response time",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 122,
    question: "The circuit used to store one bit of data is known as ____.",
    options: ["Register", "Encoder", "Decoder", "Flipflop"],
    correctOptionIndex: 3,
  },
  {
    id: 123,
    question:
      "The load instruction is mostly used to designate a transfer from memory to a processor register known as ____.",
    options: [
      "Accumulator",
      "Instruction Register",
      "Program counter",
      "Memory address Register",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 124,
    question:
      "The multiplicand register & multiplier register of a hardware circuit implementing Booth's algorithm have (11101) & (1100). The result shall be ____.",
    options: ["(812)10", "(-812)10", "(-12)10", "(12)10"],
    correctOptionIndex: 0,
  },
  {
    id: 125,
    question: "The time interval between adjacent bits is called the ____.",
    options: ["Word-time", "Bit-time", "Turn around time", "Slice time"],
    correctOptionIndex: 1,
  },
  {
    id: 126,
    question: "(2FA0C)16 is equivalent to ____.",
    options: [
      "(195 084)10",
      "(001011111010 00001100)2",
      "(011011011011 00001100)2",
      "None of these",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 127,
    question:
      "_____ register keeps track of the instructions stored in program stored in memory.",
    options: [
      "Address Register",
      "Data Register",
      "Program counter",
      "Accumulator",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 128,
    question:
      "A group of bits that tell the computer to perform a specific operation is known as ____.",
    options: ["Instruction code", "Micro-operation", "Accumulator", "Register"],
    correctOptionIndex: 0,
  },
  {
    id: 129,
    question: "A k-bit field can specify any one of ____.",
    options: ["3k registers", "2k registers", "k2 registers", "k3 registers"],
    correctOptionIndex: 1,
  },
  {
    id: 130,
    question: "Cache memory works on the principle of ____.",
    options: [
      "Locality of data",
      "Locality of memory",
      "Locality of reference",
      "Locality of reference and memory",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 131,
    question: "Computers use addressing mode techniques for",
    options: [
      "giving programming versatility to the user by providing facilities as pointers to memory counters for loop control",
      "to reduce no. of bits in the field of instruction",
      "specifying rules for modifying or interpreting address field of the instruction",
      "All the above",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 132,
    question:
      "In a microprocessor system, the RST instruction will cause an interrupt",
    options: [
      "only if an interrupt service routine is being executed",
      "only if a bit in the interrupt mask is made 0",
      "only if interrupts have been enabled by an EI instruction",
      "None of these",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 133,
    question: "In a vectored interrupt,",
    options: [
      "the branch address is assigned to a fixed location in memory",
      "the interrupting source supplies the branch information to the processor through an interrupt vector",
      "the branch address is obtained from a register in the processor",
      "None of the above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 134,
    question: "In Reverse Polish notation, expression A*B+C*D is written as",
    options: ["AB*CD*+", "A*BCD*+", "AB*C*D+", "AB*+CD*"],
    correctOptionIndex: 0,
  },
  {
    id: 135,
    question: "Memory unit accessed by content is called",
    options: [
      "Read only memory",
      "Programmable Memory",
      "Virtual Memory",
      "Associative Memory",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 136,
    question:
      "Microprocessor 8085 is the enhanced version of ______ with essentially the same construction set",
    options: ["8080", "8088", "8800", "6800"],
    correctOptionIndex: 0,
  },
  {
    id: 137,
    question: "MIMD stands for _____.",
    options: [
      "Multiple instruction multiple data",
      "Multiple instruction memory data",
      "Memory instruction multiple data",
      "Multiple information memory data",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 138,
    question:
      "Microprocessor 8085 is the enhanced version of ______ with essentially the same construction set",
    options: ["8080", "8088", "8800", "6800"],
    correctOptionIndex: 0,
  },
  {
    id: 139,
    question:
      "n bits in operation code imply that there are ___________possible distinct",
    options: ["n^2", "2n", "2^n", "n2"],
    correctOptionIndex: 1,
  },
  {
    id: 140,
    question:
      "Number of machine cycles required for RET instruction in 8085 microprocessor is",
    options: ["1", "2", "3", "4"],
    correctOptionIndex: 2,
  },
  {
    id: 141,
    question: "PSW is saved in stack when there is a _____.",
    options: [
      "interrupt recognized",
      "execution of RST instruction",
      "Execution of CALL instruction",
      "All of these",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 142,
    question:
      "The addressing mode used in an instruction of the form ADD X Y, is _____.",
    options: ["Absolute", "Indirect", "indexed", "base addressed"],
    correctOptionIndex: 0,
  },
  {
    id: 143,
    question:
      "The amount of time required to read a block of data from a disk into memory is composed of seek time, rotational latency, and transfer time. Rotational latency refers to ______.",
    options: [
      "the time takes for the platter to make a full rotation",
      "the time it takes for the read-write head to move into position over the appropriate track",
      "the time it takes for the platter to rotate the correct sector under the head",
      "none of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 144,
    question:
      "The average time required to reach a storage location in memory and obtain its contents is called the _____.",
    options: ["seek time", "turn around time", "access time", "transfer time"],
    correctOptionIndex: 2,
  },
  {
    id: 145,
    question: "The circuit converting binary data in to decimal is_____.",
    options: ["Encoder", "Decoder", "Muitiplexer", "Code converter"],
    correctOptionIndex: 3,
  },
  {
    id: 146,
    question: "To put the microprocessor in the wait state",
    options: [
      "lower the HOLD input",
      "lower the READY input",
      "raise the HOLD input",
      "None of these",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 147,
    question: "Translation from symbolic program into Binary is done in_____.",
    options: ["Two passes", "Three passes", "Four passes", "Five passes"],
    correctOptionIndex: 0,
  },
  {
    id: 148,
    question: "Von Neumann architecture is ______.",
    options: ["SISD", "SIMD", "MISD", "MIMD"],
    correctOptionIndex: 0,
  },
  {
    id: 149,
    question:
      "What characteristic of RAM memory makes it not suitable for permanent storage?",
    options: ["too slow", "unreliable", "it is volatile", "too bulky"],
    correctOptionIndex: 2,
  },
  {
    id: 150,
    question: "Which of the following is not a weighted code?",
    options: [
      "Decimal Number system",
      "Excess 3-code",
      "Binary number system",
      "None of these",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 151,
    question: "A three input NOR gate gives logic high output only when_____.",
    options: [
      "one input is high",
      "one input is low",
      "two input are low",
      "all input are low",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 152,
    question:
      "An instruction used to set the carry flag in a computer can be classified as",
    options: ["Data transfer", "Program Control", "Logical", "Arithmetic"],
    correctOptionIndex: 2,
  },
  {
    id: 153,
    question: "Assembly language ________.",
    options: [
      "uses alphabetic codes in place of binary numbers used in machine language",
      "is the easiest language to write programs",
      "need not be translated into machine language",
      "None of these",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 154,
    question:
      "Which two are valid constructors for Thread?\nThread(Runnable r, String name)\nThread()\nThread(int priority)\nThread(Runnable r, ThreadGroup g)\nThread(Runnable r, int priority)",
    options: ["1 and 3", "2 and 4", "1 and 2", "2 and 5"],
    correctOptionIndex: 2,
  },
  {
    id: 155,
    question:
      "class can have many methods with the same name as long as the number of parameters or type of parameters is different. This OOP concept is known as",
    options: [
      "Method Invocating",
      "Method Overloading",
      "Method Overriding",
      "Method labeling",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 156,
    question:
      "Which of the following is considered as a blue print that defines the variables and methods common to all of its objects of a specific kind?",
    options: ["object", "class", "method", "data type"],
    correctOptionIndex: 1,
  },
  {
    id: 157,
    question:
      'What will be printed as the output of the following program?\npublic class testincr\n{\npublic static void main(String args[])\n{\nint i = 0;\ni = i++ + i;\nSystem.out.println("I = " +i);\n}\n}',
    options: ["I = 0", "I = 1", "I = 2", "I = 3"],
    correctOptionIndex: 1,
  },
  {
    id: 158,
    question: "count stands for",
    options: [
      "class output",
      "character output",
      "common output",
      "call output",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 159,
    question:
      "R has n tuples and S has m tuples, then the Cartesian product of R and S will produce ___________ tuples.",
    options: ["n+m", "n*m", "n/m", "n-m"],
    correctOptionIndex: 1,
  },
  {
    id: 160,
    question: "Inline functions are invoked at the time of",
    options: [
      "Run time",
      "Compile time",
      "Depends on how it is invoked",
      "Both b and c above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 161,
    question: "Master slave flipflop can be constructed with",
    options: ["SR Latch", "adder", "JK flipflop", "multiplier"],
    correctOptionIndex: 2,
  },
  {
    id: 162,
    question: "Minterms are also called",
    options: [
      "standard sum",
      "standard product",
      "standard division",
      "standard subtraction",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 163,
    question: "Voltage operated circuits represent",
    options: [
      "Decimal variables",
      "Hexadecimal variables",
      "Binary variables",
      "Octa variables",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 164,
    question: "What is the meaning of the return data type void?",
    options: [
      "An empty memory space is returned so that the developers can utilize it.",
      "void returns no data type.",
      "void is not supported in Java",
      "None of the above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 165,
    question:
      "What is the stored in the object obj in following lines of code? box obj;",
    options: [
      "Memory address of allocated memory.",
      "NULL",
      "Any arbitrary pointer",
      "Garbage",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 166,
    question:
      "What will be the output of the following program?",
    coding: "\nclass B {\nstatic int count = 100;\npublic void increment()\n{\ncount++; }\npublic static void main(String []args)\n{\nB b1 = new B();\nb1.increment();\nB b2 = new B();\nSystem.out.println(b2.count); } }",
    options: ["100", "101", "3", "error"],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 167,
    question:
      'What will be the Output?\nclass Animal\n{\nString name = "animal";\nString makeNoise() { return "generic noise"; }\n}\nclass Dog extends Animal\n{\nString name = "dog";\nString makeNoise() { return "bark"; }\n}\npublic class Test\n{\npublic static void main(String[] args)\n{\n}\nAnimal an = new Dog();\nSystem.out.println(an.name+" "+an.makeNoise());\n}',
    options: [
      "animal generic noise",
      "animal bark",
      "dog bark",
      "dog generic noise",
    ],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 168,
    question:
      "When a thread terminates its processing, into what state that thread enters?",
    options: [
      "Running state",
      "Waiting state",
      "Beginning state",
      "Dead state",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 169,
    question:
      "Which of these interface declares core method that all collections will have?",
    options: ["set", "EventListner", "Comparator", "Collection"],
    correctOptionIndex: 3,
  },
  {
    id: 170,
    question: '"Is the requirement properly understood?",relates to _________',
    options: [
      "Traceability",
      "Comprehensibility",
      "Adaptability",
      "Verifiability",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 171,
    question:
      '"Can the requirement be changed without a large impact on other requirements?",is related to _______',
    options: [
      "Comprehensibility",
      "Verifiability",
      "Adaptability",
      "Traceability",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 172,
    question:
      '"Is the origin of the requirement clearly stated?" relates to _________',
    options: [
      "Traceability",
      "Verifiability",
      "Adaptability",
      "Comprehensibility",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 173,
    question:
      "#include <iostream>\nusing namespace std;\nint main ()\n{\ncout << (3 > 4 && 3 > 1) << endl;\nreturn 0;\n}",
    options: ["0", "1", "error", "10"],
    correctOptionIndex: 0,
    isQuestionContainsCoding: true,
  },
  {
    id: 174,
    question: "Inheritance is a way to",
    options: [
      "pass arguments and improve data hiding",
      "pass arguments and add features to existing classes without rewriting them",
      "make general classes into more specific classes and add features to existing classes without rewriting them",
      "improve data hiding and encapsulation.",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 175,
    question: "Operator overloading is",
    options: [
      "making C++ operators work with objects",
      "giving new meaning to existing C++ operators",
      "making new C++ operators",
      "both (a) and (b)",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 176,
    question:
      "A data structure where elements can be added or removed at either end but not in the middle",
    options: ["Linked lists", "Stacks", "Queues", "Deque"],
    correctOptionIndex: 3,
  },
  {
    id: 177,
    question:
      "In a extended-binary tree nodes with 2 children are called _________",
    options: [
      "Interior Node",
      "Domestic Node",
      "Internal Node",
      "Internal Node",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 178,
    question: "Which of the following statements are true?",
    options: [
      "Shortest remaining time first scheduling may cause starvation",
      "Starvation may be caused by preemptive scheduling.",
      "In terms of response time robin round is better than FCFS",
      "All of the above statements are true",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 179,
    question: "___________ contains the 8-bit opcode currently being executed.",
    options: [
      "Memory Address Register",
      "Instruction Register",
      "Memory Buffer Register",
      "Program Pointer",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 180,
    question: "A binary digit is called a",
    options: ["Bit", "Byte", "Number", "Character"],
    correctOptionIndex: 0,
  },
  {
    id: 181,
    question: "A page fault",
    options: [
      "Occurs when there is an error in a specific page",
      "Occurs when a program accesses a page of main memory",
      "Occurs when a program accesses a page not currently in main memory",
      "Occurs when a program accesses a page belonging to another program.",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 182,
    question: "A solution to the problem of external fragmentation is :",
    options: [
      "compaction",
      "smaller memory space",
      "larger memory space",
      "None of these",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 183,
    question: "A Stack-organised Computer uses instruction of",
    options: [
      "Indirect addressing",
      "Two-addressing",
      "Zero addressing",
      "Index addressing",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 184,
    question: "An address in main memory is called",
    options: [
      "Physical address",
      "Memory address",
      "Logical address",
      "Word address",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 185,
    question:
      "An interface that provides I/O transfer of data directly to and form the memory unit and peripheral is termed as",
    options: ["DDA", "Serial interface", "BR", "DMA"],
    correctOptionIndex: 3,
  },
  {
    id: 186,
    question: "Assembly language",
    options: [
      "uses alphabetic codes in place of binary numbers used in machine language",
      "is the easiest language to write programs",
      "need not be translated into machine language",
      "is the easiest language to solve problems",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 187,
    question: "BAT refers to _________",
    options: ["Boot Files", "Batch Files", "Executable Files", "None"],
    correctOptionIndex: 1,
  },
  {
    id: 188,
    question:
      "can be represented in a signed magnitude format and in a 1's complement format as",
    options: [
      "100100 & 011011",
      "100100 & 111011",
      "011011 & 100100",
      "111011 & 100100",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 189,
    question:
      "Content of the program counter is added to the address part of the instruction in order to obtain the effective address is called.",
    options: [
      "relative address mode",
      "implied mode",
      "index addressing mode",
      "register mode",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 190,
    question:
      "If the main memory is of 8K bytes and the cache memory is of 2K words. It uses associative mapping. Then each word of cache memory shall be",
    options: ["11 bits", "21 bits", "16 bits", "20 bits"],
    correctOptionIndex: 2,
  },
  {
    id: 191,
    question:
      "If the value V(x) of the target operand is contained in the address field itself, the addressing mode is",
    options: ["immediate", "direct", "indirect", "implied"],
    correctOptionIndex: 1,
  },
  {
    id: 192,
    question: "In a vectored interrupt",
    options: [
      "the branch address is assigned to a fixed location in memory",
      "the interrupting source supplies the branch information to the processor through an interrupt vector",
      "the branch address is obtained from a register in the processor",
      "the branch address is obtained from a register in the processor",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 193,
    question:
      "In FIFO page replacement algorithm, when a page must be replaced:",
    options: [
      "random page is chosen",
      "newest page is chosen",
      "oldest page is chosen",
      "none of the mentioned",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 194,
    question:
      "Memory management technique in which system stores and retrieves data from secondary storage for use in main memory is called",
    options: ["fragmentation", "paging", "mapping", "starvation"],
    correctOptionIndex: 1,
  },
  {
    id: 195,
    question:
      "Requirements which are a consequence of organisational policies and procedures are termed as_______",
    options: [
      "product requirement",
      "External requirement",
      "Process requiement",
      "Organisational requirements",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 196,
    question:
      "Routine is not loaded until it is called. All routines are kept on disk in a relocatable load format. The main program is loaded into memory & is executed. This type of loading is called ________ ?",
    options: [
      "Static loading",
      "Dynamic loading",
      "Dynamic linking",
      "Overlays",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 197,
    question: "Status bit is also called",
    options: ["Binary bit", "Flag bit", "Signed bit", "Unsigned bit"],
    correctOptionIndex: 1,
  },
  {
    id: 198,
    question: "Swap space exists in:",
    options: [
      "CPU",
      "secondary memory",
      "primary memory",
      "none of the mentioned",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 199,
    question: "The address of a page table in memory is pointed by:",
    options: [
      "stack pointer",
      "page table base register",
      "page register",
      "program counter",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 200,
    question: "The FIFO algorithm",
    options: [
      "executes first the job that last entered the queue",
      "executes first the job that first entered the queue",
      "execute first the job that has been in the queue the longest",
      "executes first the job with the least processor needs",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 201,
    question: "Von Neumann architecture is",
    options: ["SISD", "SIMD", "MIMD", "MISD"],
    correctOptionIndex: 0,
  },
  {
    id: 202,
    question: "What is the content of Stack Pointer (SP)?",
    options: [
      "Address of the current instruction",
      "Address of the next instruction",
      "Address of the top element of the stack",
      "Size of the stack",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 203,
    question: "Which of the following is not a property of transactions?",
    options: ["Atomicity", "Concurrency", "Isolation", "Redundancy"],
    correctOptionIndex: 1,
  },
  {
    id: 204,
    question: "Which of the following is lowest in memory hierarchy?",
    options: ["Cache memory", "Secondary memory", "Registers", "RAM"],
    correctOptionIndex: 1,
  },
  {
    id: 205,
    question:
      "Working set model for page replacement is based on the assumption of:",
    options: ["locality", "random access", "globalization", "modularity"],
    correctOptionIndex: 0,
  },
  {
    id: 206,
    question: "(1010.011)2 =",
    options: ["(10.365)10", "(10.375)10", "(11.365)10", "(11.375)10"],
    correctOptionIndex: 1,
  },
  {
    id: 207,
    question: "(10110001101011.11110010)2 in hexadecimal is",
    options: ["2C5B.F2", "2C6B.F2", "3D5B.F2", "3D6B.F2"],
    correctOptionIndex: 1,
  },
  {
    id: 208,
    question: "(41)10 in binary is",
    options: ["101101", "101011", "101001", "101101"],
    correctOptionIndex: 2,
  },
  {
    id: 209,
    question: "(a+b+c)'=",
    options: ["a'b'c'", "a'+b'+c'", "abc", "a+b+c"],
    correctOptionIndex: 0,
  },
  {
    id: 210,
    question: "(x')' is",
    options: ["complement", "dual complement", "duality", "reflection"],
    correctOptionIndex: 1,
  },
  {
    id: 211,
    question:
      "Read the instruction from its memory location into the processor",
    options: [
      "instruction fetch",
      "operand address calculation",
      "operand fetch",
      "operand store",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 212,
    question:
      "Contains the word to be stored in memory or just received from memory",
    options: [
      "Memory Buffer Register",
      "Memory Address Register",
      "Instruction Register",
      "Program Counter",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 213,
    question: "-9 with signed 2's complement representation is",
    options: ["10001001", "11110110", "11110111", "11110011"],
    correctOptionIndex: 2,
  },
  {
    id: 214,
    question: "-9 with signed magnitude representation is",
    options: ["10001001", "11110110", "11110111", "11110011"],
    correctOptionIndex: 0,
  },
  {
    id: 215,
    question:
      ".............. is known as a greedy algorithm, because it chooses at each step the cheapest edge to add to subgraph S.",
    options: [
      "Kruskal's algorithm",
      "Prim's algorithm",
      "Dijkstra algorithm",
      "Bellman ford algorithm",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 216,
    question: "...... is generic and that can run on any OS.",
    options: [
      "Kernel level thread",
      "User level thread",
      "Both (1) & (2)",
      "None of the above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 217,
    question: "10's complement of 012398 is",
    options: ["987802", "987602", "987902", "987502"],
    correctOptionIndex: 1,
  },
  {
    id: 218,
    question: "10's complement of 246700 is",
    options: ["753300", "753311", "753320", "754371"],
    correctOptionIndex: 0,
  },
  {
    id: 219,
    question: "16x4 RAM indicates that memory location are",
    options: ["4", "8", "12", "16"],
    correctOptionIndex: 0,
  },
  {
    id: 220,
    question: "2 left shifts are referred to as multiplication with",
    options: ["2", "4", "8", "16"],
    correctOptionIndex: 1,
  },
  {
    id: 221,
    question: "2's complement of 1101100 is",
    options: ["11100", "10100", "110100", "100100"],
    correctOptionIndex: 1,
  },
  {
    id: 222,
    question: "2^3 would have",
    options: ["three values", "four values", "six values", "eight values"],
    correctOptionIndex: 3,
  },
  {
    id: 223,
    question: "2x1 mux has",
    options: [
      "1 select line",
      "2 select lines",
      "3 select lines",
      "4 select lines",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 224,
    question: "3 bits full adder contains",
    options: [
      "3 combinational inputs",
      "4 combinational inputs",
      "6 combinational inputs",
      "8 combinational inputs",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 225,
    question: "3x8 decoder will have",
    options: ["3 inputs", "4 inputs", "5 inputs", "6 inputs"],
    correctOptionIndex: 0,
  },
  {
    id: 226,
    question: "4 bit gray code can be converted into",
    options: ["4bit binary", "3bit binary", "2bit binary", "1bit binary"],
    correctOptionIndex: 0,
  },
  {
    id: 227,
    question: "4bit parallel adder produces output of",
    options: ["1 bit", "2 bits", "3 bits", "4 bits"],
    correctOptionIndex: 0,
  },
  {
    id: 228,
    question: "7 segment generates output",
    options: ["a to b", "a to f", "a to g", "a to z"],
    correctOptionIndex: 2,
  },
  {
    id: 229,
    question: "7404 is a",
    options: [
      "single inverter",
      "decimal inverter",
      "hex inverter",
      "quad inverter",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 230,
    question: "8 input mux will have",
    options: [
      "2 select lines",
      "3 select lines",
      "4 select lines",
      "5 select lines",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 231,
    question: "842 + 537 =",
    options: [
      "0001 0011 0111 0101",
      "0111 0011 0111 0101",
      "0001 0111 0111 0101",
      "0001 0011 0111 0111",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 232,
    question: "8723 in BCD",
    options: [
      "1000_0111_0010_0011",
      "1000_0001_0010_0011",
      "1000_0101_0010_0011",
      "1000_0111_0110_0011",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 233,
    question: "9 in binary code is represented by",
    options: ["1000", "1001", "1010", "101"],
    correctOptionIndex: 1,
  },
  {
    id: 234,
    question: "9's complement of 012395 is",
    options: ["987641", "987631", "987621", "987601"],
    correctOptionIndex: 3,
  },
  {
    id: 235,
    question: "9's complement of 546700 is",
    options: ["453299", "453399", "543399", "543299"],
    correctOptionIndex: 0,
  },
  {
    id: 236,
    question: "Value of first linked list index is:",
    options: ["1", "-1", "0", "2"],
    correctOptionIndex: 2,
  },
  {
    id: 237,
    question: "A min-heap is also known as:",
    options: ["decreasing heap", "Low heap", "descending heap", "Small heap"],
    correctOptionIndex: 3,
  },
  {
    id: 238,
    question: "One of the applications of a linked list:",
    options: [
      "Polynomial evaluation",
      "Postfix expression evaluation",
      "Prefix expression evaluation",
      "Distance evaluation",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 239,
    question:
      "The post order traversal of a binary tree is :DEBFCA, find out the preorder traversal:",
    options: ["ABFCDE", "ADBFEC", "ABDECF", "ABDCEF"],
    correctOptionIndex: 2,
  },
  {
    id: 240,
    question:
      "The time complexity of the algorithm sum(a,n) with a single loop from 1 to n is",
    options: ["3n+2", "2n+3", "n+1", "2n+2"],
    correctOptionIndex: 2,
  },
  {
    id: 241,
    question: "Which of the following statements is false:",
    options: [
      "Arrays are static data structures",
      "Data elements in linked list need not be stored in adjacent space in memory",
      "Pointer stores the next data element of a list",
      "Linked lists are collection of nodes that contain information part and the next pointer",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 242,
    question:
      "A ___________ tree is a tree where for each parent node there is only one associated child node",
    options: [
      "balanced binary tree",
      "rooted complete binary tree",
      "complete binary tree",
      "degenerate tree",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 243,
    question: "Which of the following statements hold true for binary trees?",
    options: [
      "The left subtree of a node contains only nodes with keys less than the node's key",
      "The right subtree of a node contains only nodes with keys greater than the node's key",
      "The right subtree of a node contains only nodes with keys greater than the node's key and the left subtree of a node contains only nodes with keys less than the node's key",
      "Both left and right subtree nodes contains only nodes with keys less than the node's key",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 244,
    question: "Which of the following ways is a in-order traversal?",
    options: [
      "Root → left subtree → right subtree",
      "Root → right subtree → left subtree",
      "Left subtree → Root → right subtree",
      "Right subtree → Root → left subtree",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 245,
    question: "Which of the following ways is a post-order traversal?",
    options: [
      "Root → right subtree → left subtree",
      "Root → left subtree → right subtree",
      "Right subtree → left subtree → Root",
      "Left subtree → right subtree → Root",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 246,
    question:
      "Simplified form of the boolean expression (X + Y + XY)(X + Z) is",
    options: ["X + Y + Z", "XY + YZ", "X + YZ", "XZ + Y"],
    correctOptionIndex: 2,
  },
  {
    id: 247,
    question:
      "Which of the following boolean expressions is not logically equivalent to all of the rest?",
    options: [
      "ab + (cd)' + cd + bd'",
      "a(b+c) + cd",
      "ab + ac + (cd)'",
      "bd' + c'd' + ab + cd",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 248,
    question: "Which of the following statements is true?",
    options: [
      "(A + B)(A + C) = AC + BC",
      "(A + B)(A + C) = AB + C",
      "(A + B)(A + C) = A + BC",
      "(A + B)(A + C) = AC + B",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 249,
    question: "The main difference between JK and RS flip-flop is that",
    options: [
      "JK flip flop needs a clock pulse",
      "There is a feedback in JK flip-flop",
      "JK flip-flop accepts both inputs as 1",
      "JK flip-flop is acronym of Junction cathode multivibrator",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 250,
    question:
      "Which of the following unit will choose to transform decimal number to binary code?",
    options: ["Encoder", "Decoder", "Multiplexer", "Counter"],
    correctOptionIndex: 0,
  },
  {
    id: 251,
    question: "The clock signals are used in sequential logic circuits to",
    options: [
      "Tell the time of the day",
      "Tell how much time has elapsed since the system was turned on",
      "Carry parallel data signals",
      "Synchronize events in various parts of system",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 252,
    question: "Using 10's complement 72532 − 3250 is",
    options: ["69282", "69272", "69252", "69232"],
    correctOptionIndex: 0,
  },
  {
    id: 253,
    question: "A Boolean function may be transformed into",
    options: ["Logical Diagram", "Logical Graph", "Map", "Matrix"],
    correctOptionIndex: 0,
  },
  {
    id: 254,
    question: "A circuit that converts n inputs to 2^n outputs is called",
    options: ["encoder", "decoder", "comparator", "carry look ahead"],
    correctOptionIndex: 1,
  },
  {
    id: 255,
    question: "Adding 1001 and 0010 gives output of",
    options: ["1011", "1111", "0", "1010"],
    correctOptionIndex: 0,
  },
  {
    id: 256,
    question: "Adjacent squares represents a",
    options: ["circle", "variable", "literal", "minterm"],
    correctOptionIndex: 2,
  },
  {
    id: 257,
    question: "BCD to seven segment is a",
    options: ["Encoder", "Decoder", "Comparator", "Carry Look Ahead"],
    correctOptionIndex: 1,
  },
  {
    id: 258,
    question: "Decimal digit in BCD can be represented by",
    options: [
      "1 input line",
      "2 input lines",
      "3 input lines",
      "4 input lines",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 259,
    question: "Decoder is a",
    options: [
      "Combinational Circuit",
      "Sequential Circuit",
      "Complex Circuit",
      "Gate",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 260,
    question: "Design procedure of combinational circuit involves",
    options: ["4 steps", "5 steps", "6 steps", "8 steps"],
    correctOptionIndex: 2,
  },
  {
    id: 261,
    question: "Eight minterms will be used for",
    options: [
      "three variables",
      "four variables",
      "five variables",
      "six variables",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 262,
    question: "Encoders are made by three",
    options: ["AND gate", "OR gate", "NAND gate", "XOR gate"],
    correctOptionIndex: 1,
  },
  {
    id: 263,
    question: "Flip-flops can be constructed with two",
    options: ["NAND gates", "OR gates", "AND gates", "NOT gates"],
    correctOptionIndex: 0,
  },
  {
    id: 264,
    question: "In BCD no. 1010 has",
    options: ["meaning", "no meaning", "value", "Vcc"],
    correctOptionIndex: 1,
  },
  {
    id: 265,
    question: "In design procedure input output values are assigned with",
    options: ["numeric values", "letter symbols", "0's", "1's"],
    correctOptionIndex: 1,
  },
  {
    id: 266,
    question: "In excitation table of D flipflop next state is equal to",
    options: ["present state", "next state", "input state", "D state"],
    correctOptionIndex: 3,
  },
  {
    id: 267,
    question:
      "Is it possible to find two algebraic expressions that specify same function",
    options: ["No", "Yes", "Maybe", "Never"],
    correctOptionIndex: 1,
  },
  {
    id: 268,
    question: "Magnitude comparator compares using operation of",
    options: ["Addition", "Subtraction", "Division", "Multiplication"],
    correctOptionIndex: 3,
  },
  {
    id: 269,
    question: "Minterms are arranged in map in a sequence of",
    options: ["binary sequence", "gray code", "binary variables", "BCD code"],
    correctOptionIndex: 1,
  },
  {
    id: 270,
    question: "One operation that is not given by magnitude comparator",
    options: ["Equal", "Less", "Greater", "Addition"],
    correctOptionIndex: 3,
  },
  {
    id: 271,
    question: "One that is not type of flip-flop is",
    options: ["JK", "T", "RS", "ST"],
    correctOptionIndex: 3,
  },
  {
    id: 272,
    question: "Output of AND gates in SOP is connected to",
    options: ["NOT gates", "OR gates", "AND gates", "EX-OR gates"],
    correctOptionIndex: 1,
  },
  {
    id: 273,
    question: "RS flip-flops are also called",
    options: ["RS Latch", "SR Latch", "TS Latch", "ST Latch"],
    correctOptionIndex: 1,
  },
  {
    id: 274,
    question: "Table that is not a part of asynchronous analysis procedure",
    options: [
      "transition table",
      "state table",
      "flow table",
      "excitation table",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 275,
    question:
      "To perform product of maxterms Boolean function must be brought into",
    options: ["AND terms", "OR terms", "NOT terms", "NAND terms"],
    correctOptionIndex: 1,
  },
  {
    id: 276,
    question: "Two variables will be represented by",
    options: [
      "eight minterms",
      "six minterms",
      "five minterms",
      "four minterms",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 277,
    question: "X=1010100 and Y=1000011 using 2's complement X-Y is",
    options: ["10111", "101101", "10011", "10001"],
    correctOptionIndex: 1,
  },
  {
    id: 278,
    question: "x+y=z represents operation that is",
    options: ["AND", "OR", "NOT", "EX-OR"],
    correctOptionIndex: 1,
  },
  {
    id: 279,
    question: '"Kaizen" is a Japanese term meaning',
    options: [
      "Fool proof mechanism",
      "Just-in-time (JIT)",
      "Setting standards",
      "Continuous improvement",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 280,
    question: '"Taking the product to the customer"',
    options: [
      "Push strategy",
      "Pull strategy",
      "Link strategy",
      "Final strategy",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 281,
    question: "_____ is an excellent example for sustainable fibre.",
    options: ["Ceramic", "Polyester", "Wool", "Lyocell"],
    correctOptionIndex: 3,
  },
  {
    id: 282,
    question: "_____ refers unity of design in a garment",
    options: ["Harmony", "Line", "Shape", "Form"],
    correctOptionIndex: 0,
  },
  {
    id: 283,
    question:
      "_____ is where profit is expressed as a percentage of the sale price.",
    options: ["Break-down", "Break-up", "Markdown", "Markup"],
    correctOptionIndex: 3,
  },
  {
    id: 284,
    question:
      "_____ machines allow manipulation of fabric on both sides of the needle for topstitching and lapped seaming",
    options: ["Cylinder", "Flatbed", "Post", "Raised bed"],
    correctOptionIndex: 1,
  },
  {
    id: 285,
    question:
      "_____ are made of durable materials and permanently sewn into garments for production information",
    options: ["Labels", "Tags", "Stringers", "Care taps"],
    correctOptionIndex: 0,
  },
  {
    id: 286,
    question:
      "_____ creating a pattern by pinning fabric to a dressmaker's dummy and manipulating it until the look is achieved.",
    options: ["Flat patterning", "Draping", "Pinning", "Dart manipulation"],
    correctOptionIndex: 1,
  },
  {
    id: 287,
    question:
      "_____ date is the merchandiser’s deadline for having all prototypes and pricing for a new product line completed.",
    options: ["Line preview", "Deadline", "Line presentation", "Line releases"],
    correctOptionIndex: 0,
  },
  {
    id: 288,
    question:
      "_____ is a diagram of a precise arrangement of pattern pieces for a specific style and the sizes to be cut from a single spread.",
    options: ["Plotter", "Marker", "Design", "Grading"],
    correctOptionIndex: 1,
  },
  {
    id: 289,
    question: "_____ is a guide containing steps to make a garment",
    options: ["Thimble", "Needle threader", "Sewing gauge", "Pattern"],
    correctOptionIndex: 1,
  },
  {
    id: 290,
    question:
      "_____ is the application of computer technology to the development of a garment to the point of production.",
    options: ["SAM", "CAD", "CIM", "CIF"],
    correctOptionIndex: 2,
  },
  {
    id: 291,
    question:
      "_____ is the feel, drape and degree of stiffness and softness of the fabric.",
    options: ["Texture", "Surface effect", "Hairiness", "Hang"],
    correctOptionIndex: 0,
  },
  {
    id: 292,
    question:
      "_____ is the natural polymer that makes up the living cells of all vegetation.",
    options: ["Enzymes", "Keratin", "Cellulose", "Lumen"],
    correctOptionIndex: 2,
  },
  {
    id: 293,
    question:
      "_____ occurs when pricing is used as the basis to make consumers feel more favourable about a product.",
    options: [
      "Value based pricing",
      "Discount pricing",
      "Membership pricing",
      "Psychological pricing",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 294,
    question:
      "_____ process improves yarn strength and evenness by removing short fibres.",
    options: ["Carding", "Combing", "Drawing", "Drafting"],
    correctOptionIndex: 1,
  },
  {
    id: 295,
    question:
      "_____ refers to the total number of loops in a measured area of fabric.",
    options: [
      "Stitch density",
      "Stitch length",
      "Areal density",
      "Course length",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 296,
    question:
      "_____ retailing offers merchandise to consumers in a catalog format.",
    options: ["Mail order", "E-Commerce", "E-retailing", "Chain store"],
    correctOptionIndex: 0,
  },
  {
    id: 297,
    question:
      "_____ seams are those in which all seam allowance are contained within the finished seam.",
    options: ["Mock seam", "Self-enclosed seam", "Lap seam", "Bound seam"],
    correctOptionIndex: 1,
  },
  {
    id: 298,
    question:
      "_____ series programme provides standards for data documentation and audits as part of a quality management system.",
    options: ["TQM", "QMS", "ISO", "AQL"],
    correctOptionIndex: 2,
  },
  {
    id: 299,
    question: "_____ special types of forms for data collection.",
    options: ["Spec sheet", "Check sheet", "Work sheet", "Make sheet"],
    correctOptionIndex: 1,
  },
  {
    id: 300,
    question: "_____ standards are designed to help organize QA/QC activities.",
    options: ["ISO 14000", "ISO 6000", "ISO 8583", "ISO 9000"],
    correctOptionIndex: 3,
  },
  {
    id: 301,
    question:
      "_____ statistically calculated number of sample items to inspect and the number of defects allowed.",
    options: [
      "Sampling Plan",
      "Scheduling plan",
      "Cutting plan",
      "Inspection plan",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 302,
    question:
      "_____ also known as dressmaker's dummies, are padded so that material may be pinned to them.",
    options: ["Pinning mannequin", "Mannequin", "Dress form", "Character form"],
    correctOptionIndex: 2,
  },
  {
    id: 303,
    question:
      "_____ is the systematic gathering, recording and analyzing of data about problems relating to the marketing of goods and services.",
    options: [
      "Marketing Research",
      "Production planning",
      "Process planning",
      "Purchase planning",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 304,
    question:
      "_____ is a difference between actual and garment measurement at any given point.",
    options: ["Set", "Ease", "Seam", "Allowance"],
    correctOptionIndex: 1,
  },
  {
    id: 305,
    question:
      "_____ is the angle at which the cutting device contacts the spread.",
    options: ["1800", "900", "Cutting pitch", "Longitudinal"],
    correctOptionIndex: 2,
  },
  {
    id: 306,
    question:
      "A _____ is a stock of fabric plies that have been prepared for cutting.",
    options: ["Lay", "Marker", "Fabric", "Bundle"],
    correctOptionIndex: 0,
  },
  {
    id: 307,
    question:
      "A merchandise _____ is a collection of various styles, quantities and prices of related merchandise.",
    options: ["Parts", "Assortment", "Segmentation", "Market"],
    correctOptionIndex: 1,
  },
  {
    id: 308,
    question:
      "For pigment printing, which following type of thickener system is preferably used",
    options: ["Oil-in-water", "Water-in-oil", "Sodium alginate", "Guar gum"],
    correctOptionIndex: 2,
  },
  {
    id: 309,
    question: "In a sizing machine the number of lease rods is given by",
    options: [
      "Equal to number of warperse beams",
      "number of warperse beams - 1",
      "Number of warperse beams - 2",
      "not depends on warperse beams",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 310,
    question:
      "In the delivery roller nip point, fibres are getting twisted together and the yarn is formed.",
    options: [
      "Twisting",
      "Parallelisation",
      "Spinning triangle",
      "Spinning bar",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 311,
    question: "Kalamkari is the most ancient industry in ________.",
    options: ["Andhra Pradesh", "Karnataka", "Madhya Pradesh", "Tamil Nadu"],
    correctOptionIndex: 0,
  },
  {
    id: 312,
    question:
      "Label of international association for research and testing in the field of textile ecology is given by ________ eco label.",
    options: ["ECO-TEX", "ECO Steam", "ECOS", "OEKO-TEX"],
    correctOptionIndex: 3,
  },
  {
    id: 313,
    question: "Lead-time means",
    options: [
      "Total time taken to Produce Sample",
      "Time taken to Process the Garment",
      "Time from conforming to shipping the order",
      "Stitching Time alone",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 314,
    question: "Major challenges in material management is ________",
    options: [
      "consistent flow of materials for production",
      "campus planning",
      "cost of raw material",
      "marketing cost",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 315,
    question: "Maximum how many thread will be using in Over Lock machine.",
    options: ["3nos", "4nos", "5nos", "6nos"],
    correctOptionIndex: 3,
  },
  {
    id: 316,
    question: "Pareto charts are used to ________.",
    options: [
      "Identify inspection points in a process",
      "Outline production schedules",
      "Organize errors, problems or defects",
      "Show material flow",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 317,
    question: "PDM stands for ________",
    options: [
      "Product development management",
      "Product design management",
      "Product data Management",
      "Product decoding management",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 318,
    question:
      "The business of buying fashion merchandise from a variety of resources and reselling it to ultimate consumers ________.",
    options: ["Wholesalers", "Fashion retailing", "Marketing", "Merchandising"],
    correctOptionIndex: 1,
  },
  {
    id: 319,
    question:
      "The count of yarn is 20 Ne and its equivalent count in tex system will be ________.",
    options: ["31 tex", "32 tex", "29.5 tex", "30.7 tex"],
    correctOptionIndex: 0,
  },
  {
    id: 320,
    question:
      "The crop cultivated without pesticides and chemicals, but using synthetic fertilizers are said to be ________ one.",
    options: ["Eco-friendly", "Organic", "In-organic", "Sustainable"],
    correctOptionIndex: 2,
  },
  {
    id: 321,
    question:
      "The optimum conditions for bleaching cotton with hydrogen peroxide are",
    options: ["pH 7, 60°C", "pH 7, boil", "pH 10, 60°C", "pH 10, boil"],
    correctOptionIndex: 3,
  },
  {
    id: 322,
    question:
      "The toddlers apparel, for the child who has learned to walk are sized:",
    options: ["2T,3T,4T", "4 to 7", "3,6and 9 months", "4X to 6X"],
    correctOptionIndex: 0,
  },
  {
    id: 323,
    question:
      'This machine sews a seam, cuts both pieces of fabric about 1/4" from the seam, and overcast stitches all in a single pass.',
    options: [
      "Blind stitch machine",
      "Walking foot machine",
      "Zig zag machine",
      "Serger",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 324,
    question: "Two thread chain stitch refer ________ classes.",
    options: ["300", "400", "301", "401"],
    correctOptionIndex: 1,
  },
  {
    id: 325,
    question: "Uniformity ratio is the ratio of:",
    options: [
      "2.5% span length and 50% span length",
      "50% span length and 2.5% span length",
      "Mean length and upper half mean length",
      "Upper half mean length and mean length",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 326,
    question:
      "Utilization of ________ fibre in clothing has added to the fast depleting of forests.",
    options: ["Cotton", "Wool", "Silk", "rayon"],
    correctOptionIndex: 3,
  },
  {
    id: 327,
    question: "Which among them is not a good weave absorbent towel?",
    options: ["Honeycomb", "Herringbone", "Huckaback", "Terry"],
    correctOptionIndex: 1,
  },
  {
    id: 328,
    question:
      "________ may result from friction among materials and spreading equipment",
    options: ["Rly alignment", "Static Electricity", "Tension", "Shrink"],
    correctOptionIndex: 1,
  },
  {
    id: 329,
    question: "Expand PBS:",
    options: [
      "Progressive bundle system",
      "Production bundle sets",
      "Promoting business sales",
      "Product buying status",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 330,
    question: "Violet (purple) is made up of the combination of ________.",
    options: [
      "Red and Blue",
      "Red and Green",
      "Red and Yellow",
      "Red and Orange",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 331,
    question: "________ is the description of the database",
    options: ["schema", "schema construct", "schema evolution", "snapshot"],
    correctOptionIndex: 0,
  },
  {
    id: 332,
    question: "The advantage of DBMS over file systems is",
    options: [
      "self describing nature",
      "Logical data independence",
      "multiple user",
      "Physical data independence",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 333,
    question:
      "The set of all attributes of a relation is called default ________.",
    options: ["Primary Key", "Super Key", "Foreign Key", "Alternate key"],
    correctOptionIndex: 1,
  },
  {
    id: 334,
    question:
      "The ________ identifies the language tokens in the text of the query.",
    options: ["Scanner", "Parser", "Validation", "query tree"],
    correctOptionIndex: 0,
  },
  {
    id: 335,
    question:
      "During ________ state, transaction issues read and write operations.",
    options: ["Active", "committed", "Partially committed", "failed"],
    correctOptionIndex: 0,
  },
  {
    id: 336,
    question: "________ FD have same set of attributes on both sides.",
    options: ["Trivial", "non-trivial", "Fully", "Partial"],
    correctOptionIndex: 0,
  },
  {
    id: 337,
    question:
      "______________ join requires that the two join attributes have the same name in both relations.",
    options: ["Theta Join", "Equi join", "Self join", "Natural join"],
    correctOptionIndex: 3,
  },
  {
    id: 338,
    question:
      "In ______________ Schedule only one transaction at a time is active.",
    options: ["Conflict", "view", "serial", "non serial"],
    correctOptionIndex: 2,
  },
  {
    id: 339,
    question:
      "The attributes in foreign key and primary key have the same ____________.",
    options: ["Number of tuples", "Number of attributes", "Domain", "Symbol"],
    correctOptionIndex: 1,
  },
  {
    id: 340,
    question:
      "In ______________ Schedule transactions are executing with interleaved process.",
    options: ["Conflict", "view", "serial", "non serial"],
    correctOptionIndex: 2,
  },
  {
    id: 341,
    question: "Minimal super key of a relation is called _______________.",
    options: ["Primary Key", "Super Key", "Foreign Key", "Alternate key"],
    correctOptionIndex: 1,
  },
  {
    id: 342,
    question:
      "The combination of selection and Cartesian product operators is ____________ operator",
    options: ["Division", "Set difference", "Join", "Union"],
    correctOptionIndex: 2,
  },
  {
    id: 343,
    question:
      "The participation constraints and cardinality ratio together called as _______________ constraints.",
    options: ["Structural", "Un Structural", "Integrity", "Referential"],
    correctOptionIndex: 0,
  },
  {
    id: 344,
    question: "The complexity of binary search algorithm is",
    options: ["O(n)", "O(log n)", "O(log n)", "O(n log n)"],
    correctOptionIndex: 1,
  },
  {
    id: 345,
    question: "The complexity of Bubble sort algorithm is",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
    correctOptionIndex: 2,
  },
  {
    id: 346,
    question: "The complexity of Insertion sort algorithm is",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
    correctOptionIndex: 1,
  },
  {
    id: 347,
    question: "The complexity of Merge sort algorithm is",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correctOptionIndex: 1,
  },
  {
    id: 348,
    question:
      "Which of the following sorting algorithms does not have a worst case running time of O(n2)",
    options: ["Insertion sort", "Merge sort", "Quick sort", "Bubble sort"],
    correctOptionIndex: 1,
  },
  {
    id: 349,
    question: "Apriori algorithm analysis does not include",
    options: [
      "Time Complexity",
      "Space Complexity",
      "Program Complexity",
      "Time and Space Complexity",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 350,
    question:
      "Match the following − (1) Bubble Sort (A) O(n), (2) Shell Sort (B) O(n2), (3) Selection Sort (C) O(n log n)",
    options: [
      "1 → A, 2 → B, 3 → C",
      "1 → B, 2 → C, 3 → A",
      "1 → A, 2 → C, 3 → B",
      "1 → B, 2 → A, 3 → C",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 351,
    question:
      "To represent hierarchical relationship between elements, which data structure is suitable?",
    options: ["Deque", "Priority Queue", "Tree", "All of these"],
    correctOptionIndex: 2,
  },
  {
    id: 352,
    question: "A technique called ______ is used to create a subnetting effect",
    options: ["ARP", "RARP", "proxy ARP", "none of the above"],
    correctOptionIndex: 2,
  },
  {
    id: 353,
    question:
      "In _______ forwarding, the destination address is a network address in the routing table",
    options: ["next-hop", "network-specific", "host-specific", "default"],
    correctOptionIndex: 1,
  },
  {
    id: 354,
    question: "In IPv4 header, an HLEN value of decimal 10 means _______.",
    options: [
      "there are 10 bytes of options",
      "there are 40 bytes of options",
      "there are 10 bytes in the header",
      "there are 40 bytes in the header",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 355,
    question:
      "The Open Shortest Path First (OSPF) protocol is an intradomain routing protocol based on _______ routing.",
    options: ["distance vector", "link state", "path vector", "link path"],
    correctOptionIndex: 1,
  },
  {
    id: 356,
    question: "UDP packets are encapsulated in ___________.",
    options: [
      "an Ethernet frame",
      "a TCP segment",
      "an IP datagram",
      "IP header",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 357,
    question:
      "What is the first address of a block of classless addresses if one of the addresses is 12.2.2.76/27?",
    options: ["12.2.2.0", "12.2.2.32", "12.2.2.64", "none of these"],
    correctOptionIndex: 2,
  },
  {
    id: 358,
    question: "An adaptive sorting algorithm –",
    options: [
      "adapts to new computers",
      "takes advantage of already sorted elements",
      "takes input which is already sorted",
      "Take input which is unsorted",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 359,
    question: "In a MIN-Heap",
    options: [
      "parent nodes have values greater than or equal to their childs",
      "parent nodes have values less than or equal to their childs",
      "both statements are true",
      "both statements are wrong",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 360,
    question:
      "A linked list in which last node contain the link of the first node is called",
    options: [
      "Singly linked list",
      "Doubly linked list",
      "Circular linked list",
      "Array",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 361,
    question: "Example of primitive recursion is",
    options: [
      "Tower of Hanoi",
      "Ackermann’s function",
      "Tower of Hanoi and Ackermann’s function both",
      "None",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 362,
    question: "In linked lists there are no NULL links in:",
    options: [
      "Singly linked list",
      "Doubly linked list",
      "Circular linked list",
      "linear linked list",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 363,
    question: "Stack works on the principles:",
    options: ["FCFS", "LIFO", "FCFS and LIFO", "SJF"],
    correctOptionIndex: 1,
  },
  {
    id: 364,
    question: "The complexity of the average case of an algorithm is",
    options: [
      "Much more complicated to analyze than that of worst case",
      "Much more simpler to analyze than that of worst case",
      "Sometimes more complicated and some other times simpler than that of worst case",
      "None of these",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 365,
    question: "The condition Top = -1 indicates that",
    options: [
      "Stack is empty",
      "Stack is full",
      "Stack has only one element",
      "stack has two elements",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 366,
    question:
      "Which of the following is not the required condition for binary search algorithm?",
    options: [
      "The list must be sorted",
      "There should be the direct access to the middle element in any sub list",
      "There must be mechanism to delete and/or insert elements in list",
      "list is unsorted",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 367,
    question: "Which of the following statements are wrong statements?",
    options: [
      "Array is a linear data structure.",
      "Every element of array must be of same type.",
      "In array, Insert element is called push operation.",
      "Array is homogenous.",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 368,
    question:
      "Which of the following traversal techniques lists the nodes of a binary search tree in ascending order?",
    options: ["Post-order", "In-order", "Pre-order", "Pre-Post order"],
    correctOptionIndex: 1,
  },
  {
    id: 369,
    question:
      "A method to provide secure transmission of email is called ____.",
    options: ["TLS", "SA", "IPSec", "PGP"],
    correctOptionIndex: 3,
  },
  {
    id: 370,
    question:
      "A packet whose destination is outside the local TCP/IP network segment is sent to ..............",
    options: ["File server", "DNS server", "DHCP server", "Default gateway"],
    correctOptionIndex: 3,
  },
  {
    id: 371,
    question:
      "As the data packet moves from the upper to the lower layers, headers are _______.",
    options: ["Added", "Removed", "Rearranged", "Modified"],
    correctOptionIndex: 0,
  },
  {
    id: 372,
    question:
      "Distance vector routing algorithm is a dynamic routing algorithm. The routing tables in distance vector routing algorithm are updated...........",
    options: [
      "automatically",
      "by server",
      "by exchanging information with neighbour nodes",
      "with back up database",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 373,
    question:
      "Which of the following field of the TCP header tells how many bytes may be sent starting at the byte acknowledged?",
    options: [
      "TCP header length",
      "Window size",
      "Acknowledgement number",
      "Urgent pointer",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 374,
    question:
      "Binary search tree has best case run-time complexity of O(log n). What could the worst case?",
    options: ["O(n)", "O(n^2)", "O(n^3)", "O(n log n)"],
    correctOptionIndex: 0,
  },
  {
    id: 375,
    question:
      "In C programming, when we remove an item from bottom of the stack, then −",
    options: [
      "The stack will fall down",
      "Stack will rearranged items",
      "It will convert to LIFO",
      "This operation is not allowed",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 376,
    question: "Quick sort algorithm is an example of",
    options: [
      "Greedy approach",
      "Improved binary search",
      "Dynamic Programming",
      "Divide and conquer",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 377,
    question: "Re-balancing of AVL tree costs",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctOptionIndex: 1,
  },
  {
    id: 378,
    question: "Which one of the below mentioned is not a linear data structure",
    options: ["Queues", "Stacks", "Arrays", "Trees"],
    correctOptionIndex: 3,
  },
  {
    id: 379,
    question: "_____________ is a step-by-step procedure for calculation",
    options: [
      "Data Structure",
      "Abstract Data Type",
      "Primitive Data Type",
      "Algorithm",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 380,
    question:
      "A binary tree is generated by inserting in order of the following integers: 50, 15, 62, 5, 20, 58, 3, 8, 37, 60, 24 the number of nodes in the left of the root respectively is",
    options: ["(3,7)", "(7,3)", "(4,6)", "(6,4)"],
    correctOptionIndex: 3,
  },
  {
    id: 381,
    question: "A complete binary tree of level 5 has how many nodes?",
    options: ["15", "63", "25", "30"],
    correctOptionIndex: 1,
  },
  {
    id: 382,
    question: "A doubly linked list facilitates list traversal in",
    options: [
      "Single direction",
      "Any direction",
      "Circular direction",
      "Reverse direction",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 383,
    question: "A full binary tree with n leaves contains ______ nodes",
    options: ["n", "log n", "2n - 1", "2n + 1"],
    correctOptionIndex: 2,
  },
  {
    id: 384,
    question: "A full binary tree with n non-leaf nodes contains ______ nodes",
    options: ["log n", "2n", "2n - 1", "2n + 1"],
    correctOptionIndex: 3,
  },
  {
    id: 385,
    question: "A linked list is which type of data structure.",
    options: ["Linear", "Non Linear", "Hierarchical", "None"],
    correctOptionIndex: 0,
  },
  {
    id: 386,
    question:
      "A mathematical-model with a collection of operations defined on that model is called",
    options: [
      "Data structure",
      "Abstract Data Type",
      "Primitive Data Type",
      "Algorithm",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 387,
    question:
      "A multi-dimensional array array[0:2, 10:20, 3:4, -10:2] contains _________ elements.",
    options: ["240", "858", "390", "160"],
    correctOptionIndex: 1,
  },
  {
    id: 388,
    question: "A node carries information regarding",
    options: ["Data", "Link", "Data and Link", "None"],
    correctOptionIndex: 2,
  },
  {
    id: 389,
    question: "A singly linked list facilitates list traversal in",
    options: [
      "Single direction",
      "Any direction",
      "Circular direction",
      "Reverse direction",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 390,
    question:
      "A two-dimensional array array[1:3, 1:3] contains _________ elements.",
    options: ["3", "6", "9", "7"],
    correctOptionIndex: 2,
  },
  {
    id: 391,
    question:
      "An algorithm must be generic enough to solve all problems of a particular class. This property is termed as ____________.",
    options: ["Finiteness", "Definiteness", "Generality", "Effectiveness"],
    correctOptionIndex: 2,
  },
  {
    id: 392,
    question: "Answer of following postfix expression: 2,3,10+*8,2/-",
    options: ["20", "22", "23", "25"],
    correctOptionIndex: 1,
  },
  {
    id: 393,
    question: "Balancing symbol is a application of ____________.",
    options: [
      "Singly linked list",
      "Doubly linked list",
      "Queue",
      "Linked Stack",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 394,
    question: "Balancing symbol is a application of ____________.",
    options: [
      "Singly linked list",
      "Doubly linked list",
      "Linked stack",
      "Linked queue",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 395,
    question: "Binary search algorithm cannot be applied to",
    options: [
      "sorted linked list",
      "sorted binary trees",
      "sorted linear array",
      "pointer array",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 396,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. How many children does the root have?",
    options: ["2", "4", "8", "9"],
    correctOptionIndex: 0,
  },
  {
    id: 397,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. How many descendants does the root have?",
    options: ["2", "4", "8", "9"],
    correctOptionIndex: 2,
  },
  {
    id: 398,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. How many leaves does it have?",
    options: ["2", "4", "7", "9"],
    correctOptionIndex: 1,
  },
  {
    id: 399,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. How many of the nodes have at least one sibling?",
    options: ["2", "4", "3", "9"],
    correctOptionIndex: 2,
  },
  {
    id: 400,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. What is the depth of the tree?",
    options: ["2", "3", "4", "9"],
    correctOptionIndex: 1,
  },
  {
    id: 401,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. What is the value stored in the parent node of the node containing 30?",
    options: ["2", "10", "11", "14"],
    correctOptionIndex: 2,
  },
  {
    id: 402,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. Which pair of nodes have equal number of descendants?",
    options: ["(2,11)", "(1,3)", "(10,30)", "(7,14)"],
    correctOptionIndex: 1,
  },
  {
    id: 403,
    question:
      "For the array A[1:u1,1:u2] where α is the base address, A[i,1] has its address given by",
    options: ["(i − 1)u2", "α + (i − 1)u2", "α + i * u2", "α + (i − 1) * u1"],
    correctOptionIndex: 1,
  },
  {
    id: 404,
    question: "In a linked list, the pointer of the last node contains",
    options: [
      "Link to the first node",
      "NULL",
      "Link",
      "Pointer to the tail node",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 405,
    question: "In a Single Link List ______ node contains no links.",
    options: ["First", "Last", "Last but one", "middle"],
    correctOptionIndex: 1,
  },
  {
    id: 406,
    question:
      "In polynomial manipulation, nodes consists of three field representing",
    options: [
      "Coefficient, exponential and link",
      "Previous item link, data item, next item link",
      "Coefficient, data item and link",
      "Link, coefficient and exponential",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 407,
    question:
      "In Single Linked List a node contain minimum how many fields (assuming one for data).",
    options: ["2", "3", "1", "0"],
    correctOptionIndex: 0,
  },
  {
    id: 408,
    question: "In which linked list, nodes in form of ring?",
    options: [
      "Singly linked list",
      "Doubly linked list",
      "Circular linked list",
      "Linked Stack",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 409,
    question: "In which notation operator comes between operand?",
    options: ["Infix", "Inorder", "Postfix", "Prefix"],
    correctOptionIndex: 0,
  },
  {
    id: 410,
    question: "In which notation operator comes after operand?",
    options: ["Infix", "Postfix", "Prefix", "Preorder"],
    correctOptionIndex: 1,
  },
  {
    id: 411,
    question: "In which notation operator comes before operand?",
    options: ["Infix", "Postfix", "Postorder", "Prefix"],
    correctOptionIndex: 3,
  },
  {
    id: 412,
    question:
      "Input instance for which algorithm take maximum possible time is called",
    options: ["Worst Case", "Best Case", "Average Case", "Null Case"],
    correctOptionIndex: 0,
  },
  {
    id: 413,
    question:
      "Input instance for which algorithm take minimum possible time is called",
    options: ["Worst case", "Best case", "Average case", "Null Case"],
    correctOptionIndex: 1,
  },
  {
    id: 414,
    question: "Linear order linked list is provided through _________",
    options: ["variables", "arrays", "Pointer", "Strings"],
    correctOptionIndex: 2,
  },
  {
    id: 415,
    question: "Linked list START = NULL is ____________",
    options: ["Underflow", "Overflow", "Full", "Empty"],
    correctOptionIndex: 0,
  },
  {
    id: 416,
    question: "Queue works on the principles:",
    options: ["FCFS", "LIFO", "FCFS and LIFO", "Neither FCFS nor LIFO"],
    correctOptionIndex: 0,
  },
  {
    id: 417,
    question: "Representation of data structure in memory is known as:",
    options: [
      "Recursive",
      "Abstract data type",
      "Storage structure",
      "File structure",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 418,
    question:
      "Single link list performs which of the following methods 1) Insertion 2) Modification 3) Searching",
    options: ["1 and 2", "2 and 3", "1 and 3", "1, 2, 3"],
    correctOptionIndex: 3,
  },
  {
    id: 419,
    question: "The average case occur in linear search algorithm",
    options: [
      "When item is somewhere in the middle of the array",
      "When item is not in the array at all",
      "When item is the last element in the array",
      "When item is the last element in the array or is not there at all",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 420,
    question: "The first step of development of an algorithm is",
    options: [
      "Problem analysis",
      "Problem statement",
      "Algorithm analysis",
      "Implementation",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 421,
    question: "The infix expression for the postfix expression : 5,6,2+*12,4/-",
    options: ["5*(6+2)-12/4", "5+6-2*12/4", "(5+6)-2/12*4", "None"],
    correctOptionIndex: 0,
  },
  {
    id: 422,
    question: "The list with no node is called as",
    options: ["Empty list", "Zero list", "Null list", "Vacant list"],
    correctOptionIndex: 0,
  },
  {
    id: 423,
    question: "The maximum number of nodes on level i of a binary tree is",
    options: ["2^i", "3^i", "i+1", "2i+2"],
    correctOptionIndex: 0,
  },
  {
    id: 424,
    question:
      "The number of elements in array Array[l1:u1, l2:u2, l3:u3] is given by",
    options: [
      "(u1- l1 – 1)(u2 – l2 - 1)(u3 – l3 - 1)",
      "(u1*u2*u3)",
      "(u1 – l1)(u2 – l2)(u3-l3)",
      "(u1- l1 + 1)(u2 – l2 + 1)(u3 – l3 + 1)",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 425,
    question: "The number of elements in array Array[l1:u1, l2:u2] is given by",
    options: [
      "(u1- l1 – 1)(u2 – l2 - 1)",
      "(u1*u2)",
      "(u1 – l1)(u2 – l2)",
      "(u1- l1 + 1)(u2 – l2 + 1)",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 426,
    question:
      "The number of swapping needed to sort the numbers 8, 22, 7, 9, 31, 19, 5, 13 in ascending order, using insertion sort is",
    options: ["11", "12", "13", "14"],
    correctOptionIndex: 3,
  },
  {
    id: 427,
    question: "The postfix expression for the infix expression : a+b*c/d",
    options: ["abc*d/+", "a*bcd/+", "ab*cd/+", "abcd*/+"],
    correctOptionIndex: 0,
  },
  {
    id: 428,
    question: "The prefix expression for the infix expression : a+b*c/d",
    options: ["+ab*/cd", "+*ab/cd", "+a*b/cd", "None"],
    correctOptionIndex: 3,
  },
  {
    id: 429,
    question: "The term MAX and MIN is related to the",
    options: ["Stacks", "Queues", "Heaps", "Splays"],
    correctOptionIndex: 2,
  },
  {
    id: 430,
    question:
      "The time complexity of linear search algorithm over an array of n element is",
    options: ["O(log2 n)", "O(n)", "O(n log2 n)", "O(n^2)"],
    correctOptionIndex: 1,
  },
  {
    id: 431,
    question:
      "The time complexity of the algorithm in a best case would be expressed as",
    options: ["O(1)", "O(n)", "O(n2)", "O(n+1)"],
    correctOptionIndex: 0,
  },
  {
    id: 432,
    question: "The Worst case occur in linear search algorithm when",
    options: [
      "Item is somewhere in the middle of array",
      "Item is not in the array at all",
      "Item is the last element in the array",
      "Item is the last element in the array or is not there at all",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 433,
    question:
      "Traversing binary tree first root and then left and right subtrees called _____________ traversal.",
    options: ["Postorder", "Preorder", "In order", "Binary order"],
    correctOptionIndex: 1,
  },
  {
    id: 434,
    question: "Type of storage is used to represent Lists",
    options: ["Random", "Sequential", "Dynamic", "Logical"],
    correctOptionIndex: 2,
  },
  {
    id: 435,
    question:
      "What is the worst-case time for serial search finding a single item in an array?",
    options: [
      "Constant time",
      "Logarithmic time",
      "Linear time",
      "Quadratic time",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 436,
    question:
      'What kind of list is best to answer questions such as "What is the item at position n?"',
    options: [
      "Lists implemented with an array",
      "Doubly-linked lists",
      "Singly-linked lists",
      "Doubly-linked or singly-linked lists are equally best",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 437,
    question:
      "Which among the following pairs of operations is supported by an array ADT?",
    options: [
      "Store and Retrieve",
      "Insert and Delete",
      "Copy and Delete",
      "Append and Copy",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 438,
    question: "Which are the correct array initialization statements?",
    options: [
      "int A[3]={1,2,3};",
      "int A[3]={123};",
      'int A[3]="123";',
      "int A[3]=1,2,3;",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 439,
    question:
      "Which case analysis appropriate when the response time of the algorithm is critical?",
    options: ["Worst case", "Best case", "Average Case", "Null case"],
    correctOptionIndex: 0,
  },
  {
    id: 440,
    question: "Which data structure will you use to evaluate prefix notation?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctOptionIndex: 1,
  },
  {
    id: 441,
    question: "Which is not an application of array?",
    options: ["Dense matrix", "Ordered list", "Sparse Matrix", "Linked List"],
    correctOptionIndex: 3,
  },
  {
    id: 442,
    question: "Which of the following case does not exist in complexity theory",
    options: ["Best case", "Worst case", "Average case", "Null case"],
    correctOptionIndex: 3,
  },
  {
    id: 443,
    question: "Which of the following is considered an Abstract Data Type?",
    options: [
      "Array",
      "reference variable",
      "any of the primitive types (e.g., int, double, char)",
      "Stack",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 444,
    question: "Which of the following is not a application of Stack?",
    options: [
      "Evaluation of Police notation",
      "Tower of Hanoi",
      "Stack Machine",
      "None",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 445,
    question:
      "Which of the following is not a limitation of binary search algorithm?",
    options: [
      "Must use a sorted array",
      "Requirement of sorted array is expensive when a lot of insertion and deletions are needed",
      "There must be a mechanism to access middle element directly",
      "Binary search algorithm is not efficient when the data elements are more than 1000",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 446,
    question: "Which of the following is not the operation on Queue?",
    options: ["Insertion", "Deletion", "Updating", "Displaying"],
    correctOptionIndex: 2,
  },
  {
    id: 447,
    question:
      "Which of the following is the application of the singly linked list?",
    options: [
      "Sparse matrix",
      "Polish notation",
      "Tower of Hanoi",
      "Polynomial Addition",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 448,
    question:
      "Which of the following is the condition of circular queue overflow?",
    options: [
      "Front=0 and Rear=size",
      "Front+1=Rear",
      "Both a & b",
      "Neither a nor b",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 449,
    question: "Which of the following name related to stacks?",
    options: ["Push", "Pop", "Top", "All"],
    correctOptionIndex: 3,
  },
  {
    id: 450,
    question:
      "Which of the following pair of data structures are both non-linear type?",
    options: [
      "Stack, Graph",
      "Stack, Linked List",
      "Tree, Linked List",
      "Tree, Graph",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 451,
    question: "The number of elements in array Array[1:u] is given by",
    options: ["(1 - u)", "(u)", "(u – 1 + 1)", "(u – 1 - 1)"],
    correctOptionIndex: 1,
  },
  {
    id: 452,
    question: "Which of the following sorting method is unstable?",
    options: ["Insertion", "Bubble", "Selection", "Heap"],
    correctOptionIndex: 3,
  },
  {
    id: 453,
    question: "Which of the following statement is false?",
    options: [
      "Every tree is a bipartite graph",
      "A tree contains cycle",
      "A tree with n nodes contains n-1 edges",
      "A tree is connected graph",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 454,
    question: "Which of the following will contain more memory space?",
    options: [
      "Singly linked list",
      "Doubly linked list",
      "Array",
      "Circular linked list",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 455,
    question: "ER model shows the _______",
    options: [
      "Static view",
      "Functional view",
      "Dynamic view",
      "All the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 456,
    question:
      "________ is a measure of the degree of interdependence between modules",
    options: ["Cohesion", "Coupling", "Corrosion", "None of the mentioned"],
    correctOptionIndex: 1,
  },
  {
    id: 457,
    question: "QFD stands for",
    options: [
      "quality function design",
      "quality function development",
      "quality function deployment",
      "none of the mentioned",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 458,
    question:
      "The work associated with software engineering can be categorized into three generic phases which focuses on what, how and change respectively.",
    options: ["1,2,3", "2,1,3", "3,2,1", "3,1,2"],
    correctOptionIndex: 2,
  },
  {
    id: 459,
    question: "What are the four dimensions of Dependability",
    options: [
      "Usability, Reliability, Security, Flexibility",
      "Availability, Reliability, Maintainability, Security",
      "Availability, Reliability, Security, Safety",
      "Security, Safety, Testability, Usability",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 460,
    question:
      "Which is not one of the types of prototype of Prototyping Model?",
    options: [
      "Horizontal Prototype",
      "Vertical Prototype",
      "Diagonal Prototype",
      "Domain Prototype",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 461,
    question:
      "Which one of the following models is not suitable for accommodating any change?",
    options: [
      "Build & Fix Model",
      "Prototyping Model",
      "RAD Model",
      "Waterfall Model",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 462,
    question:
      "Which of the following data structure can't store the non-homogeneous data elements?",
    options: ["Arrays", "Records", "Pointers", "None"],
    correctOptionIndex: 0,
  },
  {
    id: 463,
    question:
      "Given two sorted lists of size m and n respectively. The number of comparisons needed in the worst case by merge sort algorithm will be?",
    options: ["mn", "max(m,n)", "min(m,n)", "m+n-1"],
    correctOptionIndex: 3,
  },
  {
    id: 464,
    question: "A variable P is called pointer if",
    options: [
      "P contains the address of an element in DATA.",
      "P points to the address of first element in DATA",
      "P can store only memory addresses",
      "P contain the DATA and the address of DATA",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 465,
    question:
      "Each data item in a record may be a group item composed of sub-items; those items which are indecomposable are called",
    options: ["elementary items", "atoms", "scalars", "all of above"],
    correctOptionIndex: 0,
  },
  {
    id: 466,
    question:
      "Which of the following data structure store the NON homogeneous data elements?",
    options: ["Arrays", "Records", "Pointers", "None"],
    correctOptionIndex: 0,
  },
  {
    id: 467,
    question:
      "A ________ is a data-structure that organizes data similar to a line in the super-market, where the first one in the line is the first to be out:",
    options: ["Queues", "Stacks", "Arrays", "Structures"],
    correctOptionIndex: 0,
  },
  {
    id: 468,
    question:
      "A binary tree with n internal nodes has a max. of external nodes equal to:",
    options: ["n", "n+1", "n-1", "2n"],
    correctOptionIndex: 1,
  },
  {
    id: 469,
    question: "A matrix which has most of its values equal to 0:",
    options: [
      "Sparse Matrix",
      "Zero matrix",
      "Empty matrix",
      "Diagonal matrix",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 470,
    question: "A max-heap is also known as:",
    options: ["increasing heap", "ascending heap", "High heap", "Big heap"],
    correctOptionIndex: 1,
  },
  {
    id: 471,
    question: "A right in-threaded binary tree contains:",
    options: [
      "inorder successor",
      "inorder predecessor",
      "postorder successor",
      "preorder successor",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 472,
    question:
      "A set of several trees that are not linked to each other in any way",
    options: ["Forests", "Graphs", "B Trees", "AVL trees"],
    correctOptionIndex: 0,
  },
  {
    id: 473,
    question: "A sparse matrix can also be represented using:",
    options: ["queue", "Stack", "tree", "Linked List"],
    correctOptionIndex: 3,
  },
  {
    id: 474,
    question: "A tree having any number of nodes:",
    options: ["Binary tree", "General tree", "AVL tree", "B tree"],
    correctOptionIndex: 1,
  },
  {
    id: 475,
    question:
      "A tree in which the value in every node is more than node-values in its left subtree and less than node-values in its right subtree:",
    options: ["Binary search tree", "AVL tree", "B tree", "Splay tree"],
    correctOptionIndex: 0,
  },
  {
    id: 476,
    question:
      "All the non-leaf nodes except the root node in a multi-way search tree of order n have at least ______ children",
    options: ["n", "n-1", "2n", "n/2"],
    correctOptionIndex: 3,
  },
  {
    id: 477,
    question:
      "An algorithm that calls itself directly or indirectly is known as:",
    options: [
      "Sub - Algorithm",
      "Recursive Algorithm",
      "Polish notation",
      "Traversal Algorithm",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 478,
    question: "Complexity of heap sort",
    options: ["O(n)", "O(2n)", "O(logn)", "O(nlogn)"],
    correctOptionIndex: 3,
  },
  {
    id: 479,
    question: "Heaps are of two types:",
    options: ["High and low", "Max and Min", "B and B+", "Complete and Binary"],
    correctOptionIndex: 1,
  },
  {
    id: 480,
    question: "Height of a full binary tree with n internal nodes is:",
    options: ["n", "log n", "n log n", "n-1"],
    correctOptionIndex: 1,
  },
  {
    id: 481,
    question: "If there are more than one paths between two nodes, it is a:",
    options: ["tree", "list", "graph", "path"],
    correctOptionIndex: 2,
  },
  {
    id: 482,
    question: "Incase of min-heap, the value present in any node is:",
    options: [
      "greater than all its children",
      "smaller than all its children",
      "equal to all its children",
      "greater than values in left subtree and smaller than values in right subtree",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 483,
    question: "Shell sort is an improvisation over ______ sort.",
    options: ["quick", "insertion", "merge", "selection"],
    correctOptionIndex: 1,
  },
  {
    id: 484,
    question:
      "The algorithm used in dynamic memory allocation with minimum time:",
    options: ["First fit", "Best fit", "Worst fit", "Next fit"],
    correctOptionIndex: 0,
  },
  {
    id: 485,
    question: "The degree of a leaf node is:",
    options: ["-1", "1", "0", "undefined"],
    correctOptionIndex: 2,
  },
  {
    id: 486,
    question: "The depth of a complete binary tree is given by:",
    options: ["n log n", "log n", "n log n +1", "log n +1"],
    correctOptionIndex: 3,
  },
  {
    id: 487,
    question:
      "The inorder traversal of tree will yield a sorted listing of elements of tree:",
    options: ["Binary tree", "Binary Search Tree", "Heaps", "Splays"],
    correctOptionIndex: 1,
  },
  {
    id: 488,
    question: "The leaf nodes of a tree have height equal to:",
    options: ["height of the tree", "zero", "one", "degree"],
    correctOptionIndex: 1,
  },
  {
    id: 489,
    question: "The terms Tail and Head are related to",
    options: [
      "Singly Linked List",
      "Circular Linked list",
      "Doubly Linked List",
      "Queues",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 490,
    question:
      "The variables which can be accessed by all modules in a program are known as:",
    options: [
      "Local variables",
      "External variables",
      "Internal variables",
      "Global variable",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 491,
    question:
      "To reduce disk-accesses while searching for a record, the tree used is ______ tree.",
    options: ["binary search tree", "General tree", "B tree", "AVL tree"],
    correctOptionIndex: 2,
  },
  {
    id: 492,
    question:
      "When representing any algebraic expression E which uses only binary operations in a 2-tree:",
    options: [
      "the variables in E will appear as external nodes and operations as internal nodes",
      "the operations in E will appear as external nodes and variables as internal nodes",
      "the variables and operations in E will appear only as internal nodes",
      "the variables and operations in E appear only as external nodes",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 493,
    question:
      "Which of the following abstract data types is not used by integer abstract data type group?",
    options: ["Short", "int", "Float", "Long"],
    correctOptionIndex: 2,
  },
  {
    id: 494,
    question:
      "Which of the following data structures can’t store non-homogeneous data-elements:",
    options: ["Arrays", "Records", "Pointers", "Structures"],
    correctOptionIndex: 0,
  },
  {
    id: 495,
    question: "Which of the following is a two-way list:",
    options: [
      "grounded header list",
      "circular header list",
      "linked list with header & trailer nodes",
      "none of the above",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 496,
    question:
      "While calculating time-complexity, the program-time which is considered is:",
    options: ["compile time", "Execution time", "run time", "Analysis time"],
    correctOptionIndex: 1,
  },
  {
    id: 497,
    question:
      "The TTL field has value 10. How many routers (max) can process this datagram?",
    options: ["11", "5", "10", "1"],
    correctOptionIndex: 2,
  },
  {
    id: 498,
    question: "Which field helps to check rearrangement of the fragments?",
    options: ["offset", "flag", "TTL", "identifier"],
    correctOptionIndex: 0,
  },
  {
    id: 499,
    question: "The assignment operator is denoted by",
    options: ["->", "<-", "=", "=="],
    correctOptionIndex: 2,
  },
  {
    id: 500,
    question:
      "____ means that the data used during the execution of a transaction cannot be used by a second transaction until the first one is completed.",
    options: ["Consistency", "Atomicity", "Durability", "Isolation"],
    correctOptionIndex: 3,
  },
  {
    id: 501,
    question:
      "________ has made PL/SQL code run faster without requiring any additional work on the part of the programmer.",
    options: ["SQL Server", "My SQL", "Oracle", "SQL Lite"],
    correctOptionIndex: 2,
  },
  {
    id: 502,
    question: "Isolation of the transactions is ensured by",
    options: [
      "Transaction management",
      "Application programmer",
      "Concurrency control",
      "Recovery management",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 503,
    question: "In precedence of set operators the expression is evaluated from",
    options: [
      "Left to left",
      "Left to right",
      "Right to left",
      "From user specification",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 504,
    question: "Which of the following is the oldest database model?",
    options: ["Relational", "Deductive", "Physical", "Network"],
    correctOptionIndex: 3,
  },
  {
    id: 505,
    question:
      "________ combines the data manipulating power of SQL with the data processing power of Procedural languages.",
    options: ["PL/SQL", "SQL", "Advanced SQL", "PQL"],
    correctOptionIndex: 0,
  },
  {
    id: 506,
    question:
      "__________ is a procedural extension of Oracle – SQL that offers language constructs similar to those in imperative programming languages.",
    options: ["SQL", "PL/SQL", "Advanced SQL", "PQL"],
    correctOptionIndex: 1,
  },
  {
    id: 507,
    question:
      "__________ provides option for entering SQL queries as execution time, rather than at the development stage",
    options: ["PL/SQL", "SQL*Plus", "SQL", "Dynamic SQL"],
    correctOptionIndex: 3,
  },
  {
    id: 508,
    question:
      "__________ is a sequence of zero or more characters enclosed by single quotes.",
    options: [
      "Integers literal",
      "String literal",
      "String units",
      "String label",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 509,
    question:
      "A __________ is an explicit numeric, character, string or Boolean value not represented by an identifier.",
    options: ["Comments", "Literals", "Delimiters", "Identifiers"],
    correctOptionIndex: 1,
  },
  {
    id: 510,
    question:
      "A collection of data designed to be used by different people is called a/an",
    options: ["Organization", "Database", "Relationship", "Schema"],
    correctOptionIndex: 1,
  },
  {
    id: 511,
    question: "A line of PL/SQL text contains groups of characters known as",
    options: ["Lexical Units", "Literals", "Textual Units", "Identifiers"],
    correctOptionIndex: 0,
  },
  {
    id: 512,
    question:
      "A table can be logically connected to another table by defining a",
    options: ["Super key", "Candidate key", "Primary key", "Unique key"],
    correctOptionIndex: 2,
  },
  {
    id: 513,
    question:
      "A transaction is delimited by statements (or function calls) of the form",
    options: [
      "Begin transaction and end transaction",
      "Start transaction and stop transaction",
      "Get transaction and post transaction",
      "Read transaction and write transaction",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 514,
    question: "By default sql server has ______ isolation level",
    options: [
      "READ COMMITTED",
      "READ UNCOMMITTED",
      "SERIALIZABLE",
      "REPEATABLE READ",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 515,
    question:
      "Consider money is transferred from (1) account-A to account-B and (2) account-B to account-A. Which of the following form a transaction?",
    options: [
      "Only 1",
      "Only 2",
      "Both 1 and 2 individually",
      "only 1 or only 2",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 516,
    question:
      "Constraint checking can be disabled in existing ______ and ______ constraints so that any data you modify or add to the table is not checked against the constraint.",
    options: [
      "CHECK, FOREIGN KEY",
      "DELETE, FOREIGN KEY",
      "CHECK, PRIMARY KEY",
      "PRIMARY KEY, FOREIGN KEY",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 517,
    question: "Ensuring isolation property is the responsibility of the",
    options: [
      "Recovery-management component of the DBMS",
      "Concurrency-control component of the DBMS",
      "Transaction-management component of the DBMS",
      "Buffer management component in DBMS",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 518,
    question:
      "For select operation the ______ appear in the subscript and the ______ argument appears in the parenthesis after the sigma.",
    options: [
      "Predicates, relation",
      "Relation, Predicates",
      "Operation, Predicates",
      "Relation, Operation",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 519,
    question: "Identify the characteristics of transactions",
    options: ["Atomicity", "Durability", "Isolation", "All of the mentioned"],
    correctOptionIndex: 3,
  },
  {
    id: 520,
    question:
      "If no header is specified, the block is said to be an ______ PL/SQL block",
    options: ["Strong", "Weak", "Empty", "Anonymous"],
    correctOptionIndex: 3,
  },
  {
    id: 521,
    question:
      "If the state of the database no longer reflects a real state of the world that the database is supposed to capture, then such a state is called",
    options: [
      "Consistent state",
      "Parallel state",
      "Durable state",
      "Inconsistent state",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 522,
    question: "In SQL, the CREATE TABLESPACE is used",
    options: [
      "To create a place in the database for storage of scheme objects, rollback segments, and naming the data files to comprise the tablespace.",
      "To create a database trigger",
      "To add/rename data files, to change storage",
      "All of the mentioned",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 523,
    question:
      "In SQL, which command is used to issue multiple CREATE TABLE, CREATE VIEW and GRANT statements in a single transaction?",
    options: [
      "CREATE PACKAGE",
      "CREATE SCHEMA",
      "CREATE CLUSTER",
      "All of the mentioned",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 524,
    question: "Problems occurs if we don’t implement proper locking strategy",
    options: [
      "Dirty reads",
      "Phantom reads",
      "Lost updates",
      "Unrepeatable reads",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 525,
    question: "SNAPSHOT is used for (DBA)",
    options: [
      "Synonym",
      "Tablespace",
      "System server",
      "Dynamic data replication",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 526,
    question:
      "The ______ operation, denoted by −, allows us to find tuples that are in one relation but are not in another.",
    options: ["Union", "Set-difference", "Difference", "Intersection"],
    correctOptionIndex: 1,
  },
  {
    id: 527,
    question:
      "The best data structure to check whether an arithmetic expression has balanced parentheses is a",
    options: ["Queue", "List", "Stack", "Array"],
    correctOptionIndex: 2,
  },
  {
    id: 528,
    question:
      "The database system must take special actions to ensure that transactions operate properly without interference from concurrently executing database statements. This property is referred to as",
    options: ["Atomicity", "Durability", "Isolation", "All of the mentioned"],
    correctOptionIndex: 2,
  },
  {
    id: 529,
    question:
      "The Oracle RDBMS uses the ____ statement to declare a new transaction start and its properties.",
    options: ["BEGIN", "SET TRANSACTION", "BEGIN TRANSACTION", "COMMIT"],
    correctOptionIndex: 1,
  },
  {
    id: 530,
    question: "The property of transaction that persists all the crashes is",
    options: ["Atomicity", "Durability", "Isolation", "All of the mentioned"],
    correctOptionIndex: 1,
  },
  {
    id: 531,
    question: "The relationship between DEPARTMENT and EMPLOYEE is a",
    options: [
      "One-to-one relationship",
      "One-to-many relationship",
      "Many-to-many relationship",
      "Many-to-one relationship",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 532,
    question:
      "The SQL statement SELECT SUBSTR('123456789', INSTR('abcabcabc','b'), 4) FROM EMP; prints",
    options: ["6789", "2345", "1234", "456789"],
    correctOptionIndex: 1,
  },
  {
    id: 533,
    question:
      "Transaction processing is associated with everything below except",
    options: [
      "Producing detail summary or exception reports",
      "Recording a business activity",
      "Confirming a action or triggering a response",
      "Maintaining a data",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 534,
    question: "We use ______ name PL/SQL program objects and units.",
    options: ["Lexical Units", "Literals", "Delimiters", "Identifiers"],
    correctOptionIndex: 3,
  },
  {
    id: 535,
    question: "What are the different events in Triggers?",
    options: [
      "Define, Create",
      "Drop, Comment",
      "Insert, Update, Delete",
      "Select, Commit",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 536,
    question:
      "When SQL statements are embedded inside 3GL, we call such a program as",
    options: [
      "Nested query",
      "Nested programming",
      "Distinct query",
      "Embedded SQL",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 537,
    question:
      "Which character function can be used to return a specified portion of a character string?",
    options: ["INSTR", "SUBSTRING", "SUBSTR", "POS"],
    correctOptionIndex: 2,
  },
  {
    id: 538,
    question: "Which is a join condition contains an equality operator:",
    options: ["Equijoins", "Cartesian", "Natural", "Left"],
    correctOptionIndex: 0,
  },
  {
    id: 539,
    question: "Which is a unary operation:",
    options: [
      "a) Selection operation",
      "b) Primitive operation",
      "c) Projection operation",
      "d) Generalized selection",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 540,
    question:
      "Which is the subset of SQL commands used to manipulate Oracle Database Structures, including tables?",
    options: [
      "Data Definition Language",
      "Data Manipulation Language",
      "Data Described Language",
      "Data Retrieval Language",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 541,
    question:
      "Which of the following fixed database roles can add or remove user IDs?",
    options: [
      "db_accessadmin",
      "db_securityadmin",
      "db_setupadmin",
      "db_sysadmin",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 542,
    question: "Which of the following has 'all-or-none' property?",
    options: ["Atomicity", "Durability", "Isolation", "All of the mentioned"],
    correctOptionIndex: 0,
  },
  {
    id: 543,
    question:
      "Which of the following is an attribute that can uniquely identify a row in a table?",
    options: ["Secondary key", "Candidate key", "Foreign key", "Alternate key"],
    correctOptionIndex: 1,
  },
  {
    id: 544,
    question: "Which of the following is not outer join?",
    options: [
      "Left outer join",
      "Right outer join",
      "Full outer join",
      "All of the mentioned",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 545,
    question:
      "Which of the following is the process of selecting the data storage and data access characteristics of the database?",
    options: [
      "Logical database design",
      "Physical database design",
      "Testing and performance tuning",
      "Evaluation and selecting",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 546,
    question: "Which of the following is TRUE for the System Variable $date$?",
    options: [
      "Can be assigned to a global variable.",
      "Can be assigned to any field only during design time.",
      "Can be assigned to any variable or field during run time.",
      "Can be assigned to a local variable.",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 547,
    question:
      "Which of the following schemas does define a view or views of the database for particular users?",
    options: [
      "Internal schema",
      "Conceptual schema",
      "Physical schema",
      "External schema",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 548,
    question:
      "Which of the following SQL command can be used to modify existing data in a database table?",
    options: ["MODIFY", "UPDATE", "CHANGE", "NEW"],
    correctOptionIndex: 1,
  },
  {
    id: 549,
    question:
      "Which of the following statements is/are not true for SQL profiler?",
    options: [
      "Enables you to monitor events",
      "Check if rows are being inserted properly",
      "Check the performance of a stored procedure",
      "All of these",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 550,
    question:
      "Which of the following terms does refer to the correctness and completeness of the data in a database?",
    options: [
      "Data security",
      "Data constraint",
      "Data independence",
      "Data integrity",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 551,
    question: "An adaptive sorting algorithm –",
    options: [
      "adapts to new computers",
      "takes advantage of already sorted elements",
      "takes input which is already sorted",
      "none of these",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 552,
    question: "Stack is used for",
    options: [
      "CPU Resource Allocation",
      "Breadth First Traversal",
      "Recursion",
      "Depth First Traversal",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 553,
    question:
      "The time required to search an element in a linked list of length n is",
    options: ["O(n^2)", "O(n log2 n)", "O(n)", "O(log2 n)"],
    correctOptionIndex: 2,
  },
  {
    id: 554,
    question:
      "________ states that only valid data will be written to the database.",
    options: ["Consistency", "Atomicity", "Durability", "Isolation"],
    correctOptionIndex: 0,
  },
  {
    id: 555,
    question: "B+ trees are preferred to binary trees in databases because",
    options: [
      "Disk capacities are greater than memory capacities",
      "Disk access is much slower than memory access",
      "Disk data transfer rates are much less than memory data transfer rates",
      "Disks are more reliable than memory",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 556,
    question:
      "Consider the nested representation of binary trees (X Y Z). Which represents a valid binary tree?",
    options: [
      "(1 2 (4 5 6 7))",
      "(1 (2 3 4) 5 6) 7)",
      "(1 (2 3 4)(5 6 7))",
      "(1 (2 3 NULL) (4 5))",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 557,
    question: "Which traversal pairs uniquely identify a labeled binary tree?",
    options: ["(i) only", "(ii), (iii)", "(iii) only", "(iv) only"],
    correctOptionIndex: 1,
  },
  {
    id: 558,
    question:
      "In a complete binary tree, the number of leaves with n internal nodes is",
    options: ["2n", "2(n-1)+1", "n+1", "n"],
    correctOptionIndex: 2,
  },
  {
    id: 559,
    question:
      "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is",
    options: ["log 2n", "n/2", "log n-1", "n"],
    correctOptionIndex: 3,
  },
  {
    id: 560,
    question:
      "Let LASTPOST, LASTIN and LASTPRE denote the last vertex visited in postorder, inorder and preorder traversal respectively of a complete binary tree. Which is always true?",
    options: [
      "LASTIN = LASTPOST",
      "LASTIN = LASTPRE",
      "LASTPRE = LASTPOST",
      "None of the above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 561,
    question:
      "Let s be a sorted array of n integers. Time to determine if there are two elements with sum < 1000 is",
    options: [
      "t(n) is O(1)",
      "n < t(n) < n",
      "n log2 n < t(n) < n log3 n",
      "t(n) is O(n)",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 562,
    question: "Level order traversal of a rooted tree can be done using",
    options: [
      "preorder traversal",
      "in-order traversal",
      "depth first search",
      "breadth first search",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 563,
    question: "Which sequence can be the inorder traversal of the given BST?",
    options: [
      "9,10,15,22,23,25,27,29,40,50,60,95",
      "9,10,15,22,40,50,60,95,23,25,27,29",
      "29,15,9,10,25,22,23,27,40,60,50,95",
      "95,50,60,40,27,23,22,25,10,9,15,29",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 564,
    question:
      "Inorder traversal sequence after inserting 7,5,1,8,3,6,0,9,4,2 into BST is",
    options: [
      "7 5 1 0 3 2 4 6 8 9",
      "0 2 4 3 1 6 5 9 8 7",
      "0 1 2 3 4 5 6 7 8 9",
      "9 8 6 4 2 3 0 1 5 7",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 565,
    question: "One possible BFS order of the graph is",
    options: ["MNOPQR", "NQMPOR", "QMNPRO", "QMNPOR"],
    correctOptionIndex: 3,
  },
  {
    id: 566,
    question: "Height of the BST after inserting 10,1,3,5,15,12,16 is",
    options: ["2", "3", "4", "6"],
    correctOptionIndex: 1,
  },
  {
    id: 567,
    question: "Maximum nodes in a binary tree of height h is",
    options: ["2^(h-1)-1", "2^(h+1)-1", "2^h+1", "2^(h+1)"],
    correctOptionIndex: 1,
  },
  {
    id: 568,
    question: "Postorder traversal of the BST is",
    options: [
      "10,20,15,23,25,35,42,39,30",
      "15,10,25,23,20,42,35,39,30",
      "15,20,10,23,25,42,35,39,30",
      "15,10,23,25,20,35,42,39,30",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 569,
    question:
      "The recurrence relation capturing the optimal time of the Tower of Hanoi problem is",
    options: [
      "T(n)=2T(n-2)+2",
      "T(n)=2T(n-1)+n",
      "T(n)=2T(n/2)+1",
      "T(n)=2T(n-1)+1",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 570,
    question:
      "Data structure used to implement Dijkstra’s algorithm in linear time for unweighted graphs",
    options: ["Queue", "Stack", "B-Tree", "Array"],
    correctOptionIndex: 0,
  },
  {
    id: 571,
    question: "Maximum height of AVL tree with 7 nodes",
    options: ["2", "3", "4", "5"],
    correctOptionIndex: 1,
  },
  {
    id: 572,
    question: "Sorting algorithm with lowest worst case complexity",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Selection Sort"],
    correctOptionIndex: 0,
  },
  {
    id: 573,
    question: "In-place sorting algorithm requiring minimum swaps",
    options: ["Quick sort", "Insertion sort", "Selection sort", "Heap sort"],
    correctOptionIndex: 2,
  },
  {
    id: 574,
    question:
      "Key factor for preferring B-trees to binary search trees in database indexing",
    options: [
      "Database relations have a large number of records",
      "Database relations are sorted on the primary key",
      "B-trees require less memory than binary search trees",
      "Data transfer from disks is in blocks",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 575,
    question: "Merge sort uses",
    options: [
      "Divide and conquer strategy",
      "Backtracking approach",
      "Heuristic Search",
      "Greedy approach",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 576,
    question:
      "The following sequence of operation is performed on stack: push(1), push(2), pop, push(1), push(2), pop, pop, pop, push(2), pop. The sequence of popped out values are?",
    options: ["2,2,1,1,2", "2,2,1,2,2", "2,1,2,2,1", "2,1,2,2,2"],
    correctOptionIndex: 0,
  },
  {
    id: 577,
    question:
      "The number of swapping needed to sort numbers 8,22,7,9,31,19,5,13 in ascending order using bubble sort is?",
    options: ["10", "12", "14", "16"],
    correctOptionIndex: 2,
  },
  {
    id: 578,
    question:
      "Which of the following algorithm design technique is used in the quick sort algorithm?",
    options: [
      "Dynamic programming",
      "Backtracking",
      "Divide and conquer",
      "Greedy method",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 579,
    question: "Which of the following statement is true?",
    options: [
      "Optimal binary search tree construction can be performed efficiently using dynamic programming.",
      "Breadth first search cannot be used to find connected components of a graph.",
      "Given the prefix and postfix walks over a binary tree, the binary tree cannot be uniquely constructed.",
      "Depth first search can be used to find connected components of a graph.",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 580,
    question:
      "A search begins the search with the element that is located in the middle of array",
    options: ["Serial", "Random", "Parallel", "Binary"],
    correctOptionIndex: 3,
  },
  {
    id: 581,
    question:
      "From a complete graph, by removing maximum ______ edges, we can construct a spanning tree.",
    options: ["e-n+1", "n-e+1", "n+e-1", "e-n-1"],
    correctOptionIndex: 0,
  },
  {
    id: 582,
    question: "Heap is an example of",
    options: [
      "complete binary tree",
      "spanning tree",
      "sparse tree",
      "binary search tree",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 583,
    question: "The complexity of linear search algorithm is",
    options: ["O(n)", "O(log n)", "O(log n)", "O(n log n)"],
    correctOptionIndex: 0,
  },
  {
    id: 584,
    question:
      "To sort many large objects or structures, it would be most efficient to",
    options: [
      "Place them in an array and sort the array",
      "Place pointers to them in an array and sort the array",
      "Place them in a linked list and sort the linked list",
      "Place references to them in an array and sort the array",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 585,
    question:
      "Which of the below given sorting techniques has highest best-case runtime complexity?",
    options: ["Quick sort", "Selection sort", "Insertion sort", "Bubble sort"],
    correctOptionIndex: 1,
  },
  {
    id: 586,
    question: "Which of the following algorithm is not stable?",
    options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Insertion Sort"],
    correctOptionIndex: 1,
  },
  {
    id: 587,
    question: "Which of the following sorting procedure is the slowest?",
    options: ["Quick Sort", "Heap Sort", "Shell Sort", "Bubble Sort"],
    correctOptionIndex: 3,
  },
  {
    id: 588,
    question: "Which of the following uses memoization?",
    options: [
      "Greedy approach",
      "Divide and conquer approach",
      "Dynamic programming approach",
      "None of these",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 589,
    question: "Which one of the below is not divide and conquer approach?",
    options: ["Insertion Sort", "Merge Sort", "Shell Sort", "Heap Sort"],
    correctOptionIndex: 1,
  },
  {
    id: 590,
    question:
      "Relational Algebra is a ______ query language that takes two relation as input and produces another relation as output of the query.",
    options: ["Relational", "Structural", "Procedural", "Fundamental"],
    correctOptionIndex: 2,
  },
  {
    id: 591,
    question:
      "Which of the following pattern is the basis of interaction management in many web-based systems?",
    options: [
      "architecture",
      "repository pattern",
      "model-view-controller",
      "different operating system",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 592,
    question:
      "Which design identifies the software as a system with many components interacting with each other?",
    options: [
      "Architectural design",
      "High-level design",
      "Detailed design",
      "Low-level design",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 593,
    question: "The context diagram is also known as:",
    options: ["Level-0 DFD", "Level-1 DFD", "Level-2 DFD", "Level-3 DFD"],
    correctOptionIndex: 0,
  },
  {
    id: 594,
    question: "Baud means?",
    options: [
      "The number of bits transmitted per unit time",
      "The number of bytes transmitted per unit time",
      "The rate at which the signal changes",
      "None of above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 595,
    question: "How long is an IPv6 address?",
    options: ["32 bits", "128 bits", "128 bytes", "64 bits"],
    correctOptionIndex: 1,
  },
  {
    id: 596,
    question: "Loss in signal power as light travels down the fiber is called?",
    options: ["Attenuation", "Propagation", "Scattering", "Interruption"],
    correctOptionIndex: 0,
  },
  {
    id: 597,
    question: "Protocols are?",
    options: [
      "Agreements on how communication components and DTE's are to communicate",
      "Logical communication channels for transferring data",
      "Physical communication channels used for transferring data",
      "Logical communication channels used for transferring data",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 598,
    question: "Under mark parity, each parity bit is?",
    options: [
      "Alternated between 0 and 1",
      "Always set to 0",
      "Always set to 1",
      "Not used",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 599,
    question:
      "Although they've fallen out of favor, which device is used to connect different network segments and manage traffic between them?",
    options: ["Bridge", "Hub", "Gateway", "Repeater"],
    correctOptionIndex: 0,
  },
  {
    id: 600,
    question: "How often are BPDUs sent from a layer 2 device?",
    options: [
      "Every 2 seconds",
      "Never",
      "Every 10 minutes",
      "Every 30 seconds",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 601,
    question:
      "In dial-up remote access a client uses the ____ to create a physical connection to a port on a remote access server of the private network.",
    options: [
      "telephone network",
      "Banks branch network",
      "Private network",
      "local network",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 602,
    question:
      "In OSI model dialogue control and token management are responsibilities of?",
    options: [
      "Session Layer",
      "Network Layer",
      "Transport Layer",
      "Data Link Layer",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 603,
    question: "Star Topology is based on a central device that can be ______?",
    options: ["Hub", "Switch", "Router", "Both Hub and Switch"],
    correctOptionIndex: 3,
  },
  {
    id: 604,
    question: "Switch is a device of ______ layer of OSI model.",
    options: [
      "Network Layer",
      "Data Link Layer",
      "Application Layer",
      "Session Layer",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 605,
    question: "What is a stub network?",
    options: [
      "A network that has only one entry and exit point.",
      "A network with only one entry and no exit point.",
      "A network with more than one exit point.",
      "A network with more than one exit and entry point.",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 606,
    question: "What protocols are used to configure trunking on a switch?",
    options: ["VLAN Trunking Protocol", "VLAN", "802.1Q", "ISL"],
    correctOptionIndex: 2,
  },
  {
    id: 607,
    question:
      "Which device takes data sent from one network device and forwards it to all devices on the network regardless of the intended recipient?",
    options: ["DNS Server", "Switch", "Hub", "Gateway"],
    correctOptionIndex: 2,
  },
  {
    id: 608,
    question:
      "Which device forwards data to the destination node based on MAC address?",
    options: ["Hub", "Switch", "Gateway", "Modem"],
    correctOptionIndex: 1,
  },
  {
    id: 609,
    question: "Which of the following services use TCP?",
    options: ["DHCP", "SMTP", "FTP", "TFTP"],
    correctOptionIndex: 1,
  },
  {
    id: 610,
    question:
      "Which term describes a hardware or software device that protects networks from outside threats?",
    options: ["NIC", "Gateway", "Firewall", "Hub"],
    correctOptionIndex: 2,
  },
  {
    id: 611,
    question: "Which protocol does Ping use?",
    options: ["TCP", "ARP", "ICMP", "BootP"],
    correctOptionIndex: 2,
  },
  {
    id: 612,
    question:
      "Which router command allows you to view the entire contents of all access lists?",
    options: [
      "show all access-lists",
      "show access-lists",
      "show ip interface",
      "show interface",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 613,
    question:
      "You have 10 users plugged into a hub running 10Mbps half-duplex. There is a server connected to the switch running 10Mbps half-duplex as well. How much bandwidth does each host have to the server?",
    options: ["100 kbps", "10 Mbps", "1 Mbps", "2 Mbps"],
    correctOptionIndex: 1,
  },
  {
    id: 614,
    question:
      "________ is a more generalized single source shortest path algorithm which can find the shortest path in a graph with negative weighted edges.",
    options: [
      "Kruskal's algorithm",
      "Prim's algorithm",
      "Dijkstra algorithm",
      "Bellman Ford algorithm",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 615,
    question:
      "A ______ is a data structure that organizes data similar to a line in the supermarket, where the first one in line is the first one out.",
    options: [
      "Queue as linked list",
      "Stack as linked list",
      "Both of them",
      "Neither of them",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 616,
    question:
      "A distributed network configuration in which all data/information pass through a central computer is",
    options: [
      "Bus network",
      "Star network",
      "Ring network",
      "Point-to-point network",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 617,
    question: "A front-end processor is",
    options: [
      "a user computer system",
      "a processor in a large-scale computer that executes operating system instructions",
      "a minicomputer that relieves main-frame computers at a computer centre of communications control functions",
      "preliminary processor of batch jobs",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 618,
    question:
      "A noiseless 3 KHz channel transmits bits with binary level signals. What is the maximum data rate?",
    options: ["3 Kbps", "6 Kbps", "12 Kbps", "24 Kbps"],
    correctOptionIndex: 1,
  },
  {
    id: 619,
    question:
      "A remote batch-processing operation in which data is solely input to a central computer would require a:",
    options: [
      "Telegraph line",
      "Simplex lines",
      "Mixedband channel",
      "Duplex lines",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 620,
    question:
      "A station in a network forwards incoming packets by placing them on its shortest output queue. What routing algorithm is being used?",
    options: [
      "Hot potato routing",
      "Flooding",
      "Static routing",
      "Delta routing",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 621,
    question:
      "Avalanche photodiode receivers can detect bits of transmitted data by receiving",
    options: ["100 photons", "200 photons", "300 photons", "400 photons"],
    correctOptionIndex: 1,
  },
  {
    id: 622,
    question: "Carrier is",
    options: [
      "One or more conductors that serve as a common connection for a related group of devices",
      "a continuous frequency capable of being modulated or impressed with a second signal",
      "the condition when two or more sections attempt to use the same channel at the same time",
      "a collection of interconnected functional units that provides a data communications service among stations attached to the network",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 623,
    question: "Contention is",
    options: [
      "One or more conductors that serve as a common connection for a related group of devices",
      "a continuous frequency capable of being modulated or impressed with a second signal",
      "the condition when two or more stations attempt to use the same channel at the same time",
      "a collection of interconnected functional units that provides a data communications service among stations attached to the network",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 624,
    question:
      "Eight stations are competing for the use of a shared channel using the Adaptive Tree Walk Protocol. If stations 7 and 8 suddenly become ready at once, how many bit slots are needed to resolve the contention?",
    options: ["7 slots", "5 slots", "10 slots", "14 slots"],
    correctOptionIndex: 0,
  },
  {
    id: 625,
    question:
      "Frames from one LAN can be transmitted to another LAN via the device",
    options: ["Router", "Bridge", "Repeater", "Modem"],
    correctOptionIndex: 1,
  },
  {
    id: 626,
    question:
      "How many bits internet address is assigned to each host on a TCP/IP internet which is used in all communications with the host?",
    options: ["16 bits", "32 bits", "48 bits", "64 bits"],
    correctOptionIndex: 1,
  },
  {
    id: 627,
    question:
      "How many digits of the DNIC (Data Network Identification Code) identify the country?",
    options: ["first three", "first four", "first five", "first six"],
    correctOptionIndex: 0,
  },
  {
    id: 628,
    question:
      "How many hosts are attached to each of the local area networks at your site?",
    options: ["128", "254", "256", "64"],
    correctOptionIndex: 1,
  },
  {
    id: 629,
    question: "ICMP (Internet Control Message Protocol) is",
    options: [
      "a TCP/IP protocol used to dynamically bind a high level IP address to a low-level physical hardware address",
      "a TCP/IP high level protocol for transferring files from one machine to another",
      "a protocol used to monitor computers",
      "a protocol that handles error and control messages",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 630,
    question:
      "If you get both local and remote echoes, every character you type will appear on the screen",
    options: ["once", "twice", "three times", "never"],
    correctOptionIndex: 1,
  },
  {
    id: 631,
    question:
      "In CRC there is no error if the remainder at the receiver is ______.",
    options: [
      "equal to the remainder at the sender",
      "zero",
      "nonzero",
      "the quotient at the sender",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 632,
    question: "Items in a priority queue are entered in a ______ order",
    options: [
      "Random",
      "Order of priority",
      "as and when they come",
      "same priority",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 633,
    question: "Satellite-Switched Time-Division Multiple Access (SS/TDMA) is",
    options: [
      "the method of determining which device has access to the transmission medium at any time",
      "a medium access control technique for multiple access transmission media",
      "a form of TDMA in which circuit switching is used to dynamically change the channel assignments",
      "All of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 634,
    question:
      "The Floyd-Warshall all pairs shortest path algorithm computes the shortest paths between each pair of nodes in",
    options: ["O(log n)", "O(log2 n)", "O(n^2)", "O(n^3)"],
    correctOptionIndex: 3,
  },
  {
    id: 635,
    question: "The Internet Control Message Protocol (ICMP)",
    options: [
      "allows gateways to send error and control messages to other gateways or hosts",
      "provides communication between the Internet Protocol software on one machine and another",
      "reports error conditions to the original source",
      "All of the above",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 636,
    question:
      "The probability that a single bit will be in error on a typical public telephone line using 4800 bps modem is 10^-3. If no error detection mechanism is used, the residual error rate for a communication line using 9-bit frames is approximately",
    options: ["0.003", "0.009", "0.991", "0.999"],
    correctOptionIndex: 1,
  },
  {
    id: 637,
    question: "The slowest transmission speeds are those of",
    options: [
      "twisted-pair wire",
      "coaxial cable",
      "fiber-optic cable",
      "microwaves",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 638,
    question:
      "The synchronous modems are more costly than asynchronous modems because",
    options: [
      "they produce large volume of data",
      "they contain clock recovery circuits",
      "they transmit the data with stop and start bits",
      "they operate with a larger bandwidth",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 639,
    question:
      "In full duplex data transmission, both the sender and the receiver",
    options: [
      "cannot talk at once",
      "can receive and send data simultaneously",
      "can send or receive data one at a time",
      "can do one way data transmission only",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 640,
    question:
      "To connect a computer with a device in the same room, you might be likely to use",
    options: [
      "a coaxial cable",
      "a dedicated line",
      "a ground station",
      "All of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 641,
    question:
      "Usually it takes 10 bits to represent one character. How many characters can be transmitted at a speed of 1200 BPS?",
    options: ["10", "12", "120", "1200"],
    correctOptionIndex: 2,
  },
  {
    id: 642,
    question:
      "What are the most commonly used transmission speeds in BPS used in data communication?",
    options: ["300", "1200", "2400", "9600"],
    correctOptionIndex: 3,
  },
  {
    id: 643,
    question: "What can greatly reduce TCP/IP configuration problems?",
    options: ["WINS Server", "WINS Proxy", "DHCP Server", "PDC"],
    correctOptionIndex: 2,
  },
  {
    id: 644,
    question: "What is the default subnet mask for a Class C network?",
    options: ["127.0.0.1", "255.0.0.0", "255.255.0.0", "255.255.255.0"],
    correctOptionIndex: 3,
  },
  {
    id: 645,
    question: "What is the port number for NNTP?",
    options: ["119", "80", "79", "70"],
    correctOptionIndex: 0,
  },
  {
    id: 646,
    question:
      "What part of 192.168.10.51 is the Network ID assuming a default subnet mask?",
    options: ["192", "192.168.10", "0.0.0.5", "51"],
    correctOptionIndex: 1,
  },
  {
    id: 647,
    question: "When you ping the loopback address, a packet is sent where?",
    options: [
      "On the network",
      "Down through the layers of the IP architecture and then up the layers again",
      "Across the wire",
      "Through the loopback dongle",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 648,
    question:
      "Which condition is used to transmit two packets over a medium at the same time?",
    options: ["Contention", "Collision", "Synchronous", "Asynchronous"],
    correctOptionIndex: 1,
  },
  {
    id: 649,
    question:
      "Which device is used to connect two systems especially if the systems use different protocols?",
    options: ["Hub", "Bridge", "Gateway", "Repeater"],
    correctOptionIndex: 2,
  },
  {
    id: 650,
    question: "Which of the following is not a disadvantage of wireless LAN?",
    options: [
      "Slower data transmission",
      "Higher error rate",
      "Interference of transmissions from different computers",
      "All of the above",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 651,
    question: "Which device is used for modulation and demodulation?",
    options: ["Modem", "Protocols", "Gateway", "Multiplexer"],
    correctOptionIndex: 0,
  },
  {
    id: 652,
    question:
      "Which TCP/IP protocol allows an application program on one machine to send a datagram to an application program on another machine?",
    options: ["UDP", "VMTP", "X.25", "SMTP"],
    correctOptionIndex: 0,
  },
  {
    id: 653,
    question:
      "Which of the following TCP/IP protocol is used for transferring electronic mail messages from one machine to another?",
    options: ["FTP", "SNMP", "SMTP", "RPC"],
    correctOptionIndex: 2,
  },
  {
    id: 654,
    question: "Which of the following technique is used for fragment?",
    options: [
      "a technique used in best-effort delivery systems to avoid endlessly looping packets",
      "a technique used by protocols in which a lower level protocol accepts a message from a higher level protocol and places it in the data portion of the low level frame",
      "one of the pieces that results when an IP gateway divides an IP datagram into smaller pieces for transmission across a network that cannot handle the original datagram size",
      "All of these",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 655,
    question: "Which of the following ways is a pre-order traversal?",
    options: [
      "Root -> left subtree -> right subtree",
      "Root -> right subtree -> left subtree",
      "right subtree -> left subtree -> Root",
      "left subtree -> right subtree -> Root",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 656,
    question:
      "You have a class A network address 10.0.0.0 with 40 subnets, but are required to add 60 new subnets very soon. Which subnet mask should you assign?",
    options: ["255.240.0.0", "255.248.0.0", "255.255.255.255", "255.254.0.0"],
    correctOptionIndex: 3,
  },
  {
    id: 657,
    question:
      "Your company has a LAN in its downtown office and another LAN in the manufacturing plant in the suburbs. What device is needed to connect them?",
    options: ["Modem", "Cable", "Hub", "Router"],
    correctOptionIndex: 3,
  },
  {
    id: 658,
    question: "Hacking is the term given to ______ operation.",
    options: ["Carding", "Scutching", "Combing", "Pulling"],
    correctOptionIndex: 0,
  },
  {
    id: 659,
    question: "Error detection at the data link layer is achieved by?",
    options: [
      "Bit stuffing",
      "Cyclic redundancy codes",
      "Hamming codes",
      "Equalization",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 660,
    question:
      "How many collision domains are created when you segment a network with a 12-port switch?",
    options: ["1", "12", "5", "2"],
    correctOptionIndex: 1,
  },
  {
    id: 661,
    question: "In communication satellite, multiple repeaters are known as?",
    options: ["Detectors", "Modulators", "Stations", "Transponders"],
    correctOptionIndex: 3,
  },
  {
    id: 662,
    question: "The topology with highest reliability is?",
    options: [
      "Bus topology",
      "Star topology",
      "Ring topology",
      "Mesh topology",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 663,
    question:
      "Which data communication method is used to transmit the data over a serial communication link?",
    options: ["Simplex", "Half-duplex", "Full-duplex", "Half and Full Duplex"],
    correctOptionIndex: 2,
  },
  {
    id: 664,
    question:
      "________ keeps two sets of vertices; S, whose shortest paths from the source have already been determined and V-S, the remaining vertices.",
    options: [
      "Kruskal's algorithm",
      "Prim's algorithm",
      "Dijkstra algorithm",
      "Bellman ford algorithm",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 665,
    question: "______ is the term used to insert an element into stack.",
    options: ["Push", "Pull", "Pump", "Pop"],
    correctOptionIndex: 0,
  },
  {
    id: 666,
    question: "______ form of access is used to add/remove nodes from a stack.",
    options: ["LIFO", "FIFO", "Both A and B", "Neither A nor B"],
    correctOptionIndex: 0,
  },
  {
    id: 667,
    question:
      "______ form of access is used to add and remove nodes from a queue.",
    options: [
      "LIFO, Last In First Out",
      "FIFO, First In First Out",
      "Both A and B",
      "Neither A nor B",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 668,
    question: "______ is the term used to delete an element from the stack.",
    options: ["Push", "Pull", "Pop", "Pump"],
    correctOptionIndex: 2,
  },
  {
    id: 669,
    question:
      "________ turns out that one can find the shortest paths from a given source to all points in a graph in the same time.",
    options: [
      "Kruskal's algorithm",
      "Prim's algorithm",
      "Dijkstra algorithm",
      "Bellman ford algorithm",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 670,
    question:
      "A binary tree whose every node has either zero or two children is called ______.",
    options: [
      "complete binary tree",
      "binary search tree",
      "extended binary tree",
      "data structure",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 671,
    question: "A connected graph T without any cycles is called ______.",
    options: ["Free graph", "No cyclic graph", "Non cycle graph", "Trees"],
    correctOptionIndex: 3,
  },
  {
    id: 672,
    question:
      "A pointer variable which contains the location at the top element of the stack is called ______.",
    options: ["Top", "Last", "Final", "End"],
    correctOptionIndex: 0,
  },
  {
    id: 673,
    question: "A queue is a ______.",
    options: ["FIFO", "FILO", "LOFI", "LIFO"],
    correctOptionIndex: 0,
  },
  {
    id: 674,
    question:
      "A sample application of ______ algorithm is to solve critical path problem (longest path through a DAG).",
    options: [
      "DAG application path algorithm",
      "DAG shortest path algorithm",
      "DAG critical path algorithm",
      "Bellman ford algorithm",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 675,
    question: "A terminal node in a binary tree is called ______.",
    options: ["Root", "Leaf", "Child", "Branch"],
    correctOptionIndex: 1,
  },
  {
    id: 676,
    question: "Binary trees with threads are called ______.",
    options: [
      "Threaded trees",
      "Pointer trees",
      "Special trees",
      "Special pointer trees",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 677,
    question: "Breadth First Search is used in ______.",
    options: ["Binary trees", "Stacks", "Graphs", "Queues"],
    correctOptionIndex: 2,
  },
  {
    id: 678,
    question: "Deletion operation is done using ______ in a queue.",
    options: ["Front", "Rear", "Top", "List"],
    correctOptionIndex: 0,
  },
  {
    id: 679,
    question:
      "Every node N in a binary tree T except the root has a unique parent called the ______ of N.",
    options: ["Antecedents", "Predecessor", "Forerunner", "Precursor"],
    correctOptionIndex: 1,
  },
  {
    id: 680,
    question:
      "Graph G is ______ if for any pair u,v of nodes in G there is a path from u to v or path from v to u.",
    options: [
      "Leterally connected",
      "Widely connected",
      "Unliterally connected",
      "Literally connected",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 681,
    question: "Header node is used in .....",
    options: ["Stacks", "Queues", "Linked List", "Binary trees"],
    correctOptionIndex: 2,
  },
  {
    id: 682,
    question:
      "Identify the data structure which allows deletions at both ends of the list but insertion at only one end.",
    options: [
      "Input restricted dequeue",
      "Output restricted dequeue",
      "Priority queue",
      "Stack",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 683,
    question:
      "In __________ tree, the heights of the two child subtrees of any node differ by at most one.",
    options: ["Binary tree", "Red Black Tree", "Splay tree", "AVL tree"],
    correctOptionIndex: 3,
  },
  {
    id: 684,
    question: "In a 2-tree, nodes with 0 children are called ............",
    options: ["Exterior node", "Outer node", "External node", "Inner node"],
    correctOptionIndex: 2,
  },
  {
    id: 685,
    question: "In a graph if E = (u,v) means ......",
    options: [
      "u is adjacent to v but v is not adjacent to u",
      "e begins at u and ends at v",
      "u is processor and v is successor",
      "v is processor and u is successor",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 686,
    question: "In binary trees nodes with no successor are called ......",
    options: ["End nodes", "Terminal nodes", "Final nodes", "Last nodes"],
    correctOptionIndex: 1,
  },
  {
    id: 687,
    question:
      "In linked representation of stack ........ holds the elements of the stack.",
    options: ["INFO fields", "TOP fields", "LINK fields", "NULL fields"],
    correctOptionIndex: 0,
  },
  {
    id: 688,
    question:
      "In linked representation of stack the null pointer of the last node in the list signals ..........",
    options: [
      "Beginning of the stack",
      "Bottom of the stack",
      "Middle of the stack",
      "In between some value",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 689,
    question:
      "In the linked representation of the stack ........ behaves as the top pointer variable of stack.",
    options: [
      "Stop pointer",
      "Begin pointer",
      "Start pointer",
      "Avail pointer",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 690,
    question: "Key value pair is usually seen in",
    options: ["Hash table", "Heaps", "Splay trees", "Skip lists"],
    correctOptionIndex: 0,
  },
  {
    id: 691,
    question:
      "Linked representation of binary tree needs ........ parallel arrays.",
    options: ["4", "2", "3", "5"],
    correctOptionIndex: 2,
  },
  {
    id: 692,
    question: "New nodes are added to the ........ of the queue.",
    options: ["Front", "Back", "Middle", "Both ends"],
    correctOptionIndex: 1,
  },
  {
    id: 693,
    question: "On which principle does queue work?",
    options: ["FILO", "LIFO", "LILO", "FIFO"],
    correctOptionIndex: 3,
  },
  {
    id: 694,
    question: "Other name for directed graph is ..........",
    options: ["Direct graph", "Digraph", "Dir-graph", "Directional graph"],
    correctOptionIndex: 1,
  },
  {
    id: 695,
    question:
      "Rather than build a subgraph one edge at a time __________ builds a tree one vertex at a time.",
    options: [
      "Kruskal's algorithm",
      "Prim's algorithm",
      "Dijkstra algorithm",
      "Bellman ford algorithm",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 696,
    question: "Sequential representation of binary tree uses ........",
    options: [
      "Array with pointers",
      "Single linear array",
      "Two dimensional arrays",
      "Three dimensional arrays",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 697,
    question: "Stack follows the strategy of ........",
    options: ["LIFO", "FIFO", "LRU", "RANDOM"],
    correctOptionIndex: 0,
  },
  {
    id: 698,
    question:
      "The ........ process updates the costs of all the vertices V connected to a vertex U if we could improve the best estimate of the shortest path.",
    options: ["Relaxation", "Improvement", "Shortening", "Costing"],
    correctOptionIndex: 0,
  },
  {
    id: 699,
    question: "The elements are removed from a stack in ........ order.",
    options: ["Hierarchical", "Reverse", "Alternate", "Sequential"],
    correctOptionIndex: 1,
  },
  {
    id: 700,
    question: "The insertion operation in the stack is called ........",
    options: ["Insert", "Push", "Pop", "Top"],
    correctOptionIndex: 1,
  },
  {
    id: 701,
    question:
      "The operation of processing each element in the list is known as ......",
    options: ["Sorting", "Merging", "Inserting", "Traversal"],
    correctOptionIndex: 3,
  },
  {
    id: 702,
    question:
      "The result of Prim's algorithm is a total time bound of ............",
    options: ["O(log n)", "O(m + n log n)", "O(mn)", "O(m log n)"],
    correctOptionIndex: 1,
  },
  {
    id: 703,
    question: "The retrieval of items in a stack is ........ operation.",
    options: ["Push", "Pop", "Retrieval", "Access"],
    correctOptionIndex: 1,
  },
  {
    id: 704,
    question: "The term enqueue and dequeue is related to",
    options: ["Trees", "Stacks", "Queues", "Linked Lists"],
    correctOptionIndex: 2,
  },
  {
    id: 705,
    question: "The term ParentTree and Child is related to",
    options: ["Trees", "Stacks", "Queues", "Linked Lists"],
    correctOptionIndex: 0,
  },
  {
    id: 706,
    question: "The term push and pop is related to",
    options: ["Trees", "Stacks", "Queues", "Linked Lists"],
    correctOptionIndex: 1,
  },
  {
    id: 707,
    question:
      "The time required in best case for search operation in binary tree is",
    options: ["O(n)", "O(1)", "O(2n)", "O(log n)"],
    correctOptionIndex: 1,
  },
  {
    id: 708,
    question:
      "To represent hierarchical relationship between elements, which data structure is suitable?",
    options: ["Dequeue", "Priority queue", "Tree", "Graph"],
    correctOptionIndex: 2,
  },
  {
    id: 709,
    question: "TREE[1] = NULL indicates tree is ........",
    options: ["Overflow", "Underflow", "Empty", "Full"],
    correctOptionIndex: 2,
  },
  {
    id: 710,
    question:
      "Trees are said ______ if they are similar and have same contents at corresponding nodes.",
    options: ["Duplicate", "Carbon copy", "Replica", "Copies"],
    correctOptionIndex: 3,
  },
  {
    id: 711,
    question: "What happens when you push a new node onto a stack?",
    options: [
      "The new node is placed at the front of the linked list",
      "The new node is placed at the back of the linked list",
      "The new node is placed at the middle of the linked list",
      "No changes happens",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 712,
    question: "What is the peculiarity of red black trees?",
    options: [
      "In red-black trees, the root do not contain data.",
      "In red-black trees, the leaf nodes are not relevant and do not contain data.",
      "In red-black trees, the leaf nodes are relevant but do not contain data.",
      "The nodes are red and black in colour",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 713,
    question:
      "Which data structure allows deleting data elements from and inserting at rear?",
    options: ["Stacks", "Queues", "Dequeues", "Binary Search Tree"],
    correctOptionIndex: 1,
  },
  {
    id: 714,
    question:
      "Which data structure is used in breadth first search of a graph to hold nodes?",
    options: ["Stack", "Queue", "Tree", "Array"],
    correctOptionIndex: 1,
  },
  {
    id: 715,
    question: "Which is the pointer associated with the stack?",
    options: ["FIRST", "FRONT", "TOP", "REAR"],
    correctOptionIndex: 2,
  },
  {
    id: 716,
    question:
      "Which of the following data structure can't store the non-homogeneous data elements?",
    options: ["Arrays", "Records", "Pointers", "Stacks"],
    correctOptionIndex: 0,
  },
  {
    id: 717,
    question: "Which of the following data structure is non linear type?",
    options: ["Strings", "Lists", "Stacks", "Graphs"],
    correctOptionIndex: 3,
  },
  {
    id: 718,
    question: "Which of the following is an application of stack?",
    options: [
      "finding factorial",
      "tower of Hanoi",
      "infix to postfix",
      "all of the above",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 719,
    question:
      "Which of the following linked list below have only last node of the list pointing to the first node?",
    options: [
      "circular doubly linked list",
      "circular linked list",
      "circular singly linked list",
      "doubly linked list",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 720,
    question: "Which of the following name does not relate to stacks?",
    options: ["FIFO", "LIFO", "Piles", "Push down"],
    correctOptionIndex: 0,
  },
  {
    id: 721,
    question: "Which of the following data structure has cycles?",
    options: ["Graphs", "AVL trees", "Binary search trees", "Heap trees"],
    correctOptionIndex: 0,
  },
  {
    id: 722,
    question: "________ fabric produced from plating terry cam.",
    options: [
      "Polar fleece fabric",
      "Velour fabric",
      "Elastic terry fabric",
      "Double face terry fabric",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 723,
    question: "________ fabrics have more number of binding points.",
    options: [
      "6 X 6 matt weave",
      "2 X 4 warp rib",
      "1 X 1 plain weave",
      "4 X 2 weft rib",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 724,
    question:
      "________ is a method repairing the garments where yarns are worked into the weave.",
    options: ["Threading", "Piecing", "Mending", "Darning"],
    correctOptionIndex: 3,
  },
  {
    id: 725,
    question:
      "________ is the assortment of fashion products that a company offers for sale at any point in time.",
    options: ["Fashion", "Collection", "Product range", "Gevels"],
    correctOptionIndex: 2,
  },
  {
    id: 726,
    question: "________ is work aids used in automatic pocket sewing.",
    options: ["Binders", "Folders", "Jigs", "Hemmers"],
    correctOptionIndex: 2,
  },
  {
    id: 727,
    question:
      "Fabric defects are assigned point values based on the ______ in the fabric.",
    options: [
      "scope of defect",
      "length of defect",
      "width of the defect",
      "depth of defect",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 728,
    question:
      "Identify the needle position during loop formation where the latch is closed by the old loop and the new yarn is held by the latch head.",
    options: [
      "Rest position",
      "Cast-off position",
      "Tucking-in position",
      "Knock-over position",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 729,
    question:
      "One of the most important points to consider for drawing female figures compared to male is:",
    options: [
      "Shoulder and hip should be narrower",
      "Rib cage and hip shoulder should be narrower",
      "Waist and hip shoulder should be narrower",
      "Neck and shoulder should be narrower",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 730,
    question:
      "The ______ refers to the rise, wide popularity or acceptance by masses of people, and then the decline in acceptance of style.",
    options: ["Fashion cycle", "Promotion", "Design for caste", "Research"],
    correctOptionIndex: 0,
  },
  {
    id: 731,
    question:
      "The fabric produced by the bonding and interlocking fibres are called as ______.",
    options: ["Felting", "Weaving", "Netting", "Knitting"],
    correctOptionIndex: 0,
  },
  {
    id: 732,
    question: "“One-click-try” concept is applicable for ______.",
    options: ["Just in Time", "RFID", "Texture Mapping", "Virtual fitting"],
    correctOptionIndex: 3,
  },
  {
    id: 733,
    question:
      "Which Indian dress symbolises the synthesis of Hindu-Muslim dress form?",
    options: ["Brahmika sari", "Chapkan", "Nehru jacket", "Gandhi's cap"],
    correctOptionIndex: 1,
  },
  {
    id: 734,
    question:
      "Which of the following was not a change brought about in women's dress as a result of the World Wars?",
    options: [
      "Skirts and hair became shorter",
      "Women stopped wearing jewellery",
      "Bright colours came into vogue",
      "Clothes became plainer and simpler",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 735,
    question:
      "Build & Fix Model is suitable for programming exercises of ______ LOC (Line of Code).",
    options: ["100-200", "200-400", "400-1000", "above 1000"],
    correctOptionIndex: 0,
  },
  {
    id: 736,
    question: "RAD stands for ______.",
    options: [
      "Relative Application Development",
      "Rapid Application Development",
      "Rapid Application Document",
      "Requirement Application Document",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 737,
    question:
      "______ read the data by reflecting pulses of laser beams on the surface.",
    options: ["Magnetic disk", "Optical disk", "Floppy disk", "ROM"],
    correctOptionIndex: 1,
  },
  {
    id: 738,
    question: "_____ is the process of determining correctness.",
    options: ["Prediction", "Verification", "Correctness", "Validation"],
    correctOptionIndex: 1,
  },
  {
    id: 739,
    question: "_____ is an industrialized approach to software development.",
    options: [
      "Software Architecture Development",
      "Component Based Development",
      "Industrial Architecture Development",
      "Rapid Architecture Development",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 740,
    question: "_____ is usually expressed in terms of bugs/LOC.",
    options: ["MTTR", "Defect rate", "MTTF", "MHRT"],
    correctOptionIndex: 1,
  },
  {
    id: 741,
    question: "_____ model shows how entities are composed of other entities.",
    options: [
      "Stimulus response",
      "Data processing",
      "Composition",
      "Architectural",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 742,
    question:
      "_____ processor has to check continuously till device becomes ready for transferring the data?",
    options: ["DMA", "Interrupt-initiated I/O", "IOP", "DCP"],
    correctOptionIndex: 1,
  },
  {
    id: 743,
    question: "_____ usecase is not complete and has no initiation actors.",
    options: ["Concrete usecase", "Abstract usecase", "State", "Activity"],
    correctOptionIndex: 1,
  },
  {
    id: 744,
    question: "_____ are project results delivered to customers.",
    options: ["Data", "Deliverables", "Milestones", "Output"],
    correctOptionIndex: 1,
  },
  {
    id: 745,
    question:
      "_____ denotes the measure of strength of association established by a connection from one object to another.",
    options: ["Cohesion", "Coupling", "Decomposition", "Elaboration"],
    correctOptionIndex: 1,
  },
  {
    id: 746,
    question:
      "_____ diagrams show the configuration of run time processing elements and the software components, processes and objects that live in them.",
    options: ["Usecase", "Deployment", "Activity", "State Chart"],
    correctOptionIndex: 1,
  },
  {
    id: 747,
    question:
      "_____ is an agile software development technique in which two programmers work together at one workstation.",
    options: [
      "HP Programming",
      "Pair programming",
      "Usecase analysis",
      "Prototyping",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 748,
    question:
      "_____ is the concept in which a process is copied into main memory from the secondary memory according to the requirement.",
    options: ["Swapping", "Segmentation", "Paging", "Demand paging"],
    correctOptionIndex: 3,
  },
  {
    id: 749,
    question:
      "_____ is the process of executing a program with the intent of finding errors.",
    options: [
      "Requirements Verification",
      "Testing",
      "Design verification",
      "Code verification",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 750,
    question: "_____ are used to illustrate the boundaries of a system.",
    options: ["Data models", "Context models", "ER models", "Entity models"],
    correctOptionIndex: 1,
  },
  {
    id: 751,
    question: "_____ describe system services or functions.",
    options: [
      "NonFunctional requirements",
      "Design constraints",
      "Attribute",
      "Functional requirements",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 752,
    question:
      "_____ describes the spiral model as a 'process model generator'.",
    options: ["Boehm", "Royce", "William Harry", "Pareto"],
    correctOptionIndex: 0,
  },
  {
    id: 753,
    question: "_____ is a scenario depicting a user system interaction.",
    options: ["Use Case", "Attribute", "Class", "Object"],
    correctOptionIndex: 0,
  },
  {
    id: 754,
    question:
      "_____ is a structured document setting out detailed descriptions of the system services.",
    options: [
      "Requirements specification document",
      "User manual",
      "Service document",
      "Installation guide",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 755,
    question:
      "_____ is often used for risk management when an exceptional risk could have catastrophic consequences.",
    options: [
      "Business usecase plan",
      "Contingency plan",
      "Catastrophic plan",
      "Process plan",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 756,
    question: "_____ prototype is a simulation of the user interface.",
    options: ["Horizontal", "Analysis", "Domain", "Vertical"],
    correctOptionIndex: 0,
  },
  {
    id: 757,
    question: "_____ show task dependencies and the critical path.",
    options: ["Activity charts", "Bar chart", "State chart", "Event chart"],
    correctOptionIndex: 1,
  },
  {
    id: 758,
    question: "_____ show a system and its relationship with other systems.",
    options: [
      "Data models",
      "Context models",
      "Architectural models",
      "Entity models",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 759,
    question:
      "_____ uses same language to talk about analysis, design, programming and database design.",
    options: [
      "Traditional software development approach",
      "Object oriented approach",
      "Waterfall approach",
      "Spiral approach",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 760,
    question:
      "_____ acknowledge the programmatic need for milestones but encourage iterations.",
    options: [
      "Rational Unified Process",
      "Waterfall model",
      "Sequential model",
      "Throw away Prototyping",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 761,
    question: "_____ are a natural way to structure requirements elicitation.",
    options: [
      "Feasibility study",
      "Viewpoints",
      "Activity diagram",
      "Component view",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 762,
    question:
      "_____ are expressed in a mathematical notation with precisely defined vocabulary, syntax and semantics.",
    options: [
      "Formal specifications",
      "Data specifications",
      "Requirements specification",
      "Design specifications",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 763,
    question: "_____ diagrams are called as Implementation diagram.",
    options: [
      "Component and Collaboration",
      "Component and State chart",
      "Component and Deployment",
      "Sequence and Collaboration",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 764,
    question:
      "_____ is an approach to software development that allows creation of objects representing tangible business elements independent of interface or storage.",
    options: [
      "Waterfall",
      "Structured architecture",
      "Layered Architecture",
      "Software architecture",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 765,
    question:
      "_____ is an inherent part of most prototype development systems.",
    options: [
      "Traditional programming",
      "DOS Programming",
      "Fortran Programming",
      "Visual programming",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 766,
    question:
      "_____ is the number of functions which are called by function X.",
    options: ["Cohesion", "Coupling", "Fan-out", "Fan-in"],
    correctOptionIndex: 2,
  },
  {
    id: 767,
    question:
      "_____ acknowledges that we do not understand all the requirements and builds only those that are well understood",
    options: [
      "Throw away Prototyping",
      "Paper prototyping",
      "Evolutionary prototyping",
      "Stroyboarding",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 768,
    question:
      "________ are an alternative function-related measure to function points when 4GLs or similar languages are used for development.",
    options: ["Object class", "Object points", "Function points", "KLOC"],
    correctOptionIndex: 1,
  },
  {
    id: 769,
    question:
      "________ chart is a tool that depicts project as network diagram representing main events of project in both parallel and consecutive way.",
    options: ["PERT", "Bar", "Network", "Project"],
    correctOptionIndex: 0,
  },
  {
    id: 770,
    question:
      "________ in the textual description are considered to be methods of classes.",
    options: ["Adjectives", "Nouns", "Pronouns", "Verb"],
    correctOptionIndex: 3,
  },
  {
    id: 771,
    question:
      "________ is a version of software product developed in the early stages of product's life cycle for specific and experimental purposes.",
    options: ["Class", "Prototype", "Object", "Requirements"],
    correctOptionIndex: 1,
  },
  {
    id: 772,
    question:
      "________ is the interaction between software components or objects.",
    options: ["Aggregation", "Coupling", "Decomposition", "Cohesion"],
    correctOptionIndex: 3,
  },
  {
    id: 773,
    question:
      "________ is the process of checking the requirements for validity, consistency, completeness, realism and verifiability.",
    options: [
      "Requirement gathering",
      "Requirement specification",
      "Requirement documentation",
      "Requirements validation",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 774,
    question:
      "________ is to test every statement in the object's method by executing it at least once.",
    options: [
      "Bottom up testing",
      "Topup testing",
      "Statement testing coverage",
      "Integration testing",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 775,
    question:
      "________ techniques include the use of very high-level languages, database programming and prototype construction from reusable components.",
    options: [
      "Requirement analysis",
      "Prototyping",
      "Implementation",
      "Design",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 776,
    question:
      "________ is an effective and decorative way of distributing fullness over a given area.",
    options: ["Gathers", "Flares", "Godets", "Pleats"],
    correctOptionIndex: 0,
  },
  {
    id: 777,
    question:
      "________ affect the organisation developing or procuring the software.",
    options: [
      "Emergent risks",
      "Product risks",
      "People risks",
      "Business risks",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 778,
    question: "________ are responsible for producing or consuming data.",
    options: ["Objects", "Class", "Viewpoints", "Input device"],
    correctOptionIndex: 2,
  },
  {
    id: 779,
    question:
      "________ is an engineering discipline concerned with all aspects of software production.",
    options: [
      "Systems Engineering",
      "Computer engineering",
      "Software engineering",
      "Production Engineering",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 780,
    question:
      "________ method is used to establish priority by serially connecting all devices that request an interrupt.",
    options: ["Vectored-interrupting", "Daisy chain", "Priority", "Polling"],
    correctOptionIndex: 1,
  },
  {
    id: 781,
    question:
      "________ provides a broad view of an entire system focusing on user interaction more than low-level system functionality.",
    options: [
      "Rapid prototype",
      "Analysis prototype",
      "Horizontal prototype",
      "Vertical prototype",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 782,
    question:
      "________ register keeps track of the instructions stored in program memory.",
    options: [
      "AR (Address Register)",
      "XR (Index Register)",
      "PC (Program Counter)",
      "AC (Accumulator)",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 783,
    question:
      "________ is referred to as generalisation and is shown upwards rather than downwards in a hierarchy.",
    options: ["Aggregation", "Inheritance", "Composition", "Decomposition"],
    correctOptionIndex: 1,
  },
  {
    id: 784,
    question:
      "________ may be used to show the processes and flow of information from one process to another.",
    options: [
      "Data flow models",
      "ER model",
      "Architecture model",
      "Context models",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 785,
    question: "________ show schedule against calendar time.",
    options: ["Activity chart", "Bar charts", "State chart", "Event chart"],
    correctOptionIndex: 1,
  },
  {
    id: 786,
    question:
      "________ are used to describe the logical structure of data processed by the system.",
    options: [
      "State machine",
      "Context model",
      "Architectural model",
      "Semantic data models",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 787,
    question:
      "________ are rectangles with the name at the top, attributes in the middle section and operations in the bottom section.",
    options: ["DFD", "State machine", "Object classes", "Entity"],
    correctOptionIndex: 2,
  },
  {
    id: 788,
    question:
      "________ can be created quickly from reusable components plus mechanisms to glue them together.",
    options: ["Design", "Entity", "Prototypes", "Component"],
    correctOptionIndex: 2,
  },
  {
    id: 789,
    question: "________ are lists of all the names used in system models.",
    options: [
      "System model list",
      "Data dictionaries",
      "Hash table",
      "Entity list",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 790,
    question: "________ are the end-point of a process activity.",
    options: ["Deliverables", "Milestones", "Outcome", "Output"],
    correctOptionIndex: 1,
  },
  {
    id: 791,
    question:
      "________ helps the analyst to understand the functionality of the system and models are used to communicate with customers.",
    options: [
      "Business modelling",
      "Project scheduling",
      "System modelling",
      "Project planning",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 792,
    question:
      "________ involves executing the system with test cases derived from the specification of the real data to be processed.",
    options: [
      "Design verification",
      "System testing",
      "Debugging",
      "Requirements validation",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 793,
    question:
      "________ is concerned with modifying the system after it is in use.",
    options: ["Design", "Coding", "Analysis", "Evolution"],
    correctOptionIndex: 3,
  },
  {
    id: 794,
    question:
      "________ have no instances but define behaviours inherited by more specific classes.",
    options: [
      "Concrete class",
      "Base class",
      "Abstract classes",
      "Facade class",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 795,
    question:
      "________ provides a scheme for refining subsystems or components of a software system.",
    options: ["Decomposition", "Design pattern", "Architecture", "MVC"],
    correctOptionIndex: 1,
  },
  {
    id: 796,
    question:
      "________ can be suited to projects where requirements and scope are fixed and technology is clearly understood.",
    options: [
      "Incremental model",
      "Prototyping model",
      "Waterfall model",
      "Spiral model",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 797,
    question: "________ refers to user interface prototype.",
    options: [
      "Vertical prototype",
      "Domain prototype",
      "Analysis prototype",
      "Horizontal prototype",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 798,
    question:
      "_______________ clarifies complex requirements by drilling down to actual system functionality.",
    options: [
      "Horizontal prototype",
      "Vertical prototype",
      "Analysis prototype",
      "Domain prototype",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 799,
    question:
      "_______________ refers to the creation of a model that will eventually be discarded rather than becoming part of the final delivered software.",
    options: [
      "Waterfall model",
      "Throwaway prototyping",
      "Analysis",
      "Evolutionary prototyping",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 800,
    question: "_____________ is the task of predicting correspondence.",
    options: ["Validation", "Verification", "Correctness", "Prediction"],
    correctOptionIndex: 0,
  },
  {
    id: 801,
    question: "_____________ models that show the systems response to events.",
    options: [
      "ER diagram",
      "State machine",
      "Context diagram",
      "Event diagram",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 802,
    question:
      "____________ are a natural way to structure requirements elicitation.",
    options: ["DBMS", "Viewpoints", "Process model", "Methods"],
    correctOptionIndex: 1,
  },
  {
    id: 803,
    question:
      "____________ checks the consistency of routine and procedure declarations and their use.",
    options: [
      "Database analysis",
      "Interface analysis",
      "Business layer analysis",
      "Path analysis",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 804,
    question:
      "___________ are assumptions or relationships among model elements specifying conditions that must be maintained as true.",
    options: ["Class", "Stereotype", "Constraints", "Node"],
    correctOptionIndex: 2,
  },
  {
    id: 805,
    question:
      "___________ in UML are used to model interaction between objects.",
    options: [
      "Usecase diagram",
      "State machine",
      "Sequence diagrams",
      "Component diagram",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 806,
    question: "__________ affect schedule or resources.",
    options: [
      "Product risks",
      "Project risks",
      "Business risks",
      "Hardware risks",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 807,
    question: "__________ don’t know what they really want.",
    options: ["Analyst", "Programmers", "Designers", "Stakeholders"],
    correctOptionIndex: 3,
  },
  {
    id: 808,
    question:
      "__________ is the process of formally documenting the user and system requirements and creating a software requirements document.",
    options: [
      "Feasibility study",
      "Requirements specification",
      "Requirement verification",
      "Requirement specification",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 809,
    question: "_________ shows how entities have common characteristics.",
    options: [
      "Data processing model",
      "Classification model",
      "Architectural model",
      "Stimulus/response model",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 810,
    question:
      "________ can be viewed as a collection of procedures or behaviours reflecting the behaviour of a system over time.",
    options: [
      "Static model",
      "Dynamic model",
      "Implementation model",
      "Architectural model",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 811,
    question: "________ shows the system’s reaction to events.",
    options: [
      "Data processing model",
      "Composition model",
      "Stimulus/response model",
      "Classification model",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 812,
    question: "________ shows the system’s context or environment.",
    options: [
      "Behavioural perspective",
      "Structural perspective",
      "Cognitive perspective",
      "External perspective",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 813,
    question:
      "________ state in a state chart is shown as a circle surrounding a small dot (bull’s-eye).",
    options: ["Initial", "Middle", "Intermediate", "Final"],
    correctOptionIndex: 3,
  },
  {
    id: 814,
    question:
      "_______ may be used to draw the interface and simulate its functionality with components associated with interface entities.",
    options: [
      "Developer",
      "Visual generators",
      "User interface generators",
      "Program generators",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 815,
    question:
      "______ emphasize the use of events and states to determine the overall activity of the system.",
    options: [
      "State diagram",
      "Usecase diagram",
      "Sequence diagram",
      "Component diagram",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 816,
    question:
      "______ relies on constant code improvement, user involvement in the development team and pairwise programming.",
    options: [
      "Extreme programming",
      "Spiral approach",
      "Prototyping",
      "Waterfall approach",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 817,
    question:
      "______ testing exercises the system beyond its maximum design load.",
    options: ["Usability", "Stress", "Acceptance", "Beta"],
    correctOptionIndex: 1,
  },
  {
    id: 818,
    question:
      "_____ approach to systems development rapidly develops software incrementally using tools such as CASE.",
    options: ["SAD", "RAD", "MAC", "CSC"],
    correctOptionIndex: 1,
  },
  {
    id: 819,
    question: "_____ identifies generalities among entities.",
    options: ["Process", "Data hiding", "Partitioning", "Abstraction"],
    correctOptionIndex: 3,
  },
  {
    id: 820,
    question:
      "_____ identifies the structural (part-of) relationships between entities.",
    options: ["Data hiding", "Projection", "Partitioning", "Abstraction"],
    correctOptionIndex: 3,
  },
  {
    id: 821,
    question:
      "_____ model is suitable for software development when the requirements are well defined.",
    options: ["Prototyping", "Formal specification", "Spiral", "Waterfall"],
    correctOptionIndex: 3,
  },
  {
    id: 822,
    question: "_____ perspective shows the system or data architecture.",
    options: ["Source", "Structural", "Behavioral", "External"],
    correctOptionIndex: 1,
  },
  {
    id: 823,
    question: "____ encapsulates core data and functionality.",
    options: ["Model", "View", "Controller", "Facade"],
    correctOptionIndex: 0,
  },
  {
    id: 824,
    question: "____ prototype is an aid for exploring the problem domain.",
    options: ["Vertical", "Analysis", "Horizontal", "Domain"],
    correctOptionIndex: 1,
  },
  {
    id: 825,
    question:
      "A 4-way set-associative cache memory unit with capacity 16KB and block size 8 words (32 bits each). Physical address space is 4GB. Number of TAG bits is ____.",
    options: ["5", "15", "20", "25"],
    correctOptionIndex: 2,
  },
  {
    id: 826,
    question: "A 8-bit flip-flop will have",
    options: [
      "2 binary cells",
      "4 binary cells",
      "6 binary cells",
      "8 binary cells",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 827,
    question:
      "A _____ is a function or procedure defined for a class and can access the internal state of an object.",
    options: ["Attribute", "Method", "Class", "Object"],
    correctOptionIndex: 1,
  },
  {
    id: 828,
    question: "A _____ is an implementation of an object's behavior.",
    options: ["method", "attribute", "class", "object"],
    correctOptionIndex: 0,
  },
  {
    id: 829,
    question:
      "A _______ is a probability that some adverse circumstance will occur.",
    options: ["plan", "risk", "schedule", "milestone"],
    correctOptionIndex: 1,
  },
  {
    id: 830,
    question:
      "A _______ strategy can detect the serious flaws early in the implementation.",
    options: [
      "bottom up testing",
      "testing",
      "top down testing",
      "integration testing",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 831,
    question:
      "A _________ is instructive information that captures the essential structure and insight of a successful family of proven solutions to a recurring problem.",
    options: ["class", "pattern", "model", "component"],
    correctOptionIndex: 1,
  },
  {
    id: 832,
    question:
      "A __________ is an old system that still provides essential business services.",
    options: [
      "biometric system",
      "database system",
      "legacy system",
      "OBS system",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 833,
    question:
      "A ___________ is the one that has a high probability of detecting an as-yet undiscovered error.",
    options: [
      "bad test cases",
      "good test cases",
      "average test cases",
      "worst test cases",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 834,
    question:
      "A _____________ decides whether or not the proposed system is worthwhile.",
    options: [
      "planning",
      "requirement elicitation",
      "feasibility study",
      "requirement validation",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 835,
    question:
      "A ____________ is a more complete elaboration of a single subsystem or function.",
    options: [
      "horizontal prototype",
      "vertical prototype",
      "domain prototype",
      "analysis prototype",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 836,
    question:
      "A _______ can be viewed as a snapshot of a system's parameters at rest or at a specific point in time.",
    options: ["Dynamic model", "Static model", "Event model", "Working model"],
    correctOptionIndex: 1,
  },
  {
    id: 837,
    question: "A B-tree grows at __________.",
    options: ["root", "leaves", "branches", "stem"],
    correctOptionIndex: 1,
  },
  {
    id: 838,
    question: "A BCD counter is a",
    options: [
      "mod-5 counter",
      "mod-10 counter",
      "mod-15 counter",
      "mod-20 counter",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 839,
    question:
      "A binary number's value changes most drastically when the ________ is changed.",
    options: ["MSB", "Frequency", "LSB", "Duty Cycle"],
    correctOptionIndex: 0,
  },
  {
    id: 840,
    question: "A binary tree grows at __________.",
    options: ["root", "leaves", "branches", "stem"],
    correctOptionIndex: 1,
  },
  {
    id: 841,
    question: "A binary variable can take values",
    options: ["0 only", "0 and -1", "0 and 1", "1 and 2"],
    correctOptionIndex: 2,
  },
  {
    id: 842,
    question:
      "A company is developing an advanced version of their current software available in the market, what model approach would they prefer?",
    options: ["RAD", "Iterative Enhancement", "Both a & b", "Spiral"],
    correctOptionIndex: 2,
  },
  {
    id: 843,
    question:
      "A computer has twenty physical page frames which contain pages numbered 101 through 120. Now a program accesses pages 1–100 sequentially and repeats the sequence thrice. Which page replacement policy experiences the same number of page faults as the optimal policy?",
    options: [
      "Last-in-first-out",
      "First-in-first-out",
      "Least-recently-used",
      "Most-recently-used",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 844,
    question:
      "A computer system supports 32-bit virtual and physical addresses. Designers remove virtual memory. Which statement is true?",
    options: [
      "Efficient implementation of multi-user support is no longer possible",
      "The processor cache organization can be made more efficient now",
      "Hardware support for memory management is no longer needed",
      "CPU scheduling can be made more efficient now",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 845,
    question:
      "A CPU generates 32-bit virtual addresses. Page size = 4 KB. TLB has 128 entries and is 4-way set associative. Minimum size of the TLB tag is:",
    options: ["11 bits", "13 bits", "15 bits", "18 bits"],
    correctOptionIndex: 2,
  },
  {
    id: 846,
    question:
      "A data structure is required to support deletion of smallest element and insertion in O(log n). Which structure can be used?",
    options: [
      "A heap but not a balanced binary search tree",
      "A balanced binary search tree but not a heap",
      "Both balanced binary search tree and heap",
      "Neither balanced binary search tree nor heap",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 847,
    question: "A decimal counter has",
    options: ["5 states", "10 states", "15 states", "20 states"],
    correctOptionIndex: 1,
  },
  {
    id: 848,
    question: "A decoder converts ________.",
    options: [
      "noncoded information into coded form",
      "coded information into noncoded form",
      "HIGHs to LOWs",
      "LOWs to HIGHs",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 849,
    question: "A demultiplexer has ________.",
    options: [
      "one data input and a number of selection inputs and several outputs",
      "one input and one output",
      "several inputs and several outputs",
      "several inputs and one output",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 850,
    question: "A flip-flop can maintain a",
    options: ["n states", "tri state", "binary state", "octa state"],
    correctOptionIndex: 2,
  },
  {
    id: 851,
    question: "A full subtractor circuit requires ________.",
    options: [
      "two inputs and two outputs",
      "two inputs and three outputs",
      "three inputs and one output",
      "three inputs and two outputs",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 852,
    question: "A group of binary cells is called",
    options: ["counter", "register", "latch", "flipflop"],
    correctOptionIndex: 1,
  },
  {
    id: 853,
    question:
      "A leaky bucket algorithm shapes bursty traffic into fixed-rate traffic by averaging the",
    options: ["Data Rate", "Average Rate", "Traffic Rate", "Traffic Shaping"],
    correctOptionIndex: 0,
  },
  {
    id: 854,
    question:
      "A memory buffer used to accommodate a speed differential is called",
    options: ["stack pointer", "cache", "accumulator", "disk buffer"],
    correctOptionIndex: 1,
  },
  {
    id: 855,
    question:
      "A memory buffer used to accommodate a speed differential is called",
    options: ["stack pointer", "cache", "accumulator", "disk buffer"],
    correctOptionIndex: 1,
  },
  {
    id: 856,
    question: "A message is much more general than a ______.",
    options: ["function call", "object", "class", "state"],
    correctOptionIndex: 0,
  },
  {
    id: 857,
    question: "A microprogram sequencer performs the operation?",
    options: ["Read", "Write", "Read and Write", "Read and Execute"],
    correctOptionIndex: 3,
  },
  {
    id: 858,
    question:
      "A multi-dimensional array array[0:2,10:20,3:4,-10:2] contains ______ elements.",
    options: ["240", "858", "390", "160"],
    correctOptionIndex: 1,
  },
  {
    id: 859,
    question:
      "A multilevel page table is preferred compared to a single-level page table because",
    options: [
      "It reduces the memory access time",
      "It helps to reduce the size of page table needed to implement the virtual address space of a process",
      "It is required by the translation lookaside buffer",
      "It helps to reduce page faults",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 860,
    question:
      "A network with bandwidth 10 Mbps can pass only 12000 frames per minute with each frame carrying 10000 bits. What is the throughput?",
    options: ["5 Mbps", "10 Mbps", "2 Mbps", "100 Mbps"],
    correctOptionIndex: 2,
  },
  {
    id: 861,
    question: "A non-relocatable program is one which",
    options: [
      "cannot be made to execute in any area of storage other than the one designated at the time of coding",
      "can relocate its own address-sensitive portions",
      "consists of program and relocation information",
      "None of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 862,
    question:
      "A number in scientific notation that has no leading zeros is called a",
    options: [
      "Denormalized number",
      "Normalized number",
      "Integers",
      "Whole number",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 863,
    question:
      "A packet sent by a node to inform the source of congestion is called",
    options: [
      "Control Packet",
      "Congestion Packet",
      "Change Packet",
      "Choke Packet",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 864,
    question: "A page fault occurs",
    options: [
      "when the page is not in the memory",
      "when the page is in the memory",
      "when the process enters blocked state",
      "when the process is ready",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 865,
    question:
      "A process executes fork(); fork(); fork(); The number of child processes created is",
    options: ["3", "4", "7", "8"],
    correctOptionIndex: 2,
  },
  {
    id: 866,
    question: "A process is thrashing if",
    options: [
      "it spends less time paging than executing",
      "swapping cannot take place",
      "it spends more time paging than executing",
      "page fault occurs",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 867,
    question:
      "A RAM chip has capacity 1K × 8. Number of 2×4 decoders needed to build 16K × 16 RAM is",
    options: ["4", "5", "6", "7"],
    correctOptionIndex: 1,
  },
  {
    id: 868,
    question:
      "A scheduling algorithm assigns priority proportional to waiting time. If all processes arrive at time zero with no I/O, the algorithm becomes",
    options: [
      "First Come First Serve",
      "Round Robin",
      "Shortest Job First",
      "Shortest Remaining Time First",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 869,
    question:
      "A self-contained block of statements performing a coherent task is called",
    options: ["Monitor", "Function", "Program", "Structure"],
    correctOptionIndex: 1,
  },
  {
    id: 870,
    question: "A set of physical addresses is also known as",
    options: ["Disk Space", "Address Space", "Memory Space", "Locations"],
    correctOptionIndex: 2,
  },
  {
    id: 871,
    question:
      "A social scientist observing and analysing how people actually work is called",
    options: [
      "analysis",
      "ethnographic analysis",
      "usecase analysis",
      "design verification",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 872,
    question:
      "A system program combining separately compiled modules into executable form is",
    options: ["load and go", "assembler", "linking loader", "cross compiler"],
    correctOptionIndex: 2,
  },
  {
    id: 873,
    question:
      "A system program that sets up an executable program in memory ready for execution is",
    options: ["assembler", "linker", "compiler", "loader"],
    correctOptionIndex: 3,
  },
  {
    id: 874,
    question:
      "A system uses FIFO page replacement with 4 frames. Access 100 pages then reverse order. Page faults will be",
    options: ["196", "197", "194", "198"],
    correctOptionIndex: 0,
  },
  {
    id: 875,
    question:
      "A system which supports ______ allows object classes to inherit from several superclasses",
    options: [
      "Multi path inheritance",
      "Hierarchical inheritance",
      "Multiple inheritance",
      "Simple inheritance",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 876,
    question: "A thread is called a lightweight process because",
    options: [
      "OS maintains only CPU register state",
      "OS does not maintain separate stack",
      "OS does not maintain virtual memory state",
      "OS maintains only scheduling information",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 877,
    question:
      "According to statistics, many software projects fail mainly due to",
    options: [
      "Poor change management",
      "Poor requirements management",
      "Poor quality control",
      "All of the mentioned",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 878,
    question: "According to Boolean algebra x.x equals",
    options: ["x", "1", "0", "x'"],
    correctOptionIndex: 0,
  },
  {
    id: 879,
    question: "Adder subtractor operating on mode 1 at (X xor 1) gives",
    options: ["1", "0", "x", "x'"],
    correctOptionIndex: 3,
  },
  {
    id: 880,
    question: "Addition of -6 and -13",
    options: ["11101101", "11010101", "11101011", "11011101"],
    correctOptionIndex: 0,
  },
  {
    id: 881,
    question: "Addressing mode used in instruction add r1,r2,r3 is",
    options: ["Indirect", "Base", "Register", "Immediate"],
    correctOptionIndex: 2,
  },
  {
    id: 882,
    question: "After 9 counts BCD counter goes back to",
    options: ["0", "9", "1", "10"],
    correctOptionIndex: 0,
  },
  {
    id: 883,
    question:
      'After the following code fragment, what is the value in fname?\nString str; int fname; str = "Foolish boy."; fname = str.indexOf("fool");',
    options: ["0", "2", "-1", "4"],
    correctOptionIndex: 2,
  },
  {
    id: 884,
    question:
      "All key stakeholders gathers together for a short but intensely focused period for ____",
    options: [
      "Ethnography",
      "Requirement workshop",
      "Interviewing",
      "Business meeting",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 885,
    question:
      "All the wrapper classes (Integer, Boolean, Float, Short, Long, Double and Character) in java",
    options: ["are private", "are serializable", "are immutable", "are final"],
    correctOptionIndex: 3,
  },
  {
    id: 886,
    question: "An empty list is one which has no",
    options: ["nodes", "data", "nodes and data", "address"],
    correctOptionIndex: 2,
  },
  {
    id: 887,
    question: "An encoder converts ________.",
    options: [
      "noncoded information into coded form",
      "coded information into noncoded form",
      "HIGHs to LOWs",
      "LOWs to HIGHs",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 888,
    question: "An identity element with respect to addition",
    options: ["x-1", "x+1", "x-0", "x+0"],
    correctOptionIndex: 3,
  },
  {
    id: 889,
    question: "An interrupt that can be temporarily ignored is",
    options: [
      "Vectored interrupt",
      "Non-maskable interrupt",
      "Maskable interrupt",
      "High priority interrupt",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 890,
    question:
      "An interrupt that is reserved for unrecoverable memory errors is called",
    options: [
      "maskable interrupt",
      "non maskable interrupt",
      "Both (1) & (2)",
      "None of the above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 891,
    question: "An ________, start with the best understood parts",
    options: [
      "throw away prototype",
      "evolutionary prototype",
      "design prototype",
      "coding prototype",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 892,
    question: "AND gates are converted to NAND gates using",
    options: ["invert OR", "AND invert", "NAND invert", "NOR"],
    correctOptionIndex: 1,
  },
  {
    id: 893,
    question:
      "Anshi's IP address is 192.168.1.21 and uses mask of 255.255.255.240. Jenny's IP is 192.168.1.14/28. Why can't they ping each other?",
    options: [
      "The subnet masks are different",
      "Because they are in different subnets",
      "Router does not support subnetting",
      "Wrong cable",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 894,
    question: "Any number with an exponent of zero is equal to:",
    options: ["zero", "one", "that number", "ten"],
    correctOptionIndex: 1,
  },
  {
    id: 895,
    question:
      "Applications like Banking and reservations require which type of OS?",
    options: [
      "Real Time",
      "Hard Real Time",
      "Soft Real Time",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 896,
    question:
      "Arrange the following steps to form a basic/general Engineering Process Model (Test, Design, Install, Specification, Manufacture, Maintain)",
    options: ["2,4,5,1,6,3", "4,2,5,1,3,6", "2,4,5,1,3,6", "4,2,5,1,6,3"],
    correctOptionIndex: 1,
  },
  {
    id: 897,
    question: "As per Boolean algebra theorem (x')' is equal to",
    options: ["x'", "x", "1", "0"],
    correctOptionIndex: 1,
  },
  {
    id: 898,
    question: "ASCII stands for",
    options: [
      "African standard code for information interchange",
      "American standard code for integer interchange",
      "American standard code for information interchange",
      "African standard code for integer interchange",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 899,
    question: "Assign the proper odd parity bit to the code 111001",
    options: ["1111011", "1111001", "0111111", "0011111"],
    correctOptionIndex: 1,
  },
  {
    id: 900,
    question:
      "If File is an abstract class and ImageFile extends it, which toFile() implementation will be called?",
    options: ["BinaryFile", "ImageFile", "Both", "None"],
    correctOptionIndex: 1,
  },
  {
    id: 901,
    question:
      "How to assign float value 3929.92 to variable interest of type float?",
    options: [
      "interest = 3929.92",
      "interest = (Float)3929.92",
      "interest = 3929.92 (float)",
      "interest = 3929.92f",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 902,
    question:
      "If page frames = 3 and reference string = 1,2,3,4,2,1,5,3,2,4,6 using optimal replacement policy, page faults =",
    options: ["5", "6", "8", "7"],
    correctOptionIndex: 3,
  },
  {
    id: 903,
    question:
      "After wait(2000) when will thread A become candidate to get CPU again?",
    options: [
      "After thread A is notified, or after two seconds",
      "After lock B is released or after two seconds",
      "Two seconds after thread A is notified",
      "Two seconds after lock B is released",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 904,
    question:
      "Asynchronous sequential logic circuits are used when primary need is",
    options: ["time", "pressure", "speed", "accuracy"],
    correctOptionIndex: 2,
  },
  {
    id: 905,
    question: "At Conceptual level Class diagrams should include:",
    options: ["operations only", "attributes only", "constants", "variables"],
    correctOptionIndex: 1,
  },
  {
    id: 906,
    question: "At start of addition carry flag is",
    options: ["enabled", "stored", "cleared", "loaded"],
    correctOptionIndex: 2,
  },
  {
    id: 907,
    question:
      "At start of lamp handball game ball (indicator lamp) is placed at",
    options: ["top", "left", "bottom", "right"],
    correctOptionIndex: 3,
  },
  {
    id: 908,
    question: "BCD stands for",
    options: [
      "binary counter design",
      "binary counter decimal",
      "binary coded design",
      "binary coded decimal",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 909,
    question: "BCD to 7 segment is",
    options: ["decoder", "encoder", "mux", "demux"],
    correctOptionIndex: 0,
  },
  {
    id: 910,
    question: "Because of virtual memory, the memory can be shared among:",
    options: ["threads", "none of the mentioned", "instructions", "processes"],
    correctOptionIndex: 3,
  },
  {
    id: 911,
    question: "Besides NAND gate universal gate is",
    options: ["AND gate", "OR gate", "NOR gate", "XOR gate"],
    correctOptionIndex: 2,
  },
  {
    id: 912,
    question:
      "Binary code that distinguishes ten elements must contain at least",
    options: ["Two Bits", "Three Bits", "Four Bits", "Five Bits"],
    correctOptionIndex: 2,
  },
  {
    id: 913,
    question:
      "Binary counter that count incrementally and decremently is called",
    options: ["up-down counter", "LSI counters", "down counter", "up counter"],
    correctOptionIndex: 0,
  },
  {
    id: 914,
    question: "Binary logic consists of binary values and",
    options: [
      "Arithmetic operations",
      "Logical operations",
      "Numeric operations",
      "Addition operations",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 915,
    question: "Binary ripple counter is made up of",
    options: ["T flipflop", "JK flipflop", "RS flipflop", "T and JK flip flop"],
    correctOptionIndex: 3,
  },
  {
    id: 916,
    question: "Borrow in two bit (x,y) subtraction is 0, as long as",
    options: ["y>x", "x=y", "x>=y", "y>=x"],
    correctOptionIndex: 2,
  },
  {
    id: 917,
    question: "By default counters are incremented by",
    options: ["1", "2", "3", "4"],
    correctOptionIndex: 0,
  },
  {
    id: 918,
    question: "Cache memory acts between",
    options: ["CPU and RAM", "RAM and ROM", "CPU and Hard Disk", "CPU and ROM"],
    correctOptionIndex: 0,
  },
  {
    id: 919,
    question: "Cache memory",
    options: [
      "has greater capacity than RAM",
      "is faster to access than CPU registers",
      "is permanent storage",
      "faster to access than RAM",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 920,
    question: "Change in state from 00 to 11 will cause change in",
    options: [
      "first variable",
      "second variable",
      "third variable",
      "all variables",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 921,
    question: "Change in state occurs during",
    options: ["pulse transition", "outputs", "clock pulses", "inputs"],
    correctOptionIndex: 0,
  },
  {
    id: 922,
    question: "Characters that can be specified in 6-bit code are",
    options: ["61", "62", "63", "64"],
    correctOptionIndex: 3,
  },
  {
    id: 923,
    question:
      "Circuits that employ memory elements in addition to gates is called",
    options: [
      "combinational circuit",
      "sequential circuit",
      "combinational sequence",
      "series",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 924,
    question: "Class diagram is a ______ aspect of collaboration",
    options: ["object", "structural", "behavioral", "model"],
    correctOptionIndex: 1,
  },
  {
    id: 925,
    question:
      "In the Runnable implementation example, which code correctly starts the thread?",
    options: [
      "Thread t = new Thread(X);",
      "Thread t = new Thread(X); t.start();",
      "X run = new X(); Thread t = new Thread(run); t.start();",
      "None",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 926,
    question:
      "Which of the following line of code is suitable to start a thread?",
    options: [
      "Thread t = new Thread();",
      "x.run();",
      "Thread t = new Thread(); x.run();",
      "Thread t = new Thread(); t.start();",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 927,
    question:
      "class X, class Y and class Z are derived from class BASE. This is ______ inheritance",
    options: ["Multiple", "Multilevel", "Hierarchical", "Single"],
    correctOptionIndex: 2,
  },
  {
    id: 928,
    question:
      "Classification of sequential circuit depends on timings of their",
    options: ["feedback path", "gates", "signals", "complex circuits"],
    correctOptionIndex: 2,
  },
  {
    id: 929,
    question: "Clock generator generates periodic train of",
    options: ["feedback path", "gates", "clock pulses", "sine pulses"],
    correctOptionIndex: 2,
  },
  {
    id: 930,
    question: "Code conversion circuits mostly uses",
    options: ["AND-OR gates", "AND gates", "OR gates", "XOR gates"],
    correctOptionIndex: 0,
  },
  {
    id: 931,
    question: "Code not included in code conversion standard is",
    options: ["BCD code", "gray code", "excess3 code", "truth table"],
    correctOptionIndex: 3,
  },
  {
    id: 932,
    question: "Combinations that are not listed for input variables are",
    options: ["overflows", "carry", "dont cares", "zero bits"],
    correctOptionIndex: 2,
  },
  {
    id: 933,
    question: "Connection from output to one of input gate is",
    options: ["undefined", "shifted", "feedback", "wire"],
    correctOptionIndex: 2,
  },
  {
    id: 934,
    question:
      "Disk scheduling using SSTF with initial head at 50 for requests (4,34,10,7,19,73,2,15,6,20) takes",
    options: ["95 ms", "119 ms", "233 ms", "276 ms"],
    correctOptionIndex: 1,
  },
  {
    id: 935,
    question: "Instruction LW R1,20(R2) uses which addressing mode?",
    options: [
      "Immediate Addressing",
      "Register Addressing",
      "Register Indirect Scaled Addressing",
      "Base Indexed Addressing",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 936,
    question:
      "Consider a set of n tasks with runtimes r1,r2...rn on a uniprocessor. Which scheduling algorithm results in maximum throughput?",
    options: [
      "First-come-First-Served",
      "Round-Robin",
      "SJF",
      "Highest-Response-Ratio-Next",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 937,
    question:
      "Consider a system having m resources shared by processes with peak demands 3,4 and 6. For what value of m will deadlock not occur?",
    options: ["7", "9", "10", "13"],
    correctOptionIndex: 3,
  },
  {
    id: 938,
    question:
      "Consider the statement: The output of a program shall be given within 10 seconds of event X 10% of the time. What SRS characteristic is depicted?",
    options: ["Consistent", "Verifiable", "Non-verifiable", "Correct"],
    correctOptionIndex: 1,
  },
  {
    id: 939,
    question:
      'Consider the following code fragment:\nif (fork() == 0) { a = a + 5; printf("%d,%d\\n", a, &a); }\nelse { a = a -5; printf("%d,%d\\n", a, &a); }\nWhich is TRUE about values printed?',
    options: [
      "u = x + 10 and v = y",
      "u = x + 10 and v != y",
      "u + 10 = x and v = y",
      "u + 10 = x and v != y",
    ],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 940,
    question:
      'Consider the following code snippet:\nString str = new String("Java");\nchar fourthChar = str.charAt(4);\nWhat happens?',
    options: [
      "'a'",
      "'v'",
      "null character",
      "throws StringIndexOutOfBoundsException",
    ],
    correctOptionIndex: 3,
    isQuestionContainsCoding: true,
  },
  {
    id: 941,
    question:
      "Consider the following micro-operations: MBR ← PC, MAR ← X, PC ← Y, Memory ← MBR. Which operation is performed?",
    options: [
      "Instruction fetch",
      "Operand fetch",
      "Conditional branch",
      "Initiation of interrupt service",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 942,
    question:
      "Which statement about user-level and kernel-level threads is FALSE?",
    options: [
      "Context switch time is longer for kernel threads",
      "Kernel threads can run on different processors",
      "User threads need no hardware support",
      "Blocking one kernel thread blocks all related threads",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 943,
    question:
      "Processes P0(0,9), P1(1,4), P2(2,9) scheduled using pre-emptive SJF. Average waiting time?",
    options: ["5.0 ms", "4.33 ms", "6.33 ms", "7.33 ms"],
    correctOptionIndex: 0,
  },
  {
    id: 944,
    question:
      "For page reference string 1,2,3,2,4,1,3,2,4,1 with 3 frames: relation among page faults?",
    options: [
      "OPTIMAL < LRU < FIFO",
      "OPTIMAL < FIFO < LRU",
      "OPTIMAL = FIFO",
      "OPTIMAL <= FIFO",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 945,
    question:
      "Three CPU intensive processes (10,20,30 units) arrive at 0,2,6. Using SRTF how many context switches occur?",
    options: ["1", "2", "3", "4"],
    correctOptionIndex: 1,
  },
  {
    id: 946,
    question:
      "Processes with bursts 2,4,8 using LRTF scheduling. Average turnaround time?",
    options: ["13 units", "14 units", "15 units", "16 units"],
    correctOptionIndex: 0,
  },
  {
    id: 947,
    question:
      "Three processes (10,20,30 units) with I/O pattern using shortest remaining compute time first. CPU idle percentage?",
    options: ["0%", "89.4%", "10.6%", "30%"],
    correctOptionIndex: 2,
  },
  {
    id: 948,
    question:
      "Constraints on services/functions such as timing constraints or standards refer to",
    options: [
      "Functional requirements",
      "Non functional requirement",
      "Benchmarks",
      "ISO standards",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 949,
    question: "Control of shift register labeled SH/LD = 0 will",
    options: ["shift", "store", "load", "add"],
    correctOptionIndex: 0,
  },
  {
    id: 950,
    question: "Control of shift register labeled SH/LD = 1 will",
    options: ["shift", "store", "load", "add"],
    correctOptionIndex: 2,
  },
  {
    id: 951,
    question: "Control unit in serial computer generates a",
    options: [
      "reset signal",
      "word-time signal",
      "word signal",
      "clear signal",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 952,
    question: "Convert (0.6875)10 to binary",
    options: ["0.1011", "0.1011", "0.0101", "0.0111"],
    correctOptionIndex: 0,
  },
  {
    id: 953,
    question: "Convert binary 111111110010 to hexadecimal",
    options: ["EE216", "FF216", "2FE16", "FD216"],
    correctOptionIndex: 1,
  },
  {
    id: 954,
    question: "Convert fractional binary 0000.1010 to decimal",
    options: ["0.625", "0.50", "0.55", "0.10"],
    correctOptionIndex: 0,
  },
  {
    id: 955,
    question: "Convert fractional binary 0001.0010 to decimal",
    options: ["1.40", "1.125", "1.20", "1.80"],
    correctOptionIndex: 1,
  },
  {
    id: 956,
    question: "Convert fractional decimal 6.75 to binary",
    options: ["0111.1100", "0110.1010", "0110.1100", "0110.0110"],
    correctOptionIndex: 2,
  },
  {
    id: 957,
    question: "Convert (-2047)10 into 32-bit 2's complement",
    options: [
      "1111 1111 1111 1111 1111 1000 0000 000",
      "1111 1111 1111 1111 1111 1000 0000 1111",
      "1111 1111 1111 1111 1111 1000 1111 000",
      "0000 1111 1111 1111 1111 1000 0000 000",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 958,
    question: "COTS stands for",
    options: [
      "Commercial Off-The-Shelf systems",
      "Commercial Off-The-Shelf states",
      "Commercial Off-The-System state",
      "Commercial Off The System",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 959,
    question:
      "Counters that transfer invalid states to valid states are called",
    options: [
      "valid counters",
      "self starting counters",
      "invalid counters",
      "undefined counters",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 960,
    question:
      "CPU fetches the instruction from memory according to the value of:",
    options: [
      "program counter",
      "status register",
      "instruction register",
      "program status word",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 961,
    question: "DataInputStream is an example of",
    options: ["Output stream", "I/O stream", "Filtered stream", "File stream"],
    correctOptionIndex: 2,
  },
  {
    id: 962,
    question: "Decimal digit in BCD can be represented by",
    options: [
      "1 input line",
      "2 input lines",
      "3 input lines",
      "4 input lines",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 963,
    question: "Decimal digits are displayed on",
    options: ["input", "output", "7 segment", "flip flop"],
    correctOptionIndex: 2,
  },
  {
    id: 964,
    question: "Decimal number 4 in excess-3 coding is",
    options: ["110", "111", "1100", "1110"],
    correctOptionIndex: 1,
  },
  {
    id: 965,
    question: "Decimal number 5 in 2421 coding",
    options: ["1011", "1001", "1010", "1100"],
    correctOptionIndex: 0,
  },
  {
    id: 966,
    question: "Definite time in a flipflop is called",
    options: ["clear time", "pulse time", "hold time", "reset time"],
    correctOptionIndex: 2,
  },
  {
    id: 967,
    question: "Delay elements provide",
    options: ["large memory", "outputs", "clock pulses", "short term memory"],
    correctOptionIndex: 3,
  },
  {
    id: 968,
    question: "Demorgan law over addition is",
    options: [
      "(x.y)' = x'y'",
      "(x+y)' = x+'y'",
      "(x+y)' = x'y'",
      "(x+y)' = x'",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 969,
    question:
      "Determine the output frequency for a frequency division circuit containing 12 flip-flops with input clock 20.48 MHz",
    options: ["10.24 kHz", "5 kHz", "30.24 kHz", "15 kHz"],
    correctOptionIndex: 1,
  },
  {
    id: 970,
    question: "Determine which of the following is valid character constant?",
    options: ["'//'", "'\\0'", "'xyz'", "'\\052'"],
    correctOptionIndex: 0,
  },
  {
    id: 971,
    question: "Different ______ may have conflicting requirements",
    options: ["programmers", "designers", "stakeholders", "analysts"],
    correctOptionIndex: 2,
  },
  {
    id: 972,
    question: "Digital number system is said to be of base or radix",
    options: ["8", "10", "2", "16"],
    correctOptionIndex: 1,
  },
  {
    id: 973,
    question:
      "Dijkstra algorithm is also called the ______ shortest path problem",
    options: [
      "multiple source",
      "single source",
      "single destination",
      "multiple destination",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 974,
    question:
      "Dijkstra’s banking algorithm for resource allocation is used for",
    options: [
      "Deadlock recovery",
      "Deadlock avoidance",
      "Deadlock detection",
      "Deadlock prevention",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 975,
    question: "Down counter decrement value by",
    options: ["1", "2", "3", "4"],
    correctOptionIndex: 0,
  },
  {
    id: 976,
    question:
      "During class inheritance in C++, if visibility mode is not provided, default visibility mode is",
    options: ["onlineexam.t", "protected", "private", "friend"],
    correctOptionIndex: 2,
  },
  {
    id: 977,
    question: "During execution of a program which gets initialized first?",
    options: ["IR", "MAR", "PC", "MDR"],
    correctOptionIndex: 2,
  },
  {
    id: 978,
    question: "During transfer of data between processor and memory we use",
    options: ["Cache", "TLB", "Buffers", "Registers"],
    correctOptionIndex: 3,
  },
  {
    id: 979,
    question: "e*x = x*e = x represents",
    options: [
      "commutative property",
      "inverse property",
      "associative property",
      "identity element",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 980,
    question: "Each gate has a delay of",
    options: ["1", "2", "3", "4"],
    correctOptionIndex: 0,
  },
  {
    id: 981,
    question: "Each logic gate gives delay of",
    options: ["1 to 5 ns", "2 to 10 ns", "3 to 10 ns", "3 to 5 ns"],
    correctOptionIndex: 0,
  },
  {
    id: 982,
    question: "Effect of change of input to more than one state is called",
    options: [
      "undefined condition",
      "race condition",
      "reset condition",
      "ideal condition",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 983,
    question: "Effective access time is directly proportional to",
    options: [
      "hit ratio",
      "memory access time",
      "page-fault rate",
      "none of the mentioned",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 984,
    question:
      "Effective bandwidth is bandwidth that network needs to allocate for the",
    options: [
      "Flow of Traffic",
      "Flow of Data",
      "Flow of Protocol",
      "Flow of Amount",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 985,
    question:
      "Electric digital systems use signals having circuit elements with",
    options: [
      "One stable state",
      "Two stable states",
      "Three stable states",
      "Four stable states",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 986,
    question:
      "Events are translated to ___ requests which are sent either to the model or view",
    options: ["client", "source", "service", "multiple"],
    correctOptionIndex: 2,
  },
  {
    id: 987,
    question: "Exclusive-OR is an",
    options: [
      "prime function",
      "undefined function",
      "even function",
      "odd function",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 988,
    question: "External fragmentation will not occur when",
    options: [
      "worst fit is used",
      "first fit is used",
      "no matter which algorithm is used, it will always occur",
      "best fit is used",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 989,
    question: "FAST stands for",
    options: [
      "Functional Application Specification Technique",
      "Fast Application Specification Technique",
      "Facilitated Application Specification Technique",
      "Facility Architecture Software Test",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 990,
    question: "FAT stands for",
    options: [
      "First Application Table",
      "File Application Table",
      "First Allocation Table",
      "File Allocation Table",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 991,
    question: "Feedback among logic gates make asynchronous system",
    options: ["stable", "unstable", "complex", "combinational"],
    correctOptionIndex: 1,
  },
  {
    id: 992,
    question:
      "File system with 300 GByte disk uses descriptor with 8 direct blocks, 1 indirect and 1 double indirect block. Block size 128 bytes and address size 8 bytes. Maximum possible file size is",
    options: ["3 KBytes", "35 KBytes", "280 KBytes", "dependent on disk size"],
    correctOptionIndex: 1,
  },
  {
    id: 993,
    question:
      "Fill in the blank to compile the code successfully.\nabstract class A { int a = 100; public abstract void showA(); }\npublic class B extends A { ______ // Fill the blank }",
    options: [
      "abstract void showA() { }",
      "void showA() { }",
      "onlineexam.B showA() { }",
      "showA() { }",
    ],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 994,
    question: "First Come First Serve (FCFS) scheduling is",
    options: [
      "used to reduce waiting time",
      "easy to understand and implement",
      "impossible to implement",
      "None of the above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 995,
    question: "First Come First Serve (FCFS) is",
    options: [
      "Preemptive scheduling",
      "Nonpreemptive scheduling",
      "deadline scheduling",
      "None of the above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 996,
    question: "Flip-flops are",
    options: [
      "level triggered",
      "edge triggered",
      "clock triggered",
      "pulse triggered",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 997,
    question: "Floating point representation is used to store",
    options: ["Boolean values", "whole numbers", "real integers", "integers"],
    correctOptionIndex: 2,
  },
  {
    id: 998,
    question: "For operation of multiplication hardware needs minimum ALU of",
    options: ["16", "32", "64", "128"],
    correctOptionIndex: 1,
  },
  {
    id: 999,
    question:
      "For processes A(0,3), B(1,6), C(4,4), D(6,2) which scheduling gives lowest average turnaround time?",
    options: [
      "First Come First Serve",
      "Non-preemptive Shortest Job First",
      "Shortest Remaining Time",
      "Round Robin (quantum 2)",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1000,
    question: "Fork is",
    options: [
      "the dispatching of a task",
      "the creation of a new process",
      "the creation of a new job",
      "increasing the priority of a task",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1001,
    question:
      "Four different attributes to control traffic have been devised in",
    options: ["IP Relay", "Data Relay", "Source Relay", "Frame Relay"],
    correctOptionIndex: 3,
  },
  {
    id: 1002,
    question: "Four gates in a package is called",
    options: ["biruple", "octruple", "dualruple", "quadruple"],
    correctOptionIndex: 3,
  },
  {
    id: 1003,
    question: "Fragmentation of the file system",
    options: [
      "can always be prevented",
      "occurs only if file system used improperly",
      "is characteristic of all file systems",
      "can be temporarily removed by compaction",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1004,
    question: "Frames from one LAN can be transmitted to another LAN via",
    options: ["Router", "Repeater", "Modem", "Bridge"],
    correctOptionIndex: 3,
  },
  {
    id: 1005,
    question: "Which scenario justifies interrupt mode of data transfer?",
    options: [
      "Bulk transfer of several kilobytes",
      "Moderately large data transfer",
      "keyboard inputs",
      "Short events like mouse action",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1006,
    question: "FTP server listens on port",
    options: ["19 and 20", "20 and 21", "21 and 22", "20 and 22"],
    correctOptionIndex: 1,
  },
  {
    id: 1007,
    question: "Full adder consists of",
    options: [
      "1 half adder",
      "2 half adders",
      "3 half adders",
      "4 half adders",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1008,
    question: "Garbage collection in Java is done by",
    options: ["Java Compiler", "Object class", "System class", "JVM"],
    correctOptionIndex: 3,
  },
  {
    id: 1009,
    question: "Dynamic RAM is used as main memory because it",
    options: [
      "consumes less power",
      "has higher speed",
      "has lower cell density",
      "needs refreshing circuitry",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1010,
    question: "Decimal value of binary 10000110 is",
    options: ["134", "144", "110", "126"],
    correctOptionIndex: 0,
  },
  {
    id: 1011,
    question: "Decimal value of binary 10010 is",
    options: ["6", "9", "18", "20"],
    correctOptionIndex: 2,
  },
  {
    id: 1012,
    question:
      "Given the code snippet:\nint salaries[];\nint index = 0;\nsalaries = new int[4];\nwhile(index < 4){ salaries[index] = 10000; index++; }\nWhat is value of salaries[3]?",
    options: ["10000", "40000", "4000", "15000"],
    correctOptionIndex: 0,
    isQuestionContainsCoding: true,
  },
  {
    id: 1013,
    question:
      "Given the following code, which line will generate an error?\nclass Test { static int x = 100; // line 3\nint y = 200; // line 4\npublic static void main(String []args){ final int z; // line 7\nz = x + y; // line 8\nSystem.out.println(z); }}",
    options: ["line 3", "line 4", "line 7", "line 8"],
    correctOptionIndex: 3,
    isQuestionContainsCoding: true,
  },
  {
    id: 1014,
    question:
      "Given the declarations: interface A {}, class B {}, class C extends B implements A {}, class D implements A {}. Which assignment is legal?",
    options: ["c = d;", "d = c;", "A a = d;", "d = (D)c;"],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1015,
    question: "Given the statement maruti.engine.bolts = 25. Which is true?",
    options: [
      "Structure bolts is nested within structure engine",
      "Structure engine is nested within structure maruti",
      "Structure maruti is nested within structure engine",
      "Structure maruti nested within structure bolts",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1016,
    question: "Graphs are examples of which type of data structure",
    options: [
      "Linear and Hierarchical",
      "Non-Linear and Hierarchical",
      "Linear and Non-Hierarchical",
      "Non-Linear and Non-Hierarchical",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1017,
    question: "Gray code representation of 14 is",
    options: ["1010", "1100", "1001", "1110"],
    correctOptionIndex: 2,
  },
  {
    id: 1018,
    question:
      "Match scheduling algorithms with applications: (P) Gang Scheduling (Q) Rate Monotonic Scheduling (R) Fair Share Scheduling",
    options: ["P–3 Q–2 R–1", "P–1 Q–2 R–3", "P–2 Q–3 R–1", "P–1 Q–3 R–2"],
    correctOptionIndex: 0,
  },
  {
    id: 1019,
    question:
      "A method within a class is only accessible by classes defined in the same package. How can this restriction be enforced?",
    options: [
      "Declare the method with keyword protected",
      "Declare the method with keyword private",
      "Declare with keyword public",
      "Without any accessibility specifiers",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1020,
    question: "How do we define a destructor?",
    options: ["X~() {}", "X() {}~", "X() ~{}", "~X() {}"],
    correctOptionIndex: 3,
  },
  {
    id: 1021,
    question: "How is a J-K flip-flop made to toggle?",
    options: ["J = 0, K = 0", "J = 1, K = 0", "J = 0, K = 1", "J = 1, K = 1"],
    correctOptionIndex: 3,
  },
  {
    id: 1022,
    question:
      "How is the capacity of running several programs simultaneously known?",
    options: [
      "Multiprocessing",
      "Multiprogramming",
      "Multisystem",
      "Multi resources",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1023,
    question: "How many scenarios are there in elicitation activities?",
    options: ["One", "Two", "Three", "Four"],
    correctOptionIndex: 3,
  },
  {
    id: 1024,
    question:
      "How many 32K × 1 RAM chips are needed to provide memory capacity of 256K-bytes?",
    options: ["8", "32", "64", "128"],
    correctOptionIndex: 2,
  },
  {
    id: 1025,
    question: "How many numeric data types are supported in Java?",
    options: ["2", "4", "6", "8"],
    correctOptionIndex: 2,
  },
  {
    id: 1026,
    question:
      "How many subnets are created from a Class C address space using a /29 subnet mask?",
    options: ["16", "128", "32", "64"],
    correctOptionIndex: 2,
  },
  {
    id: 1027,
    question: "HUB is a ______ device and Switch is a ______ device.",
    options: [
      "Unicast, Multicast",
      "Multicast, Unicast",
      "Broadcast, Unicast",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1028,
    question: "Human readable base representation of numbers is",
    options: ["Binary", "Decimal", "Hex", "Hexadecimal"],
    correctOptionIndex: 1,
  },
  {
    id: 1029,
    question: "IC number of NOT gate is",
    options: ["7402", "7404", "7401", "7406"],
    correctOptionIndex: 1,
  },
  {
    id: 1030,
    question: "IC of 7 segment display contains",
    options: ["4 leds", "5 leds", "6 leds", "7 leds"],
    correctOptionIndex: 3,
  },
  {
    id: 1031,
    question: "ICMP is primarily used for",
    options: [
      "forwarding",
      "addressing",
      "error and diagnostic functions",
      "routing",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1032,
    question: "Identify the disadvantage of Spiral Model",
    options: [
      "Doesn't work well for smaller projects",
      "High amount of risk analysis",
      "Strong approval and documentation control",
      "Additional functionality can be added later",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1033,
    question:
      "Correct sequence of packets when browser requests webpage from remote server",
    options: [
      "HTTP GET, DNS query, TCP SYN",
      "DNS query, HTTP GET, TCP SYN",
      "DNS query, TCP SYN, HTTP GET",
      "TCP SYN, DNS query, HTTP GET",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1034,
    question:
      "If a block can be placed at every location in cache, the cache is",
    options: [
      "Indirectly mapped",
      "Directly mapped",
      "Fully associative",
      "Partially associative",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1035,
    question:
      "If a host broadcasts a frame to assign IP address to itself, which protocol is used?",
    options: ["RARP", "ARPA", "ICMP", "TCP"],
    correctOptionIndex: 0,
  },
  {
    id: 1036,
    question:
      "If a router port has IP address 172.16.112.1/25, the valid subnet address is",
    options: ["172.16.96.0", "172.16.0.0", "172.16.112.0", "172.16.112.128"],
    correctOptionIndex: 2,
  },
  {
    id: 1037,
    question:
      "If an odd parity is adopted, parity bit is chosen such that total number of 1's is",
    options: ["odd", "even", "positive", "negative"],
    correctOptionIndex: 0,
  },
  {
    id: 1038,
    question:
      "If every requirement can be checked by a cost-effective process, then the SRS is",
    options: ["verifiable", "traceable", "modifiable", "complete"],
    correctOptionIndex: 0,
  },
  {
    id: 1039,
    question:
      "If relocation is static and is done at assembly or load time, compaction",
    options: [
      "cannot be done",
      "must not be done",
      "must be done",
      "can be done",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1040,
    question:
      "If result = 2 + 3 * 5, what is the value and type of result variable?",
    options: ["17, byte", "25, byte", "17, int", "25, int"],
    correctOptionIndex: 2,
  },
  {
    id: 1041,
    question:
      "If the data unit is 111111 and the divisor is 1010. In CRC method, what is the dividend at the transmission before division?",
    options: ["1111110000", "1111111010", "111111000", "111111"],
    correctOptionIndex: 2,
  },
  {
    id: 1042,
    question: "If the derived class is struct, then default visibility mode is",
    options: ["public", "protected", "private", "struct can't inherit class"],
    correctOptionIndex: 0,
  },
  {
    id: 1043,
    question:
      "If the disk head is located initially at 32, find the number of disk moves required with FCFS if the disk queue requests are 98, 37, 14, 124, 65, 67",
    options: ["331", "321", "355", "361"],
    correctOptionIndex: 1,
  },
  {
    id: 1044,
    question:
      "If the quantum time of round robin algorithm is very large, then it is equivalent to",
    options: [
      "First in first out",
      "Lottery scheduling",
      "Shortest Job Next",
      "None of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1045,
    question:
      "If you were to create client/server applications, which model would you go for?",
    options: [
      "WINWIN Spiral Model",
      "Spiral Model",
      "Concurrent Model",
      "Incremental Model",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1046,
    question: "import keyword is used to",
    options: [
      "both built-in packages and user-defined packages into your java source file",
      "import only built-in packages into your java source file",
      "import only user-defined packages into your java source file",
      "None of the above",
    ],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1047,
    question:
      "In a men head count, a ______ head end under the armpit usually includes the shoulder and the neck",
    options: ["1st", "2nd", "3rd", "4th"],
    correctOptionIndex: 1,
  },
  {
    id: 1048,
    question: "In 14 pin gate pin number 14 is",
    options: ["Vcc", "Vdd", "ground", "AC"],
    correctOptionIndex: 0,
  },
  {
    id: 1049,
    question: "In 14 pin gate pin number 7 is",
    options: ["Vcc", "Vdd", "ground", "AC"],
    correctOptionIndex: 2,
  },
  {
    id: 1050,
    question:
      "In ____ mode, the authentication header is inserted immediately after the IP header",
    options: ["Tunnel", "Transport", "Authentication", "Both A and B"],
    correctOptionIndex: 0,
  },
  {
    id: 1051,
    question:
      "In ______, the prototype is developed from an initial specification, delivered for experiment then discarded",
    options: [
      "evolutionary prototyping",
      "throw away prototyping",
      "design prototyping",
      "user prototyping",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1052,
    question:
      "In ______ start with high-level system and integrate from the top-down replacing individual components by stubs where appropriate",
    options: [
      "top-down testing",
      "bottom up testing",
      "sandwich testing",
      "risk oriented testing",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1053,
    question: "In a ______ start with the least well-understood parts",
    options: [
      "UI prototype",
      "design prototype",
      "throw-away prototype",
      "evolutionary prototype",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1054,
    question: "In a MAX heap tree",
    options: [
      "value in a node is greater than every value in left subtree and smaller than right subtree",
      "value in a node is greater than the values of its child nodes",
      "value in a node is smaller than every value in left subtree and smaller than right subtree",
      "value in a node is lesser than the values of its child nodes",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1055,
    question:
      "In a packet switching network, if message size is 48 bytes and each packet header is 3 bytes and 24 packets are required, the packet size is",
    options: ["2 bytes", "1 byte", "4 bytes", "5 bytes"],
    correctOptionIndex: 3,
  },
  {
    id: 1056,
    question: "In a program using subroutine call instruction, it is necessary",
    options: [
      "initialise program counter",
      "clear the accumulator",
      "reset the microprocessor",
      "clear the instruction register",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1057,
    question: "In a tree between any two nodes there is",
    options: [
      "No path",
      "Atleast one path",
      "Atmost one path",
      "Exactly one path",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1058,
    question:
      "In adder subtractor circuit when addition exceeds from 15 output carry becomes",
    options: ["1", "0", "x", "undefined"],
    correctOptionIndex: 0,
  },
  {
    id: 1059,
    question:
      "In an absolute loading scheme, which loader function is accomplished by programmer",
    options: [
      "Allocation",
      "Linking",
      "Allocation and Linking",
      "Reallocation",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1060,
    question:
      "In associative mapping during LRU, the counter of new block is set to 0 and all others incremented by one when ______ occurs",
    options: ["Miss", "Hit", "Delay", "Delayed Hit"],
    correctOptionIndex: 0,
  },
  {
    id: 1061,
    question: "In asynchronous circuits changes occur with change in",
    options: ["inputs", "outputs", "clock pulses", "time"],
    correctOptionIndex: 0,
  },
  {
    id: 1062,
    question: "In BCD number 1010 has",
    options: ["meaning", "no meaning", "value", "Vcc"],
    correctOptionIndex: 1,
  },
  {
    id: 1063,
    question:
      "In Congestion Control, a bit can be set in a packet moving in direction opposite to congestion in",
    options: [
      "Backward Signaling",
      "Implicit Signaling",
      "Source Signaling",
      "Forward Signaling",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1064,
    question: "In Congestion Control, DVL stands for",
    options: [
      "Delay Versus Line",
      "Delay Versus Lose",
      "Delay Versus Load",
      "Delay Versus Louden",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1065,
    question:
      "In Congestion Control, packet is put at end of input queue while waiting to be",
    options: ["Checked", "Entered", "Reached", "Controlled"],
    correctOptionIndex: 0,
  },
  {
    id: 1066,
    question: "In Congestion, CBR stands for",
    options: [
      "Control Bit Rate",
      "Constant Bit Rate",
      "Constant Byte Rate",
      "Control Byte Rate",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1067,
    question: "In contiguous memory allocation:",
    options: [
      "each process is contained in a single contiguous section of memory",
      "all processes are contained in a single contiguous section of memory",
      "the memory space is contiguous",
      "the memory space is not contiguous",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1068,
    question: "In DFDs, user interactions with the system is denoted by",
    options: ["Circle", "Arrow", "Rectangle", "Triangle"],
    correctOptionIndex: 0,
  },
  {
    id: 1069,
    question:
      "In division, two operands (dividend and divisor) and answer (quotient) of divide are accompanied by a second answer called the",
    options: ["Reminder", "Multiplier", "Divisor", "Trap"],
    correctOptionIndex: 0,
  },
  {
    id: 1070,
    question: "In flipflop if set input is returned to 0, output",
    options: ["changes", "inverts", "remain same", "complements"],
    correctOptionIndex: 2,
  },
  {
    id: 1071,
    question:
      "In Integrated Services, when a source makes a reservation, it needs to define a",
    options: [
      "Flow STCP",
      "Flow Control",
      "Flow Specification",
      "Flow Solution",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1072,
    question:
      "In link state routing algorithm after construction of link state packets, routes are computed using",
    options: [
      "DES algorithm",
      "Dijkstra's algorithm",
      "RSA algorithm",
      "Packets",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1073,
    question: "In Mealy model outputs are functions of",
    options: [
      "present state",
      "input state",
      "next state",
      "present and input state",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1074,
    question: "In Moore model outputs are functions of",
    options: [
      "present state",
      "input state",
      "next state",
      "present state and input state",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1075,
    question: "In most logic gates, 1 means",
    options: ["0 V", "1 V", "5 V", "10 V"],
    correctOptionIndex: 2,
  },
  {
    id: 1076,
    question:
      "In Multipath inheritance, to remove duplicate set of records in child class",
    options: [
      "Write virtual function in parent classes",
      "Write virtual functions in base class",
      "Make base class as virtual base class",
      "All of these",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1077,
    question: "In Operating Systems, a single thread is termed as",
    options: [
      "Light Weight Process (LWP)",
      "Heavy Weight Process (HWP)",
      "Both (1) & (2)",
      "None of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1078,
    question:
      "In OSI architecture, dialogue control and token management are responsibilities of",
    options: [
      "network layer",
      "session layer",
      "transport layer",
      "data link layer",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1079,
    question: "In positive logic",
    options: [
      "a HIGH = 1, a LOW = 0",
      "a LOW = 1, a HIGH = 0",
      "only HIGHs are present",
      "only LOWs are present",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1080,
    question:
      "In Quality of Service, jitter is variation in delay for packets belonging to",
    options: ["Data Flow", "Same Flow", "Protocol Flow", "IP Flow"],
    correctOptionIndex: 1,
  },
  {
    id: 1081,
    question:
      "In round robin CPU scheduling as time quantum increases the average turnaround time",
    options: [
      "increases",
      "decreases",
      "remains constant",
      "varies irregularly",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1082,
    question:
      "In signed-magnitude binary division, if dividend is (11100)₂ and divisor is (10011)₂ the result is",
    options: ["(00100)₂", "(10100)₂", "(11001)₂", "(01100)₂"],
    correctOptionIndex: 1,
  },
  {
    id: 1083,
    question: "In stack organization insertion operation is called",
    options: ["Pop", "Push", "Down", "Upper"],
    correctOptionIndex: 1,
  },
  {
    id: 1084,
    question: "In T flipflop when state has to be complemented T must be",
    options: ["0", "1", "t", "t+1"],
    correctOptionIndex: 0,
  },
  {
    id: 1085,
    question: "In Unix 'cat' command is used to display",
    options: [
      "file names",
      "folder names",
      "file contents",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1086,
    question: "In Unix 'file' command is used to determine",
    options: ["file name", "file type", "file content", "None of the above"],
    correctOptionIndex: 1,
  },
  {
    id: 1087,
    question: "In virtual memory systems, dynamic address translation",
    options: [
      "is the hardware necessary to implement paging",
      "stores pages at a specific location on disk",
      "is part of the operating system paging algorithm",
      "is useless when swapping is used",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1088,
    question: "Increasing RAM typically improves performance because",
    options: [
      "Larger RAMs are faster",
      "Virtual memory increases",
      "Fewer page faults occur",
      "Fewer segmentation faults occur",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1089,
    question: "Individual components are tested is termed as",
    options: [
      "Regression testing",
      "System testing",
      "Unit testing",
      "Integration testing",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1090,
    question: "Individual components are tested is termed as",
    options: [
      "Regression testing",
      "System testing",
      "Module testing",
      "Sub-system testing",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1091,
    question:
      "Information when is written in cache, both to block in cache and block present in lower-level memory refers to",
    options: ["Miss rate", "Write-back", "Write-through", "Dirty bit"],
    correctOptionIndex: 2,
  },
  {
    id: 1092,
    question:
      "Inheritance is the property of object-oriented systems that allows objects to be built from other",
    options: ["attributes", "objects", "method", "class"],
    correctOptionIndex: 3,
  },
  {
    id: 1093,
    question: "Instability condition can be determined from",
    options: ["table", "map", "graph", "logic diagram"],
    correctOptionIndex: 3,
  },
  {
    id: 1094,
    question:
      "Instruction that are used for reading from memory by an IOP called",
    options: ["Commands", "Pulses", "Blocks", "Interrupt"],
    correctOptionIndex: 0,
  },
  {
    id: 1095,
    question: "int a[10] will occupy ______ number of bits in the memory",
    options: ["2", "10", "12", "20"],
    correctOptionIndex: 3,
    isQuestionContainsCoding: true,
  },
  {
    id: 1096,
    question: "Internal state and input values altogether are called",
    options: ["full state", "total state", "initial state", "output state"],
    correctOptionIndex: 1,
  },
  {
    id: 1097,
    question:
      "Interoperability requirements, legislative requirements are examples of",
    options: [
      "organizational requirement",
      "Product requirements",
      "External requirements",
      "Process requirements",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1098,
    question: "Interprocess communication",
    options: [
      "allows processes to synchronize activity",
      "is required for all processes",
      "is usually done via disk drives",
      "is never necessary",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1099,
    question:
      "Interrupt latency should be ______ for Real Time Operating Systems (RTOS)",
    options: ["minimal", "maximum", "zero", "None of the above"],
    correctOptionIndex: 0,
  },
  {
    id: 1100,
    question: "Interrupts form an important part of ______ systems",
    options: [
      "Batch processing",
      "Multitasking",
      "Real-time processing",
      "Multi-user",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1101,
    question: "ISO recommended international testing condition is",
    options: [
      "20°C & 65% RH",
      "30°C & 65% RH",
      "20°C & 75% RH",
      "30°C & 75% RH",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1102,
    question: "J = K = 0 will make flip-flops",
    options: ["changed", "reversed", "unchanged", "stopped"],
    correctOptionIndex: 2,
  },
  {
    id: 1103,
    question: "Java source codes are compiled and converted to",
    options: ["Objectcodes", "Assemblycodes", "Binarycodes", "Bytecodes"],
    correctOptionIndex: 3,
    isQuestionContainsCoding: true,
  },
  {
    id: 1104,
    question: "Kruskal algorithm follows ______ approach",
    options: [
      "Divide and Conquer",
      "Dynamic programming",
      "Greedy",
      "Backtracking",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1105,
    question: "Lamp handball game uses application of",
    options: [
      "unidirectional shift register",
      "bidirectional shift register",
      "serial shift register",
      "parallel shift register",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1106,
    question: "Latches are",
    options: [
      "level triggered",
      "edge triggered",
      "clock triggered",
      "pulse triggered",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1107,
    question: "Late delivery of hardware or support software is an example for",
    options: [
      "product risk",
      "people risk",
      "technology risk",
      "organizational risk",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1108,
    question: "Layer-2 Switch is also called",
    options: [
      "Multiport Hub",
      "Multiport Switch",
      "Multiport Bridge",
      "Multiport NIC",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1109,
    question: "LED stands for",
    options: [
      "light emitting diode",
      "light emitting device",
      "light electronic diode",
      "light electronic device",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1110,
    question: "Left most position in lamp handball game is the",
    options: ["wall", "fence", "ball", "indicator"],
    correctOptionIndex: 0,
  },
  {
    id: 1111,
    question:
      "Let the page fault service time be 10ms and memory access time be 20ns. If one page fault occurs every 10^6 accesses, effective access time is",
    options: ["21ns", "30ns", "23ns", "35ns"],
    correctOptionIndex: 1,
  },
  {
    id: 1112,
    question:
      "Let the time taken to switch between user and kernel modes be t1 and switching between processes be t2. Which is true?",
    options: ["t1 > t2", "t1 = t2", "t1 < t2", "Cannot be determined"],
    correctOptionIndex: 2,
  },
  {
    id: 1113,
    question: "Linear arrays are also called",
    options: [
      "Straight line array",
      "One-dimensional array",
      "Vertical array",
      "Horizontal array",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1114,
    question: "Links between dependent requirements refers to",
    options: [
      "Design traceability",
      "Requirement traceability",
      "Source traceability",
      "Feature traceability",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1115,
    question:
      "Links from the requirements to the design refers to ______ traceability",
    options: ["Design", "Requirements", "Source", "Destination"],
    correctOptionIndex: 1,
  },
  {
    id: 1116,
    question: "Logic probe is used for",
    options: ["testing", "debugging", "monitoring", "controlling"],
    correctOptionIndex: 1,
  },
  {
    id: 1117,
    question: "Long Term Scheduler is a",
    options: [
      "CPU scheduler",
      "process swapping scheduler",
      "job scheduler",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1118,
    question: "M flip-flops produces",
    options: ["2^m-1 states", "2-1 states", "2^m+1 states", "2^m states"],
    correctOptionIndex: 3,
  },
  {
    id: 1119,
    question: "Individual components are tested is termed as",
    options: [
      "Regression testing",
      "System testing",
      "Module testing",
      "Sub-system testing",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1120,
    question:
      "Information when is written in cache, both to block in cache and block present in lower-level memory refers to",
    options: ["Miss rate", "Write-back", "Write-through", "Dirty bit"],
    correctOptionIndex: 2,
  },
  {
    id: 1121,
    question:
      "Inheritance is the property of object-oriented systems that allows objects to be built from other",
    options: ["attributes", "objects", "method", "class"],
    correctOptionIndex: 3,
  },
  {
    id: 1122,
    question: "Instability condition can be determined from",
    options: ["table", "map", "graph", "logic diagram"],
    correctOptionIndex: 3,
  },
  {
    id: 1123,
    question:
      "Instruction that are used for reading from memory by an IOP called",
    options: ["Commands", "Pulses", "Blocks", "Interrupt"],
    correctOptionIndex: 0,
  },
  {
    id: 1124,
    question: "int a[10] will occupy ______ number of bits in the memory",
    options: ["2", "10", "12", "20"],
    correctOptionIndex: 3,
    isQuestionContainsCoding: true,
  },
  {
    id: 1125,
    question: "Internal state and input values altogether are called",
    options: ["full state", "total state", "initial state", "output state"],
    correctOptionIndex: 1,
  },
  {
    id: 1126,
    question:
      "Interoperability requirements, legislative requirements are examples of",
    options: [
      "organizational requirement",
      "Product requirements",
      "External requirements",
      "Process requirements",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1127,
    question: "Interprocess communication",
    options: [
      "allows processes to synchronize activity",
      "is required for all processes",
      "is usually done via disk drives",
      "is never necessary",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1128,
    question:
      "Interrupt latency should be ______ for Real Time Operating Systems (RTOS)",
    options: ["minimal", "maximum", "zero", "None of the above"],
    correctOptionIndex: 0,
  },
  {
    id: 1129,
    question: "Interrupts form an important part of ______ systems",
    options: [
      "Batch processing",
      "Multitasking",
      "Real-time processing",
      "Multi-user",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1130,
    question: "ISO recommended international testing condition is",
    options: [
      "20°C & 65% RH",
      "30°C & 65% RH",
      "20°C & 75% RH",
      "30°C & 75% RH",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1131,
    question: "J = K = 0 will make flip-flops",
    options: ["changed", "reversed", "unchanged", "stopped"],
    correctOptionIndex: 2,
  },
  {
    id: 1132,
    question: "Java source codes are compiled and converted to",
    options: ["Objectcodes", "Assemblycodes", "Binarycodes", "Bytecodes"],
    correctOptionIndex: 3,
    isQuestionContainsCoding: true,
  },
  {
    id: 1133,
    question: "Kruskal algorithm follows ______ approach",
    options: [
      "Divide and Conquer",
      "Dynamic programming",
      "Greedy",
      "Backtracking",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1134,
    question: "Lamp handball game uses application of",
    options: [
      "unidirectional shift register",
      "bidirectional shift register",
      "serial shift register",
      "parallel shift register",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1135,
    question: "Latches are",
    options: [
      "level triggered",
      "edge triggered",
      "clock triggered",
      "pulse triggered",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1136,
    question: "Late delivery of hardware or support software is an example for",
    options: [
      "product risk",
      "people risk",
      "technology risk",
      "organizational risk",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1137,
    question: "Layer-2 Switch is also called",
    options: [
      "Multiport Hub",
      "Multiport Switch",
      "Multiport Bridge",
      "Multiport NIC",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1138,
    question: "LED stands for",
    options: [
      "light emitting diode",
      "light emitting device",
      "light electronic diode",
      "light electronic device",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1139,
    question: "Left most position in lamp handball game is the",
    options: ["wall", "fence", "ball", "indicator"],
    correctOptionIndex: 0,
  },
  {
    id: 1140,
    question:
      "Let the page fault service time be 10ms and memory access time be 20ns. If one page fault occurs every 10^6 accesses, effective access time is",
    options: ["21ns", "30ns", "23ns", "35ns"],
    correctOptionIndex: 1,
  },
  {
    id: 1141,
    question:
      "Let the time taken to switch between user and kernel modes be t1 and switching between processes be t2. Which is true?",
    options: ["t1 > t2", "t1 = t2", "t1 < t2", "Cannot be determined"],
    correctOptionIndex: 2,
  },
  {
    id: 1142,
    question: "Linear arrays are also called",
    options: [
      "Straight line array",
      "One-dimensional array",
      "Vertical array",
      "Horizontal array",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1143,
    question: "Links between dependent requirements refers to",
    options: [
      "Design traceability",
      "Requirement traceability",
      "Source traceability",
      "Feature traceability",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1144,
    question:
      "Links from the requirements to the design refers to ______ traceability",
    options: ["Design", "Requirements", "Source", "Destination"],
    correctOptionIndex: 1,
  },
  {
    id: 1145,
    question: "Logic probe is used for",
    options: ["testing", "debugging", "monitoring", "controlling"],
    correctOptionIndex: 1,
  },
  {
    id: 1146,
    question: "Long Term Scheduler is a",
    options: [
      "CPU scheduler",
      "process swapping scheduler",
      "job scheduler",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1147,
    question: "M flip-flops produces",
    options: ["2^m-1 states", "2-1 states", "2^m+1 states", "2^m states"],
    correctOptionIndex: 3,
  },
  {
    id: 1148,
    question: "Main function of shared memory is",
    options: [
      "to use primary memory efficiently",
      "to do intra process communication",
      "to do inter process communication",
      "to use secondary memory efficiently",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1149,
    question: "Making of transition table consists of",
    options: ["2 steps", "4 steps", "5 steps", "6 steps"],
    correctOptionIndex: 3,
  },
  {
    id: 1150,
    question:
      "Mandating a particular IDE, programming language or development method are examples of",
    options: [
      "product requirements",
      "process requirements",
      "organisational requirement",
      "benchmarks",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1151,
    question: "Match the following: A. Repeaters B. Bridges C. Routers",
    options: [
      "A → 3, B → 1, C → 2",
      "A → 2, B → 3, C → 1",
      "A → 3, B → 2, C → 1",
      "A → 1, B → 2, C → 3",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1152,
    question: "Match the following: 1. Segments 2. Packets 3. Frames",
    options: [
      "1 → A, 2 → B, 3 → C",
      "1 → A, 2 → C, 3 → B",
      "1 → C, 2 → A, 3 → B",
      "1 → C, 2 → B, 3 → A",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1153,
    question: "MAX heap can be used to sort the data in an",
    options: [
      "Ascending order",
      "Descending order",
      "Both ascending or descending order",
      "Random order",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1154,
    question: "Maxterms are also called",
    options: [
      "standard sum",
      "standard product",
      "standard division",
      "standard subtraction",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1155,
    question: "Medium term scheduler is based on",
    options: [
      "Scroll in, Scroll out",
      "Fetch in, Fetch out",
      "Swap in, Swap out",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1156,
    question: "Memory management is",
    options: [
      "not used in modern operating system",
      "replaced with virtual memory on current systems",
      "not used on multiprogramming systems",
      "critical for even the simplest operating systems",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1157,
    question: "Memory that is called a read write memory is",
    options: ["ROM", "EPROM", "RAM", "Registers"],
    correctOptionIndex: 2,
  },
  {
    id: 1158,
    question: "Memory unit accessed by content is called",
    options: [
      "Read only memory",
      "Programmable memory",
      "Virtual memory",
      "Associative memory",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1159,
    question: "Message queuing is managed by",
    options: ["Shell", "Kernel", "Fork", "None of the above"],
    correctOptionIndex: 1,
  },
  {
    id: 1160,
    question:
      "Minimum number of queues required for priority queue implementation",
    options: ["5", "4", "3", "2"],
    correctOptionIndex: 3,
  },
  {
    id: 1161,
    question:
      "Misunderstandings between software users and developers are exposed by",
    options: ["white box testing", "testing", "coding", "prototyping"],
    correctOptionIndex: 3,
  },
  {
    id: 1162,
    question: "Momentary change in state of flipflop is called",
    options: ["feedback path", "tri state", "signals", "trigger"],
    correctOptionIndex: 3,
  },
  {
    id: 1163,
    question: "Most preceded operator is",
    options: ["parenthesis", "AND", "OR", "NOT"],
    correctOptionIndex: 3,
  },
  {
    id: 1164,
    question: "Most significant bit of arithmetic addition is called",
    options: ["overflow", "carry", "output", "zero bit"],
    correctOptionIndex: 1,
  },
  {
    id: 1165,
    question: "Mostly gates works on",
    options: ["5 V", "4 V", "3 V", "2 V"],
    correctOptionIndex: 0,
  },
  {
    id: 1166,
    question: "Multiple inheritance is not supported in Java because",
    options: [
      "To remove ambiguity and provide more maintainable and clear design",
      "Java is a Object oriented language",
      "Multiple inheritance is not an important feature",
      "All of above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1167,
    question: "Multiple variable xor is defined as",
    options: [
      "inverted or function",
      "prime function",
      "even function",
      "odd function",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1168,
    question: "Multiprogramming systems",
    options: [
      "Are easier to develop than single programming systems",
      "Execute each job faster",
      "Are used only on large mainframe computers",
      "Execute more jobs in the same time period",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1169,
    question: "MVC stands for",
    options: [
      "Memento View Controller",
      "Model View Controller",
      "Model View Component",
      "Movie View Controller",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1170,
    question: "Naming states is done in",
    options: [
      "transition table",
      "stable state",
      "flow table",
      "excitation table",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1171,
    question: "NAND latch works when both inputs are",
    options: ["1", "0", "inverted", "dont cares"],
    correctOptionIndex: 0,
  },
  {
    id: 1172,
    question: "Negative transition in flip-flops are referred to as",
    options: [
      "clock",
      "negative edge",
      "positive edge",
      "positive edge and negative edge",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1173,
    question: "Next state of B(t) will be",
    options: ["B(t-1)", "B(t+1)", "B(t-2)", "B(t+2)"],
    correctOptionIndex: 1,
  },
  {
    id: 1174,
    question: "No of NAND gate is",
    options: ["7000", "7200", "7400", "7600"],
    correctOptionIndex: 2,
  },
  {
    id: 1175,
    question: "Nor function is dual of",
    options: ["and function", "or function", "xor function", "nand function"],
    correctOptionIndex: 3,
  },
  {
    id: 1176,
    question: "Not operation is obtained by using one input",
    options: ["AND gate", "OR gate", "NAND gate", "XOR gate"],
    correctOptionIndex: 2,
  },
  {
    id: 1177,
    question: "Nouns in the textual description are considered to be",
    options: ["Methods", "Class", "File", "Node"],
    correctOptionIndex: 1,
  },
  {
    id: 1178,
    question: "Objects are grouped into",
    options: ["Classes", "Methods", "Procedures", "Records"],
    correctOptionIndex: 0,
  },
  {
    id: 1179,
    question:
      "Old, valuable systems must be maintained and updated are termed as",
    options: [
      "Normalized system",
      "Concurrent systems",
      "Distributed systems",
      "Legacy systems",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1180,
    question: "One hex digit is sometimes referred to as a",
    options: ["byte", "nibble", "grouping", "instruction"],
    correctOptionIndex: 1,
  },
  {
    id: 1181,
    question: "One that is not postulate of Boolean algebra",
    options: ["commutative", "duality", "associative", "identity element"],
    correctOptionIndex: 1,
  },
  {
    id: 1182,
    question: "One that shows distributive law of addition over multiplication",
    options: [
      "x+(y.z)=(x.y)+(x.z)",
      "x+(y.z)=(x+y).(x+z)",
      "x+(y.z)=(x.y).(x+z)",
      "x.(y+z)=(x+y).(x+z)",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1183,
    question:
      "One userlevel thread is mapped to many kernel level thread is known as",
    options: [
      "One to Many model",
      "One to One model",
      "Many to One model",
      "None of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1184,
    question: "Operating System maintains the page table for",
    options: [
      "each process",
      "each thread",
      "each instruction",
      "each address",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1185,
    question: "OR gates are converted to NAND gates using",
    options: ["invert OR", "AND invert", "NAND invert", "EX-OR"],
    correctOptionIndex: 2,
  },
  {
    id: 1186,
    question: "Outputs of SR latch are",
    options: ["x and y", "a and b", "s and r", "q and q'"],
    correctOptionIndex: 3,
  },
  {
    id: 1187,
    question:
      "Packets wait in a buffer (queue) until node is ready to process them in",
    options: [
      "Out-of-Order Ones",
      "First-in First out",
      "Out-of-Reach Ones",
      "First-in-First Ones",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1188,
    question: "Page fault occurs when",
    options: [
      "When a requested page is in memory",
      "When a requested page is not in memory",
      "When a page is corrupted",
      "When an exception is thrown",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1189,
    question: "Page stealing",
    options: [
      "is a sign of an efficient system",
      "should be the tuning goal",
      "is taking page frames from other working sets",
      "is taking larger disk spaces for pages paged out",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1190,
    question:
      "Page table level that says if page has been modified is known as",
    options: ["Presence", "Dirty", "Read/Write", "Page size"],
    correctOptionIndex: 1,
  },
  {
    id: 1191,
    question: "Parallel load transfer is done in",
    options: ["1 cycle", "2 cycle", "3 cycle", "4 cycle"],
    correctOptionIndex: 0,
  },
  {
    id: 1192,
    question: "Parity checker is used for",
    options: ["detection", "testing", "debugging", "error"],
    correctOptionIndex: 3,
  },
  {
    id: 1193,
    question: "PC Program Counter is also called",
    options: [
      "instruction pointer",
      "memory pointer",
      "data counter",
      "file pointer",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1194,
    question: "Physical memory is divided into sets of finite size called as",
    options: ["Frames", "Pages", "Blocks", "Vectors"],
    correctOptionIndex: 0,
  },
  {
    id: 1195,
    question: "Pipeline implement",
    options: [
      "fetch instruction",
      "decode instruction",
      "fetch operand",
      "calculate operand",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1196,
    question: "PLA stands for",
    options: [
      "programmable lead array",
      "programmable logic agency",
      "predicted logic array",
      "programmable logic array",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1197,
    question: "Poor relationships amongst team member is ______ risk",
    options: ["product", "people", "business", "technology"],
    correctOptionIndex: 1,
  },
  {
    id: 1198,
    question:
      "Pre-emptive scheduling is the strategy of temporarily suspending a running process",
    options: [
      "to allow starving processes to run",
      "before the CPU time slice expires",
      "when it requests I/O",
      "to avoid collision",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1199,
    question:
      "Predict Output, if the below code is run with given command\nCommand Line: java myprog good morning everyone",
    options: ["myprog", "good", "morning", "everyone"],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1200,
    question:
      "Predict the output of following C++ program involving sizeof(empty class)",
    options: ["A non-zero value", "Compiler Error", "Runtime Error", "0"],
    correctOptionIndex: 0,
    isQuestionContainsCoding: true,
  },
  {
    id: 1201,
    question:
      "Predict the output of following program involving class A and class B",
    options: [
      "Compiler Error in show() because x is protected in class A",
      "Compiler Error in show() because y is private in class B",
      "Program runs successfully",
      "Runtime Error",
    ],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1202,
    question: "Present states of asynchronous circuits are also called",
    options: [
      "secondary variables",
      "primary variables",
      "excitation variables",
      "short term memory",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1203,
    question: "Prim's algorithm follows ______ search",
    options: ["Global", "Local", "Binary", "Linear"],
    correctOptionIndex: 1,
  },
  {
    id: 1204,
    question: "Primed or unprimed variable is",
    options: ["map", "logic gates", "literal", "graph"],
    correctOptionIndex: 2,
  },
  {
    id: 1205,
    question: "Process Control Block (PCB) is also called",
    options: [
      "Program Control Block",
      "Memory Control Block",
      "Task Control Block",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1206,
    question:
      "Producer – Consumer problem, one of the classical problems of synchronization is also called",
    options: [
      "Bounded Buffer Problem",
      "Readers Writers Problem",
      "Dining Philosophers Problem",
      "None of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1207,
    question: "Product of 1011 and 101",
    options: ["110111", "110011", "111011", "111100"],
    correctOptionIndex: 0,
  },
  {
    id: 1208,
    question: "Program always deals with",
    options: [
      "logical address",
      "physical address",
      "absolute address",
      "relative address",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1209,
    question: "Prototyping is an important technique of",
    options: [
      "requirements validation",
      "requirement specification",
      "feasibility study",
      "coding",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1210,
    question: "PSW is saved in stack when there is a",
    options: [
      "interrupt recognised",
      "execution of RST instruction",
      "Execution of CALL instruction",
      "Execution of RET instruction",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1211,
    question: "Which of these will create and start this thread?",
    options: [
      "new Runnable(MyRunnable).start();",
      "new Thread(MyRunnable).run();",
      "new Thread(new MyRunnable()).start();",
      "new MyRunnable().start();",
    ],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1212,
    question: "Purpose of process is to deliver software",
    options: [
      "in time",
      "with acceptable quality",
      "that is cost efficient",
      "both a & b",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1213,
    question: "Race condition is present in",
    options: [
      "synchronous logic circuit",
      "asynchronous logic circuit",
      "ideal logic circuit",
      "both a and b",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1214,
    question: "Race in which stable state depends on order is called",
    options: [
      "critical race",
      "identical race",
      "non critical race",
      "defined race",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1215,
    question:
      "Rate of movement of light in lamp handball game is determined by clock's",
    options: ["input", "frequency", "voltage", "current"],
    correctOptionIndex: 1,
  },
  {
    id: 1216,
    question: "Rather than AND-OR gates combinational circuits are made by",
    options: ["NAND-NOR", "NAND-OR", "OR only", "AND only"],
    correctOptionIndex: 0,
  },
  {
    id: 1217,
    question: "Recursion is sometimes called",
    options: [
      "Circular definition",
      "Complex definition",
      "Procedure",
      "Union",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1218,
    question:
      "Reduction of flip-flops in a sequential circuit is referred to as",
    options: ["reduction", "state reduction", "next state", "Assignment"],
    correctOptionIndex: 1,
  },
  {
    id: 1219,
    question: "Register renaming is done in pipelined processors",
    options: [
      "as an alternative to register allocation at compile time",
      "for efficient access to function parameters and local variables",
      "to handle certain kinds of hazards",
      "as part of address translation",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1220,
    question: "Relationship between clock output and master slave output gives",
    options: ["timing diagram", "map", "chart", "table"],
    correctOptionIndex: 0,
  },
  {
    id: 1221,
    question:
      "Reliability, Response time and Storage requirements are examples of",
    options: [
      "design constraint",
      "functional requirement",
      "non functional requirement",
      "process standard",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1222,
    question: "Representation of 8620 in binary is",
    options: [
      "1000_0111_1110_0000",
      "1000_0110_0010_0000",
      "1000_0110_1010_0000",
      "1011_0110_0010_0000",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1223,
    question: "Requirements can be refined using",
    options: [
      "The waterfall model",
      "prototyping model",
      "the evolutionary model",
      "the spiral model",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1224,
    question:
      "Requirements that change due to the system's environment is said to be",
    options: [
      "Mutable requirements",
      "Compatibility requirements",
      "Emergent requirements",
      "Consequential requirements",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1225,
    question:
      "Requirements that emerge as understanding of the system develops is termed as",
    options: [
      "Mutable requirements",
      "Emergent requirements",
      "Consequential requirements",
      "Compatibility requirements",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1226,
    question:
      "Requirements which change during development or when the system is in use are said to be",
    options: [
      "stable requirement",
      "volatile requirement",
      "functional requirement",
      "non functional requirement",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1227,
    question:
      "Requirements which specify that the delivered product must behave in a particular way is",
    options: [
      "design constraint",
      "product requirement",
      "organisational requirement",
      "external requirement",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1228,
    question: "Resolution of externally defined symbols is performed by",
    options: ["Loader", "Assembler", "Linker", "Compiler"],
    correctOptionIndex: 2,
  },
  {
    id: 1229,
    question: "Resources are allocated to the process on non-sharable basis is",
    options: [
      "mutual exclusion",
      "circular wait",
      "hold and wait",
      "no pre-emption",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1230,
    question: "Ripple counter can not be described by",
    options: ["Boolean equation", "clock duration", "graph", "flow chart"],
    correctOptionIndex: 0,
  },
  {
    id: 1231,
    question: "Ripple counters are also called",
    options: [
      "SSI counters",
      "asynchronous counters",
      "synchronous counters",
      "VLSI counters",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1232,
    question:
      "Risks are explicitly assessed and resolved throughout the process in ______ model",
    options: ["spiral", "prototyping", "incremental", "waterfall"],
    correctOptionIndex: 0,
  },
  {
    id: 1233,
    question: "Round robin scheduling is essentially the preemptive version of",
    options: [
      "FIFO",
      "Shortest job first",
      "Shortest remaining",
      "Longest time first",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1234,
    question: "Round Robin (RR) scheduling algorithm is suitable for",
    options: [
      "Real Time Operating Systems",
      "Embedded Operating Systems",
      "Distributed Operating Systems",
      "Time Sharing Operating Systems",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1235,
    question: "RS flipflop works on",
    options: ["2 inputs", "3 inputs", "4 inputs", "5 inputs"],
    correctOptionIndex: 0,
  },
  {
    id: 1236,
    question: "Run time mapping from virtual to physical address is done by",
    options: ["memory management unit", "PCI", "CPU", "semaphore tool"],
    correctOptionIndex: 0,
  },
  {
    id: 1237,
    question: "Runtime polymorphism can be achieved by",
    options: [
      "accessing virtual function through the pointer of base class",
      "by accessing virtual function through the object",
      "Accessing physical function",
      "none of these",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1238,
    question: "Serial adder can be converted to serial adder subtractor using",
    options: ["encoder", "demux", "multiplier", "mode control"],
    correctOptionIndex: 3,
  },
  {
    id: 1239,
    question: "Serial addition can be done with",
    options: ["shift register", "serial load", "load", "ring shift register"],
    correctOptionIndex: 0,
  },
  {
    id: 1240,
    question:
      "Shift register whose input is connected to select output is called",
    options: [
      "feedback shift register",
      "bidirectional shift register",
      "unidirectional shift register",
      "ring shift register",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1241,
    question:
      "Shift registers having four bits will enable shift control signal for",
    options: [
      "2 clock pulses",
      "3 clock pulses",
      "4 clock pulses",
      "5 clock pulses",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1242,
    question: "Simplest registers only consists of",
    options: ["counter", "EPROM", "latch", "flipflop"],
    correctOptionIndex: 3,
  },
  {
    id: 1243,
    question: "Simplified expression of full adder carry is",
    options: ["c=xy+xz+yz", "c=xy+xz", "c=xy+yz", "c=x+y+z"],
    correctOptionIndex: 0,
  },
  {
    id: 1244,
    question: "Simplified expression of half adder carry is",
    options: ["c=xy+x", "c=y+x", "c=xy+y", "c=xy"],
    correctOptionIndex: 3,
  },
  {
    id: 1245,
    question:
      "Software must be usable by the users for which it was designed is termed as",
    options: ["productivity", "usability", "reliability", "efficiency"],
    correctOptionIndex: 1,
  },
  {
    id: 1246,
    question:
      "Software should not make wasteful use of system resources is termed as",
    options: ["productivity", "usability", "efficiency", "reliability"],
    correctOptionIndex: 2,
  },
  {
    id: 1247,
    question: "Sometimes the overhead of keeping track of a hole might be",
    options: [
      "larger than the hole itself",
      "larger than the memory",
      "very small",
      "small or big depends on os",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1248,
    question: "SR latch consists of",
    options: ["1 input", "2 inputs", "3 inputs", "4 inputs"],
    correctOptionIndex: 1,
  },
  {
    id: 1249,
    question: "SRD stands for",
    options: [
      "Software requirements definition",
      "Structured requirements definition",
      "Software requirements diagram",
      "Structured requirements diagram",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1250,
    question: "Stable condition in transition table is given by expression",
    options: ["Y=x", "X=x", "Y=y", "X=y"],
    correctOptionIndex: 1,
  },
  {
    id: 1251,
    question: "STACK IS ALSO CALLED",
    options: [
      "Last in First out",
      "First In last Out",
      "First In First Out",
      "Last In Last Out",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1252,
    question: "Star topology is used in",
    options: ["LAN", "WAN", "MAN", "Internetwork"],
    correctOptionIndex: 0,
  },
  {
    id: 1253,
    question: "State of flipflop can be switched by changing its",
    options: [
      "input signal",
      "output signal",
      "momentary signals",
      "all signals",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1254,
    question: "Static analysers are software tools for",
    options: [
      "requirement analysis",
      "diagram generators",
      "source text processing",
      "database management system",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1255,
    question: "Strobe S in a mux acts as",
    options: ["enable", "reset", "clear", "stop"],
    correctOptionIndex: 0,
  },
  {
    id: 1256,
    question: "Structured charts are a product of",
    options: [
      "requirement gathering",
      "requirement analysis",
      "design",
      "coding",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1257,
    question:
      "Subtraction of two binary numbers is done by taking complementing",
    options: ["output", "subtract", "subtrahend", "remainder"],
    correctOptionIndex: 2,
  },
  {
    id: 1258,
    question: "Subtraction of two signed numbers is performed with",
    options: [
      "1's complement",
      "2's complement",
      "9's complement",
      "10's complement",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1259,
    question: "Subtractor also have output to check if 1 has been",
    options: ["complemented", "borrowed", "shifted", "primed"],
    correctOptionIndex: 1,
  },
  {
    id: 1260,
    question: "super keyword in Java is used for",
    options: [
      "to refer to immediate child class of a class",
      "to refer to immediate parent class of a class",
      "to refer to current class object",
      "to refer to static member of parent class",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1261,
    question: "Superclass - subclass relationships, also known as",
    options: ["Aggregation", "Association", "Generalization", "Communication"],
    correctOptionIndex: 2,
  },
  {
    id: 1262,
    question: "Supervisor state is",
    options: [
      "never used",
      "required to perform any I/O",
      "entered by programs when they enter the processor",
      "only allowed to the operating system",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1263,
    question:
      "Which one of the following is a sufficient condition for ensuring that deadlock does not occur?",
    options: ["∑Si < m + n", "∑Si > n", "∑Si < m * n", "∑Si < m"],
    correctOptionIndex: 0,
  },
  {
    id: 1264,
    question: "Switch which clears flipflop to its initial state is called",
    options: ["clock", "invert", "hold", "clear"],
    correctOptionIndex: 3,
  },
  {
    id: 1265,
    question: "Synchronous counter is a type of",
    options: ["SSI counters", "LSI counters", "MSI counters", "VLSI counters"],
    correctOptionIndex: 2,
  },
  {
    id: 1266,
    question: "System generation",
    options: [
      "is always quite simple",
      "requires extensive tools to be understandable",
      "is always very difficult",
      "varies in difficulty between systems",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1267,
    question: "Systematic manual analysis of the requirements are termed as",
    options: [
      "Feasibility study",
      "Requirements reviews",
      "Requirements elicitation",
      "Requirements specification",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1268,
    question: "Table that lists inputs for required change of states is called",
    options: ["truth table", "excitation table", "state table", "clock table"],
    correctOptionIndex: 1,
  },
  {
    id: 1269,
    question:
      "Testing with customer data to check that it is acceptable is termed as",
    options: [
      "system testing",
      "module testing",
      "acceptance testing",
      "integration testing",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1270,
    question:
      "The philosophy behind ______ is defect avoidance rather than defect removal",
    options: [
      "Requirement analysis",
      "Design verification",
      "Clean room software development",
      "Testing",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1271,
    question:
      "The ______ operator is a technique to forcefully convert one data type to the other",
    options: ["Cast", "Conversion", "Type", "Unary"],
    correctOptionIndex: 0,
  },
  {
    id: 1272,
    question:
      "The ______ is an iterative software development process framework created by the Rational Software Corporation",
    options: [
      "Spiral model",
      "Rational Unified Process",
      "Rational Prototyping",
      "Waterfall",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1273,
    question:
      "The ______ is used when you have one case that is similar to another use case but does a bit more specialized",
    options: [
      "includes association",
      "extends association",
      "fix association",
      "realize association",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1274,
    question:
      "The ______ may be used for user training before a final system is delivered",
    options: ["pattern", "prototype", "architecture", "testcase"],
    correctOptionIndex: 1,
  },
  {
    id: 1275,
    question:
      "The ______ is a software development process intended to produce software with a certifiable level of reliability",
    options: [
      "design process",
      "business process",
      "software engineering process",
      "cleanroom software engineering process",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1276,
    question:
      "The ______ defines the types of documents to be managed and a document naming scheme",
    options: ["CM plan", "project plan", "Baseline", "CI plan"],
    correctOptionIndex: 0,
  },
  {
    id: 1277,
    question:
      "The address mapping done when the program is initially loaded is called",
    options: [
      "Relocation",
      "Dynamic relocation",
      "Static relocation",
      "Executable relocation",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1278,
    question:
      "The addressing mode used in an instruction of the form ADD X Y is",
    options: ["Absolute", "indirect", "register direct", "direct"],
    correctOptionIndex: 2,
  },
  {
    id: 1279,
    question:
      "Which one of the following is true regarding the binary semaphore implementation?",
    options: [
      "The implementation may not work if context switching is disabled in P",
      "Instead of using fetch-and-set, a pair of normal load/store can be used",
      "The implementation of V is wrong",
      "The code does not implement a binary semaphore",
    ],
    correctOptionIndex: 0,
    isQuestionContainsCoding: true,
  },
  {
    id: 1280,
    question: "The binary address issued to data or instructions are called as",
    options: [
      "Physical address",
      "Location",
      "Relocatable address",
      "Logical address",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1281,
    question: "The class java.lang.Exception",
    options: [
      "protected",
      "extends Throwable",
      "implements Throwable",
      "serializable",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1282,
    question:
      'The code snippet if("Welcome".trim() == "Welcome".trim()) System.out.println("Equal"); else System.out.println("Not Equal"); will',
    options: [
      'compile and display "Equal"',
      'compile and display "Not Equal"',
      "cause a compiler error",
      "compile and display NULL",
    ],
    correctOptionIndex: 0,
    isQuestionContainsCoding: true,
  },
  {
    id: 1283,
    question:
      "The concept of ______ is used to represent a system whose inside workings are not available for inspection",
    options: [
      "Red box testing",
      "black box testing",
      "Glass box testing",
      "White box testing",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1284,
    question: "The condition flag Z is set to 1 to indicate",
    options: [
      "The operation has resulted in an error",
      "The operation requires an interrupt call",
      "The result is zero",
      "There is no empty register available",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1285,
    question:
      "The conditions that must be present in order to start a use case is",
    options: [
      "start condition",
      "precondition",
      "postcondition",
      "event tracking",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1286,
    question: "The data on a DVD is held in the form of ______ on the disc",
    options: [
      "small pits and bumps",
      "small bits",
      "small bytes",
      "None of These",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1287,
    question: "The decoded instruction is stored in",
    options: [
      "Instruction Register",
      "Program Counter",
      "Register",
      "Memory Data Register",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1288,
    question: "The depth of a complete binary tree is given by",
    options: ["n log n", "n log n + 1", "log n", "log n + 1"],
    correctOptionIndex: 3,
  },
  {
    id: 1289,
    question:
      "The derivation of Child class from Base class is indicated by ______ symbol",
    options: ["::", ":", ";", "|"],
    correctOptionIndex: 1,
  },
  {
    id: 1290,
    question:
      "The design process for identifying the subsystems making up a system and the framework for subsystem control and communication is",
    options: ["architectural design", "form design", "layer design", "design"],
    correctOptionIndex: 0,
  },
  {
    id: 1291,
    question:
      "The disadvantage of moving all process to one end of memory and all holes to the other direction producing one large hole of available memory is",
    options: [
      "the memory used",
      "the cost incurred",
      "the CPU used",
      "All of these",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1292,
    question: "The DMA controller has ______ registers",
    options: ["4", "3", "2", "1"],
    correctOptionIndex: 1,
  },
  {
    id: 1293,
    question: "The DMA transfer is initiated by",
    options: ["Processor", "The process being executed", "I/O devices", "OS"],
    correctOptionIndex: 2,
  },
  {
    id: 1294,
    question: "The expression X = 4 + 2 % -8 evaluates",
    options: ["-6", "6", "2", "-2"],
    correctOptionIndex: 1,
  },
  {
    id: 1295,
    question: "The fibre that will float on water",
    options: ["Nylon", "Polyester", "Acrylic", "Polypropylene"],
    correctOptionIndex: 3,
  },
  {
    id: 1296,
    question:
      'The following program is an example for class Student { int id; String name; void display(){ System.out.println(id+" "+name); } public static void main(String args[]){ Student s1=new Student(); Student s2=new Student(); s1.display(); s2.display(); }}',
    options: [
      "Parameterized constructor",
      "Default Constructor",
      "Overloading Constructor",
      "None of the above",
    ],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1297,
    question:
      "The following two statements illustrate the difference between int x = 25; Integer y = new Integer(33);",
    options: [
      "Primitive data types",
      "primitive data type and an object of a wrapper class",
      "Wrapper class",
      "None of the above",
    ],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1298,
    question: "The high paging activity is called",
    options: [
      "Fragmentation",
      "Segmentation",
      "Thrashing",
      "memory allocation",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1299,
    question: "The Instruction fetch phase ends with",
    options: [
      "Placing the data from the address in MAR into MDR",
      "Placing the address of the data into MAR",
      "Completing the execution of the data and placing its storage address into MAR",
      "Decoding the data in MDR and placing it in IR",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1300,
    question:
      "The instructions which copy information from one location to another either in the processor's internal register set or in the external main memory are called",
    options: [
      "Program control instructions",
      "Input-output instructions",
      "Data transfer instructions",
      "Logical instructions",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1301,
    question: "The interrupt-request line is a part of the",
    options: ["Data line", "Control line", "Address line", "None of the above"],
    correctOptionIndex: 1,
  },
  {
    id: 1302,
    question: "The longer a fault exists in software",
    options: [
      "the more tedious its removal becomes",
      "the more costly it is to detect and correct",
      "the less likely it is to be properly corrected",
      "All of the mentioned",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1303,
    question:
      "The maximum number of processes that can be in Ready state for a computer system with n CPUs is",
    options: ["n", "n²", "2n", "Independent of n"],
    correctOptionIndex: 3,
  },
  {
    id: 1304,
    question:
      "The measure of the average length of words and sentences in documents is termed as",
    options: ["coupling", "fog index", "cohesion", "fan in"],
    correctOptionIndex: 1,
  },
  {
    id: 1305,
    question:
      "The mechanism that binds code and data together to keep them secure from outside world is known as",
    options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    correctOptionIndex: 1,
  },
  {
    id: 1306,
    question:
      "The memory allocation scheme subject to external fragmentation is",
    options: [
      "segmentation",
      "swapping",
      "multiple contiguous fixed partitions",
      "pure demand paging",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1307,
    question:
      "The most appropriate matching for the following pairs X: depth first search 1: heap Y: breadth first search 2: queue Z: sorting 3: stack",
    options: ["X-1 Y-2 Z-3", "X-3 Y-1 Z-2", "X-3 Y-2 Z-1", "X-2 Y-3 Z-1"],
    correctOptionIndex: 2,
  },
  {
    id: 1308,
    question:
      "The multiplicand register & multiplier register of a hardware circuit implementing Booth's algorithm have (11101) & (1100). The result shall be",
    options: ["(812)10", "(-12)10", "(12)10", "(-812)10"],
    correctOptionIndex: 0,
  },
  {
    id: 1309,
    question: "The object of DataInputStream is used to",
    options: [
      "To convert binary stream into character stream",
      "to convert character stream into binary stream",
      "To write data onto output object",
      "All of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1310,
    question:
      "The objective of ______ is to deliver a working system to end-users",
    options: [
      "designing",
      "testing",
      "throw away prototyping",
      "evolutionary prototyping",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1311,
    question:
      "The operating system and the other processes are protected from being modified by an already running process because",
    options: [
      "they are in different memory spaces",
      "they are in different logical addresses",
      "they have a protection algorithm",
      "every address generated by the CPU is being checked against the relocation and limit registers",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1312,
    question: "The operating system creates ______ from the physical computer",
    options: ["Virtual computers", "Virtual space", "Virtual device", "None"],
    correctOptionIndex: 0,
  },
  {
    id: 1313,
    question: "The operating system is",
    options: [
      "in the low memory",
      "in the high memory",
      "Secondary memory",
      "either a or b (depending on the location of interrupt vector)",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1314,
    question: "The page table contains",
    options: [
      "base address of each page in physical memory",
      "page size",
      "page offset",
      "PTBR",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1315,
    question: "The pager concerns with the",
    options: [
      "first page of a process",
      "entire thread",
      "individual page of a process",
      "entire process",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1316,
    question:
      "The performance of cache memory is frequently measured in terms of a quantity called",
    options: ["Miss ratio", "Hit ratio", "Latency ratio", "Read ratio"],
    correctOptionIndex: 1,
  },
  {
    id: 1317,
    question: "The performance of Round Robin (RR) scheduling depends on",
    options: ["quantum", "priority", "preemption", "None of the above"],
    correctOptionIndex: 0,
  },
  {
    id: 1318,
    question: "The performance of the cache memory is measured in terms of",
    options: ["Hit Ratio", "Chat Ratio", "Copy Ratio", "Data Ratio"],
    correctOptionIndex: 0,
  },
  {
    id: 1319,
    question:
      "The primary objective of ______ is to scope the system adequately as a basis for validating initial costing and budgets",
    options: [
      "elaboration phase",
      "construction phase",
      "inception phase",
      "transition phase",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1320,
    question:
      "The primary objective of ______ phase is to mitigate the key risk items identified by analysis up to the end of this phase",
    options: ["inception", "elaboration", "construction", "transition"],
    correctOptionIndex: 1,
  },
  {
    id: 1321,
    question: "The process of storing and restoring from PCB is called",
    options: ["Loading", "Relocation", "context switch", "Dispatcher"],
    correctOptionIndex: 2,
  },
  {
    id: 1322,
    question: "The process that is currently being executed is called",
    options: [
      "Waiting State",
      "Running State",
      "Ready state",
      "None of the above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1323,
    question: "The recurring aspects of designs are called design",
    options: ["patterns", "documents", "objects", "classes"],
    correctOptionIndex: 0,
  },
  {
    id: 1324,
    question: "The relocation register helps in",
    options: [
      "providing more address space to processes",
      "a different address space to processes",
      "to save the process state in PCB",
      "to protect the address spaces of processes",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1325,
    question: "The resolution of externally defined symbols is performed by",
    options: ["Compiler", "Assembler", "Linker", "None of the above"],
    correctOptionIndex: 2,
  },
  {
    id: 1326,
    question:
      "The RUP has determined a project life-cycle consisting of ______ phases",
    options: ["four", "five", "six", "seven"],
    correctOptionIndex: 0,
  },
  {
    id: 1327,
    question: "The size of the Multiplier Quotient in IAS machine is",
    options: ["20 Bits", "12 Bits", "40 Bits", "8 Bits"],
    correctOptionIndex: 2,
  },
  {
    id: 1328,
    question: "The size of the Program Counter in IAS machine is",
    options: ["12", "20", "40", "8"],
    correctOptionIndex: 2,
  },
  {
    id: 1329,
    question: "The SRS is said to be consistent if and only if",
    options: [
      "its structure and style are such that any changes to the requirements can be made easily while retaining the style and structure",
      "every requirement stated therein is one that the software shall meet",
      "every requirement stated therein is verifiable",
      "no subset of individual requirements described in it conflict with each other",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1330,
    question:
      "The strategy of allowing processes that are logically runnable to be temporarily suspended is called",
    options: [
      "preemptive scheduling",
      "non preemptive scheduling",
      "shortest job first",
      "first come first served",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1331,
    question: "The sum of 11101 + 10111 equals",
    options: ["110011", "100001", "110100", "100100"],
    correctOptionIndex: 2,
  },
  {
    id: 1332,
    question:
      "The technique where the controller is given complete access to main memory is",
    options: ["Cycle stealing", "Memory stealing", "Memory Con", "Burst mode"],
    correctOptionIndex: 3,
  },
  {
    id: 1333,
    question:
      "The techniques which move the program blocks to or from the physical memory is called",
    options: ["Paging", "Virtual memory organisation", "Overlays", "Framing"],
    correctOptionIndex: 1,
  },
  {
    id: 1334,
    question:
      "The total number of processes completed per unit time is termed as",
    options: [
      "throughput",
      "response time",
      "waiting time",
      "Turn around time",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1335,
    question: "The two phases of executing an instruction are",
    options: [
      "Instruction fetch and instruction execution",
      "Instruction execution and storage",
      "Instruction execution and processing",
      "Instruction fetch and instruction processing",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1336,
    question:
      "The unit which decodes and translates each instruction and generates the necessary enable signals for ALU and other units is called",
    options: ["ALU", "Control Unit", "CPU", "Logical Unit"],
    correctOptionIndex: 1,
  },
  {
    id: 1337,
    question:
      "The virtual memory basically stores the next segment of data to be executed on the",
    options: ["Secondary storage", "Disks", "RAM", "ROM"],
    correctOptionIndex: 0,
  },
  {
    id: 1338,
    question: "The ____ register is read by the host to get input",
    options: ["data out", "data in", "flow out", "None"],
    correctOptionIndex: 1,
  },
  {
    id: 1339,
    question: "The ____ register is read by the host to get input",
    options: ["data out", "data in", "flow out", "None of the above"],
    correctOptionIndex: 1,
  },
  {
    id: 1340,
    question: "The memory address of the first element of an array is called",
    options: [
      "floor address",
      "foundation address",
      "first address",
      "base address",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1341,
    question:
      "The memory address of fifth element of an array can be calculated by the formula",
    options: [
      "LOC(Array[5]) = Base(Array) + w(5 - lower bound)",
      "LOC(Array[5]) = Base(Array[5]) + (5 - lower bound)",
      "LOC(Array[5]) = Base(Array[4]) + (5 - upper bound)",
      "None of these",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1342,
    question:
      "The ___ notation is a mature technique for model-based specification",
    options: ["K", "F", "Z", "R"],
    correctOptionIndex: 2,
  },
  {
    id: 1343,
    question: "Third step of making transition table is",
    options: [
      "determining feedback loop",
      "designating output of loops",
      "deriving functions of Y",
      "plotting Y",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1344,
    question: "Thrashing",
    options: [
      "is a natural consequence of virtual memory systems",
      "always occurs on large computers",
      "can be caused by poor paging algorithms",
      "can always be avoided by swapping",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1345,
    question: "Thrashing occurs when",
    options: [
      "When a page fault occurs",
      "Processes on system frequently access pages not memory",
      "Processes on system are in running state",
      "Processes on system are in waiting state",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1346,
    question: "Thread class is available in",
    options: [
      "java.io package",
      "java.lang package",
      "java.awt package",
      "java.util package",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1347,
    question:
      "Three concurrent processes X, Y, and Z execute code segments using semaphores. Which one represents a deadlock-free order of invoking the P operations?",
    options: [
      "X:P(a)P(b)P(c) Y:P(b)P(c)P(d) Z:P(c)P(d)P(a)",
      "X:P(b)P(a)P(c) Y:P(b)P(c)P(d) Z:P(a)P(c)P(d)",
      "X:P(b)P(a)P(c) Y:P(c)P(b)P(d) Z:P(a)P(c)P(d)",
      "X:P(a)P(b)P(c) Y:P(c)P(b)P(d) Z:P(c)P(d)P(a)",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1348,
    question: "Time between clock pulses are called",
    options: ["bit duration", "clock duration", "duration", "bit time"],
    correctOptionIndex: 3,
  },
  {
    id: 1349,
    question: "Time delay device is memory element of",
    options: [
      "unclocked flip-flops",
      "clocked flip-flops",
      "synchronous circuits",
      "asynchronous circuits",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1350,
    question: "Time sequence for flip-flop can be enumerated by",
    options: ["state table", "map", "truth table", "graph"],
    correctOptionIndex: 0,
  },
  {
    id: 1351,
    question:
      "To access a structure element using a pointer, ______ operator is used",
    options: ["dot (.)", "pointer (&)", "pointer (*)", "arrow (->)"],
    correctOptionIndex: 3,
  },
  {
    id: 1352,
    question:
      "To avoid the race condition, the number of processes that may be simultaneously inside their critical section is",
    options: ["8", "10", "1", "0"],
    correctOptionIndex: 2,
  },
  {
    id: 1353,
    question: "To clear flip-flops we use",
    options: ["toggle switch", "push button", "mux", "demux"],
    correctOptionIndex: 0,
  },
  {
    id: 1354,
    question: "To execute the threads one after another",
    options: [
      "the keyword synchronize is used",
      "the keyword synchronizable is used",
      "the keyword synchronized is used",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1355,
    question:
      "To implement Boolean function with NAND gates we convert function to",
    options: ["AND logic", "OR logic", "NOR logic", "NAND logic"],
    correctOptionIndex: 3,
  },
  {
    id: 1356,
    question: "To load data to shift register its SH/LD pin should be",
    options: ["1", "0", "reset", "undefined"],
    correctOptionIndex: 1,
  },
  {
    id: 1357,
    question: "To start counting enable input should be",
    options: ["0", "1", "reset", "clear"],
    correctOptionIndex: 1,
  },
  {
    id: 1358,
    question: "Token bucket allows bursty traffic to be regulated at",
    options: ["maximum rate", "minimum rate", "both", "none"],
    correctOptionIndex: 0,
  },
  {
    id: 1359,
    question:
      "Tools to support later activities such as programming, debugging and testing are",
    options: ["Upper-CASE", "Lower-CASE", "CASE", "Middle-CASE"],
    correctOptionIndex: 1,
  },
  {
    id: 1360,
    question:
      "Tools to support the early process activities of requirements and design are",
    options: ["Upper-CASE", "Lower-CASE", "Middle-CASE", "CASE"],
    correctOptionIndex: 0,
  },
  {
    id: 1361,
    question: "Traditional software development approach is based on",
    options: [
      "classes and methods",
      "Objects and Isolated data",
      "functions and procedures",
      "attributes",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1362,
    question: "Transference of information from one register to another is",
    options: [
      "Intra-register transfer operation",
      "Inter-register transfer operation",
      "Out register transfer operation",
      "In register transfer operation",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1363,
    question: "Transition table that terminates in total stable state gives",
    options: ["sequence", "series", "unique sequence", "unique series"],
    correctOptionIndex: 2,
  },
  {
    id: 1364,
    question: "Trees are examples of which type of data structure",
    options: [
      "Linear and Hierarchical",
      "Linear and Non-Hierarchical",
      "Non-Linear and Hierarchical",
      "Non-Linear and Non-Hierarchical",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1365,
    question: "Two bit addition is done by",
    options: [
      "ripple carry adder",
      "carry sum adder",
      "full adder",
      "half adder",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1366,
    question: "Two bit subtraction is done by",
    options: ["demux", "mux", "full subtractor", "half subtractor"],
    correctOptionIndex: 3,
  },
  {
    id: 1367,
    question: "Two cross coupled NAND gates make",
    options: ["SR Latch", "RS flipflop", "D flipflop", "master slave flipflop"],
    correctOptionIndex: 0,
  },
  {
    id: 1368,
    question: "Two dimensional arrays are also called",
    options: [
      "tables arrays",
      "matrix arrays",
      "tables and matrix arrays",
      "attributes",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1369,
    question: "Two dimensional arrays are also called",
    options: [
      "Matrices",
      "Tables",
      "Matrices and Tables",
      "Neither Matrices nor table",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1370,
    question: "Two methods are said to be overloaded if they have",
    options: [
      "same name and same number of parameter but different return type",
      "they have same name",
      "they have different name but same number of argument",
      "have same name but different parameters",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1371,
    question:
      "Two sub layers of OSI Data Link layer are which of the following?",
    options: [
      "Data Link Control, Physical Layer Control",
      "Logical Link Control, Data Link Control",
      "Media Access Control, Physical Layer Control",
      "Logical Link Control, Media Access Control",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1372,
    question: "Using 10's complement 3250-72532 is",
    options: ["-69272", "-69282", "-69252", "-69232"],
    correctOptionIndex: 1,
  },
  {
    id: 1373,
    question:
      "Using an executable model of the system to check requirements is termed as",
    options: [
      "Prototyping",
      "Requirement reviews",
      "Requirement validation",
      "Requirement analysis",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1374,
    question: "Virtual memory is",
    options: [
      "Large secondary memory",
      "Large main memory",
      "Illusion of large main memory",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1375,
    question: "Virtual memory is",
    options: [
      "an extremely large main memory",
      "an extremely large secondary memory",
      "an illusion of an extremely large memory",
      "a type of memory used in super computers",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1376,
    question:
      "What are the types of requirement in Quality Function Deployment (QFD)",
    options: [
      "Known, Unknown, Undreamed",
      "User, Developer",
      "Functional, Non-Functional",
      "Normal, Expected, Exciting",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1377,
    question: "What DFD notation is represented by the Rectangle?",
    options: ["Transform", "Data Store", "Function", "Data read"],
    correctOptionIndex: 1,
  },
  {
    id: 1378,
    question: "What does the file iostream contain?",
    options: [
      "Declarations of the standard input-output library functions",
      "Definitions of the standard input-output library functions",
      "Both",
      "None of the Above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1379,
    question:
      "What incorporates data, architectural, interface, and procedural representations of the software?",
    options: ["design model", "user's model", "mental image", "system image"],
    correctOptionIndex: 0,
  },
  {
    id: 1380,
    question: "What information does EIGRP share with neighboring routers?",
    options: [
      "Only dynamic routes that it is using",
      "All routes that it has learned",
      "All EIGRP routes that it has learned",
      "Only routes that it is using",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1381,
    question: "What is a shell?",
    options: [
      "is a hardware component",
      "It is a command interpreter",
      "It is a part in compiler",
      "It is a tool in CPU scheduling",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1382,
    question: "What is a stub network?",
    options: [
      "A network with only one entry and no exit point",
      "A network with more than one exit point",
      "A network with more than one exit and entry point",
      "A network that has only one entry and exit point",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1383,
    question: "What is an aggregate object?",
    options: [
      "An object with only primitive attributes",
      "An instance of a class which has only static methods",
      "An instance which has other objects",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1384,
    question: "What is compaction?",
    options: [
      "a technique for overcoming internal fragmentation",
      "a paging technique",
      "a technique for overcoming external fragmentation",
      "a technique for overcoming fatal error",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1385,
    question:
      "What is difference between protected and private access specifiers in inheritance?",
    options: [
      "private member is not inheritable and not accessible in derived class",
      "protected member is inheritable and also accessible in derived class",
      "Both are inheritable but private is accessible in the derived class",
      "Both are inheritable but protected is not accessible in the derived class",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1386,
    question: "What is route poisoning?",
    options: [
      "It describes when a router sets the metric for a downed link to infinity",
      "It sends back the protocol received from a router as a poison pill",
      "It is information received from a router that can't be sent back to the originating router",
      "None of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1387,
    question: "What is split horizon?",
    options: [
      "Information about a route should not be sent back in the direction from which the original update came",
      "It splits the traffic when you have a large bus physical network",
      "It holds the regular updates from broadcasting to a downed link",
      "It prevents regular update messages from reinstating a route that has gone down",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1388,
    question: "What is the major drawback of using RAD Model?",
    options: [
      "Highly specialized & skilled developers/designers are required",
      "Increases re-usability of components",
      "Encourages customer/client feedback",
      "Both a & c",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1389,
    question: "What is the default subnet mask for a class C network?",
    options: ["255.0.0.0", "127.0.0.1", "255.255.255.0", "255.255.0.0"],
    correctOptionIndex: 2,
  },
  {
    id: 1390,
    question:
      "What is the difference between binary coding and binary-coded decimal?",
    options: [
      "BCD is pure binary",
      "Binary coding has a decimal format",
      "BCD has no decimal format",
      "Binary coding is pure binary",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1391,
    question:
      "What is the difference between overloaded functions and overridden functions?",
    options: [
      "Overloading is a static or compile-time binding and Overriding is dynamic or run-time binding",
      "Overloading is a dynamic or run-time binding and Overriding is static or compile-time binding",
      "Redefining a function in a friend class is called overriding while redefining in derived class is overloading",
      "Redefining a function in a friend class is overloading while redefining in derived class is overriding",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1392,
    question:
      "What is the difference between protected and private access specifiers in inheritance?",
    options: [
      "private member is not inheritable and not accessible in derived class",
      "protected member is inheritable and also accessible in derived class",
      "Both are inheritable but private is accessible in derived class",
      "Both are inheritable but protected is not accessible in derived class",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1393,
    question: "What is the main function of transport layer?",
    options: [
      "process to process message delivery",
      "node to node delivery",
      "synchronization",
      "updating and maintenance of routing tables",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1394,
    question:
      "What is the maximum number of IP addresses that can be assigned to hosts on a subnet using mask 255.255.255.224?",
    options: ["16", "30", "15", "14"],
    correctOptionIndex: 1,
  },
  {
    id: 1395,
    question:
      "What is the name given to the organized collection of software that controls the overall operation of a computer?",
    options: [
      "Working system",
      "Operating system",
      "Controlling system",
      "Peripheral system",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1396,
    question:
      "What is the output of the program that prints numbers using a do-while loop from n=1 while n<=100?",
    options: [
      "Print natural numbers 0 to 99",
      "Print natural numbers 1 to 99",
      "Print natural numbers 0 to 100",
      "Print natural numbers 1 to 100",
    ],
    correctOptionIndex: 3,
    isQuestionContainsCoding: true,
  },
  {
    id: 1397,
    question:
      "What is the output of the Java program where arr[0].x=0, arr[1].x=1, arr[2].x=2 and show() prints only when x>1?",
    options: ["0", "1", "2", "0 1 2"],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1398,
    question:
      "What is the output of the C++ program with array {4,5,6,7} and pointer int *p = (arr + 1); cout << *p;",
    options: ["4", "5", "6", "7"],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1399,
    question:
      "What is the output of the Java program printing array elements with i++ inside the loop?",
    options: [
      "0 2 4 6 8",
      "1 3 5 7 9",
      "0 1 2 3 4 5 6 7 8 9",
      "1 2 3 4 5 6 7 8 9 10",
    ],
    correctOptionIndex: 0,
    isQuestionContainsCoding: true,
  },
  {
    id: 1400,
    question:
      "What is the output of the program calculating average of {5.5,10.1,11,12.8,56.9,2.5}?",
    options: ["16.34", "16.5555", "16.46666666666667", "16.4666666666"],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1401,
    question:
      "What is the output of the program converting double 295.04 and int 300 to byte?",
    options: ["38 43", "39 44", "295 300", "295.4 300.6"],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1402,
    question:
      "What is the output of program: int g=3; System.out.print(++g * 8);",
    options: ["24", "25", "32", "33"],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1403,
    question:
      "What is the prototype of the default constructor for class Test?",
    options: [
      "Test()",
      "onlineexam.Test()",
      "Test(void)",
      "onlineexam.Test(void)",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1404,
    question: "What is the purpose of Domain Name System (DNS)?",
    options: [
      "To map private IPv4 addresses to IPv4 addresses",
      "To map MAC addresses to hostnames",
      "To map IPv4 addresses to hostnames",
      "To map IPv4 addresses to NetBIOS names",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1405,
    question:
      "What is the result of compiling and running the Java program with Mammal, Cattle, and Horse classes where c.eat(h) is called?",
    options: [
      'prints "Mammal eats food"',
      'prints "Cattle eats hay"',
      "Class cast Exception at runtime",
      "None of these",
    ],
    correctOptionIndex: 0,
    isQuestionContainsCoding: true,
  },
  {
    id: 1406,
    question: "What is the swap space in the disk used for?",
    options: [
      "Saving temporary html pages",
      "Saving process data",
      "Storing the super-block",
      "Storing device drivers",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1407,
    question:
      "What is the value of 'number' after executing the while loop where number starts at 0 and increments until it reaches number2 = 12?",
    options: ["5", "12", "21", "13"],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1408,
    question:
      "What kind of logic device or circuit is used to store information?",
    options: ["Counter", "Register", "Inverter", "Buffer"],
    correctOptionIndex: 1,
  },
  {
    id: 1409,
    question:
      "What kind of system allows several users to use it simultaneously?",
    options: [
      "Multiuser system",
      "Multilevel user system",
      "Single user system",
      "Multiprocessing user system",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1410,
    question:
      "What PPP protocol provides dynamic addressing, authentication, and multilink?",
    options: ["NCP", "HDLC", "X.25", "LCP"],
    correctOptionIndex: 3,
  },
  {
    id: 1411,
    question:
      "What will be the output of the Java program where static int count = 100 and increment() increases it before printing b2.count?",
    options: ["100", "101", "Error in line 13", "0"],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1412,
    question:
      "What will be the output of the program where class A assigns x = x inside assign(100)?",
    options: ["10", "100", "0", "compile-time error"],
    correctOptionIndex: 0,
    isQuestionContainsCoding: true,
  },
  {
    id: 1413,
    question:
      'What will be the output of the sample code with try { return; } finally { System.out.println("Finally"); } ?',
    options: [
      "Finally",
      "Compilation fails",
      "The code runs with no output",
      "An exception is thrown at runtime",
    ],
    correctOptionIndex: 0,
    isQuestionContainsCoding: true,
  },
  {
    id: 1414,
    question:
      "What will be the output of the sample program where badMethod() throws an Error and try-catch-finally prints B, C, D accordingly?",
    options: [
      "ABCD",
      "Compilation fails",
      "C is printed before exiting with an error message",
      "BC is printed before exiting with an error message",
    ],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1415,
    question:
      "What will be the output of the program with try { int y = 5/x; } catch(Exception e) ... catch(ArithmeticException ae) ... ?",
    options: [
      "finished",
      "Exception",
      "Compilation fails",
      "Arithmetic Exception",
    ],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1416,
    question:
      "What will be the output of the C++ program where array is {0,2,4,6,7,5,3} and result += billy[n] inside the loop?",
    options: ["25", "26", "27", "none of the above"],
    correctOptionIndex: 3,
    isQuestionContainsCoding: true,
  },
  {
    id: 1417,
    question:
      "What will be the output of the program where class B extends A and overrides method m1()?",
    options: ["runtime error", "A", "B", "compilation error"],
    correctOptionIndex: 3,
    isQuestionContainsCoding: true,
  },
  {
    id: 1418,
    question:
      "What will happen if you try to compile and run the code where class Test has constructor Test(int n) but main creates Test n = new Test();",
    options: [
      "Program exits without printing anything",
      "Compilation error at line 10",
      "Compilation error at line 6",
      "Run-time exception",
    ],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1419,
    question:
      "When a program tries to access a page that is mapped in address space but not loaded in physical memory, then?",
    options: [
      "segmentation fault occurs",
      "no error occurs",
      "page fault occurs",
      "fatal error occurs",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1420,
    question:
      "When a subroutine is called, the address of the instruction following the CALL instruction is stored in/on the",
    options: ["stack pointer", "accumulator", "program counter", "stack"],
    correctOptionIndex: 3,
  },
  {
    id: 1421,
    question: "When both inputs are 1 output of XOR is",
    options: ["1", "0", "x", "10"],
    correctOptionIndex: 1,
  },
  {
    id: 1422,
    question:
      "When CPU is executing a program that is part of the operating system, it is said to be in",
    options: ["Interrupt mode", "System mode", "Half mode", "Simplex mode"],
    correctOptionIndex: 1,
  },
  {
    id: 1423,
    question: "When J and complement of K are 1, flip-flop QA after shift is",
    options: ["1", "0", "reset", "defined"],
    correctOptionIndex: 0,
  },
  {
    id: 1424,
    question: "When mode of adder subtractor is 0 it will give",
    options: ["A-B", "A+B", "A/B", "A*B"],
    correctOptionIndex: 1,
  },
  {
    id: 1425,
    question: "When mode of adder subtractor is 0 it",
    options: ["adds", "subtracts", "divides", "multiply"],
    correctOptionIndex: 1,
  },
  {
    id: 1426,
    question: "When mode of adder subtractor is 1 it",
    options: ["adds", "subtracts", "divides", "multiply"],
    correctOptionIndex: 1,
  },
  {
    id: 1427,
    question:
      "When overloading unary operators using friend function, it requires ___ argument/s.",
    options: ["Zero", "One", "Two", "None of these"],
    correctOptionIndex: 1,
  },
  {
    id: 1428,
    question:
      "When the memory allocated to a process is slightly larger than the process, then:",
    options: [
      "external fragmentation occurs",
      "internal fragmentation occurs",
      "both external and internal fragmentation occurs",
      "neither external nor internal fragmentation occurs",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1429,
    question:
      "When using branching, the usual sequencing of the PC is altered. A new instruction is loaded which is called as",
    options: [
      "Branch target",
      "Loop target",
      "Forward target",
      "Jump instruction",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1430,
    question: "When we create String with new() operator, where is it stored?",
    options: [
      "In the String Pool",
      "It is created in Heap but not added to String Pool",
      "Not stored anywhere",
      "None of the above",
    ],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1431,
    question: "When you ping the loopback address, a packet is sent where?",
    options: [
      "Across the wire",
      "On the network",
      "Down through the layers of the IP architecture and then up the layers again",
      "Through the loopback dongle",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1432,
    question:
      "Whenever CPU detects an interrupt, what it does with the current state?",
    options: [
      "Save it",
      "Discard it",
      "Depends system to system",
      "First finish it",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1433,
    question: "Where can Belady’s anomaly occur?",
    options: [
      "LRU Page Replacement Policy",
      "FIFO Page Replacement Policy",
      "MRU Page Replacement Policy",
      "Optimal Page Replacement Policy",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1434,
    question: "Where does routing occur within the DoD TCP/IP reference model?",
    options: ["application", "internet", "network", "transport"],
    correctOptionIndex: 1,
  },
  {
    id: 1435,
    question: "Where does the swap space reside?",
    options: ["Disk", "RAM", "ROM", "On-chip cache"],
    correctOptionIndex: 0,
  },
  {
    id: 1436,
    question: "Where does the swap space reside?",
    options: ["RAM", "Disk", "ROM", "On-chip cache"],
    correctOptionIndex: 1,
  },
  {
    id: 1437,
    question: "Which of the following is not an operation on stack?",
    options: ["Push", "Pop", "Peep", "Pull"],
    correctOptionIndex: 3,
  },
  {
    id: 1438,
    question:
      "Which of the following are the operations performed by Kruskal's algorithm?",
    options: [
      "i and ii only",
      "ii and iii only",
      "i and iii only",
      "All i, ii and iii",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1439,
    question:
      "Which according to you is the most important stakeholder from the following?",
    options: [
      "Entry level personnel",
      "Middle level stakeholder",
      "Managers",
      "Users of the software",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1440,
    question:
      "Which algorithm chooses the page that has not been used for the longest period of time whenever the page required to be replaced?",
    options: [
      "additional reference bit algorithm",
      "least recently used algorithm",
      "first in first out algorithm",
      "counting based page replacement algorithm",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1441,
    question:
      "Which class of IP address provides a maximum of only 254 host addresses per network ID?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    correctOptionIndex: 2,
  },
  {
    id: 1442,
    question:
      "Which class or interface defines the wait(), notify() and notifyAll() methods?",
    options: ["Object", "Thread", "Runnable", "Class"],
    correctOptionIndex: 0,
  },
  {
    id: 1443,
    question: "Which classes allow primitive types to be accessed as objects?",
    options: ["Storage", "Virtual", "Wrapper", "Friend"],
    correctOptionIndex: 2,
  },
  {
    id: 1444,
    question:
      "Which component performs the main or key tasks of operating system?",
    options: ["Kernel", "Shell", "File system", "Device driver"],
    correctOptionIndex: 0,
  },
  {
    id: 1445,
    question: "Which constructor will initialize the base class data member?",
    options: ["derived class", "base class", "class", "None of the mentioned"],
    correctOptionIndex: 1,
  },
  {
    id: 1446,
    question: "Which dynamic routing protocol uses cost as its metric?",
    options: ["OSPF", "BGP", "RIP", "EIGRP"],
    correctOptionIndex: 0,
  },
  {
    id: 1447,
    question:
      "Which function is used to perform some action when the object is to be destroyed?",
    options: [
      "finalize()",
      "delete()",
      "None of the above mentioned",
      "main()",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1448,
    question:
      "Which interrupt establishes a priority over the various sources to determine which request should be entertained first?",
    options: ["Polling", "Priority interrupt", "Daisy chaining", "chaining"],
    correctOptionIndex: 1,
  },
  {
    id: 1449,
    question:
      "Which IPv6 address is the equivalent of the IPv4 interface loopback address 127.0.0.1?",
    options: ["0::/10", "2000::/3", "::", "::1"],
    correctOptionIndex: 3,
  },
  {
    id: 1450,
    question:
      "Which is a protocol that one program can use to request a service from a program of another computer on a network?",
    options: [
      "Remote Procedure Call",
      "I/O Virtualization",
      "Memory Virtualization",
      "ParaVirtualization",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1451,
    question: "Which is a valid declaration within an Interface?",
    options: [
      "onlineexam.static short stop = 23;",
      "protected short stop = 23;",
      "transient short stop = 23;",
      "final void start(short stop);",
    ],
    correctOptionIndex: 0,
    isQuestionContainsCoding: true,
  },
  {
    id: 1452,
    question: "Which is not a step of requirement engineering?",
    options: [
      "Requirements elicitation",
      "Requirements analysis",
      "Requirements design",
      "Requirements documentation",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1453,
    question: "Which is not a function of an OS?",
    options: [
      "process Management",
      "I/O Management",
      "Memory Management",
      "Networking",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1454,
    question: "Which is not a valid state of a thread?",
    options: ["running", "blocked", "parsing", "None of the above"],
    correctOptionIndex: 2,
  },
  {
    id: 1455,
    question: "Which is not a word size?",
    options: ["64", "28", "16", "8"],
    correctOptionIndex: 1,
  },
  {
    id: 1456,
    question:
      "Which is the first program run on a computer when the computer boots up?",
    options: [
      "System software",
      "Operating system",
      "System operations",
      "system hardware",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1457,
    question:
      "Which is used for this and known as high speed buffer exist with almost each process?",
    options: ["Primary", "Secondary", "Cache", "RAM"],
    correctOptionIndex: 2,
  },
  {
    id: 1458,
    question:
      "Which keyword is used by method to refer to the object that invoked it?",
    options: ["import", "catch", "abstract", "this"],
    correctOptionIndex: 3,
  },
  {
    id: 1459,
    question:
      "Which method is used to establish priority by serially connecting all devices that request an interrupt?",
    options: ["Interrupt", "Polling", "Priority", "Daisy chaining"],
    correctOptionIndex: 3,
  },
  {
    id: 1460,
    question:
      "Which of the following is a valid class using the given code public interface A { public void showA(); }?",
    options: [
      "class B extends A { void showA(){} }",
      "class B implements A { abstract void showA(){} }",
      "class B implements A { void showA(){} }",
      "class B implements A { void showA(); }",
    ],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1461,
    question:
      "Which of the following is not a Requirement Management workbench tool?",
    options: ["RTM", "DOORS", "Rational Suite", "RDD 100"],
    correctOptionIndex: 2,
  },
  {
    id: 1462,
    question: "Which of the following is not a use of a CASE tool?",
    options: [
      "Support structured analysis and design (SA/SD)",
      "Maintains the data dictionary",
      "Checks whether DFDs are balanced or not",
      "It complies with the available system",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1463,
    question: "Which of the following is not a user interface design process?",
    options: [
      "User, task, and environment analysis and modeling",
      "Interface design",
      "Knowledgeable, frequent users",
      "Evaluation",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1464,
    question:
      "Which of the following life cycle model can be chosen if the development team has less experience on similar projects?",
    options: ["Spiral", "Waterfall", "RAD", "Iterative Enhancement Model"],
    correctOptionIndex: 0,
  },
  {
    id: 1465,
    question:
      "Which of the following property does not correspond to a good Software Requirements Specification (SRS)?",
    options: ["Verifiable", "Complete", "Ambiguous", "Traceable"],
    correctOptionIndex: 2,
  },
  {
    id: 1466,
    question:
      "Which of the property of software modularity is incorrect with respect to benefits of software modularity?",
    options: [
      "Modules are robust",
      "Module can use other modules",
      "Modules can be separately compiled and stored in a library",
      "Modules are mostly dependent",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1467,
    question:
      "Which of the following addressing modes facilitates access to an operand whose location is defined relative to the beginning of the data structure in which it appears?",
    options: ["ascending", "sorting", "index", "indirect"],
    correctOptionIndex: 2,
  },
  {
    id: 1468,
    question:
      "Which of the following are loaded into main memory when the computer is booted?",
    options: [
      "external command instructions",
      "word processing instructions",
      "utility programs",
      "internal command instructions",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1469,
    question:
      "Which of the following command is used to create terminal connection to another host in Unix?",
    options: ["ssh", "scp", "telnet", "None of the above"],
    correctOptionIndex: 2,
  },
  {
    id: 1470,
    question:
      "Which of the following command is used to print current working directory in Unix?",
    options: ["mkdir", "pwd", "rm", "None of the above"],
    correctOptionIndex: 1,
  },
  {
    id: 1471,
    question: "Which of the following condition leads to deadlock?",
    options: ["Hold and Wait", "Preemption", "Rollback", "Hold"],
    correctOptionIndex: 0,
  },
  {
    id: 1472,
    question: "Which of the following data structures are indexed structures?",
    options: ["linear arrays", "linked lists", "Array", "Stack"],
    correctOptionIndex: 0,
  },
  {
    id: 1473,
    question:
      "Which of the following device is used to connect two systems, especially if the systems use different protocols?",
    options: ["repeater", "hub", "bridge", "gateway"],
    correctOptionIndex: 3,
  },
  {
    id: 1474,
    question:
      "Which of the following devices assigns IP address to devices connected to a network that uses TCP/IP?",
    options: ["DHCP Server", "NIC", "Gateway", "Hub"],
    correctOptionIndex: 0,
  },
  {
    id: 1475,
    question:
      "Which of the following devices direct network traffic based not by MAC addresses but by software-configured network addresses?",
    options: ["Router", "Hub", "Bridge", "NIC"],
    correctOptionIndex: 0,
  },
  {
    id: 1476,
    question:
      "Which of the following devices is a PC component that connects the computer to the network?",
    options: ["Bridge", "NIC", "DNS Server", "Gateway"],
    correctOptionIndex: 1,
  },
  {
    id: 1477,
    question:
      "Which of the following devices modulates digital signals into analog signals that can be sent over traditional telephone lines?",
    options: ["Router", "Gateway", "Switch", "Modem"],
    correctOptionIndex: 3,
  },
  {
    id: 1478,
    question:
      "Which of the following devices translates hostnames into IP addresses?",
    options: ["DNS Server", "Hub", "DHCP Server", "Firewall"],
    correctOptionIndex: 0,
  },
  {
    id: 1479,
    question:
      "Which of the following DMA transfer modes and interrupt handling mechanisms will enable the highest I/O bandwidth?",
    options: [
      "Transparent DMA and Polling interrupts",
      "Cycle-stealing and Vectored interrupts",
      "Block transfer and Vectored interrupts",
      "Block transfer and Polling interrupts",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1480,
    question:
      "Which of the following holds the data currently being worked on?",
    options: [
      "Stack pointer",
      "Program Counter",
      "Accumulator",
      "Instruction Pointer",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1481,
    question:
      "Which of the following is not the required condition for binary search algorithm?",
    options: [
      "The list must be sorted",
      "There should be direct access to the middle element in any sublist",
      "There must be mechanism to delete and/or insert elements in list",
      "None of these",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1482,
    question:
      "Which of the following is a method having same name as that of its class?",
    options: ["finalize", "delete", "class", "constructor"],
    correctOptionIndex: 3,
  },
  {
    id: 1483,
    question:
      "Which of the following is a scheduling algorithm that allows a process to move up and down between queues?",
    options: [
      "Round Robin scheduling",
      "First Come First Served scheduling",
      "Multilevel feedback queue scheduling",
      "Shortest Job First scheduling",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1484,
    question: "Which of the following is a solution to fragmentation problem?",
    options: ["Thread", "Kernel", "Paging", "Multiprogramming"],
    correctOptionIndex: 2,
  },
  {
    id: 1485,
    question: "Which of the following is a type of Semaphores?",
    options: [
      "Binary Semaphore",
      "Counting Semaphore",
      "Both (1) & (2)",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1486,
    question:
      "Which of the following is an example of Batch Processing Operating Systems?",
    options: ["Lynx OS", "Mac OS", "UNIX", "Windows"],
    correctOptionIndex: 2,
  },
  {
    id: 1487,
    question:
      "Which of the following is an example of Cooperative Multitasking OS?",
    options: ["Lynx OS", "Mac OS", "MS DOS", "None of the above"],
    correctOptionIndex: 1,
  },
  {
    id: 1488,
    question:
      "Which of the following is an example of Real Time Operating Systems?",
    options: ["Lynx OS", "Linux", "Windows", "UNIX"],
    correctOptionIndex: 0,
  },
  {
    id: 1489,
    question:
      "Which of the following is correct way of importing an entire package 'pkg'?",
    options: ["import pkg.", "Import pkg.", "import pkg.*", "Import pkg.*"],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1490,
    question: "Which of the following is incorrect statement about packages?",
    options: [
      "Interfaces specifies what class must do but not how it does.",
      "Interfaces are specified if they are to be accessed by any code in the program.",
      "All variables in interface are implicitly final and static.",
      "All variables are static and methods are public if interface is defined public",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1491,
    question:
      "Which of the following is major part of time taken when accessing data on the disk?",
    options: ["Settle time", "Rotational latency", "Seek time", "Waiting time"],
    correctOptionIndex: 2,
  },
  {
    id: 1492,
    question: "Which of the following is multi threading model?",
    options: [
      "many to many relationship",
      "many to one relationship",
      "one to one relationship",
      "All of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1493,
    question: "Which of the following is not a method of the Thread class?",
    options: [
      "void exit()",
      "void run()",
      "void start()",
      "final int getPriority()",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1494,
    question: "Which of the following is not a return type?",
    options: ["boolean", "void", "String", "Button"],
    correctOptionIndex: 3,
  },
  {
    id: 1495,
    question:
      "Which of the following is not a valid declaration of a Top level class?",
    options: [
      "final class Test {}",
      "class $Test{}",
      "static class Test {}",
      "abstract class _Test {}",
    ],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1496,
    question:
      "Which of the following is not a limitation of binary search algorithm?",
    options: [
      "must use a sorted array",
      "requirement of sorted array is expensive when a lot of insertion and deletions are needed",
      "there must be a mechanism to access middle element directly",
      "binary search algorithm is not efficient when the data elements are more than 1000",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1497,
    question: "Which of the following is not an advantage of software reuse?",
    options: [
      "lower costs",
      "faster software development",
      "high effectiveness",
      "lower risks",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1498,
    question:
      "Which of the following is NOT an advantage of using shared dynamically linked libraries as opposed to using statically linked libraries?",
    options: [
      "Smaller sizes of executable files",
      "Lesser overall page fault rate in the system",
      "Faster program startup",
      "Existing programs need not be re-linked to take advantage of newer versions of libraries",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1499,
    question:
      "Which of the following is NOT true of deadlock prevention and deadlock avoidance schemes?",
    options: [
      "In deadlock prevention, the request for resources is always granted if the resulting state is safe",
      "In deadlock avoidance, the request for resources is always granted if the result state is safe",
      "Deadlock avoidance is less restrictive than deadlock prevention",
      "Deadlock avoidance requires knowledge of resource requirements a priori",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1500,
    question: "Which of the following is private IP address?",
    options: ["192.168.24.43", "168.172.19.39", "172.15.14.36", "12.0.0.1"],
    correctOptionIndex: 0,
  },
  {
    id: 1501,
    question: "Which of the following is standard print command in Unix?",
    options: ["ncftp", "lpr", "ls", "grep"],
    correctOptionIndex: 1,
  },
  {
    id: 1502,
    question: "Which of the following is synchronized?",
    options: ["Set", "LinkedList", "Vector", "WeakHashMap"],
    correctOptionIndex: 0,
  },
  {
    id: 1503,
    question:
      "Which of the following is the creation of a virtual rather than actual version of an operating system?",
    options: [
      "Compression",
      "Virtualization",
      "Synchronization",
      "Multithreading",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1504,
    question: "Which of the following is the least simple data structure?",
    options: [
      "Linear array",
      "Two dimensional array",
      "Three dimensional array",
      "Multi-dimensional array",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1505,
    question: "Which of the following is true?",
    options: [
      "All objects of a class share all data members of class",
      "Objects of a class do not share non-static members. Every object has its own copy.",
      "Objects of a class do not share codes of non-static methods, they have their own copy",
      "None of these",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1506,
    question:
      "Which of the following is used to denote the selection operation in relational algebra?",
    options: ["Pi (Greek)", "Sigma (Greek)", "Lambda (Greek)", "Omega (Greek)"],
    correctOptionIndex: 1,
  },
  {
    id: 1507,
    question: "Which of the following is used to remove deadlock?",
    options: [
      "Preemption",
      "Mutual Exclusion",
      "Circular Wait",
      "None of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1508,
    question:
      "Which of the following are commonly used architectural patterns?",
    options: [
      "Layered Architecture",
      "Model-View-Controller",
      "Client-server",
      "Model-View-Component",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1509,
    question:
      "Which of the following are examples of stateful application layer protocols? (i) HTTP (ii) FTP (iii) TCP (iv) POP3",
    options: [
      "(ii) and (iv) only",
      "(i) and (ii) only",
      "(ii) and (iii) only",
      "(iv) only",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1510,
    question:
      "Which of the following memory allocation scheme suffers from external fragmentation?",
    options: ["Segmentation", "swapping", "demand Swapping", "context switch"],
    correctOptionIndex: 0,
  },
  {
    id: 1511,
    question:
      "Which of the following memory management scheme loads all pages of a program from disk into main memory?",
    options: [
      "Paging",
      "Demand paging",
      "Demand segmentation",
      "Segmentation with paging",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1512,
    question:
      "Which of the following network devices/systems translates data from one format to another?",
    options: ["Hub", "DHCP Server", "Gateway", "NIC"],
    correctOptionIndex: 2,
  },
  {
    id: 1513,
    question: "Which of the following numerical value is invalid constant?",
    options: [
      "assignment operator",
      "relational operator",
      "logical operator",
      "bitwise shift operator",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1514,
    question:
      "Which of the following operators allow to define the member functions of a class outside the class?",
    options: ["?", "?:", "::", ";"],
    correctOptionIndex: 2,
  },
  {
    id: 1515,
    question:
      "Which of the following page replacement algorithm use the technique of replace that page which is not used in the near future?",
    options: ["LFU", "LRU", "FIFO", "OPR"],
    correctOptionIndex: 3,
  },
  {
    id: 1516,
    question:
      "Which of the following page replacement algorithms suffers from Belady's anomaly?",
    options: ["FIFO", "LRU", "Optimal Page Replacement", "Both LRU and FIFO"],
    correctOptionIndex: 0,
  },
  {
    id: 1517,
    question:
      "Which of the following plays an important role in modern Operating Systems (OS)?",
    options: ["Kernel", "Shell", "Fork", "none"],
    correctOptionIndex: 0,
  },
  {
    id: 1518,
    question:
      "Which of the following process scheduling algorithm may lead to starvation?",
    options: ["FIFO", "Round Robin", "Shortest Job Next", "none"],
    correctOptionIndex: 2,
  },
  {
    id: 1519,
    question:
      "Which of the following scheduling algorithms provide minimum average waiting time?",
    options: [
      "Round Robin (RR)",
      "First Come First Serve (FCFS)",
      "Shortest Job First Scheduling",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1520,
    question: "Which of the following service is not supported by the OS?",
    options: [
      "Compilation",
      "Protection",
      "I/O Operation",
      "None of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1521,
    question: "Which of the following sorts does not use an array structure?",
    options: ["Shell sort", "Bucket Sort", "Radix Sort", "Heap Sort"],
    correctOptionIndex: 1,
  },
  {
    id: 1522,
    question: "Which of the following statement is true about an Interface?",
    options: [
      "Methods inside Interface can be static, final, native or strictfp.",
      "Interface can not extend one or more other interface",
      "Interface cannot implement a class.",
      "Interface can not be nested inside another interface.",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1523,
    question:
      "Which of the following statements are true? I. Shortest remaining time first scheduling may cause starvation II. Preemptive scheduling may cause starvation III. Round robin is better than FCFS in terms of response time",
    options: ["I only", "I and III only", "II and III only", "I, II and III"],
    correctOptionIndex: 3,
  },
  {
    id: 1524,
    question: "Which of the following statements is false?",
    options: [
      "Virtual memory implements the translation of a program’s address space into physical memory address space.",
      "Virtual memory increases the degree of multiprogramming.",
      "Virtual memory allows each program to exceed the size of the primary memory.",
      "Virtual memory reduces the context switching overhead.",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1525,
    question:
      "Which of the following systems software does the job of merging the records from two files into one?",
    options: [
      "Security software",
      "Networking software",
      "Documentation system",
      "Utility program",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1526,
    question:
      "Which of the following TCP/IP protocol is used for transferring electronic mail messages from one machine to another?",
    options: ["SMTP", "SNMP", "FTP", "RPC"],
    correctOptionIndex: 0,
  },
  {
    id: 1527,
    question:
      "Which of the following will determine your choice of systems software for your computer?",
    options: [
      "Is the application software you want to use compatible with it?",
      "Is it expensive?",
      "Is it compatible with your hardware?",
      "Both 1 and 3",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1528,
    question:
      "Which of the methods should be implemented if any class implements the Runnable interface?",
    options: ["start()", "run()", "wait()", "notify() and notifyAll()"],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1529,
    question: "Which of the statement is false about an abstract class?",
    options: [
      "An abstract class is a class that contains one or more abstract methods.",
      "An abstract class cannot have normal method.",
      "An abstract class cannot be instantiated.",
      "An abstract class can be extended.",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1530,
    question: "Which of these cannot be declared static?",
    options: ["class", "variable", "object", "method"],
    correctOptionIndex: 3,
  },
  {
    id: 1531,
    question:
      "Which of these interface is not a part of Java's collection framework?",
    options: ["List", "Set", "SortedMap", "SortedList"],
    correctOptionIndex: 1,
  },
  {
    id: 1532,
    question:
      "Which of these is a mechanism for naming and visibility control of a class and its content?",
    options: ["Object", "Packages", "Interfaces", "None of the Mentioned"],
    correctOptionIndex: 1,
  },
  {
    id: 1533,
    question: "Which of these is an example of a virtual resource?",
    options: ["Virtual machine", "Print server", "Virtual memory", "Scanner"],
    correctOptionIndex: 3,
  },
  {
    id: 1534,
    question:
      "Which of these is not a term describing the collection of Operating Programs?",
    options: ["Monitor", "Kernel", "Supervisor", "Application"],
    correctOptionIndex: 3,
  },
  {
    id: 1535,
    question:
      "Which of these is used to access member of class before object of that class is created?",
    options: ["onlineexam.p>", "static", "private", "protected"],
    correctOptionIndex: 1,
  },
  {
    id: 1536,
    question: "Which of these methods can randomize all elements in a list?",
    options: ["rand()", "randomize()", "shuffle()", "ambigous()"],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1537,
    question:
      "Which one of the following is not a step of requirement engineering?",
    options: ["elicitation", "design", "analysis", "documentation"],
    correctOptionIndex: 1,
  },
  {
    id: 1538,
    question: "Which one of the following is a Class C IP address?",
    options: [
      "10.10.14.118",
      "191.200.199.199",
      "135.23.112.57",
      "204.67.118.54",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1539,
    question: "Which one of the following is the address generated by CPU?",
    options: [
      "physical address",
      "absolute address",
      "logical address",
      "Main memory address",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1540,
    question:
      "Which one of the following protocols is NOT used to resolve one form of address to another one?",
    options: ["ARP", "DHCP", "DNS", "RARP"],
    correctOptionIndex: 1,
  },
  {
    id: 1541,
    question:
      "Which one of the following scheduler controls the degree of multiprogramming?",
    options: [
      "Short Term Scheduler",
      "Long Term Scheduler",
      "Medium Term Scheduler",
      "Average Term Scheduler",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1542,
    question: "Which operator is used to check object-type at runtime?",
    options: [
      "ternary operator",
      "instanceof operator",
      "type operator",
      "length operator",
    ],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1543,
    question:
      "Which OS employs the techniques of fault tolerance and graceful degradation to ensure continuity of operation?",
    options: [
      "Batch Processing",
      "Multi-processor",
      "Distributed",
      "Time sharing",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1544,
    question:
      "Which protocol working at the Transport layer provides a connectionless service between hosts?",
    options: ["ARP", "TCP", "IP", "UDP"],
    correctOptionIndex: 3,
  },
  {
    id: 1545,
    question: "Which register can interact with the secondary storage?",
    options: ["PC", "MAR", "MDR", "IR"],
    correctOptionIndex: 1,
  },
  {
    id: 1546,
    question:
      "Which statement BEST describes the operation of a negative-edge-triggered D flip-flop?",
    options: [
      "The logic level at the D input is transferred to Q on NGT of CLK.",
      "The Q output is ALWAYS identical to the CLK input if the D input is HIGH.",
      "The Q output is ALWAYS identical to the D input when CLK = PGT.",
      "The Q output is ALWAYS identical to the D input.",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1547,
    question:
      "Which technique helps processor to run a program concurrently with input output operations?",
    options: ["IOP", "DMA", "Interrupt driven I/O", "DCA"],
    correctOptionIndex: 2,
  },
  {
    id: 1548,
    question:
      "Which two methods you need to implement to use an Object as key in HashMap?",
    options: [
      "push() and pop()",
      "get() and set()",
      "equals() and hashcode()",
      "put() and get()",
    ],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1549,
    question:
      "Which two models doesn't allow defining requirements early in the cycle?",
    options: [
      "Waterfall & RAD",
      "Prototyping & Spiral",
      "Prototyping & RAD",
      "Waterfall & Spiral",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1550,
    question: "Which type of scheduler is used in batch systems?",
    options: [
      "Medium Term Scheduler",
      "Short Term Scheduler",
      "Long Term Scheduler",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1551,
    question:
      "Which type of scheduler typically uses a FIFO or Priority queue?",
    options: [
      "Short Term Scheduler",
      "Medium Term Scheduler",
      "Long Term Scheduler",
      "Job Scheduler",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1552,
    question: "Who is considered as the creator of JAVA?",
    options: [
      "Dennis Richie",
      "Ken Thompson",
      "James Gosling",
      "Bjarne Stroustrup",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1553,
    question: "Why we need to have secondary storage?",
    options: [
      "Store large volume of data that exceed the capacity of main memory",
      "Perform arithmetic and logical operations",
      "To give power to the system too",
      "To help processor in processing",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1554,
    question: "Wire introduces delay of",
    options: ["1 ns", "2 ns", "3 ns", "4 ns"],
    correctOptionIndex: 0,
  },
  {
    id: 1555,
    question:
      "With relocation and limit registers, each logical address must be ______ the limit register.",
    options: ["less than", "greater than", "equal to", "twice of"],
    correctOptionIndex: 0,
  },
  {
    id: 1556,
    question:
      "Write Through technique is used in which memory for updating the data?",
    options: [
      "Virtual memory",
      "Main memory",
      "Auxiliary memory",
      "Cache memory",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1557,
    question: "x + x'y =",
    options: ["x", "y", "x - y", "x + y"],
    correctOptionIndex: 3,
  },
  {
    id: 1558,
    question: "x + xy = x is known as",
    options: [
      "inverse law",
      "commutative law",
      "distributive law",
      "absorption law",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1559,
    question: "X + y = z represents operation that is",
    options: ["AND", "OR", "NOT", "XOR"],
    correctOptionIndex: 1,
  },
  {
    id: 1560,
    question: "X = 1010100 and Y = 1000011 using 1's complement Y - X is",
    options: ["-10111", "10111", "-11011", "11011"],
    correctOptionIndex: 0,
  },
  {
    id: 1561,
    question: "X = 1010100 and Y = 1000011 using 2's complement X - Y is",
    options: ["10111", "101101", "10011", "10001"],
    correctOptionIndex: 3,
  },
  {
    id: 1562,
    question:
      "You can import only static members of a class present in some other package using ______?",
    options: [
      "import keyword",
      "import static keyword",
      "package keyword",
      "static import keyword",
    ],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1563,
    question:
      "You have 10 users plugged into a hub running 10Mbps half-duplex. There is a server connected to the switch running 10Mbps half-duplex as well. How much bandwidth does each host have to the server?",
    options: ["1 Mbps", "100 kbps", "10 Mbps", "2 Mbps"],
    correctOptionIndex: 2,
  },
  {
    id: 1564,
    question:
      "You have an IP of 156.233.42.56 with a subnet mask of 7 bits. How many hosts and subnets are possible assuming that subnet 0 is not used?",
    options: [
      "126 subnets and 510 hosts",
      "128 subnets and 512 hosts",
      "510 subnets and 126 hosts",
      "512 subnets and 128 hosts",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1565,
    question:
      "You have been assigned a network ID of 172.16.0.0/26. If you utilize the first network resulting from this ID, what would be the last legitimate host address in this subnet?",
    options: ["172.16.0.65", "172.16.0.62", "172.16.0.63", "172.16.0.64"],
    correctOptionIndex: 1,
  },
  {
    id: 1566,
    question: "'Aging registers' are",
    options: [
      "Counters which indicate how long ago their associated pages have been referenced",
      "Registers which keep track of when the program was last accessed",
      "Counters to keep track of last accessed instruction",
      "Counters to keep track of the latest data structures referred",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1567,
    question:
      "_____ commands are automatically loaded into main memory when the booting process gets completed.",
    options: [
      "External",
      "Internal",
      "Both Internal & external",
      "Not internal & not external",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1568,
    question: "_____ is a system call that causes the caller to block.",
    options: ["Await", "sleep", "Wakeup", "None of the above"],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 1569,
    question:
      "_____ occur commonly in multitasking when two or more threads waiting for each other.",
    options: ["Kernel", "Shell", "Fork", "Deadlock"],
    correctOptionIndex: 3,
  },
  {
    id: 1570,
    question:
      "_____ process checks to ensure the components of the computer are operating and connected properly.",
    options: ["Editing", "Saving", "Booting", "None of the above"],
    correctOptionIndex: 2,
  },
  {
    id: 1571,
    question: "_____ holds the address of the next instruction to be executed?",
    options: [
      "Accumulator",
      "Stack Pointer",
      "Status Register",
      "Program Counter",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 1572,
    question:
      "_____ is a special system software that is used to handle process scheduling in different ways.",
    options: ["Spawn", "Scheduler", "fork", "none"],
    correctOptionIndex: 1,
  },
  {
    id: 1573,
    question:
      "_____ is a system call that runs an executable file into an existing process.",
    options: ["fork", "wait", "exec", "None of the above"],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1574,
    question:
      "_____ is a technique used to speed up communication with slow devices.",
    options: ["Fragmentation", "Caching", "Segmentation", "Paging"],
    correctOptionIndex: 1,
  },
  {
    id: 1575,
    question: "_____ is a way of processing data serially.",
    options: ["spooling", "Paging", "caching", "segmentation"],
    correctOptionIndex: 0,
  },
  {
    id: 1576,
    question:
      "_____ is mainly responsible for allocating the resources as per process requirement?",
    options: ["Software", "RAM", "Operating Systems", "Compiler"],
    correctOptionIndex: 2,
  },
  {
    id: 1577,
    question:
      "_____ is the process of switching of CPU from one thread to another.",
    options: [
      "Process handling",
      "interrupt handling",
      "Context switching",
      "none",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1578,
    question:
      "_____ is the smallest unit for processing that consists of a program counter, a stack & a set of registers.",
    options: ["Compiler", "Thread", "Heap", "Stack"],
    correctOptionIndex: 1,
  },
  {
    id: 1579,
    question:
      "_____ occurs in a dynamic memory allocation system when most of the free blocks are too small to satisfy any request?",
    options: ["Paging", "Segmentation", "Fragmentation", "none"],
    correctOptionIndex: 2,
  },
  {
    id: 1580,
    question:
      "_____ provides an interface between the process and the Operating System.",
    options: [
      "Synchronization",
      "System call",
      "Segmentation",
      "None of the above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1581,
    question:
      "_____ are required to complete a critical task within a guaranteed amount of time.",
    options: [
      "Real Time Operating Systems",
      "Multi Tasking Operating Systems",
      "Distributed Operating Systems",
      "None of the above",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 1582,
    question:
      "_____ is a classic synchronization problem that involves the allocation of limited resources amongst a group of processes in a deadlock free and starvation free manner.",
    options: [
      "Bounded Buffer Problem",
      "Dining Philosophers Problem",
      "Readers Writers Problem",
      "None of the above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 1583,
    question:
      "_____ is a system call that returns the process ID of current process.",
    options: ["getpid", "wait", "getppid", "None of the above"],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1584,
    question:
      "_____ is a system call that returns the process ID of the parent of the current process.",
    options: ["getpid", "wait", "getppid", "None of the above"],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1585,
    question:
      "_____ files represent physical devices like printers, terminals etc.",
    options: [
      "Ordinary files",
      "Directory files",
      "Special files",
      "None of the above",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 1586,
    question:
      "_____ is a system call of OS that is used to create a new process?",
    options: ["Shell", "Kernel", "Fork", "Thread"],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
];

export const totalQuestions: number = questions.length;
