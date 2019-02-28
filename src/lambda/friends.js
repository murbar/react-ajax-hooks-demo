// let friends = [
//   {
//     id: 1,
//     name: 'Ben',
//     age: 30,
//     email: 'ben@lambdaschool.com'
//   },
//   {
//     id: 2,
//     name: 'Austen',
//     age: 32,
//     email: 'austen@lambdaschool.com'
//   },
//   {
//     id: 3,
//     name: 'Ryan',
//     age: 35,
//     email: 'ryan@lambdaschool.com'
//   },
//   {
//     id: 4,
//     name: 'Sean',
//     age: 35,
//     email: 'sean@lambdaschool.com'
//   },
//   {
//     id: 5,
//     name: 'Michelle',
//     age: 67,
//     email: 'michelle@gmail.com'
//   },
//   {
//     id: 6,
//     name: 'Luis',
//     age: 47,
//     email: 'luis@lambdaschool.com'
//   }
// ];

// const getFriends = () => {
//   return [
//     null,
//     {
//       statusCode: 200,
//       body: JSON.stringify(friends)
//     }
//   ];
// };

// const createFriend = friendData => {
//   const friend = { id: Date.now(), ...friendData };
//   friends = [...friends, friend];
//   return [
//     null,
//     {
//       statusCode: 201,
//       body: JSON.stringify(friends)
//     }
//   ];
// };

// const updateFriend = (id, friendData) => {
//   let friendIndex = friends.findIndex(friend => friend.id == id);

//   if (friendIndex >= 0) {
//     friends[friendIndex] = { ...friends[friendIndex], ...friendData };
//     return [
//       null,
//       {
//         statusCode: 200,
//         body: JSON.stringify(friends)
//       }
//     ];
//   } else {
//     return [
//       null,
//       {
//         statusCode: 404,
//         body: `The friend with id ${id} does not exist.`
//       }
//     ];
//   }
// };

// const deleteFriend = id => {
//   friends = friends.filter(friend => friend.id != id);
//   return [
//     null,
//     {
//       statusCode: 200,
//       body: JSON.stringify(friends)
//     }
//   ];
// };

// const badRequest = () => {
//   return [
//     null,
//     {
//       statusCode: 400,
//       body: 'Bad Request'
//     }
//   ];
// };

// const getId = urlPath => {
//   const id = parseInt(urlPath.split('/').pop());
//   return id || null;
// };

// const dispatch = (event) => {
//   const method = event.httpMethod;
//   const id = getId(event.path);
//   console.log(method, id);

//   const GET = method === 'GET' && !id;
//   const POST = method === 'POST' && !id;
//   const PUT = method === 'PUT' && id;
//   const DELETE = method === 'DELETE' && id;

//   if (GET) {
//     return getFriends();
//   } else if (POST) {
//     return createFriend(event.body);
//   } else if (PUT) {
//     return updateFriend(id, event.body);
//   } else if (DELETE) {
//     return deleteFriend(id);
//   } else {
//     return badRequest();
//   }
// }

// exports.handler = function(event, context, callback) {
//   // console.log(event);
//   callback(...dispatch(event));
// };

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let friends = [
  {
    id: 1,
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com'
  },
  {
    id: 2,
    name: 'Austen',
    age: 32,
    email: 'austen@lambdaschool.com'
  },
  {
    id: 3,
    name: 'Ryan',
    age: 35,
    email: 'ryan@lambdaschool.com'
  },
  {
    id: 4,
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com'
  },
  {
    id: 5,
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com'
  },
  {
    id: 6,
    name: 'Luis',
    age: 47,
    email: 'luis@lambdaschool.com'
  }
];

app.use(cors());
app.use(bodyParser.json());

app.get('/friends', (req, res) => {
  res.status(200).json(friends);
});

app.post('/friends', (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put('/friends/:id', (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res.status(404).json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete('/friends/:id', (req, res) => {
  friends = friends.filter(friend => friend.id != req.params.id);
  res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});

exports.handler = serverless(app);
