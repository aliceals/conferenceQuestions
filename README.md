# Conference-App
App to help ask questions and poll answers at conferences

The idea for this app came from the annoyance at asking questions at big conferences, lectures or meeting of 100+ people in the audience
people would either shy away from asking a question they were desperate to know the answer to or if they did brave up and ask the 
speaker would have to drag the microphone all the way to them or struggle to hear them without one. 

The MVP of this app will give the audience members an opportunity to ask questions to the speaker and for it to show up on the speakers 
display

From the MVP the stretch goals include
- The ability for the speaker to order, group, star or delete any questions
- The ability for the speaker to be able to ask a poll to the audience and collect and collate those results
- The ability for the audience to turn their devices into a microphone which will get projected out of the speakers system 
- The ability for the speaker to upload resources they discuss and recorded talk

# Stack
I will begin this app with the current stack that I am familiar with React/Redux on the frontend and then Nodejs on the backend.
Once an MVP has been hit I will take the opportunity to learn React Hooks and then .NET for the backend and change it over to that as I believe the best 
way to learn a new language is by doing and by doing projects you are already familiar with

# MVP 

The audience can ask a question - POST /messages
The speaker can list the questions - GET /messages

### Routes
Post /messages
Get /messages

### Database 

|Questions| |
|------|------|
|id|integer|
|question_string|string|
|date|timestamp|

# v2 

The speaker can create a new meeting/conference room where they can give the ID to their audience to enter the same room as them. A GUID will be generated and be the unique conference room number

### Routes
Get - /id/messages
Post - /id/messages

When a speaker creates a new room it generates the new guid and redirects(302) to /id(from the guid)/messages

The speaker can supply the audience the number and when they input it it takes them to /id/messages

# v3

The speaker and the audience have different views

/id/audience
/id/speaker

In the audiences view they can just ask the question
In the speaker view they can see all the questions and upvote, delete and star any

# v4

The speaker can ask the audience a question which will poll the audiences answers

Get - /id/poll
Post - /id/poll

### Database 

| Poll  |  |
| ------------- | ------------- |
| id   | integer  |
| poll_string  | string  |
| date  | timestamp  |


|Poll_options| |
|--|--|
|poll_option_id|integer|
|poll_id|integer|
|description|timestamp|

|Answers| |
|--|--|
|Answers_id|integer|
|poll_id|integer|
|poll_option_id|integer|

# v5 and beyond
- turn the audiences phones into microphones
- space for the audience to save notes from the speaker
- speaker adds resources and links for after reading for audience




