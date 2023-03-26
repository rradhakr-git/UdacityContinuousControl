---
application-name: Udacity
description: Discover online classes taught by top instructors and
  industry experts. Take courses at your own pace.
google-site-verification: ELX2btu3VElBKIdvkGj5ESBnJh_Dg9PnWjuCwVkPEkA
lang: en
msapplication-TileColor: "#FFFFFF"
msapplication-TileImage: assets/img/logos/udacity/windows_tile/udacity-full-144x144.png
robots: noodp
title: Audit project submission
twitter:card: summary_large_image
twitter:description: A review of my work and personalized tips to
  improve.
twitter:image: "https://s3-us-west-1.amazonaws.com/udacity-content/images/reviews/twitter-thumbnail-neutral.png
  "
twitter:site: \@udacity
twitter:title: Udacity Project Feedback
viewport: width=device-width, initial-scale=1
---

::: {.ng-scope ng-include="main.pageContext.headerURL"}
::: {.navbar .site-nav .navbar-inverse .navbar-static-top .ng-scope}
::: container
::: navbar-header
[Toggle navigation]{.sr-only .ng-scope translate=""} []{.icon-bar}
[]{.icon-bar} []{.icon-bar}

[![Udacity
Logo](./Auditprojectsubmission_files/logo.min.svg)](https://udacity.com/){#header-logo
.logo .navbar-brand}
:::

-   [Logout](https://review.udacity.com/){.ng-scope
    ng-click="main.logout()" translate=""}

```{=html}
<!-- -->
```
-   
:::
:::
:::

