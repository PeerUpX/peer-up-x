Steps to work on a backend feature:
1. Make sure that you have cloned the repository. Then enter the directory in which the repo is located.

2. Make sure you are on the main branch - you can enter the main branch using `git checkout main`. Run `git pull` to fetch the latest changes from the remote repository on GitHub. (alternatively, run `git fetch` to get the latest version of the remote branches if you need to work on a different branch than main)

3. (optional: only if you want to increment on a remote branch) You can run `git branch -v -a to view all branches`. Remote branches will start with ‘remotes/‘

4. (optional: only if you want to increment on a remote branch) To actually work on a remote branch, you need to make a local copy by running `git switch branch_name` (don’t include the ‘remotes/‘ part). For example, if the remote branch is called save-changes, you would run `git switch save-changes` once you’ve made sure you’ve fetched it.

5. Now you have the latest version of main or the branch you want to work on. To work on your feature you want to run `git checkout -b ‘myFeature’` - this will make a new branch called myFeature for your feature containing the same code as reviewBackend.

6. Develop/test your feature as you wish and once you’re done, stage your changes using  `git add *`. Once you’re ready to commit the changes, run `git commit -m ‘description here’`. Now you’ve committed your changes to the branch. 

7. If you are done with your feature, you can push the branch to the remote repo (the GitHub repo) by running `git push origin branch_name`. 

8. On GitHub you will see your new branch. You can create a pull request if your feature is ready to be reviewed/merged.
