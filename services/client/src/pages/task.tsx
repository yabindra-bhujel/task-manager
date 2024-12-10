import React, { useState, useEffect } from "react";
import Layout from "../components/navigation/layout";
import { Header } from "../components/header/Header";
import { FiClock, FiPlayCircle, FiCheckCircle } from "react-icons/fi";
import { TaskStatusHeader } from "../components/task/TaskStatusHeader";
import { TaskCard } from "../components/task/TaskCard";
import { CreateTask } from "../components/task/TaskCreate";
import instance from "../config/axiosInstance";
import { TaskStatus } from "../components/type/projects/enum";
import { Tasks, NewTask } from "../components/type/projects/interfaces";

const Task = () => {
  const [taskCreate, setTaskCreate] = useState<boolean>(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string } | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

      const [newTask, setNewTask] = useState<NewTask>({
        title: "",
        description: "",
        due_date: "",
        priority: "low",
        status: TaskStatus.PENDING,
      });


  const handleTaskModelOpen = () => {
    setTaskCreate((prev) => !prev);
  };

  const [tasks, setTasks] = useState<Tasks[]>([]);

  const getTasks = async () => {
    try {
      const response = await instance.get("tasks/list");
      setTasks(response.data.tasks);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setNewTask((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
      const errors: { [key: string]: string } = {};

      if (!newTask.title) {
        errors.title = "Title is required";
      }

      if (!newTask.description) {
        errors.description = "Description is required";
      }

      if (!newTask.due_date) {
        errors.due_date = "Due date is required";
      } else {
        const today = new Date();
        const dueDate = new Date(newTask.due_date);

        if (dueDate < today) {
          errors.dueDate = "Due date should be greater than today";
        }
      }

      if (!newTask.priority) {
        errors.priority = "Priority is required";
      }

      setErrors(errors);
      setIsFormValid(Object.keys(errors).length === 0);
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      validateForm();
      if (isFormValid) {
        try {
          if (loading) return;
          setLoading(true);
          const response = await instance.post("tasks/create", newTask);
          setTasks([...tasks, response.data.task]);
          setMessage("Task created successfully.");
        } catch (error) {
        } finally {
          setLoading(false);
          handleTaskModelOpen();

          setTimeout(() => {
            setMessage("");
          }, 3000);
        }

      }
    };


  return (
    <Layout>
      <Header crumbs={[{ label: "Tasks", to: "/tasks" }]} />

      {message && (
        <div className="bg-green-100 text-green-800 p-3 text-center">
          {message}
        </div>
      )}

      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-center">Daily Tasks</h1>
          <button
            onClick={handleTaskModelOpen}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Add Task
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pending Tasks */}
          <div className="border rounded-lg p-4 bg-gray-50 transition-transform">
            <TaskStatusHeader status="pending" icon={FiClock} />
            <ul className="space-y-3">
              {tasks.map(
                (task) =>
                  task.status === "pending" && (
                    <TaskCard key={task.id} task={task} />
                  )
              )}
            </ul>
          </div>

          {/* In Progress Tasks */}
          <div className="border rounded-lg p-4 bg-gray-50 transition-transform">
            <TaskStatusHeader status="in-progress" icon={FiPlayCircle} />
            <ul className="space-y-3">
              {tasks.map(
                (task) =>
                  task.status === "in_progress" && (
                    <TaskCard key={task.id} task={task} />
                  )
              )}
            </ul>
          </div>

          {/* Completed Tasks */}
          <div className="border rounded-lg p-4 bg-gray-50 transition-transform">
            <TaskStatusHeader status="completed" icon={FiCheckCircle} />
            <ul className="space-y-3">
              {tasks.map(
                (task) =>
                  task.status === "completed" && (
                    <TaskCard key={task.id} task={task} />
                  )
              )}
            </ul>
          </div>
        </div>
      </div>

      {taskCreate && (
        <CreateTask
          isOpen={taskCreate}
          onClose={handleTaskModelOpen}
          newTask={newTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
    </Layout>
  );
};

export default Task;
