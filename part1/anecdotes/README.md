# Anecdotes

A small app that displays a random programming anecdote and lets users vote for their favourites. The anecdote with the most votes is shown at the bottom.

The interesting challenge here was storing vote counts as an array in state — one entry per anecdote — and updating it immutably using the spread operator rather than mutating the array directly.

Random selection uses `Math.random()` to pick a new index on each button click.

## Stack

- React + Vite
