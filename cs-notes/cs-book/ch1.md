# Programming and Problem Solving

Computer - A programmable electronic device that can store, retrieve, and process data.

## What Is Programming?

Programming - Developing a set of instructions for a computer to follow to solve a problem.

Program - A set of instructions for a computer to follow.

## How To Write a Program?

### Three Phases:

Problem-solving Phase:

- Understand the Problem and expected output.
- Develop an algorithm.
- Test algorithm.

Implementation Phase:

- Translate algorithm to program language.
- Test program.

Maintenance Phase:

- Use program.
- Update program when bugs/changes arise.

## What Is an Algorithm?

Algorithm - Set of instructions to solve a problem in a finite amount of time.

## What Is a Programming Language?

Programming language - An english-like language consisting of symbols and rules to code algorithms into programs.

Documentation - Text and comments to help others understand your program.

Data - Information in a form the computer/program can use.

## Theoretical Foundations

### Binary Representations of Data

Bit - AKA binary digit. Represents a single 1 or 0.

Byte - Represents group of 8 bits.

Short word - 16-Bit.

Long word - 64-bit.

ASCII - American Standard Code for Information Interchange.

Unicode - New information interchange system--includes more than the english language.

- Single characters are typically represented as 1 or 2 bytes.
- Data is represented in computers as electronic pulses.
- Binary(base-two) is a good way to represent data in computers because it is either on(1) or off(0), like electricity.
- Most programming languages use ASCII to represent characters as bytes.
- Unicode is represented by storing 2 bytes of data in memory.

---

## How Does a Computer Run a Program?

Machine code - Binary coded instructions.

Assembly language - A step up from machine code -- instructions represented as mnemonics, or easy to remember letters.

Assembler - Program that translates assembly language into machine code.

Compiler - Program that translates high level languages into machine code.

Source program - Program/data to be translated by compiler.

Object program - Source program translated to machine code.

Compilation vs. Interpretation - The former translates entire program into mc before execting, while the latter translates line-by-line.

Control Structures - Rules that determine the order in which statements (instructions) are executed.

- All data within a computer's memory exists as binary codes.
- Instructions and data are represented the same -- this allows computers to run their own instructions as data.
- High-level standardized languages are portable, whereas assembly or machine language is not because each computer has its own machine language.
- During execution the compiled code is loaded into memory and ran.

### Types of control structures:

- Sequential
- Conditional
- Repetitive (loop)
- Sub-program - breaks program into smaller units.

---

## What's Inside the Computer?

CPU - Follows instructions. Consists of logic unit and control unit.

Hardware - Physical components of computers.

Software - Programs that allow hardware to operate.

System software - Simplify user/computer interaction (OS, compiler, etc).

Operating system - Part of system software. Oversees all computer resources. Can call compiler, execute object programs (machine code).

Editor - Program that allows changes to be made to programs and data.

Network - Series of connected computers.

LAN (local area network) - Series of computers connected by wire or wireless router. Computers must be close together.

WAN - Computers can be connected further apart geographically and communicat through telephone wires, fiber optic cables, etc.

WWW - Linked computers together and allowed support for web pages.

Clock - An electrical circuit that fires pulses to coordinate other components within the computer. Speed is measured in GHz.

Software engineering - The process of creating correct/error free software.

- Most known WAN is the internet.

- Data from disks is captured using magnetic read/write head. It finds magnetized spots on spinning disk.

- Data from flash memory is stored in silicon chips with special switches that lock into place storing either 1 or 0... even when not connected. Good for backing up data.

### Computers Constist of 6 Main Components:

- Memory unit - Constists of ordered cells with addresses (memory cells/locations) in which data can be extracted and stored.
- Logic unit - Performs arithmetic and comparisons.
- Control unit - Handles order in which components perform program instructions.
- Input device - Accepts data from devices like keyboards.
- Output device - Outputs data to things like monitors.
- Auxillary storage - Holds coded data for computer until we want data (flash memory/disc drives).

### Fetch Execute Cycle (occurs when a program is executing):

- CPU grabs machine code from memory
- Instructions are translated into control signals
- Control signals tell which unit to execute instruction
- Repeat

## Problem Solving Techniques

### Ask questions

- What does data look like?
- What is the input?
- What is desired output?
- How much data is there?
- How many times will the process be repeated?
- Any special error conditions?
- How will I know when i've processed all the data?

### Look for Familiarity

- Don't reinvent the wheel
- Use prior solutions

### Solve by Analogy

- Think about how you solved similar problems in past... even non-computer-oriented problems.
- Don't worry about different details as you can later solve for those.
- Analogies give you a good place to start.

### Means-Ends Analysis

- Find your end goal and devise intermediate plans of achieving it.
- Once you've broken it down, you find ways to achive those intermediate plans.

### Divide and Conquer

- Break large problems into smaller, solvable problems.

### Building Block Approach

- You look at the big problem and divide it into smaller problems for which solutions already exist.

### Merging Solutions

- Whenever solutions to sub-problems duplicate steps, combine them ex. (for loop with a sum variable--keeps track of sum variable and count variable in one go).

### Mental Blocks: Fear of Starting

- Write the problem down on paper to understand it (paraphrase).
- You can focus on subparts once problem is broken down.
- Breaking down helps to also pinpoint things that are unclear so you can gather more info.
- Most mental blocks are caused by not understanding the problem.

### Algorithmic Problem Solving

- Remember the computer can only do certain tasks (think control structures).
- Steps in algorithms may be trial-and-error.
