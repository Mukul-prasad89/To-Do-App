// for signup button funtionality
const signUPBtn=document.querySelector(".sign");
const modal=document.querySelector("#signupModal");
const closeBtn=document.querySelector(".close-btn");
const getStarted=document.querySelector(".button");


signUPBtn.addEventListener("click",(event)=>{
    event.preventDefault(); 
    modal.style.display="flex";
    
})
closeBtn.addEventListener("click",(event)=>{
    modal.style.display="none";
    modal1.style.display="none";
})
getStarted.addEventListener("click",(event)=>{
    event.preventDefault();
    modal.style.display="flex";
})

// for login page funtionality
const loginBtn=document.querySelector(".login");
const modal1=document.querySelector("#loginModal");
const loginClose=document.querySelector(".close-btn2")
loginBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    modal1.style.display="flex";
})
loginClose.addEventListener("click",(event)=>{
    modal1.style.display="none";
})



// 
 // Basic JavaScript to handle adding tasks
      document.getElementById('taskForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();
        
        if (taskText) {
          addTask(taskText);
          taskInput.value = '';
          updateTaskCount();
        }
      });
      
      function addTask(text) {
        const taskList = document.getElementById('taskList');
        
        // Remove empty state if it exists
        const emptyState = taskList.querySelector('.empty-state');
        if (emptyState) {
          emptyState.remove();
        }
        
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        taskItem.innerHTML = `
          <input type="checkbox" class="task-checkbox">
          <span class="task-text">${text}</span>
          <div class="task-actions">
            <button class="edit-btn">✏️</button>
            <button class="delete-btn">🗑️</button>
          </div>
        `;
        
        // Add event listeners for the new task
        const checkbox = taskItem.querySelector('.task-checkbox');
        const deleteBtn = taskItem.querySelector('.delete-btn');
        
        checkbox.addEventListener('change', function() {
          const taskText = taskItem.querySelector('.task-text');
          if (this.checked) {
            taskText.classList.add('completed');
          } else {
            taskText.classList.remove('completed');
          }
        });
        
        deleteBtn.addEventListener('click', function() {
          taskItem.remove();
          updateTaskCount();
          
          // Show empty state if no tasks left
          if (document.querySelectorAll('.task-item').length === 0) {
            const taskList = document.getElementById('taskList');
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            emptyState.innerHTML = `
              <p>You don't have any tasks yet.</p>
              <p>Add a task above to get started!</p>
            `;
            taskList.appendChild(emptyState);
          }
        });
        
        taskList.appendChild(taskItem);
      }
      
      function updateTaskCount() {
        const taskCount = document.querySelectorAll('.task-item').length;
        document.getElementById('taskCount').textContent = taskCount;
      }


