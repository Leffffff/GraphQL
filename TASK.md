# The Task

## Task 1: Fix the `addTodo` mutation

### Task 1. Hint

To test the `addTodo` mutation run the following mutation in the console that is available on `localhost:3005/graphql`
after you've started the server. It returns errors. Why? 🤔

```graphql
mutation {
    addTodo(todo: {tilte: "Do Work!"}) {
        title
        completed
        id
    }
}
```

## Task 2: Implement the `batchSyncTodos` mutation

### Task 2. Requirements

(1) `batchSyncTodos` must allow to

- add new todo items
- remove todo items
- update todo items

All that in a single operation.

(2) `batchSyncTodos` must return separately in separate fields

- newly added todo items
- removed todo items
- updated todo items

### Task 2. Hint

First, you need to modify the [schema.graphql](./schema.graphql) file.

You need to add `batchSyncTodos` mutation field to the `Mutation` type like in the following code piece.

You'll also need to declare two types: `UpdateTodoInput` and `BatchSyncTodosResult`.

In the example, they don't have a declaration body with appropriate fields. You'll have to figure this out yourself.

```graphql
type BatchSyncTodosResult {
    # TODO: Declare my fields please!
}

input UpdateTodoInput {
    # TODO: Declare my fields please!
}

type Mutation {
    batchSyncTodos(add: [TodoInput!], remove: [ID!], update: [UpdateTodoInput]): BatchSyncTodosResult
}
```

After that, you'll need to add a handler for this mutation.

The handler definition will be analogous to handlers for the `getAllTodos` query and `addTodo`, `updateTodo`
and `removeTodo` mutations found in the [`server.js`](./server.js) file.

## Task 3: Implement the `search` input for the `getAllTodos` query

### Task 3. Requirements

(1) If the `search` input is specified, the `getAllTodos` query must return only those todos that have matching text in
their `titles`.

(2) If no `search` input is specified, then the `getAllTodos` query must return all todo items.

### Task 3. Hint

To add a search input do the following in the [schema.graphql](./schema.graphql).

```graphql
type Query {
    getAllTodos(search: String): [Todo!]!
}
```



