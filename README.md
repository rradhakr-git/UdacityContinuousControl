# UdacityContinuousControl
Udacity Reinforcement Learning - project 2 - Continuous Control


# Project 2: Continuous Control

### Introduction

For this project, you will train an agent to navigate in a large, square world.  It uses rich simulation environments from Unity ML-Agents.

<img src="https://github.com/rradhakr-git/UdacityDRLBanana/blob/main/reacher.gif?raw=true" />

In this environment, a double-jointed arm can move to target locations. A reward of +0.1 is provided for each step that the agent's hand is in the goal location. Thus, the goal of your agent is to maintain its position at the target location for as many time steps as possible.

The observation space consists of 33 variables corresponding to position, rotation, velocity, and angular velocities of the arm. Each action is a vector with four numbers, corresponding to torque applicable to two joints. Every entry in the action vector should be a number between -1 and 1.

For this project, there are  two separate versions of the Unity environment:

The first version contains a single agent.
The second version contains 20 identical agents, each with its own copy of the environment.

This project is performed on second version i.e with twenty identical agents.

### Project target

The agents must get an average score of +30 (over 100 consecutive episodes, and over all agents). Specifically,

After each episode, Rewards are added up that each agent received (without discounting), to get a score for each agent. This yields 20 (potentially different) scores. This yields an average score for each episode (where the average is over all 20 agents).

### Udacity Project Review

Meets Specifications
Dear Udacian,

Great job getting acquainted with the Deep Deterministic Policy Gradients algorithm and implementing it to successfully solve the Reacher environment. The implementation is pretty good and the agent achieves an average score of +36 from 37 to 136 episodes. The architectures used for the actor and critic networks are good in size with two hidden layers each. Good work using relu and leaky_relu activations in the actor and critic networks, respectively. The report is extremely informative and covers all the important aspects of the implementation. :smile:

I would suggest you to go through Deep Reinforcement Learning for Self Driving Car by MIT. You'd get to know more about reinforcement learning algorithms in broader and real-world perspective and, more importantly, how to apply these techniques to real-world problems.

All the best for future endeavors. :sparkles:

### Getting started


Version 2: Twenty (20) Agents
Mac OSX: 
Linux: [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P2/Reacher/Reacher_Linux.zip)
Mac OSX: [click here]()
Windows (32-bit): [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P2/Reacher/Reacher.app.zip)
Windows (64-bit): [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P2/Reacher/Reacher_Windows_x86_64.zip)
Then, place the file in the 'p2_continuous-control/' folder in the DRLND GitHub repository, and unzip (or decompress) the file.

(For Windows users) Check out [this link](https://support.microsoft.com/en-us/help/827218/how-to-determine-whether-a-computer-is-running-a-32-bit-version-or-64) if you need help with determining if your computer is running a 32-bit version or 64-bit version of the Windows operating system.

(For AWS) If you'd like to train the agent on AWS (and have not enabled a virtual screen), then please use this [link](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P2/Reacher/one_agent/Reacher_Linux_NoVis.zip) (version 1) or this [link](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P2/Reacher/Reacher_Linux_NoVis.zip) (version 2) to obtain the "headless" version of the environment. You will not be able to watch the agent without enabling a virtual screen, but you will be able to train the agent. (To watch the agent, you should follow the instructions to enable a [virtual screen](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Training-on-Amazon-Web-Service.md), and then download the environment for the Linux operating system above.)

### Instructions

Run the  `Continuous_Control.ipynb` to train and test the agent - The Actor - Critic model classes is in the model.py and agent class is in the ddpg_agent.py. The actor and critic model weights stored as checkpoint_actor.pth and checkpoint_critic.pth. The Evaluation section in the notebook illustrates how these checkpoint files can be reloded to run the agent. 
