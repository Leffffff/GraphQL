const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { readFileSync } = require('fs');
const { nanoid } = require('nanoid');

let allTodos = [{
    id: 'first-test-todo',
    title: 'First test todo',
    completed: false
}];

const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' });

const schema = buildSchema(schemaString);

const root = {
    getAllTodos: (searchString) => {
        if (!searchString) {
            return allTodos.length === 0 ? [] : allTodos.filter(todo => todo.title.includes(searchString));
        }
        return allTodos;
    },

    addTodo: params => {
        const todo = {
            id: nanoid(),
            completed: false,
            ...params.todo
        };
        allTodos.unshift(todo);
        return todo;
    },

    updateTodo: params => {
        const todo = allTodos.find(({ id }) => params.id === id);
        todo.completed = !todo.completed;
        return allTodos;
    },

    removeTodo: params => {
        allTodos = allTodos.filter(({ id }) => params.id !== id)
        return allTodos;
    },
    batchSyncTodos: ({ add, remove, update }) => { // rude
        return {
            added: add.map(title => {
                console.log(removeTodo)
                const todo = {
                    id: nanoid(),
                    completed: false,
                    title
                };
                allTodos.unshift(todo);
                return todo;
            }),
            removed: remove.map(idToRemove => {
                allTodos = allTodos.filter(({ id }) => idToRemove !== id)
                return allTodos;
            }),
            updated: update.map(paramToUpdate => {
                const todo = allTodos.find(({ id }) => paramToUpdate === id);
                todo.completed = !todo.completed;
                return allTodos;
            }),
        }
    }
};

const app = express();

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(3005, () => console.log('Server started on 3005 port'));