::: {#page-content qualaroo-survey-info-hack="" role="main"}
::: {.container-fluid loading-container=""}
::: {.row .ng-hide ng-show="loading" style=""}
::: {.col-sm-6 .col-sm-offset-3 .text-center}
::: {.row .row-gap-huge}
:::

![](./Auditprojectsubmission_files/loading.gif)

::: {.row .row-gap-huge}
:::
:::
:::

::: {ng-show="!loading" style=""}
::: {ng-transclude=""}
::: {.row .row-gap-medium .ng-scope .ng-isolate-scope .ng-hide .fadeOutUp .animated ng-show="!!message && !dismissed" ng-class="{fadeInDown: !!message, fadeOutUp: dismissed, animated: !!message || dismissed}" alert-box="" style=""}
::: {.col-md-offset-2 .col-md-8}
::: {.alert .hr-slim .alert-info}
[×]{aria-hidden="true"}

[]{.ng-binding ng-bind-html="message"}
:::
:::
:::

::: {.ng-scope ui-view="" autoscroll="true"}
::: {.row .ng-scope}
::: {.col-xs-12 .col-lg-10 .col-lg-offset-1}
::: review-header
::: review-header__links
<div>

[[]{.arrow}  [Return to Classroom]{.ng-scope
translate=""}](https://review.udacity.com/){.course-link
ng-click="goToClassroomPath()"}

</div>
:::

# Continuous Control {#continuous-control .project-name-career-service .ng-binding}
:::

::: {.row .row-gap-medium}
:::

::: review-container
-   [Review](https://review.udacity.com/){.ng-binding
    ng-click="showTab('feedback')"}
-   [History](https://review.udacity.com/){.ng-binding
    ng-click="showTab('history')"}

```{=html}
<!-- -->
```
-   [Review](https://review.udacity.com/){.ng-binding
    ng-click="showTab('feedback')"}
-   [Code Review ](https://review.udacity.com/){.ng-binding
    ng-click="showTab('code')"}
-   [History](https://review.udacity.com/){.ng-binding
    ng-click="showTab('history')"}

::: {.row .review-tab-body}
::: {.col-sm-10 .col-sm-offset-1}
::: {.ng-hide ng-show="isUngradeable()"}
::: {.row .row-gap-medium}
:::

::: {.section ng-show="isCurrentTab('feedback')" style=""}
::: ungradeable-tab
## Unable to review {#unable-to-review .result-label .ng-scope translate=""}

::: {ng-hide="submission.ungradeable_tag === 'plagiarism'"}
Your project could not be reviewed. Please resubmit after you address
the issue noted below by the reviewer.
:::

::: {.ng-hide ng-show="submission.ungradeable_tag === 'plagiarism'"}
[Key parts of your submission were the same as another student\'s
submission or an online source.]{.ng-scope translate=""} [Please
resubmit after you address the issue noted below by the
reviewer.]{.ng-scope translate=""}

#### Potential Source URL: {#potential-source-url .ng-scope translate="" style="display: inline;"}

[](https://review.udacity.com/){.ng-binding}
:::

::: {.row .row-gap-small}
:::

::: {.row .row-gap-small .ng-scope ng-if="submission.archive_url" style=""}
::: {.col-xs-12 .text-center .wide-and-bold}
[![](./Auditprojectsubmission_files/download-icon.svg){.img-initial
.icon-medium}Download project
files](https://api.udacity.com/api/review/v1/submissions/3988302/archive){.ng-binding
download=""}
:::
:::

::: {.row .row-gap-small}
 
:::
:::
:::

::: {.section .ng-hide ng-show="isCurrentTab('history')" style=""}
::: {.ng-scope .ng-isolate-scope reviews-list="" ng-if="pastReviews !== undefined" reviews="pastReviews" this-review="submission"}
## [ Review #1 ]{.ng-binding .ng-scope ng-if="thisReview.status !== 'canceled'" style=""} [ (this review)]{.ng-binding} {#review-1-this-review .review-list-name .current-review-name .h-slim}

[[Reviewed]{.ng-scope ng-if="thisReview.status !== 'canceled'"
translate=""} [43m ago]{am-time-ago="thisReview.completed_at"}]{.small}

::: {.text-uppercase .submission-notes-header .ng-scope translate=""}
student notes
:::

::: submission-notes
[None provided]{.ng-binding .ng-scope ng-if="!thisReview.notes"
style=""}
:::

::: {.row .row-gap-large}
:::
:::
:::
:::

::: {ng-hide="isUngradeable()"}
::: {.row .row-gap-medium}
:::

::: {.section .ng-hide ng-show="isCurrentTab('history')" style=""}
::: {.ng-scope .ng-isolate-scope reviews-list="" ng-if="pastReviews !== undefined" reviews="pastReviews" this-review="submission" is-career="currentProject.is_career"}
## [ Review #1 ]{.ng-binding .ng-scope ng-if="thisReview.status !== 'canceled'" style=""} [ (this review)]{.ng-binding} {#review-1-this-review-1 .review-list-name .current-review-name .h-slim}

[[Reviewed]{.ng-scope ng-if="thisReview.status !== 'canceled'"
translate=""} [43m ago]{am-time-ago="thisReview.completed_at"}]{.small}

::: {.text-uppercase .submission-notes-header .ng-scope translate=""}
student notes
:::

::: submission-notes
[None provided]{.ng-binding .ng-scope ng-if="!thisReview.notes"
style=""}
:::

::: {.row .row-gap-large}
:::
:::
:::

::: {.section .code-section .ng-hide ng-show="isCurrentTab('code')" style=""}
::: {.ng-scope .ng-isolate-scope code-review="" ng-if="files && currentRubric" files="files" rubric="currentRubric" allow-comments="false"}
::: {.ng-hide ng-show="allowComments" style=""}
::: {.row .row-gap-small}
:::
:::

::: {.code-section-item .ng-scope ng-repeat="file in files" ng-show="isFileVisible(file)" style=""}
::: {.code-section-item-title ng-click="setCurrentFileIndex($index)"}
[[ ]{.glyphicon .glyphicon-triangle-right
ng-class="{'glyphicon-triangle-right': currentFileIndex !== $index, 'glyphicon-triangle-bottom': currentFileIndex === $index}"}]{.small}
**README.md**
:::
:::

::: {.code-section-item .ng-scope ng-repeat="file in files" ng-show="isFileVisible(file)"}
::: {.code-section-item-title ng-click="setCurrentFileIndex($index)"}
[[ ]{.glyphicon .glyphicon-triangle-right
ng-class="{'glyphicon-triangle-right': currentFileIndex !== $index, 'glyphicon-triangle-bottom': currentFileIndex === $index}"}]{.small}
**Report.md**
:::
:::

::: {.code-section-item .ng-scope ng-repeat="file in files" ng-show="isFileVisible(file)"}
::: {.code-section-item-title ng-click="setCurrentFileIndex($index)"}
[[ ]{.glyphicon .glyphicon-triangle-right
ng-class="{'glyphicon-triangle-right': currentFileIndex !== $index, 'glyphicon-triangle-bottom': currentFileIndex === $index}"}]{.small}
**ddpg_agent.py**
:::
:::

::: {.code-section-item .ng-scope ng-repeat="file in files" ng-show="isFileVisible(file)"}
::: {.code-section-item-title ng-click="setCurrentFileIndex($index)"}
[[ ]{.glyphicon .glyphicon-triangle-right
ng-class="{'glyphicon-triangle-right': currentFileIndex !== $index, 'glyphicon-triangle-bottom': currentFileIndex === $index}"}]{.small}
**model.py**
:::
:::
:::

::: {.row .row-gap-medium}
:::
:::

::: {.section .ng-hide ng-show="isCurrentTab('annotation')"}
::: {.row .row-gap-large}
::: {.col-xs-12 .annotation-text .ng-scope translate=""}
Your reviewer has provided annotations for your project
:::
:::

::: {.row .row-gap-medium}
::: col-xs-12
[Download annotations](https://review.udacity.com/){.btn .btn-primary
.btn-sm .ng-binding download="" _target="_blank"}
:::
:::

::: {.row .row-gap-huge}
:::
:::

::: {.section .ng-scope ng-if="critiquesAccessor" ng-show="isCurrentTab('feedback')" style=""}
::: {.flex-bio .ng-scope ng-if="hasFeedback && submission.result" ng-class="{'send-right': currentProject.is_career}"}
## Meets Specifications {#meets-specifications .result-label .h-slim-top .ng-binding ng-show="!currentProject.is_career"}
:::

::: {.row .row-gap-medium .ng-scope ng-if="submission.general_comment"}
::: {.col-xs-12 .ng-isolate-scope marked="submission.general_comment"}
Dear Udacian,

Great job getting acquainted with the Deep Deterministic Policy
Gradients algorithm and implementing it to successfully solve the
Reacher environment. The implementation is pretty good and the agent
achieves an average score of +36 from 37 to 136 episodes. The
architectures used for the actor and critic networks are good in size
with two hidden layers each. Good work using `relu` and `leaky_relu`
activations in the actor and critic networks, respectively. The report
is extremely informative and covers all the important aspects of the
implementation.
![:smile:](./Auditprojectsubmission_files/smile.png ":smile:"){.emoji}

I would suggest you to go through [Deep Reinforcement Learning for Self
Driving Car by
MIT](https://www.youtube.com/watch?v=MQ6pP65o7OM&feature=youtu.be){target="_blank"}.
You\'d get to know more about reinforcement learning algorithms in
broader and real-world perspective and, more importantly, how to apply
these techniques to real-world problems.

All the best for future endeavors.
![:sparkles:](./Auditprojectsubmission_files/sparkles.png ":sparkles:"){.emoji}
:::
:::

::: {.ng-isolate-scope critiques-editor="" critiques-accessor="critiquesAccessor" editable="false" is-career="currentProject.is_career"}
::: {.ng-scope ng-repeat="section in critiquesAccessor.getSections()"}
::: {.ng-isolate-scope section-critiques="" section="section" critiques="critiquesAccessor.getCritiques(section.id)" editable="editable" failed-required-placeholder="failedRequiredPlaceholder" passed-required-placeholder="passedRequiredPlaceholder" optional-placeholder="optionalPlaceholder" state="sectionCritiquesState[section.id]" is-career="isCareer"}
<div>

::: {.row .row-gap-small}
:::

## Training Code {#training-code .section-name .ng-binding}

<div>

::: {.ng-scope ng-repeat="critique in critiques"}
::: {.ng-isolate-scope row="" row-gap-small="" col-xs-12="" bg-white="" scroll-if="isCurrentEditingCritique(critique.id)"}
::: {.critique-container .ng-scope .ng-isolate-scope critique-view="" critique="critique" editable="editable" is-career="isCareer" edit-clicked="setEditingCritique(critique.id, true)" ng-if="!isEditingCritique(critique.id)"}
::: critique-view-header
::: {.row .result-label}
::: col-sm-1
::: result-spacing
[]{.result-icon .passed .text-center ng-hide="isCareer"}
:::
:::

::: {.col-xs-12 .col-sm-10 .critique-description .ng-isolate-scope marked="rubricItem.passed_description"}
The repository includes functional, well-documented, and organized code
for training the agent.
:::
:::
:::

::: {.critique-view-body .ng-scope ng-if="!!critique.observation"}
::: row
::: {.col-xs-12 .col-sm-10 .col-sm-offset-1}
::: {.p-slim .ng-isolate-scope marked="critique.observation"}
## Awesome

-   Good work implementing DDPG algorithm to solve robotic-arms Reacher
    environment.
-   Implementation of the Actor and Critic networks is correct.
-   Good work using the target networks for Actor and Critic networks.
    The original DDPG paper suggests it as well.
-   Good work using soft updates for the target network.
-   Good choice to use tau to perform soft update.
-   Correct usage of replay memory to store and recall experience
    tuples.
-   The implementation is easy to debug and easily extensible, good work
    keeping it highly modular.
:::
:::
:::
:::
:::
:::
:::

::: {.ng-scope ng-repeat="critique in critiques"}
::: {.ng-isolate-scope row="" row-gap-small="" col-xs-12="" bg-white="" scroll-if="isCurrentEditingCritique(critique.id)"}
::: {.critique-container .ng-scope .ng-isolate-scope critique-view="" critique="critique" editable="editable" is-career="isCareer" edit-clicked="setEditingCritique(critique.id, true)" ng-if="!isEditingCritique(critique.id)"}
::: critique-view-header
::: {.row .result-label}
::: col-sm-1
::: result-spacing
[]{.result-icon .passed .text-center ng-hide="isCareer"}
:::
:::

::: {.col-xs-12 .col-sm-10 .critique-description .ng-isolate-scope marked="rubricItem.passed_description"}
The code is written in PyTorch and Python 3.
:::
:::
:::

::: {.critique-view-body .ng-scope ng-if="!!critique.observation"}
::: row
::: {.col-xs-12 .col-sm-10 .col-sm-offset-1}
::: {.p-slim .ng-isolate-scope marked="critique.observation"}
## Awesome {#awesome}

The code is written in PyTorch and Python 3.

Lately, PyTorch and TensorFlow happen to be most extensively used
frameworks in deep learning. It would be good to get some insight by
comparing them, please see the following resources:

-   [Sebastian Thrun on
    TensorFlow](https://www.youtube.com/watch?v=guBrLgRKJuw){target="_blank"}
-   [PyTorch vs TensorFlow --- spotting the
    difference](https://towardsdatascience.com/pytorch-vs-tensorflow-spotting-the-difference-25c75777377b){target="_blank"}
-   [Tensorflow or PyTorch : The Force is Strong with which
    One?](https://medium.com/@UdacityINDIA/tensorflow-or-pytorch-the-force-is-strong-with-which-one-68226bb7dab4){target="_blank"}
:::
:::
:::
:::
:::
:::
:::

::: {.ng-scope ng-repeat="critique in critiques"}
::: {.ng-isolate-scope row="" row-gap-small="" col-xs-12="" bg-white="" scroll-if="isCurrentEditingCritique(critique.id)"}
::: {.critique-container .ng-scope .ng-isolate-scope critique-view="" critique="critique" editable="editable" is-career="isCareer" edit-clicked="setEditingCritique(critique.id, true)" ng-if="!isEditingCritique(critique.id)"}
::: critique-view-header
::: {.row .result-label}
::: col-sm-1
::: result-spacing
[]{.result-icon .passed .text-center ng-hide="isCareer"}
:::
:::

::: {.col-xs-12 .col-sm-10 .critique-description .ng-isolate-scope marked="rubricItem.passed_description"}
The submission includes the saved model weights of the successful agent.
:::
:::
:::

::: {.critique-view-body .ng-scope ng-if="!!critique.observation"}
::: row
::: {.col-xs-12 .col-sm-10 .col-sm-offset-1}
::: {.p-slim .ng-isolate-scope marked="critique.observation"}
## Awesome {#awesome}

-   Saved model weights of the successful agent have been submitted.
-   `checkpoint_actor.pth` and `checkpoint_critic.pth` files are present
    in the submission.
:::
:::
:::
:::
:::
:::
:::

</div>

</div>
:::
:::

::: {.ng-scope ng-repeat="section in critiquesAccessor.getSections()"}
::: {.ng-isolate-scope section-critiques="" section="section" critiques="critiquesAccessor.getCritiques(section.id)" editable="editable" failed-required-placeholder="failedRequiredPlaceholder" passed-required-placeholder="passedRequiredPlaceholder" optional-placeholder="optionalPlaceholder" state="sectionCritiquesState[section.id]" is-career="isCareer"}
<div>

::: {.row .row-gap-small}
:::

## README {#readme .section-name .ng-binding}

<div>

::: {.ng-scope ng-repeat="critique in critiques"}
::: {.ng-isolate-scope row="" row-gap-small="" col-xs-12="" bg-white="" scroll-if="isCurrentEditingCritique(critique.id)"}
::: {.critique-container .ng-scope .ng-isolate-scope critique-view="" critique="critique" editable="editable" is-career="isCareer" edit-clicked="setEditingCritique(critique.id, true)" ng-if="!isEditingCritique(critique.id)"}
::: critique-view-header
::: {.row .result-label}
::: col-sm-1
::: result-spacing
[]{.result-icon .passed .text-center ng-hide="isCareer"}
:::
:::

::: {.col-xs-12 .col-sm-10 .critique-description .ng-isolate-scope marked="rubricItem.passed_description"}
The GitHub submission includes a `README.md` file in the root of the
repository.
:::
:::
:::

::: {.critique-view-body .ng-scope ng-if="!!critique.observation"}
::: row
::: {.col-xs-12 .col-sm-10 .col-sm-offset-1}
::: {.p-slim .ng-isolate-scope marked="critique.observation"}
## Awesome {#awesome}

-   Great work documenting the project details and submitting the README
    file.
:::
:::
:::
:::
:::
:::
:::

::: {.ng-scope ng-repeat="critique in critiques"}
::: {.ng-isolate-scope row="" row-gap-small="" col-xs-12="" bg-white="" scroll-if="isCurrentEditingCritique(critique.id)"}
::: {.critique-container .ng-scope .ng-isolate-scope critique-view="" critique="critique" editable="editable" is-career="isCareer" edit-clicked="setEditingCritique(critique.id, true)" ng-if="!isEditingCritique(critique.id)"}
::: critique-view-header
::: {.row .result-label}
::: col-sm-1
::: result-spacing
[]{.result-icon .passed .text-center ng-hide="isCareer"}
:::
:::

::: {.col-xs-12 .col-sm-10 .critique-description .ng-isolate-scope marked="rubricItem.passed_description"}
The README describes the the project environment details (i.e., the
state and action spaces, and when the environment is considered solved).
:::
:::
:::

::: {.critique-view-body .ng-scope ng-if="!!critique.observation"}
::: row
::: {.col-xs-12 .col-sm-10 .col-sm-offset-1}
::: {.p-slim .ng-isolate-scope marked="critique.observation"}
## Awesome {#awesome}

-   Great work providing the details of the project environment in the
    `Introduction` section of the README.
-   The section describes the project environment by specifying the
    state space, action space, and the desired results.
:::
:::
:::
:::
:::
:::
:::

::: {.ng-scope ng-repeat="critique in critiques"}
::: {.ng-isolate-scope row="" row-gap-small="" col-xs-12="" bg-white="" scroll-if="isCurrentEditingCritique(critique.id)"}
::: {.critique-container .ng-scope .ng-isolate-scope critique-view="" critique="critique" editable="editable" is-career="isCareer" edit-clicked="setEditingCritique(critique.id, true)" ng-if="!isEditingCritique(critique.id)"}
::: critique-view-header
::: {.row .result-label}
::: col-sm-1
::: result-spacing
[]{.result-icon .passed .text-center ng-hide="isCareer"}
:::
:::

::: {.col-xs-12 .col-sm-10 .critique-description .ng-isolate-scope marked="rubricItem.passed_description"}
The README has instructions for installing dependencies or downloading
needed files.
:::
:::
:::

::: {.critique-view-body .ng-scope ng-if="!!critique.observation"}
::: row
::: {.col-xs-12 .col-sm-10 .col-sm-offset-1}
::: {.p-slim .ng-isolate-scope marked="critique.observation"}
## Awesome {#awesome}

-   Great work providing the all the necessary instructions in the
    `Getting Started` section to download the environment.
:::
:::
:::
:::
:::
:::
:::

::: {.ng-scope ng-repeat="critique in critiques"}
::: {.ng-isolate-scope row="" row-gap-small="" col-xs-12="" bg-white="" scroll-if="isCurrentEditingCritique(critique.id)"}
::: {.critique-container .ng-scope .ng-isolate-scope critique-view="" critique="critique" editable="editable" is-career="isCareer" edit-clicked="setEditingCritique(critique.id, true)" ng-if="!isEditingCritique(critique.id)"}
::: critique-view-header
::: {.row .result-label}
::: col-sm-1
::: result-spacing
[]{.result-icon .passed .text-center ng-hide="isCareer"}
:::
:::

::: {.col-xs-12 .col-sm-10 .critique-description .ng-isolate-scope marked="rubricItem.passed_description"}
The README describes how to run the code in the repository, to train the
agent. For additional resources on creating READMEs or using Markdown,
see [here](https://www.udacity.com/courses/ud777){target="_blank"} and
[here](https://guides.github.com/features/mastering-markdown/){target="_blank"}.
:::
:::
:::

::: {.critique-view-body .ng-scope ng-if="!!critique.observation"}
::: row
::: {.col-xs-12 .col-sm-10 .col-sm-offset-1}
::: {.p-slim .ng-isolate-scope marked="critique.observation"}
## Awesome {#awesome}

-   Great work providing necessary instructions to run the code in the
    `Instructions` section.
-   All the cells in `Continuous_Control.ipynb` file should be executed
    to train the agent.
:::
:::
:::
:::
:::
:::
:::

</div>

</div>
:::
:::

::: {.ng-scope ng-repeat="section in critiquesAccessor.getSections()"}
::: {.ng-isolate-scope section-critiques="" section="section" critiques="critiquesAccessor.getCritiques(section.id)" editable="editable" failed-required-placeholder="failedRequiredPlaceholder" passed-required-placeholder="passedRequiredPlaceholder" optional-placeholder="optionalPlaceholder" state="sectionCritiquesState[section.id]" is-career="isCareer"}
<div>

::: {.row .row-gap-small}
:::

## Report {#report .section-name .ng-binding}

<div>

::: {.ng-scope ng-repeat="critique in critiques"}
::: {.ng-isolate-scope row="" row-gap-small="" col-xs-12="" bg-white="" scroll-if="isCurrentEditingCritique(critique.id)"}
::: {.critique-container .ng-scope .ng-isolate-scope critique-view="" critique="critique" editable="editable" is-career="isCareer" edit-clicked="setEditingCritique(critique.id, true)" ng-if="!isEditingCritique(critique.id)"}
::: critique-view-header
::: {.row .result-label}
::: col-sm-1
::: result-spacing
[]{.result-icon .passed .text-center ng-hide="isCareer"}
:::
:::

::: {.col-xs-12 .col-sm-10 .critique-description .ng-isolate-scope marked="rubricItem.passed_description"}
The submission includes a file in the root of the GitHub repository (one
of `Report.md`, `Report.ipynb`, or `Report.pdf`) that provides a
description of the implementation.
:::
:::
:::

::: {.critique-view-body .ng-scope ng-if="!!critique.observation"}
::: row
::: {.col-xs-12 .col-sm-10 .col-sm-offset-1}
::: {.p-slim .ng-isolate-scope marked="critique.observation"}
## Awesome {#awesome}

-   Report for the project with all the details of the implementation
    has been provided in the submission.
:::
:::
:::
:::
:::
:::
:::

::: {.ng-scope ng-repeat="critique in critiques"}
::: {.ng-isolate-scope row="" row-gap-small="" col-xs-12="" bg-white="" scroll-if="isCurrentEditingCritique(critique.id)"}
::: {.critique-container .ng-scope .ng-isolate-scope critique-view="" critique="critique" editable="editable" is-career="isCareer" edit-clicked="setEditingCritique(critique.id, true)" ng-if="!isEditingCritique(critique.id)"}
::: critique-view-header
::: {.row .result-label}
::: col-sm-1
::: result-spacing
[]{.result-icon .passed .text-center ng-hide="isCareer"}
:::
:::

::: {.col-xs-12 .col-sm-10 .critique-description .ng-isolate-scope marked="rubricItem.passed_description"}
The report clearly describes the learning algorithm, along with the
chosen hyperparameters. It also describes the model architectures for
any neural networks.
:::
:::
:::

::: {.critique-view-body .ng-scope ng-if="!!critique.observation"}
::: row
::: {.col-xs-12 .col-sm-10 .col-sm-offset-1}
::: {.p-slim .ng-isolate-scope marked="critique.observation"}
## Awesome {#awesome}

Great work providing the details of the implemented agent. Details of
the learning algorithm used, hyper-parameters, and architectural
information of the deep learning model have been provided.

-   Good decision to choose DDPG algorithm for the continuous action
    space problem.
-   Good work including model architecture in the report.
-   Good work using two hidden layers in the actor and critic networks.
-   Good decision to use `relu` and `leaky_relu` activations in the
    actor and critic networks, respectively.
-   Hyperparameters you have used seem to be good.

## Suggestions

You should definitely try using `batch normalization`.

To experiment more with the architecture and hyperparameters, you can
check the following resources:

-   [Deep Deterministic Policy Gradients in
    TensorFlow](http://pemami4911.github.io/blog/2016/08/21/ddpg-rl.html){target="_blank"}
-   [Continuous control with Deep Reinforcement
    Learning](https://arxiv.org/pdf/1509.02971.pdf){target="_blank"}
:::
:::
:::
:::
:::
:::
:::

::: {.ng-scope ng-repeat="critique in critiques"}
::: {.ng-isolate-scope row="" row-gap-small="" col-xs-12="" bg-white="" scroll-if="isCurrentEditingCritique(critique.id)"}
::: {.critique-container .ng-scope .ng-isolate-scope critique-view="" critique="critique" editable="editable" is-career="isCareer" edit-clicked="setEditingCritique(critique.id, true)" ng-if="!isEditingCritique(critique.id)"}
::: critique-view-header
::: {.row .result-label}
::: col-sm-1
::: result-spacing
[]{.result-icon .passed .text-center ng-hide="isCareer"}
:::
:::

::: {.col-xs-12 .col-sm-10 .critique-description .ng-isolate-scope marked="rubricItem.passed_description"}
A plot of rewards per episode is included to illustrate that either:

-   ***\[version 1\]*** the agent receives an average reward (over 100
    episodes) of at least +30, or
-   ***\[version 2\]*** the agent is able to receive an average reward
    (over 100 episodes, and over all 20 agents) of at least +30.

The submission reports the number of episodes needed to solve the
environment.
:::
:::
:::

::: {.critique-view-body .ng-scope ng-if="!!critique.observation"}
::: row
::: {.col-xs-12 .col-sm-10 .col-sm-offset-1}
::: {.p-slim .ng-isolate-scope marked="critique.observation"}
## Awesome {#awesome}

-   Discussion for the rewards is provided in the report.
-   The rewards plot seems to be good and average score of +36.25 is
    achieved in from 37 to 136 episodes.

------------------------------------------------------------------------

Reinforcement learning algorithms are really hard to make work.\
But it is substantial to put efforts in reinforcement learning as it is
close to Artificial General Intelligence.\
This article is a must read: [Deep Reinforcement Learning Doesn\'t Work
Yet](https://www.alexirpan.com/2018/02/14/rl-hard.html){target="_blank"}.
:::
:::
:::
:::
:::
:::
:::

::: {.ng-scope ng-repeat="critique in critiques"}
::: {.ng-isolate-scope row="" row-gap-small="" col-xs-12="" bg-white="" scroll-if="isCurrentEditingCritique(critique.id)"}
::: {.critique-container .ng-scope .ng-isolate-scope critique-view="" critique="critique" editable="editable" is-career="isCareer" edit-clicked="setEditingCritique(critique.id, true)" ng-if="!isEditingCritique(critique.id)"}
::: critique-view-header
::: {.row .result-label}
::: col-sm-1
::: result-spacing
[]{.result-icon .passed .text-center ng-hide="isCareer"}
:::
:::

::: {.col-xs-12 .col-sm-10 .critique-description .ng-isolate-scope marked="rubricItem.passed_description"}
The submission has concrete future ideas for improving the agent\'s
performance.
:::
:::
:::

::: {.critique-view-body .ng-scope ng-if="!!critique.observation"}
::: row
::: {.col-xs-12 .col-sm-10 .col-sm-offset-1}
::: {.p-slim .ng-isolate-scope marked="critique.observation"}
## Awesome {#awesome}

Thanks for providing the ideas for improvement.

## Suggestions {#suggestions}

An effective way to improve the performance of DDPG is by using
Prioritized Experience Replay. You should check this [github
repo](https://github.com/rlcode/per){target="_blank"} for a fast
implementation of Prioritized Experience Replay using a special data
structure Sum Tree.

Below is a comparison of DDPG with random sampling vs DDPG with PER for
the Reacher environment. It\'s quite evident how episode variation
decreased and performance improved.

[![PER vs Random
sampling.png](./Auditprojectsubmission_files/PER_vs_Random_sampling.png)](./Auditprojectsubmission_files/PER_vs_Random_sampling.png){target="_blank"}

------------------------------------------------------------------------

Please check the following resources also:

-   [Prioritized Experience
    Replay](https://arxiv.org/abs/1511.05952){target="_blank"}
-   [Distributed Prioritized Experience
    Replay](https://arxiv.org/abs/1803.00933){target="_blank"}
-   [Reinforcement Learning with Prediction-Based
    Rewards](https://openai.com/blog/reinforcement-learning-with-prediction-based-rewards/){target="_blank"}
-   [Proximal Policy
    Optimization](https://openai.com/blog/openai-baselines-ppo/){target="_blank"}
-   [OpenAI Five](https://openai.com/blog/openai-five/){target="_blank"}
-   [Curiosity-driven Exploration by Self-supervised
    Prediction](https://pathak22.github.io/noreward-rl/){target="_blank"}
:::
:::
:::
:::
:::
:::
:::

</div>

</div>
:::
:::

::: row
:::

::: row
:::

::: {.row .row-gap-small}
:::
:::

::: {.row .row-gap-small}
:::

::: {.row .row-gap-small}
::: {.col-xs-12 .text-center}
[![Download](./Auditprojectsubmission_files/download-icon.svg){.icon-medium} Download
Project](https://api.udacity.com/api/review/v1/submissions/3988302/archive){.wide-and-bold
.ng-binding .ng-scope ng-if="submission.archive_url" download=""}
:::
:::

::: {.row .row-gap-medium}
:::
:::

::: {.section .ng-hide ng-show="isCurrentTab('audit')"}
::: {.ng-isolate-scope audit-tab="" submission="submission" state="auditTabState"}
:::
:::
:::

<div>

::: {.row .row-gap-medium}
:::

::: {.section .ng-hide ng-show="isCurrentTab('plagiarismCase')"}
::: {.ng-isolate-scope plagiarism-case-tab="" submission="submission" state="plagiarismCaseTabState"}
:::
:::

</div>
:::
:::
:::
:::
:::

::: {.ng-scope ng-show="isCurrentTab('feedback') || isUngradeable()" style=""}
:::

::: {.row .row-gap-medium .ng-scope ng-if="hasViewedResubmissionVideo() && isResubmittable() || isSubmissionByCurrentUser()" style=""}
::: {.col-md-10 .col-md-offset-1 .text-center}
:::
:::

::: {.row .row-gap-medium .ng-scope}
:::

::: {.row .row-gap-medium .ng-scope ng-if="!currentProject.entitlement_required && isSubmissionByCurrentUser() && currentProject.nanodegree_key" style=""}
::: {.col-xs-12 .text-center}
[Return to Path]{.btn .btn-primary .ng-binding
ng-click="goToClassroomPath()"}
:::
:::

::: {.row .row-gap-medium .ng-scope}
:::

::: {#comment-wrapper .ng-scope}
:::
:::
:::
:::
:::
:::

::: {.ng-scope ng-include="main.pageContext.footerURL"}
::: container
:::
:::

::: {.hiddendiv .common}
:::
