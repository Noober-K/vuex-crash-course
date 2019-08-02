<template>
    <div>
        <h3>Todos</h3>
        <div class="todos">
            <div class="todo" v-for="todo in todos" v-bind:key="todo.id">
            {{todo.title}}</div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name:"Todos",
    // computed:{
    //     todos(){
    //         // return this.$store.state.todos.todos;
    //         return this.$store.getters.getAllTodos;
    //     }
    // }
    computed: mapGetters({
        todos: "getAllTodos"
    }),
    created(){
        this.$store.dispatch("getAllTodos");
    }
}
</script>

<style>
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
.todo {
    background-color: #41b883;
    padding: 10px;
    border: #41b883 1px solid;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    color: white;
}
</style>
