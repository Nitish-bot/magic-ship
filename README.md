# Magic Ship

A simple game of battleship built on Solana using MagicBlock's Private Ephemeral Rollups (PER) showcasing both the onchain program as well as client side integration with seamless ux using session keys.

## Summary

- [Magic-Ship](#magic-ship)
  - [Summary](#summary)
  - [Run it locally](#run-it-locally)
  - [How it works](#how-it-works)
    - [Private Ephemeral Rollup](#private-ephemeral-rollup)
    - [How do private transfers work on PER?](#how-do-private-transfers-work-on-PER?)
  - [Payments provider use-case](#payments-provider-use-case)
  - [Running the demo](#running-the-demo)
    - [Installation](#installation)
    - [Run the app](#run-the-app)
    - [Usage guide](#usage-guide)
    - [Test the program](#test-the-program)

## Run it locally

- Install Rust, Node, Anchor, Solana CLI & Yarn
- run `yarn prep` to install js deps
- run `yarn dev` to start a dev server
- Your app should be running on localhost:3000

You can also test the onchain program by running `anchor test`

## How it works

### The program

https://en.wikipedia.org/wiki/Battleship_(game)
The game backend -> Delegation -> Permission group CPI

### The client

Uses kit to interact with the private state using magicblock client sdk

### Betting and settlement???

## Watch the Video
