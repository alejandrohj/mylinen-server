# MyLinen

<br>

## Description
MyLinen is a website to manage the hotels linen and laundries


## User Stories

- **List**: Visitor can see all orders made to the laundry and manage them


## Backlog


<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | SplashPage           | public `<Route>`            | Instructions page                               |
| `/home`                   | Nav, categorybar, laundrylist, laundrycard     | public `<Route>`            | Home page                                        |
| `/sign-in`                   | Signin            | public `<Route>`            | Sign in page                                       |
| `/sign-up`                   | Signup             | public `<Route>`            | Sign up page                                        |
| `/cart`                   | Nav, categorybar, cartlist, cartcard     | private `<Route>`            | Cart page                                        |
| `/checkout`              | Nav, checkout           | private `<Route>`            | Checkout page                                        |
| `/admin/sign-in`                   | Signin         | public `<Route>`            | Admin sign in page                                        |
| `/admin`       | Adminnav, Addform,  adminlaundrylist, adminlaundrycard         | private `<Route>`            | Admin list page                                |          
| `/admin/delivery`                   | Adminnav, Orderlist, ordercard         | private `<Route>`            | Admin delivery page
| `/admin/delivery/:id/details`      | Adminnav, orderdetails         | private `<Route>`            | Delivery order details page          |                                   |


## Components

- Splashpage
- Nav
- Adminnav
- Categorybar
- Laundrylist
- Laundrycard
- Signup
- Signin
- Cartlist
- Cartcard
- Checkout
- Addform
- Adminlaundrylist
- Adminlaundrycard
- Orderlist
- Ordercard
- Orderdetails

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()

- Backlog Service
  - backlog.filter(type, status) // for different types of media and if they are done or not
  - backlog.detail(id)
  - backlog.add(id)
  - backlog.delete(id)
  - backlog.update(id)
  
<br>

# Server / Backend

## Models

User Model
```javascript
user = {
  userName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['Gobernante','empaquetador','admin','revisador','direccion']
  }
}
```

Complex Model
```javascript
complex = {
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String
  },
  linen:[
    {
      linenName: String,
      linenPrice : Number
    }
  ]
}
```

Order Model
```javascript
order = {
  complex: {
    type: complexId,
    ref: 'complex'
  },
  linenPendingToRewash:[
    {
      linenName: String,
      linenQuantity: Number,
    }
  ]
  linenOrdered: [
    {
      linenName: String,
      linenQuantity: Number,
      linenPrice: Number,
      subtotal: Number
    }
  ],
  allLinenSendedToHotel: [
    {
      linenName: String,
      linenQuantity: Number,
    }
  ],
  linenToRewash: [
    {
      linenName: String,
      linenQuantity: Number,
    }
  ],
  status: {
    type: String,
    enum:['ordering','ordered','picked','washing','washed','delivering','delivered','re-washings','closed']
  }
}
```

Delivery Model
```javascript
delivery = {
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  }
}
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/api/laundry`           | All laundryitems                | 200            | 404          | Gives all laundry items           |
| POST        | `/api/laundry/create`        | Create new laundryitem      | 201            | 404          | Checks if fields not empty (422)                            |
| PUT        | `/api/laundry/:id/edit`        | Edit laundryitem      | 201            | 404          | Checks if fields not empty (422)                            |
| DELETE        | `/api/laundry/:id/delete`        | Delete laundryitem      | 201            | 404          |                    |
| POST        | `/api/order`                | Posts order in db      | 201            | 404          | Checks if fields not empty (422)                            |
| GET        | `/api/orders`        | Get all orders      | 201            | 404          |                    |
| PUT        | `/api/order/:id/edit`        | Edit order      | 201            | 404          | Checks if fields not empty (422)                    |
| GET         | `/api/orders/availability`           | Gets availability   | 200            | 404          | Adjusts calendar with availability           |
| POST        | `/api/signin`        | {email, password}      | 201            | 404          | Checks if fields not empty (422)                            |
| POST        | `/api/signup`        | {username, email, password}      | 201            | 404          | Checks if fields not empty (422)                            |
| GET        | `/api/user`        | user      | 200            | 404          | Gets user                         |
| POST        | `/api/logout`        | Logout user      | 200            | 404          | Logout user                         |
| POST        | `/api/user/:id/edit`        | Edits user      | 201            | 404          | Checks if fields not empty (422)                            |
| POST        | `/api/admin/signup`        | {email, password}      | 201            | 404          | Checks if fields not empty (422)                            |

<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/W14CF29f/plaundry) 

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/llanting/plaundry-client)

[Server repository Link](https://github.com/llanting/plaundry-server)

[Deployed App Link](https://dashboard.heroku.com/apps/plaundry)

### Slides

The url to your presentation slides

[Slides Link]()