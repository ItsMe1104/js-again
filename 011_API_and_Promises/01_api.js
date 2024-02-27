//API is nothing but the talking languagebetween two systems.
//It can be between frontend and backend.
//It can be between server and database, etc
//It can also be between two languages
/*
States in AJAX :-

0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.
*/


const xhr = new XMLHttpRequest();
xhr.open('GET',)