export interface Question {
  id: number;
  question: string;
  options: string[];
  correctOptionIndex: number;
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
      "Which of the following algorithm cannot be desiged without recursion -",
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
    question: "Which of the following has search effeciency of O(1) -",
    options: ["Tree", "Heap", "Hash Table", "Linked List"],
    correctOptionIndex: 3,
  },
  {
    id: 18,
    question: "Which of the following has search effeciency of O(1) -",
    options: ["Tree", "Heap", "Hash Table", "Linked List"],
    correctOptionIndex: 2,
  },
  {
    id: 19,
    question:
      "_______ is very useful in situation when data have to stored and then retrieved in reverse order.",
    options: ["Stack", "Queue", "Single Linked List", "Doubly Linked List"],
    correctOptionIndex: 0,
  },
  {
    id: 20,
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
    id: 21,
    question:
      "_______ is a pile in which items are added at one end and removed from the other.",
    options: ["Stack", "Queue", "Single Linked List", "Double Linked List"],
    correctOptionIndex: 1,
  },
  {
    id: 22,
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
    id: 23,
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
    id: 24,
    question:
      "What data structure can be used to check if a syntax has balanced paranthesis ?",
    options: ["Queue", "Stack", "Tree", "List"],
    correctOptionIndex: 1,
  },
  {
    id: 25,
    question: "Which of the following data structures are indexed structures?",
    options: ["Linear arrays", "Linked Lists", "Graphs", "Trees"],
    correctOptionIndex: 0,
  },
  {
    id: 26,
    question:
      "A graphical display of the fundamental products in a truth-table is known as",
    options: ["Mapping", "Graphing", "T-Map", "K-Map"],
    correctOptionIndex: 3,
  },
  {
    id: 27,
    question:
      "The minimum number of NAND gates required to implement the Boolean function. A + AB' + AB'C is equal to",
    options: ["Zero", "1", "4", "7"],
    correctOptionIndex: 0,
  },
  {
    id: 28,
    question: "Which of the following logic expression is incorrect?",
    options: ["1 ⊕ 0 = 1", "1 ⊕ 1 ⊕ 1 = 1", "1 ⊕ 1 = 0", "1 ⊕ 1 ⊕ 0 =1"],
    correctOptionIndex: 3,
  },
  {
    id: 29,
    question: "How many illegitimate states has synchronous mod-6 counter?",
    options: ["3", "2", "1", "6"],
    correctOptionIndex: 0,
  },
  {
    id: 30,
    question: "To build a mod-19 counter the number of flip-flops required is",
    options: ["3", "5", "7", "9"],
    correctOptionIndex: 1,
  },
  {
    id: 31,
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
    id: 32,
    question: "X=1010100 and Y=1000011 using 1's complement Y-X is",
    options: ["-10111", "-10011", "-10001", "-11001"],
    correctOptionIndex: 2,
  },
  {
    id: 33,
    question:
      "A ________ in a table represents a relationship among a set of values.",
    options: ["Column", "Key", "Row", "Entry"],
    correctOptionIndex: 2,
  },
  {
    id: 34,
    question:
      "A domain is atomic if elements of the domain are considered to be ____________ units.",
    options: ["Different", "Indivisbile", "Constant", "Divisible"],
    correctOptionIndex: 1,
  },
  {
    id: 35,
    question:
      "Database _______,which is a snapshot of the data in the database at a given instant in time.",
    options: ["Schema", "Domain", "Instance", "Relation"],
    correctOptionIndex: 2,
  },
  {
    id: 36,
    question:
      "Database __________ , which is the logical design of the database.",
    options: ["Instance", "Schema", "Relation", "Domain"],
    correctOptionIndex: 1,
  },
  {
    id: 37,
    question:
      "For each attribute of a relation, there is a set of permitted values, called the ________ of that attribute.",
    options: ["Domain", "Relation", "Set", "Schema"],
    correctOptionIndex: 0,
  },
  {
    id: 38,
    question: "The term _______ is used to refer to a row.",
    options: ["Attribute", "Tuple", "Field", "Instance"],
    correctOptionIndex: 1,
  },
  {
    id: 39,
    question: "The tuples of the relations can be of ________ order.",
    options: ["Any", "Same", "Sorted", "Constant"],
    correctOptionIndex: 0,
  },
  {
    id: 40,
    question: "A relational database consists of a collection of",
    options: ["Tables", "Fields", "Records", "Keys"],
    correctOptionIndex: 0,
  },
  {
    id: 41,
    question:
      "A _____ is a property of the entire relation, rather than of the individual tuples in which each tuple is unique.",
    options: ["Rows", "Key", "Attribute", "Fields"],
    correctOptionIndex: 1,
  },
  {
    id: 42,
    question:
      "A _________ integrity constraint requires that the values appearing in specified attributes of any tuple in the referencing relation also appear in specified attributes of at least one tuple in the referenced relation.",
    options: ["Referential", "Referencing", "Specific", "Primary"],
    correctOptionIndex: 0,
  },
  {
    id: 43,
    question:
      "A attribute in a relation is a foreign key if the _______ key from one relation is used as an attribute in that relation.",
    options: ["Candidate", "Primary", "Super", "Sub"],
    correctOptionIndex: 2,
  },
  {
    id: 44,
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
    id: 45,
    question:
      "Consider attributes ID, CITY and NAME. Which one of this can be considered as a super key ?",
    options: ["NAME", "ID", "CITY", "none of the above"],
    correctOptionIndex: 1,
  },
  {
    id: 46,
    question:
      "Functional Dependencies are the types of constraints that are based on ______",
    options: ["Key", "Key revisited", "Superset key", "None of these"],
    correctOptionIndex: 0,
  },
  {
    id: 47,
    question:
      "In a relation between the entities the type and condition of the relation should be specified . That is called as ______ attribute.",
    options: ["Descriptive", "Derived", "Recursive", "Relative"],
    correctOptionIndex: 0,
  },
  {
    id: 48,
    question:
      "Not applicable condition can be represented in relation entry as",
    options: ["NA", "0", "NULL", "Blank Space"],
    correctOptionIndex: 2,
  },
  {
    id: 49,
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
    id: 50,
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
    id: 51,
    question:
      "The attribute AGE is calculated from DATE_OF_BIRTH. The attribute AGE is _________________.",
    options: ["Single valued", "Multi valued", "Stored", "Derived"],
    correctOptionIndex: 3,
  },
  {
    id: 52,
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
    id: 53,
    question:
      "The descriptive property possessed by each entity set is _________.",
    options: ["Entity", "Attribute", "Relation", "Model"],
    correctOptionIndex: 1,
  },
  {
    id: 54,
    question:
      "The function that an entity plays in a relationship is called that entity's _____________.",
    options: ["Participation", "Position", "Role", "Instance"],
    correctOptionIndex: 2,
  },
  {
    id: 55,
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
    id: 56,
    question:
      "Which forms simplifies and ensures that there is minimal data aggregates and repetitive groups:",
    options: ["1NF", "2NF", "3NF", "4NF"],
    correctOptionIndex: 1,
  },
  {
    id: 57,
    question: "Which of the following is a single valued attribute",
    options: ["Register_number", "Address", "SUBJECT_TAKEN", "Reference"],
    correctOptionIndex: 0,
  },
  {
    id: 58,
    question:
      "An ________ is a set of entities of the same type that share the same properties, or attributes.",
    options: ["Entity set", "Attribute set", "Relation set", "Entity model"],
    correctOptionIndex: 0,
  },
  {
    id: 59,
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
    id: 60,
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
    id: 61,
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
    id: 62,
    question:
      "Which one of the following is a set of one or more attributes taken collectively to uniquely identify a record?",
    options: ["Candidate key", "Sub key", "Super key", "Foreign key"],
    correctOptionIndex: 2,
  },
  {
    id: 63,
    question: "The term attribute refers to a ___________ of a table.",
    options: ["Record", "Column", "Tuple", "Key"],
    correctOptionIndex: 1,
  },
  {
    id: 64,
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
    id: 65,
    question:
      "In the __________ normal form, a composite attribute is converted to individual attributes.",
    options: ["First", "Second", "Third", "Fourth"],
    correctOptionIndex: 2,
  },
  {
    id: 66,
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
    id: 67,
    question: "_____ users work on canned transactions",
    options: ["sophisticated", "naïve", "DBA", "casual"],
    correctOptionIndex: 1,
  },
  {
    id: 68,
    question: "_____ is the deadlock free lock",
    options: ["Conservative 2PL", "Basic 2PL", "Rigorous 2PL", "Strict 2PL"],
    correctOptionIndex: 0,
  },
  {
    id: 69,
    question:
      "_____ is the first schema to be designed when you are developing a DBMS",
    options: ["conceptual", "relational", "physical", "hierarchical"],
    correctOptionIndex: 0,
  },
  {
    id: 70,
    question: "Which of this is not a implementation data model",
    options: ["UML", "Relational", "Hierarchical", "network"],
    correctOptionIndex: 3,
  },
  {
    id: 71,
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
    id: 72,
    question:
      "The ______________ checks the query syntax to determine whether it is formulated according to the syntax rules of the query language.",
    options: ["Scanner", "Parser", "Validation", "Query tree"],
    correctOptionIndex: 1,
  },
  {
    id: 73,
    question:
      "When transaction Ti requests a data item currently held by Tj, Ti is allowed to wait only if it has a timestamp larger than that of Tj (that is, Ti is younger than Tj ). Otherwise, Tj is rolled back (Tj is wounded by Ti ). This is",
    options: ["Wait-die", "Wait-wound", "Wound-wait", "Wait"],
    correctOptionIndex: 2,
  },
  {
    id: 74,
    question:
      "__________ rollback requires the system to maintain additional information about the state of all the running transactions.",
    options: ["Total", "Partial", "Time", "Commit"],
    correctOptionIndex: 1,
  },
  {
    id: 75,
    question:
      "A deadlock exists in the system if and only if the wait-for graph contains a ___________.",
    options: ["Cycle", "Direction", "Bi-direction", "Rotation"],
    correctOptionIndex: 0,
  },
  {
    id: 76,
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
    id: 77,
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
    id: 78,
    question:
      "A system is in a ______ state if there exists a set of transactions such that every transaction in the set is waiting for another transaction in the set.",
    options: ["Idle", "Waiting", "Deadlock", "Deadlock"],
    correctOptionIndex: 2,
  },
  {
    id: 79,
    question: "A window into a portion of a database is",
    options: ["Schema", "View", "Query", "Data dictionary"],
    correctOptionIndex: 1,
  },
  {
    id: 80,
    question:
      "All lock information is managed by a ____, which is responsible for assigning and policing the locks used by the transactions.",
    options: ["Scheduler", "DBMS", "Lock manager", "Locking agent"],
    correctOptionIndex: 2,
  },
  {
    id: 81,
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
    id: 82,
    question:
      "Consider a directed line(->) from the relationship set advisor to both entity sets instructor and student. This indicates _________ cardinality.",
    options: ["One to many", "One to one", "Many to many", "Many to one"],
    correctOptionIndex: 1,
  },
  {
    id: 83,
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
    id: 84,
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
    id: 85,
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
    id: 86,
    question:
      "If you were collecting and storing information about your music collection, an album would be considered a(n) _____.",
    options: ["Relation", "Entity", "Instance", "Attribute"],
    correctOptionIndex: 1,
  },
  {
    id: 87,
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
    id: 88,
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
    id: 89,
    question:
      "The deadlock state can be changed back to stable state by using _____________ statement.",
    options: ["Commit", "Rollback", "Savepoint", "Deadlockd"],
    correctOptionIndex: 1,
  },
  {
    id: 90,
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
    id: 91,
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
    id: 92,
    question:
      "The situation where the lock waits only for a specified amount of time for another lock to be released is",
    options: ["Lock timeout", "Wait-wound", "Timeout", "Wait"],
    correctOptionIndex: 0,
  },
  {
    id: 93,
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
    id: 94,
    question: "Weak entity set is represented as",
    options: ["Underline", "Double line", "Double diamond", "Double rectangle"],
    correctOptionIndex: 3,
  },
  {
    id: 95,
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
    id: 96,
    question:
      "What is a relationship called when it is maintained between two entities?",
    options: ["Unary", "Binary", "Ternary", "Quaternary"],
    correctOptionIndex: 1,
  },
  {
    id: 97,
    question:
      "What term is used to refer to a specific record in your music database; for instance; information stored about a specific album?",
    options: ["Relation", "Instance", "Table", "Column"],
    correctOptionIndex: 1,
  },
  {
    id: 98,
    question:
      "When transaction Ti requests a data item currently held by Tj, Ti is allowed to wait only if it has a timestamp smaller than that of Tj (that is, Ti is older than Tj ). Otherwise, Ti is rolled back (dies). This is",
    options: ["Wait-die", "Wait-wound", "Wound-wait", "Wait"],
    correctOptionIndex: 0,
  },
  {
    id: 99,
    question:
      "Which of the following are introduced to reduce the overheads caused by the log-based recovery?",
    options: ["Checkpoints", "Indices", "Deadlocks", "Locks"],
    correctOptionIndex: 0,
  },
  {
    id: 100,
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
    id: 101,
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
    id: 102,
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
    id: 103,
    question:
      "Which refers to a property of computer to run several operations simultaneously and possible as computers await response of each other?",
    options: ["Concurrency", "Deadlock", "Backup", "Recovery"],
    correctOptionIndex: 0,
  },
  {
    id: 104,
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
    id: 105,
    question:
      "Which of the following is the block that is not permitted to be written back to the disk?",
    options: ["Dead code", "Read only", "Pinned", "Zapped"],
    correctOptionIndex: 2,
  },
  {
    id: 106,
    question:
      "_____ means that data used during the execution of a transaction cannot be used by a second transaction until the first one is completed.",
    options: ["Serializability", "Atomicity", "Isolation", "Time stamping"],
    correctOptionIndex: 2,
  },
  {
    id: 107,
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
    id: 108,
    question:
      "Each modification done in database transaction are first recorded into the",
    options: ["Harddrive", "Log", "Disk", "Datamart"],
    correctOptionIndex: 1,
  },
  {
    id: 109,
    question:
      "If a transaction is performed in a database and committed, the changes are taken to the previous state of transaction by",
    options: ["Flashback", "Rollback", "Redo", "Cannot be done"],
    correctOptionIndex: 3,
  },
  {
    id: 110,
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
    id: 111,
    question:
      "The name of the transaction file shall be provided by the operator and the file that contains the edited transactions ready for execution shall be called",
    options: ["Batch.Exe", "Trans.Exe", "Opt.Exe", "Edit.Exe"],
    correctOptionIndex: 2,
  },
  {
    id: 112,
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
    id: 113,
    question:
      "Which of the following is an atomic sequence of database actions?",
    options: ["Transaction", "Concurrency", "Relations", "Reliability"],
    correctOptionIndex: 0,
  },
  {
    id: 114,
    question: "Which of the following is not a state in transaction?",
    options: ["Active", "Terminated", "Aborted", "Partially committed"],
    correctOptionIndex: 1,
  },
  {
    id: 115,
    question:
      "A transaction may not always complete its execution successfully. Such a transaction is termed",
    options: ["Aborted", "Terminated", "Closed", "All of the mentioned"],
    correctOptionIndex: 0,
  },
  {
    id: 116,
    question:
      "In order to maintain transactional integrity and database consistency, what technology does a DBMS deploy?",
    options: ["Triggers", "Pointers", "Locks", "Cursors"],
    correctOptionIndex: 2,
  },
  {
    id: 117,
    question:
      "Let us consider phone_number, which can take single or several values. Treating phone_numbers permits instructors to have several phone numbers (including zero) associated with them.",
    options: ["Entity", "Attribute", "Relation", "Value"],
    correctOptionIndex: 0,
  },
  {
    id: 118,
    question:
      "The total participation by entities is represented in E-R diagram as",
    options: ["Dashed line", "Double line", "Double rectangle", "Circle"],
    correctOptionIndex: 1,
  },
  {
    id: 119,
    question:
      "If memory access takes 20 ns with cache and 110 ns without it, then the ratio (cache uses a 10 ns memory) is ____.",
    options: ["93%", "90%", "88%", "83%"],
    correctOptionIndex: 1,
  },
  {
    id: 120,
    question:
      "In a memory-mapped I/O system, which of the following will not be there?",
    options: ["LDA", "IN", "OUT", "ADD"],
    correctOptionIndex: 0,
  },
  {
    id: 121,
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
    id: 122,
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
    id: 123,
    question: "The circuit used to store one bit of data is known as ____.",
    options: ["Register", "Encoder", "Decoder", "Flipflop"],
    correctOptionIndex: 3,
  },
  {
    id: 124,
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
    id: 125,
    question:
      "The multiplicand register & multiplier register of a hardware circuit implementing Booth's algorithm have (11101) & (1100). The result shall be ____.",
    options: ["(812)10", "(-812)10", "(-12)10", "(12)10"],
    correctOptionIndex: 0,
  },
  {
    id: 126,
    question: "The time interval between adjacent bits is called the ____.",
    options: ["Word-time", "Bit-time", "Turn around time", "Slice time"],
    correctOptionIndex: 1,
  },
  {
    id: 127,
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
    id: 128,
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
    id: 129,
    question:
      "A group of bits that tell the computer to perform a specific operation is known as ____.",
    options: ["Instruction code", "Micro-operation", "Accumulator", "Register"],
    correctOptionIndex: 0,
  },
  {
    id: 130,
    question: "A k-bit field can specify any one of ____.",
    options: ["3k registers", "2k registers", "k2 registers", "k3 registers"],
    correctOptionIndex: 1,
  },
  {
    id: 131,
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
    id: 132,
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
    id: 133,
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
    id: 134,
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
    id: 135,
    question: "In Reverse Polish notation, expression A*B+C*D is written as",
    options: ["AB*CD*+", "A*BCD*+", "AB*C*D+", "AB*+CD*"],
    correctOptionIndex: 0,
  },
  {
    id: 136,
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
    id: 137,
    question:
      "Microprocessor 8085 is the enhanced version of ______ with essentially the same construction set",
    options: ["8080", "8088", "8800", "6800"],
    correctOptionIndex: 0,
  },
  {
    id: 138,
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
    id: 139,
    question:
      "Microprocessor 8085 is the enhanced version of ______ with essentially the same construction set",
    options: ["8080", "8088", "8800", "6800"],
    correctOptionIndex: 0,
  },
  {
    id: 140,
    question:
      "n bits in operation code imply that there are ___________possible distinct",
    options: ["n^2", "2n", "2^n", "n2"],
    correctOptionIndex: 1,
  },
  {
    id: 141,
    question:
      "Number of machine cycles required for RET instruction in 8085 microprocessor is",
    options: ["1", "2", "3", "4"],
    correctOptionIndex: 2,
  },
  {
    id: 142,
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
    id: 143,
    question:
      "The addressing mode used in an instruction of the form ADD X Y, is _____.",
    options: ["Absolute", "Indirect", "indexed", "base addressed"],
    correctOptionIndex: 0,
  },
  {
    id: 144,
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
    id: 145,
    question:
      "The average time required to reach a storage location in memory and obtain its contents is called the _____.",
    options: ["seek time", "turn around time", "access time", "transfer time"],
    correctOptionIndex: 2,
  },
  {
    id: 146,
    question: "The circuit converting binary data in to decimal is_____.",
    options: ["Encoder", "Decoder", "Muitiplexer", "Code converter"],
    correctOptionIndex: 3,
  },
  {
    id: 147,
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
    id: 148,
    question: "Translation from symbolic program into Binary is done in_____.",
    options: ["Two passes", "Three passes", "Four passes", "Five passes"],
    correctOptionIndex: 0,
  },
  {
    id: 149,
    question: "Von Neumann architecture is ______.",
    options: ["SISD", "SIMD", "MISD", "MIMD"],
    correctOptionIndex: 0,
  },
  {
    id: 150,
    question:
      "What characteristic of RAM memory makes it not suitable for permanent storage?",
    options: ["too slow", "unreliable", "it is volatile", "too bulky"],
    correctOptionIndex: 2,
  },
  {
    id: 151,
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
    id: 152,
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
    id: 153,
    question:
      "An instruction used to set the carry flag in a computer can be classified as",
    options: ["Data transfer", "Program Control", "Logical", "Arithmetic"],
    correctOptionIndex: 2,
  },
  {
    id: 154,
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
    id: 155,
    question: `Which two are valid constructors for Thread?
Thread(Runnable r, String name)
Thread()
Thread(int priority)
Thread(Runnable r, ThreadGroup g)
Thread(Runnable r, int priority)`,
    options: ["1 and 3", "2 and 4", "1 and 2", "2 and 5"],
    correctOptionIndex: 2,
  },
  {
    id: 156,
    question: `class can have many methods with the same name as long as the number of parameters or type of parameters is different. This OOP concept is known as`,
    options: [
      "Method Invocating",
      "Method Overloading",
      "Method Overriding",
      "Method labeling",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 157,
    question: `Which of the following is considered as a blue print that defines the variables and methods common to all of its objects of a specific kind?`,
    options: ["object", "class", "method", "data type"],
    correctOptionIndex: 1,
  },
  {
    id: 158,
    question: `What will be printed as the output of the following program?
public class testincr
{
public static void main(String args[])
{
int i = 0;
i = i++ + i;
System.out.println("I = " +i);
}
}`,
    options: ["I = 0", "I = 1", "I = 2", "I = 3"],
    correctOptionIndex: 1,
  },
  {
    id: 159,
    question: `count stands for`,
    options: [
      "class output",
      "character output",
      "common output",
      "call output",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 160,
    question: `R has n tuples and S has m tuples, then the Cartesian product of R and S will produce ___________ tuples.`,
    options: ["n+m", "n*m", "n/m", "n-m"],
    correctOptionIndex: 1,
  },
  {
    id: 161,
    question: `Inline functions are invoked at the time of`,
    options: [
      "Run time",
      "Compile time",
      "Depends on how it is invoked",
      "Both b and c above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 162,
    question: `Master slave flipflop can be constructed with`,
    options: ["SR Latch", "adder", "JK flipflop", "multiplier"],
    correctOptionIndex: 2,
  },
  {
    id: 163,
    question: `Minterms are also called`,
    options: [
      "standard sum",
      "standard product",
      "standard division",
      "standard subtraction",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 164,
    question: `Voltage operated circuits represent`,
    options: [
      "Decimal variables",
      "Hexadecimal variables",
      "Binary variables",
      "Octa variables",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 165,
    question: `What is the meaning of the return data type void?`,
    options: [
      "An empty memory space is returned so that the developers can utilize it.",
      "void returns no data type.",
      "void is not supported in Java",
      "None of the above",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 166,
    question: `What is the stored in the object obj in following lines of code? box obj;`,
    options: [
      "Memory address of allocated memory.",
      "NULL",
      "Any arbitrary pointer",
      "Garbage",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 167,
    question: `What will be the output of the following program?
class B
{
static int count = 100;
public void increment()
{
count++; }
public static void main(String []args)
{
B b1 = new B();
b1.increment();
B b2 = new B();
System.out.println(b2.count); } }`,
    options: ["100", "101", "3", "error"],
    correctOptionIndex: 1,
    isQuestionContainsCoding: true,
  },
  {
    id: 168,
    question: `What will be the Output?
class Animal
{
String name = "animal";
String makeNoise() { return "generic noise"; }
}
class Dog extends Animal
{
String name = "dog";
String makeNoise() { return "bark"; }
}
public class Test
{
public static void main(String[] args)
{
}
Animal an = new Dog();
System.out.println(an.name+" "+an.makeNoise());
}`,
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
    id: 169,
    question: `When a thread terminates its processing, into what state that thread enters?`,
    options: [
      "Running state",
      "Waiting state",
      "Beginning state",
      "Dead state",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 170,
    question: `Which of these interface declares core method that all collections will have?`,
    options: ["set", "EventListner", "Comparator", "Collection"],
    correctOptionIndex: 3,
  },
  {
    id: 171,
    question: `"Is the requirement properly understood?",relates to _________`,
    options: [
      "Traceability",
      "Comprehensibility",
      "Adaptability",
      "Verifiability",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 172,
    question: `"Can the requirement be changed without a large impact on other requirements?",is related to _______`,
    options: [
      "Comprehensibility",
      "Verifiability",
      "Adaptability",
      "Traceability",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 173,
    question: `"Is the origin of the requirement clearly stated?" relates to _________`,
    options: [
      "Traceability",
      "Verifiability",
      "Adaptability",
      "Comprehensibility",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 174,
    question: `#include <iostream>
using namespace std;
int main ()
{
cout << (3 > 4 && 3 > 1) << endl;
return 0;
}`,
    options: ["0", "1", "error", "10"],
    correctOptionIndex: 0,
    isQuestionContainsCoding: true,
  },
  {
    id: 175,
    question: `Inheritance is a way to`,
    options: [
      "pass arguments and improve data hiding",
      "pass arguments and add features to existing classes without rewriting them",
      "make general classes into more specific classes and add features to existing classes without rewriting them",
      "improve data hiding and encapsulation.",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 176,
    question: `Operator overloading is`,
    options: [
      "making C++ operators work with objects",
      "giving new meaning to existing C++ operators",
      "making new C++ operators",
      "both (a) and (b)",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 177,
    question: `A data structure where elements can be added or removed at either end but not in the middle`,
    options: ["Linked lists", "Stacks", "Queues", "Deque"],
    correctOptionIndex: 3,
  },
  {
    id: 178,
    question: `In a extended-binary tree nodes with 2 children are called _________`,
    options: [
      "Interior Node",
      "Domestic Node",
      "Internal Node",
      "Internal Node",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 179,
    question: `Which of the following statements are true?`,
    options: [
      "Shortest remaining time first scheduling may cause starvation",
      "Starvation may be caused by preemptive scheduling.",
      "In terms of response time robin round is better than FCFS",
      "All of the above statements are true",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 180,
    question: `___________ contains the 8-bit opcode currently being executed.`,
    options: [
      "Memory Address Register",
      "Instruction Register",
      "Memory Buffer Register",
      "Program Pointer",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 181,
    question: `A binary digit is called a`,
    options: ["Bit", "Byte", "Number", "Character"],
    correctOptionIndex: 0,
  },
  {
    id: 182,
    question: `A page fault`,
    options: [
      "Occurs when there is an error in a specific page",
      "Occurs when a program accesses a page of main memory",
      "Occurs when a program accesses a page not currently in main memory",
      "Occurs when a program accesses a page belonging to another program.",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 183,
    question: `A solution to the problem of external fragmentation is :`,
    options: [
      "compaction",
      "smaller memory space",
      "larger memory space",
      "None of these",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 184,
    question: `A Stack-organised Computer uses instruction of`,
    options: [
      "Indirect addressing",
      "Two-addressing",
      "Zero addressing",
      "Index addressing",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 185,
    question: `An address in main memory is called`,
    options: [
      "Physical address",
      "Memory address",
      "Logical address",
      "Word address",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 186,
    question: `An interface that provides I/O transfer of data directly to and form the memory unit and peripheral is termed as`,
    options: ["DDA", "Serial interface", "BR", "DMA"],
    correctOptionIndex: 3,
  },
  {
    id: 187,
    question: `Assembly language`,
    options: [
      "uses alphabetic codes in place of binary numbers used in machine language",
      "is the easiest language to write programs",
      "need not be translated into machine language",
      "is the easiest language to solve problems",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 188,
    question: `BAT refers to _________`,
    options: ["Boot Files", "Batch Files", "Executable Files", "None"],
    correctOptionIndex: 1,
  },
  {
    id: 189,
    question: `can be represented in a signed magnitude format and in a 1's complement format as`,
    options: [
      "100100 & 011011",
      "100100 & 111011",
      "011011 & 100100",
      "111011 & 100100",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 190,
    question: `Content of the program counter is added to the address part of the instruction in order to obtain the effective address is called.`,
    options: [
      "relative address mode",
      "implied mode",
      "index addressing mode",
      "register mode",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 191,
    question: `If the main memory is of 8K bytes and the cache memory is of 2K words. It uses associative mapping. Then each word of cache memory shall be`,
    options: ["11 bits", "21 bits", "16 bits", "20 bits"],
    correctOptionIndex: 2,
  },
  {
    id: 192,
    question: `If the value V(x) of the target operand is contained in the address field itself, the addressing mode is`,
    options: ["immediate", "direct", "indirect", "implied"],
    correctOptionIndex: 1,
  },
  {
    id: 193,
    question: `In a vectored interrupt`,
    options: [
      "the branch address is assigned to a fixed location in memory",
      "the interrupting source supplies the branch information to the processor through an interrupt vector",
      "the branch address is obtained from a register in the processor",
      "the branch address is obtained from a register in the processor",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 194,
    question: `In FIFO page replacement algorithm, when a page must be replaced:`,
    options: [
      "random page is chosen",
      "newest page is chosen",
      "oldest page is chosen",
      "none of the mentioned",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 195,
    question: `Memory management technique in which system stores and retrieves data from secondary storage for use in main memory is called`,
    options: ["fragmentation", "paging", "mapping", "starvation"],
    correctOptionIndex: 1,
  },
  {
    id: 196,
    question: `Requirements which are a consequence of organisational policies and procedures are termed as_______`,
    options: [
      "product requirement",
      "External requirement",
      "Process requiement",
      "Organisational requirements",
    ],
    correctOptionIndex: 3,
  },
  {
    id: 197,
    question: `Routine is not loaded until it is called. All routines are kept on disk in a relocatable load format. The main program is loaded into memory & is executed. This type of loading is called ________ ?`,
    options: [
      "Static loading",
      "Dynamic loading",
      "Dynamic linking",
      "Overlays",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 198,
    question: `Status bit is also called`,
    options: ["Binary bit", "Flag bit", "Signed bit", "Unsigned bit"],
    correctOptionIndex: 1,
  },
  {
    id: 199,
    question: `Swap space exists in:`,
    options: [
      "CPU",
      "secondary memory",
      "primary memory",
      "none of the mentioned",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 200,
    question: `The address of a page table in memory is pointed by:`,
    options: [
      "stack pointer",
      "page table base register",
      "page register",
      "program counter",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 201,
    question: `The FIFO algorithm`,
    options: [
      "executes first the job that last entered the queue",
      "executes first the job that first entered the queue",
      "execute first the job that has been in the queue the longest",
      "executes first the job with the least processor needs",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 202,
    question: "Von Neumann architecture is",
    options: ["SISD", "SIMD", "MIMD", "MISD"],
    correctOptionIndex: 0,
  },
  {
    id: 203,
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
    id: 204,
    question: "Which of the following is not a property of transactions?",
    options: ["Atomicity", "Concurrency", "Isolation", "Redundancy"],
    correctOptionIndex: 1,
  },
  {
    id: 205,
    question: "Which of the following is lowest in memory hierarchy?",
    options: ["Cache memory", "Secondary memory", "Registers", "RAM"],
    correctOptionIndex: 1,
  },
  {
    id: 206,
    question:
      "Working set model for page replacement is based on the assumption of:",
    options: ["locality", "random access", "globalization", "modularity"],
    correctOptionIndex: 0,
  },
  {
    id: 207,
    question: "(1010.011)2 =",
    options: ["(10.365)10", "(10.375)10", "(11.365)10", "(11.375)10"],
    correctOptionIndex: 1,
  },
  {
    id: 208,
    question: "(10110001101011.11110010)2 in hexadecimal is",
    options: ["2C5B.F2", "2C6B.F2", "3D5B.F2", "3D6B.F2"],
    correctOptionIndex: 1,
  },
  {
    id: 209,
    question: "(41)10 in binary is",
    options: ["101101", "101011", "101001", "101101"],
    correctOptionIndex: 2,
  },
  {
    id: 210,
    question: "(a+b+c)'=",
    options: ["a'b'c'", "a'+b'+c'", "abc", "a+b+c"],
    correctOptionIndex: 0,
  },
  {
    id: 211,
    question: "(x')' is",
    options: ["complement", "dual complement", "duality", "reflection"],
    correctOptionIndex: 1,
  },
  {
    id: 212,
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
    id: 213,
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
    id: 214,
    question: "-9 with signed 2's complement representation is",
    options: ["10001001", "11110110", "11110111", "11110011"],
    correctOptionIndex: 2,
  },
  {
    id: 215,
    question: "-9 with signed magnitude representation is",
    options: ["10001001", "11110110", "11110111", "11110011"],
    correctOptionIndex: 0,
  },
  {
    id: 216,
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
    id: 217,
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
    id: 218,
    question: "10's complement of 012398 is",
    options: ["987802", "987602", "987902", "987502"],
    correctOptionIndex: 1,
  },
  {
    id: 219,
    question: "10's complement of 246700 is",
    options: ["753300", "753311", "753320", "754371"],
    correctOptionIndex: 0,
  },
  {
    id: 220,
    question: "16x4 RAM indicates that memory location are",
    options: ["4", "8", "12", "16"],
    correctOptionIndex: 0,
  },
  {
    id: 221,
    question: "2 left shifts are referred to as multiplication with",
    options: ["2", "4", "8", "16"],
    correctOptionIndex: 1,
  },
  {
    id: 222,
    question: "2's complement of 1101100 is",
    options: ["11100", "10100", "110100", "100100"],
    correctOptionIndex: 1,
  },
  {
    id: 223,
    question: "2^3 would have",
    options: ["three values", "four values", "six values", "eight values"],
    correctOptionIndex: 3,
  },
  {
    id: 224,
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
    id: 225,
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
    id: 226,
    question: "3x8 decoder will have",
    options: ["3 inputs", "4 inputs", "5 inputs", "6 inputs"],
    correctOptionIndex: 0,
  },
  {
    id: 227,
    question: "4 bit gray code can be converted into",
    options: ["4bit binary", "3bit binary", "2bit binary", "1bit binary"],
    correctOptionIndex: 0,
  },
  {
    id: 228,
    question: "4bit parallel adder produces output of",
    options: ["1 bit", "2 bits", "3 bits", "4 bits"],
    correctOptionIndex: 0,
  },
  {
    id: 229,
    question: "7 segment generates output",
    options: ["a to b", "a to f", "a to g", "a to z"],
    correctOptionIndex: 2,
  },
  {
    id: 230,
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
    id: 231,
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
    id: 232,
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
    id: 233,
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
    id: 234,
    question: "9 in binary code is represented by",
    options: ["1000", "1001", "1010", "101"],
    correctOptionIndex: 1,
  },
  {
    id: 235,
    question: "9's complement of 012395 is",
    options: ["987641", "987631", "987621", "987601"],
    correctOptionIndex: 3,
  },
  {
    id: 236,
    question: "9's complement of 546700 is",
    options: ["453299", "453399", "543399", "543299"],
    correctOptionIndex: 0,
  },
  {
    id: 237,
    question: "Value of first linked list index is:",
    options: ["1", "-1", "0", "2"],
    correctOptionIndex: 2,
  },
  {
    id: 238,
    question: "A min-heap is also known as:",
    options: ["decreasing heap", "Low heap", "descending heap", "Small heap"],
    correctOptionIndex: 3,
  },
  {
    id: 239,
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
    id: 240,
    question:
      "The post order traversal of a binary tree is :DEBFCA, find out the preorder traversal:",
    options: ["ABFCDE", "ADBFEC", "ABDECF", "ABDCEF"],
    correctOptionIndex: 2,
  },
  {
    id: 241,
    question:
      "The time complexity of the algorithm sum(a,n) with a single loop from 1 to n is",
    options: ["3n+2", "2n+3", "n+1", "2n+2"],
    correctOptionIndex: 2,
  },
  {
    id: 242,
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
    id: 243,
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
    id: 244,
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
    id: 245,
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
    id: 246,
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
    id: 247,
    question:
      "Simplified form of the boolean expression (X + Y + XY)(X + Z) is",
    options: ["X + Y + Z", "XY + YZ", "X + YZ", "XZ + Y"],
    correctOptionIndex: 2,
  },
  {
    id: 248,
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
    id: 249,
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
    id: 250,
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
    id: 251,
    question:
      "Which of the following unit will choose to transform decimal number to binary code?",
    options: ["Encoder", "Decoder", "Multiplexer", "Counter"],
    correctOptionIndex: 0,
  },
  {
    id: 252,
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
    id: 253,
    question: "Using 10's complement 72532 − 3250 is",
    options: ["69282", "69272", "69252", "69232"],
    correctOptionIndex: 0,
  },
  {
    id: 254,
    question: "A Boolean function may be transformed into",
    options: ["Logical Diagram", "Logical Graph", "Map", "Matrix"],
    correctOptionIndex: 0,
  },
  {
    id: 255,
    question: "A circuit that converts n inputs to 2^n outputs is called",
    options: ["encoder", "decoder", "comparator", "carry look ahead"],
    correctOptionIndex: 1,
  },
  {
    id: 256,
    question: "Adding 1001 and 0010 gives output of",
    options: ["1011", "1111", "0", "1010"],
    correctOptionIndex: 0,
  },
  {
    id: 257,
    question: "Adjacent squares represents a",
    options: ["circle", "variable", "literal", "minterm"],
    correctOptionIndex: 2,
  },
  {
    id: 258,
    question: "BCD to seven segment is a",
    options: ["Encoder", "Decoder", "Comparator", "Carry Look Ahead"],
    correctOptionIndex: 1,
  },
  {
    id: 259,
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
    id: 260,
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
    id: 261,
    question: "Design procedure of combinational circuit involves",
    options: ["4 steps", "5 steps", "6 steps", "8 steps"],
    correctOptionIndex: 2,
  },
  {
    id: 262,
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
    id: 263,
    question: "Encoders are made by three",
    options: ["AND gate", "OR gate", "NAND gate", "XOR gate"],
    correctOptionIndex: 1,
  },
  {
    id: 264,
    question: "Flip-flops can be constructed with two",
    options: ["NAND gates", "OR gates", "AND gates", "NOT gates"],
    correctOptionIndex: 0,
  },
  {
    id: 265,
    question: "In BCD no. 1010 has",
    options: ["meaning", "no meaning", "value", "Vcc"],
    correctOptionIndex: 1,
  },
  {
    id: 266,
    question: "In design procedure input output values are assigned with",
    options: ["numeric values", "letter symbols", "0's", "1's"],
    correctOptionIndex: 1,
  },
  {
    id: 267,
    question: "In excitation table of D flipflop next state is equal to",
    options: ["present state", "next state", "input state", "D state"],
    correctOptionIndex: 3,
  },
  {
    id: 268,
    question:
      "Is it possible to find two algebraic expressions that specify same function",
    options: ["No", "Yes", "Maybe", "Never"],
    correctOptionIndex: 1,
  },
  {
    id: 269,
    question: "Magnitude comparator compares using operation of",
    options: ["Addition", "Subtraction", "Division", "Multiplication"],
    correctOptionIndex: 3,
  },
  {
    id: 270,
    question: "Minterms are arranged in map in a sequence of",
    options: ["binary sequence", "gray code", "binary variables", "BCD code"],
    correctOptionIndex: 1,
  },
  {
    id: 271,
    question: "One operation that is not given by magnitude comparator",
    options: ["Equal", "Less", "Greater", "Addition"],
    correctOptionIndex: 3,
  },
  {
    id: 272,
    question: "One that is not type of flip-flop is",
    options: ["JK", "T", "RS", "ST"],
    correctOptionIndex: 3,
  },
  {
    id: 273,
    question: "Output of AND gates in SOP is connected to",
    options: ["NOT gates", "OR gates", "AND gates", "EX-OR gates"],
    correctOptionIndex: 1,
  },
  {
    id: 274,
    question: "RS flip-flops are also called",
    options: ["RS Latch", "SR Latch", "TS Latch", "ST Latch"],
    correctOptionIndex: 1,
  },
  {
    id: 275,
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
    id: 276,
    question:
      "To perform product of maxterms Boolean function must be brought into",
    options: ["AND terms", "OR terms", "NOT terms", "NAND terms"],
    correctOptionIndex: 1,
  },
  {
    id: 277,
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
    id: 278,
    question: "X=1010100 and Y=1000011 using 2's complement X-Y is",
    options: ["10111", "101101", "10011", "10001"],
    correctOptionIndex: 1,
  },
  {
    id: 279,
    question: "x+y=z represents operation that is",
    options: ["AND", "OR", "NOT", "EX-OR"],
    correctOptionIndex: 1,
  },
  {
    id: 280,
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
    id: 281,
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
    id: 282,
    question: "_____ is an excellent example for sustainable fibre.",
    options: ["Ceramic", "Polyester", "Wool", "Lyocell"],
    correctOptionIndex: 3,
  },
  {
    id: 283,
    question: "_____ refers unity of design in a garment",
    options: ["Harmony", "Line", "Shape", "Form"],
    correctOptionIndex: 0,
  },
  {
    id: 284,
    question:
      "_____ is where profit is expressed as a percentage of the sale price.",
    options: ["Break-down", "Break-up", "Markdown", "Markup"],
    correctOptionIndex: 3,
  },
  {
    id: 285,
    question:
      "_____ machines allow manipulation of fabric on both sides of the needle for topstitching and lapped seaming",
    options: ["Cylinder", "Flatbed", "Post", "Raised bed"],
    correctOptionIndex: 1,
  },
  {
    id: 286,
    question:
      "_____ are made of durable materials and permanently sewn into garments for production information",
    options: ["Labels", "Tags", "Stringers", "Care taps"],
    correctOptionIndex: 0,
  },
  {
    id: 287,
    question:
      "_____ creating a pattern by pinning fabric to a dressmaker's dummy and manipulating it until the look is achieved.",
    options: ["Flat patterning", "Draping", "Pinning", "Dart manipulation"],
    correctOptionIndex: 1,
  },
  {
    id: 288,
    question:
      "_____ date is the merchandiser’s deadline for having all prototypes and pricing for a new product line completed.",
    options: ["Line preview", "Deadline", "Line presentation", "Line releases"],
    correctOptionIndex: 0,
  },
  {
    id: 289,
    question:
      "_____ is a diagram of a precise arrangement of pattern pieces for a specific style and the sizes to be cut from a single spread.",
    options: ["Plotter", "Marker", "Design", "Grading"],
    correctOptionIndex: 1,
  },
  {
    id: 290,
    question: "_____ is a guide containing steps to make a garment",
    options: ["Thimble", "Needle threader", "Sewing gauge", "Pattern"],
    correctOptionIndex: 1,
  },
  {
    id: 291,
    question:
      "_____ is the application of computer technology to the development of a garment to the point of production.",
    options: ["SAM", "CAD", "CIM", "CIF"],
    correctOptionIndex: 2,
  },
  {
    id: 292,
    question:
      "_____ is the feel, drape and degree of stiffness and softness of the fabric.",
    options: ["Texture", "Surface effect", "Hairiness", "Hang"],
    correctOptionIndex: 0,
  },
  {
    id: 293,
    question:
      "_____ is the natural polymer that makes up the living cells of all vegetation.",
    options: ["Enzymes", "Keratin", "Cellulose", "Lumen"],
    correctOptionIndex: 2,
  },
  {
    id: 294,
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
    id: 295,
    question:
      "_____ process improves yarn strength and evenness by removing short fibres.",
    options: ["Carding", "Combing", "Drawing", "Drafting"],
    correctOptionIndex: 1,
  },
  {
    id: 296,
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
    id: 297,
    question:
      "_____ retailing offers merchandise to consumers in a catalog format.",
    options: ["Mail order", "E-Commerce", "E-retailing", "Chain store"],
    correctOptionIndex: 0,
  },
  {
    id: 298,
    question:
      "_____ seams are those in which all seam allowance are contained within the finished seam.",
    options: ["Mock seam", "Self-enclosed seam", "Lap seam", "Bound seam"],
    correctOptionIndex: 1,
  },
  {
    id: 299,
    question:
      "_____ series programme provides standards for data documentation and audits as part of a quality management system.",
    options: ["TQM", "QMS", "ISO", "AQL"],
    correctOptionIndex: 2,
  },
  {
    id: 300,
    question: "_____ special types of forms for data collection.",
    options: ["Spec sheet", "Check sheet", "Work sheet", "Make sheet"],
    correctOptionIndex: 1,
  },
  {
    id: 301,
    question: "_____ standards are designed to help organize QA/QC activities.",
    options: ["ISO 14000", "ISO 6000", "ISO 8583", "ISO 9000"],
    correctOptionIndex: 3,
  },
  {
    id: 302,
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
    id: 303,
    question:
      "_____ also known as dressmaker's dummies, are padded so that material may be pinned to them.",
    options: ["Pinning mannequin", "Mannequin", "Dress form", "Character form"],
    correctOptionIndex: 2,
  },
  {
    id: 304,
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
    id: 305,
    question:
      "_____ is a difference between actual and garment measurement at any given point.",
    options: ["Set", "Ease", "Seam", "Allowance"],
    correctOptionIndex: 1,
  },
  {
    id: 306,
    question:
      "_____ is the angle at which the cutting device contacts the spread.",
    options: ["1800", "900", "Cutting pitch", "Longitudinal"],
    correctOptionIndex: 2,
  },
  {
    id: 307,
    question:
      "A _____ is a stock of fabric plies that have been prepared for cutting.",
    options: ["Lay", "Marker", "Fabric", "Bundle"],
    correctOptionIndex: 0,
  },
  {
    id: 308,
    question:
      "A merchandise _____ is a collection of various styles, quantities and prices of related merchandise.",
    options: ["Parts", "Assortment", "Segmentation", "Market"],
    correctOptionIndex: 1,
  },
  {
    id: 309,
    question:
      "For pigment printing, which following type of thickener system is preferably used",
    options: ["Oil-in-water", "Water-in-oil", "Sodium alginate", "Guar gum"],
    correctOptionIndex: 2,
  },
  {
    id: 310,
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
    id: 311,
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
    id: 312,
    question: "Kalamkari is the most ancient industry in ________.",
    options: ["Andhra Pradesh", "Karnataka", "Madhya Pradesh", "Tamil Nadu"],
    correctOptionIndex: 0,
  },
  {
    id: 313,
    question:
      "Label of international association for research and testing in the field of textile ecology is given by ________ eco label.",
    options: ["ECO-TEX", "ECO Steam", "ECOS", "OEKO-TEX"],
    correctOptionIndex: 3,
  },
  {
    id: 314,
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
    id: 315,
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
    id: 316,
    question: "Maximum how many thread will be using in Over Lock machine.",
    options: ["3nos", "4nos", "5nos", "6nos"],
    correctOptionIndex: 3,
  },
  {
    id: 317,
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
    id: 318,
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
    id: 319,
    question:
      "The business of buying fashion merchandise from a variety of resources and reselling it to ultimate consumers ________.",
    options: ["Wholesalers", "Fashion retailing", "Marketing", "Merchandising"],
    correctOptionIndex: 1,
  },
  {
    id: 320,
    question:
      "The count of yarn is 20 Ne and its equivalent count in tex system will be ________.",
    options: ["31 tex", "32 tex", "29.5 tex", "30.7 tex"],
    correctOptionIndex: 0,
  },
  {
    id: 321,
    question:
      "The crop cultivated without pesticides and chemicals, but using synthetic fertilizers are said to be ________ one.",
    options: ["Eco-friendly", "Organic", "In-organic", "Sustainable"],
    correctOptionIndex: 2,
  },
  {
    id: 322,
    question:
      "The optimum conditions for bleaching cotton with hydrogen peroxide are",
    options: ["pH 7, 60°C", "pH 7, boil", "pH 10, 60°C", "pH 10, boil"],
    correctOptionIndex: 3,
  },
  {
    id: 323,
    question:
      "The toddlers apparel, for the child who has learned to walk are sized:",
    options: ["2T,3T,4T", "4 to 7", "3,6and 9 months", "4X to 6X"],
    correctOptionIndex: 0,
  },
  {
    id: 324,
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
    id: 325,
    question: "Two thread chain stitch refer ________ classes.",
    options: ["300", "400", "301", "401"],
    correctOptionIndex: 1,
  },
  {
    id: 326,
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
    id: 327,
    question:
      "Utilization of ________ fibre in clothing has added to the fast depleting of forests.",
    options: ["Cotton", "Wool", "Silk", "rayon"],
    correctOptionIndex: 3,
  },
  {
    id: 328,
    question: "Which among them is not a good weave absorbent towel?",
    options: ["Honeycomb", "Herringbone", "Huckaback", "Terry"],
    correctOptionIndex: 1,
  },
  {
    id: 329,
    question:
      "________ may result from friction among materials and spreading equipment",
    options: ["Rly alignment", "Static Electricity", "Tension", "Shrink"],
    correctOptionIndex: 1,
  },
  {
    id: 330,
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
    id: 331,
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
    id: 332,
    question: "________ is the description of the database",
    options: ["schema", "schema construct", "schema evolution", "snapshot"],
    correctOptionIndex: 0,
  },
  {
    id: 333,
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
    id: 334,
    question:
      "The set of all attributes of a relation is called default ________.",
    options: ["Primary Key", "Super Key", "Foreign Key", "Alternate key"],
    correctOptionIndex: 1,
  },
  {
    id: 335,
    question:
      "The ________ identifies the language tokens in the text of the query.",
    options: ["Scanner", "Parser", "Validation", "query tree"],
    correctOptionIndex: 0,
  },
  {
    id: 336,
    question:
      "During ________ state, transaction issues read and write operations.",
    options: ["Active", "committed", "Partially committed", "failed"],
    correctOptionIndex: 0,
  },
  {
    id: 337,
    question: "________ FD have same set of attributes on both sides.",
    options: ["Trivial", "non-trivial", "Fully", "Partial"],
    correctOptionIndex: 0,
  },
  {
    id: 338,
    question:
      "______________ join requires that the two join attributes have the same name in both relations.",
    options: ["Theta Join", "Equi join", "Self join", "Natural join"],
    correctOptionIndex: 3,
  },
  {
    id: 339,
    question:
      "In ______________ Schedule only one transaction at a time is active.",
    options: ["Conflict", "view", "serial", "non serial"],
    correctOptionIndex: 2,
  },
  {
    id: 340,
    question:
      "The attributes in foreign key and primary key have the same ____________.",
    options: ["Number of tuples", "Number of attributes", "Domain", "Symbol"],
    correctOptionIndex: 1,
  },
  {
    id: 341,
    question:
      "In ______________ Schedule transactions are executing with interleaved process.",
    options: ["Conflict", "view", "serial", "non serial"],
    correctOptionIndex: 2,
  },
  {
    id: 342,
    question: "Minimal super key of a relation is called _______________.",
    options: ["Primary Key", "Super Key", "Foreign Key", "Alternate key"],
    correctOptionIndex: 1,
  },
  {
    id: 343,
    question:
      "The combination of selection and Cartesian product operators is ____________ operator",
    options: ["Division", "Set difference", "Join", "Union"],
    correctOptionIndex: 2,
  },
  {
    id: 344,
    question:
      "The participation constraints and cardinality ratio together called as _______________ constraints.",
    options: ["Structural", "Un Structural", "Integrity", "Referential"],
    correctOptionIndex: 0,
  },
  {
    id: 345,
    question: "The complexity of binary search algorithm is",
    options: ["O(n)", "O(log n)", "O(log n)", "O(n log n)"],
    correctOptionIndex: 1,
  },
  {
    id: 346,
    question: "The complexity of Bubble sort algorithm is",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
    correctOptionIndex: 2,
  },
  {
    id: 347,
    question: "The complexity of Insertion sort algorithm is",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
    correctOptionIndex: 1,
  },
  {
    id: 348,
    question: "The complexity of Merge sort algorithm is",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correctOptionIndex: 1,
  },
  {
    id: 349,
    question:
      "Which of the following sorting algorithms does not have a worst case running time of O(n2)",
    options: ["Insertion sort", "Merge sort", "Quick sort", "Bubble sort"],
    correctOptionIndex: 1,
  },
  {
    id: 350,
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
    id: 351,
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
    id: 352,
    question:
      "To represent hierarchical relationship between elements, which data structure is suitable?",
    options: ["Deque", "Priority Queue", "Tree", "All of these"],
    correctOptionIndex: 2,
  },
  {
    id: 353,
    question: "A technique called ______ is used to create a subnetting effect",
    options: ["ARP", "RARP", "proxy ARP", "none of the above"],
    correctOptionIndex: 2,
  },
  {
    id: 354,
    question:
      "In _______ forwarding, the destination address is a network address in the routing table",
    options: ["next-hop", "network-specific", "host-specific", "default"],
    correctOptionIndex: 1,
  },
  {
    id: 355,
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
    id: 356,
    question:
      "The Open Shortest Path First (OSPF) protocol is an intradomain routing protocol based on _______ routing.",
    options: ["distance vector", "link state", "path vector", "link path"],
    correctOptionIndex: 1,
  },
  {
    id: 357,
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
    id: 358,
    question:
      "What is the first address of a block of classless addresses if one of the addresses is 12.2.2.76/27?",
    options: ["12.2.2.0", "12.2.2.32", "12.2.2.64", "none of these"],
    correctOptionIndex: 2,
  },
  {
    id: 359,
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
    id: 360,
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
    id: 361,
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
    id: 362,
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
    id: 363,
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
    id: 364,
    question: "Stack works on the principles:",
    options: ["FCFS", "LIFO", "FCFS and LIFO", "SJF"],
    correctOptionIndex: 1,
  },
  {
    id: 365,
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
    id: 366,
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
    id: 367,
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
    id: 368,
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
    id: 369,
    question:
      "Which of the following traversal techniques lists the nodes of a binary search tree in ascending order?",
    options: ["Post-order", "In-order", "Pre-order", "Pre-Post order"],
    correctOptionIndex: 1,
  },
  {
    id: 370,
    question:
      "A method to provide secure transmission of email is called ____.",
    options: ["TLS", "SA", "IPSec", "PGP"],
    correctOptionIndex: 3,
  },
  {
    id: 371,
    question:
      "A packet whose destination is outside the local TCP/IP network segment is sent to ..............",
    options: ["File server", "DNS server", "DHCP server", "Default gateway"],
    correctOptionIndex: 3,
  },
  {
    id: 372,
    question:
      "As the data packet moves from the upper to the lower layers, headers are _______.",
    options: ["Added", "Removed", "Rearranged", "Modified"],
    correctOptionIndex: 0,
  },
  {
    id: 373,
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
    id: 374,
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
    id: 375,
    question:
      "Binary search tree has best case run-time complexity of O(log n). What could the worst case?",
    options: ["O(n)", "O(n^2)", "O(n^3)", "O(n log n)"],
    correctOptionIndex: 0,
  },
  {
    id: 376,
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
    id: 377,
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
    id: 378,
    question: "Re-balancing of AVL tree costs",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctOptionIndex: 1,
  },
  {
    id: 379,
    question: "Which one of the below mentioned is not a linear data structure",
    options: ["Queues", "Stacks", "Arrays", "Trees"],
    correctOptionIndex: 3,
  },
  {
    id: 380,
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
    id: 381,
    question:
      "A binary tree is generated by inserting in order of the following integers: 50, 15, 62, 5, 20, 58, 3, 8, 37, 60, 24 the number of nodes in the left of the root respectively is",
    options: ["(3,7)", "(7,3)", "(4,6)", "(6,4)"],
    correctOptionIndex: 3,
  },
  {
    id: 382,
    question: "A complete binary tree of level 5 has how many nodes?",
    options: ["15", "63", "25", "30"],
    correctOptionIndex: 1,
  },
  {
    id: 383,
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
    id: 384,
    question: "A full binary tree with n leaves contains ______ nodes",
    options: ["n", "log n", "2n - 1", "2n + 1"],
    correctOptionIndex: 2,
  },
  {
    id: 385,
    question: "A full binary tree with n non-leaf nodes contains ______ nodes",
    options: ["log n", "2n", "2n - 1", "2n + 1"],
    correctOptionIndex: 3,
  },
  {
    id: 386,
    question: "A linked list is which type of data structure.",
    options: ["Linear", "Non Linear", "Hierarchical", "None"],
    correctOptionIndex: 0,
  },
  {
    id: 387,
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
    id: 388,
    question:
      "A multi-dimensional array array[0:2, 10:20, 3:4, -10:2] contains _________ elements.",
    options: ["240", "858", "390", "160"],
    correctOptionIndex: 1,
  },
  {
    id: 389,
    question: "A node carries information regarding",
    options: ["Data", "Link", "Data and Link", "None"],
    correctOptionIndex: 2,
  },
  {
    id: 390,
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
    id: 391,
    question:
      "A two-dimensional array array[1:3, 1:3] contains _________ elements.",
    options: ["3", "6", "9", "7"],
    correctOptionIndex: 2,
  },
  {
    id: 392,
    question:
      "An algorithm must be generic enough to solve all problems of a particular class. This property is termed as ____________.",
    options: ["Finiteness", "Definiteness", "Generality", "Effectiveness"],
    correctOptionIndex: 2,
  },
  {
    id: 393,
    question: "Answer of following postfix expression: 2,3,10+*8,2/-",
    options: ["20", "22", "23", "25"],
    correctOptionIndex: 1,
  },
  {
    id: 394,
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
    id: 395,
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
    id: 396,
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
    id: 397,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. How many children does the root have?",
    options: ["2", "4", "8", "9"],
    correctOptionIndex: 0,
  },
  {
    id: 398,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. How many descendants does the root have?",
    options: ["2", "4", "8", "9"],
    correctOptionIndex: 2,
  },
  {
    id: 399,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. How many leaves does it have?",
    options: ["2", "4", "7", "9"],
    correctOptionIndex: 1,
  },
  {
    id: 400,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. How many of the nodes have at least one sibling?",
    options: ["2", "4", "3", "9"],
    correctOptionIndex: 2,
  },
  {
    id: 401,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. What is the depth of the tree?",
    options: ["2", "3", "4", "9"],
    correctOptionIndex: 1,
  },
  {
    id: 402,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. What is the value stored in the parent node of the node containing 30?",
    options: ["2", "10", "11", "14"],
    correctOptionIndex: 2,
  },
  {
    id: 403,
    question:
      "Consider the following tree with 9 nodes. Root = 14, Children(14) = 2,11, Children(2) = 1,3, Children(11) = 10,30, Children(3) = 7, Children(10) = 40. Which pair of nodes have equal number of descendants?",
    options: ["(2,11)", "(1,3)", "(10,30)", "(7,14)"],
    correctOptionIndex: 1,
  },
  {
    id: 404,
    question:
      "For the array A[1:u1,1:u2] where α is the base address, A[i,1] has its address given by",
    options: ["(i − 1)u2", "α + (i − 1)u2", "α + i * u2", "α + (i − 1) * u1"],
    correctOptionIndex: 1,
  },
  {
    id: 405,
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
    id: 406,
    question: "In a Single Link List ______ node contains no links.",
    options: ["First", "Last", "Last but one", "middle"],
    correctOptionIndex: 1,
  },
  {
    id: 407,
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
    id: 408,
    question:
      "In Single Linked List a node contain minimum how many fields (assuming one for data).",
    options: ["2", "3", "1", "0"],
    correctOptionIndex: 0,
  },
  {
    id: 409,
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
    id: 410,
    question: "In which notation operator comes between operand?",
    options: ["Infix", "Inorder", "Postfix", "Prefix"],
    correctOptionIndex: 0,
  },
  {
    id: 411,
    question: "In which notation operator comes after operand?",
    options: ["Infix", "Postfix", "Prefix", "Preorder"],
    correctOptionIndex: 1,
  },
  {
    id: 412,
    question: "In which notation operator comes before operand?",
    options: ["Infix", "Postfix", "Postorder", "Prefix"],
    correctOptionIndex: 3,
  },
  {
    id: 413,
    question:
      "Input instance for which algorithm take maximum possible time is called",
    options: ["Worst Case", "Best Case", "Average Case", "Null Case"],
    correctOptionIndex: 0,
  },
  {
    id: 414,
    question:
      "Input instance for which algorithm take minimum possible time is called",
    options: ["Worst case", "Best case", "Average case", "Null Case"],
    correctOptionIndex: 1,
  },
  {
    id: 415,
    question: "Linear order linked list is provided through _________",
    options: ["variables", "arrays", "Pointer", "Strings"],
    correctOptionIndex: 2,
  },
  {
    id: 416,
    question: "Linked list START = NULL is ____________",
    options: ["Underflow", "Overflow", "Full", "Empty"],
    correctOptionIndex: 0,
  },
  {
    id: 417,
    question: "Queue works on the principles:",
    options: ["FCFS", "LIFO", "FCFS and LIFO", "Neither FCFS nor LIFO"],
    correctOptionIndex: 0,
  },
  {
    id: 418,
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
    id: 419,
    question:
      "Single link list performs which of the following methods 1) Insertion 2) Modification 3) Searching",
    options: ["1 and 2", "2 and 3", "1 and 3", "1, 2, 3"],
    correctOptionIndex: 3,
  },
  {
    id: 420,
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
    id: 421,
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
    id: 422,
    question: "The infix expression for the postfix expression : 5,6,2+*12,4/-",
    options: ["5*(6+2)-12/4", "5+6-2*12/4", "(5+6)-2/12*4", "None"],
    correctOptionIndex: 0,
  },
  {
    id: 423,
    question: "The list with no node is called as",
    options: ["Empty list", "Zero list", "Null list", "Vacant list"],
    correctOptionIndex: 0,
  },
  {
    id: 424,
    question: "The maximum number of nodes on level i of a binary tree is",
    options: ["2^i", "3^i", "i+1", "2i+2"],
    correctOptionIndex: 0,
  },
  {
    id: 425,
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
    id: 426,
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
    id: 427,
    question:
      "The number of swapping needed to sort the numbers 8, 22, 7, 9, 31, 19, 5, 13 in ascending order, using insertion sort is",
    options: ["11", "12", "13", "14"],
    correctOptionIndex: 3,
  },
  {
    id: 428,
    question: "The postfix expression for the infix expression : a+b*c/d",
    options: ["abc*d/+", "a*bcd/+", "ab*cd/+", "abcd*/+"],
    correctOptionIndex: 0,
  },
  {
    id: 429,
    question: "The prefix expression for the infix expression : a+b*c/d",
    options: ["+ab*/cd", "+*ab/cd", "+a*b/cd", "None"],
    correctOptionIndex: 3,
  },
  {
    id: 430,
    question: "The term MAX and MIN is related to the",
    options: ["Stacks", "Queues", "Heaps", "Splays"],
    correctOptionIndex: 2,
  },
  {
    id: 431,
    question:
      "The time complexity of linear search algorithm over an array of n element is",
    options: ["O(log2 n)", "O(n)", "O(n log2 n)", "O(n^2)"],
    correctOptionIndex: 1,
  },
  {
    id: 432,
    question:
      "The time complexity of the algorithm in a best case would be expressed as",
    options: ["O(1)", "O(n)", "O(n2)", "O(n+1)"],
    correctOptionIndex: 0,
  },
  {
    id: 433,
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
    id: 434,
    question:
      "Traversing binary tree first root and then left and right subtrees called _____________ traversal.",
    options: ["Postorder", "Preorder", "In order", "Binary order"],
    correctOptionIndex: 1,
  },
  {
    id: 435,
    question: "Type of storage is used to represent Lists",
    options: ["Random", "Sequential", "Dynamic", "Logical"],
    correctOptionIndex: 2,
  },
  {
    id: 436,
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
    id: 437,
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
    id: 438,
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
    id: 439,
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
    id: 440,
    question:
      "Which case analysis appropriate when the response time of the algorithm is critical?",
    options: ["Worst case", "Best case", "Average Case", "Null case"],
    correctOptionIndex: 0,
  },
  {
    id: 441,
    question: "Which data structure will you use to evaluate prefix notation?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctOptionIndex: 1,
  },
  {
    id: 442,
    question: "Which is not an application of array?",
    options: ["Dense matrix", "Ordered list", "Sparse Matrix", "Linked List"],
    correctOptionIndex: 3,
  },
  {
    id: 443,
    question: "Which of the following case does not exist in complexity theory",
    options: ["Best case", "Worst case", "Average case", "Null case"],
    correctOptionIndex: 3,
  },
  {
    id: 444,
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
    id: 445,
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
    id: 446,
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
    id: 447,
    question: "Which of the following is not the operation on Queue?",
    options: ["Insertion", "Deletion", "Updating", "Displaying"],
    correctOptionIndex: 2,
  },
  {
    id: 448,
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
    id: 449,
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
    id: 450,
    question: "Which of the following name related to stacks?",
    options: ["Push", "Pop", "Top", "All"],
    correctOptionIndex: 3,
  },
  {
    id: 451,
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
    id: 452,
    question: "The number of elements in array Array[1:u] is given by",
    options: ["(1 - u)", "(u)", "(u – 1 + 1)", "(u – 1 - 1)"],
    correctOptionIndex: 1,
  },
  {
    id: 453,
    question: "Which of the following sorting method is unstable?",
    options: ["Insertion", "Bubble", "Selection", "Heap"],
    correctOptionIndex: 3,
  },
  {
    id: 454,
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
    id: 455,
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
    id: 456,
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
    id: 457,
    question:
      "________ is a measure of the degree of interdependence between modules",
    options: ["Cohesion", "Coupling", "Corrosion", "None of the mentioned"],
    correctOptionIndex: 1,
  },
  {
    id: 458,
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
    id: 459,
    question:
      "The work associated with software engineering can be categorized into three generic phases which focuses on what, how and change respectively.",
    options: ["1,2,3", "2,1,3", "3,2,1", "3,1,2"],
    correctOptionIndex: 2,
  },
  {
    id: 460,
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
    id: 461,
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
    id: 462,
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
    id: 463,
    question:
      "Which of the following data structure can't store the non-homogeneous data elements?",
    options: ["Arrays", "Records", "Pointers", "None"],
    correctOptionIndex: 0,
  },
  {
    id: 464,
    question:
      "Given two sorted lists of size m and n respectively. The number of comparisons needed in the worst case by merge sort algorithm will be?",
    options: ["mn", "max(m,n)", "min(m,n)", "m+n-1"],
    correctOptionIndex: 3,
  },
  {
    id: 465,
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
    id: 466,
    question:
      "Each data item in a record may be a group item composed of sub-items; those items which are indecomposable are called",
    options: ["elementary items", "atoms", "scalars", "all of above"],
    correctOptionIndex: 0,
  },
  {
    id: 467,
    question:
      "Which of the following data structure store the NON homogeneous data elements?",
    options: ["Arrays", "Records", "Pointers", "None"],
    correctOptionIndex: 0,
  },
  {
    id: 468,
    question:
      "A ________ is a data-structure that organizes data similar to a line in the super-market, where the first one in the line is the first to be out:",
    options: ["Queues", "Stacks", "Arrays", "Structures"],
    correctOptionIndex: 0,
  },
  {
    id: 469,
    question:
      "A binary tree with n internal nodes has a max. of external nodes equal to:",
    options: ["n", "n+1", "n-1", "2n"],
    correctOptionIndex: 1,
  },
  {
    id: 470,
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
    id: 471,
    question: "A max-heap is also known as:",
    options: ["increasing heap", "ascending heap", "High heap", "Big heap"],
    correctOptionIndex: 1,
  },
  {
    id: 472,
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
    id: 473,
    question:
      "A set of several trees that are not linked to each other in any way",
    options: ["Forests", "Graphs", "B Trees", "AVL trees"],
    correctOptionIndex: 0,
  },
  {
    id: 474,
    question: "A sparse matrix can also be represented using:",
    options: ["queue", "Stack", "tree", "Linked List"],
    correctOptionIndex: 3,
  },
  {
    id: 475,
    question: "A tree having any number of nodes:",
    options: ["Binary tree", "General tree", "AVL tree", "B tree"],
    correctOptionIndex: 1,
  },
  {
    id: 476,
    question:
      "A tree in which the value in every node is more than node-values in its left subtree and less than node-values in its right subtree:",
    options: ["Binary search tree", "AVL tree", "B tree", "Splay tree"],
    correctOptionIndex: 0,
  },
  {
    id: 477,
    question:
      "All the non-leaf nodes except the root node in a multi-way search tree of order n have at least ______ children",
    options: ["n", "n-1", "2n", "n/2"],
    correctOptionIndex: 3,
  },
  {
    id: 478,
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
    id: 479,
    question: "Complexity of heap sort",
    options: ["O(n)", "O(2n)", "O(logn)", "O(nlogn)"],
    correctOptionIndex: 3,
  },
  {
    id: 480,
    question: "Heaps are of two types:",
    options: ["High and low", "Max and Min", "B and B+", "Complete and Binary"],
    correctOptionIndex: 1,
  },
  {
    id: 481,
    question: "Height of a full binary tree with n internal nodes is:",
    options: ["n", "log n", "n log n", "n-1"],
    correctOptionIndex: 1,
  },
  {
    id: 482,
    question: "If there are more than one paths between two nodes, it is a:",
    options: ["tree", "list", "graph", "path"],
    correctOptionIndex: 2,
  },
  {
    id: 483,
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
    id: 484,
    question: "Shell sort is an improvisation over ______ sort.",
    options: ["quick", "insertion", "merge", "selection"],
    correctOptionIndex: 1,
  },
  {
    id: 485,
    question:
      "The algorithm used in dynamic memory allocation with minimum time:",
    options: ["First fit", "Best fit", "Worst fit", "Next fit"],
    correctOptionIndex: 0,
  },
  {
    id: 486,
    question: "The degree of a leaf node is:",
    options: ["-1", "1", "0", "undefined"],
    correctOptionIndex: 2,
  },
  {
    id: 487,
    question: "The depth of a complete binary tree is given by:",
    options: ["n log n", "log n", "n log n +1", "log n +1"],
    correctOptionIndex: 3,
  },
  {
    id: 488,
    question:
      "The inorder traversal of tree will yield a sorted listing of elements of tree:",
    options: ["Binary tree", "Binary Search Tree", "Heaps", "Splays"],
    correctOptionIndex: 1,
  },
  {
    id: 489,
    question: "The leaf nodes of a tree have height equal to:",
    options: ["height of the tree", "zero", "one", "degree"],
    correctOptionIndex: 1,
  },
  {
    id: 490,
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
    id: 491,
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
    id: 492,
    question:
      "To reduce disk-accesses while searching for a record, the tree used is ______ tree.",
    options: ["binary search tree", "General tree", "B tree", "AVL tree"],
    correctOptionIndex: 2,
  },
  {
    id: 493,
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
    id: 494,
    question:
      "Which of the following abstract data types is not used by integer abstract data type group?",
    options: ["Short", "int", "Float", "Long"],
    correctOptionIndex: 2,
  },
  {
    id: 495,
    question:
      "Which of the following data structures can’t store non-homogeneous data-elements:",
    options: ["Arrays", "Records", "Pointers", "Structures"],
    correctOptionIndex: 0,
  },
  {
    id: 496,
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
    id: 497,
    question:
      "While calculating time-complexity, the program-time which is considered is:",
    options: ["compile time", "Execution time", "run time", "Analysis time"],
    correctOptionIndex: 1,
  },
  {
    id: 498,
    question:
      "The TTL field has value 10. How many routers (max) can process this datagram?",
    options: ["11", "5", "10", "1"],
    correctOptionIndex: 2,
  },
  {
    id: 499,
    question: "Which field helps to check rearrangement of the fragments?",
    options: ["offset", "flag", "TTL", "identifier"],
    correctOptionIndex: 0,
  },
  {
    id: 500,
    question: "The assignment operator is denoted by",
    options: ["->", "<-", "=", "=="],
    correctOptionIndex: 2,
  },
  {
    id: 501,
    question:
      "____ means that the data used during the execution of a transaction cannot be used by a second transaction until the first one is completed.",
    options: ["Consistency", "Atomicity", "Durability", "Isolation"],
    correctOptionIndex: 3,
  },
  {
    id: 502,
    question:
      "________ has made PL/SQL code run faster without requiring any additional work on the part of the programmer.",
    options: ["SQL Server", "My SQL", "Oracle", "SQL Lite"],
    correctOptionIndex: 2,
  },
  {
    id: 503,
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
    id: 504,
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
    id: 505,
    question: "Which of the following is the oldest database model?",
    options: ["Relational", "Deductive", "Physical", "Network"],
    correctOptionIndex: 3,
  },
  {
    id: 506,
    question:
      "________ combines the data manipulating power of SQL with the data processing power of Procedural languages.",
    options: ["PL/SQL", "SQL", "Advanced SQL", "PQL"],
    correctOptionIndex: 0,
  },

  {
    id: 507,
    question:
      "__________ is a procedural extension of Oracle – SQL that offers language constructs similar to those in imperative programming languages.",
    options: ["SQL", "PL/SQL", "Advanced SQL", "PQL"],
    correctOptionIndex: 1,
  },
  {
    id: 508,
    question:
      "__________ provides option for entering SQL queries as execution time, rather than at the development stage",
    options: ["PL/SQL", "SQL*Plus", "SQL", "Dynamic SQL"],
    correctOptionIndex: 3,
  },
  {
    id: 509,
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
    id: 510,
    question:
      "A __________ is an explicit numeric, character, string or Boolean value not represented by an identifier.",
    options: ["Comments", "Literals", "Delimiters", "Identifiers"],
    correctOptionIndex: 1,
  },
  {
    id: 511,
    question:
      "A collection of data designed to be used by different people is called a/an",
    options: ["Organization", "Database", "Relationship", "Schema"],
    correctOptionIndex: 1,
  },
  {
    id: 512,
    question: "A line of PL/SQL text contains groups of characters known as",
    options: ["Lexical Units", "Literals", "Textual Units", "Identifiers"],
    correctOptionIndex: 0,
  },
  {
    id: 513,
    question:
      "A table can be logically connected to another table by defining a",
    options: ["Super key", "Candidate key", "Primary key", "Unique key"],
    correctOptionIndex: 2,
  },
  {
    id: 514,
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
    id: 515,
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
    id: 516,
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
    id: 517,
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
    id: 518,
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
    id: 519,
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
    id: 520,
    question: "Identify the characteristics of transactions",
    options: ["Atomicity", "Durability", "Isolation", "All of the mentioned"],
    correctOptionIndex: 3,
  },
  {
    id: 521,
    question:
      "If no header is specified, the block is said to be an ______ PL/SQL block",
    options: ["Strong", "Weak", "Empty", "Anonymous"],
    correctOptionIndex: 3,
  },
  {
    id: 522,
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
    id: 523,
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
    id: 524,
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
    id: 525,
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
    id: 526,
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
    id: 527,
    question:
      "The ______ operation, denoted by −, allows us to find tuples that are in one relation but are not in another.",
    options: ["Union", "Set-difference", "Difference", "Intersection"],
    correctOptionIndex: 1,
  },
  {
    id: 528,
    question:
      "The best data structure to check whether an arithmetic expression has balanced parentheses is a",
    options: ["Queue", "List", "Stack", "Array"],
    correctOptionIndex: 2,
  },
  {
    id: 529,
    question:
      "The database system must take special actions to ensure that transactions operate properly without interference from concurrently executing database statements. This property is referred to as",
    options: ["Atomicity", "Durability", "Isolation", "All of the mentioned"],
    correctOptionIndex: 2,
  },
  {
    id: 530,
    question:
      "The Oracle RDBMS uses the ____ statement to declare a new transaction start and its properties.",
    options: ["BEGIN", "SET TRANSACTION", "BEGIN TRANSACTION", "COMMIT"],
    correctOptionIndex: 1,
  },
  {
    id: 531,
    question: "The property of transaction that persists all the crashes is",
    options: ["Atomicity", "Durability", "Isolation", "All of the mentioned"],
    correctOptionIndex: 1,
  },
  {
    id: 532,
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
    id: 533,
    question:
      "The SQL statement SELECT SUBSTR('123456789', INSTR('abcabcabc','b'), 4) FROM EMP; prints",
    options: ["6789", "2345", "1234", "456789"],
    correctOptionIndex: 1,
  },
  {
    id: 534,
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
    id: 535,
    question: "We use ______ name PL/SQL program objects and units.",
    options: ["Lexical Units", "Literals", "Delimiters", "Identifiers"],
    correctOptionIndex: 3,
  },
  {
    id: 536,
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
    id: 537,
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
    id: 538,
    question:
      "Which character function can be used to return a specified portion of a character string?",
    options: ["INSTR", "SUBSTRING", "SUBSTR", "POS"],
    correctOptionIndex: 2,
  },
  {
    id: 539,
    question: "Which is a join condition contains an equality operator:",
    options: ["Equijoins", "Cartesian", "Natural", "Left"],
    correctOptionIndex: 0,
  },
  {
    id: 540,
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
    id: 541,
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
    id: 542,
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
    id: 543,
    question: "Which of the following has 'all-or-none' property?",
    options: ["Atomicity", "Durability", "Isolation", "All of the mentioned"],
    correctOptionIndex: 0,
  },
  {
    id: 544,
    question:
      "Which of the following is an attribute that can uniquely identify a row in a table?",
    options: ["Secondary key", "Candidate key", "Foreign key", "Alternate key"],
    correctOptionIndex: 1,
  },
  {
    id: 545,
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
    id: 546,
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
    id: 547,
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
    id: 548,
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
    id: 549,
    question:
      "Which of the following SQL command can be used to modify existing data in a database table?",
    options: ["MODIFY", "UPDATE", "CHANGE", "NEW"],
    correctOptionIndex: 1,
  },
  {
    id: 550,
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
    id: 551,
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
    id: 552,
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
    id: 553,
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
    id: 554,
    question:
      "The time required to search an element in a linked list of length n is",
    options: ["O(n^2)", "O(n log2 n)", "O(n)", "O(log2 n)"],
    correctOptionIndex: 2,
  },
  {
    id: 555,
    question:
      "________ states that only valid data will be written to the database.",
    options: ["Consistency", "Atomicity", "Durability", "Isolation"],
    correctOptionIndex: 0,
  },
  {
    id: 556,
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
    id: 557,
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
    id: 558,
    question: "Which traversal pairs uniquely identify a labeled binary tree?",
    options: ["(i) only", "(ii), (iii)", "(iii) only", "(iv) only"],
    correctOptionIndex: 1,
  },
  {
    id: 559,
    question:
      "In a complete binary tree, the number of leaves with n internal nodes is",
    options: ["2n", "2(n-1)+1", "n+1", "n"],
    correctOptionIndex: 2,
  },
  {
    id: 560,
    question:
      "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is",
    options: ["log 2n", "n/2", "log n-1", "n"],
    correctOptionIndex: 3,
  },
  {
    id: 561,
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
    id: 562,
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
    id: 563,
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
    id: 564,
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
    id: 565,
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
    id: 566,
    question: "One possible BFS order of the graph is",
    options: ["MNOPQR", "NQMPOR", "QMNPRO", "QMNPOR"],
    correctOptionIndex: 3,
  },
  {
    id: 567,
    question: "Height of the BST after inserting 10,1,3,5,15,12,16 is",
    options: ["2", "3", "4", "6"],
    correctOptionIndex: 1,
  },
  {
    id: 568,
    question: "Maximum nodes in a binary tree of height h is",
    options: ["2^(h-1)-1", "2^(h+1)-1", "2^h+1", "2^(h+1)"],
    correctOptionIndex: 1,
  },
  {
    id: 569,
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
    id: 570,
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
    id: 571,
    question:
      "Data structure used to implement Dijkstra’s algorithm in linear time for unweighted graphs",
    options: ["Queue", "Stack", "B-Tree", "Array"],
    correctOptionIndex: 0,
  },
  {
    id: 572,
    question: "Maximum height of AVL tree with 7 nodes",
    options: ["2", "3", "4", "5"],
    correctOptionIndex: 1,
  },
  {
    id: 573,
    question: "Sorting algorithm with lowest worst case complexity",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Selection Sort"],
    correctOptionIndex: 0,
  },
  {
    id: 574,
    question: "In-place sorting algorithm requiring minimum swaps",
    options: ["Quick sort", "Insertion sort", "Selection sort", "Heap sort"],
    correctOptionIndex: 2,
  },
  {
    id: 575,
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
    id: 576,
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
    id: 577,
    question:
      "The following sequence of operation is performed on stack: push(1), push(2), pop, push(1), push(2), pop, pop, pop, push(2), pop. The sequence of popped out values are?",
    options: ["2,2,1,1,2", "2,2,1,2,2", "2,1,2,2,1", "2,1,2,2,2"],
    correctOptionIndex: 0,
  },
  {
    id: 578,
    question:
      "The number of swapping needed to sort numbers 8,22,7,9,31,19,5,13 in ascending order using bubble sort is?",
    options: ["10", "12", "14", "16"],
    correctOptionIndex: 2,
  },
  {
    id: 579,
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
    id: 580,
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
    id: 581,
    question:
      "A search begins the search with the element that is located in the middle of array",
    options: ["Serial", "Random", "Parallel", "Binary"],
    correctOptionIndex: 3,
  },
  {
    id: 582,
    question:
      "From a complete graph, by removing maximum ______ edges, we can construct a spanning tree.",
    options: ["e-n+1", "n-e+1", "n+e-1", "e-n-1"],
    correctOptionIndex: 0,
  },
  {
    id: 583,
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
    id: 584,
    question: "The complexity of linear search algorithm is",
    options: ["O(n)", "O(log n)", "O(log n)", "O(n log n)"],
    correctOptionIndex: 0,
  },
  {
    id: 585,
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
    id: 586,
    question:
      "Which of the below given sorting techniques has highest best-case runtime complexity?",
    options: ["Quick sort", "Selection sort", "Insertion sort", "Bubble sort"],
    correctOptionIndex: 1,
  },
  {
    id: 587,
    question: "Which of the following algorithm is not stable?",
    options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Insertion Sort"],
    correctOptionIndex: 1,
  },
  {
    id: 588,
    question: "Which of the following sorting procedure is the slowest?",
    options: ["Quick Sort", "Heap Sort", "Shell Sort", "Bubble Sort"],
    correctOptionIndex: 3,
  },
  {
    id: 589,
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
    id: 590,
    question: "Which one of the below is not divide and conquer approach?",
    options: ["Insertion Sort", "Merge Sort", "Shell Sort", "Heap Sort"],
    correctOptionIndex: 1,
  },
  {
    id: 591,
    question:
      "Relational Algebra is a ______ query language that takes two relation as input and produces another relation as output of the query.",
    options: ["Relational", "Structural", "Procedural", "Fundamental"],
    correctOptionIndex: 2,
  },
  {
    id: 592,
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
    id: 593,
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
    id: 594,
    question: "The context diagram is also known as:",
    options: ["Level-0 DFD", "Level-1 DFD", "Level-2 DFD", "Level-3 DFD"],
    correctOptionIndex: 0,
  },
  {
    id: 595,
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
    id: 596,
    question: "How long is an IPv6 address?",
    options: ["32 bits", "128 bits", "128 bytes", "64 bits"],
    correctOptionIndex: 1,
  },
  {
    id: 597,
    question: "Loss in signal power as light travels down the fiber is called?",
    options: ["Attenuation", "Propagation", "Scattering", "Interruption"],
    correctOptionIndex: 0,
  },
  {
    id: 598,
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
    id: 599,
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
    id: 600,
    question:
      "Although they've fallen out of favor, which device is used to connect different network segments and manage traffic between them?",
    options: ["Bridge", "Hub", "Gateway", "Repeater"],
    correctOptionIndex: 0,
  },
  {
    id: 601,
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
    id: 602,
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
    id: 603,
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
    id: 604,
    question: "Star Topology is based on a central device that can be ______?",
    options: ["Hub", "Switch", "Router", "Both Hub and Switch"],
    correctOptionIndex: 3,
  },
  {
    id: 605,
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
    id: 606,
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
    id: 607,
    question: "What protocols are used to configure trunking on a switch?",
    options: ["VLAN Trunking Protocol", "VLAN", "802.1Q", "ISL"],
    correctOptionIndex: 2,
  },
  {
    id: 608,
    question:
      "Which device takes data sent from one network device and forwards it to all devices on the network regardless of the intended recipient?",
    options: ["DNS Server", "Switch", "Hub", "Gateway"],
    correctOptionIndex: 2,
  },
  {
    id: 609,
    question:
      "Which device forwards data to the destination node based on MAC address?",
    options: ["Hub", "Switch", "Gateway", "Modem"],
    correctOptionIndex: 1,
  },
  {
    id: 610,
    question: "Which of the following services use TCP?",
    options: ["DHCP", "SMTP", "FTP", "TFTP"],
    correctOptionIndex: 1,
  },
  {
    id: 611,
    question:
      "Which term describes a hardware or software device that protects networks from outside threats?",
    options: ["NIC", "Gateway", "Firewall", "Hub"],
    correctOptionIndex: 2,
  },
  {
    id: 612,
    question: "Which protocol does Ping use?",
    options: ["TCP", "ARP", "ICMP", "BootP"],
    correctOptionIndex: 2,
  },
  {
    id: 613,
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
    id: 614,
    question:
      "You have 10 users plugged into a hub running 10Mbps half-duplex. There is a server connected to the switch running 10Mbps half-duplex as well. How much bandwidth does each host have to the server?",
    options: ["100 kbps", "10 Mbps", "1 Mbps", "2 Mbps"],
    correctOptionIndex: 1,
  },
  {
    id: 615,
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
    id: 616,
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
    id: 617,
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
    id: 618,
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
    id: 619,
    question:
      "A noiseless 3 KHz channel transmits bits with binary level signals. What is the maximum data rate?",
    options: ["3 Kbps", "6 Kbps", "12 Kbps", "24 Kbps"],
    correctOptionIndex: 1,
  },
  {
    id: 620,
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
    id: 621,
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
    id: 622,
    question:
      "Avalanche photodiode receivers can detect bits of transmitted data by receiving",
    options: ["100 photons", "200 photons", "300 photons", "400 photons"],
    correctOptionIndex: 1,
  },
  {
    id: 623,
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
    id: 624,
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
    id: 625,
    question:
      "Eight stations are competing for the use of a shared channel using the Adaptive Tree Walk Protocol. If stations 7 and 8 suddenly become ready at once, how many bit slots are needed to resolve the contention?",
    options: ["7 slots", "5 slots", "10 slots", "14 slots"],
    correctOptionIndex: 0,
  },
  {
    id: 626,
    question:
      "Frames from one LAN can be transmitted to another LAN via the device",
    options: ["Router", "Bridge", "Repeater", "Modem"],
    correctOptionIndex: 1,
  },
  {
    id: 627,
    question:
      "How many bits internet address is assigned to each host on a TCP/IP internet which is used in all communications with the host?",
    options: ["16 bits", "32 bits", "48 bits", "64 bits"],
    correctOptionIndex: 1,
  },
  {
    id: 628,
    question:
      "How many digits of the DNIC (Data Network Identification Code) identify the country?",
    options: ["first three", "first four", "first five", "first six"],
    correctOptionIndex: 0,
  },
  {
    id: 629,
    question:
      "How many hosts are attached to each of the local area networks at your site?",
    options: ["128", "254", "256", "64"],
    correctOptionIndex: 1,
  },
  {
    id: 630,
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
    id: 631,
    question:
      "If you get both local and remote echoes, every character you type will appear on the screen",
    options: ["once", "twice", "three times", "never"],
    correctOptionIndex: 1,
  },
  {
    id: 632,
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
    id: 633,
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
    id: 634,
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
    id: 635,
    question:
      "The Floyd-Warshall all pairs shortest path algorithm computes the shortest paths between each pair of nodes in",
    options: ["O(log n)", "O(log2 n)", "O(n^2)", "O(n^3)"],
    correctOptionIndex: 3,
  },
  {
    id: 636,
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
    id: 637,
    question:
      "The probability that a single bit will be in error on a typical public telephone line using 4800 bps modem is 10^-3. If no error detection mechanism is used, the residual error rate for a communication line using 9-bit frames is approximately",
    options: ["0.003", "0.009", "0.991", "0.999"],
    correctOptionIndex: 1,
  },
  {
    id: 638,
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
    id: 639,
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
    id: 640,
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
    id: 641,
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
    id: 642,
    question:
      "Usually it takes 10 bits to represent one character. How many characters can be transmitted at a speed of 1200 BPS?",
    options: ["10", "12", "120", "1200"],
    correctOptionIndex: 2,
  },
  {
    id: 643,
    question:
      "What are the most commonly used transmission speeds in BPS used in data communication?",
    options: ["300", "1200", "2400", "9600"],
    correctOptionIndex: 3,
  },
  {
    id: 644,
    question: "What can greatly reduce TCP/IP configuration problems?",
    options: ["WINS Server", "WINS Proxy", "DHCP Server", "PDC"],
    correctOptionIndex: 2,
  },
  {
    id: 645,
    question: "What is the default subnet mask for a Class C network?",
    options: ["127.0.0.1", "255.0.0.0", "255.255.0.0", "255.255.255.0"],
    correctOptionIndex: 3,
  },
  {
    id: 646,
    question: "What is the port number for NNTP?",
    options: ["119", "80", "79", "70"],
    correctOptionIndex: 0,
  },
  {
    id: 647,
    question:
      "What part of 192.168.10.51 is the Network ID assuming a default subnet mask?",
    options: ["192", "192.168.10", "0.0.0.5", "51"],
    correctOptionIndex: 1,
  },
  {
    id: 648,
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
    id: 649,
    question:
      "Which condition is used to transmit two packets over a medium at the same time?",
    options: ["Contention", "Collision", "Synchronous", "Asynchronous"],
    correctOptionIndex: 1,
  },
  {
    id: 650,
    question:
      "Which device is used to connect two systems especially if the systems use different protocols?",
    options: ["Hub", "Bridge", "Gateway", "Repeater"],
    correctOptionIndex: 2,
  },
  {
    id: 651,
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
    id: 652,
    question: "Which device is used for modulation and demodulation?",
    options: ["Modem", "Protocols", "Gateway", "Multiplexer"],
    correctOptionIndex: 0,
  },
  {
    id: 653,
    question:
      "Which TCP/IP protocol allows an application program on one machine to send a datagram to an application program on another machine?",
    options: ["UDP", "VMTP", "X.25", "SMTP"],
    correctOptionIndex: 0,
  },
  {
    id: 654,
    question:
      "Which of the following TCP/IP protocol is used for transferring electronic mail messages from one machine to another?",
    options: ["FTP", "SNMP", "SMTP", "RPC"],
    correctOptionIndex: 2,
  },
  {
    id: 655,
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
    id: 656,
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
    id: 657,
    question:
      "You have a class A network address 10.0.0.0 with 40 subnets, but are required to add 60 new subnets very soon. Which subnet mask should you assign?",
    options: ["255.240.0.0", "255.248.0.0", "255.255.255.255", "255.254.0.0"],
    correctOptionIndex: 3,
  },
  {
    id: 658,
    question:
      "Your company has a LAN in its downtown office and another LAN in the manufacturing plant in the suburbs. What device is needed to connect them?",
    options: ["Modem", "Cable", "Hub", "Router"],
    correctOptionIndex: 3,
  },
  {
    id: 659,
    question: "Hacking is the term given to ______ operation.",
    options: ["Carding", "Scutching", "Combing", "Pulling"],
    correctOptionIndex: 0,
  },
  {
    id: 660,
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
    id: 661,
    question:
      "How many collision domains are created when you segment a network with a 12-port switch?",
    options: ["1", "12", "5", "2"],
    correctOptionIndex: 1,
  },
  {
    id: 662,
    question: "In communication satellite, multiple repeaters are known as?",
    options: ["Detectors", "Modulators", "Stations", "Transponders"],
    correctOptionIndex: 3,
  },
  {
    id: 663,
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
    id: 664,
    question:
      "Which data communication method is used to transmit the data over a serial communication link?",
    options: ["Simplex", "Half-duplex", "Full-duplex", "Half and Full Duplex"],
    correctOptionIndex: 2,
  },
  {
    id: 665,
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
    id: 666,
    question: "______ is the term used to insert an element into stack.",
    options: ["Push", "Pull", "Pump", "Pop"],
    correctOptionIndex: 0,
  },
  {
    id: 667,
    question: "______ form of access is used to add/remove nodes from a stack.",
    options: ["LIFO", "FIFO", "Both A and B", "Neither A nor B"],
    correctOptionIndex: 0,
  },
  {
    id: 668,
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
    id: 669,
    question: "______ is the term used to delete an element from the stack.",
    options: ["Push", "Pull", "Pop", "Pump"],
    correctOptionIndex: 2,
  },
  {
    id: 670,
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
    id: 671,
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
    id: 672,
    question: "A connected graph T without any cycles is called ______.",
    options: ["Free graph", "No cyclic graph", "Non cycle graph", "Trees"],
    correctOptionIndex: 3,
  },
  {
    id: 673,
    question:
      "A pointer variable which contains the location at the top element of the stack is called ______.",
    options: ["Top", "Last", "Final", "End"],
    correctOptionIndex: 0,
  },
  {
    id: 674,
    question: "A queue is a ______.",
    options: ["FIFO", "FILO", "LOFI", "LIFO"],
    correctOptionIndex: 0,
  },
  {
    id: 675,
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
    id: 676,
    question: "A terminal node in a binary tree is called ______.",
    options: ["Root", "Leaf", "Child", "Branch"],
    correctOptionIndex: 1,
  },
  {
    id: 677,
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
    id: 678,
    question: "Breadth First Search is used in ______.",
    options: ["Binary trees", "Stacks", "Graphs", "Queues"],
    correctOptionIndex: 2,
  },
  {
    id: 679,
    question: "Deletion operation is done using ______ in a queue.",
    options: ["Front", "Rear", "Top", "List"],
    correctOptionIndex: 0,
  },
  {
    id: 680,
    question:
      "Every node N in a binary tree T except the root has a unique parent called the ______ of N.",
    options: ["Antecedents", "Predecessor", "Forerunner", "Precursor"],
    correctOptionIndex: 1,
  },
  {
    id: 681,
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
    id: 682,
    question: "Header node is used in .....",
    options: ["Stacks", "Queues", "Linked List", "Binary trees"],
    correctOptionIndex: 2,
  },
  {
    id: 683,
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
    id: 684,
    question:
      "In __________ tree, the heights of the two child subtrees of any node differ by at most one.",
    options: ["Binary tree", "Red Black Tree", "Splay tree", "AVL tree"],
    correctOptionIndex: 3,
  },
  {
    id: 685,
    question: "In a 2-tree, nodes with 0 children are called ............",
    options: ["Exterior node", "Outer node", "External node", "Inner node"],
    correctOptionIndex: 2,
  },
  {
    id: 686,
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
    id: 687,
    question: "In binary trees nodes with no successor are called ......",
    options: ["End nodes", "Terminal nodes", "Final nodes", "Last nodes"],
    correctOptionIndex: 1,
  },
  {
    id: 688,
    question:
      "In linked representation of stack ........ holds the elements of the stack.",
    options: ["INFO fields", "TOP fields", "LINK fields", "NULL fields"],
    correctOptionIndex: 0,
  },
  {
    id: 689,
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
    id: 690,
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
    id: 691,
    question: "Key value pair is usually seen in",
    options: ["Hash table", "Heaps", "Splay trees", "Skip lists"],
    correctOptionIndex: 0,
  },
  {
    id: 692,
    question:
      "Linked representation of binary tree needs ........ parallel arrays.",
    options: ["4", "2", "3", "5"],
    correctOptionIndex: 2,
  },
  {
    id: 693,
    question: "New nodes are added to the ........ of the queue.",
    options: ["Front", "Back", "Middle", "Both ends"],
    correctOptionIndex: 1,
  },
  {
    id: 694,
    question: "On which principle does queue work?",
    options: ["FILO", "LIFO", "LILO", "FIFO"],
    correctOptionIndex: 3,
  },
  {
    id: 695,
    question: "Other name for directed graph is ..........",
    options: ["Direct graph", "Digraph", "Dir-graph", "Directional graph"],
    correctOptionIndex: 1,
  },
  {
    id: 696,
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
    id: 697,
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
    id: 698,
    question: "Stack follows the strategy of ........",
    options: ["LIFO", "FIFO", "LRU", "RANDOM"],
    correctOptionIndex: 0,
  },
  {
    id: 699,
    question:
      "The ........ process updates the costs of all the vertices V connected to a vertex U if we could improve the best estimate of the shortest path.",
    options: ["Relaxation", "Improvement", "Shortening", "Costing"],
    correctOptionIndex: 0,
  },
  {
    id: 700,
    question: "The elements are removed from a stack in ........ order.",
    options: ["Hierarchical", "Reverse", "Alternate", "Sequential"],
    correctOptionIndex: 1,
  },
  {
    id: 701,
    question: "The insertion operation in the stack is called ........",
    options: ["Insert", "Push", "Pop", "Top"],
    correctOptionIndex: 1,
  },
  {
    id: 702,
    question:
      "The operation of processing each element in the list is known as ......",
    options: ["Sorting", "Merging", "Inserting", "Traversal"],
    correctOptionIndex: 3,
  },
  {
    id: 703,
    question:
      "The result of Prim's algorithm is a total time bound of ............",
    options: ["O(log n)", "O(m + n log n)", "O(mn)", "O(m log n)"],
    correctOptionIndex: 1,
  },
  {
    id: 704,
    question: "The retrieval of items in a stack is ........ operation.",
    options: ["Push", "Pop", "Retrieval", "Access"],
    correctOptionIndex: 1,
  },
  {
    id: 705,
    question: "The term enqueue and dequeue is related to",
    options: ["Trees", "Stacks", "Queues", "Linked Lists"],
    correctOptionIndex: 2,
  },
  {
    id: 706,
    question: "The term ParentTree and Child is related to",
    options: ["Trees", "Stacks", "Queues", "Linked Lists"],
    correctOptionIndex: 0,
  },
  {
    id: 707,
    question: "The term push and pop is related to",
    options: ["Trees", "Stacks", "Queues", "Linked Lists"],
    correctOptionIndex: 1,
  },
  {
    id: 708,
    question:
      "The time required in best case for search operation in binary tree is",
    options: ["O(n)", "O(1)", "O(2n)", "O(log n)"],
    correctOptionIndex: 1,
  },
  {
    id: 709,
    question:
      "To represent hierarchical relationship between elements, which data structure is suitable?",
    options: ["Dequeue", "Priority queue", "Tree", "Graph"],
    correctOptionIndex: 2,
  },
  {
    id: 710,
    question: "TREE[1] = NULL indicates tree is ........",
    options: ["Overflow", "Underflow", "Empty", "Full"],
    correctOptionIndex: 2,
  },
  {
    id: 711,
    question:
      "Trees are said ______ if they are similar and have same contents at corresponding nodes.",
    options: ["Duplicate", "Carbon copy", "Replica", "Copies"],
    correctOptionIndex: 3,
  },
  {
    id: 712,
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
    id: 713,
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
    id: 714,
    question:
      "Which data structure allows deleting data elements from and inserting at rear?",
    options: ["Stacks", "Queues", "Dequeues", "Binary Search Tree"],
    correctOptionIndex: 1,
  },
  {
    id: 715,
    question:
      "Which data structure is used in breadth first search of a graph to hold nodes?",
    options: ["Stack", "Queue", "Tree", "Array"],
    correctOptionIndex: 1,
  },
  {
    id: 716,
    question: "Which is the pointer associated with the stack?",
    options: ["FIRST", "FRONT", "TOP", "REAR"],
    correctOptionIndex: 2,
  },
  {
    id: 717,
    question:
      "Which of the following data structure can't store the non-homogeneous data elements?",
    options: ["Arrays", "Records", "Pointers", "Stacks"],
    correctOptionIndex: 0,
  },
  {
    id: 718,
    question: "Which of the following data structure is non linear type?",
    options: ["Strings", "Lists", "Stacks", "Graphs"],
    correctOptionIndex: 3,
  },
  {
    id: 719,
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
    id: 720,
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
    id: 721,
    question: "Which of the following name does not relate to stacks?",
    options: ["FIFO", "LIFO", "Piles", "Push down"],
    correctOptionIndex: 0,
  },
  {
    id: 722,
    question: "Which of the following data structure has cycles?",
    options: ["Graphs", "AVL trees", "Binary search trees", "Heap trees"],
    correctOptionIndex: 0,
  },
  {
    id: 723,
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
    id: 724,
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
    id: 725,
    question:
      "________ is a method repairing the garments where yarns are worked into the weave.",
    options: ["Threading", "Piecing", "Mending", "Darning"],
    correctOptionIndex: 3,
  },
  {
    id: 726,
    question:
      "________ is the assortment of fashion products that a company offers for sale at any point in time.",
    options: ["Fashion", "Collection", "Product range", "Gevels"],
    correctOptionIndex: 2,
  },
  {
    id: 727,
    question: "________ is work aids used in automatic pocket sewing.",
    options: ["Binders", "Folders", "Jigs", "Hemmers"],
    correctOptionIndex: 2,
  },
  {
    id: 728,
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
    id: 729,
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
    id: 730,
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
    id: 731,
    question:
      "The ______ refers to the rise, wide popularity or acceptance by masses of people, and then the decline in acceptance of style.",
    options: ["Fashion cycle", "Promotion", "Design for caste", "Research"],
    correctOptionIndex: 0,
  },
  {
    id: 732,
    question:
      "The fabric produced by the bonding and interlocking fibres are called as ______.",
    options: ["Felting", "Weaving", "Netting", "Knitting"],
    correctOptionIndex: 0,
  },
  {
    id: 733,
    question: "“One-click-try” concept is applicable for ______.",
    options: ["Just in Time", "RFID", "Texture Mapping", "Virtual fitting"],
    correctOptionIndex: 3,
  },
  {
    id: 734,
    question:
      "Which Indian dress symbolises the synthesis of Hindu-Muslim dress form?",
    options: ["Brahmika sari", "Chapkan", "Nehru jacket", "Gandhi's cap"],
    correctOptionIndex: 1,
  },
  {
    id: 735,
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
    id: 736,
    question:
      "Build & Fix Model is suitable for programming exercises of ______ LOC (Line of Code).",
    options: ["100-200", "200-400", "400-1000", "above 1000"],
    correctOptionIndex: 0,
  },
  {
    id: 737,
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
    id: 738,
    question:
      "______ read the data by reflecting pulses of laser beams on the surface.",
    options: ["Magnetic disk", "Optical disk", "Floppy disk", "ROM"],
    correctOptionIndex: 1,
  },
  {
    id: 739,
    question: "_____ is the process of determining correctness.",
    options: ["Prediction", "Verification", "Correctness", "Validation"],
    correctOptionIndex: 1,
  },
  {
    id: 740,
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
    id: 741,
    question: "_____ is usually expressed in terms of bugs/LOC.",
    options: ["MTTR", "Defect rate", "MTTF", "MHRT"],
    correctOptionIndex: 1,
  },
  {
    id: 742,
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
    id: 743,
    question:
      "_____ processor has to check continuously till device becomes ready for transferring the data?",
    options: ["DMA", "Interrupt-initiated I/O", "IOP", "DCP"],
    correctOptionIndex: 1,
  },
  {
    id: 744,
    question: "_____ usecase is not complete and has no initiation actors.",
    options: ["Concrete usecase", "Abstract usecase", "State", "Activity"],
    correctOptionIndex: 1,
  },
  {
    id: 745,
    question: "_____ are project results delivered to customers.",
    options: ["Data", "Deliverables", "Milestones", "Output"],
    correctOptionIndex: 1,
  },
  {
    id: 746,
    question:
      "_____ denotes the measure of strength of association established by a connection from one object to another.",
    options: ["Cohesion", "Coupling", "Decomposition", "Elaboration"],
    correctOptionIndex: 1,
  },
  {
    id: 747,
    question:
      "_____ diagrams show the configuration of run time processing elements and the software components, processes and objects that live in them.",
    options: ["Usecase", "Deployment", "Activity", "State Chart"],
    correctOptionIndex: 1,
  },
  {
    id: 748,
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
    id: 749,
    question:
      "_____ is the concept in which a process is copied into main memory from the secondary memory according to the requirement.",
    options: ["Swapping", "Segmentation", "Paging", "Demand paging"],
    correctOptionIndex: 3,
  },
  {
    id: 750,
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
    id: 751,
    question: "_____ are used to illustrate the boundaries of a system.",
    options: ["Data models", "Context models", "ER models", "Entity models"],
    correctOptionIndex: 1,
  },
  {
    id: 752,
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
    id: 753,
    question:
      "_____ describes the spiral model as a 'process model generator'.",
    options: ["Boehm", "Royce", "William Harry", "Pareto"],
    correctOptionIndex: 0,
  },
  {
    id: 754,
    question: "_____ is a scenario depicting a user system interaction.",
    options: ["Use Case", "Attribute", "Class", "Object"],
    correctOptionIndex: 0,
  },
  {
    id: 755,
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
    id: 756,
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
    id: 757,
    question: "_____ prototype is a simulation of the user interface.",
    options: ["Horizontal", "Analysis", "Domain", "Vertical"],
    correctOptionIndex: 0,
  },
  {
    id: 758,
    question: "_____ show task dependencies and the critical path.",
    options: ["Activity charts", "Bar chart", "State chart", "Event chart"],
    correctOptionIndex: 1,
  },
  {
    id: 759,
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
    id: 760,
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
    id: 761,
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
    id: 762,
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
    id: 763,
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
    id: 764,
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
    id: 765,
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
    id: 766,
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
    id: 767,
    question:
      "_____ is the number of functions which are called by function X.",
    options: ["Cohesion", "Coupling", "Fan-out", "Fan-in"],
    correctOptionIndex: 2,
  },
  {
    id: 768,
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
    id: 769,
    question:
      "________ are an alternative function-related measure to function points when 4GLs or similar languages are used for development.",
    options: ["Object class", "Object points", "Function points", "KLOC"],
    correctOptionIndex: 1,
  },
  {
    id: 770,
    question:
      "________ chart is a tool that depicts project as network diagram representing main events of project in both parallel and consecutive way.",
    options: ["PERT", "Bar", "Network", "Project"],
    correctOptionIndex: 0,
  },
  {
    id: 771,
    question:
      "________ in the textual description are considered to be methods of classes.",
    options: ["Adjectives", "Nouns", "Pronouns", "Verb"],
    correctOptionIndex: 3,
  },
  {
    id: 772,
    question:
      "________ is a version of software product developed in the early stages of product's life cycle for specific and experimental purposes.",
    options: ["Class", "Prototype", "Object", "Requirements"],
    correctOptionIndex: 1,
  },
  {
    id: 773,
    question:
      "________ is the interaction between software components or objects.",
    options: ["Aggregation", "Coupling", "Decomposition", "Cohesion"],
    correctOptionIndex: 3,
  },
  {
    id: 774,
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
    id: 775,
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
    id: 776,
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
    id: 777,
    question:
      "________ is an effective and decorative way of distributing fullness over a given area.",
    options: ["Gathers", "Flares", "Godets", "Pleats"],
    correctOptionIndex: 0,
  },
  {
    id: 778,
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
    id: 779,
    question: "________ are responsible for producing or consuming data.",
    options: ["Objects", "Class", "Viewpoints", "Input device"],
    correctOptionIndex: 2,
  },
  {
    id: 780,
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
    id: 781,
    question:
      "________ method is used to establish priority by serially connecting all devices that request an interrupt.",
    options: ["Vectored-interrupting", "Daisy chain", "Priority", "Polling"],
    correctOptionIndex: 1,
  },
  {
    id: 782,
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
    id: 783,
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
    id: 784,
    question:
      "________ is referred to as generalisation and is shown upwards rather than downwards in a hierarchy.",
    options: ["Aggregation", "Inheritance", "Composition", "Decomposition"],
    correctOptionIndex: 1,
  },
  {
    id: 785,
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
    id: 786,
    question: "________ show schedule against calendar time.",
    options: ["Activity chart", "Bar charts", "State chart", "Event chart"],
    correctOptionIndex: 1,
  },
  {
    id: 787,
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
    id: 788,
    question:
      "________ are rectangles with the name at the top, attributes in the middle section and operations in the bottom section.",
    options: ["DFD", "State machine", "Object classes", "Entity"],
    correctOptionIndex: 2,
  },
  {
    id: 789,
    question:
      "________ can be created quickly from reusable components plus mechanisms to glue them together.",
    options: ["Design", "Entity", "Prototypes", "Component"],
    correctOptionIndex: 2,
  },
  {
    id: 790,
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
    id: 791,
    question: "________ are the end-point of a process activity.",
    options: ["Deliverables", "Milestones", "Outcome", "Output"],
    correctOptionIndex: 1,
  },
  {
    id: 792,
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
    id: 793,
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
    id: 794,
    question:
      "________ is concerned with modifying the system after it is in use.",
    options: ["Design", "Coding", "Analysis", "Evolution"],
    correctOptionIndex: 3,
  },
  {
    id: 795,
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
    id: 796,
    question:
      "________ provides a scheme for refining subsystems or components of a software system.",
    options: ["Decomposition", "Design pattern", "Architecture", "MVC"],
    correctOptionIndex: 1,
  },
  {
    id: 797,
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
    id: 798,
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
    id: 799,
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
    id: 800,
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
    id: 801,
    question: "_____________ is the task of predicting correspondence.",
    options: ["Validation", "Verification", "Correctness", "Prediction"],
    correctOptionIndex: 0,
  },
  {
    id: 802,
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
    id: 803,
    question:
      "____________ are a natural way to structure requirements elicitation.",
    options: ["DBMS", "Viewpoints", "Process model", "Methods"],
    correctOptionIndex: 1,
  },
  {
    id: 804,
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
    id: 805,
    question:
      "___________ are assumptions or relationships among model elements specifying conditions that must be maintained as true.",
    options: ["Class", "Stereotype", "Constraints", "Node"],
    correctOptionIndex: 2,
  },
  {
    id: 806,
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
    id: 807,
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
    id: 808,
    question: "__________ don’t know what they really want.",
    options: ["Analyst", "Programmers", "Designers", "Stakeholders"],
    correctOptionIndex: 3,
  },
  {
    id: 809,
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
    id: 810,
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
    id: 811,
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
    id: 812,
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
    id: 813,
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
    id: 814,
    question:
      "________ state in a state chart is shown as a circle surrounding a small dot (bull’s-eye).",
    options: ["Initial", "Middle", "Intermediate", "Final"],
    correctOptionIndex: 3,
  },
  {
    id: 815,
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
    id: 816,
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
    id: 817,
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
    id: 818,
    question:
      "______ testing exercises the system beyond its maximum design load.",
    options: ["Usability", "Stress", "Acceptance", "Beta"],
    correctOptionIndex: 1,
  },
  {
    id: 819,
    question:
      "_____ approach to systems development rapidly develops software incrementally using tools such as CASE.",
    options: ["SAD", "RAD", "MAC", "CSC"],
    correctOptionIndex: 1,
  },
  {
    id: 820,
    question: "_____ identifies generalities among entities.",
    options: ["Process", "Data hiding", "Partitioning", "Abstraction"],
    correctOptionIndex: 3,
  },
  {
    id: 821,
    question:
      "_____ identifies the structural (part-of) relationships between entities.",
    options: ["Data hiding", "Projection", "Partitioning", "Abstraction"],
    correctOptionIndex: 3,
  },
  {
    id: 822,
    question:
      "_____ model is suitable for software development when the requirements are well defined.",
    options: ["Prototyping", "Formal specification", "Spiral", "Waterfall"],
    correctOptionIndex: 3,
  },
  {
    id: 823,
    question: "_____ perspective shows the system or data architecture.",
    options: ["Source", "Structural", "Behavioral", "External"],
    correctOptionIndex: 1,
  },
  {
    id: 824,
    question: "____ encapsulates core data and functionality.",
    options: ["Model", "View", "Controller", "Facade"],
    correctOptionIndex: 0,
  },
  {
    id: 825,
    question: "____ prototype is an aid for exploring the problem domain.",
    options: ["Vertical", "Analysis", "Horizontal", "Domain"],
    correctOptionIndex: 1,
  },
  {
    id: 826,
    question:
      "A 4-way set-associative cache memory unit with capacity 16KB and block size 8 words (32 bits each). Physical address space is 4GB. Number of TAG bits is ____.",
    options: ["5", "15", "20", "25"],
    correctOptionIndex: 2,
  },
  {
    id: 827,
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
    id: 828,
    question:
      "A _____ is a function or procedure defined for a class and can access the internal state of an object.",
    options: ["Attribute", "Method", "Class", "Object"],
    correctOptionIndex: 1,
  },
  {
    id: 829,
    question: "A _____ is an implementation of an object's behavior.",
    options: ["method", "attribute", "class", "object"],
    correctOptionIndex: 0,
  },
  {
    id: 830,
    question:
      "A _______ is a probability that some adverse circumstance will occur.",
    options: ["plan", "risk", "schedule", "milestone"],
    correctOptionIndex: 1,
  },
  {
    id: 831,
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
    id: 832,
    question:
      "A _________ is instructive information that captures the essential structure and insight of a successful family of proven solutions to a recurring problem.",
    options: ["class", "pattern", "model", "component"],
    correctOptionIndex: 1,
  },
  {
    id: 833,
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
    id: 834,
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
    id: 835,
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
    id: 836,
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
    id: 837,
    question:
      "A _______ can be viewed as a snapshot of a system's parameters at rest or at a specific point in time.",
    options: ["Dynamic model", "Static model", "Event model", "Working model"],
    correctOptionIndex: 1,
  },
  {
    id: 838,
    question: "A B-tree grows at __________.",
    options: ["root", "leaves", "branches", "stem"],
    correctOptionIndex: 1,
  },
  {
    id: 839,
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
    id: 840,
    question:
      "A binary number's value changes most drastically when the ________ is changed.",
    options: ["MSB", "Frequency", "LSB", "Duty Cycle"],
    correctOptionIndex: 0,
  },
  {
    id: 841,
    question: "A binary tree grows at __________.",
    options: ["root", "leaves", "branches", "stem"],
    correctOptionIndex: 1,
  },
  {
    id: 842,
    question: "A binary variable can take values",
    options: ["0 only", "0 and -1", "0 and 1", "1 and 2"],
    correctOptionIndex: 2,
  },
  {
    id: 843,
    question:
      "A company is developing an advanced version of their current software available in the market, what model approach would they prefer?",
    options: ["RAD", "Iterative Enhancement", "Both a & b", "Spiral"],
    correctOptionIndex: 2,
  },
  {
    id: 844,
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
    id: 845,
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
    id: 846,
    question:
      "A CPU generates 32-bit virtual addresses. Page size = 4 KB. TLB has 128 entries and is 4-way set associative. Minimum size of the TLB tag is:",
    options: ["11 bits", "13 bits", "15 bits", "18 bits"],
    correctOptionIndex: 2,
  },
  {
    id: 847,
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
    id: 848,
    question: "A decimal counter has",
    options: ["5 states", "10 states", "15 states", "20 states"],
    correctOptionIndex: 1,
  },
  {
    id: 849,
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
    id: 850,
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
    id: 851,
    question: "A flip-flop can maintain a",
    options: ["n states", "tri state", "binary state", "octa state"],
    correctOptionIndex: 2,
  },
  {
    id: 852,
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
    id: 853,
    question: "A group of binary cells is called",
    options: ["counter", "register", "latch", "flipflop"],
    correctOptionIndex: 1,
  },
  {
    id: 854,
    question:
      "A leaky bucket algorithm shapes bursty traffic into fixed-rate traffic by averaging the",
    options: ["Data Rate", "Average Rate", "Traffic Rate", "Traffic Shaping"],
    correctOptionIndex: 0,
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
    question:
      "A memory buffer used to accommodate a speed differential is called",
    options: ["stack pointer", "cache", "accumulator", "disk buffer"],
    correctOptionIndex: 1,
  },
  {
    id: 857,
    question: "A message is much more general than a ______.",
    options: ["function call", "object", "class", "state"],
    correctOptionIndex: 0,
  },
  {
    id: 858,
    question: "A microprogram sequencer performs the operation?",
    options: ["Read", "Write", "Read and Write", "Read and Execute"],
    correctOptionIndex: 3,
  },
  {
    id: 859,
    question:
      "A multi-dimensional array array[0:2,10:20,3:4,-10:2] contains ______ elements.",
    options: ["240", "858", "390", "160"],
    correctOptionIndex: 1,
  },
  {
    id: 860,
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
    id: 861,
    question:
      "A network with bandwidth 10 Mbps can pass only 12000 frames per minute with each frame carrying 10000 bits. What is the throughput?",
    options: ["5 Mbps", "10 Mbps", "2 Mbps", "100 Mbps"],
    correctOptionIndex: 2,
  },
  {
    id: 862,
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
    id: 863,
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
    id: 864,
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
    id: 865,
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
    id: 866,
    question:
      "A process executes fork(); fork(); fork(); The number of child processes created is",
    options: ["3", "4", "7", "8"],
    correctOptionIndex: 2,
  },
  {
    id: 867,
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
    id: 868,
    question:
      "A RAM chip has capacity 1K × 8. Number of 2×4 decoders needed to build 16K × 16 RAM is",
    options: ["4", "5", "6", "7"],
    correctOptionIndex: 1,
  },
  {
    id: 869,
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
    id: 870,
    question:
      "A self-contained block of statements performing a coherent task is called",
    options: ["Monitor", "Function", "Program", "Structure"],
    correctOptionIndex: 1,
  },
  {
    id: 871,
    question: "A set of physical addresses is also known as",
    options: ["Disk Space", "Address Space", "Memory Space", "Locations"],
    correctOptionIndex: 2,
  },
  {
    id: 872,
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
    id: 873,
    question:
      "A system program combining separately compiled modules into executable form is",
    options: ["load and go", "assembler", "linking loader", "cross compiler"],
    correctOptionIndex: 2,
  },
  {
    id: 874,
    question:
      "A system program that sets up an executable program in memory ready for execution is",
    options: ["assembler", "linker", "compiler", "loader"],
    correctOptionIndex: 3,
  },
  {
    id: 875,
    question:
      "A system uses FIFO page replacement with 4 frames. Access 100 pages then reverse order. Page faults will be",
    options: ["196", "197", "194", "198"],
    correctOptionIndex: 0,
  },
  {
    id: 876,
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
    id: 877,
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
    id: 878,
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
    id: 879,
    question: "According to Boolean algebra x.x equals",
    options: ["x", "1", "0", "x'"],
    correctOptionIndex: 0,
  },
  {
    id: 880,
    question: "Adder subtractor operating on mode 1 at (X xor 1) gives",
    options: ["1", "0", "x", "x'"],
    correctOptionIndex: 3,
  },
  {
    id: 881,
    question: "Addition of -6 and -13",
    options: ["11101101", "11010101", "11101011", "11011101"],
    correctOptionIndex: 0,
  },
  {
    id: 882,
    question: "Addressing mode used in instruction add r1,r2,r3 is",
    options: ["Indirect", "Base", "Register", "Immediate"],
    correctOptionIndex: 2,
  },
  {
    id: 883,
    question: "After 9 counts BCD counter goes back to",
    options: ["0", "9", "1", "10"],
    correctOptionIndex: 0,
  },
  {
    id: 884,
    question:
      'After the following code fragment, what is the value in fname?\nString str; int fname; str = "Foolish boy."; fname = str.indexOf("fool");',
    options: ["0", "2", "-1", "4"],
    correctOptionIndex: 2,
  },
  {
    id: 885,
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
    id: 886,
    question:
      "All the wrapper classes (Integer, Boolean, Float, Short, Long, Double and Character) in java",
    options: ["are private", "are serializable", "are immutable", "are final"],
    correctOptionIndex: 3,
  },
  {
    id: 887,
    question: "An empty list is one which has no",
    options: ["nodes", "data", "nodes and data", "address"],
    correctOptionIndex: 2,
  },
  {
    id: 888,
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
    id: 889,
    question: "An identity element with respect to addition",
    options: ["x-1", "x+1", "x-0", "x+0"],
    correctOptionIndex: 3,
  },
  {
    id: 890,
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
    id: 891,
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
    id: 892,
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
    id: 893,
    question: "AND gates are converted to NAND gates using",
    options: ["invert OR", "AND invert", "NAND invert", "NOR"],
    correctOptionIndex: 1,
  },
  {
    id: 894,
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
    id: 895,
    question: "Any number with an exponent of zero is equal to:",
    options: ["zero", "one", "that number", "ten"],
    correctOptionIndex: 1,
  },
  {
    id: 896,
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
    id: 897,
    question:
      "Arrange the following steps to form a basic/general Engineering Process Model (Test, Design, Install, Specification, Manufacture, Maintain)",
    options: ["2,4,5,1,6,3", "4,2,5,1,3,6", "2,4,5,1,3,6", "4,2,5,1,6,3"],
    correctOptionIndex: 1,
  },
  {
    id: 898,
    question: "As per Boolean algebra theorem (x')' is equal to",
    options: ["x'", "x", "1", "0"],
    correctOptionIndex: 1,
  },
  {
    id: 899,
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
    id: 900,
    question: "Assign the proper odd parity bit to the code 111001",
    options: ["1111011", "1111001", "0111111", "0011111"],
    correctOptionIndex: 1,
  },
  {
    id: 901,
    question:
      "If File is an abstract class and ImageFile extends it, which toFile() implementation will be called?",
    options: ["BinaryFile", "ImageFile", "Both", "None"],
    correctOptionIndex: 1,
  },
  {
    id: 902,
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
    id: 903,
    question:
      "If page frames = 3 and reference string = 1,2,3,4,2,1,5,3,2,4,6 using optimal replacement policy, page faults =",
    options: ["5", "6", "8", "7"],
    correctOptionIndex: 3,
  },
  {
    id: 904,
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
    id: 905,
    question:
      "Asynchronous sequential logic circuits are used when primary need is",
    options: ["time", "pressure", "speed", "accuracy"],
    correctOptionIndex: 2,
  },
  {
    id: 906,
    question: "At Conceptual level Class diagrams should include:",
    options: ["operations only", "attributes only", "constants", "variables"],
    correctOptionIndex: 1,
  },
  {
    id: 907,
    question: "At start of addition carry flag is",
    options: ["enabled", "stored", "cleared", "loaded"],
    correctOptionIndex: 2,
  },
  {
    id: 908,
    question:
      "At start of lamp handball game ball (indicator lamp) is placed at",
    options: ["top", "left", "bottom", "right"],
    correctOptionIndex: 3,
  },
  {
    id: 909,
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
    id: 910,
    question: "BCD to 7 segment is",
    options: ["decoder", "encoder", "mux", "demux"],
    correctOptionIndex: 0,
  },
  {
    id: 911,
    question: "Because of virtual memory, the memory can be shared among:",
    options: ["threads", "none of the mentioned", "instructions", "processes"],
    correctOptionIndex: 3,
  },
  {
    id: 912,
    question: "Besides NAND gate universal gate is",
    options: ["AND gate", "OR gate", "NOR gate", "XOR gate"],
    correctOptionIndex: 2,
  },
  {
    id: 913,
    question:
      "Binary code that distinguishes ten elements must contain at least",
    options: ["Two Bits", "Three Bits", "Four Bits", "Five Bits"],
    correctOptionIndex: 2,
  },
  {
    id: 914,
    question:
      "Binary counter that count incrementally and decremently is called",
    options: ["up-down counter", "LSI counters", "down counter", "up counter"],
    correctOptionIndex: 0,
  },
  {
    id: 915,
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
    id: 916,
    question: "Binary ripple counter is made up of",
    options: ["T flipflop", "JK flipflop", "RS flipflop", "T and JK flip flop"],
    correctOptionIndex: 3,
  },
  {
    id: 917,
    question: "Borrow in two bit (x,y) subtraction is 0, as long as",
    options: ["y>x", "x=y", "x>=y", "y>=x"],
    correctOptionIndex: 2,
  },
  {
    id: 918,
    question: "By default counters are incremented by",
    options: ["1", "2", "3", "4"],
    correctOptionIndex: 0,
  },
  {
    id: 919,
    question: "Cache memory acts between",
    options: ["CPU and RAM", "RAM and ROM", "CPU and Hard Disk", "CPU and ROM"],
    correctOptionIndex: 0,
  },
  {
    id: 920,
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
    id: 921,
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
    id: 922,
    question: "Change in state occurs during",
    options: ["pulse transition", "outputs", "clock pulses", "inputs"],
    correctOptionIndex: 0,
  },
  {
    id: 923,
    question: "Characters that can be specified in 6-bit code are",
    options: ["61", "62", "63", "64"],
    correctOptionIndex: 3,
  },
  {
    id: 924,
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
    id: 925,
    question: "Class diagram is a ______ aspect of collaboration",
    options: ["object", "structural", "behavioral", "model"],
    correctOptionIndex: 1,
  },
  {
    id: 926,
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
    id: 927,
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
    id: 928,
    question:
      "class X, class Y and class Z are derived from class BASE. This is ______ inheritance",
    options: ["Multiple", "Multilevel", "Hierarchical", "Single"],
    correctOptionIndex: 2,
  },
  {
    id: 929,
    question:
      "Classification of sequential circuit depends on timings of their",
    options: ["feedback path", "gates", "signals", "complex circuits"],
    correctOptionIndex: 2,
  },
  {
    id: 930,
    question: "Clock generator generates periodic train of",
    options: ["feedback path", "gates", "clock pulses", "sine pulses"],
    correctOptionIndex: 2,
  },
  {
    id: 931,
    question: "Code conversion circuits mostly uses",
    options: ["AND-OR gates", "AND gates", "OR gates", "XOR gates"],
    correctOptionIndex: 0,
  },
  {
    id: 932,
    question: "Code not included in code conversion standard is",
    options: ["BCD code", "gray code", "excess3 code", "truth table"],
    correctOptionIndex: 3,
  },
  {
    id: 933,
    question: "Combinations that are not listed for input variables are",
    options: ["overflows", "carry", "dont cares", "zero bits"],
    correctOptionIndex: 2,
  },
  {
    id: 934,
    question: "Connection from output to one of input gate is",
    options: ["undefined", "shifted", "feedback", "wire"],
    correctOptionIndex: 2,
  },
  {
    id: 935,
    question:
      "Disk scheduling using SSTF with initial head at 50 for requests (4,34,10,7,19,73,2,15,6,20) takes",
    options: ["95 ms", "119 ms", "233 ms", "276 ms"],
    correctOptionIndex: 1,
  },
  {
    id: 936,
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
    id: 937,
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
    id: 938,
    question:
      "Consider a system having m resources shared by processes with peak demands 3,4 and 6. For what value of m will deadlock not occur?",
    options: ["7", "9", "10", "13"],
    correctOptionIndex: 3,
  },
  {
    id: 939,
    question:
      "Consider the statement: The output of a program shall be given within 10 seconds of event X 10% of the time. What SRS characteristic is depicted?",
    options: ["Consistent", "Verifiable", "Non-verifiable", "Correct"],
    correctOptionIndex: 1,
  },
  {
    id: 940,
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
    id: 941,
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
    id: 942,
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
    id: 943,
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
    id: 944,
    question:
      "Processes P0(0,9), P1(1,4), P2(2,9) scheduled using pre-emptive SJF. Average waiting time?",
    options: ["5.0 ms", "4.33 ms", "6.33 ms", "7.33 ms"],
    correctOptionIndex: 0,
  },
  {
    id: 945,
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
    id: 946,
    question:
      "Three CPU intensive processes (10,20,30 units) arrive at 0,2,6. Using SRTF how many context switches occur?",
    options: ["1", "2", "3", "4"],
    correctOptionIndex: 1,
  },
  {
    id: 947,
    question:
      "Processes with bursts 2,4,8 using LRTF scheduling. Average turnaround time?",
    options: ["13 units", "14 units", "15 units", "16 units"],
    correctOptionIndex: 0,
  },
  {
    id: 948,
    question:
      "Three processes (10,20,30 units) with I/O pattern using shortest remaining compute time first. CPU idle percentage?",
    options: ["0%", "89.4%", "10.6%", "30%"],
    correctOptionIndex: 2,
  },
  {
    id: 949,
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
    id: 950,
    question: "Control of shift register labeled SH/LD = 0 will",
    options: ["shift", "store", "load", "add"],
    correctOptionIndex: 0,
  },
  {
    id: 951,
    question: "Control of shift register labeled SH/LD = 1 will",
    options: ["shift", "store", "load", "add"],
    correctOptionIndex: 2,
  },
  {
    id: 952,
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
    id: 953,
    question: "Convert (0.6875)10 to binary",
    options: ["0.1011", "0.1011", "0.0101", "0.0111"],
    correctOptionIndex: 0,
  },
  {
    id: 954,
    question: "Convert binary 111111110010 to hexadecimal",
    options: ["EE216", "FF216", "2FE16", "FD216"],
    correctOptionIndex: 1,
  },
  {
    id: 955,
    question: "Convert fractional binary 0000.1010 to decimal",
    options: ["0.625", "0.50", "0.55", "0.10"],
    correctOptionIndex: 0,
  },
  {
    id: 956,
    question: "Convert fractional binary 0001.0010 to decimal",
    options: ["1.40", "1.125", "1.20", "1.80"],
    correctOptionIndex: 1,
  },
  {
    id: 957,
    question: "Convert fractional decimal 6.75 to binary",
    options: ["0111.1100", "0110.1010", "0110.1100", "0110.0110"],
    correctOptionIndex: 2,
  },
  {
    id: 958,
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
    id: 959,
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
    id: 960,
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
    id: 961,
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
    id: 962,
    question: "DataInputStream is an example of",
    options: ["Output stream", "I/O stream", "Filtered stream", "File stream"],
    correctOptionIndex: 2,
  },
  {
    id: 963,
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
    id: 964,
    question: "Decimal digits are displayed on",
    options: ["input", "output", "7 segment", "flip flop"],
    correctOptionIndex: 2,
  },
  {
    id: 965,
    question: "Decimal number 4 in excess-3 coding is",
    options: ["110", "111", "1100", "1110"],
    correctOptionIndex: 1,
  },
  {
    id: 966,
    question: "Decimal number 5 in 2421 coding",
    options: ["1011", "1001", "1010", "1100"],
    correctOptionIndex: 0,
  },
  {
    id: 967,
    question: "Definite time in a flipflop is called",
    options: ["clear time", "pulse time", "hold time", "reset time"],
    correctOptionIndex: 2,
  },
  {
    id: 968,
    question: "Delay elements provide",
    options: ["large memory", "outputs", "clock pulses", "short term memory"],
    correctOptionIndex: 3,
  },
  {
    id: 969,
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
    id: 970,
    question:
      "Determine the output frequency for a frequency division circuit containing 12 flip-flops with input clock 20.48 MHz",
    options: ["10.24 kHz", "5 kHz", "30.24 kHz", "15 kHz"],
    correctOptionIndex: 1,
  },
  {
    id: 971,
    question: "Determine which of the following is valid character constant?",
    options: ["'//'", "'\\0'", "'xyz'", "'\\052'"],
    correctOptionIndex: 0,
  },
  {
    id: 972,
    question: "Different ______ may have conflicting requirements",
    options: ["programmers", "designers", "stakeholders", "analysts"],
    correctOptionIndex: 2,
  },
  {
    id: 973,
    question: "Digital number system is said to be of base or radix",
    options: ["8", "10", "2", "16"],
    correctOptionIndex: 1,
  },
  {
    id: 974,
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
    id: 975,
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
    id: 976,
    question: "Down counter decrement value by",
    options: ["1", "2", "3", "4"],
    correctOptionIndex: 0,
  },
  {
    id: 977,
    question:
      "During class inheritance in C++, if visibility mode is not provided, default visibility mode is",
    options: ["onlineexam.t", "protected", "private", "friend"],
    correctOptionIndex: 2,
  },
  {
    id: 978,
    question: "During execution of a program which gets initialized first?",
    options: ["IR", "MAR", "PC", "MDR"],
    correctOptionIndex: 2,
  },
  {
    id: 979,
    question: "During transfer of data between processor and memory we use",
    options: ["Cache", "TLB", "Buffers", "Registers"],
    correctOptionIndex: 3,
  },
  {
    id: 980,
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
    id: 981,
    question: "Each gate has a delay of",
    options: ["1", "2", "3", "4"],
    correctOptionIndex: 0,
  },
  {
    id: 982,
    question: "Each logic gate gives delay of",
    options: ["1 to 5 ns", "2 to 10 ns", "3 to 10 ns", "3 to 5 ns"],
    correctOptionIndex: 0,
  },
  {
    id: 983,
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
    id: 984,
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
    id: 985,
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
    id: 986,
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
    id: 987,
    question:
      "Events are translated to ___ requests which are sent either to the model or view",
    options: ["client", "source", "service", "multiple"],
    correctOptionIndex: 2,
  },
  {
    id: 988,
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
    id: 989,
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
    id: 990,
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
    id: 991,
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
    id: 992,
    question: "Feedback among logic gates make asynchronous system",
    options: ["stable", "unstable", "complex", "combinational"],
    correctOptionIndex: 1,
  },
  {
    id: 993,
    question:
      "File system with 300 GByte disk uses descriptor with 8 direct blocks, 1 indirect and 1 double indirect block. Block size 128 bytes and address size 8 bytes. Maximum possible file size is",
    options: ["3 KBytes", "35 KBytes", "280 KBytes", "dependent on disk size"],
    correctOptionIndex: 1,
  },
  {
    id: 994,
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
    id: 995,
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
    id: 996,
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
    id: 997,
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
    id: 998,
    question: "Floating point representation is used to store",
    options: ["Boolean values", "whole numbers", "real integers", "integers"],
    correctOptionIndex: 2,
  },
  {
    id: 999,
    question: "For operation of multiplication hardware needs minimum ALU of",
    options: ["16", "32", "64", "128"],
    correctOptionIndex: 1,
  },
  {
    id: 1000,
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
    id: 1001,
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
    id: 1002,
    question:
      "Four different attributes to control traffic have been devised in",
    options: ["IP Relay", "Data Relay", "Source Relay", "Frame Relay"],
    correctOptionIndex: 3,
  },
  {
    id: 1003,
    question: "Four gates in a package is called",
    options: ["biruple", "octruple", "dualruple", "quadruple"],
    correctOptionIndex: 3,
  },
  {
    id: 1004,
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
    id: 1005,
    question: "Frames from one LAN can be transmitted to another LAN via",
    options: ["Router", "Repeater", "Modem", "Bridge"],
    correctOptionIndex: 3,
  },
  {
    id: 1006,
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
    id: 1007,
    question: "FTP server listens on port",
    options: ["19 and 20", "20 and 21", "21 and 22", "20 and 22"],
    correctOptionIndex: 1,
  },
  {
    id: 1008,
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
    id: 1009,
    question: "Garbage collection in Java is done by",
    options: ["Java Compiler", "Object class", "System class", "JVM"],
    correctOptionIndex: 3,
  },
  {
    id: 1010,
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
    id: 1011,
    question: "Decimal value of binary 10000110 is",
    options: ["134", "144", "110", "126"],
    correctOptionIndex: 0,
  },
  {
    id: 1012,
    question: "Decimal value of binary 10010 is",
    options: ["6", "9", "18", "20"],
    correctOptionIndex: 2,
  },
  {
    id: 1013,
    question:
      "Given the code snippet:\nint salaries[];\nint index = 0;\nsalaries = new int[4];\nwhile(index < 4){ salaries[index] = 10000; index++; }\nWhat is value of salaries[3]?",
    options: ["10000", "40000", "4000", "15000"],
    correctOptionIndex: 0,
    isQuestionContainsCoding: true,
  },
  {
    id: 1014,
    question:
      "Given the following code, which line will generate an error?\nclass Test { static int x = 100; // line 3\nint y = 200; // line 4\npublic static void main(String []args){ final int z; // line 7\nz = x + y; // line 8\nSystem.out.println(z); }}",
    options: ["line 3", "line 4", "line 7", "line 8"],
    correctOptionIndex: 3,
    isQuestionContainsCoding: true,
  },
  {
    id: 1015,
    question:
      "Given the declarations: interface A {}, class B {}, class C extends B implements A {}, class D implements A {}. Which assignment is legal?",
    options: ["c = d;", "d = c;", "A a = d;", "d = (D)c;"],
    correctOptionIndex: 2,
    isQuestionContainsCoding: true,
  },
  {
    id: 1016,
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
    id: 1017,
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
    id: 1018,
    question: "Gray code representation of 14 is",
    options: ["1010", "1100", "1001", "1110"],
    correctOptionIndex: 2,
  },
  {
    id: 1019,
    question:
      "Match scheduling algorithms with applications: (P) Gang Scheduling (Q) Rate Monotonic Scheduling (R) Fair Share Scheduling",
    options: ["P–3 Q–2 R–1", "P–1 Q–2 R–3", "P–2 Q–3 R–1", "P–1 Q–3 R–2"],
    correctOptionIndex: 0,
  },
  {
    id: 1020,
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
    id: 1021,
    question: "How do we define a destructor?",
    options: ["X~() {}", "X() {}~", "X() ~{}", "~X() {}"],
    correctOptionIndex: 3,
  },
  {
    id: 1022,
    question: "How is a J-K flip-flop made to toggle?",
    options: ["J = 0, K = 0", "J = 1, K = 0", "J = 0, K = 1", "J = 1, K = 1"],
    correctOptionIndex: 3,
  },
  {
    id: 1023,
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
    id: 1024,
    question: "How many scenarios are there in elicitation activities?",
    options: ["One", "Two", "Three", "Four"],
    correctOptionIndex: 3,
  },
  {
    id: 1025,
    question:
      "How many 32K × 1 RAM chips are needed to provide memory capacity of 256K-bytes?",
    options: ["8", "32", "64", "128"],
    correctOptionIndex: 2,
  },
  {
    id: 1026,
    question: "How many numeric data types are supported in Java?",
    options: ["2", "4", "6", "8"],
    correctOptionIndex: 2,
  },
  {
    id: 1027,
    question:
      "How many subnets are created from a Class C address space using a /29 subnet mask?",
    options: ["16", "128", "32", "64"],
    correctOptionIndex: 2,
  },
  {
    id: 1028,
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
    id: 1029,
    question: "Human readable base representation of numbers is",
    options: ["Binary", "Decimal", "Hex", "Hexadecimal"],
    correctOptionIndex: 1,
  },
  {
    id: 1030,
    question: "IC number of NOT gate is",
    options: ["7402", "7404", "7401", "7406"],
    correctOptionIndex: 1,
  },
  {
    id: 1031,
    question: "IC of 7 segment display contains",
    options: ["4 leds", "5 leds", "6 leds", "7 leds"],
    correctOptionIndex: 3,
  },
  {
    id: 1032,
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
    id: 1033,
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
    id: 1034,
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
    id: 1035,
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
    id: 1036,
    question:
      "If a host broadcasts a frame to assign IP address to itself, which protocol is used?",
    options: ["RARP", "ARPA", "ICMP", "TCP"],
    correctOptionIndex: 0,
  },
  {
    id: 1037,
    question:
      "If a router port has IP address 172.16.112.1/25, the valid subnet address is",
    options: ["172.16.96.0", "172.16.0.0", "172.16.112.0", "172.16.112.128"],
    correctOptionIndex: 2,
  },
  {
    id: 1038,
    question:
      "If an odd parity is adopted, parity bit is chosen such that total number of 1's is",
    options: ["odd", "even", "positive", "negative"],
    correctOptionIndex: 0,
  },
  {
    id: 1039,
    question:
      "If every requirement can be checked by a cost-effective process, then the SRS is",
    options: ["verifiable", "traceable", "modifiable", "complete"],
    correctOptionIndex: 0,
  },
  {
    id: 1040,
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
    id: 1041,
    question:
      "If result = 2 + 3 * 5, what is the value and type of result variable?",
    options: ["17, byte", "25, byte", "17, int", "25, int"],
    correctOptionIndex: 2,
  },
  {
    id: 1042,
    question:
      "If the data unit is 111111 and the divisor is 1010. In CRC method, what is the dividend at the transmission before division?",
    options: ["1111110000", "1111111010", "111111000", "111111"],
    correctOptionIndex: 2,
  },
  {
    id: 1043,
    question: "If the derived class is struct, then default visibility mode is",
    options: ["public", "protected", "private", "struct can't inherit class"],
    correctOptionIndex: 0,
  },
  {
    id: 1044,
    question:
      "If the disk head is located initially at 32, find the number of disk moves required with FCFS if the disk queue requests are 98, 37, 14, 124, 65, 67",
    options: ["331", "321", "355", "361"],
    correctOptionIndex: 1,
  },
  {
    id: 1045,
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
    id: 1046,
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
    id: 1047,
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
    id: 1048,
    question:
      "In a men head count, a ______ head end under the armpit usually includes the shoulder and the neck",
    options: ["1st", "2nd", "3rd", "4th"],
    correctOptionIndex: 1,
  },
  {
    id: 1049,
    question: "In 14 pin gate pin number 14 is",
    options: ["Vcc", "Vdd", "ground", "AC"],
    correctOptionIndex: 0,
  },
  {
    id: 1050,
    question: "In 14 pin gate pin number 7 is",
    options: ["Vcc", "Vdd", "ground", "AC"],
    correctOptionIndex: 2,
  },
  {
    id: 1051,
    question:
      "In ____ mode, the authentication header is inserted immediately after the IP header",
    options: ["Tunnel", "Transport", "Authentication", "Both A and B"],
    correctOptionIndex: 0,
  },
  {
    id: 1052,
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
    id: 1053,
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
    id: 1054,
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
    id: 1055,
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
    id: 1056,
    question:
      "In a packet switching network, if message size is 48 bytes and each packet header is 3 bytes and 24 packets are required, the packet size is",
    options: ["2 bytes", "1 byte", "4 bytes", "5 bytes"],
    correctOptionIndex: 3,
  },
  {
    id: 1057,
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
    id: 1058,
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
    id: 1059,
    question:
      "In adder subtractor circuit when addition exceeds from 15 output carry becomes",
    options: ["1", "0", "x", "undefined"],
    correctOptionIndex: 0,
  },
  {
    id: 1060,
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
    id: 1061,
    question:
      "In associative mapping during LRU, the counter of new block is set to 0 and all others incremented by one when ______ occurs",
    options: ["Miss", "Hit", "Delay", "Delayed Hit"],
    correctOptionIndex: 0,
  },
  {
    id: 1062,
    question: "In asynchronous circuits changes occur with change in",
    options: ["inputs", "outputs", "clock pulses", "time"],
    correctOptionIndex: 0,
  },
  {
    id: 1063,
    question: "In BCD number 1010 has",
    options: ["meaning", "no meaning", "value", "Vcc"],
    correctOptionIndex: 1,
  },
  {
    id: 1064,
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
    id: 1065,
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
    id: 1066,
    question:
      "In Congestion Control, packet is put at end of input queue while waiting to be",
    options: ["Checked", "Entered", "Reached", "Controlled"],
    correctOptionIndex: 0,
  },
  {
    id: 1067,
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
    id: 1068,
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
    id: 1069,
    question: "In DFDs, user interactions with the system is denoted by",
    options: ["Circle", "Arrow", "Rectangle", "Triangle"],
    correctOptionIndex: 0,
  },
  {
    id: 1070,
    question:
      "In division, two operands (dividend and divisor) and answer (quotient) of divide are accompanied by a second answer called the",
    options: ["Reminder", "Multiplier", "Divisor", "Trap"],
    correctOptionIndex: 0,
  },
  {
    id: 1071,
    question: "In flipflop if set input is returned to 0, output",
    options: ["changes", "inverts", "remain same", "complements"],
    correctOptionIndex: 2,
  },
  {
    id: 1072,
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
    id: 1073,
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
    id: 1074,
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
    id: 1075,
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
    id: 1076,
    question: "In most logic gates, 1 means",
    options: ["0 V", "1 V", "5 V", "10 V"],
    correctOptionIndex: 2,
  },
  {
    id: 1077,
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
    id: 1078,
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
    id: 1079,
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
    id: 1080,
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
    id: 1081,
    question:
      "In Quality of Service, jitter is variation in delay for packets belonging to",
    options: ["Data Flow", "Same Flow", "Protocol Flow", "IP Flow"],
    correctOptionIndex: 1,
  },
  {
    id: 1082,
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
    id: 1083,
    question:
      "In signed-magnitude binary division, if dividend is (11100)₂ and divisor is (10011)₂ the result is",
    options: ["(00100)₂", "(10100)₂", "(11001)₂", "(01100)₂"],
    correctOptionIndex: 1,
  },
  {
    id: 1084,
    question: "In stack organization insertion operation is called",
    options: ["Pop", "Push", "Down", "Upper"],
    correctOptionIndex: 1,
  },
  {
    id: 1085,
    question: "In T flipflop when state has to be complemented T must be",
    options: ["0", "1", "t", "t+1"],
    correctOptionIndex: 0,
  },
  {
    id: 1086,
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
    id: 1087,
    question: "In Unix 'file' command is used to determine",
    options: ["file name", "file type", "file content", "None of the above"],
    correctOptionIndex: 1,
  },
  {
    id: 1088,
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
    id: 1089,
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
    id: 1090,
    question: "Individual components are tested is termed as",
    options: [
      "Regression testing",
      "System testing",
      "Unit testing",
      "Integration testing",
    ],
    correctOptionIndex: 2,
  },
];

export const totalQuestions: number = questions.length;
