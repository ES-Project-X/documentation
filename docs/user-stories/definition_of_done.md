---
sidebar_position: 2
---


# Definition of Done

The **Definition of Done** (DoD) outlines the criteria that must be met for a user story or task to be considered complete. It ensures that all aspects of the development process are meticulously addressed and validated.

In GitHub, pull requests to the `dev` and `master` branches must adhere to the quality gate criteria and review from two peers. Otherwise, it is not possible to merge the pull request. Reviewers are responsible for checking if the acceptance criteria has been followed, since there is no mechanism to automatically check if it.

## Tests following acceptance criteria

Tests that validate the the user story's acceptance criteria are correctly developed and pass. These can be unit tests of the code, or manual tests in case it is the most appropriate. The chosen type of test should be chosen depending on the developed feature.

## Sonar Cloud quality gate

The quality gate assessment in Sonar Cloud, following the sonar way approach, ensures that the code meets specific quality standards.

- More than 80% test coverage to guarantee comprehensive testing.
- Less than 3% duplicated lines to promote code efficiency and maintainability.
- "A" grade maintainability and reliability to ensure long-term code sustainability.
- 100% review of security hotspots to eliminate potential vulnerabilities.
- An "A" security rating to signify that the code meets stringent security standards.

## Code review by two peers

A crucial step in the completion process involves a thorough code review by two randomly assigned peers. This ensures that the code is thoroughly examined, validated, and aligns with the established coding standards and best practices.
