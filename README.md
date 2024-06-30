Team Name: FMok

Proposed Level of Achievement: Apollo 11

Milestone 2 Report

Introducing LeafyList:

Poster: https://drive.google.com/file/d/1-ylZuH6EJV1LXWlbMb3UUHvLXF9XbfKR/view?usp=sharing 

Video: https://drive.google.com/file/d/1mrk_I2Ct3aoB50dlEO_y-e6cFCTlEx54/view?usp=sharing 

GitHub Repo: https://github.com/bmok02/leafylist 

Demo app (Vercel): leafylist-4hvu.vercel.app

RealTime Firebase: https://console.firebase.google.com/u/0/project/leafylist-authenticator/database/leafylist-authenticator-default-rtdb/data 

Motivation 

As university students, our lives are filled with a multitude of responsibilities, from academic obligations to social commitments. The constant barrage of assignments, meetings, and deadlines can easily overwhelm us, leading to disorganisation and stress. Without a structured management system, it's all too easy to lose track of important tasks and struggle to maintain a balanced life. Recognizing these challenges, we see the need for a solution that not only helps us plan our time effectively but also provides clarity and structure to our daily routines.

Moreover, we often find ourselves grappling with procrastination, particularly when deadlines seem distant. This tendency to delay tasks can result in last-minute rushes and subpar work quality. To address this issue, our goal is to incorporate gamification elements into the to-do list system. We hope to incentivize users to tackle tasks promptly and stay motivated throughout their academic journey by introducing game-like features and rewards.

Our concept draws inspiration from the successful Forest App, which effectively motivates students to minimize phone usage and concentrate on their academic endeavours. Emulating this approach, our gamified system operates on a similar principle: completing tasks contribute to the growth of virtual trees by providing them with essential "water." The quantity of water allocated corresponds to the priority level of each task (in the form of the urgency of deadlines, set by students when creating the tasks). Once a tree accumulates the necessary amount of water, it flourishes and becomes a fully-grown addition to the user's collection. Additionally, to further motivate students to complete their tasks timely, each fully-grown tree will give students in-game currency, which they can use to purchase their desired plant from the shop. 

Aim 


We aim to provide a reliable platform for students to organise their tasks and responsibilities effectively. By offering an interactive to-do list, we aim to empower students to take control of their schedules and prioritise tasks based on importance. This not only helps in better time management but also facilitates informed decision-making, ultimately leading to increased productivity and a sense of accomplishment.

Through the incorporation of gamification elements, we aim to transform the way students engage with their responsibilities. By introducing game-like features and rewards, we seek to incentivize timely task completion and foster a proactive attitude towards academic and personal commitments. By achieving these goals, we aspire to create a tool that not only enhances productivity and reduces procrastination, but also promotes a healthy and balanced approach to student life.




User Stories


As a university student with a busy schedule, I want to be able to input my daily tasks and set their priority levels so that I can effectively manage my time and focus on important assignments.
As a university student who values efficiency, I want to be able to sort my tasks by priority, due date, or other criteria to quickly identify the most important or time-sensitive items on my list.
As a university student striving for productivity, I want the ability to easily add, edit, and delete tasks on my to-do list so that I can keep it up-to-date with my changing schedule.
As a user who values organisation, I want to track my progress and see the status of my planted trees, including their growth stages and the amount of water they require.
As a user who enjoys gamified experiences, I want to earn rewards such as coins and power-ups by completing tasks and nurturing my virtual trees.
As a user who appreciates personalisation and choices, I want to be able to choose the type of trees/plants I can plant, which further increases my interest and encourages me to complete my assignments. 
As a user, I want to be able to register for an account using my email address
As a user, I want to be able to log in easily and stay logged in if my app is running in the background.
As an admin, I want to be able to easily extend more designs for further app development 

Project scope:

LeafyList will utilise HTML, CSS, and JavaScript for its front-end development. This will provide users with an interactive interface where they can add, delete, modify, and complete tasks.

The backend will handle database interactions, including collecting, storing, and updating user login details and task-related data, as well as managing the "water droplet" currency. This will be achieved through Google’s firebase. 

How are we different from similar platforms?
LeafyList stands out from other task management and to-do list applications through its unique blend of gamification and productivity features:

Gamified Task Management: Unlike traditional to-do apps, LeafyList incorporates a virtual garden where completing tasks helps grow virtual trees. This visual and interactive element makes task management more engaging and fun.

Reward System: LeafyList rewards users with in-game currency for completing tasks. This currency can be used to purchase various virtual plants, adding a sense of accomplishment and encouraging continuous use.

Priority-Based Growth: The amount of virtual water given to a tree is based on the priority level of tasks, promoting effective prioritisation and time management.

Visual Progress Tracking: Users can see the growth stages of their virtual trees, providing a clear and motivating visual representation of their progress.

Customization Options and thoughtfulness: Users have the ability to choose different types of trees and plants to grow, offering a personalized experience that keeps them invested in their productivity. Users can also toggle between light or dark mode, depending on their preferences of the interface. We also added a quick access link to Lofi-music which they can listen to while engaging in productive work

By combining these innovative features, LeafyList offers a distinctive and effective solution for students looking to manage their time and responsibilities more efficiently while enjoying a rewarding and engaging experience.


Progress (as of Milestone 2): 

Backend
a. Database connection via MySQL [Unsuccessful]
Initially we wanted to set up connection via JDBC since our plan was to manage the web app login details via MySQL. However, after deciding to switch over to HTML CSS and Javascript (since resources to learning about these languages are more readily available in terms of creating an online platform), as such we felt that we should use another way to authenticate login details

b. Database connection via Google Firebase [Completed as of MS 2]
Managed to take in inputs via frontend HTML to be added to firebase in real time
Users register on the sign up page and their authentication details are uploaded and saved to firebase

Upon successful login, it will reflect the user’s last login date and time in firebase


Frontend
a. Task Organisation [Completed as of MS 1]

Tasks organised according to priority level 
Users can click in to each category of priority level to view existing tasks
b. Task Management [Completed as of MS 1]


Able to add task
Delete task
Complete task 
Select category based on priority for users ease of organisation

c. Sign in and Login Page [Completed as of MS 2]
Users without an account can register for one in the main sign up page

Upon successful registration, users will be directed to log in page where they will key in their details. Correct password is required in order to allow access to the main web app

As seen from the link below, users can toggle between the 2 pages depending if they already have an account.
Successful log in will take user to the main page as shown in part (a).

d. Lofi Music Feature
Users can have easy access to recommended Lofi Music to listen to while studying
 
e. Light/Dark mode toggle [Completed as of MS 2]


Users can easily toggle between light or dark mode, depending on their interface preference
f. Establishment of water droplet currency and gamification [in progress]
In game currency is known as “water droplets” 
Now, every task completed will grant the user 1 water droplet 

What’s next:

Features to be completed:
Establish water droplet currency and gamification (upon completion of task, currency will be earnt and added to the user’s wallet)
Add in button to deplete currency to water the plant 

Project Log

https://docs.google.com/spreadsheets/d/1xM5wlJgLreAzHMBxthmJNglmRjIrCboZKXZMd6uIMwI/edit#gid=0 
