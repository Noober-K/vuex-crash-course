import axios from 'axios';

const state = {
    todos:[
        // {
        //     id:1,
        //     title: 'Todo one'
        // }
    ]
};

const getters = {
    getAllTodos(state){
        return state.todos;
    }
}

const mutations = {
    setTodos(state,todos){
        state.todos = todos;
    },
    post(state, todo){
        state.todos.unshift(todo);
    }
};

const actions = {
    async getAllTodos({commit}){
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        commit("setTodos", res.data)
    },
    async addTodo({ commit },todo) {
        const res = await axios.post("https://jsonplaceholder.typicode.com/todos" , todo);
        commit("post", res.data);
    }
};

export default {state, getters, mutations, actions};