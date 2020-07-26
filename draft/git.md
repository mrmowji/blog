# Git

## Install

## Setup

```bash
git config --global user.name "Your name"
```

```bash
git config --global user.email username@something.com
```

```bash
git config --global core.editor "code --wait"
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
# to create a repository based on the directory w're currently in
git init
```

```bash
# see Remote section
git clone
```

## Status

```bash
# check the current status of the repository
# monitor the state between the repository and the working directory
git status
```

## Stage

```bash
# add a specific file to the staging area, so it'll be in the next commit
# think of snapshots
# a single file can be under both "changes to be commited" and "changes not staged for commit"
git add <file>

# add the current directory and below
# check status before this
git add .
```

## Commit

```bash
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
```

## Tagging

```bash
# see what tags are available
# to see tags on logs, see `git log --decorate`
git tag

# tag the current (checked out) commit with a name for future reference
# are unique per project; can't use the same tag twice (you must delete to reuse)
git tag v1

# remove a tag
git tag -d v1
```

## History

```bash
git log

git log --pretty=online

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
```

## Undo & Redo

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
# unstage
# resets the staging area to be whatever is in HEAD
# the reset command (by default) doesn’t change the working directory; use 'git checkout -- <file>' command after
git reset HEAD <file>

# undo committed changes
# undo the last commit by creating a new commit that reverses the unwanted changes
# so there would be two commits
# it's safe even on branches that are publicly shared on remote repositories
# think of snapshots (every commit has all the changed files and references to the previous commit for every unchanged files)
# may have conflicts and you have to resolve them (Why do we need to have conflicts? Does it make any sense?)
# it opens the editor for you to specify the message
git revert HEAD
# this one doesn't open the editor
git revert HEAD --no-edit

git revert <commit-hash>

# remove commits from a branch
# rewrite the current branch to point to the specified commit
# reset a branch to the specified commit (`git checkout <branch>` will bring that commit)
# --hard indicates that the working directory should be updated to be consistent with the new branch head
git reset --hard <tag>
git reset --hard <commit-hash>

git checkout <commit-hash>

# checkout by tag (e.g. v1)
git checkout v1

# checkout the commit prior to the commit with tag v1 (probably versioned v1)
# checkout the parent actually
git checkout v1~1
# or
git checkout v1^

# go back to the latest version (in the master branch)
# test it after checking out an older commit in the master branch
git checkout master

# go to the latest version of a branch
git checkout <branch-name>
```

```bash


```

## Branch

```bash
# lists available branches in the current (**local**) repo
git branch

# lists remote branches too
# branches starting with remotes/origin are branches from the original repo
git branch -a

# create and checkout a branch at the same time (see the next command)
git checkout -b <name>

# create a branch
# to checkout see `git checkout` commands
# then get status, change, add to staging area, and commit
# you can use `git log --all --graph` to see all commits from all branches and how they diverge
git branch <name>
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
git merge <second-branch>

# sometimes you have to handle conflicts manually
# after fail-merging two branches with conflicts
# you're provided with conflicts in each file
# <<<<<<< HEAD : it's from your current branch until you reach the following mark
# =======
# >>>>>>> <branch-name> : from the above mark to this line, is from the branch you're trying to merge into the current branch
# then you have to commit the conflict resolution
```

## Rebase

```bash
# brings the changes in two branches together
# rebases second branch into first branch
# use `git log --graph --all` to see
# the commit tree for the first branch will be rewritten so that the second branch is a part of the commit history
# it rewinds the head (current branch) to replay your work on top of it
# this leaves the chain of commits linear and much easier to read
# don’t use rebase if the branch is public and shared with others; rewriting publicly shared branches will tend to screw up other members of the team
# don't use rebase when the exact history of the commit branch is important (since rebase rewrites the commit history)
# use rebase for short-lived, local branches and merge for branches in the public repository
git checkout <first-branch>
git rebase <second-branch>

# now, because the head of second branch is a direct ancestor of the head of the first branch, git is able to do a fast-forward merge; when fast-forwarding, the branch pointer is simply moved forward to point to the same commit as the first branch
# there will never be conflicts in a fast-forward merge
git checkout <second-branch>
git merge <first-branch>
```

## Remote & Multiple Repositories

```bash
# using a local repo to clone
# commits history will be cloned too (more or less); the only difference should be in the names of the branches (log to see "origin")
# only the master branch will be cloned
# other branches can be created in the current clone repo (see `git branch -a` for a list of remote branches)
git clone <repo-directory> <clone-name>
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
# adds a remote repo as a remote to our local repo
# see `git clone` section to understand bare repos
# common names for remote repo are: origin, shared
git remote add <a-name-for-remote-repo> <bare-repo-relative-path>

# lists the remote repos the current repo knows about
git remote

# show more info about a remote repo
git remote show <remote-repo-name>
# e.g.
# the convention is to use the name "origin" for the primary centralized repository (if there is one)
git remote show origin
```

```bash
# fetch changes (new commits) from the remote repo, but it will not merge these commits into the local branches
# use `git log --all` after this command to see the commits from the remote repo (they are not integrated into the cloned repository’s local branches; note where "origin/HEAD" and "HEAD -> ..." are)
git fetch

# then you can merge fetched changes to local branch
# <branch-name> is the name of the branch our current repo is tracking or is a clone of
git merge origin/<branch-name>
```

```bash
# is equivalent to a `git fetch` followed by a `git merge`
# your branch must be tracking the remote branch
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
git push <remote-repo-name> <branch-on-that-remote-repo>
```

## Moving files

```bash
# git sees this as a rename
git mv <file> <directory>

# to use git after moving the file
# you can forget about source control until the point you are ready to start committing code
mv <file> <directory>
git add <directory>/<file>
git rm <file>
```

## Workflows

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
