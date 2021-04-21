# Prerequisites

- node (tested versions 10.24.1 and 14.16.0 on Ubuntu 20.04.2)
- npm (tested versions 6.14.12 and 7.7.5 on Ubuntu 20.04.2)

# How to run

- npm clean-install 
- npm run start:server

# How to test

- Run server
- Go to localhost:3005/graphql
- Run query

```graphql
{
    getAllTodos {
        completed
        id
        title
    }
}
```

- Run mutation

```graphql
mutation {
    updateTodo(id: "first-test-todo") {
        completed
        id
        title
    }
}
```

# Task

See the task in the [TASK.md](./TASK.md) file.

After you've completed the task, please

1. Commit your changes
2. Send the new version of the repo back to the email that you got it from

We will not judge the implementation details, performance, code style, variable names, etc.
But we will judge the speed. 
(And the solution must meet the requirements of course 😊)

Hurry up and good luck! 🙌🏼

# 💜