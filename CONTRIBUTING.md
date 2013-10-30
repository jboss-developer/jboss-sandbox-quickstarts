TODO

Move quickstarts to the sandbox, or to another repository, preserving history
-----------

1) In the source repository, create a branch for each quickstart you want to move
2) To extract only one quickstart, in each source branch, run 

    git filter-branch --subdirectory-filter <quickstart_name> -- --all
3) The previous step placed the quickstart at the root of the tree, which we need to fix. In each source branch, run
    
    git filter-branch --tree-filter '(ls -A; mkdir <quickstart_name>; echo <quickstart_name>) | xargs mv'

4) Push each branch up to your github repository, to make merging into the destination repository easy
5) Add the source repository (from github) as a remote to the local destination repository
6) Create a branch, into which you will merge the quickstarts
7) For each source branch (i.e. each quicktart), run

    git merge -s ours --no-commit <source_github_remote>/<source branch>
    git read-tree --prefix=<quickstart_name> -u <source_github_remote>/<source branch>
    git commit -m "Merge <quickstart_name> to XXX."
8) Now, rebase out the merges. Run
 
    git rebase upstream/master

9) This should succeed with no problems as you are merging into new sub-directories.
10) This process leaves your git repo with a lot of junk in it, so we need to do some cleaning up! Run:

    git gc --prune=all

11) Now push this branch to github, and send a pull request

