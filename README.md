# _PING PONG_

## CONTRIBUTORS: **JUSTIN GOMEZ**

### PROJECT DESCRIPTION:
1. THE USER INPUTS A NUMBER AND THE PROGRAM RETURNS NUMBERS STARTING FROM 1 TO THE USER'S INPUT.
2. ANY NUMBER DIVISIBLE BY 15, THE PROGRAM REPLACES THAT NUMBER AND RETURNS "PING-PONG"
3. ANY NUMBER DIVISIBLE BY 5, THE PROGRAM REPLACES THAT NUMBER AND RETURNS "PONG"
4. ANY NUMBER DIVISIBLE BY 3, THE PROGRAM REPLACES THAT NUMBER AND RETURNS "PING"

# SPECS:

| Objective | Implementation | Status |
|:-------------:|:-------------:|:-------------:|
| THE PROGRAM TAKES IN THE USER'S-INPUT AS NUMBER AND STORES IT INTO A VARIABLE WHEN THE USER SUBMITS THE FORM | USER-INPUT: 15 | EXAMPLE: VAR USER-INPUT = 15 |
| THE PROGRAM OUTPUTS USER'S-INPUT AND APPENDS THE RESULT TO A DIV TO BE DISPLAYED ON THE VIEW-PORT | USER-INPUT: 15 | EXAMPLE: VAR USER-INPUT = 15 |
| THE PROGRAM PUSHES THE USER'S INPUT INTO AN EMPTY ARRAY | EXAMPLE ARRAY: [] | EXAMPLE ARRAY: [USER-INPUT] |
| THE PROGRAM LOOPS THROUGH THE ARRAY AND ADDS THE USER'S-INPUT SUBTRACTED BY ONE TO THE BEGINNING OF THE ARRAY UNTIL THE USER'S-INPUT EQUALS ONE | EXAMPLE LOOP: [1 <-- 2<-- <-- 3 <-- 4 <-- 5] | EXAMPLE LOOPED ARRAY: [1, 2, 3, 4, 5] :ASSUMING THE USER'S-INPUT IS 5 |
| THE PROGRAM REPLACES EVERY NUMBER DIVISIBLE BY 15 WITH THE STRING "PING-PONG" | EXAMPLE: [1,..., "PONG" <-- 16 <--- 17 < -- 18]  | EXAMPLE ARRAY: [14,"PING-PONG", 16, 17] |
| THE PROGRAM REPLACES EVERY NUMBER DIVISIBLE BY 5 WITH THE STRING "PONG" | EXAMPLE: [1,... "PONG" <-- 6 <--- 7 < -- 8]  | EXAMPLE ARRAY: [4,"PONG", 6, 7] |
| THE PROGRAM REPLACES EVERY NUMBER DIVISIBLE BY 3 WITH THE STRING "PING" | EXAMPLE: [1 <-- 2 <-- "PING" <-- 4 <--- 5 < -- 6]  | EXAMPLE ARRAY: [2,"PING", 4, 5] |
| THE PROGRAM RESETS THE ARRAY TO RETURN CORRECT OUTPUT TO DISPLAY ON THE VIEW-PORT AFTER USER INPUTS DIFFERENT RESULT | EXAMPLE OUTPUT 4: [1, 2, "PING", 4 ] | EXAMPLE OUTPUT 2: 5 [1, 2,"PING", 4, 5, ] |
# COMPLETE SET-UP INSTRUCTIONS
1. DOWNLOAD OR CLONE FROM REPOSITORY [Click here](https://github.com/ProgramJustin/PingPong)...
2. OPEN UP FOLDER _PING-PONG_
3. DOUBLE-CLICK **index.html**

* Copyright © 2017, Justin Gomez
