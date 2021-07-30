<h1 align="center"><b>
Nest API
</b></h1>


<!-- ABOUT THE PROJECT -->
## About The Project

Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).
### API Description 
A CRUD API developed in NodeJs using the Nest framework. 
#### Routes

| Method | Endpoint      | Body                                  | Description                                   |
| ------ | ------------- | ------------------------------------- | --------------------------------------------- |
| GET    | /             | -                                     | Get all items                                 |
| GET    | /:id          | -                                     | Get item with **id**                          |
| POST   | /             | { name, description, quantity }       | Add an item                                   |
| PUT    | /:id          | { name, description, quantity }       | Update an item with **id**                    |
| DELETE | /:id          | -                                     | To delete an item with **id**                 |

---
<br>
<!-- GETTING STARTED -->

## Getting Started

### Steps to run:

1. Clone the repo
```sh
git clone https://github.com/RishabhKodes/Nest_api.git
```
2. Goto root directory
```sh
cd Nest_api
```
3. Install NPM packages
```sh
npm install
```
4. Run using command:
```sh
# development
$ npm run start

# run in watch mode
$ npm run start:dev

# run in production mode
$ npm run start:prod
```
5. Visit Link
```sh
https://localhost:3000
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact Me

**Rishabh Bhandari -** [LinkedIn](https://www.linkedin.com/in/rishabh-bhandari-ba5778168/)
[Email](rishabhbhandari6@gmail.com)

**Project Link -** [GitHub](https://github.com/RishabhKodes/Login-System)

