import axios from "axios";

const TODO_API = 'https://todoist-hw3.herokuapp.com/api/'
const TODOIST_TOKEN = process.env.NEXT_PUBLIC_TODOIST_TOKEN
const PROJECT_ID = 'your project id'

class TaskService {
    static async getAllTasks(){
        // ваша реализация получения тудушек
    }   
    static async getTaskById(id){
        // ваша реализация получения одной тудушки
    }   
    static async createTask(task){
        // ваша реализация создания новой тудушки
    }
    static async updateTask(id, task){
        // ваша реализация обновления существующей тудушки по ID
    }
    static async deleteTask(id){
        // ваша реализация удаления существующей тудушки по ID
    }
}

export default TaskService;