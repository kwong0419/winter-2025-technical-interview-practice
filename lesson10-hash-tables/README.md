# Lecture 2: Advanced Hash Table Operations

## Warm-up (10 minutes)

## Written Question (5 minutes)

What's better a hash table or an array? Explain.

It depends on the use case.
Arrays are better when:

- You need sequential storage with direct indexing
- Memory efficiency is crucial
- You need to perform frequent insertions and deletions at the end of the array

Hash tables are better when:

- You need to store and retrieve data based on keys
- You need fast lookups by key
- You need to handle collisions efficiently
- You need to perform frequent insertions and deletions at arbitrary positions

## Lecture Content (20 minutes)

Dive deeper into hash table operations and performance tuning:

### Load Factor:

Definition and its impact on performance. Explain when to resize a hash table.

### Resizing a Hash Table:

Discuss how and why a hash table might need resizing, including what rehashing involves.

### Complexity Analysis:

Discuss the average and worst-case time complexities for insertions, deletions, and searches.

### Advanced Collision Resolution Techniques:

Brief overview of techniques like linear probing, quadratic probing, and double hashing.

## Problem Solving (35 minutes)

Challenge students with a task to implement a hash table that resizes itself based on the load factor. This will involve calculating the load factor and writing a rehash function.

### Recap (15 minutes)

Recap the day’s lesson focusing on why managing the load factor and choosing the right collision resolution technique can drastically affect the performance of a hash table.

### Additional Resources

- https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
- https://www.codewars.com/kata/554ca54ffa7d91b236000023
