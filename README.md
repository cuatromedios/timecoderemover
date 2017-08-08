# Timecodes Remover

Reads several .txt or .str files, removes time codes from a file used as subtitles and saves new files. 

### Installation

1. Install node if not yet installed in your computer (https://nodejs.org/en/)
1. Change to the Timecodes Remover directory
1. Put your .txt or .str files in `sources directory
1. Run in command line `node removetimecodes`

### Example
##### Source file
```text
00:00:20.125,00:00:21.417
How many cows do I have?
`
00:00:21.417,00:00:23.542
How many steps 
to get to a place?
```

##### Processed file
```text
How many cows do I have?
How many steps to get to a place?
```