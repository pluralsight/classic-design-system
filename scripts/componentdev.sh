COMPONENT=$1
SESSION="$COMPONENTdev"
tmux new-session -d -s $SESSION

# start docs
tmux new-window -t $SESSION:1 -n "docs"
tmux select-window -t $SESSION:1
tmux send-keys "nvm use; yarn start" C-m

# start build
tmux new-window -t $SESSION:2 -n "build"
tmux select-window -t $SESSION:2
tmux send-keys "cd packages/$COMPONENT; nvm use; yarn build:watch" C-m

# start storybook
tmux new-window -t $SESSION:3 -n "storybook"
tmux select-window -t $SESSION:3
tmux send-keys "cd packages/$COMPONENT; nvm use; yarn storybook" C-m

# start tests
tmux new-window -t $SESSION:4 -n "test"
tmux select-window -t $SESSION:4
tmux send-keys "cd packages/$COMPONENT; nvm use; yarn test:watch" C-m

# cmd window
tmux new-window -t $SESSION:5 -n "cmd"
tmux select-window -t $SESSION:5
tmux send-keys "cd packages/$COMPONENT; nvm use; git status" C-m

tmux-attach -t $SESSION
