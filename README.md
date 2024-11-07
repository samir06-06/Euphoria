**INFO:**

Euphoria - Ecommerce (Apparels) Website Template
Deadline: scheduled for two weeks - mid April
Design: https://www.figma.com/community/file/1250348068101895773

**Page distribution:**

1. Sign in/Sign up flow - Sərdar Əliyev
2. Home - İsmayıl
3. Product list - Samir
4. Product detail - İsmayıl
5. Cart - Ilaha
6. Checkout - Ilaha
7. Confirm order - Ilaha
8. Profile - Aysun
   8.1 Wishlist
   8.2 Order
   8.3 My info
9. Error page - Aysun

**WORKFLOW:**

1. **Individual Branches:** Each member works in a branch named after them or the feature they are working on.

2. **Pulling from Main:** Before merging your changes into the main branch, it's essential to make sure _your branch_ is up to date with the latest changes from the main branch. This is done by pulling changes from the main branch into your working branch:

   git checkout <your-branch-name>
   git pull origin main

   This ensures that any conflicts arising from the changes made by others are resolved in _your branch_ before creating a pull request.

3. **Fixing Conflicts:** After pulling changes from the _main_ branch, you may encounter merge conflicts if there are conflicting changes between _your branch_ and the _main_ branch. You need to resolve these conflicts manually by editing the conflicting files, resolving the differences, and then committing the resolved changes.

4. **Creating a Pull Request (PR):** Once your branch is up to date and conflicts are resolved, you can push your changes to your remote branch and create a pull request on GitHub (or your Git hosting platform). The pull request allows your team members to review your changes before merging them into the _main_ branch.

5. **Review and Merge:**

   git checkout main
   git pull origin main # Pull any new changes from the _main_ branch
   git merge <your-branch-name> # Merge your branch into the _main_ branch
   git push origin dev # Push the merged changes to the _dev_ branch

in nutshell, everyone will write on their _own branch_ and merge to _dev_ with a pull request, and _dev_ will merge to _main_ later

**FEEDBACKS:**
If there are issues with pages or if there's a design debt, please document them by writing them in front of the page's name in the _bugs.txt_ file.

DO NOT WORK WITH _main_ BRANCH. USE _dev_ FOR ALL OPERATIONS
