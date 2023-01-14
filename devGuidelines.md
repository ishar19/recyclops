# devguidelines

this is guideline for devs working on this project as a core member
if you wish to contribute to a specific portion, read **CONTRIBUTING.md** in that folder

## Work-flow

1. Clone this project locally 
2. switch to branch you want or are working on
3. add the code
4. pull from the branch before pushing (branch structure tldr) 
5. resolve merge conflicts if any
6. push and raise a pr to merge in main branch (try to add a description to make everone's life easier)
        
## Coding-guidelines (frontend) 

### Navigate to frontend/recyclops

1. try adding a argument and return description of a function wherever felt necessary 
2. use camelCase 
3. use env for sensitive key
4. use arrow functions
5. use hooks and functional components 
6. make global components for micro elements shared across the app i.e, button, links e.t.c
7. make tailwind base classes for interaction events i.e, hover, animation avoid making extra base classes, rather optimize tailwind config and stick to designs provided
8. linting is setup and prettier for tailwind (remove any warnings before pushing the code)  
9.  setup prettier locally or run npx prettier --write . before commits (check for format issues with npx prettier --check .)
 