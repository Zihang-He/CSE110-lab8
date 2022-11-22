# Lab 8 - Starter
Zihang He
<br>
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed. Because automated testing is working with scripts, "automatically test your new and existing software based on certain events, i.e. code getting pushed to the remote repository". In this case, pushing to the repo is the action that triggers the automated testing. Running it manually would miss the whole point of automated testing, and run them after all development is completed can miss a lot of errors.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No. Unit testing are for isolated components, but cannot test the interaction between components, which is important for the "message" feature.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes. Because the max message length can be determined on it's own, does not need to consider any other components, which is perfect for unit testing.