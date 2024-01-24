---
sidebar_position: 1
---

## Version Control and Commit Guidelines for GitHub

In order to maintain a structured and organised development workﬂow while using GitHub, our team adheres to speciﬁc branch management and commit rules. This document outlines the guidelines to be followed by all team members.

### Branch Management:

- **Main Branch**: The main branch represents the stable and production-ready version of our project. It is protected, and only fully tested and reviewed code is merged into this branch.
- **Development Branch**: The development branch serves as the integration branch where all feature branches are merged for testing and validation. It
  contains the latest developments and acts as the base for feature integration. 3.Feature Branches: When working on a new feature, team members should create a branch following the speciﬁed naming convention:
  project-name-feature. For example, if the project name is "MyApp" and the feature is "UserAuthentication," the branch name should be
  myapp-user-authentication.
- **Branch Deletion**: Once a feature branch has been successfully merged into the development branch and its changes have been validated, the feature
  branch will be deleted to keep the repository clean and avoid clutter.

### Commit Rules:

Commit Message Format: Commit messages should follow the format: date-time-feature-task. This format ensures that commits are easily identiﬁable and linked to speciﬁc features or tasks.

- **Date**: The date of the commit in the format YYYY-MM-DD.
- **Time**: The time of the commit in the format HH:MM (24-hour clock).
- **Feature**: A brief and descriptive name of the feature being worked on.
- **Task**: If applicable, include the task or issue number related to the commit.
  `Example: 2023-07-21 13:45 - Added user authentication feature (#123)`
  Commit Content: Each commit should be focused and address speciﬁc changes related to the respective feature or task. Avoid including unrelated changes within the same commit.

**_Commit Frequency: Commits should be made regularly to track progress and maintain a granular history. However, avoid excessive commits for minor changes._**

### Pull Requests:

- **Pull Request Creation**: When a feature is ready for integration, team members should create a pull request from their feature branch to the development branch.
- **Code Review**: Pull requests must undergo a thorough code review by at least one other team member before being merged. This helps ensure the quality and consistency of the codebase.
- **Continuous Integration**: Our CI/CD pipeline will automatically test the changes in the pull request to identify and resolve any potential issues early on.
- **Merge Approval**: Once the pull request is approved and passes all necessary checks, it can be merged into the development branch.

By following these guidelines, we aim to maintain an eﬃcient and collaborative development process, ensuring that our codebase remains robust, stable, and well-organised.

```
Note: It's essential to tailor these guidelines to your team's speciﬁc needs and
workﬂows. Additionally, make sure to communicate these rules effectively to all team members and provide any necessary training or assistance in using Git and GitHub
effectively.
```

In order to maintain a structured and organised development workﬂow while using GitHub, our team adheres to speciﬁc branch management and commit rules. This document outlines the guidelines to be followed by all team members.
