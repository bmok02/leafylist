const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".menu-btn");

const toggleScreen = () => {
    wrapper.classList.toggle("show-category");
};

const toggleMenu = () => {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('show');
};

menuBtn.addEventListener("click", toggleMenu);
backBtn.addEventListener("click", toggleScreen);

const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackdrop = document.querySelector(".black-backdrop");

const toggleAddTaskForm = () => {
    addTaskForm.classList.toggle("active");
    blackBackdrop.classList.toggle("active");
    addTaskBtn.classList.toggle("active");
};

addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);

// Categories and tasks initialization
let categories = [
    {
        title: "High Priority",
        img: "water-plant.PNG",
    },
    {
        title: "Mid Priority",
        img: "cactus-hat.PNG",
    },
    {
        title: "Low Priority",
        img: "cactus.PNG",
    }
];

let tasks = [ 
    {
        id: 1,
        task: "Learn Choreo",
        category: "High Priority",
        completed: false,
    },
    {
        id: 2,
        task: "Finish Orbital",
        category: "Others",
        completed: false,
    },
    {
        id: 3, 
        task: "Plan Dance Pracs",
        category: "Mid Priority",
        completed: true,
    }
];

let selectedCategory = categories[0];

const categoriesContainer = document.querySelector(".categories");
const categoryTitle = document.querySelector(".category-title");
const totalCategoryTasks = document.querySelector(".category-tasks");
const categoryImg = document.querySelector("#category-img");
const totalTasks = document.querySelector(".totalTasks");

const getWaterDropletIncrement = (task) => {
    switch (task.category.toLowerCase()) {
        case 'high priority':
            return 5;
        case 'mid priority':
            return 3;
        case 'low priority':
            return 1;
        default:
            return 0;
    }
};

const calculateTotal = () => {
    const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    totalCategoryTasks.textContent = `${categoryTasks.length} Tasks`;
    totalTasks.textContent = tasks.length; // This line sets the totalTasks count
};

const renderCategories = () => {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
        const categoryTasks = tasks.filter(
            (task) => task.category.toLowerCase() === category.title.toLowerCase()
        );

        const div = document.createElement("div");
        div.classList.add("category");
        div.addEventListener("click", () => {
            wrapper.classList.add("show-category");
            selectedCategory = category;
            categoryTitle.textContent = category.title;
            categoryImg.src = `icons/${category.img}`;
            calculateTotal();
            renderTasks();
        });

        div.innerHTML = `
            <div class="left">
                <img src="icons/${category.img}" alt="${category.title}">
                <div class="content">
                    <h1>${category.title}</h1>
                    <p>${categoryTasks.length} Tasks</p>
                </div>
            </div>
            <div class="options">
                <div class="toggle-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/>
                    </svg>
                </div>
            </div>
        `;

        categoriesContainer.appendChild(div);
    });
};

const tasksContainer = document.querySelector(".tasks");

const renderTasks = () => {
    tasksContainer.innerHTML = "";
    const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );

    if (categoryTasks.length === 0) {
        tasksContainer.innerHTML = `<p class="no-task">No tasks for this priority</p>`;
    } else {
        categoryTasks.forEach((task) => {
            const div = document.createElement("div");
            div.classList.add("task-wrapper");
            const label = document.createElement("label");
            label.classList.add("task");
            label.setAttribute("for", task.id);
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = task.id;
            checkbox.checked = task.completed;

            checkbox.addEventListener("change", () => {
                const index = tasks.findIndex((t) => t.id === task.id);
                const increment = getWaterDropletIncrement(task);
                
                if (tasks[index].completed) {
                    waterDroplets -= increment;
                } else {
                    waterDroplets += increment;
                }

                tasks[index].completed = !tasks[index].completed;

                const scoreElement = document.querySelector(".score");
                scoreElement.textContent = waterDroplets;

                saveLocal();
                renderTasks();
            });

            div.innerHTML = `
                <div class="delete">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                    </svg>
                </div>
            `;
            label.innerHTML = `
                <span class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                </span>
                <p>${task.task}</p>
            `;

            label.prepend(checkbox);
            div.prepend(label);
            tasksContainer.appendChild(div);

            const deleteBtn = div.querySelector(".delete");
            deleteBtn.addEventListener("click", () => {
                const index = tasks.findIndex((t) => t.id === task.id);
                tasks.splice(index, 1);
                saveLocal();
                renderTasks();
            });
        });
    }

    renderCategories();
    calculateTotal();
};

const saveLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("waterDroplets", waterDroplets.toString());
};

const getLocal = () => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));
    const localWaterDroplets = parseInt(localStorage.getItem("waterDroplets"), 10);
    if (localTasks) {
        tasks = localTasks;
    }
    waterDroplets = isNaN(localWaterDroplets) ? 0 : localWaterDroplets; // Properly handle water droplets initialization
};

let waterDroplets = 0; // Initialize water droplets

// Update UI initially
const scoreElement = document.querySelector(".score");

// Initialize tasks and water droplets from localStorage
getLocal(); 
scoreElement.textContent = waterDroplets;
calculateTotal();
renderTasks();

// Functionality to add new tasks
const categorySelect = document.querySelector("#category-select");
const cancelBtn = document.querySelector(".cancel-btn");
const addBtn = document.querySelector(".add-btn");
const taskInput = document.querySelector("#task-input");

cancelBtn.addEventListener("click", toggleAddTaskForm);

addBtn.addEventListener("click", () => {
    const task = taskInput.value;
    const category = categorySelect.value;

    if (task === "") {
        alert("Please enter a task");
    } else {
        const newTask = {
            id: tasks.length + 1,
            task,
            category,
            completed: false,
        };
        tasks.push(newTask);
        taskInput.value = "";
        saveLocal();
        toggleAddTaskForm();
        renderTasks();
    }
});

categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect.appendChild(option);
});

function resetTasks() {
    // Function to reset all tasks
    localStorage.removeItem('tasks'); // Example for local storage
    document.querySelector('.totalTasks').innerText = '0';
    // Update the UI or reload the page if necessary
}
