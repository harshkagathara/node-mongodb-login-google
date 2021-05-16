# node-mongodb-login-google
 Authenticate Node.js with Google using Auth0

<b>Note</b> : Create a Google client ID and client secret
<br>
We can create a client ID and client secret using its Google API Console. You need to follow below steps once you open Google API Console
<br>
From the project drop-down, select an existing project, or create a new one by selecting Create a new project<br>
In the sidebar under "APIs & Services", select Credentials<br>
In the Credentials tab, select the Create credentials drop-down list, and choose OAuth client ID.<br>
Under Application type, select Web application.<br>
In Authorized redirect URI use http://localhost:3000/google/callback<br>
Press the Create button and copy the generated client ID and client secret snd pest .env file<br>
<br>

<b>Login Page :- /b>
![image](https://user-images.githubusercontent.com/49555360/118383854-5ae30180-b61f-11eb-98f3-61fb3e1ccffd.png)
