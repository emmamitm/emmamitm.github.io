# PermutationsChecker
<img width="700" alt="image" src="https://github.com/user-attachments/assets/50e6d536-10dc-423d-8ae6-ebb0ce450da5" />

## Overview
PermutationsChecker is a C++ program that determines if a set of strings are permutations of each other. A permutation is a rearrangement of letters. The comparison is case sensitive and whitespace is significant. All the strings that belong to one set should be permutations of each other.

## Prerequisites
* C++ Compiler (g++, clang, etc.)

## Installation
Clone the repository and navigate into the directory:

##Building the Project
Assuming you have a C++ compiler installed, you can compile the program using the following command:

      g++ -o perm_checker main.cpp

This will create an executable named perm_checker.

##Usage:
After building the project you can run the program with the following command:

    ./perm_checker

The program currently checks if the strings {"abba", "bbaa", "aabb"} are permutations of each other, and prints the result to the command line.
