# DOM - Document Object Model

html
head
title
meta
style
script
body
div
h1
p
ul
li
a

# CSSOM - CSS Object Model

# Render Tree => DOM + CSSOM

# Layout / Reflow process

# Paint / Rastering process

# Composite

Overview of Render problem & Introduction to SPA

# ECMAScript ES2015/ ES6 Features

Let & const : limited to the block; Block level scoping; (var keyword : scope was function scope);

> restricts the scope of variables to the nearest block
> 'const' for declaring the constants
> 'let' for other variables

Object literals & destructuring

Arrow functions =>

Classes

For of loop, array functions (map & filter)

Default, rest, spread & template literals

Promises

npm fundamentals
modules
NPM & modules

# Data Types in JavaScript

- Primitive Types : Number, String, Boolean
- Reference Types : Array, Object, Function, Date etc

# let /const : restricts the variable to scope to the nearest block

# Node installer

- NPM : to manage project dependencies
- NRE : to execute JavaScript at Server side
- Native Modules : provides essential server side features

# NPM Commands

- npm init [-y] > to generate package.json file
- npm install <package-name> [-g | -D]
- npm uninstall <package-name>
- npm outdated
- npm update
- npm publish
- npm config
- npm search

# Atomic Design in Web -

- Atom : eg. a button, an input element etc
- Molecules : comb of Atoms eg. search bar
- Organism : comb of molecules eg. a form
- Template : comb of organism eg. multiple card
- Page: complete page

# Thinking in React way

> npm i create-react-app -g
> create-react-app <app-name>

> npx create-react-app <app-name>

> npx create-react-app frontend

> cd frontend
> npm run start

- State
- Lifting up the state
- Life cycle : 3 phases Mounting , Updating, Unmounting
- Forms - Controlled and uncontrolled (Ref)
- Form element validation & error message
- PureComponent
- Default Props
- Wrapper Component / UI Component

- Context API
- Hooks (functional component)
- React Routing

# useEffect(callbackFn)

- cb will run at initial rendering of component
- cb will re-run for each re-rendering of component eg. State Change

# useEffect(callbackFn , []) - componentDidMount

- cb will run ONLY at initial rendering of component (only one time)

# useEffect(callbackFn , [Dependencies]) - componentDidUpdate

- cb will run at initial rendering of component
- cb will re-run whenever the mentioned dependency will change

# useEffect(callbackFn => cleanUpFn , [Dependencies])

- cb will run at initial rendering of component
- cb will re-run whenever the mentioned dependency will change
- before the cb re-run, the cleanUpFn will run
- cleanUpFn will also run when component is about to unload (componentWillUnmount)

# Routing

- BrowserRouter
- Routes
- Route
- Link
- useNavigate() : programatically navigating the user
- useLocation() : used for accessing the URL location; Query Paramters
- useParams() : provide the access of route parameter.
- Outlet : provide the space to load child component UI

http://localhost:3000/products/p001 --> Route Parameters / dynamic parameter
http://localhost:3000/products?key=value --> querystring ; additional info to URL

ProductList -> ProductItem

# React Router - react-router-dom

# npm run build

# Commands to Deploy on Firebase

- npm i firebase-tools -g
- firebase login
- firebase init
- firebase deploy
