# Lecture 1: Introduction to Hash Tables

## Warm-up (10 minutes)

## Written Question (5 minutes)

Imagine you were charged with building a mail delivery robot for you office. The office is composed of cubicles that are all the same width and depth. The cubicles are arranged in rows and rows are evenly spaced apart. How might you instruct the robot to deliver mail to a cubicle by looking at a number on the package?

Since the cubicles act as a grid/matrix, we can use the row and column to deliver the mail to the correct cubicle.
To find the row, we use the package number divided (/) by the number of cubes per row - rounding down to the nearest integer.
To find the column, we use the package number modulo (%) the number of cubes per row

## Lecture Content (20 minutes)

Introduce the concept of hash tables, explaining how they use a hash function to compute an index into an array in which an element will be stored or searched. Cover the basics:

### Definition and Use:

Explain what hash tables are and why they are used.

### Components of Hash Tables:

Discuss keys, values, hash functions, buckets, and collisions.

### Hash Function:

Describe how keys are converted into array indices.

### Handling Collisions:

Briefly introduce methods like chaining and open addressing.

## Problem Solving (35 minutes)

## Recap (15 minutes)

Review key concepts and answer any questions. Summarize how hash tables operate efficiently and why choosing a good hash function is critical to minimize collisions.

## Additional Resources

#### Legendary Author of "Cracking the Coding Interview," Gayle Lackman McDowel, Breaks It Down

- Video: "Data Structures: Hash Tables" https://youtu.be/shs0KM3wKv8?si=_vsP1RNe22P-Zk3U

#### Practice Problems

- https://www.codewars.com/kata/5533c2a50c4fea6832000101/javascript
- https://leetcode.com/problems/ransom-note/description/?envType=problem-list-v2&envId=hash-table
