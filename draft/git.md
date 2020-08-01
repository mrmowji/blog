# Git

## Resources

- Ry's Git Tutorial
  - Great visuals and design
  - Easy English
  - Good for beginners
  - Good for introduction
  - Uses only HTML and CSS in the sample project
  - Each chapter has less than 20 pages
  - [Read online on Web Archive](https://web.archive.org/web/20161121145251/http://rypress.com/tutorials/git/)
  - [Get from Amazon (Free)](https://www.amazon.com/Rys-Git-Tutorial-Ryan-Hodson-ebook/dp/B00QFIA5OC)

## Install

## Setup

Use the following commands without `--global` to set configs for the current local git repo.

```bash
# set a name that is identifiable for credit when review version history
git config --global user.name "Your name"
```

```bash
# set an email address that will be associated with each history marker
git config --global user.email username@something.com
```

```bash
git config --global core.editor "code --wait"
```

```bash
# set automatic command line coloring for Git for easy reviewing
git config --global color.ui auto
```

```bash
# system wide ignore pattern for all local repositories
# for project-specific use cases, see .gitignore
git config --global core.excludesfile <file>
```

```bash
# for Unix/Max users
git config --global core.autocrlf input
git config --global core.safecrlf true

# for Windows users
git config --global core.autocrlf true
git config --global core.safecrlf true
```

```bash
# define aliases to be used as a git verb
# example: $ git co
# see 'git log' examples below for good candidates
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# you can use shell aliases too
# appliable in posix-like shells
# called aliases or shortcuts
# inside the .profile file (note the space at the end):
# alias ga='git add '
```

## Create a git project

```bash
# initialize an existing directory as a Git repository
# to create a repository based on the directory we're currently in
# turn the directory into a Git repository
git init
```

```bash
# see Remote section
git clone
```

## Make unversioned

Simply delete the `.git` folder (repository).

## Status

```bash
# check the current status of the repository
# monitor the state between the repository and the working directory
# show modified, tracked, and untracked files in working directory, staged for your next commit
# only shows us uncommitted changes (for commited changes, use `git log`)
git status
```

## Stage or Snapshot or Index

```bash
# add a specific file to the staging area (or simply "stage it"), so it'll be in the next commit
# think of snapshots
# group related changes into distinct snapshots; a practice that makes it possible to track the meaningful progression of a software project
# a single file can be under both "changes to be commited" and "changes not staged for commit"
# stage new or modified files
git add <file> [<another-file>]

# add the current directory and below
# check status before this
git add .
```

## Commit or Checkin

You can see commits as circles/nodes in a horizontal graph with directed edges from a commit to its parent. The HEAD is visualized by the red circle/commit.

You can use squares for commits from a remote branch/repo.

```bash
# commit your staged content as a new commit snapshot
git commit -m "Commit message"

# using an editor to enter the commit message
# first checks GIT_EDITOR environment variable
# then checks core.editor configuration setting
# then VISUAL environment variable
# and then EDITOR environment variable
git commit

# commit new changes to the last commit with a new message (kinda changing the last commit)
# good for cases when you forget to apply some changes to the last commit but you remember later
# you can achieve the same effect by resetting the branch back one commit and then recommitting the new changes
# you can use it to change the last commit's message without any change in staging area
git commit --amend -m "Commit message"
git commit --amend

# to automatically include all **tracked** files in the staged snapshot and then commit
# untracked files won't be added
# you have no control over which files to include, be careful not to include unintended files
git commit -a -m "Commit message"
```

## Stash

```bash
# save modified and staged changes and go back to a clean working directory
# saves your local modifications away and reverts the working directory to match the HEAD commit
git stash

# list stack-order of stashed file changes
git stash list

# write working from top of stash stack
git stash pop

# discard the changes from top of stash stack
git stash drop
```

## Tagging

```bash
# see what tags are available
# to see tags on logs, see `git log --decorate`
git tag

# tag the current (checked out) commit with a name for future reference
# are unique per project; can't use the same tag twice (you must delete to reuse)
# tags are convenient references to official releases and other significant milestones in a software project
git tag v1.0

# create an annotated tag which lets us record our name, the date, and a descriptive message (via -m)
git tag -a v1.0 -m "Tag message"

# remove a tag
git tag -d v1
```

## History

```bash
# show the commit history for the currently active branch
# if the history goes to another page, you can use `q` to return to command line
# HEAD is Git’s internal way of indicating the snapshot that is currently checked out
git log

# display the commits reachable from <until> but not from <since> (these parameters can be either commit ID’s or branch names)
git log <since>..<until>

# show the commits on the **second branch** that are not on the **first branch**
git log <first-branch>..<second-branch>

# show the commits on the **branch** that are not on the current branch
git log HEAD..<branch>

# display the last 4 commits on the current branch
git log HEAD~4..HEAD
# better
git log -n 4

# display history related to a file
git log <file>

# includes information about which files have been changed in each commit
git log --stat

# show all commit logs with indication of any paths that moved
git log --stat -M

git log --pretty=oneline
git log --oneline

git log --max-count=2

git log --since='5 minutes ago'

git log --until='5 minutes ago'

git log --author=<A name>

# shows all commits in the history of branches, tags and other refs, but it does not show commits that are not reachable from any ref
git log --all

# display the commit tree in an ASCII graph layout
git log --graph

git log --date=short

git log --color

git log --decorate

git log --abbrev-commit

# %h: abbreviated hash of the commit
# %ad: author date
# %s: comment
# %d: any decorations on that commit (e.g. branch heads or tags)
# %an: author name
git log --pretty=format:'%h %ad | %s%d [%an]'

git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%C(bold blue)<%an>%Creset' --abbrev-commit

# lists version history for a file, including renames
git log --follow <file-name>

# diff of what is changed but not staged
git diff

# diff of what is staged but not yet commited
git diff --staged

# shows content differences between two branches
# show the diff of what is in the **second branch** that is not in the **first branch**
git diff <first-branch>...<second-branch>

# outputs metadata and content changes of the specified commit
git show <commit>

# show any object in Git in human-readable format
git show <hash>

# shows every change/action you made to your repository
# display the local, chronological history of a repository
# good to find dangling commits (caused because of resetting, etc.)
# is a chronological listing of our history, without regard for the repository’s branch structure
# lets us find dangling commits that would otherwise be lost from the project history
# at the beginning of each reflog entry, you’ll find a commit ID representing the HEAD after that action; you can use that ID to checkout
git reflog
```

## Undo & Redo & Rewriting History

```bash
# undo before staging
# checkout copies any snapshot from the repository to the working directory
# discard the changes applied to a specific file in the working directory
# revert changes in the working directory; checkout the repository’s version of the file
# better way
git checkout -- <file>
# dangerous way
# what if the file name is "master" or worse, "-f" (force even if there's unstaged changes)
git checkout <file>

# undo staged changes, before commiting
# reset the staging area (to match the specified commit)
# unstage a file while retaining the changes in working directory
# resets the staging area to be whatever is in HEAD
# the reset command (by default) doesn’t change the working directory; use 'git checkout -- <file>' command after
git reset HEAD <file>

# undoes all commits after the specified commit, preserving changes locally
git reset <commit>

# undo committed changes
# undo the last commit by creating a new commit that reverses the changes applied by the last commit
# so there would be two commits
# it's safe even on branches that are publicly shared on remote repositories
# think of snapshots (every commit has all the changed files and references to the previous commit for every unchanged files)
# may have conflicts and you have to resolve them (Why do we need to have conflicts? Does it make any sense?)
# it opens the editor for you to specify the message
# remember to specify the commit that you want to undo—not the stable commit that you want to return to
git revert HEAD
# this one doesn't open the editor
git revert HEAD --no-edit

# undo changes contained in a committed snapshot
git revert <commit-hash>

# unstage staged changes leaving the changes in working directory
# `reset` only works on working directory and staging area, but `revert` works on committed snapshots (just like the difference between `git status` and `git log`)
# BE CAREFUL! the effect is permanent
git reset

# remove commits from a branch
# discards all history and changes back to the specified commit
# clear staging area, rewrite working tree from specified commit
# rewrite the current branch to point to the specified commit
# reset a branch to the specified commit (`git checkout <branch>` will bring that commit)
# --hard indicates that the working directory should be updated to be consistent with the new branch head
# BE CAREFUL! the effect is permanent
git reset --hard <tag>
git reset --hard <commit-hash>

# undo uncommited changes
# reset all tracked files to match the most recent commit
# BE CAREFUL! the effect is permanent
git reset --hard

# permanently undo uncommitted changes
git reset --hard
git clean -f

# remove all untracked files
# BE CAREFUL! the effect is permanent
git clean -f

# reset, but preserve the working directory
# the HEAD moves, but the working directory remaines unchanged
# this results in a repository with uncommitted modifications
git reset --mixed HEAD~1

# if it's not the latest hash (a previous hash, or a hash which if dangled or is child of the current hash but it's not a branch's HEAD, or it's from a remote repo/branch), you'll move to a non-existent (temporary) branch; use `git log` and `git branch` to see (this puts us in a detached HEAD state, which means our HEAD is no longer on the tip of a branch)
git checkout <commit-hash>

# checkout by tag (e.g. v1)
git checkout <tag-name>

# checkout the commit prior to the commit with tag v1 (probably versioned v1)
# checkout the parent actually
git checkout v1~1
# or
git checkout v1^

# go back to the latest version (in the master branch)
# test it after checking out an older commit in the master branch
git checkout master

# go to the latest version of a branch
# switch to another branch and check it out into your working directory
git checkout <branch-name>
```

```bash
# use rebase to modofy your commits
# common senarip: when you want to split changes in one commit into two or more commits; use `edit` instead of `pick`, commits that are applied after this commit won't be shown in `git log` before you `rebase --continue`. You can use `git reset --mixed HEAD~1` to remove the commit and commit again, this time with each change in a distinct commit
git rebase -i master # if you're in master branch
```

## Branch

A branch simply is a lightweight movable pointer to a commit.
A branch is actually a pointer to a single commit—not a container for a series of commits.

Just as branches are an abstraction for the working directory, the staged snapshot, and a commit history, a repository is an abstraction for branches.

We can’t add new commits when we’re not on a branch (for example when we've checked out an old commit). We need to create a branch from such cases to be able to do something.

New branches will get all the previous history from the point they're created in. Each branch has a linear history.

```bash
# lists available branches in the current (**local**) repo
# a * will appear next to the currently active (checked out) branch
# since there’s only one working directory for each project, only one branch can be checked out at a time
# take our current working directory (whether it's from a checked out commit or a branch's latest commit) and fork it into a new branch
git branch

# lists remote branches too
# branches starting with remotes/origin are branches from the original repo
git branch -a

# list your current remote branches
git branch -r

# create and checkout a branch at the same time (see the next command)
# it uses the current HEAD as the starting point for the new branch
git checkout -b <name>

# create a new branch (at the current commit)
# to checkout see `git checkout` commands
# then get status, change, add to staging area, and commit
# you can use `git log --all --graph` to see all commits from all branches and how they diverge
# it uses the current HEAD as the starting point for the new branch
git branch <name>

# deletes the specified branch
# is a relatively “safe” operation in the sense that Git will warn you if you’re deleting an unmerged branch (another example of Git’s commitment to never  losing your work)
git branch -d <branch-name>

# force-deletes the specified branch
# doesn't check if it's an unmerged branch
# lost forever
git branch -D <branch-name>
```

## Merge

```bash
# brings the changes in two branches together
# merges second branch into first branch
# use `git log --graph --all` to see
# it does produce ugly commit graphs
# look at the option of rebasing rather than merging
# keep your changes in first branch compatible with changes in the mainline (second branch, usually master)
# head will point to both of them; they'd be identical
git checkout <first-branch>
# merge the specified branch’s history into the currently checked out one
# the second branch remains unchanged
# type 1: fast-forward; the second branch is based on the first branch, or the first branch is the history of second branch. This type of merge is not reflected in the project history
# type 2: 3-way merge; when the history of two branches diverges, a dedicated extra merge commit is required to combine the branches and to function as a link between the two branches (it has two parents commits). Git looks at three commits (latest commits of the two branch, and the commit these two branches diverged from) to generate the final state of the merge, hence the "3". This situation may also give rise to a merge conflict, which must be manually resolved before anything can be committed to the repository. We can not only create independent lines of development, but we can also share information between them by tying together their histories with a 3-way merge
# merge conflicts occur when we try to merge branches that have edited the same content. Git doesn’t know how to combine the two changes, so it stops to ask us what to do before committing. We can see exactly what went wrong with the familiar `git status` command (this command shows us the staged snapshot of the merge commit; the “Unmerged paths” section contains files that have a conflict)
git merge <second-branch>

# force a merge commit when Git would normally do a fast-forward merge
git merge --no-ff <branch-name>

# sometimes you have to handle conflicts manually
# after fail-merging two branches with conflicts
# you're provided with conflicts in each file
# <<<<<<< HEAD : it's from your current branch until you reach the following mark
# =======
# >>>>>>> <branch-name> : from the above mark to this line, is from the branch you're trying to merge into the current branch
# decide which changes to keep (those marks should be removed)
# then you have to stage the changed files to mark them as resolved, check status again, and commit the conflict resolution using `git commit` without -m
```

## Rebase

```bash
# brings the changes in two branches together in a better way than what Merge does
# like the `git merge`, this command requires you to be on the branch that you want to move
# rebases first branch onto the second branch
# takes the entire first branch and plops it onto the tip of the second branch
# enables us to do a fast-forward merge later on
# also allows us to integrate the most up-to-date version of second branch without a merge commit
# apply any commits of current branch ahead of specified one
# use `git log --graph --all` to see
# the commit tree for the first branch will be rewritten so that the second branch is a part of the commit history
# it rewinds the head (current branch) to replay your work on top of it
# this leaves the chain of commits linear and much easier to read
# don’t use rebase if the branch is public and shared with others; rewriting publicly shared branches will tend to screw up other members of the team
# don't use rebase when the exact history of the commit branch is important (since rebase rewrites the commit history)
# use rebase for short-lived, local branches and merge for branches in the public repository
# less messy commit history (comparing to Merge)
# rebasing lets us move branches around by changing the commit that they are based on
# after rebasing, the feature branch has a new parent commit, which is the same commit pointed to by master. Instead of joining the branches with a merge commit, rebasing integrates the feature branch by building on top of master. The result is a perfectly linear history that reads more like a story than the hodgepodge of unrelated edits.
# we move from an old base to a new base
# commit history is grouped better than what we get when using Merge
# it effectively eliminates the need for merge commits, resulting in a completely linear history
# to an outside observer, it will seem as though you created every part of your project in a neatly planned sequence, even though you may have explored various alternatives or developed unrelated features in parallel
# gives you the power to choose exactly what gets stored in your repositories (-i)
# your history wouldn't reflect exactly what you’ve done
git checkout <first-branch>
git rebase <second-branch>

# rebase onto a commit which might not be a branch's latest commit
git rebase <commit>

# rebase interactively
# select actions for each commit
# during a rebase you can add, delete, and edit commits to your heart’s content, and the entire result will be moved to the new base
# we can choose how each commit is transferred to the new base
# common senario: combine multiple commits into one (condense our unnecessarily small commits into a single, meaningful snapshot) by changing `pick` to `squash`; Git stops to ask you what commit message to use for the combined snapshot resulting in our repository history being rewritten with brand new commits
# common senario: edit/alter/amend a commit by changing `pick` to `edit`; Git stops you to make your edits, stage them, and `commit --amend` (we're on the commit we decided to edit). You must use `git rebase --continue` after your commit to continue rebasing
# before we merge into the master branch, we should make sure we have a clean, meaningful history in our feature branch
# opens up a text editor populated with all of the commits introduced in the about branch, listed from oldest to newest
# the listing defines exactly how Git will transfer the commits to the new base, one by one
# leaving it as is will do a normal git rebase , but if we move the lines around, we can change the order in which commits are applied
# if you were to delete a line from the rebase listing, the associated commit wouldn’t be transferred to the new base, and its content would be lost forever
# you can run another interactive rebase session on the same branch (common senario: to edit your commits) and it will show you your current branch commits
git rebase -i <second-branch>

# continues a rebase if it's stopped for you fo take some action (e.g. after amending a commit)
git rebase --continue

# aborts a rebase if it's stopped for you fo take some action, and you can start over from scratch; returns the repository to its former state
git rebase --abort

# now, because the head of second branch is a direct ancestor of the head of the first branch, git is able to do a fast-forward merge; when fast-forwarding, the branch pointer is simply moved forward to point to the same commit as the first branch
# there will never be conflicts in a fast-forward merge
git checkout <second-branch>
git merge <first-branch>
```

## Remote & Multiple Repositories

Just as branches are an abstraction for the working directory, the staged snapshot, and a commit history, a repository is an abstraction for branches.

Remotes are for people, whereas branches are for topics.

```bash
# retrieve an entire repository from a hosted location via URL
# When you clone a repository, Git automatically adds an origin remote pointing to the original repository, under the assumption that you’ll probably want to interact with it down the road (see `git remote`)
git clone <url>

# using a local repo to clone
# commits history will be cloned too (more or less); the only difference should be in the names of the branches (log to see "origin")
# only the master branch will be cloned
# other branches can be created in the current clone repo (see `git branch -a` for a list of remote branches)
git clone <repo-directory-path> <clone-name>
```

```bash
# creates or clones a bare repository from another repo
# bare repositories (without working directories) are usually used for sharing
git clone --bare <repo-name> <repo-name>.git

# then you can `ls` the <repo-name>.git directory; it contains the .git directory contents from the remote repo
# convention: repositories ending in ‘.git’ are bare repositories
# there is no working directory in the <repo-name>.git repo
# it is nothing but the .git directory of a non-bare repo
```

```bash
# list your current remote branches
# remote branches are always listed in the form <remote‐name>/<branch‐name> so that they will never be mistaken for local branches
# we can use those names (<remote‐name>/<branch‐name>) wherever we need <branch> or <commit> in commands
git branch -r
```

```bash
# lists the remote repos the current repo knows about
git remote

# verbose
# shows the full path to your remote repository and whether they're designated as a “fetch” and a “push” location
git remote -v

# adds a remote repo as a remote to our local repo
# see `git clone` section to understand bare repos
# common names for remote repo are: origin, shared
# add a git URL/path as an alias
# bookmark another Git repository for easy access
git remote add <a-name-for-remote-repo> <bare-repo-relative-path>

# or
git remote add <a-name-for-remote-repo> <repo-relative-path>

# show more info about a remote repo
git remote show <remote-repo-name>
# e.g.
# the convention is to use the name "origin" for the primary centralized repository (if there is one)
git remote show origin
```

```bash
# fetch changes (new commits) from the remote repo, but it will not merge these commits into the local branches
# use `git log --all` after this command to see the commits from the remote repo (they are not integrated into the cloned repository’s local branches; note where "origin/HEAD" and "HEAD -> ..." are)
# our remote branches are not direct links into the remote repository—they are read-only copies of her branches, stored in our own repository. This means that we would have to do another fetch to access new updates.
git fetch

# fetch down all the branches from a Git remote
# alias is the name you gave to a remote
# populate our remote branch listing (`git branch -r`)
# will go to the “fetch” location shown in `git remote -v` and download all of the branches it finds there into our repository
# download remote branch information, but do not merge anything
git fetch <alias>

# then you can merge fetched changes to local branch
# merge a remote branch into your current branch to bring it up to date
git merge <alias>/<branch-name>
```

```bash
# puts you in a detached HEAD state
# we can’t continue developing if we’re not on a local branch
# we either need to merge it into our own local branch or create another branch
# or we can just see and do nothing
git checkout <remote-branch>
```

```bash
# is equivalent to a `git fetch` followed by a `git merge`
# your branch must be tracking the remote branch
# fetch and merge any commits from the tracking remote branch
git pull

# pulls changes from a remote repo
# to see the remote repos names use `git remote`
git pull <remote-repo-name> <branch-on-that-remote-repo>
```

```bash
# create a local branch which tracks a remote branch
git branch --track <branch-name> <branch-name-on-a-remote-or-another-local-branch>
```

```bash
# when your branch is tracking the remote branch
git push

# pushes changes to a remote repo
# to see the remote repos names use `git remote`
# transmit local branch commits to the remote repository branch
# alias is the name you gave to that remote
# if the branch in not present in the remote repo, a branch with that name will be created
# it does not automatically push tags associated with a particular branch
git push <alias> <branch-on-that-remote-repo>

# BEWARE! Don't lose tags. Instead of pushing the branch that contains the tag, Git requires us to manually push the tag itself.
git push <alias> <tag>
```

## Moving files

```bash
# git sees this as a rename
# change an existing file path and stage the move
git mv <existing-path> <new-path>

# to use git after moving the file
# you can forget about source control until the point you are ready to start committing code
mv <file> <directory>
git add <directory>/<file>
git rm <file>
# delete the file from project and stage the removal for commit; stop tracking the file and delete if necessary

# to rename a file such that git would understand: first rename the file, then use the following commands
git rm <previous-name>
git add <new-name>
git status
```

## Workflows

### Basic

- Create/edit files.
- Check status.
- Stage them as a snapshot.
- Check status again to see what's being committed.
- Test and repeat the previous steps if necessary.
- Commit the snapshot.
- Check the log.

### Merge feature or topic branches

- Create and checkout a branch for your feature.
- `git branch` to make sure.
- Work on it with the Basic workflow.
- When it's done, return to the master branch (checkout).
- `git branch` to make sure.
- If working with remote, fetch and pull to make the master updated.
- Checkout the feature branch agin.
- `git branch` to make sure.
- Rebase the feature branch onto the master branch. Squash to one commit.
- Return to master branch.
- `git branch` to make sure.
- Merge the feature branch into the master branch. It'll be a fast-forwarding merge.
- Delete the feature branch.
- `git branch` to make sure.
- Push to remote (if any).

### Hotfix

In contrast to long-running feature branches, hotfix
branches are used to quickly patch a production release (a quick update). For example, you’d
use a hotfix branch to fix a time-sensitive bug in a public software project.
This distinction is useful for demonstrating when it’s appropriate to create a
new branch.

- Just leave what's you're working on. Make sure your changes won't be lost. Push them if necessary.
- Check the log to make sure.
- Checkout master.
- `git branch` to make sure.
- Create and checkout a branch from master.
- `git branch` to make sure.
- Do the Basic workflow on the hotfix branch.
- Test your changes.
- Checkout master.
- `git branch` to make sure.
- Merge the hotfix branch into master. Do rebase if necessary.
- Delete the hotfix branch.
- `git branch` to make sure.

### Split a commit

- Rebase interactively the current branch/commit: `git rebase -i master`.
- Set `edit` as the action you want take on the desired commit.
- Save and close the file.
- Git will stop so you can edit your commit.
- `git reset --mixed HEAD~1` to move one step backward but still have the changes in WD.
- `git log` and `git status` to make sure.
- Make your changes you want to be in the first commit.
- Stage and commit them.
- Repeat the previous two steps as many times as you want.
- `git rebase --continue`.

### Revive a lost/dangling commit

- `git reflog` to see your actions on the repo.
- Find the commit ID representing the HEAD after that action you want back.
- Checkout that commit.
- `git log` to make sure.
- This puts us in a detached HEAD state, which means our HEAD is no longer
  on the tip of a branch. We’re actually in the opposite situation as we would be in when we check out a commit before the branch tip. Now, we’re looking at a commit after the tip of the branch, but we still have a detached HEAD.
- `git checkout -b <new-branch-name>` to turn our dangling commit into a full-fledged branch. We now have a branch that can be merged back into the project.
- `git branch` to make sure.
- `git log <previous-branch>..<new-branch>` to see what our new branch has that the previous branch hasn't. Decide if that's exactly what you're trying to take back.
- Checkout the previous branch so you can merge the revived commit(s) to it.
- `git branch` to make sure.
- `git log HEAD..<new-branch> --stat` to see what you're going to merge.
- Merge: `git merge <new-branch>`. It'd be an FF merge.
- Delete the new branch.

## Best practices

- You should never make changes directly to a previous revision/commit. Go to the latest commit on your branch and find your way from there.
- Commit a snapshot for each significant addition to your project.
- Don’t commit a snapshot if you can’t come up with a single, specific message for it.
- Consider the master branch as the stable project. It's for recording the evolution of a project.
- Create a new branch for each major addition to your project.
- Don’t create a branch if you can’t give it a specific name.
- You should never push into another developer’s repository.

## Git Intrnals

### Refs and Garbage Collection

### .git directory

```bash
ls .git
```

```bash
# objects store
# bunch of directories with 2 letter names. The directory names are the first two letters of the sha1 hash of the object stored in git
ls .git/objects
```

```bash
# some files with 38-character names (directory names are 2-letter)
# these are the files that contain the objects stored in git (compressed and encoded)
ls .git/objects/<dir>
```

```bash
# project-specific config file
# overrides global and system configurations (--global and --system) on duplicate entries
cat .git/config
```

```bash
# git references
ls .git/refs
```

```bash
# branches' heads
ls .git/refs/heads
```

```bash
# the HEAD file contains a reference to the current branch (ref: refs/heads/master)
cat .git/HEAD
```

```bash
# tags
ls .git/refs/tags
```

```bash
# specific tag
# its content is just the hash of the commit tied to the tag
cat .git/refs/tags/v1
```

```bash
# get the type of an object by its hash
git cat-file -t <hash>
```

```bash
# the dump of an object by its hash
# pretty-print the contents of object based on its type and using its hash
# it includes the tree hash too
# objects, trees, and blobs
git cat-file -p <hash>
```

```bash
# dump the directory tree referenced in the commit (see previous command)
# a description of the (top level) files in our project (for a commit)
git cat-file -p <tree-hash>
```

```bash
# moving forward into the sub-trees we get from the previous command
git cat-file -p <dir-hash>
```

```bash
# getting the content of a blob we get from the previous two commands
git cat-file -p <blob-hash>
```

## Hosting Git Repositories

### Git Server

### Pushing to Git Daemon

### Sharing Repos Across WIFI

## Other

### SSH Setup
