# node-mongodb-login-google
 Authenticate Node.js with Google using Auth0

<b>Note</b> : Create a Google client ID and client secret
<br>
We can create a client ID and client secret using its Google API Console. You need to follow below steps once you open Google API Console
<br>
From the project drop-down, select an existing project, or create a new one by selecting Create a new project
In the sidebar under "APIs & Services", select Credentials
In the Credentials tab, select the Create credentials drop-down list, and choose OAuth client ID.
Under Application type, select Web application.
In Authorized redirect URI use http://localhost:3000/google/callback
Press the Create button and copy the generated client ID and client secret snd pest .env file
<br>
