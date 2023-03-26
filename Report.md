## Continous Control - Technical report
-------------------------------------------

Ramaiah Radhakrishnan
Mar 26 2023

-----------------------------

### Learning Algorithm

I wanted to adopt [ShangtongZhang' elegant modular implementation](https://github.com/ShangtongZhang/DeepRL) but managing the python library installation
was too much to manage. I have to give up my try after struggling with three days - So I have to quickly decide on the algorithm to complete the project.
I chose Deep Detrministic Policy Gradient (DDPG) and the 20 agent option. I adopted the model.py and ddpg_agent.py from the Udacity repository. 

###  Model Architecture

Two identical Actor - critic neural networks - 33 states, 4 actions as input and outputs with two hidden layers with 400 and 300 nodes respectively.


### Hyperparameters

I had to adjust the buffer_size and Learning rates for both actor and critic to stabilize the learning. My first attempt with 
hidden layers 256, 128 with buffersize int(1e6) and critic learning rate 3e-4 resulted in divergence withing the first 20 episode run. I had to stop the 
run and played with those four hyperparaments till I settled on the below.

BUFFER_SIZE = int(1e5)  # replay buffer size

BATCH_SIZE = 128         # minibatch size

GAMMA = 0.99            # discount factor

TAU = 1e-3              # for soft update of target parameters

LR_ACTOR = 1e-4         # learning rate of the actor 
LR_CRITIC = 1e-4        # learning rate of the critic

WEIGHT_DECAY = 0   # L2 weight decay


### Plot of the scores (Results)

<img src="https://github.com/rradhakr-git/UdacityContinousControl/blob/main/ContinousControl.png?raw=true" />


### Future Work

 I wanted to get comfortable in adopting the elegant modular implementation of prof ShangtongZhang and try PPO along with DDPG. 
 
 I also want to comfortable with building the unity environment in my own setup. I was not successful when I started doing that before getting back into 
 Udacity lab. 
