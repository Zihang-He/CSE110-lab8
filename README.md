# Lab 8 - Starter
Zihang He
<br>
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Manually run them locally before pushing code. Because this way we will always be testing, and fix the error before we push it to the repo, which ensures everything live on the repo is correct and bug-less. If collaborating with others, then other people won't use the wrong version of code. Also this way debugging is more easy, you can discover bugs locally and fix them on the spot, no need to push and pull and wait.

<br>
<br>
2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No.

<br>
<br>
3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No. Unit testing are for isolated components, but cannot test the interaction between components, which is important for the "message" feature.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes. Because the max message length can be determined on it's own, does not need to consider any other components, which is perfect for unit testing.