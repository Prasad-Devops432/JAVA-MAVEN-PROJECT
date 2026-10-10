# Java Maven Project

A small Java web project built with Maven and packaged as a WAR. It contains a
`Calculator` class with `add`, `sub` and `multiply` methods, JUnit tests for them,
and a JSP front page (`index.jsp`) with CSS. I use it to practise Maven builds and CI/CD pipelines.

> **Source note:** The code comes from a tutorial project (package `in.javahome`).
> I use it as a practice project, not as original work.

## Project layout

The Maven project is in the nested folder:

```
JAVA-MAVEN-PROJECT/
└── java-maven-project-new-master/java-maven-project-new-master/
    ├── pom.xml                                  # Maven build (artifactId: myapp)
    └── src/
        ├── main/java/in/javahome/myweb/controller/Calculator.java
        ├── main/webapp/                         # Web pages, CSS and images
        └── test/java/in/javahome/myweb/controller/CalculatorTest.java
```

## Build and test

Requirements: JDK 8 (the POM compiles to Java 1.8), Maven 3.

```bash
cd java-maven-project-new-master/java-maven-project-new-master
mvn clean test       # run the unit tests
mvn package          # builds a .war file in target/ (packaging is war)
```

## Notes

- The nested folder name is a leftover from the download. Renaming it to a single level would make the repository easier to browse.
- The `Calculator` tests show the basic pattern: a plain Java class, tested with JUnit in `src/test`.
