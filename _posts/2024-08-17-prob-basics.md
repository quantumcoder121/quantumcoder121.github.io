---
layout: post
title: Probability - Basics
date: 2024-08-18
description: Basics of Probability Theory required for Machine Learning
tags: mathematics probability
categories: math-for-ml probability-primer
giscus_comments: false
related_posts: true
---

## What is Probability?

From the name itself, we can deduce that _Probability_ is the chance of something taking place. Essentially, probability measures this chance of something taking place in a numerical manner and quantifies this chance. Now, let's look at a more formal definition.

### The Probability Function

Consider we're performing an experiment which can have multiple outcomes. We call the set of all such outcomes as our _Sample Space_ $$S$$ as any outcome would be "sampled" (or taken) from this set. Further an _Event_ $$E$$ is a set of some outcomes of the experiment. Thus, any event $$E$$ would be a subset of $$S$$ ($$E \subset S$$) and we denote the set of all such subsets as $$F$$. Now, a _Probability Function_ $$P[\cdot]$$ is a function from $$F$$ to $$[0, 1]$$ that satisfies the following conditions.

- $$P[S] = 1$$ (Probability of entire sample space is $$1$$)
- $$P[\Phi] = 0$$ ($$\Phi$$ is the _Null Set_ or the set containing nothing)
- If two events $$A$$ and $$B$$ have no common outcomes (i.e. $$A \cap B = \Phi$$ or "disjoint" events) then $$P[A \cup B] = P[A] + P[B]$$

> ##### *NOTE*
> More generally, $$F$$ is a [$$\sigma$$-field](https://en.wikipedia.org/wiki/%CE%A3-algebra) of $$S$$

The value of the probability function at an event $$E$$ denoted as $$P[E]$$ will be the probability of event $$E$$ taking place. The more the value of $$P[E]$$ the more likely is the event $$E$$. 

## Some Immediate Results

These are some immediate results that follow from the previous section and we'll need later.

> ##### *NOTE*
> Proofs are left as an (optional) exercise for the reader.

- $$P[\cup_{i = 1}^{n} A_i] = \Sigma_{i = 1}^{n} P[A_i]$$ for disjoint events $$A_i$$ (i.e. $$A_i \cap A_j = \Phi$$ $$\forall i, j \leq n$$ and $$i \ne j$$). This is an extension of the property in previous section to any number of disjoint events and not just two disjoint events.

- $$P[A] + P[A^{c}] = 1$$ where $$A^{c} = S - A$$ (set of all elements that are in $$S$$ but not in $$A$$). $$P[A^{c}]$$ is also the probability of an event $$A$$ __not__ occuring.

- $$P[A \cup B] = P[A] + P[B] - P[A \cap B]$$ (a particularly useful result)

## Some Basic Concepts in Probability

Now, we'll review some basic concepts in probability that would be useful later

### Independence of Two Events

> ##### *DEFINITION*
> We say that two events $$A$$ and $$B$$ are independent (denoted by $$A \perp\!\!\!\perp B$$) if $$P[A \cap B] = P[A] \cdot P[B]$$

### Conditional Probability

We denote the (_conditional_) probability of an event $$A$$ occuring given that an event $$B$$ has already occured by $$P[A \| B]$$. It is clear that

$$
P[A \| B] = \frac{P[A \cap B]}{P[B]}
$$

Further, if two events $$A$$ and $$B$$ are independent, then

$$
P[A \| B] = \frac{P[A \cap B]}{P[B]} = \frac{P[A] \cdot P[B]}{P[B]} = P[A]
$$

and similarly, $$P[B \| A] = P[B]$$ (note the order of $$A$$ and $$B$$)

### Conditional Independence

> ##### *DEFINITION*
> We say that two events $$A$$ and $$B$$ are (_conditionally_) independent given that an event $$C$$ has occured (denoted by $$(A \perp\!\!\!\perp B) \| C$$) if $$P[(A \cap B) \| C] = P[A \| C] \cdot P[B \| C]$$

## Bayes' Theorem

Now we come to a very useful result in probability that was discovered by [Thomas Bayes](https://en.wikipedia.org/wiki/Thomas_Bayes). As usual, the proof is left as an (optional) exercise for the reader.

> ##### *THOEREM*
> For two events $$A$$ and $$B$$, $$P[A \| B] = \frac{P[B \| A] \cdot P[A]}{P[B]}$$