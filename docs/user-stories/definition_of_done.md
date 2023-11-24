---
sidebar_position: 2
---


# Definition of Done

The **Definition of Done** (DoD) outlines the criteria that must be met for a user story or task to be considered complete. It ensures that all aspects of the development process are meticulously addressed and validated.

In GitHub, pull requests to the `dev` and `master` branches must adhere to the quality gate criteria and review from two peers. Otherwise, it is not possible to merge the pull request. Reviewers are responsible for checking if the acceptance criteria has been followed, since there is no mechanism to automatically check if it.

## Tests following acceptance criteria

Tests that validate the the user story's acceptance criteria are correctly developed and pass. 
- Web UI: Selenium tests must be developed, exported to Python PyTest and put in the Selenium tests folder inside the Web UI project. The new code should pass the Sonar Cloud QG, and in the pull request there should be screenshots demonstrating that all tests (old and new) are passing. If the behaviour is too complex to test with Selenium (e.g. visual change on the map), a screenshot demonstrating the behaviour should be taken and included in the pull request and test folder. Previous features tested with unit tests don't require Selenium tests.
- REST API: unit tests must be developed and should pass the Sonar Cloud QG.

## Sonar Cloud quality gate

The quality gate assessment in Sonar Cloud, following the sonar way approach, ensures that the code meets specific quality standards.

- More than 80% test coverage to guarantee comprehensive testing.
- Less than 3% duplicated lines to promote code efficiency and maintainability.
- "A" grade maintainability and reliability to ensure long-term code sustainability.
- 100% review of security hotspots to eliminate potential vulnerabilities.
- An "A" security rating to signify that the code meets stringent security standards.

## Code review by two peers

A crucial step in the completion process involves a thorough code review by two randomly assigned peers. This ensures that the code is thoroughly examined, validated, and aligns with the established coding standards and best practices.
