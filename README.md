Team Name: FMok

Proposed Level of Achievement: Gemini

Final Report

Introducing LeafyList:

Poster: https://drive.google.com/file/d/1qGy5n8rVA9p3z4WE5klZzsZXNWMmfpLF/view?usp=sharing 

Video: https://drive.google.com/file/d/1JxwGplXk14EOqosTDmEjIpREesfoxpiX/view?usp=drive_link 

GitHub Repo: https://github.com/bmok02/leafylist 

Demo app (Vercel):

https://leafylist-milestone3.vercel.app/login.html 

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


Project scope

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


Software Engineering Practices for LeafyList

Version Control
Version control is implemented via the use of Git. Changes are pushed into the Git repository whenever new features or functions are added. This practice ensures that all team members are synchronized, can easily collaborate, and can revert to previous versions if necessary. Each commit is well described to ensure that the updates and changes to the code are well documented for ease of handover and takeover of code by the collaborators. By using Git, we can manage the development process efficiently and maintain a history of changes.

Automated Testing
Automated testing is critical to ensure that LeafyList functions correctly as new features are added. Unit tests, integration tests, and end-to-end tests are written using frameworks like Jest. This helps catch bugs early and ensures that new code does not break existing functionality. Automated testing provides confidence that the application remains stable and reliable over time.

Documentation
Clear and comprehensive documentation is maintained for the LeafyList codebase, including README files, inline comments, and API documentation. This practice aids current and future developers in understanding the code and contributes to smoother onboarding and collaboration. Well-documented code ensures that the project is easier to maintain and extend.


Modular Design
LeafyList is designed modularly, breaking down the application into smaller, reusable components. This design practice improves maintainability and scalability, making adding new features and fixing bugs easier. For example, each page such as the login, main, garden page etc is broken down into each file to ensure easier management of code. A modular design ensures that different parts of the application can be developed and tested independently, facilitating a more organized and efficient development process.



Testing


Tests
Steps
Expected
Login to LeafyList
Sign up for a new account 
Key in your details and login afterwards
Particulars will be updated and stored in the backend firebase and users can access their own profile after logging in
Leads to the home page of LeafyList
Adding Tasks
Click the “+” button at the bottom right corner
A bubble will pop up to key in details of task name and the priority level (Drop down)
Task (with task name) will be added to corresponding priority level in the homepage
Number of tasks will be changed accordingly 
Completing Tasks
When you have completed a task, click the checkbox button
Task will be striked through
Number of water droplets will increase when task has been done and checkboxed
Deleting Tasks
To delete a task, hover your clicker over the task
A “trashcan” icon will pop up on the right that you can click on
Task will be removed from the list and number of tasks will be updated accordingly after deletion 
Checking task list
To check the list of tasks, click on each priority level to see the details 
After clicking, you will be brought to another page that shows the list of tasks to be completed 
Light / Dark Mode
Click on the Sun / Moon Icon near your name 
Colour scheme of app will change accordingly depending on mode chosen
Going to Plant
page






Click on the side menu 
Click on “Visit My Garden” when the side menu has popped up
Page will change to “Garden Page” that shows your plant
Water Plant
Click on “Water Plant”
Plant will be watered and the plant will grow
If not enough water droplets, a notice will show
Going back to home menu
Click on the back arrow button at the top left hand corner of the page 
User will be directed back to the home menu (no matter if they are in Garden, Shop, or Specific Tasks Page) 
Playlist
click on Lofi Playlist
You will be brought to our Lofi Spotify playlist that you can listen to while you complete your tasks
Navigating to Shop
Click on side menu
Click on “Leafy’s shop”
Users will be directed to the Shop page where they can browse different selections of plants and seeds 
Purchasing of plants
Click on the seed you wish to purchase
If user has enough water droplets, plant will be unlocked
Else, “Not enough water droplets to unlock this series” message will pop up 
Choice of plant to water
click on “Water Plant”, 
Once plant is fully grown, by clicking on “Water Plant”, it will have a pop up on the screen for user to choose which series of plant they would want to grow next



Features

Adding of new Tasks
Deleting unwanted tasks
Complete tasks by clicking the checkbox and earning in-game currency
Gamification - “Water droplets” as the established in-game currency, can be used to water plants
Gamification - Unlocking of new plant species
Light/Dark mode based on user preference
Easy access to Study music
Navigation side menu 



Progress

Backend

a. Database connection via Google Firebase [Completed as of MS 2]
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
 
e. Light/Dark mode toggle button [Completed as of MS 2]


Users can easily toggle between light or dark mode, depending on their interface preference


f. Establishment of water droplet currency and gamification [As of MS3]
In game currency is known as “water droplets” 
Now, every task completed will grant the user water droplets and be added to their wallet
High priority level adds 5 water droplets
Mid priority level adds 3 water droplets
Low priority level adds 1 water droplet 
 These water droplets are used to water their plants

Sends an alert when there are insufficient water droplets
Still faces some bugs (yet to fix)

g. Addition of side menu and back button to navigate to different pages [as of MS3]

Addition of side menu to easily navigate to different pages of Leafy’s Todolist page 
Clicking of the buttons will lead users to the respective pages 

After users are brought to the page they wish to visit, they can simply press the “back arrow” button, and they will be brought back to the home page 


h. Progress tracker [Completed as of MS3]
Users are now able to see how many plants are grown as a statistic to track progress

Able click on “View your grown plants” which will take you to the page where previous grown plants are displayed


	

h. Shop Page [as of MS3]

We have added Leafy’s Shop page where users can buy the flower series they wish to unlock 
Each series cost different amounts of water droplets 

If users do not have enough water droplets, a notification will pop up informing them that they lack water droplets to purchase it 
Upon successful purchase, users can now have the option to choose which type of plant series they would like to grow in the gardens page

	
i. Choice of plant series [As of MS3]
After current plant is grown fully, pop up button will appear to allow users to choose which series of plant they would want to grow next 

Plants upon successful purchase from the shop will appear here as an option to grow

j. Log Out button [as of MS3]

Able to log out 

Problems Faced

Issue
Solution
Initially we wanted to set up connection via JDBC since our plan was to manage the web app login details via MySQL. However, after deciding to switch over to HTML CSS and Javascript (since resources to learning about these languages are more readily available in terms of creating an online platform)


Used firebase to authenticate login details as it is less complex and more resources are available to help set up that connection


Everytime the page is refreshed, the water droplet counter would reset to 0, thus progress remains untrackable
Ensure that the water droplet counter and plants grown achievement statistic is saved to local storage


What’s next

We believe that LeafyList has high potential for future development and can engage users for the long term. These can be achieved through constant seasonal updates and introduction of new plant series in Leafy’s shop. 

This allows users to be incentivised to continue using our webApp, in hopes to unlock new plant types.

Project Log

https://docs.google.com/spreadsheets/d/1xM5wlJgLreAzHMBxthmJNglmRjIrCboZKXZMd6uIMwI/edit#gid=0 
