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
    isQuestionContainsCoding: true
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
    isQuestionContainsCoding: true
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
    isQuestionContainsCoding: true
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
];

export const totalQuestions: number = questions.length;
